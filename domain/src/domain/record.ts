import { eachMonthOfInterval } from "date-fns";
import { Amount } from "./amount";
export type Id = string
export class Record {
  type: string;
  dateTime: number;
  id: Id;
  data: any;
  user: string; //预留合作模式
  // project: string
}

export class SeqRecord {
  interval: string;
  start: Date;
  end: Date | undefined;
  memo: string;
  amount: Amount;
  change: Change;
  approx: Approx;

  spread(end: Date): SpreadPoint[] {
    // throw notImplementedError()
    let interval = { start: this.start, end };
    if (this.interval === 'M') {
      let months = eachMonthOfInterval(interval)
      return months.map(month => {
        return new SpreadPoint(month, this.amount)
      })
    }
  }
} //一系列, 有规律的记录。

export class SpreadPoint {
  constructor(
    public dateTime: Date,
    public amount: Amount) { }
}


export class PointRecord {
  constructor(
    public dateTime: Date,
    public amount: Amount) { }
} //一个点的记录




type Approx = number;

export class Change { }


export interface RecordReference {
  records: Id[]
}
