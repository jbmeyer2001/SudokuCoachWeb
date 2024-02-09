import './Numpad.css'

function Numpad() {
    return (
        <div class="numpad">
            
            <input type="checkbox"></input>
            <label>notes</label>
            <table>
                <tr>
                    <th><button>1</button></th>
                    <th><button>2</button></th>
                    <th><button>3</button></th>
                </tr>
                <tr>
                    <th><button>4</button></th>
                    <th><button>5</button></th>
                    <th><button>6</button></th>
                </tr>
                <tr>
                    <th><button>7</button></th>
                    <th><button>8</button></th>
                    <th><button>9</button></th>
                </tr>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <button>Show Solution</button>
        </div>
    )
}

export default Numpad;