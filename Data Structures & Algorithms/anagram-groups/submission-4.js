class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /** @param {string} str */
        const genId = (str) => {
            const chars = [...str]
            chars.sort()
            return chars.join("")
        }

        /** @type {Map<string, string[]>} */
        const id2strs = new Map()
        for (const str of strs) {
            const id = genId(str)
            const val = id2strs.get(id)
            console.log({id, val})
            if (val != null) {
                val.push(str)
            } else {
                id2strs.set(id, [str])
            }
        }

        const result = []
        for (const [k, v] of id2strs) {
            result.push(v)
        }
        return result
    }
}
