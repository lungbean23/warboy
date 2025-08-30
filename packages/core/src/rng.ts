// Mulberry32 PRNG from a 32-bit seed
export function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// 2D hash -> 32-bit seed
export function hash2(seed: number, x: number, y: number) {
  let h = seed >>> 0;
  h = Math.imul(h ^ (x | 0), 0x9E3779B1);
  h = Math.imul(h ^ (y | 0), 0x85EBCA77);
  h ^= h >>> 13; h = Math.imul(h, 0xC2B2AE35); h ^= h >>> 16;
  return h >>> 0;
}

// Value noise (cheap) at integer grid points, bilinear interp
export function valueNoise2D(seed: number, x: number, y: number) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const x1 = x0 + 1, y1 = y0 + 1;
  const sx = x - x0, sy = y - y0;

  const r00 = mulberry32(hash2(seed, x0, y0))();
  const r10 = mulberry32(hash2(seed, x1, y0))();
  const r01 = mulberry32(hash2(seed, x0, y1))();
  const r11 = mulberry32(hash2(seed, x1, y1))();

  const ix0 = r00 + (r10 - r00) * sx;
  const ix1 = r01 + (r11 - r01) * sx;
  return ix0 + (ix1 - ix0) * sy; // 0..1
}

