class Node:
    def __init__(self, index: int) -> None:
        self.index = index
        self.children = set()


class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if n == 1:
            for edge in edges:
                if edge[0] == edge[1]:
                    return False
            return True

        nodes = [Node(i) for i in range(n)]

        for edge in edges:
            [s, e] = edge
            nodes[s].children.add(nodes[e])
            nodes[e].children.add(nodes[s])

        def is_valid(node: Node, prev: Node, visited: set[Node]):
            if node in visited:
                return False

            print(node.index, [n.index for n in node.children])

            visited.add(node)
            for child in node.children:
                if prev.index != child.index and not is_valid(child, node, visited):
                    return False
            if node == prev:
                return len(visited) == n
            return True

        for node in nodes:
            if not is_valid(node, node, set()):
                return False
        return True
