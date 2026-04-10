class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /** @type {Record<number, number>} */
        const counts = {}
        for (const n of nums) {
            counts[n] = (counts[n] ?? 0) + 1
        }
        console.log(counts)

        const sorted = Object.entries(counts).sort(([ak, av], [bk, bv]) => bv - av)
        const result = []
        for (const [i, [key, value]] of sorted.entries()) {
            if (i >= k) break;
            result.push(key)
        }
        return result
    }
}
