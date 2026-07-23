class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // for (let row = 0 ; row < 9 ; row++){
        //     const set = new Set();
        //     for (let column = 0 ; column < 9 ; column++){
        //         if (board[row][column] === '.') continue;
        //         else if (set.has(board[row][column])) return false;
        //         set.add(board[row][column])
        //     }
        // }
        // for (let column = 0 ; column < 9 ; column++){
        //     const set = new Set();
        //     for (let row = 0 ; row < 9 ; row++){
        //         if (board[row][column] === '.') continue;
        //         else if (set.has(board[row][column])) return false;
        //         set.add(board[row][column])
        //     }
        // }
        // for (let indexSquare = 0 ; indexSquare < 9 ;indexSquare++){
        //     const set = new Set();
        //     for (let i = 0 ; i < 3 ;i++){
        //         for (let j = 0 ; j < 3 ; j++){
        //             let row = Math.floor(indexSquare / 3) * 3 + i;
        //             let column = (indexSquare % 3) * 3 + j ;
        //             if(board[row][column] === '.') continue;
        //             else if (set.has(board[row][column])) return false;
        //             set.add(board[row][column])
        //         }
        //     }
        // }
        // return true;
        const columnSetArray = Array.from({length:9}).map(() => new Set());
        const rowSetArray = Array.from({length:9}).map(() => new Set());
        const squareSetArray = Array.from({length:9}).map(() => new Set());
        for (let row = 0 ; row < 9 ; row++){
            for (let column = 0 ; column < 9 ; column++){
                const value = board[row][column];
                const squareIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
                if (value === '.') continue;
                if (
                rowSetArray[row].has(value) ||
                columnSetArray[column].has(value) ||
                squareSetArray[squareIndex].has(value)
                ){
                return false;
            }
            rowSetArray[row].add(value);
            columnSetArray[column].add(value);
            squareSetArray[squareIndex].add(value);
            }
        }
        return true;   
    }
}
