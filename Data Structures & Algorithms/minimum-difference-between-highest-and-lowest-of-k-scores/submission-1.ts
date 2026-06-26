class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums: number[], k: number): number {
        nums.sort((a, b) => a - b)
        let result = 100000000
        for (let i = 0; i + k - 1 < nums.length; i++) {
            const diff = nums[i + k - 1] - nums[i]
            result = Math.min(diff, result)
        }
        return result
    }
}
