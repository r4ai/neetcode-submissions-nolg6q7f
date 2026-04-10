class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        /** @param {character[]} chars */
        const hasDuplicatedChars = (chars) => {
            /** @type {Record<character, number>} */
            const map = {}
            for (const c of chars.filter((c) => c !== '.')) {
                if (map[c]) {
                    console.log("duplicate", { chars, c })
                    return true
                }
                map[c] = 1
            }
            return false
        }

        const debug = (board) => {
            let result = ""
            for (const row of board) {
                for (const char of row) {
                    result += `${char} `
                }
                result += "\n"
            }
            console.log(result)
        }

        debug(board)


        for (const row of board) {
            if (hasDuplicatedChars(row)) {
                console.log("invalid row", row)
                return false
            }
        }

        for (let i = 0; i < board.length; i++) {
            const col = [
                board[0][i], board[1][i], board[2][i],
                board[3][i], board[4][i], board[5][i],
                board[6][i], board[7][i], board[8][i]
            ]
            if (hasDuplicatedChars(col)) {
                console.log("invalid col", { col, i })
                return false
            }
        }

        for (let x = 0; x < 9; x += 3) {
            for (let y = 0; y < 9; y += 3) {
                const subbox = [
                    board[y][x], board[y][x + 1], board[y][x + 2],
                    board[y + 1][x], board[y + 1][x + 1], board[y + 1][x + 2],
                    board[y + 2][x], board[y + 2][x + 1], board[y + 2][x + 2]
                ]
                if (hasDuplicatedChars(subbox)) {
                    console.log("invalid subbox", { x, y, subbox })
                    return false
                }
            }
        }

        return true
    }
}
