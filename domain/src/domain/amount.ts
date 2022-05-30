import { Value } from "./value";

export class Amount {
  value: Value;
  constructor(value: Value) {
    this.value = value;
  }
  type: string;
}

export class DiffAmount extends Amount {
  type: string = 'diff'
} //增量
export class SumAmount extends Amount {
  type: string = 'sum'
} // 存量
