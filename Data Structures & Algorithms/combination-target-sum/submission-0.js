class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const dfs = (acc, cur, sum, i) => {
            if (i >= nums.length || sum > target) return acc
            if (sum === target) return [...acc, cur]

            const left = dfs(acc, [...cur, nums[i]], sum + nums[i], i)
            const right = dfs(left, [...cur], sum, i + 1)
            return right
        }

        const result = dfs([], [], 0, 0)
        return result
    }
}
