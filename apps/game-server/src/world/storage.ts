import type { ChunkSnapshot } from '@warboy/world';

const chunks = new Map<string, ChunkSnapshot>();
const key = (cx:number, cy:number) => `${cx}:${cy}`;

export function getSnapshot(cx:number, cy:number) {
  return chunks.get(key(cx,cy));
}
export function putSnapshot(s: ChunkSnapshot) {
  chunks.set(key(s.cx,s.cy), s);
}

