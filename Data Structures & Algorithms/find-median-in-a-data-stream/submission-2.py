import heapq


class MedianFinder:
    def __init__(self):
        self.sm = []
        self.lg = []

    def addNum(self, num: int) -> None:
        heapq.heappush(self.sm, -num)

        if len(self.sm) > 0 and len(self.lg) > 0 and -self.sm[0] > self.lg[0]:
            heapq.heappop(self.sm)
            heapq.heappush(self.lg, num)

        if len(self.sm) + 1 < len(self.lg):
            val = heapq.heappop(self.lg)
            heapq.heappush(self.sm, -val)

        if len(self.sm) > len(self.lg) + 1:
            val = heapq.heappop(self.sm)
            heapq.heappush(self.lg, -val)

    def findMedian(self) -> float:
        print("find", self.sm, self.lg)
        if len(self.sm) == len(self.lg):
            return (-self.sm[0] + self.lg[0]) / 2
        if len(self.sm) > len(self.lg):
            return -self.sm[0]
        return self.lg[0]
