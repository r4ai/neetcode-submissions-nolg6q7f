class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def bsearch(l: int, r: int):
            m = l + (r - l) // 2
            if l > r:
                return - 1
            elif target == nums[m]:
                return m
            elif target < nums[m]:
                return bsearch(l , m - 1)
            else:
                return bsearch(m + 1, r)
        
        return bsearch(0, len(nums) - 1)