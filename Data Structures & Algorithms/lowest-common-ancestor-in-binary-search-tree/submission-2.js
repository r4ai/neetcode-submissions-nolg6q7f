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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const find = (tree, a, b) => {
            if (tree == null) return null
            const v = tree.val
            console.log({ v, a, b })
            if ((a < v) && (b < v)) return find(tree.left, a, b)
            if ((a > v) && (b > v)) return find(tree.right, a, b)
            return tree
        }

        return find(root, p.val, q.val)
    }
}
