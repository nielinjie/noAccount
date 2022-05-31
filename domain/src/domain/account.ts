import cuid from "cuid";
import { Id } from "./record";
import { Tree, TreeNode } from "./tree";

export class Account extends TreeNode {
    records: Id[] = [];
    linkRecord(record: Id) {
        if (!this.records.includes(record)) {
            this.records.push(record)
        }
    }
}

export class Accounts extends Tree<Account> {
    constructor(accounts: Account[] = []) {
        super();
        this.nodes = accounts;
        this.ensureRoot();
    }
    private ensureRoot() {
        if (!this.getRoot()) {
            this.add(this.fromName("root", "_none"))
        }
    }
    fromProperties(properties: any, parent: Id): Account {
        let re = new Account();
        re = Object.assign(re, properties);
        re.id = cuid();
        let p: Id | undefined = parent
        if (parent === "_root") p = this.getRoot().id
        if (p === "_none") p = undefined
        re.parent = p
        return re;
    }
    fromName(name: string, parent: Id = "_root"): Account {
        return this.fromProperties({ name }, parent)
    }
}
