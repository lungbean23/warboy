// packages/world/src/types.ts
import type { TileId } from './const';

export type ChunkCoord = { cx: number; cy: number };

export type TerrainChunk = {
  cx: number; cy: number;
  w: number; h: number;          // = CHUNK_SIZE
  tiles: Uint8Array;              // length w*h, TileId values
  version: number;                // monotonically increasing
};

export type ChunkSnapshot = {
  cx: number; cy: number; version: number;
  w: number; h: number;           // echo dimensions for clients
  tilesB64: string;               // base64 of raw tiles
};

export type { TileId };
