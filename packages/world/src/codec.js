"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u8ToB64 = u8ToB64;
exports.b64ToU8 = b64ToU8;
function u8ToB64(u8) {
    if (typeof Buffer !== 'undefined')
        return Buffer.from(u8).toString('base64');
    var s = '';
    for (var i = 0; i < u8.length; i++)
        s += String.fromCharCode(u8[i]);
    return btoa(s);
}
function b64ToU8(b64) {
    if (typeof Buffer !== 'undefined')
        return new Uint8Array(Buffer.from(b64, 'base64'));
    var bin = atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++)
        out[i] = bin.charCodeAt(i);
    return out;
}
