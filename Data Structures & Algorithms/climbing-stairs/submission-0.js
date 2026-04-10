class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        /** @type {Map<number, number>} */
        const cache = new Map()

        const f = (i) => {
            if (i > n) return 0
            if (i === n) return 1
            if (cache.has(i)) return cache.get(i)

            const v = f(i + 1) + f(i + 2)
            cache.set(i, v)
            return v
        }

        return f(0)
    }
}
