class Solution:
    def countBits(self, n: int) -> List[int]:
        def countBit(m: int) -> int:
            count = 0
            while m > 0:
                if m & 1:
                    count += 1
                m >>= 1
            return count

        return [countBit(m) for m in range(n + 1)]
