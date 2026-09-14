class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def bsearch(l, r) -> int:
            m = (r + l) // 2
            v = nums[m]
            if l > r:
                return -1
            elif v == target:
                return m
            elif v < target:
                return bsearch(m + 1, r)
            else:
                return bsearch(l, m - 1)
        
        return bsearch(0, len(nums) - 1)