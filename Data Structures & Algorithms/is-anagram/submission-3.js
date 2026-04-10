class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const cache = new Map()
        for (const si of s) {
            if (cache.has(si)) {
                cache.set(si, cache.get(si) + 1)
            } else {
                cache.set(si, 1)
            }
        }

        for (const ti of t) {
            if (!cache.has(ti) || cache.get(ti) === 0) return false;
            cache.set(ti, cache.get(ti) - 1)
        }

        for (const [k, v] of cache) {
            if (v > 0) return false;
        }

        return true;
    }
}
