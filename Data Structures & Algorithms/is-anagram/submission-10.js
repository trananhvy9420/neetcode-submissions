class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // s = aat
    // t = aaa
    // (a,0) 
    // (a,1)
    // (a,2)
    // (t,1)
    // map(a,2-1) (a,1)
    // map(a,1-1) (a,0)
    // map(0,0-1) return false;
    
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();
        for (const c of s) {
            if (!map.has(c)) {
                map.set(c , 0);
            }
            map.set(c, map.get(c) + 1);
        }
        for (const c of t) {
            if(!map.get(c)) return false;
            map.set(c,map.get(c) - 1);
        }
        return true;
    }
}
