class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        r0 = 1
        for y in range(len(matrix)):
            for x in range(len(matrix[y])):
                if matrix[y][x] != 0:
                    continue

                # matrix[y][*] = 0 # 横
                if y == 0:
                    r0 = 0
                else:
                    matrix[y][0] = 0

                # matrix[*][x] = 0 # 縦
                matrix[0][x] = 0
        
        for y in range(1, len(matrix)):
            for x in range(1, len(matrix[y])):
                if matrix[y][0] == 0 or matrix[0][x] == 0:
                    matrix[y][x] = 0
        
        if matrix[0][0] == 0:
            for y in range(len(matrix)):
                matrix[y][0] = 0
        
        if r0 == 0:
            for x in range(len(matrix[0])):
                matrix[0][x] = 0
        