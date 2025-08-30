import { decodeTiles } from './decode';
type Key = string;
const key = (cx:number, cy:number) => `${cx}:${cy}`;

export type ClientChunk = { cx:number; cy:number; version:number; w:number; h:number; tiles: Uint8Array };

export class ChunkCache {
  private map = new Map<Key, ClientChunk>();
  get(cx:number, cy:number) { return this.map.get(key(cx,cy)); }
  has(cx:number, cy:number) { return this.map.has(key(cx,cy)); }
  setFromSnap(s: {cx:number;cy:number;version:number;w:number;h:number;tilesB64:string}) {
    this.map.set(key(s.cx,s.cy), { cx:s.cx, cy:s.cy, version:s.version, w:s.w, h:s.h, tiles: decodeTiles(s.tilesB64) });
  }
}

