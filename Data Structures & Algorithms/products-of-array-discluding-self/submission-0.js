class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const v = nums.reduce((acc, cur) => acc * cur, 1)
        console.log({ v, nums })
        return nums.map((n, i) => {
            if (n === 0) {
                let v = 1
                for (const [j, m] of nums.entries()) {
                    if (i === j) continue
                    v *= m
                }
                return v
            } else {
                return v / n
            }
        })
    }
}
