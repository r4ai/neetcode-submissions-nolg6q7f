/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        /** @type {ListNode | null} */
        let merged = null;
        let head = null;

        while (true) {
            let min_i = null;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i] == null) continue;
                if (min_i == null) {
                    min_i = i;
                    continue;
                }
                if (lists[i].val < lists[min_i].val) {
                    min_i = i;
                }
            }

            if (min_i == null) break;

            // merged を更新
            if (merged == null) {
                merged = new ListNode(lists[min_i].val)
                head = merged
            } else {
                merged.next = new ListNode(lists[min_i].val);
                merged = merged.next
            }

            // ポインタを更新
            lists[min_i] = lists[min_i].next;
        }

        return head;
    }
}
