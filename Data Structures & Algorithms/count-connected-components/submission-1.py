class Node:
    def __init__(self, val):
        self.val: int = val
        self.children: set[Node] = set()


class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        nodes = [Node(i) for i in range(n)]
        for edge in edges:
            [s, e] = edge
            nodes[s].children.add(nodes[e])
            nodes[e].children.add(nodes[s])

        def dfs(cur: Node, prev: Optional[Node], visited: set[Node]):
            if cur in visited:
                return
            visited.add(cur)
            for child in cur.children:
                if child == prev:
                    continue
                dfs(child, cur, visited)

        visited: set[Node] = set()
        count = 0
        for node in nodes:
            if node in visited:
                continue
            dfs(node, None, visited)
            count += 1

        return count
