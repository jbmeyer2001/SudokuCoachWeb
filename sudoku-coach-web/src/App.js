import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import { useState } from "react";

function App() {

  const [puzzle, setPuzzle] = useState([
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
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
      <Board puzzle={puzzle} allCandidates={allCandidates}/>
    </div>
  );
}

export default App;
