// apps/game-web/src/app/game/net/wsClient.ts
type ClientHello = { t: 'hello'; name: string };
type ClientIntent = { t: 'intent'; seq: number; dx: -1|0|1; dy: -1|0|1 };
type ClientChunkReq = { t:'chunkReq'; cx:number; cy:number };
type ClientChat = { t:'chat'; text:string };

type ServerWelcome = { t: 'welcome'; id: string; zoneId: string; time: number };
type ServerSnapshot = { t:'snapshot'; time:number; players:Array<{id:string;x:number;y:number;name:string}> };
type ServerChunkData = { t:'chunkData'; cx:number; cy:number; w:number; h:number; tilesB64:string };
type ServerChat = { t:'chat'; text:string; from?: { id:string; name?:string } };

type C2S = ClientHello | ClientIntent | ClientChunkReq | ClientChat;
type S2C = ServerWelcome | ServerSnapshot | ServerChunkData | ServerChat;

export function connectWS(opts: {
  url: string; name: string;
  onWelcome?: (me: ServerWelcome) => void;
  onSnapshot?: (snap: ServerSnapshot) => void;
  onChunk?: (msg: ServerChunkData) => void;
  onChat?: (msg: ServerChat) => void;
  onClose?: () => void;
}) {
  const ws = new WebSocket(opts.url);
  let seq = 0;

  ws.addEventListener('open', () => {
    const m: ClientHello = { t:'hello', name: opts.name };
    ws.send(JSON.stringify(m));
  });

  ws.addEventListener('message', (ev) => {
    let msg: S2C;
    try { msg = JSON.parse(ev.data); } catch { return; }
    if (!msg || typeof msg !== 'object') return;

    switch (msg.t) {
      case 'welcome':   opts.onWelcome?.(msg); break;
      case 'snapshot':  opts.onSnapshot?.(msg); break;
      case 'chunkData': opts.onChunk?.(msg); break;
      case 'chat':      opts.onChat?.(msg); break;
    }
  });

  ws.addEventListener('close', () => opts.onClose?.());

  return {
    intent(dx: -1|0|1, dy: -1|0|1) {
      const m: ClientIntent = { t:'intent', seq: ++seq, dx, dy };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    chunkReq(cx:number, cy:number) {
      const m: ClientChunkReq = { t:'chunkReq', cx, cy };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    chat(text:string) {
      const m: ClientChat = { t:'chat', text };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    close(){ try{ ws.close(); }catch{} }
  };
}

