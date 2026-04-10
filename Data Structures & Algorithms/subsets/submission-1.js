class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const dfs = (acc, cur, i) => {
            if (i >= nums.length) {
                return [...acc, cur]
            }

            const left = dfs(acc, [...cur, nums[i]], i + 1)
            const right = dfs(left, [...cur], i + 1)
            return right
        }

        const result = dfs([], [], 0)
        console.log(result)
        return result
    }
}
