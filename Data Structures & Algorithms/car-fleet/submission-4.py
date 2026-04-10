class Solution:
    def carFleet(self, target: int, positions: List[int], speeds: List[int]) -> int:
        cars = sorted(zip(positions, speeds), key=lambda car: car[0], reverse=True)

        stack = []
        for pos, speed in cars:
            time = (target - pos) / speed
            stack.append(time)

            if len(stack) > 1 and stack[-1] <= stack[-2]:
                stack.pop()

        return len(stack)