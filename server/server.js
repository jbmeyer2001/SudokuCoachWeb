//my includes
const { puzzles } = require('./puzzles');
const { Solver } = require('./solver/Solver');
const { copyBoard } = require('./solver/Utility');

//include express
const express = require('express');
const app = express();

//include json body parser
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

app.get("/test", (req, res) => {
    res.json({"test": ["one", "two", "three"]})
})

//GET list of puzzle ID's
app.get("/puzzles", (req, res) => {
    res.json(Object.keys(puzzles));
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
app.post("/puzzles", jsonParser, (req, res) => {
    //turn request body json into puzzle array
    let puzzleBoard = [[], [], [], [], [], [], [], [], []];
    copyBoard(req.body, puzzleBoard);

    //get a useable puzzle id
    //TODO CHANGE THIS!
    let puzzleID = Object.keys(puzzles).length + 1;

    //add puzzle array to puzzles[] with corrosponding puzzle id
    puzzles[puzzleID] = puzzleBoard;

    //send response and redirect
    res.status(201).send("added");
})