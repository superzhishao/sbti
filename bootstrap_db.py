import os
from pathlib import Path

import mysql.connector


ROOT = Path(__file__).resolve().parent
SCHEMA_PATH = ROOT / "schema.sql"


def get_env(name: str, default: str = ""):
    return os.environ.get(name, default).strip()


def execute_statements(cursor, sql_text: str):
    for statement in sql_text.split(";"):
        statement = statement.strip()
        if statement:
            cursor.execute(statement)


def main():
    admin_host = get_env("MYSQL_ADMIN_HOST", get_env("SBTI_DB_HOST", "127.0.0.1"))
    admin_port = int(get_env("MYSQL_ADMIN_PORT", get_env("SBTI_DB_PORT", "3306")))
    admin_user = get_env("MYSQL_ADMIN_USER", "root")
    admin_password = get_env("MYSQL_ADMIN_PASSWORD", "")

    db_name = get_env("SBTI_DB_NAME", "sbti")
    app_user = get_env("SBTI_DB_USER", "sbti")
    app_password = get_env("SBTI_DB_PASSWORD", "")
    app_host = get_env("SBTI_DB_APP_HOST", "127.0.0.1")

    if not app_password:
        raise SystemExit("SBTI_DB_PASSWORD is required for bootstrap_db.py")

    schema_sql = SCHEMA_PATH.read_text(encoding="utf-8")

    root_conn = mysql.connector.connect(
        host=admin_host,
        port=admin_port,
        user=admin_user,
        password=admin_password,
        autocommit=True,
    )
    try:
        cur = root_conn.cursor()
        cur.execute(f"CREATE DATABASE IF NOT EXISTS `{db_name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
        cur.execute(f"CREATE USER IF NOT EXISTS '{app_user}'@'{app_host}' IDENTIFIED BY %s", (app_password,))
        cur.execute(f"ALTER USER '{app_user}'@'{app_host}' IDENTIFIED BY %s", (app_password,))
        cur.execute(f"GRANT ALL PRIVILEGES ON `{db_name}`.* TO '{app_user}'@'{app_host}'")
        cur.execute("FLUSH PRIVILEGES")
    finally:
        root_conn.close()

    app_conn = mysql.connector.connect(
        host=admin_host,
        port=admin_port,
        user=app_user,
        password=app_password,
        database=db_name,
    )
    try:
        cur = app_conn.cursor()
        execute_statements(cur, schema_sql)
        app_conn.commit()
    finally:
        app_conn.close()

    print("Database bootstrap completed.")
    print(f"Database: {db_name}")
    print(f"App user: {app_user}@{app_host}")
    print(f"Schema: {SCHEMA_PATH}")


if __name__ == "__main__":
    main()
