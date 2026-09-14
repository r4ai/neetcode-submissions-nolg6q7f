"""
10 1 5 6 7 1
10 1 1 1 1 1 // buy  = min(0:i+1)
10 7 7 7 7 1 // sell = max(i:n)
"""
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0]
        max_profit = 0
        for i in range(1, len(prices)):
            sell = prices[i]
            max_profit = max(max_profit, sell - buy)

            buy = min(buy, prices[i])
        return max_profit