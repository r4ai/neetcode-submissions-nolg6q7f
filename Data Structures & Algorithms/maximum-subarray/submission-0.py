class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = None
        for l in range(len(nums)):
            cur = 0
            for r in range(l, len(nums)):
                cur += nums[r]
                if res is None:
                    res = cur
                res = max(res, cur)
        return res
