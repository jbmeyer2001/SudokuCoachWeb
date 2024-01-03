//takes a row number as paramenter, and returns a set of indices of the spaces in that row
function getRow(row) {
    let rowIndices = [];

    for (let i = 0; i < 9; i++) {
        rowIndices.push(i + row * 9);
    }

    return rowIndices;
}

//takes a column number as paramenter, and returns a set of indices of the spaces in that column
function getCol(col) {
    let colIndices = [];

    for (let i = 0; i < 9; i++) {
        colIndices.push(i * 9 + col);
    }

    return colIndices;
}

//takes a box number as paramenter, and returns a set of indices of the spaces in that box
function getBox(box) {
    let boxIndices = [];

    for (let i = 0; i < 9; i++) {
        boxIndices.push(Math.trunc(i / 3) * 9 + (i % 3) + Math.trunc(box / 3) * 27 + (box % 3) * 3);
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

export {getRow, getCol, getBox, isSolved};