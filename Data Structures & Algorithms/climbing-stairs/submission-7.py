class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {}
        def dfs(m: int) -> int:
            if m in cache:
                return cache[m]
            if m < 0:
                return 0
            if m == 0:
                return 1
            v = dfs(m - 1) + dfs(m - 2)
            cache[m] = v
            return v
        return dfs(n)