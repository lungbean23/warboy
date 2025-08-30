// packages/chat/src/types.ts

// Core message shape (keeps your existing fields, adds optional kind/meta)
export type ChatMsg = {
  id: string;
  room: string; // "global" | "zone:Z" | "party:P" etc.
  from: { id: string; name: string };
  text: string;         // emojis as Unicode
  ts: number;           // epoch ms
  kind?: 'user' | 'system';
  meta?: Record<string, unknown>;
};

// ---------- Client -> Server (C2S) ----------

// Send a chat message (nonce for optimistic UI reconciliation)
export type C2S_ChatSend = {
  t: 'chat/send';
  room: string;
  text: string;
  nonce?: string;
};

// Typing indicator
export type C2S_Typing = {
  t: 'chat/typing';
  room: string;
  typing: boolean;
};

// Emoji reaction to an existing message
export type C2S_Reaction = {
  t: 'chat/react';
  room: string;
  msgId: string;
  emoji: string; // Unicode
  op: 'add' | 'remove';
};

// Union of all C2S frames
export type C2S = C2S_ChatSend | C2S_Typing | C2S_Reaction;

// ---------- Server -> Client (S2C) ----------

// Broadcast of a received message
export type S2C_ChatRecv = {
  t: 'chat/recv';
  msg: ChatMsg;
};

// Ack for optimistic UI (echoes server id/ts for the sent nonce)
export type S2C_ChatAck = {
  t: 'chat/ack';
  room: string;
  nonce: string;
  id: string;
  ts: number;
};

// Typing indicator from someone else
export type S2C_Typing = {
  t: 'chat/typing';
  room: string;
  from: { id: string; name: string };
  typing: boolean;
};

// Reaction broadcast
export type S2C_Reaction = {
  t: 'chat/react';
  room: string;
  from: { id: string; name: string };
  msgId: string;
  emoji: string;
  op: 'add' | 'remove';
};

// Union of all S2C frames
export type S2C = S2C_ChatRecv | S2C_ChatAck | S2C_Typing | S2C_Reaction;

// Combined union (any direction)
export type ChatFrame = C2S | S2C;

// ---------- Type guards ----------

export function isChatRecv(f: any): f is S2C_ChatRecv {
  return f && f.t === 'chat/recv' && f.msg && typeof f.msg.text === 'string';
}

export function isChatAck(f: any): f is S2C_ChatAck {
  return f && f.t === 'chat/ack' && typeof f.id === 'string' && typeof f.ts === 'number';
}

export function isTyping(f: any): f is S2C_Typing {
  return f && f.t === 'chat/typing' && !!f.room && !!f.from && typeof f.typing === 'boolean';
}

export function isReaction(f: any): f is S2C_Reaction {
  return f && f.t === 'chat/react' && !!f.room && !!f.msgId && typeof f.emoji === 'string';
}

