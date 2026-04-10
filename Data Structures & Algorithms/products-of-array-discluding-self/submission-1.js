class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = new Array(nums.length)
        const suff = new Array(nums.length)

        for (let i = 0; i < nums.length; i++) {
            pref[i] = (nums[i - 1] ?? 1) * (pref[i - 1] ?? 1)
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            suff[i] = (nums[i + 1] ?? 1) * (suff[i + 1] ?? 1)
        }
        console.log({ pref, suff })

        return nums.map((_, i) => pref[i] * suff[i])
    }
}
