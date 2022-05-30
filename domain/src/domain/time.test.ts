import { DiffAmount, SumAmount } from "./amount";
import { App } from "./app";
import { PointRecord, SeqRecord } from "./record";
import { MemoryRepository } from "./repository";
import { daysAfter, monthsAfter, pointSetOnTimeLine, TimeLine, TimeLinePoint } from "./time";
import { ExactValue } from "./value";


let app: App;
beforeAll(() => {
    let repository = new MemoryRepository();
    app = {
        repository,
        timeLine: (() => {
            const re = new TimeLine();
            re.repository = repository;
            return re;
        })()
    };
});



test("timeLine", () => {

    const now = new Date('2022-06-30T16:00:00.000Z')
    let income = new SeqRecord();
    income.interval = "M";
    income.start = monthsAfter(-3, now)
    income.amount = new DiffAmount(new ExactValue("rmb", 10000));

    const points = income.spread(monthsAfter(2, now))
    expect(points.length).not.toEqual(0)



    let timeLinePoints = pointSetOnTimeLine(undefined, points)
    // console.log(timeLinePoints)

    testPointLine(timeLinePoints, mul10000(1, 2, 3, 4, 5, 6))


});

test("timeline with extra", () => {
    const now = new Date('2022-06-30T16:00:00.000Z')
    const yesterday = daysAfter(-1, now)
    let income = new SeqRecord();
    income.interval = "M";
    income.start = monthsAfter(-3, now)
    income.amount = new DiffAmount(new ExactValue("rmb", 10000));

    const points = income.spread(monthsAfter(2, now))
    expect(points.length).not.toEqual(0)

    let extra = new PointRecord(yesterday, new DiffAmount(new ExactValue("rmb", 10000)))


    let timeLinePoints = pointSetOnTimeLine(undefined, [...points, extra])

    testPointLine(timeLinePoints, mul10000(1, 2, 3, 4, 5, 6, 7))
})
test("timeline with a hard setting", () => {
    const now = new Date('2022-06-30T16:00:00.000Z')
    const yesterday = daysAfter(-1, now)
    let income = new SeqRecord();
    income.interval = "M";
    income.start = monthsAfter(-3, now)
    income.amount = new DiffAmount(new ExactValue("rmb", 10000));

    const points = income.spread(monthsAfter(2, now))
    expect(points.length).not.toEqual(0)

    let extra = new PointRecord(yesterday, new SumAmount(new ExactValue("rmb", 10000)))


    let timeLinePoints = pointSetOnTimeLine(undefined, [...points, extra])

    testPointLine(timeLinePoints, mul10000(1, 2, 3, 1, 2, 3, 4))
})

function testPointLine(points: TimeLinePoint[], numbers: number[]) {
    expect(points.map(point => point.value[0])).toEqual(numbers)
}
function mul10000(...numbers: number[]): number[] {
    return numbers.map(n => n * 10000)
}