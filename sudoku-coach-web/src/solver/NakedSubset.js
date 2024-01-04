import { getCandidates } from "./Utility";
import {getRow, getCol, getBox, setIntersection, setDifference} from './Utility.js'

function nakedSubset(candidates, unfilled, removeCandidates) {
    let affectedSpaces = new Set();
    let curCandidates = new Set();

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getRow(Math.trunc(i / 3)));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "ROW",
                row: Math.trunc(i / 3),
                affectedSpaces: affectedSpaces,
                removalCandidates: curCandidates,
                candidates: candidates
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getCol(Math.trunc(i / 3)));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "COL",
                col: Math.trunc(i / 3),
                affectedSpaces: affectedSpaces,
                removalCandidates: curCandidates,
                candidates: candidates
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getBox(Math.trunc(i / 3)));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "NAKEDSUBSET",
                set: "BOX",
                box: Math.trunc(i / 3),
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

        for (let i = 0; i < spacesArr.length - 1; i++) {
            let candidatesi = candidates[spacesArr[i]];
            let equivalentSpaces = new Set();
            equivalentSpaces.add(spacesArr[i]);

            for (let j = i + 1; j < spacesArr.length; j++) {
                let candidatesj = candidates[spacesArr[j]];

                if (candidatesi == candidatesj) {
                    equivalentSpaces.add(spacesArr[j]);
                }
            }

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