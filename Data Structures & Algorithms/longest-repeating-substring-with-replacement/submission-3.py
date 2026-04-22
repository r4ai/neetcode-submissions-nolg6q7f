class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        counts = {}

        def is_valid(l, r):
            word_len = r + 1 - l
            max_count = max(counts.values())
            return word_len - max_count <= k

        res = 0
        l = 0
        for r in range(len(s)):
            counts[s[r]] = counts.get(s[r], 0) + 1
            while not is_valid(l, r):
                counts[s[l]] -= 1
                l += 1
            res = max(res, r + 1 - l)

        return res
