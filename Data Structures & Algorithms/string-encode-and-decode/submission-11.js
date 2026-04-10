class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const header = []
        const body = []
        for (const str of strs) {
            header.push(str.length)
            body.push(str)
        }

        const result = header.join(",") + "#" + body.join("")
        console.log({ header, body, result })
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        /** @param {string} str */
        const parseHeader = (str) => {
            return str.split(",").filter(Boolean).map(Number)
        }

        /**
         * @param {number[]} sizes
         * @param {string} str
         **/
        const parseBody = (sizes, str) => {
            const result = sizes.map((v) => "")
            let sizeI = 0
            let size = sizes[sizeI]
            for (const [i, c] of [...str].entries()) {
                console.log({ i, c, sizeI, size })
                if (i === size) {
                    sizeI += 1
                    size += sizes[sizeI]
                }
                result[sizeI] += c
            }
            return result
        }

        /** 
         * @param {string} str
         * @param {string} splitter
         **/
        const splitFirst = (str, splitter) => {
            let s1 = ""
            let s2 = ""
            let mode = 1
            for (const c of str) {
                if (mode === 1 && c === splitter) mode = 2
                switch (mode) {
                    case 1:
                        s1 += c
                        break
                    case 2:
                        mode = 3
                        break
                    case 3:
                        s2 += c
                        break
                }
            }
            return [s1, s2]
        }

        const [header, body] = splitFirst(str, "#")
        console.log({ header, body })
        const sizes = parseHeader(header)
        const decoded = parseBody(sizes, body)
        console.log({ sizes, decoded })
        return decoded
    }
}
