import { App } from "./app";
import { Amount, ExactAmount } from "./currency";
import { Project } from "./project";
import { SeqRecord } from "./record";
import { MemoryRepository } from "./repository";

let app: App;
beforeAll(() => {
  app = {
    repository: new MemoryRepository(),
  };
});

test("income project",()=>{
    let incomeProject = Project.fromName("main income")
    let income = new SeqRecord()
    income.duration = "M"
    income.start = new Date()
    income.amount = new ExactAmount("rmb", 10000);
})