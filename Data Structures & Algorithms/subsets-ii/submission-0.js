class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        /**
         * @param {number[][]} acc
         * @param {number[]} cur
         * @param {number} i
         */
        const dfs = (acc, cur, i) => {
            if (i >= nums.length) return [...acc, cur]

            // Left
            acc = dfs(acc, [...cur, nums[i]], i + 1)

            // Right
            let next_i = i + 1
            while (next_i < nums.length && nums[next_i - 1] === nums[next_i])
                next_i += 1
            acc = dfs(acc, [...cur], next_i)

            return acc
        }

        nums.sort((a, b) => a - b)
        return dfs([], [], 0)
    }
}
