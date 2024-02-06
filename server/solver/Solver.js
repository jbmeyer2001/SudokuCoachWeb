const { getRow, getCol, getBox, getRowColBoxNum, isSolved, copyCandidates } = require('./Utility.js');
const { checkPuzzle, isValid } = require('./CheckPuzzle.js');
const { soleCandidate } = require('./SoleCandidate.js');
const { uniqueCandidate } = require('./UniqueCandidate.js');
const { blockRowCol } = require('./BlockRowCol.js');
const { subsets } = require('./Subsets.js');
const { blockBlock } = require('./BlockBlock.js');
const { XWing } = require('./XWing.js');
const { YWing } = require('./YWing.js');

class Solver {
    constructor() {
        this.board = [
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
        this.candidates = [];
        this.unfilled = new Set();
    }

    solve = () => {
        //ensure the puzzle is valid
        if (!isValid(this.board)) {
            return "INVALID";
        }
    
        //generate candidates
        this.generateCandidates();
    
        let solution = {
            startCandidates: copyCandidates(this.candidates),
        };

        //try solving with our algorithmic solving method
        let i = 1;
        let step;
        
        do {
            step = this.getNextStep();
            solution[`step${i}`] = step;
            i++;
        } while (step.step != "CANTSOLVE" && step.step != "SOLVED");
    
        //if we couldn't solve it algorithmically using the patterns included, see if it is possible to solve at all
        if (step.step != "SOLVED") {
            let solveability = checkPuzzle(this.board);
    
            //if it is solveable, let the app know that we can't solve it
            if (solveability == "SOLVEABLE") {
                return "CANTSOLVE";
            }
    
            //if it isn't solveable, the 'solveability' variable has information on what the problem is
            return solveability;
        }
        
        //if we've reached here, it means the puzzle is solveable with our algorithm
        return solution;
    }

    generateCandidates = () => {
        this.unfilled.clear();
        for (let i = 0; i < 81; i++) {
            this.candidates[i] = new Set();
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
            let val = this.board[row][col];
            
            if (val != 0) {
                rows[row].add(val);
                cols[col].add(val);
                boxes[box].add(val);
            }
            else  {
                this.unfilled.add(i);
            }
        }
    
        let it = this.unfilled[Symbol.iterator]();
        for(const index of it) {
            let [row, col, box] = getRowColBoxNum(index, ["row", "col", "box"])
    
            let all = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
            //for each unfilled space, remove candidates that exist on the row, column, or box
            //shared with set the given set, and set the corrosponding set in 'candidates' accordingly
            rows[row].forEach( (candidate) => {all.delete(candidate)} );
            cols[col].forEach( (candidate) => {all.delete(candidate)} );
            boxes[box].forEach( (candidate) => {all.delete(candidate)} );
    
            this.candidates[index] = all;
        }
    
        //return a copy to ensure state is update every time on the display
        let copyOfCandidates = [];
        for (let i = 0; i < 81; i++) {
            copyOfCandidates[i] = new Set(this.candidates[i]);
        }
        return copyOfCandidates;
    }

    getNextStep = () => {
        //look for different patterns to either place values into spaces or remove candidates
        let step = soleCandidate(this.candidates, this.unfilled, this.insertVal);
        if (step.step != "NOSTEP") {
            return step;
        }
        step = uniqueCandidate(this.candidates, this.unfilled, this.insertVal);
        if (step.step != "NOSTEP") {
            return step;
        }
    
        step = blockRowCol(this.candidates, this.removeCandidates);
        if (step.step != "NOSTEP") {
            return step;
        }
      
        step = blockBlock(this.candidates, this.removeCandidates);
        if (step.step != "NOSTEP") {
            return step;
        }
    
        step = subsets(this.candidates, this.unfilled, this.removeMultipleCandidates);
        if (step.step != "NOSTEP") {
            return step;
        }
    
        step = XWing(this.candidates, this.removeCandidates);
        if (step.step != "NOSTEP") {
            return step;
        }
    
        step = YWing(this.candidates, this.removeCandidates);
        if (step.step != "NOSTEP") {
            return step;
        }
    
        if (isSolved(this.board)) {
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
    
    //value update from solving algorithm
    insertVal = (row, col, val) => {
        let index = row * 9 + col;
        let [box] = getRowColBoxNum(index, ["box"]);
    
        //set the board state accordingly
        this.board[row][col] = val;
    
        //remove the index from the unfilled spaces set
        this.unfilled.delete(index);
        this.candidates[index].clear();
    
        //remove the value as a candidate from all spaces the current space shares a row, column, or box with
        let rowSet = getRow(row);
        let colSet = getCol(col);
        let boxSet = getBox(box);
    
        rowSet.forEach((space) => {this.candidates[space].delete(val)});
        colSet.forEach((space) => {this.candidates[space].delete(val)});
        boxSet.forEach((space) => {this.candidates[space].delete(val)});
    }
    
    removeCandidates = (affectedSpaces, val) => {
        let it = affectedSpaces[Symbol.iterator]();
        for (const space of it) {
            this.candidates[space].delete(val);
        }
    }
    
    removeMultipleCandidates = (affectedSpaces, values) => {
        let spaces = affectedSpaces[Symbol.iterator]();
        for (const space of spaces) {
            let vals = values[Symbol.iterator]();
            for (const val of vals) {
                this.candidates[space].delete(val);
            }
        }
    }
}

module.exports = {
    Solver: Solver
}