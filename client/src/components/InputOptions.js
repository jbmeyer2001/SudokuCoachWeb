import './InputOptions.css'
import {useState} from 'react'

function InputOptions(props) {

    const [blockColRow, setBlockColRow] = useState(false);
    const [blockBlock, setBlockBlock] = useState(false);
    const [nakedSubset, setNakedSubset] = useState(false);
    const [hiddenSubset, setHiddenSubset] = useState(false);
    const [XWing, setXWing] = useState(false);
    const [YWing, setYWing] = useState(false);
    function onsubmit() {
        props.getPuzzle({
            blockcolrow: blockColRow,
            blockblock: blockBlock,
            nakedsubset: nakedSubset,
            hiddensubset: hiddenSubset,
            xwing: XWing,
            ywing: YWing
        })
    }

    return (
        <div class="inputOptions">
            <h7>Either input your own puzzle, or search for a puzzle that filters by the patterns required to solve it.</h7>
            <br></br>
            <br></br>
            <button disabled={props.solving||props.solved} onClick={props.submit}>confirm input</button>
            <br></br>
            <br></br>
            <h7>Patterns:</h7>
            <br></br>
            <div class="pattern-container">
            <input type="checkbox" id="blockcolrow" onChange={(event) => {setBlockColRow(event.target.checked)}}></input>
            <label style={{color:"green",fontSize:"15px"}}>block to column/row</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="blockblock" onChange={(event) => {setBlockBlock(event.target.checked)}}></input>
                <label style={{color:"green",fontSize:"15px"}}>block to block</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="nakedsubset" onChange={(event) => {setNakedSubset(event.target.checked)}}></input>
                <label style={{color:"orange",fontSize:"15px"}}>naked subset</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="hiddensubset" onChange={(event) => {setHiddenSubset(event.target.checked)}}></input>
                <label style={{color:"orange",fontSize:"15px"}}>hidden subset</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" id="xwing" onChange={(event) => {setXWing(event.target.checked)}}></input>
                <label style={{color:"red",fontSize:"15px"}}>x-wing</label>
            </div>
            <div class="pattern-container">
                <input type="checkbox" ix="ywing" onChange={(event) => {setYWing(event.target.checked)}}></input>
                <label style={{color:"red",fontSize:"15px"}}>y-wing</label>
            </div>
            <button disabled={props.solving||props.solved} id="submitbutton" onClick={onsubmit}>search</button>
        </div>
    )
}

export default InputOptions;