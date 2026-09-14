"""
AAABABB
AAABA
"""
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        res = 0
        count = {}
        max_freq = 0
        for r in range(len(s)):
            count[s[r]] = count.get(s[r], 0) + 1
            max_freq = max(max_freq, count[s[r]])
            while (r - l + 1) - max_freq > k:
                count[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        return res