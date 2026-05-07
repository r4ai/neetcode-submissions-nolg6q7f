class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.sort()
        prev = -1
        for n in nums:
            if abs(n - prev) > 1:
                return n - 1
            prev = n
        return nums[-1] + 1