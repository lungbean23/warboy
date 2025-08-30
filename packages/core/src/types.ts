export type Tile = 0 | 1 | 2; // 0=water,1=grass,2=rock (example)
export interface Chunk {
  cx: number; cy: number; w: number; h: number;
  tiles: Uint8Array; // w*h of Tile
}

