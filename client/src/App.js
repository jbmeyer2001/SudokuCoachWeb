import logo from './logo.svg';
import './App.css';
import { Board, InputOptions, Numpad } from'./components';
import { useState } from "react";

import { 
  displaySoleCandidate, 
  displayUniqueCandidate, 
  displayBlockRowCol,
  displayBlockBlock,
  displayNakedSubset,
  displayHiddenSubset,
  displayXWing,
  displayYWing
} from './display/Color.js'

import {
  textDisplaySoleCandidate,
  textDisplayUniqueCandidate,
  textDisplayBlockRowCol,
  textDisplayBlockBlock,
  textDisplayNakedSubset,
  textDisplayHiddenSubset,
  textDisplayXWing,
  textDisplayYWing
} from './display/Text.js'

import {
  copyBoard,
  copyCandidates, 
  getRowColBoxNum, 
  setUnion, 
  getRow, 
  getCol, 
  getBox
} from './Utility.js';

var displayStep = true;
var curSoln;
var stepNum = -1;

function App() {
  async function postPuzzle(puzzle){
    try {
      let bodyJSON = JSON.stringify(Object.assign({}, puzzle));
      const response = await fetch(`/puzzles`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: bodyJSON,
      })
      const json = await response.json();
      
      //if bad puzzle is defined, it measn teh server can't solve the puzzle
      if ("badPuzzle" in json) {
        switch(json.badPuzzle) {
          case "INVALID":
          alert("Sudoku invalid!\nThere is a duplicate in one of the rows, columns, or boxes.");
          return false;
        case "UNSOLVEABLE":
          alert("Sudoku invalid!\nCheck your entered values, the given sudoku doesn't have a solution.");
          return false;
        case "MULTIPLESOLUTIONS":
          alert("Sudoku invalid!\nMake sure you entered every value correctly, as there's multiple solutions to the given puzzle (which makes it invalid).");
          return false;
        case "CANTSOLVE":
          alert("While this puzzle is a valid, solveable puzzle with a single solution, this algorithm is not capable of solving it.");
          return false;
        default:
          alert("server returned bad puzzle type" + json.badPuzzle);
          return false;
        }
      }

      //puzzle is good - set candidates state and solution
      setCandidates(json.startBoard);
      curSoln = json;
      stepNum = 1;
      return true;
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getPuzzleIDs() {
    try {
      const response = await fetch('/puzzles');
      const json = await response.json();
      return json;
    } 
    catch (error) {
      console.log(error);
    }
  }

  async function getPuzzle(puzzleID) {
    try {
      const response = await fetch(`/puzzles/${puzzleID}`);
      const json = await response.json();
      
      let updatedDisplayPuzzle = [...displayPuzzle]
      //set board state
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let val = json.startBoard[i][j];
          updatedDisplayPuzzle[i][j] = (val != 0) ? val : '';
        }
      }

      //puzzle is good - set candidates state and solution
      setDisplayPuzzle(updatedDisplayPuzzle);
      setCandidates(json.startBoard);
      curSoln = json;
      stepNum = 1;
    }
    catch (error) {
      console.log(error);
    }
  }

const [displayPuzzle, setDisplayPuzzle] = useState([
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '']
]);

//array of sets indicating values a space could be
const initCandidates = [];
for (let i = 0; i < 81; i++) {
  initCandidates[i] = new Set();
}
const [allCandidates, setAllCandidates] = useState(initCandidates);
const [stepText, setStepText] = useState("");
const [solving, setSolving] = useState(false);
const [stepBtnDisable, setStepBtnDisable] = useState(true);

//sets indicating colors different candidates should be
const candidateBlue = [];
const candidateRed = [];
for (let i = 1; i <= 9; i++) {
  candidateRed[i] =  new Set();
  candidateBlue[i] = new Set();
}
const [displayCandidateBlue, setDisplayCandidateBlue] = useState(candidateBlue);
const [displayCandidateRed, setDisplayCandidateRed] = useState(candidateRed);

//sets indicating colors different spaces should be
const spaceGreen = [];
const spaceRed = [];
spaceGreen[0] = new Set();
spaceRed[0] = new Set();
const [displaySpaceGreen, setDisplaySpaceGreen] = useState(spaceGreen);
const [displaySpaceRed, setDisplaySpaceRed] = useState(spaceRed);

