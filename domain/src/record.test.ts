import { App } from "./app";
import { MemoryRepository, Repository } from "./repository";

let app: App;
beforeAll(() => {
  app = {
    repository: new MemoryRepository(),
  };
});

test("records", () => {
  const res = app.repository.getRecords();
  expect(res).toBeDefined();
});
