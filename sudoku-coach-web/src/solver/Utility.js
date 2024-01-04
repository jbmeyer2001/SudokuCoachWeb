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

function getCandidates(candidates, indices) {
    let retval = new Set();

    let it = indices[Symbol.iterator]();
    for (const index of it) {
        candidates[index].forEach((candidate) => {
            retval.add(candidate)
        });
    }
    
    return retval;
}

//there is not browser compatibility for Set.prototype.union() so I'm making my own version
//as per https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union
function setUnion(sets) {
    let retval = new Set();
    
    const it1 = sets[Symbol.iterator]();
    for (const set of it1) {
        const it2 = Array.from(set)[Symbol.iterator]();
        for (const val of it2) {
            retval.add(val);
        }
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

export {
    getRow, 
    getCol, 
    getBox, 
    isSolved,
    getRowColBoxNum,
    getCandidates,
    setUnion,
    setIntersection,
    setDifference
};