function handleResetPuzzle() {
  //remove all displays
  clearDisplayColors();
  
  //remove all values from puzzle display
  let updatedDisplayPuzzle = [...displayPuzzle];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      updatedDisplayPuzzle[i][j] = '';
    }
  }

  //set candidates as empty
  let updatedAllCandidates = [...allCandidates];
  for (let i = 0; i < 81; i++) {
    updatedAllCandidates[i].clear();
  }

  //enable/disable required button states, and remove discriptive text on the most recent step
  setAllCandidates(updatedAllCandidates);
  setStepBtnDisable(true);
  setSolving(false);
  setStepText("");
  displayStep = true;
}

function handleSubmitPuzzle() {
  //get number array representation from current display elements
  let curPuzzle = [[], [], [], [], [], [], [], [], []];
  copyBoard(displayPuzzle, curPuzzle);

  postPuzzle(curPuzzle);
}

function setCandidates(puzzle) {
  //get the candidates according to the puzzle
  let candidates = [];
  for (let i = 0; i < 81; i++) {
    candidates[i] = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = puzzle[i][j];
      let space = i * 9 + j;

      if (val != 0) {
        //remove all candidates from the current space
        candidates[space].clear();

        //get the row, column, and box number
        let [row, col, box] = getRowColBoxNum(space, ["row", "col", "box"]);

        //remove 'val' as a candidate from all spaces the current space interacts with
        setUnion(getRow(row), getCol(col), getBox(box)).forEach((space) => {
          candidates[space].delete(val);
        })
      }
    }
  }
  
  //update the required states
  setAllCandidates(candidates);
  setStepBtnDisable(false);
  setSolving(true);
}

