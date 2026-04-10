class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        /** @param {string} s */
        const isPalindrome = (s) => {
            for (let l = 0; l < Math.floor(s.length / 2); l++) {
                const r = s.length - l - 1;
                if (s[l] !== s[r]) return false
            }
            return true
        }

        /** 
         * @param {string} s
         * @param {number[]} points
         **/
        const split = (s, points) => {
            const res = []
            let j = 0
            let cur = ""
            for (let i = 0; i < s.length; i++) {
                const c = s[i]
                if (i === points[j]) {
                    res.push(cur)
                    cur = c
                    j += 1
                } else {
                    cur += c
                }
            }
            res.push(cur)
            return res
        }

        /**
         * @param {string[][]} acc
         * @param {number[]} points
         * @param {number} i
         */
        const dfs = (acc, points, i) => {
            console.log({ i, points })

            if (i === s.length) {
                const splitted = split(s, points)
                if (splitted.every((v) => isPalindrome(v))) {
                    acc.push(splitted)
                }
                return acc
            }

            // Left
            points.push(i)
            acc = dfs(acc, points, i + 1)
            points.pop()

            // Right
            acc = dfs(acc, points, i + 1)

            return acc
        }

        const res = dfs([], [], 1)
        return res
    }
}
