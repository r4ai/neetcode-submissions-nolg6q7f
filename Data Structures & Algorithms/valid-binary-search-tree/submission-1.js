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
     * @return {boolean}
     */
    isValidBST(root) {
        const dfs = (tree, min, max) => {
            if (tree == null) return true
            if (tree.val <= min || max <= tree.val) return false
            return dfs(tree.left, min, tree.val) && dfs(tree.right, tree.val, max)
        }

        return dfs(root, -Infinity, Infinity)
    }
}
