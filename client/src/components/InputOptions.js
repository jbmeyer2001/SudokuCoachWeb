import './InputOptions.css'
import {useState} from 'react'

function InputOptions(props) {
    return (
        <div class="inputOptions">
            <h7>Either input your own puzzle, or search for a puzzle that filters by the patterns required to solve it.</h7>
            <br></br>
            <br></br>
            <button disabled={props.solving} onClick={props.submit}>confirm input</button>
            <br></br>
            <br></br>
            <h7>Patterns:</h7>
            <br></br>
            <div class="pattern-container">
            <input type="checkbox" id="blockcolrow"></input>
            <label style={{color:"green",fontSize:"15px"}}>block to column/row</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="blockblock"></input>
                <label style={{color:"green",fontSize:"15px"}}>block to block</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="nakedsubset"></input>
                <label style={{color:"orange",fontSize:"15px"}}>naked subset</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="hiddensubset"></input>
                <label style={{color:"orange",fontSize:"15px"}}>hidden subset</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="xwing"></input>
                <label style={{color:"red",fontSize:"15px"}}>x-wing</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" ix="ywing"></input>
                <label style={{color:"red",fontSize:"15px"}}>y-wing</label>
            </div>
            <button disabled={props.solving} id="submitbutton" onClick={() => {props.getPuzzle(Math.floor(Math.random() * 10) + 1);alert("this feature is not implemented on the server, selecting random puzzle")}}>search</button>
        </div>
    )
}

export default InputOptions;