import './Board.css';

import { 
  getRowColBoxNum, 
} from '../Utility.js';

function Board(props) {
    //set the color of the space in the App jsx according to color display sets
    function getSpaceColor(space) {
        if (props.displaySpaceGreen[0].has(space)) {
            return "rgba(0,255,0,0.2)";
        }
        if (props.displaySpaceRed[0].has(space)) {
            return "rgba(255,0,0,0.2)";
        }
        return "none";
    }

    //set the color of the candidate in the App jsx according to color display sets
    function getCandidateColor(candidate, space) {
        if (props.displayCandidateBlue[candidate].has(space)) {
            return "blue";
        }
        if (props.displayCandidateRed[candidate].has(space)) {
            return "red";
        }

        return "black";
    }

    function editValue (event){
        //when one of the number inputs changes
        //get the row, column, and value associated with the given event
        let val = document.getElementById(event.target.id).value;
        if (val == '') {
          return;
        }
        //if invalid number was added, set the input value to zero and alert user
        if (val < 1 || val > 9) {
          document.getElementById(event.target.id).value = '';
          alert("inputs must be numbers between 1 and 9");
        }
      }

      function focused() {
        for (let i = 0; i < 81; i++) {
          let cell = document.getElementById(`cell${i}`)
          cell.style.background = "#E8E8E8";
        }

        let id = document.activeElement.id;
        let cell = document.getElementById(`cell${id}`);
        cell.style.background = "salmon";
      }

      function keyDown(event) {
        //get row and column of element
        let id = document.activeElement.id;
        let [row, col] = getRowColBoxNum(id, ["row", "col"]);

        let code = event.code;
        let updatedDisplayPuzzle = [...props.displayPuzzle];

        if (code == "Delete" || code == "Backspace" || code == "Digit0" || code == "Numpad0") {
          updatedDisplayPuzzle[row][col] = '';
        }
        else if (code.includes("Digit") || code.includes("Numpad")) {
          updatedDisplayPuzzle[row][col] = code[code.length - 1];
        }

        props.setDisplayPuzzle(updatedDisplayPuzzle);
      }

  return (
    <div class="board">{
      props.puzzle.map((row, rowIndex) =>
        <div className="boardRow">{
          row.map((val, valIndex) =>
            <div class="boardCell" id={`cell${rowIndex * 9 + valIndex}`}>
              <table>
                <tr>
                  <th style={{color:getCandidateColor(1, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(1) ? 1 : ''}</th>
                  <th style={{color:getCandidateColor(2, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(2) ? 2 : ''}</th>
                  <th style={{color:getCandidateColor(3, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(3) ? 3 : ''}</th>
                </tr>
                <tr>
                  <th style={{color:getCandidateColor(4, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(4) ? 4 : ''}</th>
                  <th style={{color:getCandidateColor(5, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(5) ? 5 : ''}</th>
                  <th style={{color:getCandidateColor(6, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(6) ? 6 : ''}</th>
                </tr>
                <tr>
                  <th style={{color:getCandidateColor(7, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(7) ? 7 : ''}</th>
                  <th style={{color:getCandidateColor(8, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(8) ? 8 : ''}</th>
                  <th style={{color:getCandidateColor(9, rowIndex * 9 + valIndex)}}>{props.allCandidates[rowIndex * 9 + valIndex].has(9) ? 9 : ''}</th>
                </tr>
              </table>
              <input type="number" value={val} onFocus={focused} onKeyDown={keyDown} disabled={props.solving} id={rowIndex * 9 + valIndex} style={{background:getSpaceColor(rowIndex * 9 + valIndex)}}></input>
            </div>
          )
        }
        </div>
      )
    }  
    </div>
  )
}

export default Board;

  