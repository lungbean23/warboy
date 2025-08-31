const stamp = () => new Date().toISOString();
export const log = (...a: any[]) => console.log(stamp(), ...a);
export const warn = (...a: any[]) => console.warn(stamp(), ...a);
export const error = (...a: any[]) => console.error(stamp(), ...a);
