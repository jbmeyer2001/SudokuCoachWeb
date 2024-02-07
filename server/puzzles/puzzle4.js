const puzzle4 = {
    "startBoard": {
        "0": [
            8,
            9,
            0,
            0,
            0,
            0,
            0,
            6,
            0
        ],
        "1": [
            0,
            0,
            0,
            0,
            0,
            4,
            2,
            0,
            1
        ],
        "2": [
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            3
        ],
        "3": [
            9,
            7,
            0,
            0,
            8,
            0,
            0,
            0,
            0
        ],
        "4": [
            0,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            0
        ],
        "5": [
            0,
            5,
            0,
            0,
            6,
            0,
            0,
            1,
            0
        ],
        "6": [
            7,
            3,
            0,
            0,
            0,
            9,
            6,
            0,
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
            5,
            0
        ],
        "8": [
            1,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0
        ]
    },
    "step1": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 6
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 6,
        "val": 1
    },
    "step3": {
        "step": "BLOCKROWCOL",
        "box": 6,
        "val": 5,
        "set": "COL",
        "col": 2,
        "affectedSpaces": {}
    },
    "step4": {
        "step": "BLOCKROWCOL",
        "box": 7,
        "val": 5,
        "set": "COL",
        "col": 4,
        "affectedSpaces": {}
    },
    "step5": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 1,
        "col": 0,
        "val": 5
    },
    "step6": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 0,
        "val": 2
    },
    "step7": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 1,
        "val": 1
    },
    "step8": {
        "step": "BLOCKROWCOL",
        "box": 0,
        "val": 3,
        "set": "COL",
        "col": 2,
        "affectedSpaces": {}
    },
    "step9": {
        "step": "BLOCKROWCOL",
        "box": 8,
        "val": 3,
        "set": "ROW",
        "row": 8,
        "affectedSpaces": {}
    },
    "step10": {
        "step": "HIDDENSUBSET",
        "set": "BOX",
        "setNum": 4,
        "affectedSpaces": {},
        "patternCandidates": {},
        "removalCandidates": {}
    },
    "step11": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 1,
        "set": "COL",
        "col": 5,
        "affectedSpaces": {}
    },
    "step12": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 3,
        "set": "COL",
        "col": 5,
        "affectedSpaces": {}
    },
    "step13": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 7,
        "set": "COL",
        "col": 5,
        "affectedSpaces": {}
    },
    "step14": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 5
    },
    "step15": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 6,
        "val": 5
    },
    "step16": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 8,
        "val": 5
    },
    "step17": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 2,
        "val": 6
    },
    "step18": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 5,
        "val": 1
    },
    "step19": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 2,
        "val": 1
    },
    "step20": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 8,
        "val": 6
    },
    "step21": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 0,
        "val": 6
    },
    "step22": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 8
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 5,
        "val": 6
    },
    "step24": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 3,
        "val": 6
    },
    "step25": {
        "step": "BLOCKROWCOL",
        "box": 2,
        "val": 8,
        "set": "COL",
        "col": 7,
        "affectedSpaces": {}
    },
    "step26": {
        "step": "BLOCKROWCOL",
        "box": 2,
        "val": 9,
        "set": "COL",
        "col": 7,
        "affectedSpaces": {}
    },
    "step27": {
        "step": "BLOCKROWCOL",
        "box": 6,
        "val": 4,
        "set": "COL",
        "col": 1,
        "affectedSpaces": {}
    },
    "step28": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 4,
        "row2": 5,
        "box1": 3,
        "box2": 4,
        "val": 3,
        "affectedSpaces": {}
    },
    "step29": {
        "step": "NAKEDSUBSET",
        "set": "ROW",
        "setNum": 0,
        "patternSpaces": {},
        "affectedSpaces": {},
        "removalCandidates": {}
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 3
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 2,
        "val": 7
    },
    "step32": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 7,
        "set": "ROW",
        "row": 2,
        "affectedSpaces": {}
    },
    "step33": {
        "step": "NAKEDSUBSET",
        "set": "COL",
        "setNum": 3,
        "patternSpaces": {},
        "affectedSpaces": {},
        "removalCandidates": {}
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 3,
        "val": 9
    },
    "step35": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 6,
        "val": 9
    },
    "step36": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 1,
        "val": 8
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 2,
        "val": 2
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 9
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 1,
        "val": 4
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 2
    },
    "step41": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 6,
        "col": 8,
        "val": 2
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 7,
        "val": 4
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 1
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 3,
        "val": 2
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 4,
        "val": 1
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 3,
        "val": 4
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 6,
        "val": 3
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 7,
        "val": 2
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 4,
        "val": 2
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 7,
        "val": 7
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 3
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 0,
        "val": 4
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 0,
        "val": 3
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 5,
        "val": 7
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 4,
        "val": 5
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 8
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 7
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 8,
        "val": 4
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 7
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 8,
        "val": 8
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 6,
        "val": 4
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 3
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 8
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 9
    },
    "step65": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 4,
        "val": 3
    },
    "step66": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 3,
        "val": 7
    },
    "step67": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 9
    },
    "step68": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 8
    },
    "step69": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 4,
        "val": 4
    },
    "step70": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 2,
        "val": 5
    },
    "step71": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 7
    },
    "step72": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 8
    },
    "step73": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 7,
        "val": 3
    },
    "step74": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 8,
        "val": 9
    },
    "step75": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle4: puzzle4
}