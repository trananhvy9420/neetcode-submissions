class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0 ;
        for ( let i = 0 ; i < heights.length ; i++ ){
            for ( let j = heights.length - 1 ; j > i ; j--) {
                res = Math.max(res,Math.min(heights[i],heights[j]) * (j - i));
            }
        }
        return res
    }
}
