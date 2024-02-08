const {
    getRow,
    getCol,
    getBox,
    setIntersection,
    setDifference,
    getCandidates
} = require('./Utility.js');

function subsets(candidates, unfilled, removeCandidates) {
    let partition = new Set();
    let spaces = new Set();
    let spacesArr = [];
    let subsetName = "";
    let mask;

    //iterate through all possible subsets (every row, column, and box)
    for (let i = 0; i < 27; i++) {
        switch (i % 3) {
            case 0:
                subsetName = "ROW";
                spaces = setIntersection(unfilled, getRow(Math.trunc(i / 3)));
                break;
            case 1:
                subsetName = "COL";
                spaces = setIntersection(unfilled, getCol(Math.trunc(i / 3)));
                break;
            case 2:
                subsetName = "BOX";
                spaces = setIntersection(unfilled, getBox(Math.trunc(i / 3)));
                break;
            default:
                return {
                    step: "NOSTEP"
                };
        }

        //if the size is less than four, a meaningful naked/hidden subset cannot occur that
        //wouldn't have already been found by unique candidate.
        if (spaces.size < 4) {
            continue;
        }

        //convert to array so we can index it
        spacesArr = Array.from(spaces); 
        
        //use bit mask to get possible partitions of subset
        mask = 2;
        partition = getNextPartition(); 
        
        //iterate through possible partitions
        while (partition.size != 0) {
            let other = setDifference(spaces, partition);
            let partitionCandidates = getCandidates(candidates, partition);
            let otherCandidates = getCandidates(candidates, other);

            /*
			* Naked Subset
			* if the number of candidates in a given paritition (of a row/column/box) is equal to the size of that subset, 
			* those candidates cannot exist in the candidates not within that partition.
			*/

            /*
			* Hidden Subset
			* If a number of candidates equal to the size of a partition ONLY exist within that partition, then 
			* those partition spaces cannot be any other candidate.
			*/

            /*
            * Interestingly, every hidden subset is also a naked subset and vice versa, it just depends on which spaces
            * are considered to be the 'partition' and which to be the 'other'. I am assuming that it makes the most
            * semantic sense to use the pattern who has the minimum number of spaces that 'caused' the pattern.
            * ie. a naked subset of 4 spaces which affects 2 spaces, those two spaces must contain 2 candidates
            * which are not present in the 4 spaces and therefore can be considered a hidden subset. 
            */
            if(partitionCandidates.size == partition.size) {
                if(setIntersection(otherCandidates, partitionCandidates).size > 0) {
                    removeCandidates(other, partitionCandidates);
                    if (partition.size < other.size) {
                        return {
                            step: "NAKEDSUBSET",
                            set: subsetName,
                            setNum: Math.trunc(i / 3),
                            affectedSpaces: [...other.values()],
                            patternSpaces: [...partition.values()],
                            removalCandidates: [...partitionCandidates.values()]
                        };
                    }
                    else {
                        return {
                            step: "HIDDENSUBSET",
                            set: subsetName,
                            setNum: Math.trunc(i / 3),
                            affectedSpaces: [...other.values()],
                            patternCandidates: [...setDifference(otherCandidates, partitionCandidates).values()],
                            removalCandidates: [...partitionCandidates.values()]
                        };
                    }
                }
            }
            
            partition = getNextPartition();
        }  
    }

    return {
        step: "NOSTEP"
    };

    function getNextPartition() {
        let retval = new Set();
        let cur;
        let flag = true;
    
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

module.exports = {
    subsets: subsets
}