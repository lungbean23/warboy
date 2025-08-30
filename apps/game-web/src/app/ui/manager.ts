// apps/game-web/src/app/ui/manager.ts
import { UIElement, UIEvent } from './core';
import type { TextCapture } from './input/textCapture';

function isPrintableKey(e: KeyboardEvent): string | null {
  if (e.ctrlKey || e.metaKey || e.altKey) return null;
  if (e.key.length === 1) return e.key;
  return null;
}

export class UIManager {
  private elements: UIElement[] = [];
  private focusEl: UIElement | null = null;
  private pointerTarget: UIElement | null = null;
  private capture: TextCapture | null = null;

  /** Mount hidden text capture (for IME/mobile). Call once after creation. */
  attachTextCapture(capture: TextCapture, hostEl: HTMLElement) {
    this.capture = capture;
    capture.mount(hostEl, (ev) => this.dispatch(ev));
  }

  add(el: UIElement) { this.elements.push(el); return el; }
  remove(el: UIElement) {
    this.elements = this.elements.filter(e => e !== el);
    if (this.focusEl === el) this.setFocus(null);
    if (this.pointerTarget === el) this.pointerTarget = null;
  }
  clear() {
    this.elements.length = 0;
    this.setFocus(null);
    this.pointerTarget = null;
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const el of this.elements) el.draw(ctx);
  }

  private setFocus(el: UIElement | null) {
    if (this.focusEl && this.focusEl.setFocus) this.focusEl.setFocus(false);
    this.focusEl = el;
    if (this.focusEl && this.focusEl.setFocus) this.focusEl.setFocus(true);

    // Sync hidden textarea focus state
    if (this.capture) {
      if (this.focusEl?.wantsKeyboard) this.capture.focus();
      else this.capture.blur();
    }
  }

  /** Fallback for printable keys / special keys if beforeinput didn’t fire. */
  handleKeyDown(e: KeyboardEvent): boolean {
    if (this.focusEl?.event?.({ t: 'keydown', key: e.key })) return true;
    const ch = isPrintableKey(e);
    if (ch && this.focusEl?.event?.({ t: 'text', text: ch })) return true;
    return false;
  }

  dispatch(ev: UIEvent): boolean {
    switch (ev.t) {
      case 'pointerDown': {
        for (let i = this.elements.length - 1; i >= 0; i--) {
          const el = this.elements[i];
          if (el.event?.(ev)) {
            this.pointerTarget = el;
            if (el.wantsKeyboard) this.setFocus(el);
            else this.setFocus(null);
            return true;
          }
        }
        this.pointerTarget = null;
        this.setFocus(null);
        return false;
      }

      case 'pointerMove':
      case 'pointerUp': {
        if (this.pointerTarget?.event?.(ev)) {
          if (ev.t === 'pointerUp') this.pointerTarget = null;
          return true;
        }
        for (let i = this.elements.length - 1; i >= 0; i--) {
          const el = this.elements[i];
          if (el !== this.pointerTarget && el.event?.(ev)) return true;
        }
        if (ev.t === 'pointerUp') this.pointerTarget = null;
        return false;
      }

      case 'wheel': {
        for (let i = this.elements.length - 1; i >= 0; i--) {
          if (this.elements[i].event?.(ev)) return true;
        }
        return false;
      }

      case 'keydown':
      case 'text': {
        if (this.focusEl && this.focusEl.event?.(ev)) return true;
        return false;
      }
    }
  }

  destroy() {
    this.capture?.destroy();
    this.capture = null;
    this.elements.length = 0;
    this.focusEl = null;
    this.pointerTarget = null;
  }
}

