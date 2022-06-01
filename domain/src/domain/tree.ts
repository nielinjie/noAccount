import cuid from "cuid";
import { Constructor } from "../util";

export interface TreeNode {
  parent: NodeId | undefined;
  id: NodeId;
}
export class TreeNode implements TreeNode {
  name: string;
  id: string;
  parent: string | undefined;
}
// export interface Tree<T extends TreeNode> { }

export class Tree<T extends TreeNode> implements Tree<T> {
  itemConstructor: Constructor<T>
  nodes: T[];
  getRoot(): T {
    return this.nodes.find((n) => n.parent === undefined)!;
  }
  getChildren(node: T): T[] {
    return this.nodes.filter((n) => n.parent === node.id);
  }
  get(id: NodeId | undefined): T | undefined {
    if (id === undefined) return undefined;
    return this.nodes.find((n) => n.id === id);
  }
  getParent(node: T): T | undefined {
    return this.get(node.parent);
  }
  add(node: T, parent: T | undefined = undefined): T {
    if (parent) {
      node.parent = parent.id;
    }
    this.nodes.push(node);
    return node
  }
   ensureRoot() {
    if (!this.getRoot()) {
      this.add(this.defaultRoot())
    }
  }
  fromProperties(properties: any, parent: NodeId): T {
    let re = new this.itemConstructor();
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
