import { Record } from "./record";
export interface Repository {
  getRecords(): Record[];
}

export class MemoryRepository implements Repository {
  private records:any[] = [];
//   private projects = [];
//   private accounts = [];
//   private adjustments = [];
  getRecords(): Record[] {
    return this.records;
  }
}
