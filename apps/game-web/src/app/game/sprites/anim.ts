export type Anim = { frames: number[]; fps: number; loop?: boolean };

export class Animator {
  private t0 = performance.now();
  private _anim: Anim;

  constructor(anim: Anim) { this._anim = { ...anim, loop: anim.loop ?? true }; }

  set(anim: Anim) {
    this._anim = { ...anim, loop: anim.loop ?? true };
    this.t0 = performance.now();
  }

  frameIndex(now = performance.now()) {
    const { frames, fps, loop } = this._anim;
    const i = Math.floor(((now - this.t0) / 1000) * fps);
    return loop ? frames[i % frames.length] : frames[Math.min(i, frames.length - 1)];
  }
}

