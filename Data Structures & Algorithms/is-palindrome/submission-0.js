class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /** @param {string} c */
        const isAlphaNumeric = (c) => {
            if ('a' <= c && c <= 'z' || 'A' <= c && c <= 'Z' || '0' <= c && c <= '9') {
                return true
            }
            return false
        }

        const chars = [...s.toLowerCase()].filter((c) => isAlphaNumeric(c))

        const stack = []
        const mid = Math.floor(chars.length / 2)
        for (const [i, c] of chars.entries()) {
            if (i < mid) {
                stack.push(c)
            }
            else if (i === mid && chars.length % 2 === 1) { }
            else {
                if (stack.pop() !== c) {
                    return false
                }
            }
        }
        return true
    }
}
