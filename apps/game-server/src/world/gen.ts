import { CHUNK_SIZE } from '@warboy/world';
import type { TerrainChunk } from '@warboy/world';

export function genChunk(seed:number, cx:number, cy:number): TerrainChunk {
  const w = CHUNK_SIZE, h = CHUNK_SIZE;
  const tiles = new Uint8Array(w*h);
  for (let y=0; y<h; y++) for (let x=0; x<w; x++) {
    const v = (Math.sin((cx*w+x+seed)*0.01) + Math.cos((cy*h+y-seed)*0.013))*0.5 + 0.5;
    tiles[y*w+x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
  }
  return { cx, cy, w, h, tiles, version: 0 };
}

