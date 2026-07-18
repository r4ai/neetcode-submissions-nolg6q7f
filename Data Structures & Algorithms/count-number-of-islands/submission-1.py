class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(y, x):
            if y < 0 or len(grid) <= y or x < 0 or len(grid[y]) <= x:
                return
            if grid[y][x] != "1":
                return

            grid[y][x] = "2"
            for dy, dx in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                dfs(y + dy, x + dx)

        count = 0
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] != "1":
                    continue

                dfs(y, x)
                count += 1

        return count
