from functools import lru_cache

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:

        @lru_cache(maxsize=None)
        def f(i) -> int:
            v = 1
            for j in range(i):
                if nums[j] < nums[i]:
                    v = max(v, f(j) + 1)
            return v

        v = 1
        for i in range(len(nums)):
            v = max(v, f(i))
        return v
