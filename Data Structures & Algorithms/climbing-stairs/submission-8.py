from functools import lru_cache

class Solution:
    def climbStairs(self, n: int) -> int:
        @lru_cache(maxsize=None)
        def dfs(i: int) -> int:
            if i > n:
                return 0
            if i == n:
                return 1
            return dfs(i + 1) + dfs(i + 2)
        
        return dfs(0)