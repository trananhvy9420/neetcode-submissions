class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //row 
        for (let row = 0 ; row < 9 ; row++){
            const set = new Set();
            for (let column = 0 ; column < 9 ; column++){
                if (board[row][column] === ".") continue;
                else if (set.has(board[row][column])) return false;
                set.add(board[row][column])
            }
        }
        //column
        for (let column = 0 ; column < 9 ; column++){
            const set = new Set();
            for (let row = 0 ; row < 9 ; row++){
                if (board[row][column] === ".") continue;
                else if (set.has(board[row][column])) return false;
                set.add(board[row][column])
            }
        }
        //3x3 square
        for (let indexSquare = 0 ; indexSquare < 9 ;indexSquare++){
            const set = new Set();
            for (let i = 0 ; i < 3 ;i++){
                for (let j = 0 ; j < 3 ; j++){
                    let row = Math.floor(indexSquare / 3) * 3 + i;
                    let column = (indexSquare % 3) * 3 + j ;
                    if(board[row][column] === ".") continue;
                    else if (set.has(board[row][column])) return false;
                    set.add(board[row][column])
                }
            }
        }
        return true;
    }
}
