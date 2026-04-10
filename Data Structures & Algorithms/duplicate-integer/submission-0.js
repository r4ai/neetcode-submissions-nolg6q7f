class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let cache = new Set()
        for (const n of nums) {
            if (cache.has(n))
                return true
            cache.add(n)
        }
        return false
    }
}
