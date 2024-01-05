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
    let redCandidates = Array.from(setUnion([getRow(step.row), getCol(step.col), getBox(box)]));
    for (let i = 0; i < redCandidates.length; i++) {
      updateCandidate(redCandidates[i], step.val, "RED");
    }
}

function displayUniqueCandidate(step, updateSpace, updateCandidate) {
    let index = step.row * 9 + step.col;
    let [box] = getRowColBoxNum(index, ["box"]);

    switch (step.set) {
      case "ROW":
        var greenSpaces = Array.from(getRow(step.row));
        break;
      case "COL":
        var greenSpaces = Array.from(getCol(step.col));
        break;
      case "BOX":
        var greenSpaces = Array.from(getBox(box));      
        break;
    }
    for (let i = 0; i < greenSpaces.length; i++) {
      updateSpace(greenSpaces[i], "GREEN");
    }
    
    updateCandidate(index, step.val, "BLUE");

    //I always check for 'blue' or 'green' first when deciding color, so it's okay that both 
    //displayCandidateBlue and displayCandidateRed have the index in the set at step.val
    let redCandidates = Array.from(setUnion([getRow(step.row), getCol(step.col), getBox(box)]));
    for (let i = 0; i < redCandidates.length; i++) {
      updateCandidate(redCandidates[i], step.val, "RED");
    }
}

function displayBlockRowCol(step, updateSpace, updateCandidate) {
    let set;
    switch (step.set) {
        case "ROW":
            set = getRow(step.row);
            break;
        case "COL":
            set = getCol(step.col);
            break;
    }

    let patternSpaces = Array.from(setIntersection(set, getBox(step.box)));
    for (let i = 0; i < patternSpaces.length; i++) {
        updateSpace(patternSpaces[i], "GREEN");
        updateCandidate(patternSpaces[i], step.val, "BLUE");
    }

    let affectedSpaces = Array.from(setDifference(set, getBox(step.box)));
    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "RED");
        updateCandidate(affectedSpaces[i], step.val, "RED");
    }
}

function displayBlockBlock(step, updateSpace, updateCandidate) {
    //pattern spaces are the spaces within the boxes AND the columns/rows
    let boxes = setUnion([getBox(step.box1), getBox(step.box2)]);
    let rowcols;
    switch(step.set) {
        case "ROW":
            rowcols = setUnion([getRow(step.row1), getRow(step.row2)]);
            break;
        case "COL":
            rowcols = setUnion([getCol(step.col1), getCol(step.col2)]);
            break;
    }

    let patternSpaces = Array.from(setIntersection(rowcols, boxes));
    for (let i = 0; i < patternSpaces.length; i++) {
        updateSpace(patternSpaces[i], "GREEN");
        updateCandidate(patternSpaces[i], step.val, "BLUE");
    }

    //affected spaces are those within ONLY the columns/rows
    let affectedSpaces = Array.from(setDifference(rowcols, boxes));
    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "RED");
        updateCandidate(affectedSpaces[i], step.val, "RED");
    }
}

function displayNakedSubset(step, updateSpace, updateCandidate) {
    let values = Array.from(step.removalCandidates);
    
    let patternSpaces = Array.from(step.patternSpaces);
    for (let i = 0; i < patternSpaces.length; i++) {
        updateSpace(patternSpaces[i], "GREEN");

        for (let j = 0; j < values.length; j++) {
            updateCandidate(patternSpaces[i], values[j], "BLUE");
        }
    }

    let affectedSpaces = Array.from(step.affectedSpaces);
    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "RED");

        for (let j = 0; j < values.length; j++) {
            updateCandidate(affectedSpaces[i], values[j], "RED");
        }
    }
}

function displayHiddenSubset(step, updateSpace, updateCandidate) {
    let affectedSpaces = Array.from(step.affectedSpaces);

    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "GREEN");

        for (let j = 1; j <= 9; j++) {
            if (step.removalCandidates.has(j)) {
                updateCandidate(affectedSpaces[i], j, "RED");
            }
            else {
                updateCandidate(affectedSpaces[i], j, "BLUE");
            }
        }
    }

}

function displayXWing(step, updateSpace, updateCandidate) {
    let greenSpaces = Array.from(
        step.inRows ? 
        setUnion([getCol(step.col1), getCol(step.col2)]) :
        setUnion([getRow(step.row1), getRow(step.row2)])
    );
    for (let i = 0; i < greenSpaces.length; i++) {
        updateSpace(greenSpaces[i], "GREEN");
    }

    let patternSpaces = Array.from(step.intersectionSpaces);
    for (let i = 0; i < patternSpaces.length; i++) {
        updateCandidate(patternSpaces[i], step.val, "BLUE");
    }

    let affectedSpaces = Array.from(step.affectedSpaces);
    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "RED");
        updateCandidate(affectedSpaces[i], step.val, "RED");
    }
}

function displayYWing(step, updateSpace, updateCandidate) {
    for (let i = 0; i < 3; i++) {
        updateSpace([step.base, step.wing1, step.wing2][i], "GREEN");
        updateCandidate([step.base, step.wing1, step.wing2][i], step.val, "BLUE");
    }

    let affectedSpaces = Array.from(step.affectedSpaces);
    console.log(affectedSpaces);
    for (let i = 0; i < affectedSpaces.length; i++) {
        updateSpace(affectedSpaces[i], "RED");
        updateCandidate(affectedSpaces[i], step.val, "RED");
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