class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                const b = stack.pop(); // Second operand
                const a = stack.pop(); // First operand
                let res = 0;

                switch (token) {
                    case '+':
                        res = a + b;
                        break;
                    case '-':
                        res = a - b;
                        break;
                    case '*':
                        res = a * b;
                        break;
                    case '/':
                        // Truncate toward zero
                        res = Math.trunc(a / b);
                        break;
                }
                stack.push(res);
            } else {
                stack.push(parseInt(token, 10));
            }
        }

        return stack.pop();
    }
}
