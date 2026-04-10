class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        /** @type {[number, number][][]} */
        const result = []

        /**
         * @param {[number, number][]} acc
         * @param {Set<number>} cols
         * @param {Set<number>} lt2rb
         * @param {Set<number>} rt2lb
         */
        const dfs = (acc, cols, lt2rb, rt2lb, y) => {
            if (y >= n) {
                result.push(acc)
                return
            }

            for (let x = 0; x < n; x++) {
                if (
                    cols.has(x) ||
                    lt2rb.has(x - y) ||
                    rt2lb.has(x + y)
                ) continue
                cols.add(x)
                lt2rb.add(x - y)
                rt2lb.add(x + y)
                dfs([...acc, [y, x]], cols, lt2rb, rt2lb, y + 1)
                cols.delete(x)
                lt2rb.delete(x - y)
                rt2lb.delete(x + y)
            }
        }

        dfs([], new Set(), new Set(), new Set(), 0)

        const boards = result.map((queens) => {
            const board = new Array(n).fill(undefined).map(
                () => new Array(n).fill(".")
            )
            for (const [y, x] of queens) {
                board[y][x] = "Q"
            }
            return board.map((row) => row.join(""))
        })

        return boards
    }
}
