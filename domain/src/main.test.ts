import { App } from "./app";
import { Amount, ExactAmount } from "./currency";
import { Project, Projects } from "./project";
import { SeqRecord } from "./record";
import { MemoryRepository } from "./repository";

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
  income.amount = new ExactAmount("rmb", 10000);
});
