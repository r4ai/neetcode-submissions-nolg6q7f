from functools import reduce


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        dp_max = nums.copy()
        dp_min = nums.copy()

        for i in range(1, len(nums)):
            n = nums[i]
            candidates = [n, dp_max[i - 1] * n, dp_min[i - 1] * n]
            dp_max[i] = max(candidates)
            dp_min[i] = min(candidates)

        return max(dp_max)
