class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const xs = new Set()

        const visited = new Set()
        const cars = position
            .map((pos, i) => ({ pos, speed: speed[i] }))
            .sort((a, b) => b.pos - a.pos)

        for (const [i, car0] of cars.entries()) {
            if (visited.has(i)) continue

            const a0 = car0.speed
            const b0 = car0.pos

            for (let j = i + 1; j < cars.length; j++) {
                const car1 = cars[j]
                const a1 = car1.speed
                const b1 = car1.pos

                if (visited.has(j) || a0 >= a1) continue

                const x = (b1 - b0) / (a0 - a1)
                const y = a0 * x + b0

                console.log({ i, j, y, x })

                if (Number.isFinite(y) && Number.isFinite(x) && y <= target && x >= 0) {
                    console.log("交点", { x: (y - b0) / a0 })
                    visited.add(j)
                }
            }

            const x = (target - b0) / a0
            console.log("add", { i, x })
            xs.add(x)
        }

        return xs.size
    }
}
