import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Solver from './solver/Solver.js'

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
  preset1,
  preset2,
  preset3,
  preset4,
  preset5,
  preset6,
  preset7,
  preset8,
  preset9,
  preset10
} from './solver/Presets.js'
import { copyCandidates, getRowColBoxNum, setUnion, getRow, getCol, getBox } from './solver/Utility.js';

var displayStep = true;
var solution = {
  steps: undefined,
  stepNum: undefined,
};

function App() {

  const [testData, setTestData] = useState([{}]);
  
  useEffect(() => {
    fetch("/test").then(
      response => response.json()
    ).then(
      data => {
        setTestData(data);
      }
    )
  }, [])

  return (
    <div>
      {
        (testData.test === 'undefined') ?
        (<h1>loading...</h1>) :
        (<h1>loaded</h1>)
      }
    </div>
  )
  //const displayPuzzle = [
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', ''],
  //  ['', '', '', '', '', '', '', '', '']
  //];
//
  ////array of sets indicating values a space could be
  //const initCandidates = [];
  //for (let i = 0; i < 81; i++) {
  //  initCandidates[i] = new Set();
  //}
  //const [allCandidates, setAllCandidates] = useState(initCandidates);
//
  //const [stepText, setStepText] = useState("");
  //const [solving, setSolving] = useState(false);
  //const [stepBtnDisable, setStepBtnDisable] = useState(true);
//
  ////sets indicating colors different candidates should be
  //const candidateBlue = [];
  //const candidateRed = [];
  //for (let i = 1; i <= 9; i++) {
  //  candidateRed[i] =  new Set();
  //  candidateBlue[i] = new Set();
  //}
  //const [displayCandidateBlue, setDisplayCandidateBlue] = useState(candidateBlue);
  //const [displayCandidateRed, setDisplayCandidateRed] = useState(candidateRed);
//
  ////sets indicating colors different spaces should be
  //const spaceGreen = [];
  //const spaceRed = [];
  //spaceGreen[0] = new Set();
  //spaceRed[0] = new Set();
  //const [displaySpaceGreen, setDisplaySpaceGreen] = useState(spaceGreen);
  //const [displaySpaceRed, setDisplaySpaceRed] = useState(spaceRed);
//
  //function handleResetPuzzle() {
  //  //remove all displays
  //  clearDisplayColors();
  //  
  //  //set both the candidate sets and the board array as empty
  //  let updatedAllCandidates = [...allCandidates];
  //  for (let i = 0; i < 9; i++) {
  //    for (let j = 0; j < 9; j++) {
  //      document.getElementById(i * 9 + j).value = '';
  //    }
  //  }
  //  for (let i = 0; i < 81; i++) {
  //    updatedAllCandidates[i].clear();
  //  }
//
  //  //enable/disable required button states, and remove discriptive text on the most recent step
  //  setAllCandidates(updatedAllCandidates);
  //  setStepBtnDisable(true);
  //  setSolving(false);
  //  setStepText("");
  //  displayStep = true;
  //}
//
  //function handleSubmitPuzzle() {
  //  let solver = new Solver();
  //    for (let i = 0; i < 9; i++) {
  //      for (let j = 0; j < 9; j++) {
  //        solver.board[i][j] = Number(document.getElementById(i * 9 + j).value);
  //      }
  //    }
  //    solution["steps"] = solver.solve();
  //    solution["stepNum"] = 1;
//
  //    switch (solution["steps"]) {
  //      case "INVALID":
  //        alert("Sudoku invalid!\nThere is a duplicate in one of the rows, columns, or boxes.");
  //        return;
  //      case "UNSOLVEABLE":
  //        alert("Sudoku invalid!\nCheck your entered values, the given sudoku doesn't have a solution.");
  //        return;
  //      case "MULTIPLESOLUTIONS":
  //        alert("Sudoku invalid!\nMake sure you entered every value correctly, as there's multiple solutions to the given puzzle (which makes it invalid).");
  //        return;
  //      case "CANTSOLVE":
  //        alert("While this puzzle is a valid, solveable puzzle with a single solution, this algorithm is not capable of solving it.");
  //        return;
  //      default:
  //        //the puzzle is solveable
  //        setAllCandidates(solution["steps"]["startCandidates"]);
  //        setStepBtnDisable(false);
  //        setSolving(true);
  //    }
  //}
//
  //function handleNextStep() {
  //  /*
  //    every step we either want to:
  //      - Display the changes made by the pattern by setting the colors of candidates/spaces and
  //    updating the text display.
  //      - Remove all the colors and display only the current puzzle state (with no colors)
  //  */
  //  
  //  if (displayStep) {
  //    //get the next step from the solution object
  //    let step = solution["steps"][`step${solution["stepNum"]}`];
//
  //    //update color and text display according to the step
  //    switch(step.step) {
  //      case "SOLECANDIDATE":
  //        displaySoleCandidate(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplaySoleCandidate(step, setStepText);
  //        break;
  //      case "UNIQUECANDIDATE":
  //        displayUniqueCandidate(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayUniqueCandidate(step, setStepText);
  //        break;
  //      case "BLOCKROWCOL":
  //        displayBlockRowCol(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayBlockRowCol(step, setStepText);
  //        break;
  //      case "BLOCKBLOCK":
  //        displayBlockBlock(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayBlockBlock(step, setStepText)
  //        break;
  //      case "NAKEDSUBSET":
  //        displayNakedSubset(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayNakedSubset(step, setStepText);
  //        break;
  //      case "HIDDENSUBSET":
  //        displayHiddenSubset(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayHiddenSubset(step, setStepText);
  //        break;
  //      case "XWING":
  //        displayXWing(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayXWing(step, setStepText);
  //        break;
  //      case "YWING":
  //        displayYWing(step, updateDisplaySpace, updateDisplayCandidate);
  //        textDisplayYWing(step, setStepText);
  //        break;
  //      case "SOLVED":
  //        setStepBtnDisable(true);
  //        setStepText("Solved!");
  //        break;
  //      default:
  //        alert("there was no step!");
  //        break;
  //    }
  //  }
  //  else {
  //    //get the step from the solution object and increment to next step
  //    let step = solution["steps"][`step${solution["stepNum"]}`];
  //    solution["stepNum"]++;
//
  //    //remove color display, update candidate state for every pattern, update board state for required patterns
  //    switch(step.step) {
  //      case "SOLECANDIDATE":
  //      case "UNIQUECANDIDATE":
  //        document.getElementById(step.row * 9 + step.col).value = step.val;
  //      case "BLOCKROWCOL":
  //      case "BLOCKBLOCK":
  //      case "NAKEDSUBSET":
  //      case "HIDDENSUBSET":
  //      case "XWING":
  //      case "YWING":
  //        updateAllCandidates(step);
  //        clearDisplayColors();
  //        break;
  //      default:
  //        alert("there was no step!");
  //        break;
  //    }
  //  }
  //  displayStep = !displayStep;
  //}
//
  //function setPreset(num) {
  //  //find the preset requested
  //  let curBoard;
  //  switch (num) {
  //  case 1:
  //    curBoard = preset1;
  //    break;
  //  case 2:
  //    curBoard = preset2;
  //    break;
  //  case 3:
  //    curBoard = preset3;
  //    break;
  //  case 4:
  //    curBoard = preset4;
  //    break;
  //  case 5:
  //    curBoard = preset5;
  //    break;
  //  case 6:
  //    curBoard = preset6;
  //    break;
  //  case 7:
  //    curBoard = preset7;
  //    break;
  //  case 8:
  //    curBoard = preset8;
  //    break;
  //  case 9:
  //    curBoard = preset9;
  //    break;
  //  case 10:
  //    curBoard = preset10;
  //    break;
  //  }
//
  //  //set the display board according to the preset
  //  for (let i = 0; i < 9; i++) {
  //    for (let j = 0; j < 9; j++) {
  //      document.getElementById(i * 9 + j).value = (curBoard[i][j] != 0) ? curBoard[i][j] : '';
  //    }
  //  }
  //}
//
  //function clearDisplayColors() {
  //  //clear all display color sets so no colors are present
  //  let updateDisplaySpaceGreen = [...displaySpaceGreen];
  //  let updateDisplaySpaceRed = [...displaySpaceRed];
  //  updateDisplaySpaceGreen[0] = new Set();
  //  updateDisplaySpaceRed[0] = new Set();
  //  setDisplaySpaceGreen(updateDisplaySpaceGreen);
  //  setDisplaySpaceRed(updateDisplaySpaceRed);
//
  //  let updateDisplayCandidateBlue = [...displayCandidateBlue];
  //  let updateDisplayCandidateRed = [...displayCandidateRed];
  //  for (let i = 1; i <= 9; i++) {
  //    updateDisplayCandidateBlue[i] = new Set();
  //    updateDisplayCandidateRed[i] = new Set();
  //  }
  //  setDisplayCandidateBlue(updateDisplayCandidateBlue);
  //  setDisplayCandidateRed(updateDisplayCandidateRed);
  //}
//
  //function updateDisplayCandidate(index, value, color) {
  //  //update the candidate display colors set according to input params
  //  switch(color){
  //    case "BLUE":
  //      let updateDisplayCandidateBlue = [... displayCandidateBlue];
  //      updateDisplayCandidateBlue[value].add(index);
  //      setDisplayCandidateBlue(updateDisplayCandidateBlue);
  //      break;
  //    case "RED":
  //      let updateDisplayCandidateRed = [... displayCandidateRed];
  //      updateDisplayCandidateRed[value].add(index);
  //      setDisplayCandidateRed(updateDisplayCandidateRed);
  //      break
  //  }
  //}
//
  //function updateDisplaySpace(index, color) {
  //  //update the space display colors set according to input params
  //  switch(color) {
  //    case "GREEN":
  //      let updateDisplaySpaceGreen = [...displaySpaceGreen];
  //      updateDisplaySpaceGreen[0].add(index);
  //      setDisplaySpaceGreen(updateDisplaySpaceGreen);
  //      break;
  //    case "RED":
  //      let updateDisplaySpaceRed = [...displaySpaceRed];
  //      updateDisplaySpaceRed[0].add(index);
  //      setDisplaySpaceRed(updateDisplaySpaceRed);
  //      break
  //  }
  //}
//
  //function updateAllCandidates(step) {
  //  let newCandidates = copyCandidates(allCandidates);
  //  let spaces;
  //  let values;
//
  //  if (step.step == "BLOCKROWCOL") {
  //    let debug = 1;
  //    debug++;
  //    debug--;
  //  }
//
  //  //ensure the 'values' set contains the value(s) to remove as candidate(s)
  //  if (step.val === undefined) {
  //    values = step.removalCandidates;
  //  }
  //  else {
  //    values = new Set([step.val]);
  //  }
//
  //  //set the spaces that we will remove the candidate(s) from
  //  if (step.step == "SOLECANDIDATE" || step.step == "UNIQUECANDIDATE") {
  //    let [row, col, box] = getRowColBoxNum(step.row * 9 + step.col, ["row", "col", "box"]);
  //    spaces = setUnion(getRow(row), getCol(col), getBox(box));
  //    newCandidates[row * 9 + col].clear(); //TODO there's a bug here somewhere
  //  }
  //  else {
  //    spaces = step.affectedSpaces;
  //  }
//
  //  //set candidate state according to provided array of sets
  //  spaces.forEach((space) => {
  //    values.forEach((value) => {
  //      newCandidates[space].delete(value);
  //    })
  //  })
//
  //  setAllCandidates(newCandidates);
  //}
//
  //function editValue (event){
  //  //when one of the number inputs changes
  //  //get the row, column, and value associated with the given event
  //  let val = document.getElementById(event.target.id).value;
//
  //  if (val == '') {
  //    return;
  //  }
//
  //  //if invalid number was added, set the input value to zero and alert user
  //  if (val < 1 || val > 9) {
  //    document.getElementById(event.target.id).value = '';
  //    alert("inputs must be numbers between 1 and 9");
  //  }
  //}
//
  ////set the color of the space in the App jsx according to color display sets
  //function getSpaceColor(space) {
  //  if (displaySpaceGreen[0].has(space)) {
  //    return "rgba(0,255,0,0.2)";
  //  }
//
  //  if (displaySpaceRed[0].has(space)) {
  //    return "rgba(255,0,0,0.2)";
  //  }
//
  //  return "none";
  //}
//
  /////set the color of the candidate in the App jsx according to color display sets
  //function getCandidateColor(candidate, space) {
  //  if (displayCandidateBlue[candidate].has(space)) {
  //    return "blue";
  //  }
//
  //  if (displayCandidateRed[candidate].has(space)) {
  //    return "red";
  //  }
  //  
  //  return "black";
  //}
//
  //return (
  //  <div className="App">
  //    <h1>Sudoku Coach</h1>
  //    <button onClick={() => {if(window.confirm('reset the puzzle?')){handleResetPuzzle();}}}>Reset</button>
  //    <button onClick={handleSubmitPuzzle} disabled={solving}>Submit</button>
  //    <button onClick={handleNextStep} disabled={stepBtnDisable}>Step</button>
  //    <hr></hr>
  //    <div class="board">{
//
  //      displayPuzzle.map((row, rowIndex) =>
  //        <div className="boardRow">{
//
  //          row.map((val, valIndex) =>
  //            <div class="boardCell">
  //              <input type="number" onChange={editValue} disabled={solving} id={rowIndex * 9 + valIndex} style={{background:getSpaceColor(rowIndex * 9 + valIndex)}}></input>
  //              <table>
  //                <tr>
  //                  <th style={{color:getCandidateColor(1, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(1) ? 1 : ''}</th>
  //                  <th style={{color:getCandidateColor(2, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(2) ? 2 : ''}</th>
  //                  <th style={{color:getCandidateColor(3, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(3) ? 3 : ''}</th>
  //                </tr>
  //                <tr>
  //                  <th style={{color:getCandidateColor(4, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(4) ? 4 : ''}</th>
  //                  <th style={{color:getCandidateColor(5, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(5) ? 5 : ''}</th>
  //                  <th style={{color:getCandidateColor(6, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(6) ? 6 : ''}</th>
  //                </tr>
  //                <tr>
  //                  <th style={{color:getCandidateColor(7, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(7) ? 7 : ''}</th>
  //                  <th style={{color:getCandidateColor(8, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(8) ? 8 : ''}</th>
  //                  <th style={{color:getCandidateColor(9, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(9) ? 9 : ''}</th>
  //                </tr>
  //              </table>
  //            </div>
  //          )
  //        }
//
  //        </div>
  //      )
//
  //    }  
  //    </div>
  //    <p 
  //      style={{
  //        display: "block", 
  //        height: "50px",
  //        width: "500px",
  //        margin: "auto"
  //      }}
  //    >{stepText}</p>
  //    <hr></hr>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(1);handleSubmitPuzzle();}} disabled={solving}>preset 1</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(2);handleSubmitPuzzle();}} disabled={solving}>preset 2</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(3);handleSubmitPuzzle();}} disabled={solving}>preset 3</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(4);handleSubmitPuzzle();}} disabled={solving}>preset 4</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(5);handleSubmitPuzzle();}} disabled={solving}>preset 5</button>
  //    <br></br>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(6);handleSubmitPuzzle();}} disabled={solving}>preset 6</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(7);handleSubmitPuzzle();}} disabled={solving}>preset 7</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(8);handleSubmitPuzzle();}} disabled={solving}>preset 8</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(9);handleSubmitPuzzle();}} disabled={solving}>preset 9</button>
  //    <button style={{margin: "5px 5px"}} onClick={() => {setPreset(10);handleSubmitPuzzle();}} disabled={solving}>preset 10</button>
  //  </div>
  //);
}

export default App;
