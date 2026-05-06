from functools import lru_cache


class Solution:
    def countBits(self, n: int) -> List[int]:
        @lru_cache(maxsize=None)
        def dfs(m: int) -> int:
            if m == 0:
                return 0
            return (m & 1) + dfs(m >> 1)

        return [dfs(m) for m in range(n + 1)]
