import {
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    setUnion,
    setIntersection,
    setDifference
} from '../solver/Utility.js'

function displaySoleCandidate(step, updateSpace, updateCandidate) {
    let index = step.row * 9 + step.col;
    let [box] = getRowColBoxNum(index, ["box"]);

    updateSpace(index, "GREEN");
    updateCandidate(index, step.val, "BLUE");

    //I always check for 'blue' or 'green' first when deciding color, so it's okay that both 
    //displayCandidateBlue and displayCandidateRed have the index in the set at step.val
    let it = setUnion(getRow(step.row), getCol(step.col), getBox(box))[Symbol.iterator]();
    for (const space of it) {
      updateCandidate(space, step.val, "RED");
    }
}

function displayUniqueCandidate(step, updateSpace, updateCandidate) {
    let index = step.row * 9 + step.col;
    let [box] = getRowColBoxNum(index, ["box"]);
    let it;
    switch (step.set) {
        case "ROW":
            it = getRow(step.row)[Symbol.iterator]();
            break;
        case "COL":
            it = getCol(step.col)[Symbol.iterator]();
            break;
        case "BOX":
            it = getBox(box)[Symbol.iterator]();      
            break;
        default:
            alert("an error has occurd in displaying colored numbers/spaces");
    }
    for (const space of it) {
      updateSpace(space, "GREEN");
    }
    
    updateCandidate(index, step.val, "BLUE");

    //I always check for 'blue' or 'green' first when deciding color, so it's okay that both 
    //displayCandidateBlue and displayCandidateRed have the index in the set at step.val
    it = setUnion(getRow(step.row), getCol(step.col), getBox(box))[Symbol.iterator]();
    for (const space of it) {
      updateCandidate(space, step.val, "RED");
    }
}

function displayBlockRowCol(step, updateSpace, updateCandidate) { //TODO update to use affected spaces
    let set;
    switch (step.set) {
        case "ROW":
            set = getRow(step.row);
            break;
        case "COL":
            set = getCol(step.col);
            break;
        default:
            alert("an error has occurd in displaying colored numbers/spaces");
    }

    let it = setIntersection(set, getBox(step.box))[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "GREEN");
        updateCandidate(space, step.val, "BLUE");
    }

    it = setDifference(set, getBox(step.box))[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "RED");
        updateCandidate(space, step.val, "RED");
    }
}

function displayBlockBlock(step, updateSpace, updateCandidate) { //TODO update to use affected spaces
    //pattern spaces are the spaces within the boxes AND the columns/rows
    let boxes = setUnion(getBox(step.box1), getBox(step.box2));
    let rowcols;
    switch(step.set) {
        case "ROW":
            rowcols = setUnion(getRow(step.row1), getRow(step.row2));
            break;
        case "COL":
            rowcols = setUnion(getCol(step.col1), getCol(step.col2));
            break;
        default:
            alert("an error has occurd in displaying colored numbers/spaces");
    }

    let it = setIntersection(rowcols, boxes)[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "GREEN");
        updateCandidate(space, step.val, "BLUE");
    }

    //affected spaces are those within ONLY the columns/rows
    it = setDifference(rowcols, boxes)[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "RED");
        updateCandidate(space, step.val, "RED");
    }
}

function displayNakedSubset(step, updateSpace, updateCandidate) {
    let it1 = step.patternSpaces[Symbol.iterator]();
    for (const space of it1) {
        updateSpace(space, "GREEN");

        var it2 = step.removalCandidates[Symbol.iterator]();
        for (const value of it2) {
            updateCandidate(space, value, "BLUE");
        }
    }

    it1 = step.affectedSpaces[Symbol.iterator]();
    for (const space of it1) {
        updateSpace(space, "RED");

        it2 = step.removalCandidates[Symbol.iterator]();
        for (const value of it2) {
            updateCandidate(space, value, "RED");
        }
    }
}

function displayHiddenSubset(step, updateSpace, updateCandidate) {
    let it = step.affectedSpaces[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "GREEN");

        for (let j = 1; j <= 9; j++) {
            if (step.removalCandidates.has(j)) {
                updateCandidate(space, j, "RED");
            }
            else {
                updateCandidate(space, j, "BLUE");
            }
        }
    }

}

function displayXWing(step, updateSpace, updateCandidate) {
let greenSpaces = Array.from(
        step.inRows ? 
        setUnion(getCol(step.col1), getCol(step.col2)) :
        setUnion(getRow(step.row1), getRow(step.row2))
    );
    for (let i = 0; i < greenSpaces.length; i++) {
        updateSpace(greenSpaces[i], "GREEN");
    }

    let it = step.intersectionSpaces[Symbol.iterator]();
    for (const space of it) {
        updateCandidate(space, step.val, "BLUE");
    }

    it = step.affectedSpaces[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "RED");
        updateCandidate(space, step.val, "RED");
    }
}

function displayYWing(step, updateSpace, updateCandidate) {
    for (let i = 0; i < 3; i++) {
        updateSpace([step.base, step.wing1, step.wing2][i], "GREEN");
        updateCandidate([step.base, step.wing1, step.wing2][i], step.val, "BLUE");
    }

    let it = step.affectedSpaces[Symbol.iterator]();
    for (const space of it) {
        updateSpace(space, "RED");
        updateCandidate(space, step.val, "RED");
    }
}

export {
    displaySoleCandidate, 
    displayUniqueCandidate, 
    displayBlockRowCol,
    displayBlockBlock,
    displayNakedSubset,
    displayHiddenSubset,
    displayXWing,
    displayYWing
}