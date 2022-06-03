import cuid from "cuid";
import { eachMonthOfInterval } from "date-fns";
import { Constructor } from "../util";
import { Amount } from "./amount";
import { Id, Repository,  } from "./repository";
export class Record {
  type: string;
  dateTime: Date;
  id: Id;
  data: any;
  user: string; //预留合作模式
}

export class SeqRecord extends Record {
  interval: string;
  start: Date;
  end: Date | undefined;
  memo: string;
  amount: Amount;
  change: Change;
  approx: Approx;

  spread(end: Date): SpreadPoint[] {
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


export class PointRecord extends Record {
  constructor(

    public id: Id,
    public dateTime: Date,
    public amount: Amount) { super() }
} //一个点的记录


export class Records extends Repository<Record>{
  
}

type Approx = number;

export class Change { }


export interface RecordReference {
  records: Id[]
  linkRecord(recordId: Id): void
}
export function makeRecordReference<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    records: Id[] = [];
    linkRecord(record: Id) {
      if (!this.records.includes(record)) {
        this.records.push(record)
      }
    }
  }
}