class Solution {
    /**
     * @param {string} s
     * @return {boolean} 
     */
    isAlphanumeric (char){
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }
    isPalindrome(s) {
        let newString = "";
        for ( let char of s ){
            if(this.isAlphanumeric(char)){
                newString += char.toLowerCase();
            }
        }
        return newString === newString.split('').reverse().join('');
    }
}
