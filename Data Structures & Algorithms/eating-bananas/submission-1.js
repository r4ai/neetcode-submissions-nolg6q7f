class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        /**
         * @param {number[]} piles
         * @param {number} k
         */
        const search = (piles, k) => {
            let hour = 0
            for (let i = 0; i < piles.length; i++) {
                const pile = piles[i]
                hour += Math.ceil(pile / k)
            }
            return hour
        }

        let left = 1
        let right = Math.max(...piles)
        let k_cur
        let h_cur
        let k_min
        while (left <= right) {
            k_cur = left + Math.trunc((right - left) / 2)
            h_cur = search(piles, k_cur)
            console.log({ left, right, k_cur, h_cur })
            if (h_cur <= h) {
                right = k_cur - 1
                k_min = k_cur
            } else {
                left = k_cur + 1
            }
        }
        return k_min
    }
}
