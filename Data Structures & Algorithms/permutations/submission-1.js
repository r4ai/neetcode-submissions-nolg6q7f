class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        /**
         * @param {number[][]} acc
         * @param {number[]} cur
         * @param {boolean[]} pick
         */
        const dfs = (acc, cur, pick) => {
            if (cur.length === nums.length) {
                acc.push([...cur])
                return acc
            }
            console.log({ cur, pick })

            for (let i = 0; i < nums.length; i++) {
                if (pick[i]) continue

                pick[i] = true
                cur.push(nums[i])
                acc = dfs(acc, cur, pick)
                pick[i] = false
                cur.pop()
            }

            return acc
        }

        return dfs([], [], nums.map(() => false))
    }
}
