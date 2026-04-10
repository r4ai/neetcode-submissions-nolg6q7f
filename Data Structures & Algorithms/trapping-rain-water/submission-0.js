class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let hls = []
        let hrs = []
        hls[0] = height[0]
        for (let i = 1; i < height.length; i++) {
            hls[i] = Math.max(hls[i - 1], height[i])
        }
        hrs[height.length - 1] = height[height.length - 1]
        for (let i = height.length - 2; i >= 0; i--) {
            hrs[i] = Math.max(hrs[i + 1], height[i])
        }
        console.log({ hls, hrs })
        let amount = 0
        for (let i = 0; i < height.length; i++) {
            amount += Math.min(hls[i], hrs[i]) - height[i]
        }

        return amount
    }
}
