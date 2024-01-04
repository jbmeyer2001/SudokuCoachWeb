import { 
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    setUnion, 
    setIntersection,
    setDifference,
    getCandidates
} from "./Utility";

function YWing(candidates, removeCandidates) {

    //y wings only occur with spaces containing ONLY two candidates
    let yWingSpaces = new Set();
    for (let i = 0; i < 81; i++) {
        if (candidates[i].size == 2) {
            yWingSpaces.add(i);
        }
    }

    //iterate through all possible y-wing spaces testing each as the 'base' candidate of a y-wing
    let spaces = yWingSpaces[Symbol.iterator]();
    for (const baseSpace of spaces) {
        let [row, col, box] = getRowColBoxNum(baseSpace, ["row", "col", "box"]);
        let curCandidates = candidates[baseSpace];

        //generate set of spaces that the current space affects (shares a row, col, box)
        //then, find the spaces within those possibly affected spaces that contain only 2 candidates
        let wingSpacesSet = setIntersection(
            yWingSpaces, 
            setUnion([getRow(row), getCol(col), getBox(box)])
        );
        wingSpacesSet.delete(baseSpace);

        //remove the spaces from the possible y-wing spaces that don't share a candidate with the current space
        let wingSpacesArr = Array.from(wingSpacesSet);
        for (let i = 0; i < wingSpacesArr.length; i++) {
            if (setIntersection(curCandidates, candidates[wingSpacesArr[i]]).size != 1){
                wingSpacesSet.delete(wingSpacesArr[i]);
            }
        }

        wingSpacesArr = Array.from(wingSpacesSet);
        for (let wing1Index = 0; wing1Index < wingSpacesArr.length - 1; wing1Index++) {
            for (let wing2Index = wing1Index + 1; wing2Index < wingSpacesArr.length; wing2Index++) {
                let wing1 = wingSpacesArr[wing1Index];
                let wing2 = wingSpacesArr[wing2Index];
                let [wing1Row, wing1Col, wing1Box] = getRowColBoxNum(wing1, ["row", "col", "box"]);
                let [wing2Row, wing2Col, wing2Box] = getRowColBoxNum(wing2, ["row", "col", "box"]);

                //get all the spaces that would be affected by BOTH wing1 and wing2
                let affectedSpaces = setIntersection(
                    setUnion([getRow(wing1Row), getCol(wing1Col), getBox(wing1Box)]),
                    setUnion([getRow(wing2Row), getCol(wing2Col), getBox(wing2Box)])
                );
                
                
                //we don't want spaces that share a row and or a column and or a box with eachother
                if (affectedSpaces.size >= 9) {
                    continue;
                }

                //in order for the interaction to work, the 'wing' spaces must share a candidate that the
                //base does not have
                let wing1Candidates = candidates[wing1];
                let wing2Candidates = candidates[wing2];
                if (setIntersection(wing1Candidates, wing2Candidates).size != 1) {
                    continue;
                }
                if (setUnion([wing1Candidates, wing2Candidates, curCandidates]).size != 3) {
                    continue;
                }

                affectedSpaces = setDifference(affectedSpaces, wingSpacesSet);
                let affectedCandidates = getCandidates(candidates, affectedSpaces);
                let candidate = Array.from(setIntersection(wing1Candidates, wing2Candidates))[0];
                if (affectedCandidates.has(candidate)) {
                    removeCandidates(affectedSpaces, candidate);
                    return {
                        step: "YWING",
                        base: baseSpace,
                        wing1: wing1,
                        wing2: wing2,
                        affectedSpaces: affectedSpaces,
                        candidates: candidates
                    }
                }
            }
        }
    }

    return {
        step: "NOSTEP"
    }
}

export default YWing;