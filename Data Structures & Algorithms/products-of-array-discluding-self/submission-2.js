class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0 ;
        let productOfAllElements = 1;
        for ( let num of nums ){
            if(num===0) zeroCount++;
            else {
                productOfAllElements *= num;
            }
        }
        let res = [];
        for ( let num of nums ){
            if ( zeroCount > 1 ) res.push(0);
            else if ( zeroCount === 1 ){
                if(num===0) res.push(productOfAllElements);
                else {
                    res.push(0);
                }
            }
            else {
                res.push(productOfAllElements/num);
            }
        }
        return res;
    }
}