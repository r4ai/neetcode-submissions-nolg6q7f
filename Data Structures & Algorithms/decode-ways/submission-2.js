class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length

        /** @type {Map<number, number>} */
        const cache = new Map()
        const valid = (i) => {
            if (cache.has(i)) return cache.get(i)
            if (i >= n) return 1

            // 1ケタ
            const num_one = Number(s[i])
            const valid_one = Number((1 <= num_one && num_one <= 9) && valid(i + 1))
            if (i === n - 1) {
                cache.set(i, valid_one)
                return valid_one
            }

            // 2ケタ
            const num_two = s[i] === '0' ? 0 : Number(s[i] + s[i + 1])
            const valid_two = Number((1 <= num_two && num_two <= 26) && valid(i + 2))

            console.log({ i, n1: num_one, n2: num_two, v1: valid_one, v2: valid_two })

            const v = valid_one + valid_two
            cache.set(i, v)
            return v
        }

        return valid(0)
    }
}
