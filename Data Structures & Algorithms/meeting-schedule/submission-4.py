"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        for i in range(len(intervals)):
            a = intervals[i]
            for j in range(i + 1, len(intervals)):
                b = intervals[j]
                if (a.start <= b.start and a.end <= b.start) or (
                    a.start >= b.end and a.end >= b.end
                ):
                    continue
                return False
        return True
