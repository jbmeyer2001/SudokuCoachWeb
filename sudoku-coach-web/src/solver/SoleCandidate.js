import { getRowColBoxNum } from "./Utility";

function soleCandidate(candidates, unfilled, insertVal) {

    let retval = {
        step: "NOSTEP"
    }

    let it = unfilled.entries();

    for (const space of it) {
        let index = space[0];
        let spaceCandidates = candidates[index];

        if (spaceCandidates.size == 1) {
            let [row, col] = getRowColBoxNum(index, ["row", "col"]);
            let val = spaceCandidates[Symbol.iterator]().next().value;

            insertVal(row, col, val);
            retval = {
                step: "SOLECANDIDATE",
                row: row,
                col: col,
                val: val,
                candidates: candidates
            }
            break;
        }
    }
    
    return retval;
}

export default soleCandidate;