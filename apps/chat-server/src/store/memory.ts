import type { ChatMsg } from "../types";
import type { ChatStore } from "./file";

export class MemoryStore implements ChatStore {
  private rooms = new Map<string, ChatMsg[]>();
  append(room: string, msg: ChatMsg) {
    const arr = this.rooms.get(room) ?? [];
    arr.push(msg);
    this.rooms.set(room, arr);
  }
  history(room: string, limit = 200): ChatMsg[] {
    const arr = this.rooms.get(room) ?? [];
    return arr.slice(-limit);
  }
}
