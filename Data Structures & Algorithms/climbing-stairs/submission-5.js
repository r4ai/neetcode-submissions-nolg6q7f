class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Map()
        const f = (i) => {
            if (i === 0) return 1
            if (i === 1) return 1
            if (cache.has(i)) return cache.get(i)
            const v = f(i - 2) + f(i - 1)
            cache.set(i, v)
            return v
        }

        return f(n)
    }
}
