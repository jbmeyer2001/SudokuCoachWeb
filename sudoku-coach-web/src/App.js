import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { generateCandidates, getNextStep, check, insertTypedVal } from './solver/Solver.js'
import { setDifference } from './solver/Utility.js'

function App() {

  const [displayPuzzle, setDisplayPuzzle] = useState([
    ['', '9', '', '3', '7', '1', '4', '', ''],
    ['3', '4', '7', '5', '2', '8', '9', '1', '6'],
    ['1', '', '', '9', '6', '4', '', '', '3'],
    ['2', '', '9', '', '4', '', '1', '3', ''],
    ['5', '1', '', '', '3', '9', '', '2', '4'],
    ['', '3', '4', '2', '1', '', '8', '', '9'],
    ['', '', '3', '1', '9', '2', '', '4', ''],
    ['9', '', '', '4', '5', '7', '3', '', '1'],
    ['4', '', '1', '6', '8', '3', '', '9', '']
  ]);

  const initCandidates = [];
  for (let i = 0; i < 81; i++) {
    initCandidates[i] = new Set();
  }
  const [allCandidates, setAllCandidates] = useState(initCandidates);

  const [stepText, setStepText] = useState("step!");

  function handleTestButton() {
      let solveability = check();

      if (solveability == "INVALID") {
        alert("Sudoku invalid!\nThere is a duplicate in one of the rows, columns, or boxes.");
      }

      if (solveability == "UNSOLVEABLE") {
        alert("Sudoku invalid!\nCheck your entered values, the given sudoku doesn't have a solution.");
      }

      if (solveability == "MULTIPLESOLUTIONS") {
        alert("Sudoku invalid!\nMake sure you entered every value correctly, as there's multiple solutions to the given puzzle (which makes it invalid).");
      }
  }

  function handleCandidatesButton() {
    setAllCandidates(generateCandidates());
  }

  function handleStepButton() {
    let step = getNextStep();

    switch(step.step) {
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

  function handleSoleCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update changes made to the board
    let updatedDisplayPuzzle = [...displayPuzzle];
    updatedDisplayPuzzle[step.row][step.col] = step.val;
    setDisplayPuzzle(updatedDisplayPuzzle);

    /*TODO: update text output*/
    //update text
    setStepText("Sole Candidate");
  }

  function handleUniqueCandidate(step) {
    //update any candidates
    updateAllCandidates(step.candidates);

    //update changes made to the board
    let updatedDisplayPuzzle = [...displayPuzzle];
    updatedDisplayPuzzle[step.row][step.col] = step.val;
    setDisplayPuzzle(updatedDisplayPuzzle);

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

    insertTypedVal(Number(val));
  }

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <button onClick={handleTestButton}>test</button>
      <button onClick={handleCandidatesButton}>candidates</button>
      <button onClick={handleStepButton}>Step</button>
      <div class="board">{

        displayPuzzle.map((row, rowIndex) =>
          <div className="boardRow">{

            row.map((val, valIndex) =>
              <div class="boardCell">
                <div class="value">{val}</div>
                <input type="number" onChange={editValue} id={rowIndex * 9 + valIndex}></input>
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
  let val = 113 + row * 101 + Math.trunc(row / 3) * 3; //to be potentially changed later
  return val.toString() + "px";
}

export default App;
