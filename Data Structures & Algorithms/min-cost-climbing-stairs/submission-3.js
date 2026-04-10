class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Map()

        const clacCostFrom = (i) => {
            if (i >= cost.length) return 0
            if (cache.has(i)) return cache.get(i)
            const v = Math.min(clacCostFrom(i + 1), clacCostFrom(i + 2)) + cost[i]
            cache.set(i, v)
            return v
        }

        const res = Math.min(clacCostFrom(0), clacCostFrom(1))
        return res
    }
}
