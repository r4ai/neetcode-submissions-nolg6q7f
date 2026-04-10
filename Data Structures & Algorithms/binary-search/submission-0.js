class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
         * @param {number} l
         * @param {number} r
         */
        const f = (l, r) => {
            const m = Math.floor((l + r) / 2)
            const v = nums[m]
            if (l > r) return -1
            if (v === target) return m
            if (v < target) return f(m + 1, r)
            if (v > target) return f(l, m - 1)
        }

        return f(0, nums.length - 1)
    }
}
