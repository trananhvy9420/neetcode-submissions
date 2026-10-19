class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let ans = high;
    while (low <= high) {
        const k = Math.floor((low + high) / 2);
        let totalHours = 0;
        for (let i = 0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / k);
        }
        if (totalHours <= h) {
            ans = k;    
            high = k - 1;
        } else {
            low = k + 1; 
        }
    }
    return ans;
    }
}
