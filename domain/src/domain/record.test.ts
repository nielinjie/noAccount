import { App } from "./app";
import { testApp } from "./testUtil";

let app: App;
beforeAll(() => {
  app = testApp();
});

test("records", () => {
  const res = app.records.records;
  expect(res).toBeDefined();
});
