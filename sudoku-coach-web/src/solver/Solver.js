import { copyBoard, getRow, getCol, getBox, getRowColBoxNum, isSolved } from './Utility.js'
import { checkPuzzle, isValid } from './CheckPuzzle.js'
import soleCandidate from './SoleCandidate.js'
import uniqueCandidate from './UniqueCandidate.js'
import blockRowCol from './BlockRowCol.js'
import subsets from './Subsets.js'
import blockBlock from './BlockBlock.js'
import XWing from './XWing.js'
import YWing from './YWing.js'


const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
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

    let it = unfilled[Symbol.iterator]();
    for(const index of it) {
        let [row, col, box] = getRowColBoxNum(index, ["row", "col", "box"])

        let all = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        //for each unfilled space, remove candidates that exist on the row, column, or box
        //shared with set the given set, and set the corrosponding set in 'candidates' accordingly
        rows[row].forEach( (candidate) => {all.delete(candidate)} );
        cols[col].forEach( (candidate) => {all.delete(candidate)} );
        boxes[box].forEach( (candidate) => {all.delete(candidate)} );

        candidates[index] = all;
    }

    //return a copy to ensure state is update every time on the display
    let copyOfCandidates = [];
    for (let i = 0; i < 81; i++) {
        copyOfCandidates[i] = new Set(candidates[i]);
    }
    return copyOfCandidates;
}

function getNextStep() {
    //look for different patterns to either place values into spaces or remove candidates
    let step = soleCandidate(candidates, unfilled, insertVal);
    if (step.step != "NOSTEP") {
        return step;
    }

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

    step = subsets(candidates, unfilled, removeMultipleCandidates);
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
    
    //if we've made it here, it means the puzzle isn't solved and this solver
    //isn't capable of finding any new patterns.
    return {
        step: "CANTSOLVE"
    };
}

//value update from user
function insertTypedVal(row, col, val) {
    board[row][col] = val;
}


//value update from solving algorithm
function insertVal (row, col, val) {
    let index = row * 9 + col;
    let [box] = getRowColBoxNum(index, ["box"]);

    //set the board state accordingly
    board[row][col] = val;

    //remove the index from the unfilled spaces set
    unfilled.delete(index);
    candidates[index].clear();

    //remove the value as a candidate from all spaces the current space shares a row, column, or box with
    let rowSet = getRow(row);
    let colSet = getCol(col);
    let boxSet = getBox(box);

    rowSet.forEach((space) => {candidates[space].delete(val)});
    colSet.forEach((space) => {candidates[space].delete(val)});
    boxSet.forEach((space) => {candidates[space].delete(val)});
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

function setBoard(srcBoard) {
    copyBoard(srcBoard, board);
}

function boardSolved() {
    return isSolved(board);
}

export { generateCandidates, getNextStep, check, insertTypedVal, clearBoard, setBoard, boardSolved};