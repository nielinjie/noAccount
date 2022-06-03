import { Constructor } from "../util";
import { makeRecordReference, RecordReference } from "./record";
import { Tree, TreeNode } from "./tree";
export interface Account extends TreeNode, RecordReference { }


export const Account = makeRecordReference(class _Account extends TreeNode { })

export class Accounts extends Tree<Account> {
    itemConstructor(): Constructor<Account> {
        return Account;
    }
}
