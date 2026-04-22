from functools import lru_cache

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        @lru_cache(maxsize=None)
        def dfs(index: int, target: int) -> int:
            if target == 0:
                return 1
            if target < 0:
                return 0

            count = 0
            for i in range(index, len(coins)):
                coin = coins[i]
                count += dfs(i, target - coin)
            return count

        return dfs(0, amount)