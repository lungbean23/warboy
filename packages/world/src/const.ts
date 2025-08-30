// packages/world/src/const.ts
export const CHUNK_SIZE = 32 as const;

export const TILE = {
  Water: 0,
  Grass: 1,
  Rock: 2,
} as const;

export type TileId = typeof TILE[keyof typeof TILE]; // ← ensure this exists and is exported

