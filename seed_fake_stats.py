import argparse
import random

from server import DB_POOL, init_db, load_type_catalog


def build_distribution(total, seed):
    codes = [item["code"] for item in load_type_catalog()]
    rng = random.Random(seed)
    weights = [0.7 + rng.random() * 3.3 for _ in codes]
    weight_sum = sum(weights)

    raw_counts = [(weight / weight_sum) * total for weight in weights]
    counts = [int(value) for value in raw_counts]
    remainder = total - sum(counts)

    ranked = sorted(
        enumerate(raw_counts),
        key=lambda item: (item[1] - int(item[1]), weights[item[0]]),
        reverse=True,
    )
    for index, _ in ranked[:remainder]:
        counts[index] += 1

    return dict(zip(codes, counts))


def write_distribution(distribution):
    conn = DB_POOL.get_connection()
    try:
        cur = conn.cursor()
        cur.execute("DELETE FROM result_stats")
        cur.execute("DELETE FROM result_events")
        cur.execute("DELETE FROM stats_daily_totals")
        cur.execute("DELETE FROM stats_daily_by_type")
        cur.execute("DELETE FROM stats_totals WHERE stats_key IN ('tracked_events', 'latest_event_id')")
        cur.executemany(
            """
            INSERT INTO stats_totals (stats_key, count_value)
            VALUES (%s, %s)
            ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
            """,
            [('tracked_events', 0), ('latest_event_id', 0)],
        )
        cur.executemany(
            """
            INSERT INTO result_stats (type_code, count_value)
            VALUES (%s, %s)
            ON DUPLICATE KEY UPDATE count_value = VALUES(count_value)
            """,
            list(distribution.items()),
        )
        conn.commit()
    finally:
        conn.close()


def main():
    parser = argparse.ArgumentParser(description="Seed fake SBTI stats into MySQL.")
    parser.add_argument("--total", type=int, default=328912, help="Target total completed count")
    parser.add_argument("--seed", type=int, default=20260410, help="Deterministic random seed")
    args = parser.parse_args()

    init_db()
    distribution = build_distribution(args.total, args.seed)
    write_distribution(distribution)

    top_entries = sorted(distribution.items(), key=lambda item: (-item[1], item[0]))[:5]
    print(f"Seeded {sum(distribution.values())} fake completions across {len(distribution)} types.")
    for code, count in top_entries:
        print(f"{code}: {count}")


if __name__ == "__main__":
    main()
