export function notImplementedError() {
  return new Error("Not Implemented");
}


export function overrideMe() {
    return new Error("Override me");
}


export type Constructor<T> = new (...args: any[]) => T;
