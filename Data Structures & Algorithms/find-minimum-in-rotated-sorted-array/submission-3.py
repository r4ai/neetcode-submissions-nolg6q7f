class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        while r - l > 1:
            m = (l + r) // 2
            if nums[l] <= nums[m]:
                l = m
            else:
                r = m
        return min(nums[0], nums[r])