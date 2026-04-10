class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (const c of s) {
            switch (c) {
                case "(":
                    stack.push(c)
                    break
                case ")":
                    if (stack.pop() !== "(")
                        return false
                    break
                case "{":
                    stack.push(c)
                    break
                case "}":
                    if (stack.pop() !== "{")
                        return false
                    break
                case "[":
                    stack.push(c)
                    break
                case "]":
                    if (stack.pop() !== "[")
                        return false
                    break
            }
        }
        if (stack.length === 0) return true
        return false
    }
}
