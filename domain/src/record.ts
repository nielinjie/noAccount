import { Amount } from "./amount";
import { Value } from "./value";

export class Record {
  type: string;
  dateTime: number;
  id: string;
  data: any;
  user: string; //预留合作模式
}

export class SeqRecord {
  duration: string;
  start: Date;
  end: Date | undefined;
  memo: string;
  amount: Amount;
  change: Change;
  approx: Approx;
} //一系列, 有规律的记录。
export class PointRecord {} //一个点的记录




type Approx = number;

export class Change {}
