class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let response = "";
        for (const str of strs){
            response += `${str.length}#${str}`;
        }
        return response;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let array = [];
        let i = 0 ;
        while (i < str.length){
            let j = i ;
            while(str[j] !== "#"){
                j++;
            }
            let length = parseInt(str.slice(i,j));
            i = j + 1 ;
            array.push(str.slice(i, i + length));
            i += length;
        }
        return array;
        
    }
}
