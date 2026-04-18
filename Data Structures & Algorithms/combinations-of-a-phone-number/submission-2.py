class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        mapping = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"]
        }

        res: list[str] = []
        def dfs(acc: list[str], i: int):
            if i >= len(digits):
                if len(acc) > 0:
                    res.append("".join(acc))
                return

            num = int(digits[i])
            chars = mapping[num]
            for char in chars:
                dfs([*acc, char], i + 1)

        dfs([], 0)

        return res
