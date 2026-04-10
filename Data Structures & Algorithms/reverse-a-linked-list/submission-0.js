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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null) return null

        /**
         * @param {ListNode} prev
         * @param {ListNode} cur
         */
        const reverse = (prev, cur, i) => {
            if (cur == null) {
                const prev2 = new ListNode(prev.val)
                return [prev2, prev2]
            }
            const [tail, cur2] = reverse(cur, cur.next, i + 1)
            const prev2 = new ListNode(prev.val)
            cur2.next = prev2
            return [tail, prev2]
        }
        const tail = reverse(head, head.next, 0)[0]
        return tail
    }
}
