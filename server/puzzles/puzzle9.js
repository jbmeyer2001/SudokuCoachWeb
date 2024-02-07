const puzzle9 = {
    "startBoard": {
        "0": [
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "1": [
            5,
            0,
            1,
            0,
            3,
            0,
            0,
            9,
            4
        ],
        "2": [
            0,
            0,
            0,
            2,
            0,
            4,
            0,
            0,
            6
        ],
        "3": [
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ],
        "4": [
            0,
            0,
            0,
            8,
            9,
            0,
            0,
            3,
            0
        ],
        "5": [
            1,
            0,
            6,
            0,
            0,
            3,
            0,
            0,
            0
        ],
        "6": [
            0,
            7,
            0,
            0,
            8,
            0,
            0,
            0,
            0
        ],
        "7": [
            8,
            0,
            5,
            0,
            0,
            0,
            9,
            0,
            0
        ],
        "8": [
            0,
            0,
            0,
            4,
            0,
            0,
            3,
            7,
            0
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 0,
        "col": 8,
        "val": 3
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 1,
        "col": 6,
        "val": 2
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 4,
        "val": 4
    },
    "step4": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 8,
        "col": 8,
        "val": 8
    },
    "step5": {
        "step": "BLOCKROWCOL",
        "box": 0,
        "val": 6,
        "set": "COL",
        "col": 1,
        "affectedSpaces": {}
    },
    "step6": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 1,
        "set": "ROW",
        "row": 0,
        "affectedSpaces": {}
    },
    "step7": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 9,
        "set": "ROW",
        "row": 0,
        "affectedSpaces": {}
    },
    "step8": {
        "step": "BLOCKROWCOL",
        "box": 2,
        "val": 7,
        "set": "COL",
        "col": 6,
        "affectedSpaces": {}
    },
    "step9": {
        "step": "BLOCKROWCOL",
        "box": 4,
        "val": 2,
        "set": "COL",
        "col": 5,
        "affectedSpaces": {}
    },
    "step10": {
        "step": "BLOCKROWCOL",
        "box": 8,
        "val": 5,
        "set": "ROW",
        "row": 6,
        "affectedSpaces": {}
    },
    "step11": {
        "step": "BLOCKBLOCK",
        "set": "ROW",
        "row1": 0,
        "row2": 2,
        "box1": 2,
        "box2": 0,
        "val": 7,
        "affectedSpaces": {}
    },
    "step12": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 5
    },
    "step13": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 4,
        "val": 6
    },
    "step14": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 7
    },
    "step15": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 5,
        "val": 8
    },
    "step16": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 1,
        "val": 6
    },
    "step17": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 3,
        "val": 5
    },
    "step18": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 3,
        "val": 6
    },
    "step19": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 6,
        "val": 8
    },
    "step20": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 7,
        "val": 2
    },
    "step21": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 9
    },
    "step22": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 8,
        "val": 7
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 2
    },
    "step24": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 4,
        "val": 7
    },
    "step25": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 1,
        "val": 1
    },
    "step26": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 2,
        "val": 9
    },
    "step27": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 0,
        "val": 6
    },
    "step28": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 5,
        "val": 5
    },
    "step29": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 0,
        "val": 9
    },
    "step30": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 8,
        "val": 9
    },
    "step31": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 6,
        "val": 6
    },
    "step32": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 8,
        "val": 1
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 8,
        "val": 2
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 8,
        "val": 5
    },
    "step35": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 1,
        "val": 5
    },
    "step36": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 3,
        "col": 1,
        "val": 2
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 5,
        "val": 7
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 5,
        "val": 2
    },
    "step39": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 2,
        "val": 8
    },
    "step40": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 0,
        "val": 3
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 0,
        "val": 4
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 0,
        "val": 7
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 2,
        "val": 4
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 7
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 5
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 7,
        "val": 8
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 4
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 2,
        "val": 3
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 1,
        "val": 8
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 7,
        "val": 1
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 6,
        "val": 7
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 6,
        "val": 4
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 7,
        "val": 5
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 2,
        "val": 2
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 6,
        "val": 1
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 7,
        "val": 6
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 5,
        "val": 9
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 5,
        "val": 1
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 3,
        "val": 9
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 3,
        "val": 3
    },
    "step61": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 1,
        "val": 3
    },
    "step62": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 1
    },
    "step63": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 6
    },
    "step64": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 7,
        "val": 4
    },
    "step65": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle9: puzzle9
}