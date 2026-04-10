class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dfs = (cache, i) => {
            if (cache.has(i)) return cache.get(i)
            if (i === n) return 1
            if (i > n) return 0

            const v = dfs(cache, i + 1) + dfs(cache, i + 2)
            cache.set(i, v)
            return v
        }

        const res = dfs(new Map(), 0)
        return res
    }
}
