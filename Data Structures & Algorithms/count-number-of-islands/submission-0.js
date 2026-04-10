class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = grid.map((row) => row.map(() => false))

        const visitLands = (x, y) => {
            const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
            for (const [dx, dy] of dirs) {
                const nx = x + dx
                const ny = y + dy
                if (0 <= nx && nx < grid[y].length &&
                    0 <= ny && ny < grid.length &&
                    !visited[ny][nx] &&
                    grid[ny][nx] === "1"
                ) {
                    visited[ny][nx] = true
                    visitLands(nx, ny)
                }
            }
        }

        let count = 0
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === "1" && !visited[y][x]) {
                    count += 1
                    visitLands(x, y)
                }
            }
        }

        return count
    }
}
