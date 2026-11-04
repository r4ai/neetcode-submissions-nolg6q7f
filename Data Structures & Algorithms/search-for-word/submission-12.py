class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(i: int, y: int, x: int, visited: set[tuple[int, int]]) -> bool:
            if i >= len(word):
                return True
            if y < 0 or len(board) <= y or x < 0 or len(board[y]) <= x or (y, x) in visited:
                return False

            char = board[y][x]
            if char != word[i]:
                return False

            for dy, dx in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                if dfs(i + 1, y + dy, x + dx, visited.union(set([(y, x)]))):
                    return True
            return False

        for y in range(len(board)):
            for x in range(len(board[y])):
                if dfs(0, y, x, set()):
                    return True
        return False
