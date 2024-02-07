const puzzle10 = {
    "startBoard": {
        "0": [
            0,
            7,
            0,
            8,
            3,
            0,
            0,
            4,
            1
        ],
        "1": [
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
        "2": [
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "3": [
            0,
            4,
            0,
            7,
            0,
            0,
            0,
            6,
            0
        ],
        "4": [
            0,
            2,
            1,
            3,
            0,
            0,
            4,
            0,
            8
        ],
        "5": [
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "6": [
            9,
            0,
            0,
            0,
            0,
            5,
            2,
            8,
            0
        ],
        "7": [
            0,
            0,
            8,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "8": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            9
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 2,
        "col": 3,
        "val": 5
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 7,
        "val": 1
    },
    "step3": {
        "step": "BLOCKROWCOL",
        "box": 3,
        "val": 7,
        "set": "COL",
        "col": 0,
        "affectedSpaces": {}
    },
    "step4": {
        "step": "BLOCKROWCOL",
        "box": 5,
        "val": 2,
        "set": "COL",
        "col": 8,
        "affectedSpaces": {}
    },
    "step5": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 8,
        "val": 6
    },
    "step6": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 6,
        "val": 6
    },
    "step7": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 6,
        "val": 7
    },
    "step8": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 0,
        "val": 7
    },
    "step9": {
        "step": "BLOCKROWCOL",
        "box": 3,
        "val": 6,
        "set": "ROW",
        "row": 5,
        "affectedSpaces": {}
    },
    "step10": {
        "step": "BLOCKBLOCK",
        "set": "COL",
        "col1": 4,
        "col2": 5,
        "box1": 1,
        "box2": 4,
        "val": 1,
        "affectedSpaces": {}
    },
    "step11": {
        "step": "BLOCKBLOCK",
        "set": "COL",
        "col1": 4,
        "col2": 5,
        "box1": 1,
        "box2": 4,
        "val": 6,
        "affectedSpaces": {}
    },
    "step12": {
        "step": "HIDDENSUBSET",
        "set": "COL",
        "setNum": 1,
        "affectedSpaces": {},
        "patternCandidates": {},
        "removalCandidates": {}
    },
    "step13": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 0,
        "val": 6
    },
    "step14": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 8,
        "val": 3
    },
    "step15": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 8,
        "val": 4
    },
    "step16": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 4,
        "val": 7
    },
    "step17": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 5
    },
    "step18": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 8,
        "val": 2
    },
    "step19": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 1
    },
    "step20": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 1,
        "val": 6
    },
    "step21": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 3
    },
    "step22": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 2,
        "val": 9
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 6,
        "val": 5
    },
    "step24": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 9
    },
    "step25": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 6,
        "val": 8
    },
    "step26": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 6,
        "val": 3
    },
    "step27": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 2
    },
    "step28": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 5
    },
    "step29": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 2,
        "val": 4
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 0,
        "val": 1
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 9
    },
    "step32": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 5,
        "val": 7
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 7,
        "val": 9
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 6
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 2
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 0,
        "val": 5
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 6
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 2,
        "val": 2
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 0,
        "val": 8
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 9
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 5,
        "val": 1
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 4,
        "val": 6
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 0,
        "val": 3
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 5,
        "val": 8
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 4,
        "val": 1
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 4,
        "val": 5
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 8
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 1
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 1,
        "val": 5
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 2,
        "val": 7
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 7,
        "val": 3
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 7,
        "val": 7
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 5,
        "val": 4
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 5,
        "val": 9
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 3,
        "val": 2
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 4,
        "val": 4
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 9
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 4,
        "val": 2
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 0,
        "val": 4
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 3
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 0,
        "val": 2
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 3,
        "val": 6
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 8
    },
    "step64": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle10: puzzle10
}