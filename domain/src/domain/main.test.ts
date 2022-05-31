import { DiffAmount } from "./amount";
import { App } from "./app";
import { Projects } from "./project";
import { SeqRecord } from "./record";
import { MemoryRepository } from "./repository";
import { testApp } from "./testUtil";
import { TimeLine } from "./time";
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

