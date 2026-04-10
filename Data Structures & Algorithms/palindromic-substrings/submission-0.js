class Solution {
    /**
     * @param {string} str
     * @return {number}
     */
    countSubstrings(str) {
        /** @type {Map<string, number>} */
        const cache = new Map()
        const build_id = (start, length) => `${start},${length}`
        const is_palindrome = (start, length) => {
            const key = build_id(start, length)
            if (cache.has(key)) return cache.get(key)

            const l = str[start]
            const r = str[start + length]
            const val = length <= 0
                ? true
                : length <= 1
                    ? l === r
                    : l === r && is_palindrome(start + 1, length - 2)
            cache.set(val)
            return val
        }

        let count = 0
        for (let len = 0; len < str.length; len++) {
            for (let start = 0; start + len < str.length; start++) {
                if (is_palindrome(start, len)) count++
            }
        }

        return count
    }
}
