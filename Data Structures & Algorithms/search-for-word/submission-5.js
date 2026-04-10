class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        /**
         * @param {number[]} cursor
         * @param {number[][]} path
         * @param {number} target
         */
        const search = (cursor, path, target) => {
            if (target >= word.length) return true

            /** @type {number[][]} */
            const candidates = [
                [0, -1], [0, 1],
                [-1, 0], [1, 0]
            ]
                .map((diff) => {
                    const y = cursor[0] + diff[0]
                    const x = cursor[1] + diff[1]
                    if (
                        y >= 0 &&
                        x >= 0 &&
                        y < board.length &&
                        x < board[y].length &&
                        !path.find((v) => v[0] === y && v[1] === x)
                    ) return [y, x]
                    return null
                })
                .filter((cand) => cand !== null)

            for (const candidate of candidates) {
                const y = candidate[0]
                const x = candidate[1]
                if (board[y][x] === word[target]) {
                    console.log({ y, x, path: [...path, [y, x]] })
                    const found = search([y, x], [...path, [y, x]], target + 1)
                    if (found) {
                        return found
                    }
                }
            }

            return false
        }

        for (let y = 0; y < board.length; y++) {
            console.log(board[y].join(""))
        }

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] !== word[0]) continue
                const found = search([y, x], [[y, x]], 1)
                if (found) return found
            }
        }

        return false
    }
}
