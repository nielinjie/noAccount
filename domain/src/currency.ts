import { notImplementedError } from "./util";

export class Currently {
  code: string;
  name: string;
  symbol: string;
}
export interface Amount{}
export class NEAmount implements Amount{
  currency: string;
  value: string;
  toExact(): ExactAmount {
    throw notImplementedError();
  }
  toRange(): Range {
    throw notImplementedError();
  }
}
export class ExactAmount implements Amount{
  constructor(public currency: string, public value:number){}
}
export type Range = [ExactAmount, ExactAmount];
