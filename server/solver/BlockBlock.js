const {
    getRow, 
    getCol, 
    getBox, 
    getRowColBoxNum, 
    setDifference, 
    setIntersection, 
    getCandidates
} = require('./Utility');

function blockBlock(candidates, removeCandidates) {
    let boxes = {};

    //see https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php for how a block to block interaction works
    //start by iterating through every box and recording which candidates occur in each row/column
    for (let box = 0; box < 9; box++) {
        let startIndex = Math.trunc(box / 3) * 27 + (box % 3) * 3;
        let [row, col] = getRowColBoxNum(startIndex, ["row", "col"]);
        let b = {};

        let row1Candidates = getCandidates(candidates, setIntersection(getRow(row), getBox(box)));
        let row2Candidates = getCandidates(candidates, setIntersection(getRow(row + 1), getBox(box)));
        let row3Candidates = getCandidates(candidates, setIntersection(getRow(row + 2), getBox(box)));
        let col1Candidates = getCandidates(candidates, setIntersection(getCol(col), getBox(box)));
        let col2Candidates = getCandidates(candidates, setIntersection(getCol(col + 1), getBox(box)));
        let col3Candidates = getCandidates(candidates, setIntersection(getCol(col + 2), getBox(box)));

        b["row1And2Comm"] = setDifference(setIntersection(row1Candidates, row2Candidates), row3Candidates);
        b["row1And3Comm"] = setDifference(setIntersection(row1Candidates, row3Candidates), row2Candidates);
        b["row2And3Comm"] = setDifference(setIntersection(row2Candidates, row3Candidates), row1Candidates);
        b["col1And2Comm"] = setDifference(setIntersection(col1Candidates, col2Candidates), col3Candidates);
        b["col1And3Comm"] = setDifference(setIntersection(col1Candidates, col3Candidates), col2Candidates);
        b["col2And3Comm"] = setDifference(setIntersection(col2Candidates, col3Candidates), col1Candidates);

        boxes[box] = b;
    }

    //then, iterate through each box again looking other boxes that share the row or
    //if those two other boxes have candidates in two rows or columns, then
    //we know in the final puzzle the values of those candidates must occur
    //in either of the other boxes, so we can remove them from the current box
    //in those rows or columns
    for (let box = 0; box < 9; box++) {
        let startIndex = Math.trunc(box / 3) * 27 + (box % 3) * 3;
        let [row, col] = getRowColBoxNum(startIndex, ["row", "col"]);

        //get the box number of boxes that share either rows or columns with the current box
        let rowBoxNum1 = (box - (box % 3)) + ((box + 1) % 3);
        let rowBoxNum2 = (box - (box % 3)) + ((box + 2) % 3);
        let colBoxNum1 = (box + 3) % 9;
        let colBoxNum2 = (box + 6) % 9;
        let rowBox1 = boxes[rowBoxNum1];
        let rowBox2 = boxes[rowBoxNum2];
        let colBox1 = boxes[colBoxNum1];
        let colBox2 = boxes[colBoxNum2];

        //define sets containing the values that we would have to remove from particular columns
        let row1And2Remove = setIntersection(rowBox1.row1And2Comm, rowBox2.row1And2Comm);
        let row1And3Remove = setIntersection(rowBox1.row1And3Comm, rowBox2.row1And3Comm);
        let row2And3Remove = setIntersection(rowBox1.row2And3Comm, rowBox2.row2And3Comm);
        let col1And2Remove = setIntersection(colBox1.col1And2Comm, colBox2.col1And2Comm);
        let col1And3Remove = setIntersection(colBox1.col1And3Comm, colBox2.col1And3Comm);
        let col2And3Remove = setIntersection(colBox1.col2And3Comm, colBox2.col2And3Comm);

        //check to see if we would actually be able to remove candidates using one of those sets
        let affectedSpaces = setDifference(getBox(box), getRow(row + 2));
        let affectedCandidates = getCandidates(candidates, affectedSpaces);
        let it = row1And2Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "ROW",
                    row1: row,
                    row2: row + 1,
                    box1: rowBoxNum1,
                    box2: rowBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }

        affectedSpaces = setDifference(getBox(box), getRow(row + 1));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = row1And3Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "ROW",
                    row1: row,
                    row2: row + 2,
                    box1: rowBoxNum1,
                    box2: rowBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }

        affectedSpaces = setDifference(getBox(box), getRow(row));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = row2And3Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "ROW",
                    row1: row + 1,
                    row2: row + 2,
                    box1: rowBoxNum1,
                    box2: rowBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }

        affectedSpaces = setDifference(getBox(box), getCol(col + 2));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = col1And2Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "COL",
                    col1: col,
                    col2: col + 1,
                    box1: colBoxNum1,
                    box2: colBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }

        affectedSpaces = setDifference(getBox(box), getCol(col + 1));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = col1And3Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "COL",
                    col1: col,
                    col2: col + 2,
                    box1: colBoxNum1,
                    box2: colBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }

        affectedSpaces = setDifference(getBox(box), getCol(col));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = col2And3Remove[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKBLOCK",
                    set: "COL",
                    col1: col + 1,
                    col2: col + 2,
                    box1: colBoxNum1,
                    box2: colBoxNum2,
                    val: candidate,
                    affectedSpaces: [...affectedSpaces.values()]
                }
            }
        }
    }

    return {
        step: "NOSTEP"
    }
}

module.exports = {
    blockBlock: blockBlock
}