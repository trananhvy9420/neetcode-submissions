class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for ( let num of nums ){
            map.set(num,((map.get(num) || 0 ) + 1 ));
        }
        const sortedArray = Array.from(map.keys()).sort((a,b)=>map.get(b)-map.get(a));
        return sortedArray.slice(0,k);
    }
}
