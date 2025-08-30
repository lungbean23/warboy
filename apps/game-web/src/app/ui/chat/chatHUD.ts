// apps/game-web/src/app/ui/chat/chatHUD.ts
import { UIElement, Rect } from '../core';
import { ScrollList } from '../widgets';
import { EmojiPad } from './emojiPad';

export class ChatHud implements UIElement {
  private list: ScrollList;
  private pad: EmojiPad;
  private children: UIElement[];

  constructor(
    private outer: Rect,
    private sendFn: (text: string) => void
  ) {
    // Top: chat log
    const listRect: Rect = { x: outer.x, y: outer.y, w: outer.w, h: outer.h - 120 };

    // Bottom: emoji dial pad (finger‑friendly)
    const padRect: Rect = { x: outer.x, y: outer.y + outer.h - 116, w: outer.w, h: 116 };

    this.list = new ScrollList(listRect, { title: 'Chat' });
    this.pad  = new EmojiPad(padRect, { onSend: (t) => this.send(t), title: 'Quick Chat' });

    this.children = [this.list, this.pad];
  }

  bounds() { return this.outer; }

  draw(ctx: CanvasRenderingContext2D) {
    for (const c of this.children) c.draw(ctx);
  }

  event(ev: any) {
    // last-added topmost capture
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].event?.(ev)) return true;
    }
    return false;
  }

  addLine(line: string) { this.list.push(line); }

  private send(text: string) {
    this.sendFn(text);
  }
}

