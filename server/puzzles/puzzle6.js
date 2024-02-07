const puzzle6 = {
    "startBoard": {
        "0": [
            0,
            0,
            7,
            0,
            0,
            0,
            9,
            0,
            0
        ],
        "1": [
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
        ],
        "2": [
            2,
            3,
            4,
            0,
            0,
            0,
            0,
            5,
            6
        ],
        "3": [
            3,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0
        ],
        "4": [
            1,
            4,
            2,
            0,
            8,
            0,
            0,
            0,
            3
        ],
        "5": [
            0,
            0,
            0,
            2,
            0,
            6,
            0,
            0,
            0
        ],
        "6": [
            6,
            5,
            0,
            0,
            2,
            0,
            0,
            0,
            0
        ],
        "7": [
            7,
            0,
            0,
            0,
            0,
            0,
            0,
            8,
            0
        ],
        "8": [
            0,
            0,
            3,
            9,
            5,
            0,
            0,
            0,
            0
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 4,
        "val": 3
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 6,
        "col": 7,
        "val": 3
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 8,
        "col": 0,
        "val": 4
    },
    "step4": {
        "step": "BLOCKROWCOL",
        "box": 0,
        "val": 9,
        "set": "ROW",
        "row": 1,
        "affectedSpaces": {}
    },
    "step5": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 2,
        "col": 4,
        "val": 9
    },
    "step6": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 1,
        "col": 4,
        "val": 7
    },
    "step7": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 6,
        "val": 7
    },
    "step8": {
        "step": "BLOCKROWCOL",
        "box": 2,
        "val": 8,
        "set": "COL",
        "col": 8,
        "affectedSpaces": {}
    },
    "step9": {
        "step": "BLOCKROWCOL",
        "box": 3,
        "val": 6,
        "set": "ROW",
        "row": 3,
        "affectedSpaces": {}
    },
    "step10": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 1,
        "set": "ROW",
        "row": 3,
        "affectedSpaces": {}
    },
    "step11": {
        "step": "BLOCKROWCOL",
        "box": 7,
        "val": 6,
        "set": "ROW",
        "row": 7,
        "affectedSpaces": {}
    },
    "step12": {
        "step": "BLOCKROWCOL",
        "box": 8,
        "val": 9,
        "set": "COL",
        "col": 8,
        "affectedSpaces": {}
    },
    "step13": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 0,
        "row2": 1,
        "box1": 2,
        "box2": 0,
        "val": 1,
        "affectedSpaces": {}
    },
    "step14": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 4,
        "val": 6
    },
    "step15": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 4,
        "val": 1
    },
    "step16": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 9
    },
    "step17": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 2
    },
    "step18": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 6,
        "col": 8,
        "val": 9
    },
    "step19": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 7,
        "col": 3,
        "val": 6
    },
    "step20": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 3,
        "val": 3
    },
    "step21": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 7,
        "col": 5,
        "val": 3
    },
    "step22": {
        "step": "BLOCKROWCOL",
        "box": 7,
        "val": 4,
        "set": "ROW",
        "row": 6,
        "affectedSpaces": {}
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 6,
        "val": 1
    },
    "step24": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 8
    },
    "step25": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 2,
        "val": 5
    },
    "step26": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 2,
        "val": 6
    },
    "step27": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 2,
        "val": 1
    },
    "step28": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 8
    },
    "step29": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 0,
        "val": 5
    },
    "step30": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 0,
        "val": 9
    },
    "step31": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 6
    },
    "step32": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 0,
        "val": 8
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 6,
        "val": 4
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 6,
        "val": 5
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 6,
        "val": 6
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 4
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 1,
        "val": 1
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 2
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 6,
        "val": 8
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 8,
        "val": 7
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 8,
        "val": 1
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 8,
        "val": 2
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 4
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 7,
        "val": 1
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 7,
        "val": 4
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 8,
        "val": 8
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 5
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 5,
        "val": 2
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 8,
        "val": 5
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 3,
        "val": 7
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 3,
        "val": 1
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 3,
        "val": 8
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 5,
        "val": 1
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 5,
        "val": 9
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 1,
        "val": 7
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 7,
        "val": 2
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 5
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 7,
        "val": 9
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 9
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 7,
        "val": 7
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 4
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 5,
        "val": 7
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 5,
        "val": 8
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 7,
        "val": 6
    },
    "step65": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle6: puzzle6
}