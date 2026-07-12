class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj: dict[str, set[str]] = defaultdict(set)
        in_degree: dict[str, int] = {c: 0 for word in words for c in word}
        for i in range(len(words) - 1):
            w1 = words[i]
            w2 = words[i + 1]

            if w1 > w2 and w1.startswith(w2):
                return ""

            for j in range(min(len(w1), len(w2))):
                c1, c2 = w1[j], w2[j]
                if c1 == c2:
                    continue
                if c2 not in adj[c1]:
                    adj[c1].add(c2)
                    in_degree[c2] += 1
                break

        # state[c] = None -> 未探索
        # state[c] = False -> 探索中
        # state[c] = True -> 探索済み
        state = {}
        res = []

        def dfs(c: str) -> bool:
            if c in state:
                return state[c]

            state[c] = False

            for neighbor in adj[c]:
                if not dfs(neighbor):
                    return False

            state[c] = True
            res.append(c)
            return True

        for c in in_degree:
            if not dfs(c):
                return ""

        res.reverse()
        return "".join(res)
