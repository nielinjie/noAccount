import { makeRecordReference, RecordReference } from "./record";
import { Tree, TreeNode } from "./tree";
export interface Account extends TreeNode, RecordReference { }
class _Account extends TreeNode {}
export const Account = makeRecordReference(_Account)

export class Accounts extends Tree<Account> {
    constructor(accounts: Account[] = []) {
        super();
        this.itemConstructor = Account
        this.nodes = accounts;
        this.ensureRoot();
    }

}
