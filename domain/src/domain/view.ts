import { Project, Projects } from "./project";
import { Id, Record } from "./record";
export interface View {
  filter(record: Record): boolean;
}
export class ProjectView implements View {
  ;
  constructor(public project: Project) {

  }
  filter(record: Record): boolean {
    return this.project.records.includes(record.id)
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