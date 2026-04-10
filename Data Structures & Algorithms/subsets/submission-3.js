class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []
        const dfs = (acc, i) => {
            if (i >= nums.length) {
                result.push(acc)
                return
            }

            const n = nums[i]
            dfs([...acc, n], i + 1)
            dfs([...acc], i + 1)
        }
        dfs([], 0)
        return result
    }
}
