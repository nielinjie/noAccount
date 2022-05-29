export interface TreeNode {
  parent: NodeId | undefined;
  id: NodeId;
}
export class TreeNode implements TreeNode{
  name: string;
  id: string;
  parent: string | undefined;
}
export interface Tree<T extends TreeNode> {}

export class Tree<T extends TreeNode> implements Tree<T> {
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
  add(node: T, parent: T | undefined = undefined): void {
    if (parent) {
      node.parent = parent.id;
    }
    this.nodes.push(node);
  }
}
type NodeId = string;
