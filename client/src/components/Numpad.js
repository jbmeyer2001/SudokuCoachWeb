import './Numpad.css'

function Numpad(props) {

    function handleNotesCheckboxChange(event) {
        props.setInputNotes(event.target.checked);
    }

    return (
        <div class="numpad">
            <input type="checkbox" onChange={handleNotesCheckboxChange}></input>
            <label>notes</label>
            <table>
                <tr>
                    <th><button id="numpad1" onClick={() => {props.numberInput(1, "numpad")}}>1</button></th>
                    <th><button id="numpad2" onClick={() => {props.numberInput(2, "numpad")}}>2</button></th>
                    <th><button id="numpad3" onClick={() => {props.numberInput(3, "numpad")}}>3</button></th>
                </tr>
                <tr>
                    <th><button id="numpad4" onClick={() => {props.numberInput(4, "numpad")}}>4</button></th>
                    <th><button id="numpad5" onClick={() => {props.numberInput(5, "numpad")}}>5</button></th>
                    <th><button id="numpad6" onClick={() => {props.numberInput(6, "numpad")}}>6</button></th>
                </tr>
                <tr>
                    <th><button id="numpad7" onClick={() => {props.numberInput(7, "numpad")}}>7</button></th>
                    <th><button id="numpad8" onClick={() => {props.numberInput(8, "numpad")}}>8</button></th>
                    <th><button id="numpad9" onClick={() => {props.numberInput(9, "numpad" )}}>9</button></th>
                </tr>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={props.showSolution}>Show Solution</button>
        </div>
    )
}

export default Numpad;