export type OverlayEvent =
  | { t:'place'; id:string; kind:'tile'; tx:number; ty:number; data:{ tile:number }; by:string; at:number }
  | { t:'remove'; id:string; tx:number; ty:number; by:string; at:number }
  | { t:'meta'; id:string; tx:number; ty:number; patch:Record<string,unknown>; by:string; at:number };

