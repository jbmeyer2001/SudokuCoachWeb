const puzzle8 = {
    "startBoard": {
        "0": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0
        ],
        "1": [
            0,
            0,
            3,
            8,
            5,
            0,
            1,
            0,
            0
        ],
        "2": [
            0,
            1,
            0,
            0,
            4,
            0,
            0,
            0,
            0
        ],
        "3": [
            0,
            0,
            0,
            2,
            0,
            0,
            9,
            1,
            7
        ],
        "4": [
            2,
            0,
            0,
            0,
            0,
            0,
            3,
            5,
            0
        ],
        "5": [
            0,
            5,
            0,
            3,
            6,
            0,
            0,
            0,
            0
        ],
        "6": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            9,
            1
        ],
        "7": [
            0,
            0,
            0,
            0,
            1,
            0,
            5,
            7,
            0
        ],
        "8": [
            0,
            8,
            4,
            0,
            0,
            0,
            0,
            3,
            0
        ]
    },
    "step1": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 4,
        "val": 8
    },
    "step2": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 2,
        "val": 6
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 5,
        "val": 5
    },
    "step4": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 8,
        "val": 6
    },
    "step5": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 8,
        "val": 2
    },
    "step6": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 6
    },
    "step7": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 2,
        "val": 8
    },
    "step8": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 2,
        "val": 1
    },
    "step9": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 6,
        "val": 2
    },
    "step10": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 6,
        "col": 4,
        "val": 2
    },
    "step11": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 4,
        "val": 3
    },
    "step12": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 8,
        "val": 3
    },
    "step13": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 8,
        "val": 5
    },
    "step14": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 1,
        "col": 8,
        "val": 9
    },
    "step15": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 0,
        "val": 1
    },
    "step16": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 3,
        "val": 5
    },
    "step17": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 4,
        "set": "ROW",
        "row": 5,
        "affectedSpaces": {}
    },
    "step18": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 4,
        "set": "ROW",
        "row": 4,
        "affectedSpaces": {}
    },
    "step19": {
        "step": "BLOCKROWCOL",
        "box": 6,
        "val": 7,
        "set": "ROW",
        "row": 6,
        "affectedSpaces": {}
    },
    "step20": {
        "step": "BLOCKROWCOL",
        "box": 6,
        "val": 9,
        "set": "ROW",
        "row": 7,
        "affectedSpaces": {}
    },
    "step21": {
        "step": "NAKEDSUBSET",
        "set": "COL",
        "setNum": 3,
        "patternSpaces": {},
        "affectedSpaces": {},
        "removalCandidates": {}
    },
    "step22": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 5,
        "val": 4
    },
    "step23": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 5,
        "val": 1
    },
    "step24": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 3,
        "val": 1
    },
    "step25": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 6,
        "set": "COL",
        "col": 5,
        "affectedSpaces": {}
    },
    "step26": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 1,
        "row2": 2,
        "box1": 1,
        "box2": 2,
        "val": 6,
        "affectedSpaces": {}
    },
    "step27": {
        "step": "BLOCKBLOCK",
        "set": "COL",
        "col1": 4,
        "col2": 5,
        "box1": 4,
        "box2": 7,
        "val": 7,
        "affectedSpaces": {}
    },
    "step28": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 0,
        "row2": 2,
        "box1": 1,
        "box2": 2,
        "val": 7,
        "affectedSpaces": {}
    },
    "step29": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 9
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 3,
        "val": 7
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 3,
        "val": 9
    },
    "step32": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 2
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 2,
        "val": 5
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 0,
        "val": 8
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 6,
        "val": 7
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 6
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 4
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 8
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 0,
        "val": 7
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 2
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 5,
        "val": 6
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 5,
        "val": 2
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 0,
        "val": 9
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 1,
        "val": 7
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 4,
        "val": 9
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 5,
        "val": 7
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 7,
        "val": 8
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 8,
        "val": 4
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 7
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 6,
        "val": 4
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 6
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 1,
        "val": 3
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 1,
        "val": 4
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 6
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 0,
        "val": 4
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 0,
        "val": 3
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 0,
        "val": 5
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 5,
        "val": 8
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 0,
        "val": 6
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 9
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 4
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 3
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 8
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 7
    },
    "step65": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 5,
        "val": 9
    },
    "step66": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle8: puzzle8
}