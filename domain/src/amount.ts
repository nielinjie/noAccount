import { Value } from "./value";

export class Amount {
  value: Value;
  constructor(value: Value) {
    this.value = value;
  }
}

export class DiffAmount extends Amount {} //增量
export class SumAmount extends Amount {} // 存量
