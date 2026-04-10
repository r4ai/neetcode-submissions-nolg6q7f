class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const evaluate = (tok) => {
            switch (tok) {
                case '+': {
                    const rhs = stack.pop()
                    const lhs = stack.pop()
                    stack.push(lhs + rhs)
                    return
                }
                case '-': {
                    const rhs = stack.pop()
                    const lhs = stack.pop()
                    stack.push(lhs - rhs)
                    return
                }
                case '*': {
                    const rhs = stack.pop()
                    const lhs = stack.pop()
                    stack.push(lhs * rhs)
                    return
                }
                case '/': {
                    const rhs = stack.pop()
                    const lhs = stack.pop()
                    stack.push(Math.trunc(lhs / rhs))
                    return
                }
                default: {
                    stack.push(Number(tok))
                    return
                }
            }
        }
        for (const tok of tokens) {
            console.log(stack)
            evaluate(tok)
        }
        return stack.pop()
    }
}
