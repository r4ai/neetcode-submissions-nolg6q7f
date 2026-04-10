class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = []
        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i]
            while (stack.length > 0 && stack.at(-1)[0] < temp) {
                const [_, j] = stack.pop()
                result[j] = i - j
            }
            stack.push([temp, i])
        }
        for (const [_, i] of stack) {
            result[i] = 0
        }
        return result
    }
}
