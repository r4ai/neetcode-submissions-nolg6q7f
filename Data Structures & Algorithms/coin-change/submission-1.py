class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # target -> fewest num of coins
        dp: dict[int, int] = {}

        def search(target: int) -> int:
            """
            target amount -> fewest num of coins
            """
            if target == 0:
                return 0
            if target in dp and dp[target]:
                return dp[target]

            dp[target] = amount + 1
            for coin in coins:
                if target - coin < 0:
                    continue
                dp[target] = min(dp[target], search(target - coin) + 1)

            return dp[target]

        res = search(amount)
        if res == amount + 1:
            return -1
        else:
            return res
