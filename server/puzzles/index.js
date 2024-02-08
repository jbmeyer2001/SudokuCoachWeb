const puzzle1 = require('./puzzle1');
const puzzle2 = require('./puzzle2');
const puzzle3 = require('./puzzle3');
const puzzle4 = require('./puzzle4');
const puzzle5 = require('./puzzle5');
const puzzle6 = require('./puzzle6');
const puzzle7 = require('./puzzle7');
const puzzle8 = require('./puzzle8');
const puzzle9 = require('./puzzle9');
const puzzle10 = require('./puzzle10');

const puzzles  = {
    1: puzzle1.puzzle1,
    2: puzzle2.puzzle2,
    3: puzzle3.puzzle3,
    4: puzzle4.puzzle4,
    5: puzzle5.puzzle5,
    6: puzzle6.puzzle6,
    7: puzzle7.puzzle7,
    8: puzzle8.puzzle8,
    9: puzzle9.puzzle9,
    10: puzzle10.puzzle10
}

module.exports = {
    puzzles: puzzles
}