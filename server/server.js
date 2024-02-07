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
    //turn request body json into puzzle array
    let puzzleBoard = [[], [], [], [], [], [], [], [], []];
    copyBoard(req.body, puzzleBoard);

    //get a useable puzzle id
    //TODO CHANGE THIS!
    let puzzleID = Object.keys(puzzles).length + 1;
    console.log("puzzleID: " + puzzleID);

    //add puzzle array to puzzles[] with corrosponding puzzle id
    puzzles[puzzleID] = puzzleBoard;

    //send response and redirect
    res.status(201).send("added");
})