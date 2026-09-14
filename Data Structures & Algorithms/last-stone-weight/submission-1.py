class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        queue = [-stone for stone in stones]
        heapq.heapify(queue)

        while len(queue) > 1:
            x = -heapq.heappop(queue)
            y = -heapq.heappop(queue)

            if x != y:
                heapq.heappush(queue, -(x - y))

        return -queue[0] if queue else 0
