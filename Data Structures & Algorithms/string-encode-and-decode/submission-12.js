class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join('');
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    //5#Hello5#World
    //012345678910111213
        // i = 0 
    decode(str) {
        let array = [];
        let i = 0 ;
        while ( i < str.length ){
            let j = i;
            while ( str[j] !== "#" ){
                j++;
            }
            let length = parseInt(str.slice(i,j));
            i = j + 1 ;
            array.push(str.slice(i,i+length));
            i += length;
        }
        return array;
    }
}
