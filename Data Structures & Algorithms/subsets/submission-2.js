class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const dfs = (acc, cur, i) => {
            if (i === nums.length) return [...acc, cur]

            acc = dfs(acc, [...cur, nums[i]], i + 1)
            acc = dfs(acc, [...cur], i + 1)
            return acc
        }

        return dfs([], [], 0)
    }
}
