class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Map()
        const f = (i) => {
            if (cache.has(i)) return cache.get(i)
            if (i === 0) return 0
            if (i === 1) return 0
            const v = Math.min(
                f(i - 1) + cost[i - 1],
                f(i - 2) + cost[i - 2],
            )
            cache.set(i, v)
            return v
        }
        const result = f(cost.length)
        console.log(cache)
        return result
    }
}
