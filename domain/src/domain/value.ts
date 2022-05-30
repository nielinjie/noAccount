import { notImplementedError } from "../util";

export interface Value {
  toExact(): ExactValue
  //TODO 暂时按精确值来计算。
  add(value: Value): Value
}
export class NEValue implements Value {
  currency: string;
  value: string;
  toExact(): ExactValue {
    throw notImplementedError();
  }
  toRange(): Range {
    throw notImplementedError();
  }
  add(b: Value): Value {
    if (b instanceof ExactValue) {
      return this.toExact().add(b)
    } else if (b instanceof NEValue) {
      return this.toExact().add(b.toExact())
    }
  }
}
export class ExactValue implements Value {
  constructor(public currency: string, public value: number) { }
  toExact(): ExactValue {
    return this
  }
  add(b: Value): Value {
    if (b instanceof ExactValue) {
      return new ExactValue(this.currency, this.value + b.value)
    } else {
      return b.add(this)
    }
  }
}
export type Range = [ExactValue, ExactValue];
