export type TilePatch = { lx:number; ly:number; tile:number };
export function applyTilePatches(base: Uint8Array, w:number, h:number, patches: TilePatch[]) {
  const out = base.slice();
  for (const p of patches) {
    if (p.lx>=0 && p.lx<w && p.ly>=0 && p.ly<h) out[p.ly*w + p.lx] = p.tile|0;
  }
  return out;
}

