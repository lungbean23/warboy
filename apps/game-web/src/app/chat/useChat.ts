import { useEffect, useRef, useState } from "react";
import { ChatClient, isChatRecv, ChatMsg } from "@warboy/chat";

export function useChat(wsRef: React.MutableRefObject<any>, defaultRoom = "global") {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const clientRef = useRef<ChatClient | null>(null);

  useEffect(() => {
    if (!wsRef.current) return;
    const client = new ChatClient({
      defaultRoom,
      send: (data:any) => wsRef.current.send?.(data) ?? wsRef.current.chat?.(data),
    });
    clientRef.current = client;

    const off = client.onMessage((m) => {
      setMsgs((p) => [...p, m].slice(-200));
      if (!open) setUnread((u) => Math.min(99, u + 1));
    });

    // tap into raw WS frames (depends on your wsClient; adapt if needed)
    const prev = wsRef.current.onAnyMessage;
    wsRef.current.onAnyMessage = (frame: any) => {
      if (isChatRecv(frame)) client.handleIncoming(frame);
      prev?.(frame);
    };

    return () => { off(); if (wsRef.current) wsRef.current.onAnyMessage = prev; };
  }, [wsRef, defaultRoom, open]);

  return {
    open, setOpen,
    unread, setUnread,
    msgs,
    send: (text: string) => clientRef.current?.send(text),
    setRoom: (r: string) => clientRef.current?.setRoom(r),
  };
}

