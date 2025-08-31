// apps/game-web/src/app/chat/ChatPanel.tsx
import React, { useEffect, useRef, useState } from 'react';

type ChatMsg = { id:string; room:string; from:{ id:string; name?:string }; text:string; ts:number };

export function ChatPanel({ messages, onSend }: { messages: ChatMsg[]; onSend: (t:string)=>void }) {
  const [buf, setBuf] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages.length]);

  const doSend = () => {
    const t = buf.trim();
    if (!t) return;
    console.log('[ChatPanel] doSend', t);
    onSend(t);
    setBuf('');
  };

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        {messages.map(m => (
          <div key={m.id}>
            <strong>{m.from.name ?? m.from.id.slice(0,4)}</strong>: {m.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div style={inputRowStyle}>
        <input
          value={buf}
          onChange={e => setBuf(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') doSend(); }}
          placeholder="Type message…"
          style={inputStyle}
        />
        <button onClick={doSend} style={buttonStyle}>Send</button>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  position: 'absolute', top: 8, left: 8, width: 360, height: 220,
  background: 'rgba(0,0,0,0.6)', border: '1px solid #333', borderRadius: 6,
  display: 'flex', flexDirection: 'column', color: '#ddd', fontFamily: 'system-ui',
  pointerEvents: 'auto', // ensures clicks go to chat (not canvas)
  backdropFilter: 'blur(2px)',
};
const listStyle: React.CSSProperties = { flex: 1, overflowY: 'auto', padding: '8px' };
const inputRowStyle: React.CSSProperties = { display: 'flex', gap: 6, padding: '6px 8px', borderTop: '1px solid #333' };
const inputStyle: React.CSSProperties = { flex: 1, background: '#111', border: '1px solid #444', borderRadius: 4, color: '#ddd', padding: '6px 8px' };
const buttonStyle: React.CSSProperties = { background: '#222', border: '1px solid #555', color: '#ddd', padding: '6px 10px', borderRadius: 4, cursor: 'pointer' };

