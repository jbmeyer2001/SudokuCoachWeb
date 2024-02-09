import './InputOptions.css'
import {useState} from 'react'

function InputOptions() {
    const [inputMyOwn, setInputMyOwn] = useState(true);

    function inputOwnBtn() {
        setInputMyOwn(true);
        console.log(inputMyOwn);
    }

    function choosePuzzleBtn() {
        setInputMyOwn(false);
        console.log(inputMyOwn);
    }
    return (
        <div class="inputOptions">
            <button onClick={inputOwnBtn}>Input My Own</button>
            <button onClick={choosePuzzleBtn} style={{border:"1px solid black"}}>Choose Puzzle</button>
            <OptionSelector 
                inputMyOwn={inputMyOwn}
            />
        </div>
    )
}

function OptionSelector(props) {
    if (props.inputMyOwn == true) {
        return (
            <div class="userinput">
                <button>confirm</button>
                <button>reset</button>
            </div>
        );
    }
    else {
        return (
            <div class="options">
                <h3>Patterns:</h3>
                <div class="pattern-container">
                    <input type="checkbox" id="blockcolrow" style={{border:"green"}}></input>
                    <label style={{color:"green"}}>block to column/row</label>
                </div>
                <div class="pattern-container">
                    <input type="checkbox" id="blockblock"></input>
                    <label style={{color:"green"}}>block to block</label>
                </div>
                <hr></hr>
                <div class="pattern-container">
                    <input type="checkbox" id="nakedsubset"></input>
                    <label style={{color:"orange"}}>naked subset</label>
                </div>
                <div class="pattern-container">
                    <input type="checkbox" id="hiddensubset"></input>
                    <label style={{color:"orange"}}>hidden subset</label>
                </div>
                <hr></hr>
                <div class="pattern-container">
                    <input type="checkbox" id="xwing"></input>
                    <label style={{color:"red"}}>x-wing</label>
                </div>
                <div class="pattern-container">
                    <input type="checkbox" ix="ywing"></input>
                    <label style={{color:"red"}}>y-wing</label>
                </div>
                <button id="submitbutton">confirm</button>
            </div>
            
        )
    }
}

export default InputOptions;