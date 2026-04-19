from functools import lru_cache

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        @lru_cache(maxsize=None)
        def dfs(i: int, j: int) -> int:
            if i >= len(text1) or j >= len(text2):
                return 0
            t1 = text1[i]
            v = 0
            for k in range(j, len(text2)):
                t2 = text2[k]
                if t1 == t2:
                    v = max(v, dfs(i + 1, k + 1) + 1)
                else:
                    v = max(v, dfs(i + 1, j))
            return v

        return dfs(0, 0)
