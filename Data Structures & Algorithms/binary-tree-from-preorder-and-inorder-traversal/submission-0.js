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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        /**
         * @param {number[]} preorder
         * @param {number[]} inorder
         */
        const build = (preorder, inorder) => {
            if (preorder.length === 0 || inorder.length === 0) return null

            const val = preorder[0]
            const tree = new TreeNode(val)
            const mid = inorder.findIndex((v) => v === val)
            const pl = preorder.slice(1, 1 + mid)
            const pr = preorder.slice(1 + mid)
            const il = inorder.slice(0, mid)
            const ir = inorder.slice(mid + 1)
            tree.left = build(pl, il)
            tree.right = build(pr, ir)
            return tree
        }

        const root = build(preorder, inorder)
        return root
    }
}
