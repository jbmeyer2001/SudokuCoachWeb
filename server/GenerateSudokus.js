import soleCandidate from './solver/SoleCandidate.js'
import uniqueCandidate from './solver/UniqueCandidate.js'
import blockRowCol from './solver/BlockRowCol.js'
import blockBlock from './solver/BlockBlock.js'
import subsets from './solver/Subsets.js'
import XWing from './solver/XWing.js'
import YWing from './solver/YWing.js'
import { isSolved } from './solver/Utility.js'
import { isValid } from './solver/CheckPuzzle.js'

//use a 'solver' but give it an empty puzzle to start out with
//and instead of starting with the same number every time, give it a random
//value.
function generateSeedPuzzle() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let seed = generateSeedRecursive(board, 0, 0)[1];
    return seed; 
}

function generateSeedRecursive(puzzle, row, col) {
    if (isSolved(puzzle)) {
        return [true, puzzle];
    }

    let nextRow = (col == 8) ? row + 1 : row;
    let nextCol = (col == 8) ? 0 : col + 1;

    let remaining = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let val = Math.floor(Math.random() * 9) + 1; //integer from 1-9

    while (remaining.size != 0) {
        puzzle[row][col] = val;
        remaining.delete(val);
        if (isValid(puzzle)) {
            let [complete, board] = generateSeedRecursive(puzzle, nextRow, nextCol);
            if (complete) {
                return [complete, board];
            }
        }
        val = (val != 9) ? val + 1: 1;
    }

    puzzle[row][col] = 0;
    return [false, undefined];
}

//backtrack through the seed puzzle by removing a space at a time,
//trying to find opportunities to use the patterns in 'pattern' param
//FOR NOW, return the different possible patterns are created after
//removing a space
function createPuzzleFromSeed(puzzle, patterns) {

}

export { generateSeedPuzzle };