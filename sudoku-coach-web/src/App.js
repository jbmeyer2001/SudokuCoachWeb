import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { generateCandidates, getNextStep, check, insertTypedVal, clearBoard } from './solver/Solver.js'
import { getRow, getCol, getBox, getRowColBoxNum, setUnion } from './solver/Utility.js'

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
    }

    switch(step.step) {
      case "SOLVED":
        handleSolved();
        break;
      case "SOLECANDIDATE":
        if(displayStep) {displaySoleCandidate(step);} else {handleSoleCandidate(step);}
        setStepText("sole candidate");
        break;
      case "UNIQUECANDIDATE":
        if(displayStep) {displayUniqueCandidate(step);} else {handleUniqueCandidate(step);}
        setStepText("unique candidate");
        break;
      case "BLOCKROWCOL":
        if(displayStep)  {displayBlockRowCol(step);} else {handleBlockRowCol(step);}
        setStepText("block row col");
        break;
      case "BLOCKBLOCK":
        if(displayStep) {displayBlockBlock(step);} else {handleBlockBlock(step);}
        setStepText("block block");
        break;
      case "NAKEDSUBSET":
        if(displayStep) {displayNakedSubset(step);} else {handleNakedSubset(step);}
        setStepText("naked subset");
        break;
      case "HIDDENSUBSET":
        if(displayStep) {displayHiddenSubset(step);} else {handleHiddenSubset(step);}
        setStepText("hidden subset");
        break;
      case "XWING":
        if(displayStep) {displayXWing(step);} else {handleXWing(step);}
        setStepText("x-wing");
        break;
      case "YWING":
        if(displayStep) {displayYWing(step);} else {handleYWing(step);}
        setStepText("y-wing");
        break;
      default:
        alert("there was no step!");
        break;
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

  function displaySoleCandidate(step) {
    let index = step.row * 9 + step.col;
    let [box] = getRowColBoxNum(index, ["box"]);

    updateDisplaySpace(index, "GREEN");
    updateDisplayCandidate(index, step.val, "BLUE");

    //I always check for 'blue' or 'green' first when deciding color, so it's okay that both 
    //displayCandidateBlue and displayCandidateRed have the index in the set at step.val
    let redCandidates = Array.from(setUnion([getRow(step.row), getCol(step.col), getBox(box)]));
    for (let i = 0; i < redCandidates.length; i++) {
      updateDisplayCandidate(redCandidates[i], step.val, "RED");
    }
  }

  function displayUniqueCandidate(step) {
    let index = step.row * 9 + step.col;
    let [box] = getRowColBoxNum(index, ["box"]);

    switch (step.set) {
      case "ROW":
        var greenSpaces = Array.from(getRow(step.row));
        break;
      case "COL":
        var greenSpaces = Array.from(getCol(step.col));
        break;
      case "BOX":
        var greenSpaces = Array.from(getBox(box));      
        break;
    }
    for (let i = 0; i < greenSpaces.length; i++) {
      updateDisplaySpace(greenSpaces[i], "GREEN");
    }
    
    updateDisplayCandidate(index, step.val, "BLUE");

    //I always check for 'blue' or 'green' first when deciding color, so it's okay that both 
    //displayCandidateBlue and displayCandidateRed have the index in the set at step.val
    let redCandidates = Array.from(setUnion([getRow(step.row), getCol(step.col), getBox(box)]));
    for (let i = 0; i < redCandidates.length; i++) {
      updateDisplayCandidate(redCandidates[i], step.val, "RED");
    }
  }

  function displayBlockRowCol(step) {

  }

  function displayBlockBlock(step) {
    
  }

  function displayNakedSubset(step) {

  }

  function displayHiddenSubset(step) {

  }

  function displayXWing(step) {

  }

  function displayYWing(step) {

  }

  function handleSoleCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update value
    document.getElementById(step.row * 9 + step.col).value = step.val;
    clearDisplayColors();
  }

  function handleUniqueCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update value
    document.getElementById(step.row * 9 + step.col).value = step.val;
    clearDisplayColors();
  }

  function handleBlockRowCol(step) {
    //update any candidates
    updateAllCandidates(step.candidates);
    clearDisplayColors();
  }

  function handleBlockBlock(step) {
    updateAllCandidates(step.candidates);
    clearDisplayColors();
  }

  function handleNakedSubset(step) {
    updateAllCandidates(step.candidates);
    clearDisplayColors();
  }

  function handleHiddenSubset(step) {
    updateAllCandidates(step.candidates);
    clearDisplayColors();
  }

  function handleXWing(step) {
    updateAllCandidates(step.candidates);
    clearDisplayColors();
  }

  function handleYWing(step) {
    updateAllCandidates(step.candidates);
    clearDisplayColors();
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
