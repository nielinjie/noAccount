import { Account, Accounts } from "./account";
import { Projects } from "./project";
import { Records } from "./record";
import { Repository } from "./repository";
import { TimeLine } from "./time";
import { Views } from "./view";

export interface App {
  timeLine: TimeLine;
  views: Views;
  projects: Projects;
  records: Records
  accounts  :Accounts
}
