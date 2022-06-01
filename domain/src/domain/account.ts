import { makeRecordReference, RecordReference } from "./record";
import { Tree, TreeNode } from "./tree";
export interface Account extends TreeNode, RecordReference { }

export const Account = makeRecordReference(class _Account extends TreeNode { })

export class Accounts extends Tree<Account> {
    constructor(accounts: Account[] = []) {
        super();
        this.itemConstructor = Account
        this.nodes = accounts;
        this.ensureRoot();
    }

}
