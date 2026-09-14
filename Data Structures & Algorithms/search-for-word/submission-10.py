class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(y, x, i, visited: set[tuple[int, int]]) -> bool:
            if i >= len(word):
                return True

            if (
                y < 0 or len(board) <= y
                or x < 0 or len(board[y]) <= x
                or board[y][x] != word[i]
                or (y, x) in visited
            ):
                return False

            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                if dfs(y + dy, x + dx, i + 1, visited.union({(y, x)})):
                    return True
            return False

        for y in range(len(board)):
            for x in range(len(board[y])):
                if dfs(y, x, 0, set()):
                    return True
        return False
