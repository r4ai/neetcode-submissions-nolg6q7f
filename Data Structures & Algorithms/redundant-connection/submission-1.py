class UnionFind:
    def __init__(self, n) -> None:
        self.roots = {i: i for i in range(n)}
        pass

    def find(self, a: int):
        parent = self.roots[a]
        while parent != self.roots[parent]:
            self.roots[parent] = self.roots[self.roots[parent]]
            parent = self.roots[parent]
        return parent

    def union(self, a: int, b: int):
        root_a = self.find(a)
        root_b = self.find(b)
        if root_a == root_b:
            return False

        self.roots[root_b] = self.roots[root_a]
        return True


class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        uf = UnionFind(len(edges) + 1)
        for a, b in edges:
            if not uf.union(a, b):
                return [a, b]
        raise ValueError()
