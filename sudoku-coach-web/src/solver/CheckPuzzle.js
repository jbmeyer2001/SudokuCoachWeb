import {getRow, getCol, getBox, isSolved} from './Utility.js'
import { board } from './Solver.js'

let solutions = 0;

function checkPuzzle() {
    if (!isValid(board)) {
        return "INVALID";
    }

    solutions = 0;
    solveRecursive(board, 0, 0);

    if (solutions == 0) {
        return "UNSOLVEABLE";
    } 
    
    if (solutions > 1) {
        return "MULTIPLESOLUTIONS";
    }
    
    return "SOLVEABLE";
}

function duplicates(indices, puzzle) {
    let existingVals = new Set();

    for (let i = 0; i < indices.length; i++) {
        let row = Math.trunc(indices[i] / 9);
        let col = indices[i] % 9;
        let value = puzzle[row][col];

        //if the value is 0, keep iterating through the for loop
        if (value == 0) {
            continue;
        }
        
        //if the value is a duplicate, return false
        if (existingVals.has(value)) {
            return true;
        }

        //if the value isn't a duplicate, add it to the existing values
        existingVals.add(value);
    }

    return false;
}

//check if puzzle is valid (has no duplicates in rows, columns, or boxes)
function isValid(puzzle) {

    for (let i = 0; i < 9; i++) {
        let rowIndices = getRow(i);
        let colIndices = getCol(i);
        let boxIndices = getBox(i);

        if (duplicates(rowIndices, puzzle) || duplicates(colIndices, puzzle) || duplicates(boxIndices, puzzle)) {
            return false;
        }
    }

    return true;

}

function solveRecursive(puzzle, row, col) {
    let nextRow = (col == 8) ? row + 1 : row;
    let nextCol = (col == 8) ? 0 : col + 1;
    
    //if puzzle has more than one solutions, it isn't valid and there's no reason to continue executing
    if (solutions > 1) {
        return;
    }

    //if the puzzle is solved, increment solutions and return if so
    if(isSolved(puzzle)) {
        solutions++;
        return;
    }

    //if space is already given by the initial puzzle state, don't change it
    if (puzzle[row][col] != 0) {
        solveRecursive(puzzle, nextRow, nextCol);
        return;
    }

    //try different values in the current space, recurse to see if they create a solution to the puzzle
    for (let i = 1; i <= 9; i++) {
        puzzle[row][col] = i;
        if (isValid(puzzle)) {
            solveRecursive(puzzle, nextRow, nextCol);
        }
        if (solutions > 1) {
            break;
        }
    }
    puzzle[row][col] = 0;
}

export { checkPuzzle };