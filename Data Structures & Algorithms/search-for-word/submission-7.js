class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        /**
         * @param {{x: number, y: number}} cur
         * @param {number} i
         * @param {Set<string>} path
         */
        const search = (cur, i, path) => {
            if (i >= word.length) return true
            if (i === 0) {
                for (let y = 0; y < board.length; y++) {
                    for (let x = 0; x < board[y].length; x++) {
                        if (board[y][x] === word[i] && search({ x, y }, i + 1, new Set([`${x},${y}`]))) {
                            return true
                        }
                    }
                }
                return false
            }

            const find = (nx, ny) => {
                const key = `${nx},${ny}`
                if (
                    // 範囲チェック
                    0 <= ny && ny < board.length
                    && 0 <= nx && nx < board[ny].length
                    // 存在チェック
                    && board[ny][nx] === word[i]
                    && !path.has(key)
                    && search({ x: nx, y: ny }, i + 1, new Set([...path, key]))
                ) return true
                return false
            }

            const { x, y } = cur
            console.log({ x, y }, word[i])

            // 上
            if (find(x, y - 1)) return true

            // 右
            if (find(x + 1, y)) return true

            // 下
            if (find(x, y + 1)) return true

            // 左
            if (find(x - 1, y)) return true

            return false
        }

        return search({}, 0, [])
    }
}
