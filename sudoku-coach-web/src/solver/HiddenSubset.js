import {getRow, getCol, getBox, setIntersection, setDifference, getCandidates} from './Utility.js'

function hiddenSubset(candidates, unfilled, removeCandidates) {
    let affectedSpaces = new Set();
    let curCandidates = new Set();

    for (let i = 0; i < 9; i++) {
        let spaces = setIntersection(unfilled, getRow(i));
        
        if (spaces.size >=4 && CheckForSubset(spaces)) {
            return {
                step: "HIDDENSUBSET",
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
                step: "HIDDENSUBSET",
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
                step: "HIDDENSUBSET",
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
        let mask = 2;
        let spacesArr = Array.from(spaces);

        let partition = getNextPartition();
        while (partition.size != 0) {
            let nonPartition = setDifference(spaces, partition);

            let partitionCandidates = getCandidates(candidates, partition);
            let nonPartitionCandidates = getCandidates(candidates, nonPartition);
            let onlyPartitionCandidates = setDifference(partitionCandidates, nonPartitionCandidates);

            affectedSpaces = partition;
            curCandidates = setDifference(partitionCandidates, onlyPartitionCandidates);
            if (onlyPartitionCandidates.size == partition.size && curCandidates.size > 0) {
                removeCandidates(affectedSpaces, curCandidates);
                return true;
            }

            partition = getNextPartition();
        } 

        return false;

        function getNextPartition() {
            let retval = new Set();
            let cur;
            let flag = new Boolean();
        
            do {
                flag = false;
                cur = mask + 1;
                
                //we've gotten larger than the size of spaces, return an empty set indicating we're done.
                if(cur >= Math.pow(2, spacesArr.length) - 1) {
                    return retval;
                }
                
                //bit mask for generating partition
                for(let i = 0; i < spacesArr.length; i++) {
                    let check = Math.pow(2, i);

                    if ((mask & check) == check) {
                        retval.add(spacesArr[i]);
                    }
                }

                //if the size of this partition (or spaces.size = partition.size) would be equal to 1,
                //it is not possible for there to be a hidden candidate
                if (retval.size < 2 || retval.size > (spaces.size - 2)) {
                    retval.clear();
                    mask = cur;
                    flag = true;
                }
            } while (flag == true)
            
            mask = cur;
            return retval;
        }
    }
}

export default hiddenSubset;