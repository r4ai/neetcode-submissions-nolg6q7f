class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map()

        const f = (i) => {
            if (i >= nums.length) return 0
            if (cache.has(i)) return cache.get(i)
            const num = nums[i]
            const val = num + Math.max(f(i + 2), f(i + 3))
            cache.set(i, val)
            return val
        }

        const [v0, v1] = [f(0), f(1)]
        console.log({ cache, v0, v1 })
        return Math.max(v0, v1)
    }
}
