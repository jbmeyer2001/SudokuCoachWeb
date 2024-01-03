import { getRow, getCol, getBox, getRowColBoxNum, getCandidatesFromIndices } from "./Utility";

function uniqueCandidate(candidates, unfilled, insertVal) {

    for (const space of unfilled.entries()) {
        let index = space[0];
        let [row, col, box] = getRowColBoxNum(index, ["row", "col", "box"]);
        
        let rowSet = getRow(row);
        let colSet = getCol(col);
        let boxSet = getBox(box);

        rowSet.delete(index);
        colSet.delete(index);
        boxSet.delete(index);

        let rowCandidates = getCandidatesFromIndices(candidates, rowSet);
        let colCandidates = getCandidatesFromIndices(candidates, colSet);
        let boxCandidates = getCandidatesFromIndices(candidates, boxSet);
        let spaceCandidates = candidates[index];

        for (const candidatePair of spaceCandidates.entries()) {
            let candidate = candidatePair[0];
            if (!rowCandidates.has(candidate)) {
                insertVal(row, col, candidate);
                return {
                    step: "UNIQUECANDIDATE",
                    set: "ROW",
                    row: row,
                    col: col,
                    val: candidate,
                    candidates: candidates
                };
            }

            if (!colCandidates.has(candidate)) {
                insertVal(row, col, candidate);
                return {
                    step: "UNIQUECANDIDATE",
                    set: "COL",
                    row: row,
                    col: col,
                    val: candidate,
                    candidates: candidates
                };
            }

            if (!boxCandidates.has(candidate)) {
                insertVal(row, col, candidate);
                return {
                    step: "UNIQUECANDIDATE",
                    set: "BOX",
                    row: row,
                    col: col,
                    val: candidate,
                    candidates: candidates
                };
            }
        }
    }

    return {
        step: "NOSTEP"
    };
}

export { uniqueCandidate }