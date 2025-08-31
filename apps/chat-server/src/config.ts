import { join } from "path";

export const cfg = {
port: Number(process.env.CHAT_PORT ?? 8790),
dataDir: process.env.CHAT_DATA_DIR ?? join(process.cwd(), "data", "chat"),
historyLimit: Number(process.env.CHAT_HISTORY_LIMIT ?? 200),
pingIntervalMs: Number(process.env.CHAT_PING_INTERVAL_MS ?? 15000),
rate: {
count: Number(process.env.CHAT_RATE_LIMIT_COUNT ?? 10),
windowMs: Number(process.env.CHAT_RATE_LIMIT_WINDOW_MS ?? 10000)
}
};
