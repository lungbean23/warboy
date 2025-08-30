// apps/game-web/src/app/ui/core.ts
export type Point = { x: number; y: number };
export type Rect = { x: number; y: number; w: number; h: number };

export function hit(r: Rect, p: Point) {
  return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;
}

export type UIEvent =
  | { t: 'pointerDown'; p: Point; id: number }
  | { t: 'pointerMove'; p: Point; id: number }
  | { t: 'pointerUp'; p: Point; id: number }
  | { t: 'wheel'; dx: number; dy: number }
  | { t: 'keydown'; key: string }
  | { t: 'text'; text: string };

export interface UIElement {
  bounds(): Rect;
  draw(ctx: CanvasRenderingContext2D): void;
  event?(ev: UIEvent): boolean;  // return true if handled
  wantsKeyboard?: boolean;       // can receive text input
  setFocus?(focused: boolean): void;
}

export function drawPanel(ctx: CanvasRenderingContext2D, r: Rect, title?: string) {
  ctx.fillStyle = '#0b0b0b';
  ctx.fillRect(r.x, r.y, r.w, r.h);
  ctx.strokeStyle = '#333';
  ctx.strokeRect(r.x, r.y, r.w, r.h);
  if (title) {
    ctx.fillStyle = '#ddd';
    ctx.font = '12px system-ui';
    ctx.fillText(title, r.x + 8, r.y + 16);
  }
}

