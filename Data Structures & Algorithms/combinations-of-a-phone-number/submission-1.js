class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const mapping = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }

        const result = []
        const dfs = (acc, i) => {
            if (i > digits.length - 1) {
                if (acc) result.push(acc)
                return
            }

            const digit = digits[i]
            for (const char of mapping[digit]) {
                dfs(acc + char, i + 1)
            }
        }

        dfs("", 0)

        return result
    }
}
