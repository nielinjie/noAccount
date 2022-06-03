import { Constructor } from "../util";
import { makeRecordReference, RecordReference } from "./record";
import { Tree, TreeNode } from "./tree";
export interface Account extends TreeNode, RecordReference { }
class _Account extends TreeNode { }
export const Account = makeRecordReference(_Account)

export class Accounts extends Tree<Account> {
    itemConstructor(): Constructor<Account> {
        return Account;
    }
}
