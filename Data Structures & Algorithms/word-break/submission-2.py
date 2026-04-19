from functools import lru_cache

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        words = tuple(wordDict)

        @lru_cache(maxsize=None)
        def dfs(rest: str) -> bool:
            if rest == "":
                return True

            for word in words:
                if rest.startswith(word) and dfs(rest[len(word):]):
                    return True

            return False

        return dfs(s)