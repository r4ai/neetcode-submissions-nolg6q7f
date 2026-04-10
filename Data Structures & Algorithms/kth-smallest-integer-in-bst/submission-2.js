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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let found
        const dfs = (tree, i) => {
            if (tree == null) return i

            let jl = 1 + dfs(tree.left, i)
            if (jl === k) {
                found = tree.val
            }
            const jr = dfs(tree.right, jl)
            return jr
        }
        const j = dfs(root, 0)
        return found
    }
}
