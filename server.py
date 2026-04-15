import base64
import binascii
import hmac
import json
import os
import re
from datetime import date, timedelta
from functools import lru_cache
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

import mysql.connector
from mysql.connector import pooling


ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "4180"))
ADMIN_USER = os.environ.get("SBTI_ADMIN_USER", "").strip()
ADMIN_PASSWORD = os.environ.get("SBTI_ADMIN_PASSWORD", "").strip()
ADMIN_REALM = "SBTI Admin"

DB_POOL = pooling.MySQLConnectionPool(
    pool_name="sbti_pool",
    pool_size=5,
    host=os.environ.get("SBTI_DB_HOST", "127.0.0.1"),
    port=int(os.environ.get("SBTI_DB_PORT", "3306")),
    user=os.environ.get("SBTI_DB_USER", "sbti"),
    password=os.environ.get("SBTI_DB_PASSWORD", ""),
    database=os.environ.get("SBTI_DB_NAME", "sbti"),
)


def init_db():
    conn = DB_POOL.get_connection()
    try:
        cur = conn.cursor()
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS result_stats (
                type_code VARCHAR(32) PRIMARY KEY,
                count_value BIGINT NOT NULL DEFAULT 0
            )
            """
        )
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS result_events (
                id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                type_code VARCHAR(32) NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                KEY idx_result_events_created_at (created_at),
                KEY idx_result_events_type_created_at (type_code, created_at)
            )
            """
        )
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS stats_totals (
                stats_key VARCHAR(32) PRIMARY KEY,
                count_value BIGINT NOT NULL DEFAULT 0
            )
            """
        )
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS stats_daily_totals (
                bucket_date DATE PRIMARY KEY,
                count_value BIGINT NOT NULL DEFAULT 0
            )
            """
        )
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS stats_daily_by_type (
                bucket_date DATE NOT NULL,
                type_code VARCHAR(32) NOT NULL,
                count_value BIGINT NOT NULL DEFAULT 0,
                PRIMARY KEY (bucket_date, type_code),
                KEY idx_stats_daily_by_type_type_date (type_code, bucket_date)
            )
            """
        )
        cur.execute(
            """
            INSERT INTO stats_totals (stats_key, count_value)
            VALUES ('tracked_events', 0)
            ON DUPLICATE KEY UPDATE count_value = count_value
            """
        )
        backfill_aggregate_tables(cur)
        conn.commit()
    finally:
        conn.close()


@lru_cache(maxsize=1)
def load_type_catalog():
    source = (ROOT / "main.js").read_text(encoding="utf-8")
    library = json.loads(extract_js_object(source, "const TYPE_LIBRARY = "))

    catalog = []
    for code, item in library.items():
        catalog.append(
            {
                "code": code,
                "name": item.get("cn", code),
                "intro": item.get("intro", ""),
                "imagePath": get_type_image_path(code),
            }
        )
    return catalog


def extract_js_object(source: str, marker: str):
    start = source.index(marker) + len(marker)
    if source[start] != "{":
        raise ValueError(f"Expected object after marker: {marker}")

    depth = 0
    in_string = False
    escaped = False
    quote = ""

    for index in range(start, len(source)):
        char = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                in_string = False
            continue

        if char in {'"', "'"}:
            in_string = True
            quote = char
            continue

        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return source[start : index + 1]

    raise ValueError(f"Failed to extract object for marker: {marker}")


def code_to_asset_name(code: str):
    normalized = re.sub(r"[^a-z0-9]+", "-", code.lower()).strip("-")
    return normalized or "type"


def get_type_image_path(code: str):
    asset_name = code_to_asset_name(code)
    for extension in ("png", "jpg", "jpeg", "webp"):
        target = ROOT / "assets" / "types" / f"{asset_name}.{extension}"
        if target.exists():
            return f"./assets/types/{asset_name}.{extension}"
    return ""


def admin_is_configured():
    return bool(ADMIN_USER and ADMIN_PASSWORD)


def verify_admin_auth(header_value: str):
    if not admin_is_configured():
        return False
    if not header_value or not header_value.startswith("Basic "):
        return False

    token = header_value.split(" ", 1)[1].strip()
    try:
        decoded = base64.b64decode(token).decode("utf-8")
    except (binascii.Error, UnicodeDecodeError):
        return False

    if ":" not in decoded:
        return False

    username, password = decoded.split(":", 1)
    return hmac.compare_digest(username, ADMIN_USER) and hmac.compare_digest(password, ADMIN_PASSWORD)


def fetch_summary():
    conn = DB_POOL.get_connection()
    try:
        cur = conn.cursor(dictionary=True)
        cur.execute("SELECT type_code, count_value FROM result_stats")
        by_type = {row["type_code"]: int(row["count_value"]) for row in cur.fetchall()}
        total = sum(by_type.values())
        return {"totalCompleted": total, "byType": by_type}
    finally:
        conn.close()


def build_type_entries(by_type, today_by_type=None, last_7_days_by_type=None):
    today_by_type = today_by_type or {}
    last_7_days_by_type = last_7_days_by_type or {}
    entries = []
    for item in load_type_catalog():
        code = item["code"]
        entries.append(
            {
                "code": code,
                "name": item["name"],
                "intro": item["intro"],
                "imagePath": item["imagePath"],
                "count": int(by_type.get(code, 0)),
                "todayCount": int(today_by_type.get(code, 0)),
                "last7DaysCount": int(last_7_days_by_type.get(code, 0)),
            }
        )
    return entries


def fetch_distribution():
    summary = fetch_summary()
    entries = build_type_entries(summary["byType"])
    entries.sort(key=lambda item: (-item["count"], item["code"]))
    return {"totalCompleted": summary["totalCompleted"], "distribution": entries}


def fetch_admin_overview():
    summary = fetch_summary()
    conn = DB_POOL.get_connection()
    try:
        cur = conn.cursor(dictionary=True)
        cur.execute(
            """
            SELECT
                COALESCE(MAX(CASE WHEN stats_key = 'tracked_events' THEN count_value END), 0) AS tracked_count,
                COALESCE(MAX(CASE WHEN stats_key = 'latest_event_id' THEN count_value END), 0) AS latest_event_id
            FROM stats_totals
            """
        )
        metrics = cur.fetchone()
        tracked_count = int(metrics["tracked_count"])

        cur.execute(
            """
            SELECT bucket_date, count_value
            FROM stats_daily_totals
            WHERE bucket_date >= CURRENT_DATE() - INTERVAL 13 DAY
            ORDER BY bucket_date ASC
            """
        )
        trend_map = {row["bucket_date"].isoformat(): int(row["count_value"]) for row in cur.fetchall()}

        trend = []
        for offset in range(13, -1, -1):
            bucket = date.today() - timedelta(days=offset)
            trend.append({"date": bucket.isoformat(), "count": int(trend_map.get(bucket.isoformat(), 0))})

        cur.execute(
            """
            SELECT type_code, created_at
            FROM result_events
            ORDER BY id DESC
            LIMIT 20
            """
        )
        catalog = {item["code"]: item for item in load_type_catalog()}
        latest = []
        for row in cur.fetchall():
            meta = catalog.get(row["type_code"], {})
            latest.append(
                {
                    "typeCode": row["type_code"],
                    "typeName": meta.get("name", row["type_code"]),
                    "imagePath": meta.get("imagePath", ""),
                    "createdAt": row["created_at"].isoformat(),
                }
            )

        cur.execute(
            """
            SELECT type_code, count_value
            FROM stats_daily_by_type
            WHERE bucket_date = CURRENT_DATE()
            """
        )
        today_by_type = {row["type_code"]: int(row["count_value"]) for row in cur.fetchall()}

        cur.execute(
            """
            SELECT type_code, SUM(count_value) AS count_value
            FROM stats_daily_by_type
            WHERE bucket_date >= CURRENT_DATE() - INTERVAL 6 DAY
            GROUP BY type_code
            """
        )
        last_7_days_by_type = {row["type_code"]: int(row["count_value"]) for row in cur.fetchall()}

        today_completed = int(trend_map.get(date.today().isoformat(), 0))
        yesterday_completed = int(trend_map.get((date.today() - timedelta(days=1)).isoformat(), 0))
        last_7_days_completed = sum(
            int(trend_map.get((date.today() - timedelta(days=offset)).isoformat(), 0)) for offset in range(0, 7)
        )
        cur.execute(
            """
            SELECT COUNT(*) AS count_value
            FROM result_events
            WHERE created_at >= NOW() - INTERVAL 24 HOUR
            """
        )
        last_24_hours_completed = int(cur.fetchone()["count_value"])
    finally:
        conn.close()

    type_breakdown = build_type_entries(summary["byType"], today_by_type, last_7_days_by_type)
    type_breakdown.sort(
        key=lambda item: (-item["todayCount"], -item["last7DaysCount"], -item["count"], item["code"])
    )

    historical_baseline = max(summary["totalCompleted"] - tracked_count, 0)
    return {
        "totalCompleted": summary["totalCompleted"],
        "todayCompleted": today_completed,
        "yesterdayCompleted": yesterday_completed,
        "last7DaysCompleted": last_7_days_completed,
        "last24HoursCompleted": last_24_hours_completed,
        "trackedEventCount": tracked_count,
        "historicalBaselineCount": historical_baseline,
        "hasHistoricalBaseline": historical_baseline > 0,
        "trend": trend,
        "latestCompletions": latest,
        "typeBreakdown": type_breakdown,
    }


def record_type(type_code: str):
    conn = DB_POOL.get_connection()
    try:
        cur = conn.cursor()
        cur.execute("SELECT CURRENT_DATE()")
        bucket_date = cur.fetchone()[0]
        cur.execute(
            """
            INSERT INTO result_stats (type_code, count_value)
            VALUES (%s, 1)
            ON DUPLICATE KEY UPDATE count_value = count_value + 1
            """,
            (type_code,),
        )
        cur.execute("INSERT INTO result_events (type_code) VALUES (%s)", (type_code,))
        event_id = cur.lastrowid
        cur.execute(
            """
            INSERT INTO stats_totals (stats_key, count_value)
            VALUES ('tracked_events', 1)
            ON DUPLICATE KEY UPDATE count_value = count_value + 1
            """
        )
        cur.execute(
            """
            INSERT INTO stats_totals (stats_key, count_value)
            VALUES ('latest_event_id', %s)
            ON DUPLICATE KEY UPDATE count_value = GREATEST(count_value, VALUES(count_value))
            """,
            (event_id,),
        )
        cur.execute(
            """
            INSERT INTO stats_daily_totals (bucket_date, count_value)
            VALUES (%s, 1)
            ON DUPLICATE KEY UPDATE count_value = count_value + 1
            """,
            (bucket_date,),
        )
        cur.execute(
            """
            INSERT INTO stats_daily_by_type (bucket_date, type_code, count_value)
            VALUES (%s, %s, 1)
            ON DUPLICATE KEY UPDATE count_value = count_value + 1
            """,
            (bucket_date, type_code),
        )
        conn.commit()
        cur.execute("SELECT count_value FROM result_stats WHERE type_code = %s", (type_code,))
        type_count = int(cur.fetchone()[0])
        cur.execute("SELECT count_value FROM stats_totals WHERE stats_key = 'tracked_events'")
        tracked_count = int((cur.fetchone() or [0])[0])
        cur.execute("SELECT count_value FROM result_stats")
        total_completed = sum(int(row[0]) for row in cur.fetchall())
        return {"typeCode": type_code, "typeCount": type_count, "totalCompleted": total_completed}
    finally:
        conn.close()


def backfill_aggregate_tables(cur):
    cur.execute("SELECT COUNT(*) FROM stats_daily_totals")
    has_daily_totals = int(cur.fetchone()[0]) > 0
    cur.execute("SELECT COUNT(*) FROM stats_daily_by_type")
    has_daily_by_type = int(cur.fetchone()[0]) > 0
    cur.execute("SELECT count_value FROM stats_totals WHERE stats_key = 'tracked_events'")
    tracked_row = cur.fetchone()
    tracked_count = int(tracked_row[0]) if tracked_row else 0

    if not has_daily_totals:
        cur.execute(
            """
            INSERT INTO stats_daily_totals (bucket_date, count_value)
            SELECT DATE(created_at) AS bucket_date, COUNT(*) AS count_value
            FROM result_events
            GROUP BY DATE(created_at)
            ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
            """
        )

    if not has_daily_by_type:
        cur.execute(
            """
            INSERT INTO stats_daily_by_type (bucket_date, type_code, count_value)
            SELECT DATE(created_at) AS bucket_date, type_code, COUNT(*) AS count_value
            FROM result_events
            GROUP BY DATE(created_at), type_code
            ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
            """
        )

    if tracked_count == 0:
        cur.execute("SELECT COUNT(*) FROM result_events")
        tracked_count = int(cur.fetchone()[0])
        cur.execute(
            """
            INSERT INTO stats_totals (stats_key, count_value)
            VALUES ('tracked_events', %s)
            ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
            """,
            (tracked_count,),
        )

    cur.execute("SELECT COALESCE(MAX(id), 0) FROM result_events")
    latest_event_id = int(cur.fetchone()[0])
    cur.execute(
        """
        INSERT INTO stats_totals (stats_key, count_value)
        VALUES ('latest_event_id', %s)
        ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
        """,
        (latest_event_id,),
    )


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def _send_json(self, payload, status=HTTPStatus.OK, headers=None):
        data = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def _send_text(self, text, status=HTTPStatus.OK, headers=None):
        data = text.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def _require_admin(self, api=False):
        if not admin_is_configured():
            payload = {
                "error": "admin_not_configured",
                "message": "Set SBTI_ADMIN_USER and SBTI_ADMIN_PASSWORD before using /admin.",
            }
            if api:
                self._send_json(payload, status=HTTPStatus.SERVICE_UNAVAILABLE)
            else:
                self._send_text(payload["message"], status=HTTPStatus.SERVICE_UNAVAILABLE)
            return False

        headers = {"WWW-Authenticate": f'Basic realm="{ADMIN_REALM}", charset="UTF-8"'}
        if verify_admin_auth(self.headers.get("Authorization", "")):
            return True

        if api:
            self._send_json({"error": "admin_auth_required"}, status=HTTPStatus.UNAUTHORIZED, headers=headers)
        else:
            self._send_text("Admin authentication required.", status=HTTPStatus.UNAUTHORIZED, headers=headers)
        return False

    def do_GET(self):
        parsed = urlparse(self.path)

        if parsed.path == "/api/stats/summary":
            self._send_json(fetch_summary())
            return
        if parsed.path == "/api/stats/distribution":
            self._send_json(fetch_distribution())
            return
        if parsed.path == "/api/admin/overview":
            if not self._require_admin(api=True):
                return
            self._send_json(fetch_admin_overview())
            return
        if parsed.path in {"/admin", "/admin/"}:
            if not self._require_admin():
                return
            self.send_response(HTTPStatus.FOUND)
            self.send_header("Location", "/admin.html")
            self.end_headers()
            return
        if parsed.path in {"/admin.html", "/admin.js"}:
            if not self._require_admin():
                return

        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/stats/record":
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            self._send_json({"error": "invalid_json"}, status=HTTPStatus.BAD_REQUEST)
            return

        type_code = str(payload.get("typeCode", "")).strip()
        if not type_code:
            self._send_json({"error": "missing_type_code"}, status=HTTPStatus.BAD_REQUEST)
            return

        self._send_json(record_type(type_code))


if __name__ == "__main__":
    init_db()
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"SBTI server listening on 127.0.0.1:{PORT}")
    server.serve_forever()
