class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        def is_overlapping(a: List[int], b: List[int]):
            a_s = a[0]
            a_e = a[1]
            b_s = b[0]
            return a_s <= b_s and b_s <= a_e

        intervals.sort(key=lambda v: v[0])

        res = []
        a = intervals[0]
        for b in intervals:
            if is_overlapping(a, b):
                a[1] = max(a[1], b[1])
            else:
                res.append(a)
                a = b
        if a:
            res.append(a)

        return res
