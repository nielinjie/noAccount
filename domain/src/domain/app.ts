import { Repository } from "./repository";
import { TimeLine } from "./time";

export interface App {
  repository: Repository;
  timeLine: TimeLine;
}
