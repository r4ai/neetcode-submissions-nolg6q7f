class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        visited: list[list[int]] = [[False for _ in grid[0]] for _ in grid]

        def search(size, x, y):
            if (
                x < 0
                or len(grid[0]) <= x
                or y < 0
                or len(grid) <= y
                or grid[y][x] == 0
                or visited[y][x]
            ):
                return size

            size += 1
            visited[y][x] = True

            size = search(size, x, y - 1)  # 上
            size = search(size, x, y + 1)  # 下
            size = search(size, x - 1, y)  # 左
            size = search(size, x + 1, y)  # 右
            return size

        max_size = 0

        for y in range(len(grid)):
            for x in range(len(grid[y])):
                max_size = max(max_size, search(0, x, y))

        return max_size
