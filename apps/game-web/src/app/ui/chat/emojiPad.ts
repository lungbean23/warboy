// apps/game-web/src/app/ui/chat/emojiPad.ts
import type { UIElement, UIEvent, Rect } from '../core';
import { drawPanel, hit } from '../core';

type PadOpts = {
  title?: string;
  items?: string[];
  onSend: (text: string) => void;
};

export class EmojiPad implements UIElement {
  wantsKeyboard = false;

  private items: string[];
  private idx = 0;
  private buffer = '';
  private title: string;

  // Button rects (computed each draw)
  private rLeft!: Rect;
  private rRight!: Rect;
  private rSend!: Rect;
  private rBack!: Rect;

  constructor(private r: Rect, private opts: PadOpts) {
    this.items = opts.items ?? ['👋','🙂','😂','👍','❤️','❓','‼️','🔥','🤝','🤖','✨','🎉','🌊','🌿','🪨','🌀'];
    this.title = opts.title ?? 'Quick Chat';
  }

  bounds() { return this.r; }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;

    // Panel + title
    drawPanel(ctx, this.r, this.title);
    const padY = y + 18; // under title
    const padH = h - 18;

    // Buffer line
    ctx.fillStyle = '#ccc';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const bufY = padY + 14;
    ctx.fillText(this.buffer || '…', x + 8, bufY);

    // Big selected emoji
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '34px system-ui';
    ctx.fillStyle = '#fff';
    const bigEmojiY = padY + Math.floor(padH * 0.45);
    ctx.fillText(this.items[this.idx], x + Math.floor(w / 2), bigEmojiY);

    // Controls row (huge, finger‑friendly)
    const rowH = 32;
    const gap = 6;
    const btnW = Math.floor((w - gap * 5) / 4);
    const rowY = y + h - rowH - 6;

    // Helper
    const drawBtn = (bx: number, label: string) => {
      ctx.fillStyle = '#222';
      ctx.fillRect(bx, rowY, btnW, rowH);
      ctx.strokeStyle = '#555';
      ctx.strokeRect(bx, rowY, btnW, rowH);
      ctx.fillStyle = '#ddd';
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, bx + btnW / 2, rowY + rowH / 2 + 1);
    };

    const b1x = x + gap;
    const b2x = b1x + btnW + gap;
    const b3x = b2x + btnW + gap;
    const b4x = b3x + btnW + gap;

    drawBtn(b1x, '←');
    drawBtn(b2x, '→');
    drawBtn(b3x, '⌫');
    drawBtn(b4x, 'Send');

    // Store clickable rects
    this.rLeft = { x: b1x, y: rowY, w: btnW, h: rowH };
    this.rRight = { x: b2x, y: rowY, w: btnW, h: rowH };
    this.rBack = { x: b3x, y: rowY, w: btnW, h: rowH };
    this.rSend = { x: b4x, y: rowY, w: btnW, h: rowH };

    // Small hint text (optional)
    ctx.fillStyle = '#888';
    ctx.font = '11px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Tap ←/→ to pick, Send to post. Buffer shows the message you will send.', x + 8, rowY - 10);
  }

  event(ev: UIEvent) {
    if (ev.t !== 'pointerDown') return false;
    const p = ev.p;
    if (!hit(this.r, p)) return false;

    if (hit(this.rLeft, p)) { this.prev(); return true; }
    if (hit(this.rRight, p)) { this.next(); return true; }
    if (hit(this.rBack, p)) { this.backspace(); return true; }
    if (hit(this.rSend, p)) { this.send(); return true; }

    // Tap the middle to append current emoji too (nice shortcut)
    const { x, y, w, h } = this.r;
    const midRect: Rect = { x: x + w * 0.2, y: y + h * 0.2, w: w * 0.6, h: h * 0.4 };
    if (hit(midRect, p)) { this.append(); return true; }

    return true; // we handled a pointer inside panel even if no button
  }

  private prev() {
    this.idx = (this.idx + this.items.length - 1) % this.items.length;
  }
  private next() {
    this.idx = (this.idx + 1) % this.items.length;
  }
  private append() {
    this.buffer += this.items[this.idx];
  }
  private backspace() {
    this.buffer = this.buffer.slice(0, -1);
  }
  private send() {
    const text = this.buffer.trim();
    if (!text) return;
    this.opts.onSend(text);
    this.buffer = '';
  }
}

