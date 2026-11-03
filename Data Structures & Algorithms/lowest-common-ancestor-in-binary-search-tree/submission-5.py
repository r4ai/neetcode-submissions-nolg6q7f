# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        def dfs(node: TreeNode | None) -> tuple[(TreeNode | None), set[int]]:
            if node is None:
                return None, set()

            found, left = dfs(node.left)
            if found:
                return found, set()
            found, right = dfs(node.right)
            if found:
                return found, set()

            visited = (
                left
                .union(right)
                .union({node.val} if node.val == p.val or node.val == q.val else {})
            )
            if len(visited) == 2:
                return node, visited
            return None, visited
        
        found, _ = dfs(root)
        return found

