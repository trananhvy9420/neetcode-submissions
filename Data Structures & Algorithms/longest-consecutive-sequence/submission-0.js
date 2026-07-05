class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const set = new Set();
        for ( let i = 0 ; i < nums.length ; i++) {
            set.add(nums[i]);
        }
        let longest = 0;
        for (let num of nums) {
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;
                while (set.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                longest = Math.max(longest, currentStreak);
            }
        }
        return longest;
    }
}
