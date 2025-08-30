export const aoiCoords = (cx:number, cy:number, r=1) => {
  const out:{cx:number;cy:number}[] = [];
  for (let y=cy-r; y<=cy+r; y++) for (let x=cx-r; x<=cx+r; x++) out.push({cx:x,cy:y});
  return out;
};

