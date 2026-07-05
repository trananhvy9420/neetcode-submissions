class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if (s.length !== t.length ) return false;
        // let charCount = {};
        // for ( let char of s ) {
        //     charCount[char] = ( charCount[char] || 0 ) + 1;
        // }
        // for ( let char of t ) {
        //     if(!charCount[char]) return false;
        //     charCount[char]--;
        // }
        // return true;
        if ( s.length !== t.length ) return false;
        const map = new Map();
        for ( let char of s ) {
        map.set(char, (map.get(char) || 0) + 1);
        }
        for ( let char of t ) {
            if (!map.get(char)) return false; 
        
        map.set(char, map.get(char) - 1);
        }
        return true;
    }
}
