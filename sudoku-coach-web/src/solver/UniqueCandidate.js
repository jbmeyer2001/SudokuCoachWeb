import { getRow, getCol, getBox, getRowColBoxNum, getCandidates } from "./Utility";

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

        let rowCandidates = getCandidates(candidates, rowSet);
        let colCandidates = getCandidates(candidates, colSet);
        let boxCandidates = getCandidates(candidates, boxSet);
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

export default uniqueCandidate;