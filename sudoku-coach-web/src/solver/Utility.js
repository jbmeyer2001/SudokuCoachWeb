//takes a row number as paramenter, and returns a set of indices of the spaces in that row
function getRow(row) {
    let rowIndices = new Set();

    for (let i = 0; i < 9; i++) {
        rowIndices.add(i + row * 9);
    }

    return rowIndices;
}

//takes a column number as paramenter, and returns a set of indices of the spaces in that column
function getCol(col) {
    let colIndices = new Set();

    for (let i = 0; i < 9; i++) {
        colIndices.add(i * 9 + col);
    }

    return colIndices;
}

//takes a box number as paramenter, and returns a set of indices of the spaces in that box
function getBox(box) {
    let boxIndices = new Set();

    for (let i = 0; i < 9; i++) {
        boxIndices.add(Math.trunc(i / 3) * 9 + (i % 3) + Math.trunc(box / 3) * 27 + (box % 3) * 3);
    }

    return boxIndices;
}

//we assume that the puzzle is valid (no duplicates) and see if there are any 0's left to determine
//whether it is solved or not
function isSolved(puzzle) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] == 0) {
                return false;
            }
        }
    }

    return true;
}

function getRowColBoxNum(index, which) {
    let retval = [];

    if (which.includes("row")) {
        retval.push(Math.trunc(index / 9));
    }

    if (which.includes("col")) {
        retval.push(index % 9);
    }

    if (which.includes("box")) {
        retval.push(Math.trunc(index / 27) * 3 + Math.trunc((index % 9) / 3));
    }

    return retval;
}

function getCandidatesFromIndices(candidates, indices) {
    let retval = new Set();

    for (const index of indices.entries()) {
        candidates[index[0]].forEach((candidate) => {
            retval.add(candidate)
        });
    }
    
    return retval;
}

export {
    getRow, 
    getCol, 
    getBox, 
    isSolved,
    getRowColBoxNum,
    getCandidatesFromIndices
};