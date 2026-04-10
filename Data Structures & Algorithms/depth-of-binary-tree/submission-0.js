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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        /**
         * @param {number} d
         * @param {TreeNode} r
         **/
        const f = (d, r) => {
            if (r == null) return d
            return Math.max(f(d + 1, r.left), f(d + 1, r.right))
        }

        return f(0, root)
    }
}
