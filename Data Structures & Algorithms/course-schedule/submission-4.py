class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        deps = [set() for _ in range(numCourses)]
        for [a, b] in prerequisites:
            deps[a].add(b)

        state = [0] * numCourses  # 0 -> 未探索, 1 -> 探索中 or 循環あり, 2 -> 循環なし

        def has_cycle(a: int):
            if state[a] == 2:
                return False
            if state[a] == 1:
                return True

            state[a] = 1
            for b in deps[a]:
                if has_cycle(b):
                    return True

            state[a] = 2
            return False

        for a in range(numCourses):
            if has_cycle(a):
                return False
        return True
