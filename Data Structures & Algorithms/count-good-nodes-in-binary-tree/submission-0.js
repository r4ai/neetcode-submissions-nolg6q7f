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
    goodNodes(root) {
        const dfs = (tree, max) => {
            if (tree == null) return 0

            const [max_val, count] = tree.val >= max ? [tree.val, 1] : [max, 0]
            return count + dfs(tree.left, max_val) + dfs(tree.right, max_val)
        }

        return dfs(root, -Infinity)
    }
}
