import { getRowColBoxNum, copyCandidates } from "./Utility";

function soleCandidate(candidates, unfilled, insertVal) {

    //iterate through all unfilled spaces
    let it = unfilled[Symbol.iterator]();
    for (const index of it) {
        let spaceCandidates = candidates[index];

        //if any given space has a single candidate, we know that space must be that candidate
        if (spaceCandidates.size == 1) {
            let [row, col] = getRowColBoxNum(index, ["row", "col"]);
            let val = spaceCandidates[Symbol.iterator]().next().value;

            insertVal(row, col, val);
            return {
                step: "SOLECANDIDATE",
                row: row,
                col: col,
                val: val,
            }
        }
    }
    
    return {
        step: "NOSTEP"
    };
}

export default soleCandidate;