from math import inf, isinf

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        profit = 0
        for r in range(1, len(prices)):
            buy = prices[l]
            sell = prices[r]
            if sell > buy:
                profit = max(profit, sell - buy)
            else:
                l = r
        return profit
