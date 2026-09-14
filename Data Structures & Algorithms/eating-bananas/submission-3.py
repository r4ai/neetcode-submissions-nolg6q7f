class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def bsearch(l, r):
            k = (l + r) // 2
            if l == r:
                return k

            count = sum(math.ceil(pile / k) for pile in piles)

            if count <= h:
                return bsearch(l, k)
            else:
                return bsearch(k + 1, r)

        return bsearch(1, max(piles))
