import { App } from "./app";
import { Project, Projects } from "./project";
import {  Record, Records } from "./record";
import { Id } from "./repository";
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
  constructor(public projects:Projects,public records:Records) { }
  projectView(id: Id) {
    const p = this.projects.get(id)
    if (p) return new ProjectView(p)
    return undefined
  }
  getRecords(view: View){
    let records = this.records.getItems()
    return records.filter(r=>view.filter(r))
  }

}