import { nanoid } from "nanoid";
import type { C2S, C2S_ChatSend, S2C_ChatRecv, S2C_ChatAck, ChatMsg, S2C_Typing, S2C_Reaction } from '@warboy/chat';
import { append } from './store.js'; // <-- add this
export function handleChatIncoming(ctx: {
  playerId: string;
  playerName: string;
  defaultRoom: () => string;           // e.g. returns "zone:abc" or "global"
  sendToRoom: (room: string, frame: any) => void;
}) {
  return (raw: any) => {
    const f = raw as C2S_ChatSend;
    if (f?.t !== "chat/send") return;

    const room = sanitizeRoom(f.room) ?? ctx.defaultRoom();
    const msg: ChatMsg = {
      id: nanoid(10),
      room,
      from: { id: ctx.playerId, name: ctx.playerName },
      text: String(f.text ?? "").slice(0, 500),
      ts: Date.now(),
    };
    append(msg).catch(err => console.error('chat append failed', err));
    const out: S2C_ChatRecv = { t: "chat/recv", msg };
    ctx.sendToRoom(room, out);
  };
}

function sanitizeRoom(r?: string) {
  if (!r) return null;
  if (r === "global") return r;
  if (r.startsWith("zone:")) return r;
  if (r.startsWith("party:")) return r;
  return null;
}
export { handleChatIncoming as handleChatMessage };

