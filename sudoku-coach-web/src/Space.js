import './Space.css'

export default function Space( {val, spaceCandidates} ) {
    return (
        <div className="Space">
            <div class="value">{val}</div>
            <table>
                <tr>
                    <th>{getCandidate(spaceCandidates, 1)}</th>
                    <th>{getCandidate(spaceCandidates, 2)}</th>
                    <th>{getCandidate(spaceCandidates, 3)}</th>
                </tr>
                <tr>
                    <th>{getCandidate(spaceCandidates, 4)}</th>
                    <th>{getCandidate(spaceCandidates, 5)}</th>
                    <th>{getCandidate(spaceCandidates, 6)}</th>
                </tr>
                <tr>
                    <th>{getCandidate(spaceCandidates, 7)}</th>
                    <th>{getCandidate(spaceCandidates, 8)}</th>
                    <th>{getCandidate(spaceCandidates, 9)}</th>
                </tr>
            </table>
        </div>
    );
}

function getCandidate(spaceCandidates, val) {
    return spaceCandidates.has(val) ? val : '';
}