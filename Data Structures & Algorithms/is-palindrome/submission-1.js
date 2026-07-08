class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    isPalindrome(s) {
        let newStr = '';
        for ( let c of s ){
            if(this.isAlphanumeric(c)){
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }
}
