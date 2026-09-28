class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map[char]) {
            // Closing bracket: check if top of stack matches
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // Opening bracket: push to stack
            stack.push(char);
        }
    }

    return stack.length === 0;
    }
}
