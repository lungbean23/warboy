export type ChatMsg = {
  id: string;
  room: string;
  from: { id: string; name?: string };
  text: string;
  ts: number;
};

export type Wire =
  | { t: "hello"; name: string; room?: string }
  | { t: "chat/send"; text: string; room?: string };
