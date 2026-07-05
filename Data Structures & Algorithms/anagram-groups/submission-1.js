class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for ( const s of strs ) {
            const sortedS = s.split('').sort().join('');
            if(!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }
}
