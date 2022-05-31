import { Project, Projects } from "./project";
import { Id, Record } from "./record";
export interface View {
  filter(record: Record): boolean;
}
export class ProjectView implements View {
  //TODO 增加迭代的逻辑，project及其children的逻辑。
  constructor(public project: Project) {

  }
  filter(record: Record): boolean {
    let re = this.project.records.includes(record.id)

    return re
  }
}
// export class AccountView implements View {
//   constructor(public accountName: string) { }
// }
export class Views {
  constructor(public projects: Projects) { }
  projectView(id: Id) {
    const p = this.projects.get(id)
    if (p) return new ProjectView(p)
    return undefined
  }
}