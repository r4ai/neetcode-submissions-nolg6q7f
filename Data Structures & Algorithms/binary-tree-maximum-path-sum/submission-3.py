# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

import math


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def dfs(acc: int, node: Optional[TreeNode]) -> tuple[int, int]:
            if node is None:
                return (acc, 0)

            (acc, left) = dfs(acc, node.left)
            (acc, right) = dfs(acc, node.right)

            value = max(left, right) + node.val
            print(acc, value)

            acc = max(acc, left + right + node.val)

            if value < 0:
                # Path を切る
                return (acc, 0)
            else:
                # Path を追加
                return (acc, value)

        return dfs(-1000, root)[0]
