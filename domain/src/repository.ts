import { Record } from "./record";
export interface Repository {
  getRecords(): Record[];
}

export class MemoryRepository implements Repository {
  private records = [];
  getRecords(): Record[] {
    return this.records;
  }
}
