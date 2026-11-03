"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""


class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        cache = {}
        def dfs(n: Node | None) -> Node | None:
            if n is None:
                return None
            if n.val in cache:
                return cache[n.val]

            cloned = Node(n.val)
            cache[n.val] = cloned
            for child in n.neighbors:
                cloned.neighbors.append(dfs(child))
            return cloned

        return dfs(node)
