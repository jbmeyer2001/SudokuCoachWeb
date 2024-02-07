const puzzle7 = {
    "startBoard": {
        "0": [
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            5,
            0
        ],
        "1": [
            0,
            0,
            0,
            0,
            5,
            2,
            1,
            0,
            0
        ],
        "2": [
            0,
            0,
            0,
            9,
            0,
            0,
            0,
            0,
            2
        ],
        "3": [
            1,
            0,
            7,
            8,
            0,
            0,
            0,
            0,
            5
        ],
        "4": [
            0,
            0,
            0,
            7,
            0,
            0,
            0,
            6,
            0
        ],
        "5": [
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            3
        ],
        "6": [
            0,
            0,
            0,
            6,
            0,
            0,
            0,
            8,
            0
        ],
        "7": [
            6,
            0,
            0,
            0,
            8,
            0,
            0,
            1,
            0
        ],
        "8": [
            0,
            8,
            0,
            2,
            7,
            3,
            0,
            0,
            0
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 3,
        "col": 7,
        "val": 2
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 4,
        "col": 8,
        "val": 1
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 2,
        "val": 1
    },
    "step4": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 3,
        "set": "COL",
        "col": 4,
        "affectedSpaces": {}
    },
    "step5": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 8,
        "set": "COL",
        "col": 6,
        "affectedSpaces": {}
    },
    "step6": {
        "step": "BLOCKROWCOL",
        "box": 8,
        "val": 3,
        "set": "COL",
        "col": 6,
        "affectedSpaces": {}
    },
    "step7": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 6,
        "row2": 7,
        "box1": 6,
        "box2": 7,
        "val": 4,
        "affectedSpaces": {}
    },
    "step8": {
        "step": "HIDDENSUBSET",
        "set": "BOX",
        "setNum": 1,
        "affectedSpaces": {},
        "patternCandidates": {},
        "removalCandidates": {}
    },
    "step9": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 6,
        "set": "COL",
        "col": 4,
        "affectedSpaces": {}
    },
    "step10": {
        "step": "HIDDENSUBSET",
        "set": "COL",
        "setNum": 6,
        "affectedSpaces": {},
        "patternCandidates": {},
        "removalCandidates": {}
    },
    "step11": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 5
    },
    "step12": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 0,
        "val": 9
    },
    "step13": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 7,
        "val": 4
    },
    "step14": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 8,
        "val": 6
    },
    "step15": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 1,
        "col": 8,
        "val": 4
    },
    "step16": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 3
    },
    "step17": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 3,
        "val": 1
    },
    "step18": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 4,
        "val": 6
    },
    "step19": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 4
    },
    "step20": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 8,
        "val": 8
    },
    "step21": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 7
    },
    "step22": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 9
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 7
    },
    "step24": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 0,
        "val": 8
    },
    "step25": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 5,
        "val": 8
    },
    "step26": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 6,
        "val": 6
    },
    "step27": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 3
    },
    "step28": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 2,
        "val": 5
    },
    "step29": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 0,
        "val": 7
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 1,
        "val": 1
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 6,
        "val": 4
    },
    "step32": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 6,
        "val": 8
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 0,
        "val": 5
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 3,
        "val": 4
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 6,
        "val": 7
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 7,
        "val": 9
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 6
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 9
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 2,
        "val": 6
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 1,
        "val": 3
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 2
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 3
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 4,
        "val": 9
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 5,
        "val": 6
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 0,
        "val": 2
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 1,
        "val": 4
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 2,
        "val": 9
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 4,
        "val": 3
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 5
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 2,
        "val": 8
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 5,
        "val": 1
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 0,
        "val": 3
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 4,
        "val": 1
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 6,
        "val": 2
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 4
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 5,
        "val": 9
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 8,
        "val": 7
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 1,
        "val": 5
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 7
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 2
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 5
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 4
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 6,
        "val": 3
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 9
    },
    "step65": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle7: puzzle7
}