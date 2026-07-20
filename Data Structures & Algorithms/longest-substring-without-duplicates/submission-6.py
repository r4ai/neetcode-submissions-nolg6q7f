class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 1:
            return 0
        l = 0
        r = 1
        length = 1
        seen = set(s[l])
        while r < len(s):
            if s[r] in seen:
                while s[l] != s[r]:
                    seen.remove(s[l])
                    l += 1
                l += 1
                r += 1
            else:
                seen.add(s[r])
                r += 1
                length = max(length, r - l)
        return length