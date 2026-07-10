class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        VISITED = 500

        def turnRight(dir: int):
            return (dir + 1) % 4

        def hasVisited(y: int, x: int) -> bool:
            if y < 0 or len(matrix) <= y:
                return True
            if x < 0 or len(matrix[y]) <= x:
                return True
            if matrix[y][x] == VISITED:
                return True
            return False

        def move(y: int, x: int, dir: int):
            if dir == 0: # Right
                return y, x + 1
            if dir == 1: # Down
                return y + 1, x
            if dir == 2: # Left
                return y, x - 1
            if dir == 3: # Up
                return y - 1, x
            return y, x

        dir = 0
        y, x = 0, 0
        path = []
        while not hasVisited(y, x):
            path.append(matrix[y][x])
            matrix[y][x] = VISITED

            ny, nx = move(y, x, dir)
            if hasVisited(ny, nx):
                dir = turnRight(dir)
                y, x = move(y, x, dir)
            else:
                y, x = ny, nx
        return path
        

                
            

        
