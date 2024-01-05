import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { generateCandidates, getNextStep, check, insertTypedVal, clearBoard } from './solver/Solver.js'
import { getRow, getCol, getBox, getRowColBoxNum, setUnion } from './solver/Utility.js'

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

var displayStep = true;
var step;

function App() {

  const displayPuzzle = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
  ];

  const initCandidates = [];
  for (let i = 0; i < 81; i++) {
    initCandidates[i] = new Set();
  }
  const [allCandidates, setAllCandidates] = useState(initCandidates);

  const [stepText, setStepText] = useState("");

  const [solving, setSolving] = useState(false);

  function handleResetPuzzle() {
    clearBoard();
    
    let updatedAllCandidates = [...allCandidates];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        document.getElementById(i * 9 + j).value = '';
      }
    }
    for (let i = 0; i < 81; i++) {
      updatedAllCandidates[i].clear();
    }

    setAllCandidates(updatedAllCandidates);
    setSolving(false);
  }

  function handleSubmitPuzzle() {
      let solveability = check();

      if (solveability == "INVALID") {
        alert("Sudoku invalid!\nThere is a duplicate in one of the rows, columns, or boxes.");
        return;
      }

      if (solveability == "UNSOLVEABLE") {
        alert("Sudoku invalid!\nCheck your entered values, the given sudoku doesn't have a solution.");
        return;
      }

      if (solveability == "MULTIPLESOLUTIONS") {
        alert("Sudoku invalid!\nMake sure you entered every value correctly, as there's multiple solutions to the given puzzle (which makes it invalid).");
        return;
      }

      if (solveability == "CANTSOLVE") {
        alert("While this puzzle is a valid, solveable puzzle with a single solution, this algorithm is not capable of solving it.");
        return;
      }

      if (solveability != "SOLVEABLE") {
        alert("something terribly wrong has occured!");
        return;
      }
      //if we've reached here, the puzzle is solveable using our algorithm
      setAllCandidates(generateCandidates());
      setSolving(true);
  }

  const candidateBlue = [];
  const candidateRed = [];
  for (let i = 1; i <= 9; i++) {
    candidateRed[i] =  new Set();
    candidateBlue[i] = new Set();
  }
  const [displayCandidateBlue, setDisplayCandidateBlue] = useState(candidateBlue);
  const [displayCandidateRed, setDisplayCandidateRed] = useState(candidateRed);

  const spaceGreen = [];
  const spaceRed = [];
  spaceGreen[0] = new Set();
  spaceRed[0] = new Set();
  const [displaySpaceGreen, setDisplaySpaceGreen] = useState(spaceGreen);
  const [displaySpaceRed, setDisplaySpaceRed] = useState(spaceRed);

  function handleNextStep() {
    if (displayStep) {
      step = getNextStep();

      switch(step.step) {
        case "SOLVED":
          handleSolved();
          break;
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
        default:
          alert("there was no step!");
          /*TODO: do something more here*/
          break;
      }
    }
    else {
      switch(step.step) {
        case "SOLECANDIDATE":
        case "UNIQUECANDIDATE":
          document.getElementById(step.row * 9 + step.col).value = step.val;
        case "BLOCKROWCOL":
        case "BLOCKBLOCK":
        case "NAKEDSUBSET":
        case "HIDDENSUBSET":
        case "XWING":
        case "YWING":
          updateAllCandidates(step.candidates);
          clearDisplayColors();
          break;
        default:
          alert("there was no step!");
          break;
      }
    }
    displayStep = !displayStep;
  }

  function handleSolved() {
    setStepText("Solved!");
  }

  function clearDisplayColors() {
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

  function updateAllCandidates(newCandidates) {
    let copyOfCandidates = [];
    for (let i = 0; i < 81; i++) {
      copyOfCandidates[i] = new Set(newCandidates[i]);
    }
    setAllCandidates(copyOfCandidates);
  }

  function editValue (event){
    let row = Math.trunc(event.target.id / 9);
    let col = Math.trunc(event.target.id) % 9;
    let val = document.getElementById(event.target.id).value;

    if (val == '') {
      insertTypedVal(row, col, 0);
      return;
    }

    if (val < 1 || val > 9) {
      insertTypedVal(row, col, 0);
      document.getElementById(event.target.id).value = '';
      alert("inputs must be numbers between 1 and 9");
      return;
    }

    insertTypedVal(row, col, Number(val));
  }

  function getBackgroundColor(space) {
    if (displaySpaceGreen[0].has(space)) {
      return "rgba(0,255,0,0.1)";
    }

    if (displaySpaceRed[0].has(space)) {
      return "rgba(255,0,0.1)";
    }

    return "none";
  }

  function getCandidateColor(candidate, space) {
    if (displayCandidateBlue[candidate].has(space)) {
      return "blue";
    }

    if (displayCandidateRed[candidate].has(space)) {
      return "red";
    }
    
    return "black";
  }

  function getRowTop(row) {
    let val = 155 + row * 101 + Math.trunc(row / 3) * 3; //to be potentially changed later
    return val.toString() + "px";
  }

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <button onClick={() => {if(window.confirm('reset the puzzle?')){handleResetPuzzle();}}}>Reset Puzzle</button>
      <button onClick={handleSubmitPuzzle} disabled={solving}>Submit Puzzle</button>
      <button onClick={handleNextStep} disabled={!solving}>Next Step</button>
      <div class="board">{

        displayPuzzle.map((row, rowIndex) =>
          <div className="boardRow">{

            row.map((val, valIndex) =>
              <div class="boardCell">
                <input type="number" onChange={editValue} disabled={solving} id={rowIndex * 9 + valIndex} style={{background:getBackgroundColor(rowIndex * 9 + valIndex)}}></input>
                <table style={{top: getRowTop(rowIndex)}}>
                  <tr>
                    <th style={{color:getCandidateColor(1, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(1) ? 1 : ''}</th>
                    <th style={{color:getCandidateColor(2, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(2) ? 2 : ''}</th>
                    <th style={{color:getCandidateColor(3, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(3) ? 3 : ''}</th>
                  </tr>
                  <tr>
                    <th style={{color:getCandidateColor(4, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(4) ? 4 : ''}</th>
                    <th style={{color:getCandidateColor(5, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(5) ? 5 : ''}</th>
                    <th style={{color:getCandidateColor(6, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(6) ? 6 : ''}</th>
                  </tr>
                  <tr>
                    <th style={{color:getCandidateColor(7, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(7) ? 7 : ''}</th>
                    <th style={{color:getCandidateColor(8, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(8) ? 8 : ''}</th>
                    <th style={{color:getCandidateColor(9, rowIndex * 9 + valIndex)}}>{allCandidates[rowIndex * 9 + valIndex].has(9) ? 9 : ''}</th>
                  </tr>
                </table>
              </div>
            )
          }

          </div>
        )

      }  
      </div>
      <h1>{stepText}</h1>
    </div>
  );
}

export default App;
