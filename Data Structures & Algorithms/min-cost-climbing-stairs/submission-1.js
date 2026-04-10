class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length

        const dp = new Array(n + 1)
        dp[n] = 0
        dp[n - 1] = cost[n - 1]

        for (let x = n - 2; x >= 0; x--) {
            dp[x] = cost[x] + Math.min(dp[x + 1], dp[x + 2])
        }

        return Math.min(dp[0], dp[1])
    }
}
