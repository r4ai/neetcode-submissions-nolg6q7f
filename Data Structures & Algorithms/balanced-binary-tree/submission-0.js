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
    isBalanced(root) {
        let balanced = true

        const height = (tree) => {
            if (tree == null) return 0
            const left = tree.left ? 1 + height(tree.left) : 0
            const right = tree.right ? 1 + height(tree.right) : 0
            balanced = balanced && (Math.abs(left - right) <= 1)
            console.log({ v: tree.val, left, right, balanced })
            return Math.max(left, right)
        }

        const h = height(root)
        console.log({ h, balanced })

        return balanced
    }
}
