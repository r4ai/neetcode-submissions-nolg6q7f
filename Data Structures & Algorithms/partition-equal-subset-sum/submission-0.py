from functools import lru_cache

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        full = sum(nums)
        if full % 2 == 1:
            return False
        
        half = full // 2
        n = len(nums)

        @lru_cache(maxsize=None)
        def dfs(i: int, target: int) -> bool:
            if target == 0:
                return True
            if i == n or target < 0:
                return False

            return dfs(i + 1, target - nums[i]) or dfs(i + 1, target)

        return dfs(0, half)