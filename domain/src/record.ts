import { Change } from "./account";
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
export class Adjust {
    objId: string; //对哪个记录进行调整？
    //Adjust不是一个Record？
    //他的地位与Record基本一样。在View、序列化等方面同一。
} //调整

export class DiffAmount {} //增量
export class SumAmount {} // 存量
export class Approx {
  value: number;
}
