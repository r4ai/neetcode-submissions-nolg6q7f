class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        /** @type {Map<number, number>} */
        const cache = new Map()

        const f = (i) => {
            if (cache.has(i)) return cache.get(i)
            if (i === 0) return 1
            if (i < 0) return 0

            const v = f(i - 1) + f(i - 2)
            cache.set(i, v)
            return v
        }

        return f(n)
    }
}
