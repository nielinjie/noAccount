import { Tree, TreeNode } from "./tree";
import cuid from "cuid";
import { Id,  } from "./record";
export class Project extends TreeNode {
  records:Id[]

}
export class Projects extends Tree<Project> {
  constructor(projects: Project[] = []) {
    super();
    this.nodes = projects;
  }
  fromName(name: string): Project {
    let re = new Project();
    re.name = name;
    re.id = cuid();
    return re;
  }
}
