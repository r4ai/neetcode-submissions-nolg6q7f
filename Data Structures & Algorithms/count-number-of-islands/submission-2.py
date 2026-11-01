class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = [[False for _ in range(len(grid[i]))] for i in range(len(grid))]

        def visit_islands(y, x) -> bool:
            if y < 0 or len(grid) <= y or x < 0 or len(grid[y]) <= x:
                return False
            if visited[y][x]:
                return False

            visited[y][x] = True
            if grid[y][x] == "0":
                return False

            for dy, dx in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
                visit_islands(y + dy, x + dx)
            return True

        count = 0
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if visit_islands(y, x):
                    count += 1
        return count
