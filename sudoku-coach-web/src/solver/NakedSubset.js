import {getRow, getCol, getBox, setIntersection, setDifference, getCandidates, setEquivalent} from './Utility.js'

function nakedSubset(candidates, unfilled, removeCandidates) {
    let affectedSpaces = new Set();
    let curCandidates = new Set();
    
    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getRow(i));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "ROW",
                row: i,
                affectedSpaces: affectedSpaces,
                removalCandidates: curCandidates,
                candidates: candidates
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getCol(i));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "COL",
                col: i,
                affectedSpaces: affectedSpaces,
                removalCandidates: curCandidates,
                candidates: candidates
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getBox(i));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "BOX",
                box: i,
                affectedSpaces: affectedSpaces,
                removalCandidates: curCandidates,
                candidates: candidates
            }
        }
    }

    return {
        step: "NOSTEP"
    }

    function CheckForSubset(spaces) {
        let spacesArr = Array.from(spaces);
        console.log("\n");
        console.log(spacesArr);

        for (let i = 0; i < spacesArr.length - 1; i++) {
            let candidatesi = candidates[spacesArr[i]];
            let equivalentSpaces = new Set();
            equivalentSpaces.add(spacesArr[i]);

            for (let j = i + 1; j < spacesArr.length; j++) {
                let candidatesj = candidates[spacesArr[j]];
                if (setEquivalent(candidatesi, candidatesj)) {
                    equivalentSpaces.add(spacesArr[j]);
                }
            }
            console.log([i, Array.from(candidatesi), Array.from(equivalentSpaces)]);
            curCandidates = candidatesi;
            if (curCandidates.size == equivalentSpaces.size) {
                affectedSpaces = setDifference(spaces, equivalentSpaces);
                let affectedCandidates = getCandidates(candidates, affectedSpaces);

                for (let j = 0; j < curCandidates.size; j++) {
                    if(affectedCandidates.has(Array.from(curCandidates)[j])) {
                        removeCandidates(affectedSpaces, curCandidates);
                        return true;
                    }
                }
            }
        }

        return false;
    }
}



export default nakedSubset;