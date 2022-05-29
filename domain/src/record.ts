import { Amount } from "./currency";

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


export class DiffAmount {} //增量
export class SumAmount {} // 存量
export class Approx {
  value: number;
}


export class Change {}