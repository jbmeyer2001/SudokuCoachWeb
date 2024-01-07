import { getRow, getCol, getBox, getRowColBoxNum, getCandidates } from "./Utility";

function uniqueCandidate(candidates, unfilled, insertVal) {

    //itrate through every unfilled space
    let it = unfilled[Symbol.iterator]();
    for (const index of it) {
        let [row, col, box] = getRowColBoxNum(index, ["row", "col", "box"]);
        
        let rowSet = getRow(row);
        let colSet = getCol(col);
        let boxSet = getBox(box);

        [rowSet, colSet, boxSet].forEach((set) => {set.delete(index)});

        let rowCandidates = getCandidates(candidates, rowSet);
        let colCandidates = getCandidates(candidates, colSet);
        let boxCandidates = getCandidates(candidates, boxSet);
        let spaceCandidates = candidates[index];

        //iterate through every candidate in our current space
        let it = spaceCandidates[Symbol.iterator]();
        for (const candidate of it) {

            //if the current candidate is the only one within either the
            //share row, column, or box, then the current space must be
            //the current candidate
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