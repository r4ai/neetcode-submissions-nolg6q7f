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

            const l = dfs(tree.left, i)
            let jl = 1 + l
            console.log({ v: tree.val, i, jl, l })
            if (jl === k) {
                found = tree.val
                return jl
            }
            const jr = dfs(tree.right, jl)
            console.log({ v: tree.val, i, jr, l })
            return jr
        }
        const j = dfs(root, 0)
        console.log(j)
        return found
    }
}
