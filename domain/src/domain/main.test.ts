import { DiffAmount } from "./amount";
import { App } from "./app";
import { Projects } from "./project";
import { SeqRecord } from "./record";
import { MemoryRepository } from "./repository";
import { ExactValue } from "./value";

let app: App;
beforeAll(() => {
  app = {
    repository: new MemoryRepository(),
  };
});

test("income project", () => {
  let projects = new Projects();
  let incomeProject = projects.fromName("main income");
  let income = new SeqRecord();
  income.duration = "M";
  income.start = new Date();
  income.amount = new DiffAmount(new ExactValue("rmb", 10000));
});
