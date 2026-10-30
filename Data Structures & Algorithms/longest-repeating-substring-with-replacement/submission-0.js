class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    const charCounts = new Array(26).fill(0);
    let left = 0;
    let maxCharCount = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        const currentCharCode = s.charCodeAt(right) - 65;
        charCounts[currentCharCode]++;
        maxCharCount = Math.max(maxCharCount, charCounts[currentCharCode]);
        while ((right - left + 1) - maxCharCount > k) {
            const leftCharCode = s.charCodeAt(left) - 65;
            charCounts[leftCharCode]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
    }
}
