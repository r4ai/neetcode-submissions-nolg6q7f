class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const val2index = new Map()
        for (const [i, n] of nums.entries()) {
            val2index[n] = i
        }

        for (const [i, n] of nums.entries()) {
            const diff = target - n
            const j = val2index[diff]
            if (j != null && i !== j) {
                return [i, j].sort()
            }
        }
    }
}
