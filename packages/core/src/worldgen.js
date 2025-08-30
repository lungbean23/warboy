import { valueNoise2D } from './rng';
export const CHUNK_SIZE = 32;
export function genChunk(worldSeed, cx, cy) {
    const w = CHUNK_SIZE, h = CHUNK_SIZE;
    const tiles = new Uint8Array(w * h);
    const scale = 0.07;
    for (let ty = 0; ty < h; ty++) {
        for (let tx = 0; tx < w; tx++) {
            const wx = (cx * w + tx) * scale;
            const wy = (cy * h + ty) * scale;
            const n1 = valueNoise2D(worldSeed, wx, wy);
            const n2 = valueNoise2D(worldSeed ^ 0xA5A5A5A5, wx * 2, wy * 2) * 0.3;
            const n = (n1 * 0.7) + n2;
            let tile = 1; // grass
            if (n < 0.35)
                tile = 0; // water
            else if (n > 0.75)
                tile = 2; // rock
            tiles[ty * w + tx] = tile;
        }
    }
    return { cx, cy, w, h, tiles };
}
