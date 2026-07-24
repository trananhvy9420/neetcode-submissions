class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = 0 ;
        for (let i = 0; i < s.length; i++) {
            let set = new Set();
            for (let j = i; j < s.length; j++) {
                if (set.has(s[j])) break;
                set.add(s[j]);
                count = Math.max(count, set.size);
            }
        }
        return count;
    }
}
