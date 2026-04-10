class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const [i, n] of nums.entries()) {
            for (const [j, m] of nums.entries()) {
                if (i === j) continue
                if (n + m === target) {
                    return [i, j]
                }
            }
        }
    }
}
