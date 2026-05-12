"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key=lambda v: v.start)
        for i in range(len(intervals) - 1):
            a = intervals[i]
            b = intervals[i + 1]
            if a.end > b.start:
                return False
        return True
