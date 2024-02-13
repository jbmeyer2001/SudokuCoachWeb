//my includes
const { Solver } = require('./solver/Solver');
const { copyBoard } = require('./solver/Utility');

//use dotenv package to manage environment variables
require('dotenv').config()

//include express
const express = require('express');
const app = express();

//include json body parser
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//include mongoose database package
const mongoose = require('mongoose');

//database schemas
const Sudoku = require('./models/Sudoku');

//start listening if we are able to open the database connection
mongoose.connect(process.env.DB_URL)
    .then(() => {
        //serve react front end production build
        app.use(express.static(path.join(__dirname,"../client/build")));
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
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
app.post("/puzzles", jsonParser, async (req, res) => {
    //try to solve the puzzle
    let solver = new Solver();
    copyBoard(req.body.puzzle, solver.board);
    
    let solution = solver.solve();

    //check if solveable
    if (typeof solution == 'string') {
        //solution may be 'INVALID', 'UNSOLVEABLE', 'MULTIPLESOLUTIONS', or 'CANTSOLVE'
        //in which case we should let the client know AND not add it to the puzzles
        res.status(422).json({badPuzzle: solution});
        return;
    }

    //add puzzle to database
    //addSudokuToDB(solution);

    //save the puzzle if the client indicated to do so
    if (req.body.savePuzzle) {
        let result = await addSudokuToDB(solution);
        console.log(result);
    }

    //send response 
    //TODO maybe send the id as well
    res.status(201).send(solution);
})


app.get("/puzzlequery", async (req, res) =>  {
    //query the db for the exact input params
    let query = await Sudoku.find(req.query, '_id').exec();
    
    //if the database doesn't have a puzzle with the query specifications then:
    //remove the 'false' parameters so we are searching only for a puzzle that
    //includes the 'true' patterns but doesn't REQUIRE that the other patterns
    //don't exist.
    if (query.length == 0) {
        let newQueryParams = {}

        for(param in req.query) {
            if (req.query[param]) {
                newQueryParams[param] = true;
            }
        }

        //query the db with the new params
        query = await Sudoku.find(newQueryParams, '_id').exec();

        //if the database still doesn't have a puzzle with the input params, then just query
        //all of the puzzles.
        if (query.length == 0) {
            query = await Sudoku.find({}, '_id').exec();
        }
    }

    //at this point, 'query' must be filled with possible puzzle ID's to return
    //select a random response id
    let id = query[Math.floor(Math.random() * query.length)];

    //get the puzzle from that id
    let sudoku = await Sudoku.find({_id: id}, 'puzzle');

    //return that puzzle
    res.status(201).send(sudoku[0].puzzle);
})

async function addSudokuToDB(solution) {
    if(!solution) {return;}

    let blockRowCol=false,
        blockBlock=false,
        nakedSubset=false,
        hiddenSubset=false,
        XWing=false,
        YWing=false;

    let blockRowColNum=0,
        blockBlockNum=0,
        nakedSubsetNum=0,
        hiddenSubsetNum=0,
        XWingNum=0,
        YWingNum=0;

    //set database parameters
    for(entry in solution) {
        switch(solution[entry].step) {
            case 'BLOCKROWCOL':
                blockRowCol = true;
                blockRowColNum++;
                break;
            case 'BLOCKBLOCK':
                blockBlock = true;
                blockBlockNum++;
                break;
            case 'NAKEDSUBSET':
                nakedSubset = true;
                nakedSubsetNum++;
                break;
            case 'HIDDENSUBSET':
                hiddenSubset = true;
                hiddenSubsetNum++;
                break;
            case 'XWING':
                XWing = true;
                XWingNum++;
                break;
            case 'YWING':
                YWing = true;
                YWingNum++;
                break;
            default:
                //do nothing (either a step we don't care about or the start board)
                break;
        }
    }

    //create new model
    const sudoku = new Sudoku({
        puzzle: JSON.stringify(solution),
        blockrowcol: blockRowCol,
        blockrowcolnum: blockRowColNum,
        blockblock: blockBlock,
        blockblocknum: blockBlockNum,
        nakedsubset: nakedSubset,
        nakedsubsetnum: nakedSubsetNum,
        hiddensubset: hiddenSubset,
        hiddensubsetnum: hiddenSubsetNum,
        xwing: XWing,
        xwingnum: XWingNum,
        ywing: YWing,
        ywingnum: YWingNum
    })

    //save model to database
    sudoku.save()
        .catch((err) => {
            console.log(err)
        })
}