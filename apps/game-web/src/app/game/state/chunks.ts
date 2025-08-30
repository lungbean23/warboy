function b64ToU8(b64: string): Uint8Array {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(b64, 'base64'));
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
export const CHUNK_SIZE = 32;
type Chunk = { cx:number; cy:number; w:number; h:number; tiles:Uint8Array };
const cache = new Map<string, Chunk>();
const key = (cx:number, cy:number) => `${cx},${cy}`;

export function getChunk(cx:number, cy:number){ return cache.get(key(cx,cy)); }
export function setChunk(c:Chunk){ cache.set(key(c.cx,c.cy), c); }

export function neededChunks(px:number, py:number, radius=2){
  const ccx = Math.floor(px/CHUNK_SIZE);
  const ccy = Math.floor(py/CHUNK_SIZE);
  const list: Array<{cx:number;cy:number}> = [];
  for(let dy=-radius; dy<=radius; dy++)
    for(let dx=-radius; dx<=radius; dx++)
      list.push({ cx: ccx+dx, cy: ccy+dy });
  return list;
}

export function decodeChunk(msg:any): Chunk {
  return { cx: msg.cx, cy: msg.cy, w: msg.w, h: msg.h, tiles: b64ToU8(msg.tilesB64) };
}

