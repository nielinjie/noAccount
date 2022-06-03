import { Tree, TreeNode } from "./tree";
import { makeRecordReference, RecordReference, } from "./record";
import { Constructor } from "../util";
export interface Project extends TreeNode, RecordReference { }
class _Project extends TreeNode { }

export const Project = makeRecordReference(_Project);

export class Projects extends Tree<Project> {

  itemConstructor(): Constructor<Project>{
    return Project;
  }



}

// export const CreatingProjects = withCreating(Projects, Project)
