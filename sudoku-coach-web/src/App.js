import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { generateCandidates, getNextStep, check, insertTypedVal, clearBoard } from './solver/Solver.js'
import { setDifference } from './solver/Utility.js'

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

  const [stepText, setStepText] = useState("step!");

  const [numInputDisabled, setNumInputDisabled] = useState(false);

  const [nextStepBtnDisabled, setNextStepBtnDisabled] = useState(true);

  const [submitPuzzleBtnDisabled, setSubmitPuzzleBtnDisabled] = useState(false);

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
    setNumInputDisabled(false);
    setSubmitPuzzleBtnDisabled(false);
    setNextStepBtnDisabled(true);
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
      setNumInputDisabled(true);
      setSubmitPuzzleBtnDisabled(true);
      setNextStepBtnDisabled(false);
      setAllCandidates(generateCandidates());
  }

  function handleNextStep() {
    let step = getNextStep();

    switch(step.step) {
      case "SOLVED":
        handleSolved();
        break;
      case "SOLECANDIDATE":
        handleSoleCandidate(step);
        break;
      case "UNIQUECANDIDATE":
        handleUniqueCandidate(step);
        break;
      case "BLOCKROWCOL":
        handleBlockRowCol(step);
        break;
      case "BLOCKBLOCK":
        handleBlockBlock(step);
        break;
      case "NAKEDSUBSET":
        handleNakedSubset(step);
        break;
      case "HIDDENSUBSET":
        handleHiddenSubset(step);
        break;
      case "XWING":
        handleXWing(step);
        break;
      case "YWING":
        handleYWing(step);
        break;
      default:
        alert("there was no step!");
        break;
    }
  }

  function handleSolved() {
    setStepText("Solved!");
  }

  function handleSoleCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update value
    document.getElementById(step.row * 9 + step.col).value = step.val;

    /*TODO: update text output*/
    //update text
    setStepText("Sole Candidate");
  }

  function handleUniqueCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update value
    document.getElementById(step.row * 9 + step.col).value = step.val;

    /*TODO: update text output*/
    //update text
    setStepText("Unique Candidate");
  }

  function handleBlockRowCol(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    /*TODO: update text output*/
    //update text
    setStepText("BlockRowCol");
  }

  function handleBlockBlock(step) {
    updateAllCandidates(step.candidates);

    setStepText("BLOCKBLOCK");
  }

  function handleNakedSubset(step) {
    updateAllCandidates(step.candidates);

    setStepText("NAKEDSUBSET");
  }

  function handleHiddenSubset(step) {
    updateAllCandidates(step.candidates);

    setStepText("HIDDENSUBSET");
  }

  function handleXWing(step) {
    updateAllCandidates(step.candidates);

    setStepText("XWING");
  }

  function handleYWing(step) {
    updateAllCandidates(step.candidates);

    setStepText("YWING");
  }

  function updateAllCandidates(newCandidates) {
    let updatedAllCandidates = [...allCandidates];
    for (let i = 0; i < 81; i++) {
      let diff = setDifference(updatedAllCandidates[i], newCandidates[i]);
      if (diff.size != 0) {
        diff.forEach((val) => {
          updatedAllCandidates.delete(val);
        });
      }
    }
    setAllCandidates(updatedAllCandidates);
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

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <button onClick={() => {if(window.confirm('reset the puzzle?')){handleResetPuzzle();}}}>Reset Puzzle</button>
      <button onClick={handleSubmitPuzzle} disabled={submitPuzzleBtnDisabled}>Submit Puzzle</button>
      <button onClick={handleNextStep} disabled={nextStepBtnDisabled}>Next Step</button>
      <div class="board">{

        displayPuzzle.map((row, rowIndex) =>
          <div className="boardRow">{

            row.map((val, valIndex) =>
              <div class="boardCell">
                <input type="number" onChange={editValue} disabled={numInputDisabled} id={rowIndex * 9 + valIndex}></input>
                <table style={{top: getRowTop(rowIndex)}}>
                  <tr>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(1) ? 1 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(2) ? 2 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(3) ? 3 : ''}</th>
                  </tr>
                  <tr>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(4) ? 4 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(5) ? 5 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(6) ? 6 : ''}</th>
                  </tr>
                  <tr>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(7) ? 7 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(8) ? 8 : ''}</th>
                    <th>{allCandidates[rowIndex * 9 + valIndex].has(9) ? 9 : ''}</th>
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

function getRowTop(row) {
  let val = 155 + row * 101 + Math.trunc(row / 3) * 3; //to be potentially changed later
  return val.toString() + "px";
}

export default App;
