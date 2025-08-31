import { promises as fs } from 'fs';
import * as path from 'path';
import type { ChatMsg } from '@warboy/chat';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data', 'chat');
const MAX_RECENT = 500;

const recentCache = new Map<string, ChatMsg[]>();

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function fileFor(room: string) {
  const safe = room.replace(/[^a-zA-Z0-9._-]/g, '_');
  return path.join(DATA_DIR, `${safe}.ndjson`);
}

export async function append(msg: ChatMsg): Promise<void> {
  await ensureDir();
  const f = fileFor(msg.room);
  const line = JSON.stringify(msg) + '\n';
  await fs.appendFile(f, line, 'utf8');

  const arr = recentCache.get(msg.room) || [];
  arr.push(msg);
  if (arr.length > MAX_RECENT) arr.splice(0, arr.length - MAX_RECENT);
  recentCache.set(msg.room, arr);
}

export async function recent(room: string, limit = 50, afterMs?: number): Promise<ChatMsg[]> {
  const cached = recentCache.get(room);
  if (cached && (!afterMs || cached[cached.length - 1]?.ts > afterMs)) {
    const filtered = afterMs ? cached.filter(m => m.ts > afterMs) : cached.slice(-limit);
    return filtered.slice(-limit);
  }

  try {
    const txt = await fs.readFile(fileFor(room), 'utf8');
    const rows = txt.trim().split('\n').filter(Boolean).map(line => JSON.parse(line) as ChatMsg);
    recentCache.set(room, rows.slice(-MAX_RECENT));
    const filtered = afterMs ? rows.filter(m => m.ts > afterMs) : rows.slice(-limit);
    return filtered.slice(-limit);
  } catch (e: any) {
    if (e?.code === 'ENOENT') return [];
    throw e;
  }
}

