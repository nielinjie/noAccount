import { Tree, TreeNode } from "./tree";
import { makeRecordReference, RecordReference, } from "./record";
export interface Project extends TreeNode, RecordReference { }
class _Project extends TreeNode { }

export const Project = makeRecordReference(_Project);

export class Projects extends Tree<Project> {

  constructor(projects: Project[] = []) {
    super();
    this.itemConstructor = Project
    this.nodes = projects;
    this.ensureRoot();
  }


}

// export const CreatingProjects = withCreating(Projects, Project)
