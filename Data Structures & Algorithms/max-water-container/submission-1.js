class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1

        let maxAmount = -1
        while (l < r) {
            const width = Math.abs(r - l)
            const hl = heights[l]
            const hr = heights[r]
            const height = Math.min(hl, hr)
            const amount = width * height
            if (amount > maxAmount) maxAmount = amount

            if (hl === hr) {
                l++
                r--
            } else if (hl > hr) {
                r--
            } else {
                l++
            }
        }

        return maxAmount
    }
}
