from functools import lru_cache


class Solution:
    def numDecodings(self, s: str) -> int:
        @lru_cache(maxsize=None)
        def dfs(i):
            if i >= len(s):
                return 1
            if s[i] == "0":
                return 0
            count = 0
            if "1" <= s[i] and s[i] <= "9":
                count += dfs(i + 1)
            if i < len(s) - 1 and (
                (s[i] == "1" and ("0" <= s[i + 1] and s[i + 1] <= "9"))
                or (s[i] == "2" and ("0" <= s[i + 1] and s[i + 1] <= "6"))
            ):
                count += dfs(i + 2)
            return count

        return dfs(0)
