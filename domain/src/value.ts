import { notImplementedError } from "./util";

export interface Value {}
export class NEValue implements Value {
  currency: string;
  value: string;
  toExact(): ExactValue {
    throw notImplementedError();
  }
  toRange(): Range {
    throw notImplementedError();
  }
}
export class ExactValue implements Value {
  constructor(public currency: string, public value: number) {}
}
export type Range = [ExactValue, ExactValue];
