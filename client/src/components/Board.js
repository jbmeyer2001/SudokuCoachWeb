import './Board.css';

function Board(props) {
    //set the color of the space in the App jsx according to color display sets
    function getSpaceColor(space) {
        if (props.activeSpace.space == space) {
          return (props.activeSpace.focused) ? "radial-gradient(lightblue, 90%, black)" : "radial-gradient(white, 90%, black)";
        }
        if (props.displaySpaceGreen[0].has(space)) {
            return "rgba(0,255,0,0.2)";
        }
        if (props.displaySpaceRed[0].has(space)) {
            return "rgba(255,0,0,0.2)";
        }
        if (props.startPuzzle.has(space)) {
          return "#E8E8E8";
          //return "#d4dfed";
        }
        
        return "white";
        //return "#E8E8E8";
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

      function focused() {
        props.setActiveSpace({space:document.activeElement.id,focused:true});
      }

      function blurred() {
        props.setActiveSpace({space:props.activeSpace.space,focused:false});
      }

      function keyDown(event) {
        //get row and column of element
        let id = document.activeElement.id;

        let code = event.code;

        if (code == "Delete" || code == "Backspace" || code == "Digit0" || code == "Numpad0") {
          props.numberInput('');
        }
        else if (code.includes("Digit") || code.includes("Numpad")) {
          props.numberInput(code[code.length - 1]);
        }
      }

  return (
    <div class="board">{
      props.puzzle.map((row, rowIndex) =>
        <div className="boardRow">{
          row.map((val, valIndex) =>
            <div class="boardCell">
              <table id={`cell${rowIndex * 9 + valIndex}`} style={{background:getSpaceColor(rowIndex * 9 + valIndex)}}>
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
              <input type="number" value={val} readOnly={true} onBlur={blurred} onFocus={focused} onKeyDown={keyDown} disabled={props.startPuzzle.has(rowIndex * 9 + valIndex) || props.solving} id={rowIndex * 9 + valIndex}></input>
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

  