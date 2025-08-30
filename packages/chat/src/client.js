export class ChatClient {
    constructor(opts) {
        this.listeners = new Set();
        this.sendRaw = opts.send;
        this.room = opts.defaultRoom ?? "global";
    }
    setRoom(room) { this.room = room; }
    onMessage(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    handleIncoming(frame) {
        if (frame?.t === "chat/recv" && frame.msg) {
            for (const l of this.listeners)
                l(frame.msg);
        }
    }
    send(text, room = this.room) {
        const payload = { t: "chat/send", room, text: text.slice(0, 500) };
        this.sendRaw(payload);
    }
}
