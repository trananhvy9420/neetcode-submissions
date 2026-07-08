class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join('');
        // strs = ["Hello","World"];
        // newStrs = ["5#Hello","5#World"];
        // function join()
        // "5#Hello5#World"
        // i = 0 
        // j = 0
        // j = 1 
        //  str[j] === "#"
        // out loop
        // str.slice(i,j) i = 0 , j = 1 strs[i]=strs[0] = 5 
        // parseInt(strs[i]) = length
        // i = j + 1  = 1  + 1 = 2 
        // strs.slice(i,i+length)=strs.slice(2,2+5)=strs.slice(2,7) = 
        // 2 3 4 5 6 => Hello => array = ["Hello"]
        // i = i + length = 2 + 5 = 7
        //
            str.slice()
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const array = [];
        let i = 0 ;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
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
