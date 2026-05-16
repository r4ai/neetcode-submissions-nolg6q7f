"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""


class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if len(intervals) == 0:
            return 0

        intervals.sort(key=lambda v: v.start)
        rooms = [intervals[0].end]

        def reserve(interval):
            for j in range(len(rooms)):
                if rooms[j] <= interval.start:
                    rooms[j] = interval.end
                    return

            rooms.append(interval.end)

        for interval in intervals[1:]:
            reserve(interval)

        return len(rooms)
