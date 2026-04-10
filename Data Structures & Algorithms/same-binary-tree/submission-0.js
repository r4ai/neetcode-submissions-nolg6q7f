/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const f = (a, b) => {
            if (a == null && b == null) return true
            if (a == null || b == null) return false
            if (a.val == b.val) return f(a.left, b.left) && f(a.right, b.right)
            return false
        }

        return f(p, q)
    }
}
