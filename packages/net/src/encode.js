export function u8ToB64(u8) {
    if (typeof Buffer !== 'undefined')
        return Buffer.from(u8).toString('base64');
    let s = '';
    for (let i = 0; i < u8.length; i++)
        s += String.fromCharCode(u8[i]);
    return btoa(s);
}
export function b64ToU8(b64) {
    if (typeof Buffer !== 'undefined')
        return new Uint8Array(Buffer.from(b64, 'base64'));
    const bin = atob(b64);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++)
        u8[i] = bin.charCodeAt(i);
    return u8;
}
