class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const sells = new Array(prices.length).fill(0)
        for (let i = prices.length - 1; i >= 0; i--) {
            const cur = prices[i]
            const prev = sells[i + 1] ?? 0
            sells[i] = Math.max(prev, cur)
        }
        console.log(sells)

        let max_profit = 0
        for (let i = 0; i < prices.length; i++) {
            const profit = sells[i] - prices[i]
            max_profit = Math.max(max_profit, profit)
        }
        return max_profit
    }
}
