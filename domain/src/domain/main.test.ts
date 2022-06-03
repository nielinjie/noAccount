import { DiffAmount } from "./amount";
import { App } from "./app";
import { Projects } from "./project";
import { projectAndRecord } from "./project.test";
import { SeqRecord } from "./record";
import { testApp } from "./testUtil";
import { ExactValue } from "./value";

let app: App;
beforeAll(() => {
  app = testApp();
});

test("income project", () => {
  let projects = new Projects();
  let incomeProject = projects.fromName("main income",projects.getRoot().id);
  let income = new SeqRecord();
  income.interval = "M";
  income.start = new Date();
  income.amount = new DiffAmount(new ExactValue("rmb", 10000));
});

test("first question", () => {
  let [p,rs ]= projectAndRecord(app.projects,app.records)
 let views =app.views
 const projectView =views.projectView(p.id)
 
})