from functools import lru_cache


class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        @lru_cache(maxsize=None)
        def dfs(y, x) -> int:
            if y < 0 or m <= y or x < 0 or n <= x:
                return 0
            if y == m - 1 and x == n - 1:
                return 1

            return dfs(y + 1, x) + dfs(y, x + 1)

        return dfs(0, 0)
