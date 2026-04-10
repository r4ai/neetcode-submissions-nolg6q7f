class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set()
        for (const n of nums) {
            set.add(n)
        }
        if (set.size <= 1) return set.size

        /** 
         * @param {Set<number>} nums
         * @param {number} n
         **/
        const calcSize = (nums, n) => {
            let size = 0
            if (nums.has(n + 1)) {
                nums.delete(n + 1)
                size += 1 + calcSize(nums, n + 1)
            }
            if (nums.has(n - 1)) {
                nums.delete(n - 1)
                size += 1 + calcSize(nums, n - 1)
            }
            return size
        }

        let size = 0
        for (const n of set) {
            if (!set.has(n)) continue
            if (set.size === 0) break
            set.delete(n)
            const newSize = 1 + calcSize(set, n)
            if (newSize > size) size = newSize
        }
        return size
    }
}
