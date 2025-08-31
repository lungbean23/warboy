// packages/world/src/aoi.ts
import { CHUNK_SIZE } from './const.js';

export type ChunkCoord = { cx: number; cy: number };

export const worldToChunk = (tx: number, ty: number, size = CHUNK_SIZE) => ({
  cx: Math.floor(tx / size),
  cy: Math.floor(ty / size),
});

export const localInChunk = (tx: number, ty: number, size = CHUNK_SIZE) => ({
  lx: ((tx % size) + size) % size,
  ly: ((ty % size) + size) % size,
});

export const aoiRect = (
  cx: number, cy: number,
  rx: number, ry: number
): ChunkCoord[] => {
  const out: ChunkCoord[] = [];
  for (let y = cy - ry; y <= cy + ry; y++)
    for (let x = cx - rx; x <= cx + rx; x++)
      out.push({ cx: x, cy: y });
  return out;
};

/**
 * Decide which edges are “near” within a margin (in tiles).
 * Optionally gate by travel direction: only expand toward where you’re going.
 */
export function edgePrefetch(
  lx: number, ly: number,
  dirX: -1 | 0 | 1,
  dirY: -1 | 0 | 1,
  marginTiles: number,
  size = CHUNK_SIZE
) {
  const nearWest  = lx <= marginTiles;
  const nearEast  = lx >= size - 1 - marginTiles;
  const nearNorth = ly <= marginTiles;
  const nearSouth = ly >= size - 1 - marginTiles;

  return {
    west:  nearWest  && dirX < 0,
    east:  nearEast  && dirX > 0,
    north: nearNorth && dirY < 0,
    south: nearSouth && dirY > 0,
  };
}

/**
 * Compute needed chunk coords: base radius (e.g. 1 = 3x3),
 * plus directional expansion by 1 extra ring for any “near-edge” sides.
 */
export function directionalAOI(
  cx: number, cy: number,
  expand: { west?: boolean; east?: boolean; north?: boolean; south?: boolean },
  baseRadius = 1
): ChunkCoord[] {
  let rxW = baseRadius, rxE = baseRadius, ryN = baseRadius, ryS = baseRadius;
  if (expand.west)  rxW += 1;
  if (expand.east)  rxE += 1;
  if (expand.north) ryN += 1;
  if (expand.south) ryS += 1;

  const out: ChunkCoord[] = [];
  for (let y = cy - ryN; y <= cy + ryS; y++)
    for (let x = cx - rxW; x <= cx + rxE; x++)
      out.push({ cx: x, cy: y });
  return out;
}

