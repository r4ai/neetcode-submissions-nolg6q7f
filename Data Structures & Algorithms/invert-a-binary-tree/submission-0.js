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
     * @return {TreeNode}
     */
    invertTree(root) {
        /** @param {TreeNode} tree */
        const invert = (tree) => {
            if (tree == null) return tree
            return new TreeNode(tree.val, invert(tree.right), invert(tree.left))
        }
        const inverted = invert(root)
        return inverted
    }
}
