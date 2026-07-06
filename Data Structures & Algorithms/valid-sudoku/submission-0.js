class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //row
        for (let row = 0 ; row < 9 ; row++){
            let seen = new Set();
            for ( let i = 0 ; i < 9 ; i++ ){
                if(board[row][i] === ".") continue;
                else if(seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }
        //column
        for ( let column = 0 ; column < 9 ; column++ ){
            let seen = new Set();
            for ( let i = 0 ; i < 9 ; i++ ){
                if(board[i][column] === ".") continue;
                else if(seen.has(board[i][column])) return false;
                seen.add(board[i][column]);
            }
        }
        //3x3
        for ( let square = 0 ; square < 9 ; square++ ){
            let seen = new Set();
            for ( let i = 0 ; i < 3 ; i++ ){
                for ( let j = 0 ; j < 3 ; j++ ){
                    let row = Math.floor(square/3)*3 +i;
                    let column = (square % 3) * 3 + j ;
                    if(board[row][column] === ".") continue;
                    if(seen.has(board[row][column])) return false;
                    seen.add(board[row][column]);
                }
            }
        }
        return true;
    }
}
