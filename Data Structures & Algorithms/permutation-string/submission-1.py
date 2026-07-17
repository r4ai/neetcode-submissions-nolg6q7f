class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1_counts = Counter(s1)
        s2_counts = Counter(s2[: len(s1)])

        if s1_counts == s2_counts:
            return True

        for i in range(len(s1), len(s2)):
            # 新しい文字を追加
            s2_counts[s2[i]] += 1

            # 古い文字を削除
            s2_counts[s2[i - len(s1)]] -= 1
            if s2_counts[s2[i - len(s1)]] == 0:
                del s2_counts[s2[i - len(s1)]]

            if s1_counts == s2_counts:
                return True

        return False
