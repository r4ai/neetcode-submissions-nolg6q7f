class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        /**
         * @param {number[][]} acc
         * @param {number[]} cur
         * @param {number[]} ns
         */
        const dfs = (acc, cur, ns) => {
            if (ns.length === 0) return [...acc, cur]

            for (let i = 0; i < ns.length; i++) {
                const n = ns[i]
                const rest = ns.filter((_, j) => j !== i)
                acc = dfs(acc, [...cur, n], rest)
            }

            return acc
        }

        const result = dfs([], [], nums)
        return result
    }
}
