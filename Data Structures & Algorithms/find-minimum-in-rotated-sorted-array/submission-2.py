class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        while r - l > 1:
            m = (l + r) // 2
            if nums[l] <= nums[m]:
                print("->", l, m, r)
                l = m
            else:
                print("<-", l, m, r)
                r = m
        return min(nums[0], nums[r])