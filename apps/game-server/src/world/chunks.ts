import { u8ToB64 } from '@warboy/world';
import type { ChunkSnapshot } from '@warboy/world';
import { genChunk } from './gen';
import { getSnapshot, putSnapshot } from './storage';

const SEED = 0xC0FFEE;

export function loadOrGenChunk(cx:number, cy:number): ChunkSnapshot {
  const cached = getSnapshot(cx, cy);
  if (cached) return cached;
  const ch = genChunk(SEED, cx, cy);
  const snap: ChunkSnapshot = {
    cx: ch.cx, cy: ch.cy, version: ch.version, w: ch.w, h: ch.h,
    tilesB64: u8ToB64(ch.tiles),
  };
  putSnapshot(snap);
  return snap;
}

