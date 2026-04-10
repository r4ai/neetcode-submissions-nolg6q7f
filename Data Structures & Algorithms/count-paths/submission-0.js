class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => null))
        const f = (x, y) => {
            if (x === 0 || y === 0) return 1
            if (dp[y][x] != null) return dp[y][x]

            const val = f(x - 1, y) + f(x, y - 1)
            dp[y][x] = val
            return val
        }

        return f(n - 1, m - 1)
    }
}
