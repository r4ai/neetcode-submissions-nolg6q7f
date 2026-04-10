class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const dfs = (acc, cur, s, r) => {
            if (s === n && r === 0) return [...acc, cur]

            if (r > 0)
                acc = dfs(acc, cur + ")", s, r - 1)
            if (s < n)
                acc = dfs(acc, cur + "(", s + 1, r + 1)

            return acc
        }

        return dfs([], "", 0, 0)
    }
}
