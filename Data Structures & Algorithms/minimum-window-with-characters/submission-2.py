class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or not s:
            return ""

        res = (0, len(s))

        window_count = {}
        t_count = {}
        for k in t:
            t_count[k] = t_count.get(k, 0) + 1

        have = 0
        need = len(t_count)

        l = 0
        for r in range(len(s)):
            window_count[s[r]] = window_count.get(s[r], 0) + 1

            if s[r] in t_count and window_count[s[r]] == t_count[s[r]]:
                have += 1

            while have == need:
                if r - l < res[1] - res[0]:
                    res = (l, r)

                window_count[s[l]] -= 1
                if s[l] in t_count and window_count[s[l]] < t_count[s[l]]:
                    have -= 1
                l += 1

        l, r = res
        if r == len(s):
            return ""
        return s[l : r + 1]
