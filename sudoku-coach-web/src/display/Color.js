import {
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    setUnion
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

}

function displayBlockBlock(step, updateSpace, updateCandidate) {

}

function displayNakedSubset(step, updateSpace, updateCandidate) {

}

function displayHiddenSubset(step, updateSpace, updateCandidate) {

}

function displayXWing(step, updateSpace, updateCandidate) {

}

function displayYWing(step, updateSpace, updateCandidate) {

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