const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sudokuSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    puzzle: {
        type: String,
        required: true
    },
    blockrowcol: {
        type: Boolean,
        required: true
    },
    blockrowcolnum: {
        type: Number,
        required: true
    },
    blockblock: {
        type: Boolean,
        required: true
    },
    blockblocknum: {
        type: Number,
        required: true
    },
    nakedsubset: {
        type: Boolean,
        required: true
    },
    nakedsubsetnum: {
        type: Number,
        required: true
    },
    hiddensubset: {
        type: Boolean,
        required: true
    },
    hiddensubsetnum: {
        type: Number,
        required: true
    },
    xwing: {
        type: Boolean,
        required: true
    },
    xwingnum: {
        type: Number,
        required: true
    },
    ywing: {
        type: Boolean,
        required: true
    },
    ywingnum: {
        type: Number,
        required: true
    }
})

const Sudoku = mongoose.model('Sudoku', sudokuSchema);

module.exports = Sudoku;