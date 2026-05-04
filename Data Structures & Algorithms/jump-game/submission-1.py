from functools import lru_cache
import sys

sys.setrecursionlimit(10000)

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        @lru_cache(maxsize=None)
        def dfs(i):
            if i == len(nums) - 1:
                return True
            if i >= len(nums):
                return False

            n = nums[i]
            for j in range(1, n + 1):
                if dfs(i + j):
                    return True
            return False
        
        return dfs(0)