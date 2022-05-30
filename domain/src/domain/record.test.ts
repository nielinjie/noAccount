import { App } from "./app";
import { MemoryRepository, Repository } from "./repository";
import { TimeLine } from "./time";

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

test("records", () => {
  const res = app.repository.getRecords();
  expect(res).toBeDefined();
});
