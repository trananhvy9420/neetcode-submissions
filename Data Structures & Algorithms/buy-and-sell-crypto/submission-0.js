class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0 ;
        let priceOfNeetCode = 0 ;
        for ( let i = 0 ; i < prices.length ; i++ ){
            for ( let j = i + 1 ; j < prices.length ; j++ ){
                if (prices[j] < prices[i]) break;
                else {
                    profit = Math.max(profit,prices[j] - prices[i]);
                }
            }
        }
        return profit;
    }
}
