export class SpriteSheet {
  constructor(
    public image: HTMLImageElement,
    public frameW: number,
    public frameH: number,
    public columns: number
  ) {}

  drawFrame(
    ctx: CanvasRenderingContext2D,
    frameIndex: number,
    dx: number, dy: number,
    scale = 1
  ) {
    const fw = this.frameW, fh = this.frameH;
    const sx = (frameIndex % this.columns) * fw;
    const sy = Math.floor(frameIndex / this.columns) * fh;
    ctx.drawImage(this.image, sx, sy, fw, fh, dx, dy, fw * scale, fh * scale);
  }
}

