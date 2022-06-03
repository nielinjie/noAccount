import cuid from "cuid";
import { Constructor } from "../util";
import { Repository, WithId } from "./repository";

export interface TreeNode extends WithId{
  parent: NodeId | undefined;
}
export class TreeNode implements TreeNode {
  name: string;
  id: string;
  parent: string | undefined;
}
export interface Tree<T extends TreeNode> { 
  itemConstructor(): Constructor<T>

}

export class Tree<T extends TreeNode> extends Repository<T> implements Tree<T>{
  constructor(items:T[]=[]){super(items);
    this.ensureRoot()
  }
  getRoot(): T {
    return this.items.find((n) => n.parent === undefined)!;
  }
  getChildren(node: T): T[] {
    return this.items.filter((n) => n.parent === node.id);
  }
  get(id: NodeId | undefined): T | undefined {
    if (id === undefined) return undefined;
    return this.items.find((n) => n.id === id);
  }
  getParent(node: T): T | undefined {
    return this.get(node.parent);
  }
  add(node: T, parent: T | undefined = undefined): T {
    if (parent) {
      node.parent = parent.id;
    }
    this.items.push(node);
    return node
  }
   ensureRoot() {
    if (!this.getRoot()) {
      this.add(this.defaultRoot())
    }
  }
  fromProperties(properties: any, parent: NodeId): T {
    let re = new (this.itemConstructor())();
    re = Object.assign(re, properties);
    re.id = cuid();
    let p: NodeId | undefined = parent
    if (parent === "_root") p = this.getRoot().id
    if (p === "_none") p = undefined
    re.parent = p
    return re;
  }
  fromName(name: string, parent: NodeId = "_root"): T {
    return this.fromProperties({ name }, parent)
  }
  defaultRoot(): T {
    return this.fromName("root", "_none")
  }

}





type NodeId = string;
