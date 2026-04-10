class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        /** @type {Map<number, number>} */
        const cache = new Map()
        const f = (i) => {
            if (cache.has(i)) return cache.get(i)
            if (i < 0) return 0
            if (i <= 1) return nums[i]
            const v = nums[i] + Math.max(f(i - 2), f(i - 3))
            cache.set(i, v)
            return v
        }
        return Math.max(f(nums.length - 1), f(nums.length - 2))
    }
}
