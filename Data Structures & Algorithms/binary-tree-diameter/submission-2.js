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
        /**
         * @param {TreeNode} tree
         * @param {number} dt
         */
        const f = (tree, acc) => {
            if (tree == null) return [acc, 0]
            const l = f(tree.left, acc)
            const r = f(tree.right, acc)
            const dl = tree.left ? (1 + l[1]) : 0
            const dr = tree.right ? (1 + r[1]) : 0
            console.log({ v: tree.val, l, r, dl, dr, acc })
            return [
                Math.max(acc, l[0], r[0], dl + dr),
                Math.max(dl, dr)
            ]
        }

        const res = f(root, 0)
        console.log(res)
        return res[0]
    }
}
