export function isChatRecv(f) {
    return f && f.t === "chat/recv" && f.msg && typeof f.msg.text === "string";
}
