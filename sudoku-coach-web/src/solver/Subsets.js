import {
    getRow,
    getCol,
    getBox,
    setIntersection,
    setDifference,
    getCandidates
} from './Utility.js'

function subsets(candidates, unfilled, removeCandidates) {
    let partition = new Set();
    let partitionCandidates = new Set();
    let other = new Set();
    let otherCandidates = new Set();
    let spaces = new Set();
    let spacesArr = [];
    let subsetName = "";

    let mask;

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
        }

        if (spaces.size < 4) {
            continue;
        }

        mask = 2;
        spacesArr = Array.from(spaces);
        partition = getNextPartition();
        
        console.log("here " + i);
        while (partition.size != 0) {
            console.log("partition " + Array.from(partition));
            other = setDifference(spaces, partition);
            partitionCandidates = getCandidates(candidates, partition);
            otherCandidates = getCandidates(candidates, other);

            /*
			* Naked Subset
			* if the number of candidates in a given paritition (of a row/column/box) is equal to the size of that subset, 
			* those candidates cannot exist in the candidates not within that partition.
			*/
            if(partitionCandidates.size == partition.size) {
                if(setIntersection(otherCandidates, partitionCandidates).size > 0) {
                    removeCandidates(other, partitionCandidates);
                    return {
                        step: "NAKEDSUBSET",
                        set: subsetName,
                        setNum: Math.trunc(i / 3),
                        patternSpaces: partition,
                        affectedSpaces: other,
                        removalCandidates: partitionCandidates,
                        candidates: candidates
                    };
                }
            }

            /*
			* Hidden Subset
			* If a number of candidates equal to the size of a partition ONLY exist within that partition, then 
			* those partition spaces cannot be any other candidate.
			*/
            let onlyPartitionCandidates = setDifference(partitionCandidates, otherCandidates);
            if(onlyPartitionCandidates.size == partition.size) {
                if(partitionCandidates.size > partition.size) {
                    removeCandidates(partition, setDifference(partitionCandidates, onlyPartitionCandidates));
                    return  {
                        step: "HIDDENSUBSET",
                        set: subsetName,
                        setNum: Math.trunc(i / 3),
                        affectedSpaces: partition,
                        patternCandidates: onlyPartitionCandidates,
                        removalCandidates: setDifference(partitionCandidates, onlyPartitionCandidates),
                        candidates: candidates
                    };
                }
            }

            partition = getNextPartition();
        }  
    }

    return {
        step: "NOSTEP"
    }

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

export default subsets;