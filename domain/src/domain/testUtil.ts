import { Accounts } from "./account";
import { App } from "./app";
import { Projects } from "./project";
import { Records } from "./record";
import { TimeLine } from "./time";
import { Views } from "./view";

export function testApp(): App {
    // let repository = new MemoryRepository();
    let projects = new Projects();
    return ({
        // repository,
        timeLine: (() => {
            const re = new TimeLine();
            return re;
        })(),
        projects,
        views:new Views(projects),
        records: new Records(),
        accounts:new Accounts()
    });
}