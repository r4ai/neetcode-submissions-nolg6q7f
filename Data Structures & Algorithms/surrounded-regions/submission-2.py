class Solution:
    def solve(self, board: List[List[str]]) -> None:
        # 囲まれてない領域をメモ
        def dfs(y, x):
            if y < 0 or len(board) <= y or x < 0 or len(board[y]) <= x:
                return
            if board[y][x] != "O":
                return

            board[y][x] = "V"  # visited
            for dy, dx in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                dfs(y + dy, x + dx)

        # 上, 下
        for x in range(len(board[0])):
            dfs(0, x)
            dfs(len(board) - 1, x)

        # 左, 右
        for y in range(1, len(board) - 1):
            dfs(y, 0)
            dfs(y, len(board[y]) - 1)
        
        # 囲まれている領域を置換
        for y in range(len(board)):
            for x in range(len(board[y])):
                if board[y][x] == "O":
                    board[y][x] = "X"
                if board[y][x] == "V":
                    board[y][x] = "O"
