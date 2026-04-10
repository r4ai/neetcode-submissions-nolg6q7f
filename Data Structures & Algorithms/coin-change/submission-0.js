class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = new Map()

        const f = (i) => {
            if (i === 0) return 0
            if (cache.has(i)) return cache.get(i)

            let acc = Infinity
            for (const coin of coins) {
                if (i - coin < 0) continue
                acc = Math.min(acc, f(i - coin) + 1)
            }
            cache.set(i, acc)
            return acc
        }

        const result = f(amount)
        return result === Infinity ? -1 : result
    }
}
