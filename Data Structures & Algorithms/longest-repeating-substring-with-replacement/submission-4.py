class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        maxf = 0
        res = 0
        count = defaultdict(lambda: 0)
        for r in range(1, len(s) + 1):
            count[s[r - 1]] += 1
            maxf = max(maxf, count[s[r - 1]])

            while (r - l) - maxf > k:
                count[s[l]] -= 1
                l += 1

            res = max(res, r - l)

        return res
