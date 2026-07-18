class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        cache = {}

        def dfs(y, x) -> int:
            if (y, x) in cache:
                return cache[(y, x)]
            
            if y < 0 or len(points) <= y:
                return 0

            score = -1
            for x1 in range(len(points[y])):
                score = max(score, points[y][x1] - abs(x - x1) + dfs(y + 1, x1))
            cache[(y, x)] = score
            return score
        
        return max(dfs(0, x) for x in range(len(points[0])))
