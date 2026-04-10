class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map()
        const robFrom = (i) => {
            if (i >= nums.length) return 0
            if (cache.has(i)) return cache.get(i)

            const v = nums[i] + Math.max(robFrom(i + 2), robFrom(i + 3))
            cache.set(i, v)
            return v
        }

        return Math.max(robFrom(0), robFrom(1))
    }
}
