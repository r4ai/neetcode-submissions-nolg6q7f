class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pacific: list[list[bool]] = [
            [x == 0 or y == 0 for x in range(len(heights[y]))] for y in range(len(heights))
        ]
        atlantic: list[list[bool]] = [
            [x == len(heights[y]) - 1 or y == len(heights) - 1 for x in range(len(heights[y]))]
            for y in range(len(heights))
        ]

        def dfs(y: int, x: int, visited: set[tuple[int, int]], prev_y: int, prev_x: int):
            if (
                y < 0
                or len(heights) <= y
                or x < 0
                or len(heights[y]) <= x
                or (y, x) in visited
                or heights[y][x] < heights[prev_y][prev_x]
            ):
                return

            pacific[y][x] = pacific[y][x] or pacific[prev_y][prev_x]
            atlantic[y][x] = atlantic[y][x] or atlantic[prev_y][prev_x]

            visited.add((y, x))

            dfs(y - 1, x, visited, y, x)
            dfs(y, x - 1, visited, y, x)
            dfs(y + 1, x, visited, y, x)
            dfs(y, x + 1, visited, y, x)

        # Pacific
        for y in range(len(heights)):
            for x in range(len(heights[y])):
                if x == 0 or y == 0:
                    dfs(y, x, set(), y, x)

        # Atlantic
        for y in range(len(heights)):
            for x in range(len(heights[y])):
                if x == len(heights[y]) - 1 or y == len(heights) - 1:
                    dfs(y, x, set(), y, x)

        result = []
        for y in range(len(heights)):
            for x in range(len(heights[y])):
                if atlantic[y][x] and pacific[y][x]:
                    result.append((y, x))
        return result
