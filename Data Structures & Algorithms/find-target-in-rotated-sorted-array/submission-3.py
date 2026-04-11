class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1

        is_in_left = l <= target

        while r - l > 1:
            m = (l + r) // 2

            print(l, m, r)

            if nums[m] == target:
                return m

            if nums[l] <= nums[m]:
                # l ~ m ~ ? ~ r
                # ^^^^^^^^^ ^^^
                # 左        右
                if nums[l] <= target and target <= nums[m]:
                    r = m
                else:
                    l = m
            else:
                # l ~ ? ~ m ~ r
                # ^^^ ^^^^^^^^^
                # 左  右
                if nums[m] <= target and target <= nums[r]:
                    l = m
                else:
                    r = m
        
        if nums[l] == target:
            return l
        if nums[r] == target:
            return r
        return -1