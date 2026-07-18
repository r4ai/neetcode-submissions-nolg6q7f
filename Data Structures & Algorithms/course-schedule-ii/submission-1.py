class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {i: set() for i in range(numCourses)}
        indegree = {i: 0 for i in range(numCourses)}

        for cur, pre in prerequisites:
            adj[pre].add(cur)
            indegree[cur] += 1

        q = deque()
        for cur in adj:
            if indegree[cur] == 0:
                q.append(cur)

        path = []
        while q:
            cur = q.popleft()
            path.append(cur)

            for next_cur in adj[cur]:
                indegree[next_cur] -= 1
                if indegree[next_cur] == 0:
                    q.append(next_cur)

        if len(path) == numCourses:
            return path
        else:
            return []
