import { add, compareAsc, sub } from "date-fns";
import { notImplementedError } from "../util";
import { Amount } from "./amount";
import { Repository } from "./repository";
import { ExactValue, Value } from "./value";

export class TimeLine {
    //TODO 是否支持endless模式？
    //目前认为，project有endless模式，但timeline（view）是没有的。
    //end： Date｜undefined
    start: Date;
    end: Date;
    repository: Repository
    getPoints(): TimeLinePoint[] {
        throw notImplementedError();
    }
}

export class TimeLinePoint {
    constructor(
        public time: Date,
        public value: number[]) { }; //绝对值，考虑存量/增量、精确/模糊之后的值。由于有模糊，所以可能多个。
}

export function pointSetOnTimeLine(timeLine: TimeLine, points: { dateTime: Date, amount: Amount }[]): TimeLinePoint[] {
    let value: Value = new ExactValue('rmb', 0)
    let re = []
    let orderedPoints = points.sort((a, b) => compareAsc(a.dateTime, b.dateTime))
    //points 需要线排个序哎。
    for (const p of orderedPoints) {
        if (p.amount.type === 'diff') {
            value = value.add(p.amount.value)
        } else if (p.amount.type === 'sum') {
            value = p.amount.value
        } else {
            throw notImplementedError()
        }
        re.push(new TimeLinePoint(p.dateTime, [value.toExact().value]))
    }
    return re
}


export function monthsAfter(n: number, date: Date = new Date()): Date {
    return add(date, { months: n })
}
export function daysAfter(n: number, date: Date = new Date()): Date {
    return add(date, { days: n })
}