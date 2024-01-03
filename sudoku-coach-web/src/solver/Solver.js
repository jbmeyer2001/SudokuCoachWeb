const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

const candidates = [];

const unfilled = new Set();

function generateCandidates() {
    unfilled.clear();
    for (let i = 0; i < 81; i++) {
        candidates[i] = new Set();
    }

    let rows = [];
    let cols = [];
    let boxes = [];

    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }

    //generate a set for every row, column, and box that contains all the numbers within that row,
    //column, or box. If no number exists in a given space, add it to the unfilled set.
    for (let i = 0; i < 81; i++) {
        let row = Math.trunc(i / 9);
        let col = i % 9;
        let box = Math.trunc(i / 27) * 3 + Math.trunc((i % 9) / 3);
        let val = board[row][col];
        
        if (val != 0) {
            rows[row].add(val);
            cols[col].add(val);
            boxes[box].add(val);
        }
        else  {
            unfilled.add(i);
        }
    }

    function addCandidates(space, set) {
        let row = Math.trunc(space / 9);
        let col = space % 9;
        let box = Math.trunc(space / 27) * 3 + Math.trunc((space % 9) / 3);

        let all = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        function removeRequiredCandidates(candidate, set) {
            all.delete(candidate);
        }
        rows[row].forEach(removeRequiredCandidates);
        cols[col].forEach(removeRequiredCandidates);
        boxes[box].forEach(removeRequiredCandidates);

        candidates[space] = all;
    }
    unfilled.forEach(addCandidates);

    return candidates;
}

export { board, generateCandidates};