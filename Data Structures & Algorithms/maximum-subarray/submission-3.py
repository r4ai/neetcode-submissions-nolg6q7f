class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur = nums[0]
        res = nums[0]
        for i in range(1, len(nums)):
            num = nums[i]
            cur = max(cur + num, num)
            res = max(res, cur)
        return res
