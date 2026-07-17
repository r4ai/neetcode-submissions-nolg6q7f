class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        inf = 2147483647

        def bfs(gates):
            queue = deque()
            for gate in gates:
                queue.append(gate)
                _, y, x = gate
                grid[y][x] = -2  # start point

            while queue:
                d, y, x = queue.popleft()

                # 範囲外なら無視
                if y < 0 or len(grid) <= y or x < 0 or len(grid[y]) <= x:
                    continue

                # 探索済みなら無視
                if grid[y][x] != inf and grid[y][x] != -2:
                    continue

                grid[y][x] = d

                # 4方向をqueueに追加
                queue.append((d + 1, y - 1, x))
                queue.append((d + 1, y + 1, x))
                queue.append((d + 1, y, x - 1))
                queue.append((d + 1, y, x + 1))

        gates = []
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] == 0:
                    gates.append((0, y, x))

        bfs(gates)
