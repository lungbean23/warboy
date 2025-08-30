// apps/game-web/src/app/ui/widgets.ts
import { Rect, UIElement, UIEvent, drawPanel, hit } from './core';

export class ScrollList implements UIElement {
  private log: string[] = [];
  private scroll = 0; // px from bottom (0 = stick to latest)
  private lineHeight = 14;
  private padding = 8;
  private title?: string;

  constructor(private r: Rect, opts?: { title?: string }) {
    this.title = opts?.title;
  }
  bounds() { return this.r; }

  push(line: string) {
    this.log.push(line);
    if (this.scroll === 0) {
      // stick to bottom
    } else {
      // keep current view relative to bottom growth
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawPanel(ctx, this.r, this.title);
    const { x, y, w, h } = this.r;

    ctx.save();
    ctx.beginPath();
    ctx.rect(x+1, y+1+18, w-2, h-2-18);
    ctx.clip();

    const maxLines = Math.floor((h - 2 - 18 - this.padding*2) / this.lineHeight);
    const start = Math.max(0, this.log.length - maxLines - Math.floor(this.scroll/this.lineHeight));
    const end = Math.min(this.log.length, start + maxLines);
    ctx.fillStyle = '#ddd';
    ctx.font = '12px monospace';
    for (let i = start; i < end; i++) {
      const ly = y + 18 + this.padding + (i - start + 1) * this.lineHeight;
      ctx.fillText(this.log[i], x + this.padding, ly);
    }
    ctx.restore();
  }

  event(ev: UIEvent) {
    if (ev.t === 'wheel' && hit(this.r, { x: 0, y: 0 })) {
      this.scroll = Math.max(0, this.scroll + ev.dy);
      return true;
    }
    return false;
  }
}

export class TextInput implements UIElement {
  wantsKeyboard = true;
  private focus = false;
  private cursorBlink = 0;
  private value = '';
  constructor(private r: Rect, private onSubmit: (text: string) => void, private placeholder='') {}
  bounds() { return this.r; }
  setFocus(f: boolean) { this.focus = f; this.cursorBlink = 0; }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;
    ctx.fillStyle = this.focus ? '#151515' : '#111';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = this.focus ? '#49f' : '#333';
    ctx.strokeRect(x, y, w, h);
    ctx.font = '12px system-ui';
    ctx.fillStyle = this.value ? '#ddd' : '#666';
    const text = this.value || this.placeholder;
    ctx.fillText(text, x + 8, y + h/2 + 4);
    if (this.focus && Math.floor(this.cursorBlink / 30) % 2 === 0) {
      const tw = ctx.measureText(this.value).width;
      ctx.fillRect(x + 8 + tw + 2, y + h/2 - 8, 1, 16);
    }
    this.cursorBlink++;
  }

  event(ev: UIEvent) {
    if (ev.t === 'pointerDown') {
      return hit(this.r, ev.p);
    }
    if (!this.focus) return false;
    if (ev.t === 'keydown') {
      if (ev.key === 'Backspace') { this.value = this.value.slice(0, -1); return true; }
      if (ev.key === 'Enter') { const msg = this.value.trim(); if (msg) this.onSubmit(msg); this.value=''; return true; }
      return false;
    }
    if (ev.t === 'text') {
      this.value += ev.text;
      return true;
    }
    return false;
  }
}

export class Button implements UIElement {
  constructor(private r: Rect, private label: string, private onClick: () => void) {}
  bounds() { return this.r; }
  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;
    ctx.fillStyle = '#222';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#555';
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#ddd';
    ctx.font = '12px system-ui';
    const tw = ctx.measureText(this.label).width;
    ctx.fillText(this.label, x + (w - tw)/2, y + h/2 + 4);
  }
  event(ev: UIEvent) {
    if (ev.t === 'pointerDown' && hit(this.r, ev.p)) { this.onClick(); return true; }
    return false;
  }
}

