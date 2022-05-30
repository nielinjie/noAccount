import { DiffAmount } from "./amount";
import { App } from "./app";
import { Projects } from "./project";
import { SeqRecord } from "./record";
import { MemoryRepository } from "./repository";
import { TimeLine } from "./time";
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

test("income project", () => {
  let projects = new Projects();
  let incomeProject = projects.fromName("main income");
  let income = new SeqRecord();
  income.interval = "M";
  income.start = new Date();
  income.amount = new DiffAmount(new ExactValue("rmb", 10000));
});

