export interface View {}
export class ProjectView implements View {
  constructor(public projectName: string) {}
}
export class AccountView implements View {
  constructor(public accountName: string) {}
}
