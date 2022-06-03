import { App } from "./app";
import { incomeProject, projectAndRecord } from "./project.test";
import { testApp } from "./testUtil";

let app: App;
beforeAll(() => {
    app = testApp();
});
test("views", () => {
    let [p, rs] = projectAndRecord(app.projects, app.records)
    let views = app.views;
    let view = views.projectView(p.id);
    let recordArray = app.records.getItems().filter(r => view.filter(r))
    expect(recordArray).toEqual(expect.arrayContaining([matchValue(10000)]))
})

function matchValue(value: number) {
    return expect.objectContaining({
        amount: expect.objectContaining({ value: expect.objectContaining({ value: value }) })
    })
}