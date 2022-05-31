import { Tree, TreeNode } from "./tree";
import cuid from "cuid";
import { Id, } from "./record";
export class Project extends TreeNode {
  records: Id[] = [];
  linkRecord(record: Id) {
    if (!this.records.includes(record)) {
      this.records.push(record)
    }
  }
}
export class Projects extends Tree<Project> {
  constructor(projects: Project[] = []) {
    super();
    this.nodes = projects;
    this.ensureRoot();
  }
  private ensureRoot() {
    if (!this.getRoot()) {
      this.add(this.fromName("root", "_none"))
    }
  }
  fromProperties(properties: any, parent: Id): Project {
    let re = new Project();
    re = Object.assign(re, properties);
    re.id = cuid();
    let p: Id | undefined = parent
    if (parent === "_root") p = this.getRoot().id
    if (p === "_none") p = undefined
    re.parent = p
    return re;
  }
  fromName(name: string, parent: Id = "_root"): Project {
    return this.fromProperties({ name }, parent)
  }
}
