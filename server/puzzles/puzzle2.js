const puzzle2 = {
    "startBoard": {
        "0": [
            0,
            0,
            0,
            6,
            4,
            0,
            0,
            9,
            1
        ],
        "1": [
            6,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ],
        "2": [
            0,
            0,
            1,
            0,
            0,
            8,
            7,
            0,
            0
        ],
        "3": [
            7,
            0,
            9,
            0,
            0,
            0,
            3,
            5,
            0
        ],
        "4": [
            1,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ],
        "5": [
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            7
        ],
        "6": [
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
        "7": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "8": [
            0,
            9,
            5,
            0,
            0,
            3,
            0,
            4,
            0
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 2,
        "col": 0,
        "val": 9
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 1,
        "val": 2
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 3,
        "val": 2
    },
    "step4": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 8,
        "val": 4
    },
    "step5": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 1,
        "col": 6,
        "val": 4
    },
    "step6": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 1,
        "val": 4
    },
    "step7": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 2,
        "val": 4
    },
    "step8": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 6,
        "val": 2
    },
    "step9": {
        "step": "UNIQUECANDIDATE",
        "set": "BOX",
        "row": 5,
        "col": 7,
        "val": 1
    },
    "step10": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 5,
        "val": 2
    },
    "step11": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 2,
        "val": 2
    },
    "step12": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 6,
        "col": 5,
        "val": 4
    },
    "step13": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 7,
        "col": 0,
        "val": 4
    },
    "step14": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 7,
        "val": 7
    },
    "step15": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 0,
        "val": 2
    },
    "step16": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 6,
        "set": "ROW",
        "row": 4,
        "affectedSpaces": {}
    },
    "step17": {
        "step": "BLOCKROWCOL",
        "box": 3,
        "val": 6,
        "set": "ROW",
        "row": 5,
        "affectedSpaces": {}
    },
    "step18": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 3,
        "col": 5,
        "val": 6
    },
    "step19": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 1,
        "col": 5,
        "val": 1
    },
    "step20": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 8,
        "set": "ROW",
        "row": 4,
        "affectedSpaces": {}
    },
    "step21": {
        "step": "BLOCKROWCOL",
        "box": 3,
        "val": 8,
        "set": "ROW",
        "row": 5,
        "affectedSpaces": {}
    },
    "step22": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 9,
        "set": "ROW",
        "row": 4,
        "affectedSpaces": {}
    },
    "step23": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 5,
        "val": 9
    },
    "step24": {
        "step": "BLOCKROWCOL",
        "box": 6,
        "val": 7,
        "set": "ROW",
        "row": 6,
        "affectedSpaces": {}
    },
    "step25": {
        "step": "BLOCKROWCOL",
        "box": 8,
        "val": 3,
        "set": "COL",
        "col": 8,
        "affectedSpaces": {}
    },
    "step26": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 1,
        "row2": 2,
        "box1": 1,
        "box2": 2,
        "val": 3,
        "affectedSpaces": {}
    },
    "step27": {
        "step": "NAKEDSUBSET",
        "set": "COL",
        "setNum": 4,
        "patternSpaces": {},
        "affectedSpaces": {},
        "removalCandidates": {}
    },
    "step28": {
        "step": "BLOCKROWCOL",
        "box": 7,
        "val": 5,
        "set": "COL",
        "col": 3,
        "affectedSpaces": {}
    },
    "step29": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 1,
        "col": 1,
        "val": 5
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 1,
        "val": 3
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 3,
        "val": 7
    },
    "step32": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 5
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 7
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 8
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 0,
        "val": 3
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 5
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 2,
        "val": 7
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 4,
        "val": 9
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 3
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 8
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 5
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 8,
        "val": 6
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 3
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 7,
        "val": 6
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 6
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 2,
        "val": 8
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 0,
        "val": 5
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 4,
        "val": 3
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 0,
        "val": 8
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 1
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 1,
        "val": 7
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 8,
        "val": 8
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 8,
        "val": 9
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 6,
        "val": 8
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 3,
        "val": 1
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 3,
        "val": 8
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 4,
        "val": 1
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 4,
        "val": 6
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 3
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 8,
        "val": 5
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 9
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 6,
        "val": 1
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 6
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 5
    },
    "step65": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 4,
        "val": 8
    },
    "step66": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 6,
        "val": 9
    },
    "step67": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 3
    },
    "step68": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 7
    },
    "step69": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 6
    },
    "step70": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle2: puzzle2
}