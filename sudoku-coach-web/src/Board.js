import Space from './Space.js'
import './Board.css';

export default function Board({puzzle, allCandidates}) {
    return (
        <div className="Board">
            <div class="board">
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[0][0]} spaceCandidates={allCandidates[0]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][1]} spaceCandidates={allCandidates[1]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][2]} spaceCandidates={allCandidates[2]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][3]} spaceCandidates={allCandidates[3]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][4]} spaceCandidates={allCandidates[4]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][5]} spaceCandidates={allCandidates[5]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][6]} spaceCandidates={allCandidates[6]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][7]} spaceCandidates={allCandidates[7]}/></div>
                    <div class="boardCell"><Space val={puzzle[0][8]} spaceCandidates={allCandidates[8]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[1][0]} spaceCandidates={allCandidates[9]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][1]} spaceCandidates={allCandidates[10]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][2]} spaceCandidates={allCandidates[11]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][3]} spaceCandidates={allCandidates[12]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][4]} spaceCandidates={allCandidates[13]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][5]} spaceCandidates={allCandidates[14]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][6]} spaceCandidates={allCandidates[15]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][7]} spaceCandidates={allCandidates[16]}/></div>
                    <div class="boardCell"><Space val={puzzle[1][8]} spaceCandidates={allCandidates[17]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[2][0]} spaceCandidates={allCandidates[18]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][1]} spaceCandidates={allCandidates[19]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][2]} spaceCandidates={allCandidates[20]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][3]} spaceCandidates={allCandidates[21]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][4]} spaceCandidates={allCandidates[22]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][5]} spaceCandidates={allCandidates[23]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][6]} spaceCandidates={allCandidates[24]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][7]} spaceCandidates={allCandidates[25]}/></div>
                    <div class="boardCell"><Space val={puzzle[2][8]} spaceCandidates={allCandidates[26]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[3][0]} spaceCandidates={allCandidates[27]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][1]} spaceCandidates={allCandidates[28]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][2]} spaceCandidates={allCandidates[29]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][3]} spaceCandidates={allCandidates[30]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][4]} spaceCandidates={allCandidates[31]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][5]} spaceCandidates={allCandidates[32]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][6]} spaceCandidates={allCandidates[33]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][7]} spaceCandidates={allCandidates[34]}/></div>
                    <div class="boardCell"><Space val={puzzle[3][8]} spaceCandidates={allCandidates[35]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[4][0]} spaceCandidates={allCandidates[36]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][1]} spaceCandidates={allCandidates[37]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][2]} spaceCandidates={allCandidates[38]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][3]} spaceCandidates={allCandidates[39]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][4]} spaceCandidates={allCandidates[40]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][5]} spaceCandidates={allCandidates[41]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][6]} spaceCandidates={allCandidates[42]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][7]} spaceCandidates={allCandidates[43]}/></div>
                    <div class="boardCell"><Space val={puzzle[4][8]} spaceCandidates={allCandidates[44]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[5][0]} spaceCandidates={allCandidates[45]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][1]} spaceCandidates={allCandidates[46]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][2]} spaceCandidates={allCandidates[47]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][3]} spaceCandidates={allCandidates[48]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][4]} spaceCandidates={allCandidates[49]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][5]} spaceCandidates={allCandidates[50]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][6]} spaceCandidates={allCandidates[51]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][7]} spaceCandidates={allCandidates[52]}/></div>
                    <div class="boardCell"><Space val={puzzle[5][8]} spaceCandidates={allCandidates[53]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[6][0]} spaceCandidates={allCandidates[54]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][1]} spaceCandidates={allCandidates[55]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][2]} spaceCandidates={allCandidates[56]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][3]} spaceCandidates={allCandidates[57]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][4]} spaceCandidates={allCandidates[58]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][5]} spaceCandidates={allCandidates[59]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][6]} spaceCandidates={allCandidates[60]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][7]} spaceCandidates={allCandidates[61]}/></div>
                    <div class="boardCell"><Space val={puzzle[6][8]} spaceCandidates={allCandidates[62]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[7][0]} spaceCandidates={allCandidates[63]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][1]} spaceCandidates={allCandidates[64]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][2]} spaceCandidates={allCandidates[65]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][3]} spaceCandidates={allCandidates[66]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][4]} spaceCandidates={allCandidates[67]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][5]} spaceCandidates={allCandidates[68]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][6]} spaceCandidates={allCandidates[69]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][7]} spaceCandidates={allCandidates[70]}/></div>
                    <div class="boardCell"><Space val={puzzle[7][8]} spaceCandidates={allCandidates[71]}/></div>
                </div>
                <div class="boardRow">
                    <div class="boardCell"><Space val={puzzle[8][0]} spaceCandidates={allCandidates[72]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][1]} spaceCandidates={allCandidates[73]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][2]} spaceCandidates={allCandidates[74]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][3]} spaceCandidates={allCandidates[75]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][4]} spaceCandidates={allCandidates[76]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][5]} spaceCandidates={allCandidates[77]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][6]} spaceCandidates={allCandidates[78]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][7]} spaceCandidates={allCandidates[79]}/></div>
                    <div class="boardCell"><Space val={puzzle[8][8]} spaceCandidates={allCandidates[8]}/></div>
                </div>
            </div>
        </div>
    );
}