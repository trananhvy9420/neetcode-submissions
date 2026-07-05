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
    //6#Design2#An9#Algorithm'
    //012345678
    //["","vn"]
    //0#2vn
    //1#V4#Grz/
    //2#we3#say1#:3#yes10#!@#$%^&*()
    decode(str) {
        // let array = [];
        // let i = 0;
        // while (i < str.length) {
        //     let j = i;
        //     while (str[j] !== '#') {
        //         j++;
        //     }
        //     let length = parseInt(str.substring(i, j));
        //     i = j + 1;
        //     array.push(str.substring(i, i + length));
        //     i += length;
        // }
        // return array;
        // let array = [];
        // let i = 0;
        // while (i < str.length){
        //     let j = i;
        //     while(str[j] !== "#"){
        //         j++;
        //     }
        //     let length = parseInt(str.substring(i,j));
        //     i = j + 1 ;
        //     array.push(str.substring(i,i+length));
        //     i += length;
        // }
        // return array;
        //10#!@#$%^&*()
        let array = [];
        let i = 0 ;
        while(i < str.length){
            let j = i ;
            while(str[j] !== "#"){
                j++;
            }
            let length = parseInt(str.substring(i,j));
            i = j + 1 ;
            array.push(str.substring(i,i+length));
            i += length;
        }
        return array;
    }
}
