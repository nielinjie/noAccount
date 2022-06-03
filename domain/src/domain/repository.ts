import cuid from "cuid";
export type Id = string

export type WithId = { id: Id }
export interface Repository<T extends WithId> {
  getItems(): T[];
  add(item: T): T
  update(item: T): T
  get(id: Id): T
}

export class Repository<T extends WithId> implements Repository<T>{
  items: T[] = [];
  constructor(items: T[] = []) { this.items = items; }
  getItems(): T[] {
    return this.items;
  }
  add(item: T) {
    this.ensureId(item)
    this.items.push(item);
    return item;
  }
  ensureId(item: T) {
    if (item.id === undefined) {
      item.id = cuid()
    }
  }

}
//TODO repository 的实现方式memory、file、db、remote，作为mixin实现。
// export class MemoryRepository<T extends WithId> extends Repository<T> {

// }
