const { puzzles } = require('./puzzles');
const { Solver } = require('./solver/Solver');
const { copyBoard } = require('./solver/Utility');

const express = require('express');
const app = express();

let PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

app.get("/test", (req, res) => {
    res.json({"test": ["one", "two", "three"]})
})

//GET list of puzzle ID's
app.get("/puzzles", (req, res) => {
    res.json({implemented: "not yet"});
})

//GET puzzle (based on ID)
app.get("/puzzles/:puzzleID", (req, res) => {
    //check if puzzle exists in puzzles directory
    let puzzle = puzzles[req.params.puzzleID];

    //if it doesn't exist send 404
    if (puzzle === undefined) {
        res.status(404).send("sorry, can't find puzzle!");
        return;
    }

    //if it does exist then solve the puzzle and send the solution back
    let solver = new Solver();
    copyBoard(puzzle, solver.board); //maybe put this in Solver constructor

    solution = solver.solve();
    res.json(solution);
})

//POST puzzle (based on ID)
app.post("/puzzles/:puzzleID", (req, res) => {
    //check if puzzle exists in puzzles directory
    let puzzleID = req.params.puzzleID;

    //if it already exists then 
    res.json({implemented: "not yet"});
})