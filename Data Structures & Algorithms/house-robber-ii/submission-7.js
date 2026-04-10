class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0]

        /** @type {Map<number, number>} */
        const cache = new Map()
        const dfs = (s, i) => {
            if (i < s) return 0
            if (cache.has(i)) return cache.get(i)
            const v = nums[i] + Math.max(dfs(s, i - 2), dfs(s, i - 3))
            cache.set(i, v)
            return v
        }
        const left = Math.max(
            dfs(0, nums.length - 2),
            dfs(0, nums.length - 3),
        )
        cache.clear()
        const right = Math.max(
            dfs(1, nums.length - 1),
            dfs(1, nums.length - 2)
        )
        return Math.max(left, right)
    }
}
