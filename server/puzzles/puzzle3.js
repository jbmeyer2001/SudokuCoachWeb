const puzzle3 = {
    "startBoard": {
        "0": [
            0,
            0,
            0,
            0,
            0,
            9,
            0,
            0,
            0
        ],
        "1": [
            0,
            8,
            1,
            0,
            0,
            0,
            0,
            6,
            9
        ],
        "2": [
            0,
            0,
            9,
            0,
            0,
            0,
            5,
            1,
            4
        ],
        "3": [
            8,
            1,
            0,
            0,
            6,
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
            0,
            2,
            0,
            5,
            0
        ],
        "5": [
            7,
            0,
            0,
            9,
            0,
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
            3,
            0,
            7
        ],
        "7": [
            0,
            0,
            0,
            0,
            8,
            0,
            0,
            4,
            0
        ],
        "8": [
            3,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            8
        ]
    },
    "step1": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 2,
        "col": 5,
        "val": 8
    },
    "step2": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 6,
        "col": 2,
        "val": 8
    },
    "step3": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 7,
        "col": 8,
        "val": 5
    },
    "step4": {
        "step": "BLOCKROWCOL",
        "box": 1,
        "val": 6,
        "set": "COL",
        "col": 3,
        "affectedSpaces": {}
    },
    "step5": {
        "step": "BLOCKROWCOL",
        "box": 2,
        "val": 3,
        "set": "ROW",
        "row": 0,
        "affectedSpaces": {}
    },
    "step6": {
        "step": "UNIQUECANDIDATE",
        "set": "BOX",
        "row": 2,
        "col": 1,
        "val": 3
    },
    "step7": {
        "step": "BLOCKROWCOL",
        "box": 0,
        "val": 7,
        "set": "ROW",
        "row": 0,
        "affectedSpaces": {}
    },
    "step8": {
        "step": "UNIQUECANDIDATE",
        "set": "BOX",
        "row": 1,
        "col": 6,
        "val": 7
    },
    "step9": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 3,
        "col": 7,
        "val": 7
    },
    "step10": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 3,
        "col": 6,
        "val": 9
    },
    "step11": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 4,
        "val": 7
    },
    "step12": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 4,
        "val": 2
    },
    "step13": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 0,
        "val": 6
    },
    "step14": {
        "step": "SOLECANDIDATE",
        "row": 2,
        "col": 3,
        "val": 7
    },
    "step15": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 0,
        "col": 3,
        "val": 6
    },
    "step16": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 0,
        "col": 4,
        "val": 1
    },
    "step17": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 1,
        "col": 0,
        "val": 2
    },
    "step18": {
        "step": "UNIQUECANDIDATE",
        "set": "BOX",
        "row": 5,
        "col": 5,
        "val": 1
    },
    "step19": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 4,
        "col": 8,
        "val": 1
    },
    "step20": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 4,
        "col": 2,
        "val": 3
    },
    "step21": {
        "step": "UNIQUECANDIDATE",
        "set": "COL",
        "row": 5,
        "col": 8,
        "val": 6
    },
    "step22": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 6,
        "val": 4
    },
    "step23": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 0,
        "val": 9
    },
    "step24": {
        "step": "SOLECANDIDATE",
        "row": 4,
        "col": 1,
        "val": 6
    },
    "step25": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 0,
        "val": 1
    },
    "step26": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 0,
        "val": 5
    },
    "step27": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 0,
        "val": 4
    },
    "step28": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 6,
        "col": 3,
        "val": 1
    },
    "step29": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 6,
        "col": 5,
        "val": 6
    },
    "step30": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 6,
        "col": 4,
        "val": 4
    },
    "step31": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 5,
        "col": 2,
        "val": 4
    },
    "step32": {
        "step": "UNIQUECANDIDATE",
        "set": "ROW",
        "row": 7,
        "col": 1,
        "val": 9
    },
    "step33": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 1,
        "val": 2
    },
    "step34": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 1,
        "val": 5
    },
    "step35": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 1,
        "val": 7
    },
    "step36": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 2,
        "val": 5
    },
    "step37": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 2,
        "val": 2
    },
    "step38": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 8,
        "val": 3
    },
    "step39": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 8,
        "val": 2
    },
    "step40": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 6,
        "val": 8
    },
    "step41": {
        "step": "SOLECANDIDATE",
        "row": 0,
        "col": 7,
        "val": 3
    },
    "step42": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 4,
        "val": 3
    },
    "step43": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 4,
        "val": 5
    },
    "step44": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 6,
        "val": 2
    },
    "step45": {
        "step": "SOLECANDIDATE",
        "row": 5,
        "col": 7,
        "val": 8
    },
    "step46": {
        "step": "SOLECANDIDATE",
        "row": 6,
        "col": 7,
        "val": 9
    },
    "step47": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 6,
        "val": 6
    },
    "step48": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 2,
        "val": 7
    },
    "step49": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 5,
        "val": 3
    },
    "step50": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 5,
        "val": 4
    },
    "step51": {
        "step": "SOLECANDIDATE",
        "row": 1,
        "col": 3,
        "val": 3
    },
    "step52": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 5,
        "val": 5
    },
    "step53": {
        "step": "SOLECANDIDATE",
        "row": 3,
        "col": 3,
        "val": 4
    },
    "step54": {
        "step": "SOLECANDIDATE",
        "row": 7,
        "col": 3,
        "val": 2
    },
    "step55": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 2,
        "val": 6
    },
    "step56": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 3,
        "val": 5
    },
    "step57": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 4,
        "val": 9
    },
    "step58": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 5,
        "val": 7
    },
    "step59": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 6,
        "val": 1
    },
    "step60": {
        "step": "SOLECANDIDATE",
        "row": 8,
        "col": 7,
        "val": 2
    },
    "step61": {
        "step": "SOLVED"
    }
}

module.exports = {
    puzzle3: puzzle3
}