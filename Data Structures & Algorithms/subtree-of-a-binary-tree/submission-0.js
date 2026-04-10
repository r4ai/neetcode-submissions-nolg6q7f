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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSameTree = (p, q) => {
            if (p == null && q == null) return true
            if (p == null || q == null) return false
            if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
            return false
        }

        const dfs = (main, sub) => {
            if (main == null) return false
            if (main.val === sub.val && isSameTree(main, sub)) return true
            return dfs(main.left, sub) || dfs(main.right, sub)
        }

        return dfs(root, subRoot)
    }
}
