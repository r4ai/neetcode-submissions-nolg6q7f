class Solution {
    /**
     * @param {string} str
     * @return {string}
     */
    longestPalindrome(str) {
        const id = (s, r) => `${s},${r}`
        /** @type {Map<string, number>} */
        const cache = new Map()

        const isPalindrome = (s, r) => {
            const key = id(s, r)
            if (cache.has(key)) return cache.get(key)
            const left = str[s]
            const right = str[s + r]
            const v = r <= 0
                ? true
                : r <= 1
                    ? left === right
                    : left === right && isPalindrome(s + 1, r - 2)
            cache.set(key, v)
            return v
        }


        let result = { s: 0, r: 0 }
        for (let r = 0; r < str.length; r++) {
            for (let s = 0; s < str.length; s++) {
                if (s + r > str.length - 1) break
                if (isPalindrome(s, r)) {
                    result.r = r
                    result.s = s
                }
            }
        }

        console.log(result)
        const result_str = str.slice(result.s, result.s + result.r + 1)
        return result_str
    }
}
