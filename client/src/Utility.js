//copy the array of one board into the array of another
function copyBoard (src, dest) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            dest[i][j] = Number(src[i][j]);
        }
    }
}

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

//calculate the row and or column and or box corresponding to a given index
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

//there is not browser compatibility for Set.prototype.union() so I'm making my own version
//as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union
function setUnion() {
    let retval = new Set();
    
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].forEach((val) => {
            retval.add(val);
        })
    }

    return retval;
}

//there is not browser compatibility for Set.prototype.intersection() so I'm making my own version
//as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection
function setIntersection(set1, set2) {
    let retval = new Set();

    set1.forEach((val) => {
        if (set2.has(val)) {
            retval.add(val);
        }
    });

    return retval;
}

//there is not browser compatibility fro Set.prototype.difference() so I'm making my own version
//as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference
function setDifference(set1, set2) {
    let retval = new Set();

    set1.forEach((val) => {
        if (!set2.has(val)) {
            retval.add(val);
        }
    });

    return retval;
}

//for creating a copy of an array of candidates
function copyCandidates(candidates) {
    let copy = [];
    for (let i = 0; i < 81; i++){
        copy[i] = new Set(candidates[i]);
    }
    return copy;
}

function duplicates(indices, puzzle) {
    let existingVals = new Set();

    for (let i = 0; i < indices.length; i++) {
        let [row, col] = getRowColBoxNum(indices[i], ["row", "col"]);
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
        let rowIndices = Array.from(getRow(i));
        let colIndices = Array.from(getCol(i));
        let boxIndices = Array.from(getBox(i));

        if (duplicates(rowIndices, puzzle) || duplicates(colIndices, puzzle) || duplicates(boxIndices, puzzle)) {
            return false;
        }
    }

    return true;

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

export {
    copyBoard,
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    setUnion,
    setIntersection,
    setDifference,
    copyCandidates,
    isValid,
    isSolved
}