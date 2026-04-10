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
     * @return {number[]}
     */
    rightSideView(root) {
        /**
         * @param {number[]} acc
         * @param {TreeNode} tree
         * @param {number} l
         * @param {number} ml
         */
        const dfs = (acc, tree, l, ml) => {
            if (tree == null) return [acc, ml]
            console.log({ l, acc, ml })

            const left = dfs(l > ml ? [...acc, tree.val] : acc, tree.right, l + 1, Math.max(l, ml))
            const right = dfs(l > left[1] ? [...left[0], tree.val] : left[0], tree.left, l + 1, Math.max(l, left[1]))
            console.log({ left, right })
            return right
        }

        console.log(root)

        const [res, _] = dfs([], root, 0, -1)
        return res
    }
}
