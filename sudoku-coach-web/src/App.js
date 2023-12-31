import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [puzzle, setPuzzle] = useState([
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

  //const [allCandidates, setAllCandidates] = useState([]);

  const allCandidates = [];

  for (let i = 0; i < 81; i++) {
    allCandidates[i] = new Set();
  }

  //setAllCandidates(allCandidates);

  const handleTestButton = () => {
    const updatedPuzzle = [...puzzle];
    updatedPuzzle[0][0] = 1;
    updatedPuzzle[0][1] = 2;
    setPuzzle(updatedPuzzle);
    alert("you have pressed the test button!");
  }

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <button onClick={handleTestButton}>test</button>
      <div class="board">{

        puzzle.map((row, rowIndex) =>
          <div className="boardRow">{

            row.map((val, valIndex) =>
              <div class="boardCell">
                <div class="value">{val}</div>
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
