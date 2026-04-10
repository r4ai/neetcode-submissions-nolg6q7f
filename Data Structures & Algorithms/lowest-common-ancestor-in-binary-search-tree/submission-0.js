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
        let n = null
        const has = (tree, a, b) => {
            if (tree === null) return false
            const left = has(tree.left, a, b)
            const right = has(tree.right, a, b)
            const cur = tree.val === a || tree.val === b
            console.log({ v: tree.val, left, right, cur })
            if ((left && right) || (cur && left) || (cur && right)) n = tree
            return left || right || cur
        }
        const tmp = has(root, p.val, q.val)
        return n
    }
}
