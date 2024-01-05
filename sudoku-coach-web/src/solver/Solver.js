import { copyBoard, getRow, getCol, getBox, getRowColBoxNum, isSolved } from './Utility.js'
import { checkPuzzle, isValid } from './CheckPuzzle.js'
import soleCandidate from './SoleCandidate.js'
import uniqueCandidate from './UniqueCandidate.js'
import blockRowCol from './BlockRowCol.js'
import nakedSubset from './NakedSubset.js'
import hiddenSubset from './HiddenSubset.js'
import blockBlock from './BlockBlock.js'
import XWing from './XWing.js'
import YWing from './YWing.js'

const board = [
    [0, 9, 0, 0, 7, 1, 4, 0, 0],
    [3, 0, 7, 5, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 6, 4, 0, 0, 0],
    [2, 0, 9, 0, 0, 0, 0, 3, 0],
    [5, 1, 0, 0, 0, 0, 0, 2, 4],
    [0, 3, 0, 0, 0, 0, 8, 0, 9],
    [0, 0, 0, 1, 9, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 7, 3, 0, 1],
    [0, 0, 1, 6, 8, 0, 0, 9, 0]
]

const candidates = [];

const unfilled = new Set();

function check() {
    
    //ensure the puzzle is valid
    if (!isValid(board)) {
        return "INVALID";
    }

    //generate candidates
    generateCandidates();

    //try solving with our algorithmic solving method
    let saveBoard = [[], [], [], [], [], [], [], [], []];
    copyBoard(board, saveBoard);
    let step;
    do {
        step = getNextStep();
    } while (step.step != "CANTSOLVE" && step.step != "SOLVED");
    copyBoard(saveBoard, board);
    candidates.splice(0, candidates.length);
    unfilled.clear();

    //if we couldn't solve it algorithmically using the patterns included, see if it is possible to solve at all
    if (step.step != "SOLVED") {
        let solveability = checkPuzzle(board);

        //if it is solveable, let the app know that we can't solve it
        if (solveability == "SOLVEABLE") {
            return "CANTSOLVE";
        }

        //if it isn't solveable, the 'solveability' variable has information on what the problem is
        return solveability;
    }

    //if we've reached here, it means the puzzle is solveable with our algorithm
    return "SOLVEABLE";
}

function generateCandidates() {
    unfilled.clear();
    for (let i = 0; i < 81; i++) {
        candidates[i] = new Set();
    }

    let rows = [];
    let cols = [];
    let boxes = [];

    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }

    //generate a set for every row, column, and box that contains all the numbers within that row,
    //column, or box. If no number exists in a given space, add it to the unfilled set.
    for (let i = 0; i < 81; i++) {
        let [row, col, box] = getRowColBoxNum(i, ["row", "col", "box"]);
        let val = board[row][col];
        
        if (val != 0) {
            rows[row].add(val);
            cols[col].add(val);
            boxes[box].add(val);
        }
        else  {
            unfilled.add(i);
        }
    }

    let it = unfilled.entries();
    for(const space of it) {
        let index = space[0]
        let [row, col, box] = getRowColBoxNum(index, ["row", "col", "box"])

        let all = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        rows[row].forEach( (candidate, set) => {all.delete(candidate)} );
        cols[col].forEach( (candidate, set) => {all.delete(candidate)} );
        boxes[box].forEach( (candidate, set) => {all.delete(candidate)} );

        candidates[index] = all;
    }

    let copyOfCandidates = [];
    for (let i = 0; i < 81; i++) {
        copyOfCandidates[i] = new Set(candidates[i]);
    }
    return copyOfCandidates;
}

function getNextStep() {
    //check if there is a sole candidate pattern
    let step = soleCandidate(candidates, unfilled, insertVal);
    if (step.step != "NOSTEP") {
        return step;
    }

    //check if there is a unique candidate pattern
    step = uniqueCandidate(candidates, unfilled, insertVal);
    if (step.step != "NOSTEP") {
        return step;
    }

    step = blockRowCol(candidates, removeCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }
  
    step = blockBlock(candidates, removeCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }

    step = nakedSubset(candidates, unfilled, removeMultipleCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }

    step = hiddenSubset(candidates, unfilled, removeMultipleCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }

    step = XWing(candidates, removeCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }

    step = YWing(candidates, removeCandidates);
    if (step.step != "NOSTEP") {
        return step;
    }

    if (isSolved(board)) {
        return {
            step: "SOLVED"
        };
    }
    
    return {
        step: "CANTSOLVE"
    };
}

function insertTypedVal(row, col, val) {
    board[row][col] = val;
}

function insertVal (row, col, val) {
    let index = row * 9 + col;
    let [box] = getRowColBoxNum(index, ["box"]);

    board[row][col] = val;
    unfilled.delete(index);
    candidates[index].clear();

    let rowSet = getRow(row);
    let colSet = getCol(col);
    let boxSet = getBox(box);

    rowSet.forEach((space, set) => {candidates[space].delete(val)});
    colSet.forEach((space, set) => {candidates[space].delete(val)});
    boxSet.forEach((space, set) => {candidates[space].delete(val)});
}

function removeCandidates(affectedSpaces, val) {
    let it = affectedSpaces[Symbol.iterator]();
    for (const space of it) {
        candidates[space].delete(val);
    }
}

function removeMultipleCandidates(affectedSpaces, values) {
    let spaces = affectedSpaces[Symbol.iterator]();
    for (const space of spaces) {
        let vals = values[Symbol.iterator]();
        for (const val of vals) {
            candidates[space].delete(val);
        }
    }
}

function clearBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = 0;
        }
    }
    candidates.splice(0, candidates.length);
    unfilled.clear();
}

export { board, candidates, unfilled, generateCandidates, getNextStep, check, insertTypedVal, clearBoard};