//import { CHUNK_SIZE } from '@warboy/world';
import { CHUNK_SIZE } from '@warboy/world';
//import type { OverlayEvent } from '@warboy/overlays';
//import type { TilePatch } from '@warboy/overlays';
import type { OverlayEvent } from '@warboy/overlays';
import type { TilePatch } from '@warboy/overlays';


const logs = new Map<string, OverlayEvent[]>();       // per-chunk append-only
const patches = new Map<string, TilePatch[]>();        // per-chunk latest tile writes

const key = (cx:number, cy:number) => `${cx}:${cy}`;
const mod = (n:number, m:number) => ((n % m) + m) % m;

export function appendOverlay(ev: OverlayEvent) {
  if (ev.t === 'place' && ev.kind === 'tile') {
    const cx = Math.floor(ev.tx / CHUNK_SIZE);
    const cy = Math.floor(ev.ty / CHUNK_SIZE);
    const lx = mod(ev.tx, CHUNK_SIZE);
    const ly = mod(ev.ty, CHUNK_SIZE);

    const k = key(cx, cy);
    // log
    let arr = logs.get(k); if (!arr) { arr = []; logs.set(k, arr); }
    arr.push(ev);
    // patch (overwrite last write for same cell)
    let ps = patches.get(k); if (!ps) { ps = []; patches.set(k, ps); }
    const idx = ps.findIndex(p => p.lx===lx && p.ly===ly);
    const patch = { lx, ly, tile: ev.data.tile|0 };
    if (idx >= 0) ps[idx] = patch; else ps.push(patch);
  }
  // (remove/meta can be extended later)
}

export function getChunkPatches(cx:number, cy:number): TilePatch[] {
  return patches.get(key(cx,cy)) ?? [];
}

export function getChunkVersion(cx:number, cy:number): number {
  return logs.get(key(cx,cy))?.length ?? 0;
}

