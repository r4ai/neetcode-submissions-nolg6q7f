class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()

        # add rotten fruits to queue
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] == 2:
                    q.append((0, y, x))

        def appendFreshFruit(d, y, x):
            # 範囲外チェック
            if y < 0 or len(grid) <= y or x < 0 or len(grid[y]) <= x:
                return
            
            # freshじゃないなら無視
            if grid[y][x] != 1:
                return
            
            q.append((d, y, x))
            grid[y][x] = 2
        
        d = 0
        while q:
            d, y, x = q.popleft()
            appendFreshFruit(d + 1, y + 1, x)
            appendFreshFruit(d + 1, y - 1, x)
            appendFreshFruit(d + 1, y, x + 1)
            appendFreshFruit(d + 1, y, x - 1)
        
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] == 1:
                    d = -1
                    break
        
        return d
