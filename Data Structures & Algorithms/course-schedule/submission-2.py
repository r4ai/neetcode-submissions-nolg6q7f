class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        deps = {}
        for pre in prerequisites:
            [a, b] = pre
            if not a in deps:
                deps[a] = set()
            deps[a].add(b)

        def is_looped(a: int, seen: set[int]):
            if a in seen:
                return True
            if not a in deps:
                return False

            for b in deps[a]:
                if is_looped(b, seen.union([a])):
                    return True
            return False

        for a in deps:
            if is_looped(a, set()):
                return False
        return True