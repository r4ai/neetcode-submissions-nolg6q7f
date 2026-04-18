class UnionFind2D:
    parents: list[int]
    sizes: list[int]

    def __init__(self, h: int, w: int):
        self.h = h
        self.w = w
        n = h * w
        self.parents = list(range(n))
        self.sizes = [1] * n

    def _to_1d(self, r: int, c: int) -> int:
        """2次元座標(r, c)を1次元のインデックスに変換する"""
        return r * self.w + c

    def _find_1d(self, x: int) -> int:
        """1次元インデックス用の経路圧縮付きfind"""
        if self.parents[x] == x:
            return x
        else:
            root = self._find_1d(self.parents[x])
            self.parents[x] = root
            return root

    def find(self, r: int, c: int) -> int:
        """(r, c) の根を1次元インデックスで返す"""
        return self._find_1d(self._to_1d(r, c))

    def union(self, r1: int, c1: int, r2: int, c2: int) -> bool:
        """(r1, c1) と (r2, c2) のグループを結合する"""
        root_1 = self.find(r1, c1)
        root_2 = self.find(r2, c2)

        if root_1 == root_2:
            return False

        size_1 = self.sizes[root_1]
        size_2 = self.sizes[root_2]

        if size_1 < size_2:
            self.parents[root_1] = root_2
            self.sizes[root_2] += self.sizes[root_1]
        else:
            self.parents[root_2] = root_1
            self.sizes[root_1] += self.sizes[root_2]

        return True

    def is_same(self, r1: int, c1: int, r2: int, c2: int) -> bool:
        """(r1, c1) と (r2, c2) が同じグループか判定する"""
        return self.find(r1, c1) == self.find(r2, c2)

    def get_size(self, r: int, c: int) -> int:
        """(r, c) が属するグループのサイズを取得する"""
        return self.sizes[self.find(r, c)]


class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        uf = UnionFind2D(len(grid), len(grid[0]))
        max_size = 0
        for r in range(len(grid)):
            for c in range(len(grid[r])):
                if grid[r][c] == 0:
                    continue

                # Top
                if r - 1 >= 0 and grid[r - 1][c] == 1:
                    uf.union(r - 1, c, r, c)

                # Left
                if c - 1 >= 0 and grid[r][c - 1] == 1:
                    uf.union(r, c - 1, r, c)

                max_size = max(max_size, uf.get_size(r, c))

        return max_size
