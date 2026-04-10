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
    diameterOfBinaryTree(root) {
        let max = -1

        /**
         * @param {TreeNode} tree
         * @param {number} dt
         */
        const f = (tree, dt) => {
            if (tree == null) return 0
            const dl = tree.left ? (1 + f(tree.left, 1 + dt)) : 0
            const dr = tree.right ? (1 + f(tree.right, 1 + dt)) : 0
            const mdlr = Math.max(
                dl, dr
            )
            console.log({ v: tree.val, dt, dl, dr, mdlr })
            max = Math.max(
                max,
                dl + dr,
            )
            return mdlr
        }

        const r = f(root, 0)
        console.log({ r, max })
        return max
    }
}
