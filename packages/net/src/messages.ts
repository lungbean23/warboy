// Client → Server
export type ClientHello = { t: 'hello'; name: string };
export type ClientIntent = { t: 'intent'; seq: number; dx: -1|0|1; dy: -1|0|1 };
export type ClientChunkReq = { t: 'chunkReq'; cx: number; cy: number };
export type C2S = ClientHello | ClientIntent | ClientChunkReq;

// Server → Client
export type ServerWelcome = { t: 'welcome'; id: string; zoneId: string; time: number };
export type ServerSnapshot = {
  t: 'snapshot';
  time: number;
  players: Array<{ id: string; x: number; y: number; name: string }>;
};
export type ServerChunkData = {
  t: 'chunkData';
  cx: number; cy: number; w: number; h: number;
  tilesB64: string;
};
export type S2C = ServerWelcome | ServerSnapshot | ServerChunkData;

