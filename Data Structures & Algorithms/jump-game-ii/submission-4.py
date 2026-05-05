class Solution:
    def jump(self, nums: List[int]) -> int:
        inf = len(nums)
        dp = [0 for _ in range(len(nums))]
        for i in range(len(nums) - 2, -1, -1):
            if nums[i] == 0:
                dp[i] = inf
            else:
                dp[i] = min([1 + dp[j] for j in range(i + 1, min(len(nums) - 1, i + nums[i]) + 1)])
        return dp[0]
