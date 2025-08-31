import { existsSync, mkdirSync, readFileSync, appendFileSync } from "fs";
import { dirname, join } from "path";
import type { ChatMsg } from "../types";

export interface ChatStore {
  append(room: string, msg: ChatMsg): void;
  history(room: string, limit?: number): ChatMsg[];
}

function safeRoom(room: string) {
  return room.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export class FileStore implements ChatStore {
  constructor(private root: string) {}
  private fileFor(room: string) {
    return join(this.root, `${safeRoom(room)}.ndjson`);
  }
  append(room: string, msg: ChatMsg) {
    const file = this.fileFor(room);
    const dir = dirname(file);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    appendFileSync(file, JSON.stringify(msg) + "\n", "utf8");
  }
  history(room: string, limit = 200): ChatMsg[] {
    const file = this.fileFor(room);
    if (!existsSync(file)) return [];
    const raw = readFileSync(file, "utf8");
    if (!raw) return [];
    const lines = raw.split("\n").filter(Boolean);
    const tail = lines.slice(-limit);
    const out: ChatMsg[] = [];
    for (const l of tail) {
      try { out.push(JSON.parse(l)); } catch {}
    }
    return out;
  }
}
