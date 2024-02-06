import { getRowColBoxNum } from "../solver/Utility";

function textDisplaySoleCandidate(step, setText) {
    setText(`
    Sole Candidate:
    The value ${step.val} can be placed in the space at row ${step.row + 1}
    column ${step.col + 1} since it is the only candidate in that space.
    `);
}

function textDisplayUniqueCandidate(step, setText) {
    let [set, setNum] = getStepSet(step);

    setText(`
    Unique Candidate:
    The value ${step.val} can be placed in the space at row ${step.row + 1}
    column ${step.col + 1} since it is the only space within ${set} ${setNum + 1}
    that contains ${step.val} as a candidate.
    `);
}

function textDisplayBlockRowCol(step, setText) {
    let [set, setNum] = getStepSet(step);

    setText(`
    Block to Row or Column Interaction:
    The value ${step.val} was able to be removed as a candidate from all the spaces
    in ${set} ${setNum + 1} not in box ${step.box + 1}. The only places a ${step.val}
    could go within box ${step.box + 1} were also in ${set} ${setNum + 1}, so we can remove
    ${step.val} as a candidate from the rest of ${set} ${setNum + 1}.
    `);
}

function textDisplayBlockBlock(step, setText) {
    let set;
    let setNum1;
    let setNum2;

    switch (step.set) {
        case "ROW":
            set = "row";
            setNum1 = step.row1;
            setNum2 = step.row2;
            break;
        case "COL":
            set = "column";
            setNum1 = step.col1;
            setNum2 = step.col2;
            break;
    }

    setText(`
    Block to Block Interaction:
    the value ${step.val} was able to be removed from ${set}s ${setNum1 + 1} and ${setNum2 + 1}
    not in boxes ${step.box1 + 1} and ${step.box2 + 1}. The only places a ${step.val} could
    go within boxes ${step.box1 + 1} and ${step.box2 + 1} were also in ${set}s ${setNum1 + 1} and ${setNum2 + 1},
    so we can remove the ${step.val} as a candidate from the rest of ${set}s ${setNum1 + 1} and ${setNum2 + 1}.
    `);
}

function textDisplayNakedSubset(step, setText) {
    let [set, setNum] = getStepSet(step);

    setText(`
    Naked Subset:
    The candidates ${Array.from(step.removalCandidates)} were able to be removed from 
    the spaces ${getIndicesText(step.affectedSpaces)} because within ${set} ${setNum + 1},
    the following ${step.patternSpaces.size} spaces ${getIndicesText(step.patternSpaces)} 
    contain only the following ${step.removalCandidates.size} candidates  
    ${Array.from(step.removalCandidates)} meaning those candidates can't go anywhere else
    within ${set} ${setNum + 1}.
    `);
}

function textDisplayHiddenSubset(step, setText) {
    let [set, setNum] = getStepSet(step);

    setText(`
    Hidden Subset:
    The candidates ${Array.from(step.removalCandidates)} were able to be removed from 
    the spaces ${getIndicesText(step.affectedSpaces)} because within ${set} ${setNum + 1},
    those ${step.affectedSpaces.size} spaces are the only spaces which contain the following
    ${step.affectedSpaces.size} candidates: ${Array.from(step.patternCandidates)} so those spaces
    cannot be any other value.
    `);
}

function textDisplayXWing(step, setText) {
    let noVal = step.inRows ? "columns" : "rows";
    let hasVal = step.inRows ? "rows" : "columns";

    setText(`
    X-Wing:
    The intersection spaces of row ${step.row1 + 1}, row ${step.row2 + 1}, column ${step.col1 + 1}, and column ${step.col2 + 1}
    all contain the candidate ${step.val}. Further, the ${noVal} do not contain ${step.val} anywhere except
    at the intersection spaces mentioned, meaning the ${step.val}s in the ${hasVal} must occur at the intersection points, so
    ${step.val} may be removed as a candidate from everywhere else in the ${hasVal}.
    `);
}

function textDisplayYWing(step, setText) {
    setText(`
    Y-Wing:
    No matter what space ${getIndicesText(new Set([step.base]))} ends up being in the final puzzle,
    one of spaces ${getIndicesText(new Set([step.wing1]))} or ${getIndicesText(new Set([step.wing2]))}
    must be a ${step.val}. Therefore, we may remove ${step.val} as a candidate from the spaces affected
    by both ${getIndicesText(new Set([step.wing1]))} and ${getIndicesText(new Set([step.wing2]))}.
    `);
}

function getStepSet(step) {
    let set;
    let setNum;
    switch (step.set) {
        case "ROW":
            set = "row"
            setNum = step.row;
            break;
        case "COL":
            set = "column"
            setNum = step.col;
            break;
        case "BOX":
            set = "box";
            [setNum] = getRowColBoxNum(step.row * 9 + step.col, ["box"]);
            break;
    }

    if (Number.isNaN(setNum) || setNum === undefined) {
        setNum = step.setNum;
    }

    return [set, setNum];
}

function getIndicesText(spaces) {
    let spacesText = "";

    let [row, col] = getRowColBoxNum(Array.from(spaces)[0], ["row", "col"]);
        spacesText += `[${row + 1}, ${col + 1}]`

    for (let i = 1; i < spaces.size; i++) {
        let [row, col] = getRowColBoxNum(Array.from(spaces)[i], ["row", "col"]);
        spacesText += `, [${row + 1}, ${col + 1}]`
    }

    return spacesText;
}

export {
    textDisplaySoleCandidate,
    textDisplayUniqueCandidate,
    textDisplayBlockRowCol,
    textDisplayBlockBlock,
    textDisplayNakedSubset,
    textDisplayHiddenSubset,
    textDisplayXWing,
    textDisplayYWing
}