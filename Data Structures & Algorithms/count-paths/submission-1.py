from functools import lru_cache

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        @lru_cache(maxsize=None)
        def dfs(x, y):
            if x == 0 and y == 0:
                return 1
            if x == 0:
                return dfs(x, y - 1)
            if y == 0:
                return dfs(x - 1, y)
            return dfs(x - 1, y) + dfs(x, y - 1)

        return dfs(m - 1, n - 1)