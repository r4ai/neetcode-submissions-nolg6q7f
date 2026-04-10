class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = []
        l1: for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i]
            for (let j = i; j < temperatures.length; j++) {
                if (temperatures[j] > temp) {
                    result.push(j - i)
                    continue l1
                }
            }
            result.push(0)
        }
        return result
    }
}
