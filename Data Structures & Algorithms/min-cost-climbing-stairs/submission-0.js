class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Map()
        const f = (x) => {
            if (x >= cost.length) return 0
            if (cache.has(x)) return cache.get(x)
            const v = cost[x] + Math.min(f(x + 1), f(x + 2))
            cache.set(x, v)
            return v
        }

        const v0 = f(0)
        const v1 = f(1)
        console.log({ cache, v0, v1 })
        return Math.min(v0, v1)
    }
}
