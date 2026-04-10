class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const nums = [...nums1, ...nums2]
        nums.sort((a, b) => a - b)

        const i = Math.floor(nums.length / 2)
        console.log({ nums, i })
        return nums.length % 2 === 1 ? nums[i] : (nums[i - 1] + nums[i]) / 2
    }
}
