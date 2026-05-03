class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        deps = {}
        for pre in prerequisites:
            [a, b] = pre
            if not a in deps:
                deps[a] = set()
            deps[a].add(b)
        
        cache = {}
        def is_looped(a: int, seen: set[int]):
            if a in cache:
                return cache[a]
            if a in seen:
                cache[a] = True
                return True
            if not a in deps:
                cache[a] = False
                return False

            for b in deps[a]:
                if is_looped(b, seen.union([a])):
                    cache[a] = True
                    return True
            cache[a] = False
            return False

        for a in deps:
            if is_looped(a, set()):
                return False
        return True