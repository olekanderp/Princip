[
    {
        "id": "63399290a5a0937e",
        "type": "tab",
        "label": "Поток 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "70925c5020b480bc",
        "type": "serial-port",
        "name": "",
        "serialport": "/dev/acr1252",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "1000",
        "bin": "false",
        "out": "time",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "eab445fd79754a83",
        "type": "debug",
        "z": "63399290a5a0937e",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 600,
        "y": 300,
        "wires": []
    },
    {
        "id": "edeb9f319ea897da",
        "type": "inject",
        "z": "63399290a5a0937e",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "2.5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 300,
        "wires": [
            [
                "ef00d8cf34114803"
            ]
        ]
    },
    {
        "id": "ef00d8cf34114803",
        "type": "exec",
        "z": "63399290a5a0937e",
        "command": "node /home/pi/acr1252/nfc2.js",
        "addpay": "",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "read",
        "x": 310,
        "y": 300,
        "wires": [
            [
                "bf78af0aaeba0f8f",
                "e2125594622878e5"
            ],
            [],
            []
        ]
    },
    {
        "id": "1a13102b7d0817f8",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 1",
        "func": "try{\nlet inDate = JSON.parse(msg.payload)\nif (inDate.status === 'close'){\n    return msg;\n}\n\n}catch(e){\n    \n}\nif(msg.payload === \"\"){\n        return msg;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 100,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "bf78af0aaeba0f8f",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 2",
        "func": "var nfc = flow.get(\"nfc\")\ntry{\n    let inDate = JSON.parse(msg.payload)\n    if (inDate.uid){\n        if (nfc !== inDate){\n            msg.payload = inDate\n            flow.set(\"nfc\", inDate)\n            return msg;\n        }\n        \n    }\n}catch(e){\n\n}\n\n\n\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 300,
        "wires": [
            [
                "eab445fd79754a83"
            ]
        ]
    },
    {
        "id": "e2125594622878e5",
        "type": "debug",
        "z": "63399290a5a0937e",
        "name": "debug 2",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 480,
        "y": 260,
        "wires": []
    },
    {
        "id": "071073a457a73fad",
        "type": "inject",
        "z": "63399290a5a0937e",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 400,
        "wires": [
            [
                "59c10355c73dcc59"
            ]
        ]
    },
    {
        "id": "59c10355c73dcc59",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 3",
        "func": "msg.payload = `{\n  atr: <Buffer 3b 8f 80 01 80 4f 0c a0 00 00 03 06 03 00 01 00 00 00 00 6a>,\n  standard: 'TAG_ISO_14443_3',\n  type: 'TAG_ISO_14443_3',\n  uid: '0a5e1075'\n}\n`\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 400,
        "wires": [
            [
                "4b9dd74ab39bb926"
            ]
        ]
    },
    {
        "id": "4b9dd74ab39bb926",
        "type": "json",
        "z": "63399290a5a0937e",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 410,
        "y": 400,
        "wires": [
            [
                "5e0c3759dad0b175"
            ]
        ]
    },
    {
        "id": "5e0c3759dad0b175",
        "type": "debug",
        "z": "63399290a5a0937e",
        "name": "debug 3",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 400,
        "wires": []
    },
    {
        "id": "3579e6c40db92bf4",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 4",
        "func": "msg.origin = `{\n  atr: [\n     59, 143, 128, 1, 128,  79, 12,\n    160,   0,   0, 3,   6,   3,  0,\n      1,   0,   0, 0,   0, 106\n  ],\n  standard: 'TAG_ISO_14443_3',\n  type: 'TAG_ISO_14443_3',\n  uid: '1abf607b',\n  status: 'close'\n}\n\n`\nmsg.payload = msg.origin.replaceAll(\"\\n\", \"\")\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 460,
        "wires": [
            [
                "4b9dd74ab39bb926",
                "4d023eabc7e916f6"
            ]
        ]
    },
    {
        "id": "cc8eab31e99f3fa2",
        "type": "inject",
        "z": "63399290a5a0937e",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 460,
        "wires": [
            [
                "3579e6c40db92bf4"
            ]
        ]
    },
    {
        "id": "4d023eabc7e916f6",
        "type": "debug",
        "z": "63399290a5a0937e",
        "name": "debug 4",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 460,
        "y": 460,
        "wires": []
    },
    {
        "id": "70a6c6cc792abf61",
        "type": "http in",
        "z": "63399290a5a0937e",
        "name": "",
        "url": "/get/nfc",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "8e91f1fb2056718b"
            ]
        ]
    },
    {
        "id": "8e91f1fb2056718b",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 5",
        "func": "msg.payload = flow.get(\"nfc\")\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 140,
        "wires": [
            [
                "d23b67b13c519364",
                "bf70c9b0247867d2"
            ]
        ]
    },
    {
        "id": "d23b67b13c519364",
        "type": "http response",
        "z": "63399290a5a0937e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 530,
        "y": 140,
        "wires": []
    },
    {
        "id": "bf70c9b0247867d2",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "clear NFC",
        "func": "flow.set(\"nfc\", \"\")\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "e9b0198cca64b43e",
        "type": "inject",
        "z": "63399290a5a0937e",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 60,
        "wires": [
            [
                "251cc1eff9d28349"
            ]
        ]
    },
    {
        "id": "251cc1eff9d28349",
        "type": "function",
        "z": "63399290a5a0937e",
        "name": "function 7",
        "func": "flow.set(\"nfc\", \"\")\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "dd9787641ca4dd8f",
        "type": "inject",
        "z": "63399290a5a0937e",
        "name": "30 sec",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 320,
        "y": 180,
        "wires": [
            [
                "bf70c9b0247867d2"
            ]
        ]
    }
]
