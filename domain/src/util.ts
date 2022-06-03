export function notImplementedError(message: string = "") {
  return new Error(`Not Implemented ${message}`);
}


export function overrideMe() {
    return new Error("Override me");
}


export type Constructor<T> = new (...args: any[]) => T;
