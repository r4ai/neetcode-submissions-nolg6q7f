class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /**
         * @param {number} l
         * @param {number} r
         * @param {number[]} nums
         * @param {number} target
         */
        const binarySearch = (l, r, nums, target) => {
            if (l > r) return false
            const m = Math.floor((l + r) / 2)
            const v = nums[m]
            if (v === target) return true
            if (v < target) return binarySearch(m + 1, r, nums, target)
            return binarySearch(l, m - 1, nums, target)
        }

        for (let i = 0; i < matrix.length; i++) {
            if (target <= matrix[i].at(-1)) {
                return binarySearch(0, matrix[i].length - 1, matrix[i], target)
            }
        }

        return false
    }
}
