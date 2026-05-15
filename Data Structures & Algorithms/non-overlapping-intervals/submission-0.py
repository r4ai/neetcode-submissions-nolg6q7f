class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda v: v[1])

        cur = intervals[0][1]
        count = 1
        for interval in intervals[1:]:
            if interval[0] >= cur:
                cur = interval[1]
                count += 1

        return len(intervals) - count
