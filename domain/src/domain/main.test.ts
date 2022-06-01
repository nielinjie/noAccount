import { App } from "./app";
import { projectAndRecord } from "./project.test";
import { testApp } from "./testUtil";
import { Views } from "./view";

let app: App;
beforeAll(() => {
  app = testApp();
});

test("first case", () => {
  //已持有状态
  projectAndRecord(app.projects, app.records)
  //选出一个project，默认是root，也就是universal
  let project = app.projects.getRoot()
  //生成这个view
  let universalView = app.views.projectView(project.id)

  universalView.filter
  //查看这个view的内容。
});

