class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length ) return false;
        const a = s.split('').sort().join('');
        const b = t.split('').sort().join('');
        return a === b;
    }
}
