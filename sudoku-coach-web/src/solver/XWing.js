import {
    getRow, 
    getCol, 
    setUnion, 
    setIntersection,
    setDifference,
    getCandidates
} from './Utility.js';

function XWing(candidates, removeCandidates) {
    for (let row1 = 0; row1 <= 5; row1++) {

        let row2Start = (Math.trunc(row1 / 3) * 3) + 3;
        for (let row2 = row2Start; row2 <= 8; row2++) {

            for (let col1 = 0; col1 <= 5; col1++) {

                let col2Start = (Math.trunc(col1 / 3) * 3) + 3;
                for (let col2 = col2Start; col2 <=8; col2++) {
                    /*
					There are now three sets that may be defined:
						- the set of the intersections of rows and columns (4 spaces)
						- the set of all spaces in both columns but NOT in the rows
						- the set of all spaces in both rows but NOT in the columns

					if there is a candidate that exists in ALL of the intersection spaces,
					but doesn't exist as a candidate in any of the spaces in one of the row or column
					sets, then that candidate may be removed from all spaces in the other row/column set.
					*/
                    
                    let rowSpaces = setUnion([getRow(row1), getRow(row2)]);
                    let colSpaces = setUnion([getCol(col1), getCol(col2)]);
                    let intSpaces = setIntersection(rowSpaces, colSpaces);
                    rowSpaces = setDifference(rowSpaces, intSpaces);
                    colSpaces = setDifference(colSpaces, intSpaces);
                    let rowCandidates = getCandidates(candidates, rowSpaces);
                    let colCandidates = getCandidates(candidates, colSpaces);

                    //get the candidates that are in ALL of the intersection spaces
                    let intSpacesArray = Array.from(intSpaces);
                    let intCandidates = setIntersection(
                        setIntersection(candidates[intSpacesArray[0]], candidates[intSpacesArray[1]]),
                        setIntersection(candidates[intSpacesArray[2]], candidates[intSpacesArray[3]])
                    );

                    let it = intCandidates[Symbol.iterator]();
                    for (const candidate of it) {
                        let inRows = new Boolean(rowCandidates.has(candidate));
                        let inCols = new Boolean(colCandidates.has(candidate));

                        if (inRows ^ inCols) {
                            let affectedSpaces = inRows ? rowSpaces : colSpaces;
                            removeCandidates(affectedSpaces, candidate);
                            return {
                                step: "XWING",
                                val: candidate,
                                row1: row1,
                                row2: row2,
                                col1: col1,
                                col2: col2,
                                inRows: inRows,
                                candidates: candidates
                            };
                        }
                    }
                }
            }
        }
    }

    return {
        step: "NOSTEP"
    };
}

export default XWing;