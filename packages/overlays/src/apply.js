export function applyTilePatches(base, w, h, patches) {
    const out = base.slice();
    for (const p of patches) {
        if (p.lx >= 0 && p.lx < w && p.ly >= 0 && p.ly < h)
            out[p.ly * w + p.lx] = p.tile | 0;
    }
    return out;
}
