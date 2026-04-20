from functools import lru_cache
from typing import Literal

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        @lru_cache(maxsize=None)
        def dfs(i: int, bought: bool) -> int:
            if i >= len(prices):
                return 0

            if bought:
                sell = dfs(i + 2, False) + prices[i]
                skip = dfs(i + 1, bought)
                return max(sell, skip)
            else:
                buy = dfs(i + 1, True) - prices[i]
                skip = dfs(i + 1, bought)
                return max(buy, skip)

        return dfs(0, False)