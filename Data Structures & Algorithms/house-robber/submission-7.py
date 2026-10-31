from functools import lru_cache

class Solution:
    def rob(self, nums: List[int]) -> int:
        @lru_cache(maxsize=None)
        def dfs(i: int) -> int:
            if i >= len(nums):
                return 0
            return nums[i] + max(dfs(i + 2), dfs(i + 3))

        return max(dfs(0), dfs(1))
