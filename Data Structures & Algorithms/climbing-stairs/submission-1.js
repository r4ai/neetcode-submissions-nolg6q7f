class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n + 1)
        dp[n] = 1
        dp[n - 1] = 1

        for (let i = n - 2; i >= 0; i--) {
            dp[i] = dp[i + 1] + dp[i + 2]
        }

        return dp[0]
    }
}
