class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        copied = deepcopy(matrix)

        for y in range(len(copied)):
            for x in range(len(copied[y])):
                if copied[y][x] != 0:
                    continue
                for y2 in range(len(matrix)):
                    matrix[y2][x] = 0
                for x2 in range(len(matrix[y])):
                    matrix[y][x2] = 0
        
        