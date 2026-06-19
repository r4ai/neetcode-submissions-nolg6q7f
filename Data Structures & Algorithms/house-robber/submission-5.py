class Solution:
    def rob(self, nums: List[int]) -> int:
        cache = {}
        def dfs(i: int) -> int:
            if i in cache:
                return cache[i]
            if i >= len(nums):
                return 0
            v = nums[i] + max(dfs(i + 2), dfs(i + 3))
            cache[i] = v
            return v
        
        return max(dfs(0), dfs(1))
        