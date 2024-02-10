import './Numpad.css'

function Numpad(props) {

    function handleNotesCheckboxChange(event) {
        props.setInputNotes(event.target.checked);
    }

    return (
        <div class="numpad">
            <button onClick={props.showSolution} disabled={props.solving}>Show Solution</button>
            <input type="checkbox" onChange={handleNotesCheckboxChange}></input>
            <label>notes</label>
            <table>
                <tr>
                    <th><button id="numpad1" disabled={props.solving} onClick={() => {props.numberInput(1)}}>1</button></th>
                    <th><button id="numpad2" disabled={props.solving} onClick={() => {props.numberInput(2)}}>2</button></th>
                    <th><button id="numpad3" disabled={props.solving} onClick={() => {props.numberInput(3)}}>3</button></th>
                </tr>
                <tr>
                    <th><button id="numpad4" disabled={props.solving} onClick={() => {props.numberInput(4)}}>4</button></th>
                    <th><button id="numpad5" disabled={props.solving} onClick={() => {props.numberInput(5)}}>5</button></th>
                    <th><button id="numpad6" disabled={props.solving} onClick={() => {props.numberInput(6)}}>6</button></th>
                </tr>
                <tr>
                    <th><button id="numpad7" disabled={props.solving} onClick={() => {props.numberInput(7)}}>7</button></th>
                    <th><button id="numpad8" disabled={props.solving} onClick={() => {props.numberInput(8)}}>8</button></th>
                    <th><button id="numpad9" disabled={props.solving} onClick={() => {props.numberInput(9 )}}>9</button></th>
                </tr>
            </table>
        </div>
    )
}

export default Numpad;