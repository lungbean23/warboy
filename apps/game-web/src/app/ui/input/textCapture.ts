// apps/game-web/src/app/ui/input/textCapture.ts
// Hidden textarea to capture keyboard/IME text and forward as UI events.

import type { UIEvent } from '../core';

export type TextCapture = {
  mount: (host: HTMLElement, dispatch: (ev: UIEvent) => boolean) => void;
  focus: () => void;
  blur: () => void;
  destroy: () => void;
};

export function createTextCapture(): TextCapture {
  let ta: HTMLTextAreaElement | null = null;
  let dispatchRef: ((ev: UIEvent) => boolean) | null = null;

  function mount(host: HTMLElement, dispatch: (ev: UIEvent) => boolean) {
    if (ta) return;
    dispatchRef = dispatch;

    ta = document.createElement('textarea');
    ta.setAttribute('aria-hidden', 'true');
    ta.autocapitalize = 'none';
    ta.autocomplete = 'off';
    ta.autocorrect = 'off';
    ta.spellcheck = false;

    Object.assign(ta.style, {
      position: 'absolute',
      left: '0px',
      top: '0px',
      width: '1px',
      height: '1px',
      opacity: '0',
      pointerEvents: 'none',
      resize: 'none',
      border: '0',
      padding: '0',
      outline: 'none',
      background: 'transparent',
      color: 'transparent',
      zIndex: '0',
    });

    ta.addEventListener('beforeinput', (e: InputEvent) => {
      if (!dispatchRef) return;
      if (typeof e.data === 'string' && e.data.length > 0) {
        const handled = dispatchRef({ t: 'text', text: e.data });
        if (handled) e.preventDefault();
      }
    });

    host.style.position ||= 'relative';
    host.appendChild(ta);
  }

  function focus() {
    ta?.focus();
    if (ta) {
      ta.value = '';
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }

  function blur() {
    ta?.blur();
  }

  function destroy() {
    if (ta && ta.parentNode) ta.parentNode.removeChild(ta);
    ta = null;
    dispatchRef = null;
  }

  return { mount, focus, blur, destroy };
}

