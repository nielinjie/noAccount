import { Accounts } from "./account";
import { App } from "./app";
import { Projects } from "./project";
import { Records } from "./record";
import { TimeLine } from "./time";
import { Views } from "./view";

export function testApp(): App {
    let projects = new Projects();
    let records = new Records()

    return({
        // repository,
        timeLine: (() => {
            const re = new TimeLine();
            return re;
        })(),
        projects,
        accounts: new Accounts(),
        records,
        views: new Views(projects, records),
    });


}