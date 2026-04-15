CREATE TABLE IF NOT EXISTS result_stats (
    type_code VARCHAR(32) PRIMARY KEY,
    count_value BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS result_events (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type_code VARCHAR(32) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY idx_result_events_created_at (created_at),
    KEY idx_result_events_type_created_at (type_code, created_at)
);

CREATE TABLE IF NOT EXISTS stats_totals (
    stats_key VARCHAR(32) PRIMARY KEY,
    count_value BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS stats_daily_totals (
    bucket_date DATE PRIMARY KEY,
    count_value BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS stats_daily_by_type (
    bucket_date DATE NOT NULL,
    type_code VARCHAR(32) NOT NULL,
    count_value BIGINT NOT NULL DEFAULT 0,
    PRIMARY KEY (bucket_date, type_code),
    KEY idx_stats_daily_by_type_type_date (type_code, bucket_date)
);

INSERT INTO stats_totals (stats_key, count_value)
VALUES ('tracked_events', 0)
ON DUPLICATE KEY UPDATE count_value = count_value;

INSERT INTO stats_totals (stats_key, count_value)
VALUES ('latest_event_id', 0)
ON DUPLICATE KEY UPDATE count_value = count_value;
