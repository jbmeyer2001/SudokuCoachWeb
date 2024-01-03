import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { board } from './solver/Solver.js'
import { checkPuzzle } from './solver/CheckPuzzle.js'

function App() {

  const [displayPuzzle, setdisplayPuzzle] = useState([
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

  const initCandidates = [];

  for (let i = 0; i < 81; i++) {
    initCandidates[i] = new Set();
  }

  const [allCandidates, setAllCandidates] = useState(initCandidates);

  const handleTestButton = () => {
      let solveability = checkPuzzle();

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

  function editValue (event){
    let row = Math.trunc(event.target.id / 9);
    let col = Math.trunc(event.target.id) % 9;
    let val = document.getElementById(event.target.id).value;

    if (val == '') {
      board[row][col] = 0;
      return;
    }

    if (val < 1 || val > 9) {
      board[row][col] = 0;
      document.getElementById(event.target.id).value = '';
      alert("inputs must be numbers between 1 and 9");
      return;
    }

    board[row][col] = Number(val);
  }

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <button onClick={handleTestButton}>test</button>
      <div class="board">{

        displayPuzzle.map((row, rowIndex) =>
          <div className="boardRow">{

            row.map((val, valIndex) =>
              <div class="boardCell">
                <div class="value">{val}</div>
                <input type="number" onChange={editValue} id={rowIndex * 9 + valIndex}></input>
                <table>
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
    </div>
  );
}

export default App;
