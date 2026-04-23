"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        cache = {}

        def dfs(node: Optional['Node']):
            if node is None:
                return node
            if node in cache:
                return cache[node]
            
            cloned = Node(node.val)
            cache[node] = cloned

            for n in node.neighbors:
                if cloned.neighbors is None:
                    cloned.neighbors = []
                cloned.neighbors.append(dfs(n))

            return cloned

        return dfs(node)
