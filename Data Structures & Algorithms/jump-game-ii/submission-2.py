from functools import lru_cache
import sys

sys.setrecursionlimit(10000)

class Solution:
    def jump(self, nums: List[int]) -> int:
        inf = len(nums)

        @lru_cache(maxsize=None)
        def dfs(i) -> int:
            num = nums[i]
            if i == len(nums) - 1:
                return 0
            if num == 0:
                return inf
            start = i + 1
            end = min(len(nums) - 1, i + num) + 1
            return 1 + min([dfs(j) for j in range(start, end)])

        return dfs(0)
