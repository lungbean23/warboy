"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aoiRect = exports.localInChunk = exports.worldToChunk = void 0;
exports.edgePrefetch = edgePrefetch;
exports.directionalAOI = directionalAOI;
// packages/world/src/aoi.ts
var const_1 = require("./const");
var worldToChunk = function (tx, ty, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    return ({
        cx: Math.floor(tx / size),
        cy: Math.floor(ty / size),
    });
};
exports.worldToChunk = worldToChunk;
var localInChunk = function (tx, ty, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    return ({
        lx: ((tx % size) + size) % size,
        ly: ((ty % size) + size) % size,
    });
};
exports.localInChunk = localInChunk;
var aoiRect = function (cx, cy, rx, ry) {
    var out = [];
    for (var y = cy - ry; y <= cy + ry; y++)
        for (var x = cx - rx; x <= cx + rx; x++)
            out.push({ cx: x, cy: y });
    return out;
};
exports.aoiRect = aoiRect;
/**
 * Decide which edges are “near” within a margin (in tiles).
 * Optionally gate by travel direction: only expand toward where you’re going.
 */
function edgePrefetch(lx, ly, dirX, dirY, marginTiles, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    var nearWest = lx <= marginTiles;
    var nearEast = lx >= size - 1 - marginTiles;
    var nearNorth = ly <= marginTiles;
    var nearSouth = ly >= size - 1 - marginTiles;
    return {
        west: nearWest && dirX < 0,
        east: nearEast && dirX > 0,
        north: nearNorth && dirY < 0,
        south: nearSouth && dirY > 0,
    };
}
/**
 * Compute needed chunk coords: base radius (e.g. 1 = 3x3),
 * plus directional expansion by 1 extra ring for any “near-edge” sides.
 */
function directionalAOI(cx, cy, expand, baseRadius) {
    if (baseRadius === void 0) { baseRadius = 1; }
    var rxW = baseRadius, rxE = baseRadius, ryN = baseRadius, ryS = baseRadius;
    if (expand.west)
        rxW += 1;
    if (expand.east)
        rxE += 1;
    if (expand.north)
        ryN += 1;
    if (expand.south)
        ryS += 1;
    var out = [];
    for (var y = cy - ryN; y <= cy + ryS; y++)
        for (var x = cx - rxW; x <= cx + rxE; x++)
            out.push({ cx: x, cy: y });
    return out;
}
