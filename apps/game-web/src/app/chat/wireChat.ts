// apps/game-web/src/app/chat/wireChat.ts
import { ChatHud } from '../ui/chat/chatHUD';
import type { UIManager } from '../ui/manager';
import type { Rect } from '../ui/core';

export function wireChat(ws: WebSocket, ui: UIManager, rect: Rect = { x: 12, y: 12, w: 360, h: 220 }) {
  // Create HUD and pass a send() that emits chat/send frames
  const hud = new ChatHud(rect, (text) => {
    const frame = { t: 'chat/send', room: 'global', text };
    console.debug('[chat] send ->', frame);
    ws.send(JSON.stringify(frame));
  });

  // Listen for server messages and append to HUD
  const onMsg = (e: MessageEvent) => {
    try {
      const f = JSON.parse(e.data as string);
      if (f?.t === 'chat/recv' && f.msg?.room === 'global') {
        hud.addLine(`${f.msg.from.name}: ${f.msg.text}`);
      }
      // If you later send batched history frames, handle them too:
      if (f?.t === 'chat/history' && f.room === 'global') {
        for (const m of f.messages || []) {
          hud.addLine(`${m.from.name}: ${m.text}`);
        }
      }
    } catch {}
  };

  ws.addEventListener('message', onMsg);
  ui.add(hud);

  return {
    hud,
    dispose() {
      ws.removeEventListener('message', onMsg);
      ui.remove(hud);
    },
  };
}

