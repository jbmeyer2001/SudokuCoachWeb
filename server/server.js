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

//open port
let PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

//GET list of puzzle ID's
app.get("/puzzles", (req, res) => {
    res.json(Object.keys(puzzles));
})

//GET puzzle (based on ID)
app.get("/puzzles/:puzzleID", (req, res) => {
    //check if puzzle exists in puzzles directory
    let solution = puzzles[req.params.puzzleID];
    
    //if it doesn't exist send 404
    if (solution === undefined) {
        res.status(404).send("sorry, can't find puzzle!");
        return;
    }

    //if it does exist then return solution
    res.json(solution);
})

//POST puzzle (based on ID)
app.post("/puzzles", jsonParser, (req, res) => {
    //try to solve the puzzle
    let solver = new Solver();
    copyBoard(req.body, solver.board);
    let solution = solver.solve();

    //check if solveable
    if (typeof solution == 'string') {
        //solution may be 'INVALID', 'UNSOLVEABLE', 'MULTIPLESOLUTIONS', or 'CANTSOLVE'
        //in which case we should let the client know AND not add it to the puzzles
        res.status(422).json({badPuzzle: solution});
        return;
    }

    //if it is solveable then...
    //get a useable puzzle id
    let puzzleID = Object.keys(puzzles).length + 1; //TODO CHANGE THIS!

    //add puzzle array to puzzles[] with corrosponding puzzle id
    puzzles[puzzleID] = solution;
    console.log("puzzleID: " + puzzleID);

    //send response 
    //TODO maybe send the id as well
    res.status(201).send(solution);
})