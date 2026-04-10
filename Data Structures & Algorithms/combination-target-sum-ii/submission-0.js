class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const n = candidates.length
        candidates.sort((a, b) => a - b)

        const dfs = (acc, cur, sum, i) => {
            if (sum === target) return [...acc, cur]
            if (i >= n || sum > target) return acc

            const left = dfs(acc, [...cur, candidates[i]], sum + candidates[i], i + 1)
            let next_i = i + 1
            while (next_i < n && candidates[next_i - 1] === candidates[next_i]) next_i += 1
            const right = dfs(left, [...cur], sum, next_i)
            return right
        }

        const result = dfs([], [], 0, 0)
        return result
    }
}
