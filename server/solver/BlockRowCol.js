const { 
    getRow,
    getCol,
    getBox,
    getRowColBoxNum,
    getCandidates,
    setUnion, 
    setIntersection, 
    setDifference
} = require('./Utility.js');

function blockRowCol(candidates, removeCandidates) {
    //iterate through every box
    for (let box = 0; box < 9; box++) {
        let startIndex = Math.trunc(box / 3) * 27 + (box % 3) * 3;
        let [row, col] = getRowColBoxNum(startIndex, ["row", "col"]);

        /*
		get commonalities of each row/column within the box.

		a commonality is defined as a number that appears at least
		twice in any given row or column within the box.

		'commonality' is not a widespread term, but rather one
		I have come up with to give a useful concept a name.
		*/
        
        //get row commonalities
        let row1Common = setCommonalities(candidates, startIndex, startIndex + 1, startIndex + 2);
        let row2Common  = setCommonalities(candidates, startIndex + 9, startIndex + 10, startIndex + 11);
        let row3Common = setCommonalities(candidates, startIndex + 18, startIndex + 19, startIndex + 20);

        //get column commonalities
        let col1Common = setCommonalities(candidates, startIndex, startIndex + 9, startIndex + 18);
        let col2Common = setCommonalities(candidates, startIndex + 1, startIndex + 10, startIndex + 19);
        let col3Common = setCommonalities(candidates, startIndex + 2, startIndex + 11, startIndex + 20);
    
        /*
        find the commonalities that exist ONLY in that row/col (and not in the other rows or columns
        of the current box.)

        this is because in order for them to be userful (able to remove candidates from other spaces)
        they must be nowhere else in the box.

        See https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php for why
        */
        let onlyRow1Common = setDifference(
            row1Common, 
            getCandidates(candidates, setDifference(getBox(box), getRow(row)))
        );
        let onlyRow2Common = setDifference(
            row2Common, 
            getCandidates(candidates, setDifference(getBox(box), getRow(row + 1)))
        );
        let onlyRow3Common = setDifference(
            row3Common, 
            getCandidates(candidates, setDifference(getBox(box), getRow(row + 2)))
        );

        let onlyCol1Common = setDifference(
            col1Common, 
            getCandidates(candidates, setDifference(getBox(box), getCol(col)))
        );
        let onlyCol2Common = setDifference(
            col2Common, 
            getCandidates(candidates, setDifference(getBox(box), getCol(col + 1)))
        );
        let onlyCol3Common = setDifference(
            col3Common, 
            getCandidates(candidates, setDifference(getBox(box), getCol(col + 2)))
        );
        
        //if any of the commonalities we found allow us to remove candidates, remove them and update the candidates
        let affectedSpaces = setDifference(getRow(row), getBox(box));
        let affectedCandidates = getCandidates(candidates, affectedSpaces);
        let it = onlyRow1Common[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "ROW",
                    row: row,
                    affectedSpaces: affectedSpaces
                };
            }
        };

        affectedSpaces = setDifference(getRow(row + 1), getBox(box));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = onlyRow2Common[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "ROW",
                    row: row + 1,
                    affectedSpaces: affectedSpaces
                };
            }
        };

        affectedSpaces = setDifference(getRow(row + 2), getBox(box));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = onlyRow3Common[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "ROW",
                    row: row + 2,
                    affectedSpaces: affectedSpaces
                };
            }
        };

        affectedSpaces = setDifference(getCol(col), getBox(box));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = onlyCol1Common[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "COL",
                    col: col,
                    affectedSpaces: affectedSpaces
                };
            }
        };
        
        affectedSpaces = setDifference(getCol(col + 1), getBox(box));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = onlyCol2Common[Symbol.iterator]();
        for(const candidate of it){
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "COL",
                    col: col + 1,
                    affectedSpaces: affectedSpaces
                };
            }
        };

        affectedSpaces = setDifference(getCol(col + 2), getBox(box));
        affectedCandidates = getCandidates(candidates, affectedSpaces);
        it = onlyCol3Common[Symbol.iterator]();
        for (const candidate of it) {
            if (affectedCandidates.has(candidate)) {
                removeCandidates(affectedSpaces, candidate);
                return {
                    step: "BLOCKROWCOL",
                    box: box,
                    val: candidate,
                    set: "COL",
                    col: col + 2,
                    affectedSpaces: affectedSpaces
                };
            }
        };
    }

    return {
        step: "NOSTEP"
    };
}

function setCommonalities (candidates, i1, i2, i3) {
    let index1Set = candidates[i1];
    let index2Set = candidates[i2];
    let index3Set = candidates[i3];

    //find all the candidates that exist in at least two of the three spaces given.
    let common1 = setIntersection(index1Set, index2Set);
    let common2 = setIntersection(index1Set, index3Set);
    let common3 = setIntersection(index2Set, index3Set);

    return setUnion(common1, common2, common3);
}

module.exports = {
    blockRowCol: blockRowCol
}