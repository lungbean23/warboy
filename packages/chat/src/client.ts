import type { ChatMsg, C2S_ChatSend } from "./types.js";

type Listener = (m: ChatMsg) => void;

export class ChatClient {
  private sendRaw: (data: any) => void;
  private listeners = new Set<Listener>();
  private room: string;

  constructor(opts: { send: (data: any) => void; defaultRoom?: string }) {
    this.sendRaw = opts.send;
    this.room = opts.defaultRoom ?? "global";
  }

  setRoom(room: string) { this.room = room; }

  onMessage(fn: Listener) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  handleIncoming(frame: any) {
    if (frame?.t === "chat/recv" && frame.msg) {
      for (const l of this.listeners) l(frame.msg);
    }
  }

  send(text: string, room = this.room) {
    const payload: C2S_ChatSend = { t: "chat/send", room, text: text.slice(0, 500) };
    this.sendRaw(payload);
  }
}

