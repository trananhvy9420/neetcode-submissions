class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for ( let i = 0 ; i < nums.length ; i++ ){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        const sortedKeys = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
        return sortedKeys.slice(0, k);
    }
}
