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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = []
        const dfs = (tree, level) => {
            if (tree == null) return
            
            if (result.length < level + 1) result.push([])
            result[level].push(tree.val)

            dfs(tree.left, level + 1)
            dfs(tree.right, level + 1)
        }

        dfs(root, 0)
        return result
    }
}
