import { Record } from "./record";
export interface View {
  filter(record: Record): boolean;
}
export class ProjectView implements View {
  constructor(public projectName: string) {}
  filter(record: Record): boolean {
      record.project = this.projectName;
  }
}
export class AccountView implements View {
  constructor(public accountName: string) {}
}
