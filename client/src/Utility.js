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

export {
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    setUnion,
    setIntersection,
    setDifference,
    copyCandidates
}