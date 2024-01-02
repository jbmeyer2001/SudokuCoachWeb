import logo from './logo.svg';
import './App.css';
import { useState } from "react";

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

  //const [allCandidates, setAllCandidates] = useState([]);

  const initCandidates = [];

  for (let i = 0; i < 81; i++) {
    initCandidates[i] = new Set();
  }

  const [allCandidates, setAllCandidates] = useState(initCandidates);

  const handleTestButton = () => {
    const updateddisplayPuzzle = [...displayPuzzle];
    setdisplayPuzzle(updateddisplayPuzzle);

    const updatedAllCandidates = allCandidates;
    setAllCandidates(updatedAllCandidates);
    
    alert("you have pressed the test button!");
  }

  function handleTextChange (e){
    alert("you have input text");
    
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
                <input type="number" onChange={handleTextChange} id={rowIndex * 9 + valIndex}></input>
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
