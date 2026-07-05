class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0 ;
        let totalProductWithoutZero = 1 ;
        for ( const num of nums ) {
            if ( num === 0 ) zeroCount++;
            else {
                totalProductWithoutZero *= num;
            }
        }
        let res = [];
        for ( const num of nums ) {
            if (zeroCount > 1) res.push(0);
            else if ( zeroCount === 1 ) {
                if(num === 0) res.push(totalProductWithoutZero);
                else {
                    res.push(0);
                }
            }
            else {
            res.push(totalProductWithoutZero / num);
        }
        }
        return res;
    }
}