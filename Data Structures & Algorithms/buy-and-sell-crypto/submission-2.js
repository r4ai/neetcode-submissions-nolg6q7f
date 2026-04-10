class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min_buy = prices[0]
        let max_profit = 0
        for (let i = 1; i < prices.length; i++) {
            const price = prices[i]
            const profit = price - min_buy
            max_profit = Math.max(max_profit, profit)
            min_buy = Math.min(min_buy, price)
        }
        return max_profit
    }
}