function handleNextStep() {
  console.log(curSoln["step1"]);
  /*
    every step we either want to:
      - Display the changes made by the pattern by setting the colors of candidates/spaces and
    updating the text display.
      - Remove all the colors and display only the current puzzle state (with no colors)
  */
  if (displayStep) {
    //get the next step from the solution object
    let step = curSoln[`step${stepNum}`];
    //update color and text display according to the step
    switch(step.step) {
      case "SOLECANDIDATE":
        displaySoleCandidate(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplaySoleCandidate(step, setStepText);
        break;
      case "UNIQUECANDIDATE":
        displayUniqueCandidate(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayUniqueCandidate(step, setStepText);
        break;
      case "BLOCKROWCOL":
        displayBlockRowCol(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayBlockRowCol(step, setStepText);
        break;
      case "BLOCKBLOCK":
        displayBlockBlock(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayBlockBlock(step, setStepText)
        break;
      case "NAKEDSUBSET":
        displayNakedSubset(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayNakedSubset(step, setStepText);
        break;
      case "HIDDENSUBSET":
        displayHiddenSubset(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayHiddenSubset(step, setStepText);
        break;
      case "XWING":
        displayXWing(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayXWing(step, setStepText);
        break;
      case "YWING":
        displayYWing(step, updateDisplaySpace, updateDisplayCandidate);
        textDisplayYWing(step, setStepText);
        break;
      case "SOLVED":
        setStepBtnDisable(true);
        setStepText("Solved!");
        break;
      default:
        alert("there was no step!");
        break;
    }
  }
  else {
    //get the step from the solution object and increment to next step
    let step = curSoln[`step${stepNum}`];
    stepNum++;
    //remove color display, update candidate state for every pattern, update board state for required patterns
    switch(step.step) {
      case "SOLECANDIDATE":
      case "UNIQUECANDIDATE":
        let updatedDisplayPuzzle = [...displayPuzzle];
        updatedDisplayPuzzle[step.row][step.col] = step.val;
        setDisplayPuzzle(updatedDisplayPuzzle);
      case "BLOCKROWCOL":
      case "BLOCKBLOCK":
      case "NAKEDSUBSET":
      case "HIDDENSUBSET":
      case "XWING":
      case "YWING":
        updateAllCandidates(step);
        clearDisplayColors();
        break;
      default:
        alert("there was no step!");
        break;
    }
  }
  displayStep = !displayStep;
}

function clearDisplayColors() {
  //clear all display color sets so no colors are present
  let updateDisplaySpaceGreen = [...displaySpaceGreen];
  let updateDisplaySpaceRed = [...displaySpaceRed];
  updateDisplaySpaceGreen[0] = new Set();
  updateDisplaySpaceRed[0] = new Set();
  setDisplaySpaceGreen(updateDisplaySpaceGreen);
  setDisplaySpaceRed(updateDisplaySpaceRed);
  let updateDisplayCandidateBlue = [...displayCandidateBlue];
  let updateDisplayCandidateRed = [...displayCandidateRed];
  for (let i = 1; i <= 9; i++) {
    updateDisplayCandidateBlue[i] = new Set();
    updateDisplayCandidateRed[i] = new Set();
  }
  setDisplayCandidateBlue(updateDisplayCandidateBlue);
  setDisplayCandidateRed(updateDisplayCandidateRed);
}
function updateDisplayCandidate(index, value, color) {
  //update the candidate display colors set according to input params
  switch(color){
    case "BLUE":
      let updateDisplayCandidateBlue = [... displayCandidateBlue];
      updateDisplayCandidateBlue[value].add(index);
      setDisplayCandidateBlue(updateDisplayCandidateBlue);
      break;
    case "RED":
      let updateDisplayCandidateRed = [... displayCandidateRed];
      updateDisplayCandidateRed[value].add(index);
      setDisplayCandidateRed(updateDisplayCandidateRed);
      break
  }
}
function updateDisplaySpace(index, color) {
  //update the space display colors set according to input params
  switch(color) {
    case "GREEN":
      let updateDisplaySpaceGreen = [...displaySpaceGreen];
      updateDisplaySpaceGreen[0].add(index);
      setDisplaySpaceGreen(updateDisplaySpaceGreen);
      break;
    case "RED":
      let updateDisplaySpaceRed = [...displaySpaceRed];
      updateDisplaySpaceRed[0].add(index);
      setDisplaySpaceRed(updateDisplaySpaceRed);
      break
  }
}
function updateAllCandidates(step) {
  let newCandidates = copyCandidates(allCandidates);
  let spaces;
  let values;
  if (step.step == "BLOCKROWCOL") {
    let debug = 1;
    debug++;
    debug--;
  }

  //ensure the 'values' set contains the value(s) to remove as candidate(s)
  if (step.val === undefined) {
    values = step.removalCandidates;
  }
  else {
    values = new Set([step.val]);
  }

  //set the spaces that we will remove the candidate(s) from
  if (step.step == "SOLECANDIDATE" || step.step == "UNIQUECANDIDATE") {
    let [row, col, box] = getRowColBoxNum(step.row * 9 + step.col, ["row", "col", "box"]);
    spaces = setUnion(getRow(row), getCol(col), getBox(box));
    newCandidates[row * 9 + col].clear(); 
  }
  else {
    spaces = step.affectedSpaces;
  }

  //set candidate state according to provided array of sets
  spaces.forEach((space) => {
    values.forEach((value) => {
      newCandidates[space].delete(value);
    })
  })
  setAllCandidates(newCandidates);
}

return (
  <div className="App">
    <h1>Sudoku Coach</h1>
    <button onClick={() => {if(window.confirm('reset the puzzle?')){handleResetPuzzle();}}}>Reset</button>
    <button onClick={handleSubmitPuzzle} disabled={solving}>Submit</button>
    <button onClick={handleNextStep} disabled={stepBtnDisable}>Step</button>
    <hr></hr>
    <div class="app-view">
      <Numpad />
      <Board 
        puzzle={displayPuzzle}
        solving={solving}
        displaySpaceGreen={displaySpaceGreen}
        displaySpaceRed={displaySpaceRed}
        displayCandidateBlue={displayCandidateBlue}
        displayCandidateRed={displayCandidateRed}
        allCandidates={allCandidates}
        displayPuzzle={displayPuzzle}
        setDisplayPuzzle={setDisplayPuzzle}
      />
      <InputOptions />
      <p 
        style={{
          display: "block", 
          height: "50px",
          width: "500px",
          margin: "auto"
        }}
      >{stepText}</p>
    </div>
    <hr></hr>
  </div>
);
}

{/* <button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(1)}} disabled={solving}>preset 1</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(2)}} disabled={solving}>preset 2</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(3)}} disabled={solving}>preset 3</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(4)}} disabled={solving}>preset 4</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(5)}} disabled={solving}>preset 5</button>
<br></br>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(6)}} disabled={solving}>preset 6</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(7)}} disabled={solving}>preset 7</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(8)}} disabled={solving}>preset 8</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(9)}} disabled={solving}>preset 9</button>
<button style={{margin: "5px 5px"}} onClick={() => {getPuzzle(10)}} disabled={solving}>preset 10</button> */}

export default App;
