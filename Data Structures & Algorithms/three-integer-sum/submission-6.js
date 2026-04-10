class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // nums = Array.from(new Set(nums))
        nums.sort((a, b) => a - b)
        console.log(nums)
        const n = nums.length
        const result = []
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) break
            if (i > 0 && nums[i - 1] === nums[i]) continue

            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                const [ll, mm, rr] = [nums[l], nums[i], nums[r]]
                const v = ll + mm + rr
                console.log({ l, i, r, v })
                if (v === 0) {
                    console.log("hit")
                    result.push([ll, mm, rr])
                    l++
                    r--
                    while (l < r && i + 1 < l && nums[l - 1] === nums[l]) { l++; continue }
                } else if (v < 0) {
                    l++
                } else {
                    r--
                }
            }
        }

        return result
    }
}
