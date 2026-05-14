class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda v: v[0])

        res = []
        a = intervals[0]
        for i in range(1, len(intervals)):
            b = intervals[i]
            if a[0] <= b[0] and b[0] <= a[1]:
                a[1] = max(a[1], b[1])
            else:
                res.append(a)
                a = b
        if a:
            res.append(a)

        return res
