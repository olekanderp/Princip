[
    {
        "id": "65742ac9267c5503",
        "type": "tab",
        "label": "Поток 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c15a3dd8.04655",
        "type": "tab",
        "label": "Avto_2",
        "disabled": false,
        "info": ""
    },
    {
        "id": "f276aaac.2ff468",
        "type": "tab",
        "label": "Avto_2 processing_scale1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "81c350920d78ca81",
        "type": "tab",
        "label": "Ворота",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "14d316f51007f56c",
        "type": "tab",
        "label": "Пожежний вхід",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "90c1aded870b9244",
        "type": "tab",
        "label": "Пожежний вихыд",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d3668b4071d28b7f",
        "type": "tab",
        "label": "Світлофори",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "eb5f387757a7d2eb",
        "type": "tab",
        "label": "Екран",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "8802b36fb32ba5be",
        "type": "ui_tab",
        "name": "Main",
        "icon": "dashboard",
        "disabled": true,
        "hidden": true
    },
    {
        "id": "4dc03f2b2fcfbb9f",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey",
                "palette": "light"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "true",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "25c52be0.ae7764",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "15fb11e63dc2da4e",
        "type": "ui_group",
        "d": true,
        "name": "Default",
        "tab": "8802b36fb32ba5be",
        "order": 1,
        "disp": true,
        "width": "15",
        "collapse": false,
        "className": ""
    },
    {
        "id": "3f05b7c4137ac6b3",
        "type": "ui_group",
        "name": "Weight",
        "tab": "fa890cb01fe3b58c",
        "order": 1,
        "disp": false,
        "width": "22",
        "collapse": false,
        "className": ""
    },
    {
        "id": "fa890cb01fe3b58c",
        "type": "ui_tab",
        "name": "AgroRegion1",
        "icon": "dashboard",
        "order": 5,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "92a66c1dbf824c6c",
        "type": "tcp in",
        "z": "65742ac9267c5503",
        "name": "",
        "server": "client",
        "host": "172.16.9.237",
        "port": "9761",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 140,
        "y": 160,
        "wires": [
            [
                "f3831e12fe87650e",
                "8d55abc96ce22502"
            ]
        ]
    },
    {
        "id": "2d736949a6fe0cb6",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 3",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 160,
        "wires": []
    },
    {
        "id": "5b62f3ff4e4d2a8d",
        "type": "comment",
        "z": "65742ac9267c5503",
        "name": "Зчитування карти на вагах",
        "info": "[ 0 ]\n05.04.2023, 11:49:23node: debug 4\nmsg.payload : buffer[1]\n[ 72 ]\n05.04.2023, 11:49:23node: debug 4\nmsg.payload : buffer[2]\n[ 182, 138 ]",
        "x": 160,
        "y": 120,
        "wires": []
    },
    {
        "id": "59a65b9737a99e4c",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "parse Date card",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 700,
        "y": 160,
        "wires": [
            [
                "2d736949a6fe0cb6",
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "f3831e12fe87650e",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 4",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 380,
        "y": 120,
        "wires": []
    },
    {
        "id": "8d55abc96ce22502",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "function 5",
        "func": "var card = flow.get('card')\nvar inDate = msg.payload \nfor (let el of inDate){\n    card.push(el)\n}\n\nflow.set('card', card)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 160,
        "wires": [
            [
                "0c8a3389f9a083e8"
            ]
        ]
    },
    {
        "id": "0c8a3389f9a083e8",
        "type": "trigger",
        "z": "65742ac9267c5503",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "payl",
        "duration": "1",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 510,
        "y": 160,
        "wires": [
            [
                "59a65b9737a99e4c",
                "c64c228161e8b15c"
            ]
        ]
    },
    {
        "id": "463d6a3150fddf52",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "init",
        "func": "\nflow.set('card', [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "d5ab17b1ef01775e",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "y": 40,
        "wires": [
            [
                "463d6a3150fddf52"
            ]
        ]
    },
    {
        "id": "c1d94071c156f84f",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": msg.payload,\n    \"control_point_num\": 10,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 280,
        "wires": [
            [
                "6d3315ef144ac017",
                "9db5fe1e8cc70463"
            ]
        ]
    },
    {
        "id": "6d3315ef144ac017",
        "type": "http request",
        "z": "65742ac9267c5503",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.7/bc/hs/elevator",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 750,
        "y": 280,
        "wires": [
            [
                "da0894534398d724"
            ]
        ]
    },
    {
        "id": "da0894534398d724",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 18",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 900,
        "y": 280,
        "wires": []
    },
    {
        "id": "1f5850c634a72f72",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 280,
        "y": 280,
        "wires": [
            [
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "9a4ac7f9749d4f32",
        "type": "comment",
        "z": "65742ac9267c5503",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 730,
        "y": 240,
        "wires": []
    },
    {
        "id": "9db5fe1e8cc70463",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 740,
        "y": 320,
        "wires": []
    },
    {
        "id": "4a0a82c4a1e9a734",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "payload": "8711111",
        "payloadType": "str",
        "x": 270,
        "y": 320,
        "wires": [
            [
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "2731460c75dc6def",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "payload": "1234567",
        "payloadType": "str",
        "x": 280,
        "y": 360,
        "wires": [
            [
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "8fb4b6d52b451349",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 280,
        "y": 400,
        "wires": [
            [
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "5a37eb4ec73267f7",
        "type": "comment",
        "z": "65742ac9267c5503",
        "name": "",
        "info": "[ 0 ]\n\n[ 134 ]\n\n[ 84, 100 ]",
        "x": 110,
        "y": 220,
        "wires": []
    },
    {
        "id": "d3b26106df131914",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "function 25",
        "func": "msg.payload = Buffer.from(\"00865464\", 'hex')\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 520,
        "wires": [
            [
                "c1bf99479132f7f3",
                "260c09cbf09cd90b"
            ]
        ]
    },
    {
        "id": "76faa579817d6d04",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "x": 140,
        "y": 520,
        "wires": [
            [
                "d3b26106df131914"
            ]
        ]
    },
    {
        "id": "c1bf99479132f7f3",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "parse Date card",
        "func": "//var tmp = flow.get(\"card\")\nvar tmp = msg.payload\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\n//flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 520,
        "wires": [
            [
                "bb7ecf6357180b92"
            ]
        ]
    },
    {
        "id": "bb7ecf6357180b92",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 92",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 520,
        "wires": []
    },
    {
        "id": "260c09cbf09cd90b",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 93",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 520,
        "y": 480,
        "wires": []
    },
    {
        "id": "c64c228161e8b15c",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 94",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 120,
        "wires": []
    },
    {
        "id": "a48e72209a12ba1f",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "function 26",
        "func": "const hexString = \"008550ad\";\n\n// Перетворення рядка у десяткове число\nconst decimalValue = parseInt(hexString, 16);\nmsg.payload = decimalValue\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 580,
        "wires": [
            [
                "8b4e64f983b371ee"
            ]
        ]
    },
    {
        "id": "9263a9683c4dea67",
        "type": "inject",
        "z": "65742ac9267c5503",
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
        "y": 580,
        "wires": [
            [
                "dbaab259a5724724"
            ]
        ]
    },
    {
        "id": "dbaab259a5724724",
        "type": "function",
        "z": "65742ac9267c5503",
        "name": "function 27",
        "func": "msg.payload = Buffer.from(\"008550ad\", 'hex')\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 580,
        "wires": [
            [
                "a48e72209a12ba1f"
            ]
        ]
    },
    {
        "id": "8b4e64f983b371ee",
        "type": "debug",
        "z": "65742ac9267c5503",
        "name": "debug 95",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 580,
        "wires": []
    },
    {
        "id": "df0cc826.bd1f68",
        "type": "inject",
        "z": "c15a3dd8.04655",
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
        "repeat": "2",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 127.14286041259766,
        "y": 214.28571224212646,
        "wires": [
            [
                "3ef434f0.9ae70c",
                "239cd42a199c180d"
            ]
        ]
    },
    {
        "id": "84b55b7c.21b408",
        "type": "function",
        "z": "c15a3dd8.04655",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\n\nflow.set('currentWeight',currentWeight);\n\nmsg.payload = currentWeight;\nglobal.set(\"scaleOn\", true)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 280,
        "wires": [
            [
                "87bdf279.85d97",
                "7a276ef9.22cdb"
            ]
        ]
    },
    {
        "id": "72877e13.af569",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "Device level",
        "info": "",
        "x": 101.06024932861328,
        "y": 172.32699966430664,
        "wires": []
    },
    {
        "id": "5eb8b151.b725c",
        "type": "inject",
        "z": "c15a3dd8.04655",
        "name": "init",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "init",
        "payloadType": "str",
        "x": 102.48881530761719,
        "y": 122.32700252532959,
        "wires": [
            [
                "8289e02f.bd824"
            ]
        ]
    },
    {
        "id": "cb911dcf.91f7e",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "INITIALIZING Автоваги 2 ()",
        "info": "",
        "x": 153.91738891601562,
        "y": 38.041287422180176,
        "wires": []
    },
    {
        "id": "8289e02f.bd824",
        "type": "function",
        "z": "c15a3dd8.04655",
        "name": "Scale PARSER",
        "func": "flow.set('inputString', \"G01W\" + String.fromCharCode(13) + String.fromCharCode(10));\nflow.set('parser',function(v){\n        v = v.substring(4, v.length)\n        v = Number(v) * 1000\n       //return v\n       return Number(v.toFixed());\n    }\n  );\n//global.set('scale_id_1','7b633b9c-b05c-2a3b-f500-7f991f019000');\n//global.set('ip','');\nglobal.set('video_camera_url','');\nglobal.set(\"scaleOn\", true)\nglobal.set(\"url1C\", \"172.16.9.7/bc/hs/elevator\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 292.4888153076172,
        "y": 122.32700252532959,
        "wires": [
            []
        ]
    },
    {
        "id": "3ef434f0.9ae70c",
        "type": "debug",
        "z": "c15a3dd8.04655",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 370,
        "y": 200,
        "wires": []
    },
    {
        "id": "6c4e5ba0.fb5444",
        "type": "function",
        "z": "c15a3dd8.04655",
        "name": "time_rasp",
        "func": "var time = new Date();\nflow.set(\"time_rasp\", time);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 320,
        "y": 440,
        "wires": [
            [
                "ece42a48.a7e8c8"
            ]
        ]
    },
    {
        "id": "a4e073ed.0f8b5",
        "type": "inject",
        "z": "c15a3dd8.04655",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 440,
        "wires": [
            [
                "6c4e5ba0.fb5444"
            ]
        ]
    },
    {
        "id": "ece42a48.a7e8c8",
        "type": "function",
        "z": "c15a3dd8.04655",
        "name": "sub time",
        "func": "var weigth_time = flow.get(\"weigth_time\");\nvar time_rasp = flow.get(\"time_rasp\");\n\nvar sub = time_rasp - weigth_time;\n//msg.payload = {\n//    sub: time_rasp - weigth_time,\n//    weigth_time: weigth_time,\n//    time_rasp: time_rasp\n//}\n\n    if(sub > 5000){\n        msg.payload = 0;\n        global.set(\"scaleOn\", false)\n        return msg;\n    }\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 440,
        "wires": [
            [
                "49430c03.45a024",
                "f2c42f43.7a38a"
            ]
        ]
    },
    {
        "id": "49430c03.45a024",
        "type": "debug",
        "z": "c15a3dd8.04655",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 630,
        "y": 440,
        "wires": []
    },
    {
        "id": "87bdf279.85d97",
        "type": "debug",
        "z": "c15a3dd8.04655",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 670,
        "y": 240,
        "wires": []
    },
    {
        "id": "e7782a69.ee9868",
        "type": "inject",
        "z": "c15a3dd8.04655",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 400,
        "wires": [
            [
                "6229f4b1.8460cc"
            ]
        ]
    },
    {
        "id": "6229f4b1.8460cc",
        "type": "function",
        "z": "c15a3dd8.04655",
        "name": "weigth_time",
        "func": "flow.set('weigth_time',new Date());\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "7a276ef9.22cdb",
        "type": "delay",
        "z": "c15a3dd8.04655",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "outputs": 1,
        "x": 640,
        "y": 280,
        "wires": [
            [
                "f2c42f43.7a38a"
            ]
        ]
    },
    {
        "id": "bf376fb9.2977a",
        "type": "inject",
        "z": "c15a3dd8.04655",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 580,
        "wires": [
            [
                "ab325f63.4b855"
            ]
        ]
    },
    {
        "id": "ab325f63.4b855",
        "type": "exec",
        "z": "c15a3dd8.04655",
        "command": "uptime",
        "addpay": false,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "name": "",
        "x": 283,
        "y": 588.5,
        "wires": [
            [
                "fa0801dc.206e5"
            ],
            [
                "fa0801dc.206e5"
            ],
            [
                "fa0801dc.206e5"
            ]
        ]
    },
    {
        "id": "fa0801dc.206e5",
        "type": "debug",
        "z": "c15a3dd8.04655",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 451,
        "y": 582,
        "wires": []
    },
    {
        "id": "90759183.0f59a",
        "type": "inject",
        "z": "c15a3dd8.04655",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 680,
        "wires": [
            [
                "1f15ad8.180dc53"
            ]
        ]
    },
    {
        "id": "1f15ad8.180dc53",
        "type": "exec",
        "z": "c15a3dd8.04655",
        "command": "date",
        "addpay": false,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "name": "",
        "x": 292,
        "y": 685.5,
        "wires": [
            [
                "6119530.241bdac"
            ],
            [
                "6119530.241bdac"
            ],
            [
                "6119530.241bdac"
            ]
        ]
    },
    {
        "id": "6119530.241bdac",
        "type": "debug",
        "z": "c15a3dd8.04655",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 460,
        "y": 679,
        "wires": []
    },
    {
        "id": "fa1b49c8.fac258",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "Скільки працює від останнього перезапуску",
        "info": "",
        "x": 310,
        "y": 540,
        "wires": []
    },
    {
        "id": "3584781a.3fd5c8",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "Локальна дата на RPI",
        "info": "",
        "x": 240,
        "y": 640,
        "wires": []
    },
    {
        "id": "d6fb1e32.f1952",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "Відправка штучного 0 при відстуності ваги певний час",
        "info": "",
        "x": 310,
        "y": 360,
        "wires": []
    },
    {
        "id": "62cab904.089288",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "На головний модуль",
        "info": "",
        "x": 880,
        "y": 220,
        "wires": []
    },
    {
        "id": "f2c42f43.7a38a",
        "type": "link out",
        "z": "c15a3dd8.04655",
        "name": "Вага",
        "mode": "link",
        "links": [
            "30cbb85af99caa5c",
            "ec7bf463.b781d8"
        ],
        "x": 842.1428604125977,
        "y": 274.28571224212646,
        "wires": []
    },
    {
        "id": "a12cb5fc.b15498",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "Парсинг вагів",
        "info": "",
        "x": 261.42858505249023,
        "y": 81.42857360839844,
        "wires": []
    },
    {
        "id": "239cd42a199c180d",
        "type": "tcp request",
        "z": "c15a3dd8.04655",
        "name": "",
        "server": "172.16.9.235",
        "port": "9761",
        "out": "char",
        "ret": "string",
        "splitc": "\\n",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 200,
        "y": 280,
        "wires": [
            [
                "84b55b7c.21b408",
                "6229f4b1.8460cc"
            ]
        ]
    },
    {
        "id": "f1899815.538e68",
        "type": "file",
        "z": "f276aaac.2ff468",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "x": 480,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "1e18ab76.be84e5",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "main config",
        "func": "flow.set('prevWeight',null);\nflow.set('transaction',null);\nflow.set('transactionData',[]);\nflow.set('transactionMaxWeight',null);\nflow.set('transactionHasMinWeight',null);\nflow.set('transactionHasMaxWeight',null);\nflow.set('transactionHasMaxDuration',null);\nflow.set('lasttimedata', new Date());\nflow.set('checkHealth',null);\nflow.set('transactionWaybill',null);\nflow.set('transactionAccWeight', null);\nflow.set('transactionHasOverLoad', null);\nflow.set('transactionOperationName', null);\n\n\nflow.set('truck_id', \"\");\nflow.set('device_id', \"\");\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "9e1938e3.72df58",
        "type": "inject",
        "z": "f276aaac.2ff468",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 150,
        "y": 120,
        "wires": [
            [
                "a1f4ea44.487ef8",
                "9f871452.cd61b8"
            ]
        ]
    },
    {
        "id": "a1f4ea44.487ef8",
        "type": "file in",
        "z": "f276aaac.2ff468",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "format": "utf8",
        "x": 320,
        "y": 120,
        "wires": [
            [
                "48015644.4bd508"
            ]
        ]
    },
    {
        "id": "37b04a11.835e86",
        "type": "inject",
        "z": "f276aaac.2ff468",
        "name": "DEMO",
        "repeat": "10800",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 160,
        "y": 80,
        "wires": [
            [
                "5e78c391.19d90c"
            ]
        ]
    },
    {
        "id": "5e78c391.19d90c",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_in_minus_id':'8DB9B239DF5252F0E055000000000001',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_on_id': '85A2CC45702A2DD1E0533300000A0C94',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'event_driver_in':'8E68D8D8B2977181E055000000000001',\n    'event_over_load':'B3EB5F800EFD2620E0530101007F8A05',\n    'snapshot_events':['80096EF60C186574E0533300000ADBA5','80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0', \"8E68D8D8B2977181E055000000000001\",\"B3EB5F800EFD2620E0530101007F8A05\"],\n    'main_host':global.get('urlSkelia'),\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':60000,\n    'maxDuration':600000,\n    'minWeight':-40,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':40,\n    'driverWeight':80,\n    'overLoadWeight': 200,\n    'stableDiff': 60\n};\nmsg.payload = device_config;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 80,
        "wires": [
            [
                "f1899815.538e68"
            ]
        ]
    },
    {
        "id": "48015644.4bd508",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('event_driver_in', device_config.event_driver_in);\nflow.set('event_over_load',device_config.event_over_load);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\nflow.set('driverWeight',device_config.driverWeight);\nflow.set('overLoadWeight', device_config.overLoadWeight);\nflow.set('stableDiff', device_config.stableDiff);\n\nmsg.payload = {\n\tscale_id: flow.get('scale_id'),\n\tevent_move_in_id: flow.get('event_move_in_id'),\n\tevent_move_in_minus_id: flow.get('event_move_in_minus_id'),\n\tevent_move_out_id: flow.get('event_move_out_id'),\n\tevent_max_weight_id: flow.get('event_max_weight_id'),\n\tevent_off_id: flow.get('event_off_id'),\n\tevent_on_id: flow.get('event_on_id'),\n\tevent_max_duration: flow.get('event_max_duration'),\n\tevent_fake_traffic: flow.get('event_fake_traffic'),\n\tevent_driver_in: flow.get('event_driver_in'),\n\tevent_over_load: flow.get('event_over_load'),\n\tmain_host: flow.get('main_host'),\n\tevent_url: flow.get('event_url'),\n\tstate_url: flow.get('state_url'),\n\tmaxWeight: flow.get('maxWeight'),\n\tminWeight: flow.get('minWeight'),\n\tmaxDuration: flow.get('maxDuration'),\n\tcheckHealthTimeout: flow.get('checkHealthTimeout'),\n\tevent_get_weight_acc: flow.get('event_get_weight_acc'),\n\tevent_min_weight: flow.get('event_min_weight'),\n\tminTriggerWeight: flow.get('minTriggerWeight'),\n\tsnapshot_url: flow.get('snapshot_url'),\n\tsnapshot_events: flow.get('snapshot_events'),\n\tdriverWeight: flow.get('driverWeight'),\n\toverLoadWeight: flow.get('overLoadWeight'),\n\tstableDiff: flow.get('stableDiff')\n};\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 120,
        "wires": [
            [
                "465708a1.16d5a8"
            ]
        ]
    },
    {
        "id": "465708a1.16d5a8",
        "type": "json",
        "z": "f276aaac.2ff468",
        "name": "",
        "x": 630,
        "y": 120,
        "wires": [
            [
                "f0e633fd.6fee1"
            ]
        ]
    },
    {
        "id": "f0e633fd.6fee1",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "IN device config",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 780,
        "y": 120,
        "wires": []
    },
    {
        "id": "9f871452.cd61b8",
        "type": "trigger",
        "z": "f276aaac.2ff468",
        "name": "",
        "op1": "1",
        "op2": "0",
        "op1type": "str",
        "op2type": "str",
        "duration": "0",
        "extend": false,
        "units": "ms",
        "reset": "",
        "outputs": 1,
        "x": 320,
        "y": 160,
        "wires": [
            [
                "1e18ab76.be84e5"
            ]
        ]
    },
    {
        "id": "1d2e62e5.81b74d",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Ініціалізаця при старті",
        "info": "",
        "x": 180,
        "y": 40,
        "wires": []
    },
    {
        "id": "a1acc446.6a3a78",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага, кг: ' + msg.metadata.weight;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 520,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "5280d3dc.b1d54c",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "switch max weight",
        "property": "transactionHasMaxWeight",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 470,
        "y": 440,
        "wires": [
            [
                "a1acc446.6a3a78"
            ]
        ]
    },
    {
        "id": "8be6aaf2.09a328",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "events payload",
        "func": "// var event_id = msg.event_id;\n// var scale_id = global.get('scale_id_1');\n// var snapshot_events = flow.get('snapshot_events');\n// var snapshot = false;\n\n// if (snapshot_events.indexOf(event_id)>=0){\n//     snapshot = true;\n// }\n\n// msg.payload = {\n//     'event':{\n//         'id':msg.event_id\n//     },\n//     'devices':[{'id':scale_id}],\n//     'data':msg.metadata,\n//     'description':msg.description\n// }\n\n// msg.headers = {\n//     \"content-type\":\"application/json\"\n// }\n\n// msg.url = flow.get('main_host')+flow.get('event_url');\n// msg.main_host = flow.get('main_host');\n// msg.event_url = flow.get('event_url');\n// msg.snapshot = snapshot;\n// return msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1040,
        "y": 480,
        "wires": [
            [
                "45fc5554.9adcfc"
            ]
        ]
    },
    {
        "id": "db5ec004.964cb",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar transactionOperationName = flow.get('transactionOperationName');\nvar stableDiff = flow.get('stableDiff');//дельта стабільності\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar operation_name_income = \"Приход (авто)\";\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\nvar transactionAccWeight = flow.get('transactionAccWeight');//облікова вага\nvar overLoadWeight = flow.get('overLoadWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 400) && (weight > 400) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 200) && (weight <=200) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionHasOverLoad',null);\n        flow.set('transactionOperationName',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n        flow.set('transactionAccWeight', null);//облікова вага\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nmsg.stable = true;\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if ((transactionData[i] - transactionData[i-1]) > stableDiff || (transactionData[i] - transactionData[i-1]) < -stableDiff){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable':msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'transactionAccWeight':transactionAccWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false,\n    'transactionOperationName':transactionOperationName\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nif(transactionAccWeight && transactionOperationName!==operation_name_income){\n    \n   flow.set('transactionHasOverLoad',(weight-transactionAccWeight)>overLoadWeight);\n   \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 420,
        "wires": [
            [
                "bae4ed36.d5b1e",
                "5280d3dc.b1d54c",
                "4d761ea9.be13b",
                "4d061575.dc344c",
                "afa4ad5f.f9a8a"
            ]
        ]
    },
    {
        "id": "55a2ac0a.e03a74",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar driverWeight = flow.get('driverWeight');\nvar buisness_data = msg.req.query;\n\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\n\n//check driver in a car\nvar driver_in = false;\nmsg.driverWeight = driverWeight;\nif((transactionMaxWeight - msg.metadata.weight) < driverWeight){\n    driver_in = true;\n}\n\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = ' '+buisness_data.operation_name+'. '+buisness_data.operation_type+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер авто: \"+buisness_data.truck1+\" \"+buisness_data.truck2+\" \"+buisness_data.item_name + \", ТТН: \" + buisness_data.waybill;\nmsg.transactionMetadata = transactionMetadata;\nmsg.driver_in = driver_in;\n\nflow.set('transactionAccWeight',  msg.metadata.weight);//облікова вага\nflow.set('transactionOperationName',  msg.metadata.operation_name);//вид операції\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 900,
        "wires": [
            [
                "52d23361.8f222c",
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "cd741c87.42fba",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "25c52be0.ae7764",
        "x": 1300,
        "y": 480,
        "wires": [
            [
                "bd317662.ca0918"
            ]
        ]
    },
    {
        "id": "45fc5554.9adcfc",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "IN event",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 1215.7142868041992,
        "y": 404.2857155799866,
        "wires": []
    },
    {
        "id": "f4996120.46114",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 440,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "a90fc631.2c45c8",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 760,
        "wires": [
            [
                "322e886a.991e28"
            ]
        ]
    },
    {
        "id": "34cff2d3.7e264e",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 720,
        "wires": [
            [
                "8915ec35.96893"
            ]
        ]
    },
    {
        "id": "ad965660.fec278",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Максимальна вага: ' + msg.metadata.transactionMaxWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 480,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "f23f38d6.db6288",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах, сек: ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 560,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "f2720d5b.c425f",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "empty waybill",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + Math.round(msg.metadata.duration/60)+ 'хв.'+ \" Максимальна вага: \" + msg.metadata.transactionMaxWeight + \" кг.\";\n//metadata.transactionMaxWeight\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 400,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "82bb8d06.6ab59",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага, кг: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 600,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "a3173ba8.19f038",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "move in minus",
        "func": "msg.event_id = flow.get('event_move_in_minus_id');\nmsg.description = 'Заїзд із мінусом. ' + msg.prevWeight +' кг.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 360,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "bae4ed36.d5b1e",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "switch move",
        "property": "on",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 452,
        "y": 402.9999885559082,
        "wires": [
            [
                "f4996120.46114"
            ],
            [
                "ad965660.fec278",
                "698e5eae.1c49f",
                "8fdec140.d3d3"
            ]
        ]
    },
    {
        "id": "4d761ea9.be13b",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "max duration",
        "property": "transactionHasMaxDuration",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 450,
        "y": 480,
        "wires": [
            [
                "f23f38d6.db6288"
            ]
        ]
    },
    {
        "id": "4d061575.dc344c",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "switch min weight",
        "property": "transactionHasMinWeight",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 470,
        "y": 520,
        "wires": [
            [
                "82bb8d06.6ab59"
            ]
        ]
    },
    {
        "id": "afa4ad5f.f9a8a",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "switch minus in",
        "property": "is_minus",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 460,
        "y": 360,
        "wires": [
            [
                "a3173ba8.19f038"
            ]
        ]
    },
    {
        "id": "52d23361.8f222c",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "driver_in",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 790,
        "y": 900,
        "wires": [
            [
                "7b88e430.b6f2fc"
            ]
        ]
    },
    {
        "id": "dea09e47.ce5d",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/getWeightFull",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 900,
        "wires": [
            [
                "601b2569.25137c",
                "55a2ac0a.e03a74",
                "29bb115e.24d43e"
            ]
        ]
    },
    {
        "id": "bd317662.ca0918",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 1443,
        "y": 480,
        "wires": []
    },
    {
        "id": "7b88e430.b6f2fc",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "driver_in event",
        "func": "msg.event_id = flow.get('event_driver_in');\nmsg.description = 'При зважуванні водій в кабіні. Вага: ' + msg.metadata.weight+\"кг. Номер авто: \"+msg.metadata.truck1+\" \"+msg.metadata.truck2+\" \"+msg.metadata.item_name;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 980,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "44c44905.b6abd8",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "checkHealth",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 550,
        "y": 740,
        "wires": [
            [
                "34cff2d3.7e264e"
            ],
            [
                "a90fc631.2c45c8"
            ]
        ]
    },
    {
        "id": "698e5eae.1c49f",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "waybill",
        "property": "metadata.waybill",
        "propertyType": "msg",
        "rules": [
            {
                "t": "null"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 660,
        "y": 400,
        "wires": [
            [
                "f2720d5b.c425f"
            ]
        ]
    },
    {
        "id": "601b2569.25137c",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.reader){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 940,
        "wires": [
            [
                "a990aa96.da0748"
            ]
        ]
    },
    {
        "id": "82ca3549.b2b698",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 740,
        "wires": [
            [
                "44c44905.b6abd8"
            ]
        ]
    },
    {
        "id": "a990aa96.da0748",
        "type": "http response",
        "z": "f276aaac.2ff468",
        "name": "",
        "x": 610,
        "y": 940,
        "wires": []
    },
    {
        "id": "763202bb.5adfbc",
        "type": "inject",
        "z": "f276aaac.2ff468",
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
        "onceDelay": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 160,
        "y": 740,
        "wires": [
            [
                "82ca3549.b2b698"
            ]
        ]
    },
    {
        "id": "33aba55d.fdd87a",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Отримання ваги",
        "info": "",
        "x": 140,
        "y": 980,
        "wires": []
    },
    {
        "id": "1c44ab0a.d18855",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "over_load",
        "func": "msg.event_id = flow.get('event_over_load');\nmsg.description = 'Можливий досип після зважування. Максимальная вага: ' + msg.metadata.transactionMaxWeight + \"кг. Облікова вага: \" + msg.metadata.transactionAccWeight + \"кг.\";\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 320,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "8fdec140.d3d3",
        "type": "switch",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "transactionHasOverLoad",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 650,
        "y": 320,
        "wires": [
            [
                "1c44ab0a.d18855"
            ]
        ]
    },
    {
        "id": "8915ec35.96893",
        "type": "delay",
        "z": "f276aaac.2ff468",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "3",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "outputs": 1,
        "x": 920,
        "y": 720,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "322e886a.991e28",
        "type": "delay",
        "z": "f276aaac.2ff468",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "3",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "outputs": 1,
        "x": 920,
        "y": 760,
        "wires": [
            [
                "8be6aaf2.09a328"
            ]
        ]
    },
    {
        "id": "a57e660e.991f18",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "main module old",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar transactionOperationName = flow.get('transactionOperationName');\nvar stableDiff = flow.get('stableDiff');//дельта стабільності\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar operation_name_income = \"Приход (авто)\";\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\nvar transactionAccWeight = flow.get('transactionAccWeight');//облікова вага\nvar overLoadWeight = flow.get('overLoadWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 0) && (weight > 0) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 0) && (weight <=0) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionHasOverLoad',null);\n        flow.set('transactionOperationName',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n        flow.set('transactionAccWeight', null);//облікова вага\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nmsg.stable = true;\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if ((transactionData[i] - transactionData[i-1]) > stableDiff || (transactionData[i] - transactionData[i-1]) < -stableDiff){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable':msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'transactionAccWeight':transactionAccWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false,\n    'transactionOperationName':transactionOperationName\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nif(transactionAccWeight && transactionOperationName!==operation_name_income){\n    \n   flow.set('transactionHasOverLoad',(weight-transactionAccWeight)>overLoadWeight);\n   \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 220,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "d4f91930.314ce8",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 210,
        "y": 340,
        "wires": []
    },
    {
        "id": "29bb115e.24d43e",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "1С",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 432.8571319580078,
        "y": 862.8571338653564,
        "wires": []
    },
    {
        "id": "13ae6fc.5d6099",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Відправка події в Скелю",
        "info": "",
        "x": 1325,
        "y": 440,
        "wires": []
    },
    {
        "id": "2f29a35a.f7dcdc",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Подія водій в кабіні при зважуванні",
        "info": "",
        "x": 960,
        "y": 940,
        "wires": []
    },
    {
        "id": "3e719f01.6599",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Подія прилад підключено/відключено",
        "info": "",
        "x": 330,
        "y": 820,
        "wires": []
    },
    {
        "id": "dd44a848.ad3418",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Всі події",
        "info": "",
        "x": 600.0000228881836,
        "y": 271.6666717529297,
        "wires": []
    },
    {
        "id": "c3258057.a0252",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Головний модуль логіки",
        "info": "",
        "x": 250,
        "y": 300,
        "wires": []
    },
    {
        "id": "ec7bf463.b781d8",
        "type": "link in",
        "z": "f276aaac.2ff468",
        "name": "",
        "links": [
            "f2c42f43.7a38a"
        ],
        "x": 55,
        "y": 420,
        "wires": [
            [
                "db5ec004.964cb",
                "d4f91930.314ce8",
                "4a509f37a6e151a6"
            ]
        ]
    },
    {
        "id": "200d97e9da4b7855",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/scale/getWeight",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1020,
        "wires": [
            [
                "8305e47f34fcafdd"
            ]
        ]
    },
    {
        "id": "ec8826c934a58151",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "response",
        "func": "msg.payload = {\n    date: new Date(),\n    weight: flow.get('transactionMetadata').weight,\n    scaleId: 2,\n    stable: flow.get('transactionMetadata').stable,\n    scaleOn: global.get(\"scaleOn\"),\n    perimetr: msg.perimetr //true or false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 860,
        "y": 1180,
        "wires": [
            [
                "3a0a667bdb024a69"
            ]
        ]
    },
    {
        "id": "3a0a667bdb024a69",
        "type": "http response",
        "z": "f276aaac.2ff468",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1010,
        "y": 1180,
        "wires": []
    },
    {
        "id": "42b973f8fce74408",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Периметр",
        "info": "relay 0 - зелена стрелка їхати вигружатись\nrelay 1 - виїзд з тереторії зелене світло\n\nНычого немаэ\nbtn0: array[1]\n0: \"dn\"\nbtn1: array[1]\n0: \"up\"\n\nПериметр порушений\nbtn0: array[1]\n0: \"up\"\nbtn1: array[1]\n0: \"up\"",
        "x": 120,
        "y": 1080,
        "wires": []
    },
    {
        "id": "989c766677370609",
        "type": "inject",
        "z": "f276aaac.2ff468",
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
        "x": 140,
        "y": 1280,
        "wires": [
            [
                "c47fd6ed44f84a22",
                "16aabf4ff4e773fb"
            ]
        ]
    },
    {
        "id": "c47fd6ed44f84a22",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.238/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 410,
        "y": 1120,
        "wires": [
            [
                "4c37db9825b515bb",
                "b4323d2147228938",
                "65af0c723d71dedd"
            ]
        ]
    },
    {
        "id": "4c37db9825b515bb",
        "type": "xml",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 550,
        "y": 1120,
        "wires": [
            [
                "63cff5f3ca489b4e"
            ]
        ]
    },
    {
        "id": "63cff5f3ca489b4e",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 12",
        "func": "var perimetr = msg.payload.response.btn0[0]; //dn - true up -false\nvar res = false\nif (perimetr === 'dn'){\n    res = true\n}\nif (perimetr === 'up') {\n    res = false\n}\n\nmsg.payload = res\nmsg.perimetr = res\n//perimetr\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 690,
        "y": 1120,
        "wires": [
            [
                "755d0934fa7068fa",
                "ec8826c934a58151"
            ]
        ]
    },
    {
        "id": "755d0934fa7068fa",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 12",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 1120,
        "wires": []
    },
    {
        "id": "16aabf4ff4e773fb",
        "type": "trigger",
        "z": "f276aaac.2ff468",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "500",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 460,
        "y": 1240,
        "wires": [
            [
                "f07838b0f885492f"
            ]
        ]
    },
    {
        "id": "65af0c723d71dedd",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "check status",
        "func": "var statusCode = msg.statusCode\nif (statusCode == 200){\n    msg.reset = true\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 1200,
        "wires": [
            [
                "16aabf4ff4e773fb"
            ]
        ]
    },
    {
        "id": "b4323d2147228938",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 13",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 580,
        "y": 1080,
        "wires": []
    },
    {
        "id": "f07838b0f885492f",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 13",
        "func": "msg.payload = false\nmsg.perimetr = false\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 1240,
        "wires": [
            [
                "3e34f506d6040057",
                "ec8826c934a58151"
            ]
        ]
    },
    {
        "id": "3e34f506d6040057",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 14",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 1240,
        "wires": []
    },
    {
        "id": "8305e47f34fcafdd",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 14",
        "func": "\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 170,
        "y": 1120,
        "wires": [
            [
                "c47fd6ed44f84a22",
                "16aabf4ff4e773fb"
            ]
        ]
    },
    {
        "id": "4a509f37a6e151a6",
        "type": "ui_template",
        "z": "f276aaac.2ff468",
        "group": "15fb11e63dc2da4e",
        "name": "",
        "order": 3,
        "width": "15",
        "height": "14",
        "format": "<div style=\"text-align: center; font-size: 100px; margin-top: 100px; font-weight: bold;\">{{msg.payload}}</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 200,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "edd7bbcafd545fce",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.238/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 1440,
        "wires": [
            [
                "8779b7b7c160b3a4"
            ]
        ]
    },
    {
        "id": "8779b7b7c160b3a4",
        "type": "xml",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 1440,
        "wires": [
            [
                "c1ab948dabd96084"
            ]
        ]
    },
    {
        "id": "b7665d6b9caa8fa0",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 1400,
        "wires": []
    },
    {
        "id": "4d4a4505490edb8f",
        "type": "inject",
        "z": "f276aaac.2ff468",
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
        "repeat": "2",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 1520,
        "wires": [
            [
                "cf11ef21b4b46243"
            ]
        ]
    },
    {
        "id": "ed04f3adb1c693c2",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/status/perimetr",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 1440,
        "wires": [
            [
                "edd7bbcafd545fce"
            ]
        ]
    },
    {
        "id": "c1ab948dabd96084",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 19",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}else{\n    closed = true\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 2,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 1440,
        "wires": [
            [
                "8e8273cd8043871c"
            ]
        ]
    },
    {
        "id": "8e8273cd8043871c",
        "type": "http response",
        "z": "f276aaac.2ff468",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 1440,
        "wires": []
    },
    {
        "id": "3e9c0c8cb31fcc81",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Події оптосенсорів",
        "info": "",
        "x": 130,
        "y": 1600,
        "wires": []
    },
    {
        "id": "346093e50b13ee89",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Socket 2",
        "info": "",
        "x": 100,
        "y": 1660,
        "wires": []
    },
    {
        "id": "a3696adbd564e9ea",
        "type": "tcp in",
        "z": "f276aaac.2ff468",
        "name": "172.16.9.238",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9765",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 150,
        "y": 1700,
        "wires": [
            [
                "80d91400b0c11591",
                "ce3d09c73ae98ce7"
            ]
        ]
    },
    {
        "id": "80d91400b0c11591",
        "type": "tcp out",
        "z": "f276aaac.2ff468",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 210,
        "y": 1760,
        "wires": []
    },
    {
        "id": "ce3d09c73ae98ce7",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3){\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0){\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            procname: \"OpticalLoop\",\n            control_point_num: 2,\n            clockseconds: Date.now(),\n            closed: closed\n        } \n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            procname: \"OpticalLoop\",\n            control_point_num: 2,\n            clockseconds: Date.now(),\n            closed: closed //true перетнутий  : false - все ок\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 1700,
        "wires": [
            [
                "bd38888a3e58ae89",
                "098f1c894122fb12"
            ]
        ]
    },
    {
        "id": "6d70f4d905021a99",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 810,
        "y": 1700,
        "wires": [
            []
        ]
    },
    {
        "id": "bd38888a3e58ae89",
        "type": "delay",
        "z": "f276aaac.2ff468",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "allowrate": false,
        "outputs": 1,
        "x": 620,
        "y": 1700,
        "wires": [
            [
                "6d70f4d905021a99"
            ]
        ]
    },
    {
        "id": "0f05a27816d42588",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Подыъ инфо",
        "info": "ID события - 0x21 (3310)\nНазначение: Смена состояния цифрового входа.\nДанные: 0 Байт Номер входа (0...1)\n1 Байт 0–Замкнут; 1–Разомкнут;\n\nперетнули\n0: 33\n1: 0\n2: 1\n\n\nвсе ок\n\n0: 33\n1: 0\n2: 0",
        "x": 250,
        "y": 1660,
        "wires": []
    },
    {
        "id": "3ed520810a6e3e7e",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 730,
        "y": 1640,
        "wires": []
    },
    {
        "id": "098f1c894122fb12",
        "type": "link out",
        "z": "f276aaac.2ff468",
        "name": "eventOptical",
        "mode": "link",
        "links": [
            "5bf5ffd4a2346dcb"
        ],
        "x": 765,
        "y": 1580,
        "wires": []
    },
    {
        "id": "cf11ef21b4b46243",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.238/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 1520,
        "wires": [
            [
                "5c502fe4d705cbb7"
            ]
        ]
    },
    {
        "id": "5c502fe4d705cbb7",
        "type": "xml",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 1520,
        "wires": [
            [
                "6d3a28893cb24520"
            ]
        ]
    },
    {
        "id": "6d3a28893cb24520",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 24",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 2,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 1520,
        "wires": [
            [
                "098f1c894122fb12"
            ]
        ]
    },
    {
        "id": "a10a2b84fea4df0e",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "info",
        "info": "1-ші ваги айпі зчитувача шлагбаума : 246, 247, 248   ; \n2-гі ваги айпі  зчитувача шлагбаума 245, 244, 243\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 90,
        "y": 40,
        "wires": []
    },
    {
        "id": "b13c3e0f90213837",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 150,
        "y": 140,
        "wires": []
    },
    {
        "id": "94ec66816cd9e951",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 170,
        "y": 460,
        "wires": []
    },
    {
        "id": "695943365c8a1f38",
        "type": "tcp in",
        "z": "81c350920d78ca81",
        "name": "",
        "server": "client",
        "host": "172.16.9.243",
        "port": "9761",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 140,
        "y": 180,
        "wires": [
            [
                "5b719ce2d3a7a608",
                "18a51b0132ae8ed2"
            ]
        ]
    },
    {
        "id": "13d365223df95feb",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Socket 2",
        "info": "",
        "x": 60,
        "y": 600,
        "wires": []
    },
    {
        "id": "160f47fecb4be8ec",
        "type": "tcp in",
        "z": "81c350920d78ca81",
        "name": "",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9761",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 180,
        "y": 640,
        "wires": [
            [
                "5a19c37aa17b777d",
                "362481c18b2a318b",
                "078d7a6d3bc03755"
            ]
        ]
    },
    {
        "id": "b6ac78c44ae235e0",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Зчитувач",
        "info": "",
        "x": 340,
        "y": 140,
        "wires": []
    },
    {
        "id": "081af3cf83ddc082",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "x": 300,
        "y": 40,
        "wires": [
            [
                "339a7784331adf74"
            ]
        ]
    },
    {
        "id": "339a7784331adf74",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "52498e67f7b3a6f1",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 20",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 180,
        "wires": []
    },
    {
        "id": "5b719ce2d3a7a608",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "function 15",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 180,
        "wires": [
            [
                "fe3abdddf8a1da41"
            ]
        ]
    },
    {
        "id": "fe3abdddf8a1da41",
        "type": "trigger",
        "z": "81c350920d78ca81",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "250",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 540,
        "y": 180,
        "wires": [
            [
                "7904da0b24b04d37",
                "105acf0af38d6a9b"
            ]
        ]
    },
    {
        "id": "7904da0b24b04d37",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "function 16",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 710,
        "y": 180,
        "wires": [
            [
                "52498e67f7b3a6f1",
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "d73a5f3d14c2487a",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": msg.payload,\n    \"control_point_num\": 12,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 260,
        "wires": [
            [
                "823da2b84ba3fe08",
                "7d55a628f1b110c8"
            ]
        ]
    },
    {
        "id": "823da2b84ba3fe08",
        "type": "http request",
        "z": "81c350920d78ca81",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 630,
        "y": 260,
        "wires": [
            [
                "0885bd875ffd6859"
            ]
        ]
    },
    {
        "id": "0885bd875ffd6859",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 22",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 960,
        "y": 280,
        "wires": []
    },
    {
        "id": "a73cca97b8ac34a0",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 140,
        "y": 240,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "ae9df3cb5e16abd5",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 790,
        "y": 240,
        "wires": []
    },
    {
        "id": "7d55a628f1b110c8",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 23",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 300,
        "wires": []
    },
    {
        "id": "77d57a060e3b3f92",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "payload": "8711111",
        "payloadType": "str",
        "x": 130,
        "y": 280,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "0be1d460efd692a9",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "payload": "1234567",
        "payloadType": "str",
        "x": 140,
        "y": 320,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "9dddf975f9f5fd22",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "payload": "[0, 56,55,54,48,57,55,55,49,50,49,50,49,50]",
        "payloadType": "bin",
        "x": 130,
        "y": 360,
        "wires": [
            [
                "5b719ce2d3a7a608"
            ]
        ]
    },
    {
        "id": "5a19c37aa17b777d",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 24",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 480,
        "y": 600,
        "wires": []
    },
    {
        "id": "362481c18b2a318b",
        "type": "tcp out",
        "z": "81c350920d78ca81",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 210,
        "y": 700,
        "wires": []
    },
    {
        "id": "078d7a6d3bc03755",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 8,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 4,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 640,
        "wires": [
            [
                "030585b3eea94da3"
            ]
        ]
    },
    {
        "id": "9cccd0059c3067e8",
        "type": "http request",
        "z": "81c350920d78ca81",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 810,
        "y": 640,
        "wires": [
            [
                "81461d07fc6ce99a"
            ]
        ]
    },
    {
        "id": "030585b3eea94da3",
        "type": "delay",
        "z": "81c350920d78ca81",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "allowrate": false,
        "outputs": 1,
        "x": 620,
        "y": 640,
        "wires": [
            [
                "9cccd0059c3067e8"
            ]
        ]
    },
    {
        "id": "81461d07fc6ce99a",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 26",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 680,
        "wires": []
    },
    {
        "id": "73b83d2f25c75794",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Подыъ з магнітної рамки ",
        "info": "ID события - 0x21 (33 10)\nНазначение: Смена состояния цифрового входа.\nДанные: 0 Байт Номер входа (0...1)\n1 Байт 0–Замкнут; 1–Разомкнут;",
        "x": 230,
        "y": 600,
        "wires": []
    },
    {
        "id": "6ab1251038328007",
        "type": "http request",
        "z": "81c350920d78ca81",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.244/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 840,
        "wires": [
            [
                "eb57eab117e82099",
                "025547e0e366ae0c"
            ]
        ]
    },
    {
        "id": "eb57eab117e82099",
        "type": "xml",
        "z": "81c350920d78ca81",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 840,
        "wires": [
            [
                "6c5f2a955cb82212",
                "edbe86c03cb66c9b"
            ]
        ]
    },
    {
        "id": "53933d2cf67da69c",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Socket 2 status магнітна рамка",
        "info": "",
        "x": 130,
        "y": 800,
        "wires": []
    },
    {
        "id": "05c461a425fed6fd",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "x": 140,
        "y": 880,
        "wires": [
            [
                "6ab1251038328007"
            ]
        ]
    },
    {
        "id": "4189ddd13b9397fb",
        "type": "http in",
        "z": "81c350920d78ca81",
        "name": "",
        "url": "/status/gate",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 840,
        "wires": [
            [
                "6ab1251038328007",
                "82e875a479f2f30e"
            ]
        ]
    },
    {
        "id": "b74ebc48c407ec51",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 25",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 880,
        "wires": []
    },
    {
        "id": "6c5f2a955cb82212",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 8,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 840,
        "wires": [
            [
                "b74ebc48c407ec51",
                "4cb8242b94af8852"
            ]
        ]
    },
    {
        "id": "4cb8242b94af8852",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 840,
        "wires": []
    },
    {
        "id": "8a878d0507c6dada",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 190,
        "y": 1060,
        "wires": []
    },
    {
        "id": "d216a44f94311705",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "url",
        "func": "msg.url = 'http://admin:vkmodule@172.16.9.244/protect/leds.cgi?led=1&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 1120,
        "wires": [
            [
                "9a4a9e5db5900d31"
            ]
        ]
    },
    {
        "id": "86fa2ad0bb51b8cb",
        "type": "http in",
        "z": "81c350920d78ca81",
        "name": "",
        "url": "/gate/barrier",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 1120,
        "wires": [
            [
                "d5dc6602ca42f756",
                "d216a44f94311705",
                "16c24fe56d01bef0"
            ]
        ]
    },
    {
        "id": "790d205c77424103",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1080,
        "wires": []
    },
    {
        "id": "9a4a9e5db5900d31",
        "type": "http request",
        "z": "81c350920d78ca81",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 570,
        "y": 1120,
        "wires": [
            [
                "132f25ac7289113e",
                "1c19aec479bb81d6"
            ]
        ]
    },
    {
        "id": "f9973cba42fde219",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1120,
        "wires": []
    },
    {
        "id": "edbe86c03cb66c9b",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 27",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 800,
        "wires": []
    },
    {
        "id": "132f25ac7289113e",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1120,
        "wires": [
            [
                "f9973cba42fde219"
            ]
        ]
    },
    {
        "id": "d5dc6602ca42f756",
        "type": "trigger",
        "z": "81c350920d78ca81",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "1",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 370,
        "y": 1220,
        "wires": [
            [
                "2a69867981dde1e6"
            ]
        ]
    },
    {
        "id": "1c19aec479bb81d6",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 1160,
        "wires": [
            [
                "d5dc6602ca42f756"
            ]
        ]
    },
    {
        "id": "11b5738f1e068f5a",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1220,
        "wires": []
    },
    {
        "id": "2a69867981dde1e6",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1220,
        "wires": [
            [
                "11b5738f1e068f5a"
            ]
        ]
    },
    {
        "id": "82e875a479f2f30e",
        "type": "trigger",
        "z": "81c350920d78ca81",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "1",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 450,
        "y": 960,
        "wires": [
            [
                "a1ec343dd39e1f94"
            ]
        ]
    },
    {
        "id": "025547e0e366ae0c",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 880,
        "wires": [
            [
                "82e875a479f2f30e"
            ]
        ]
    },
    {
        "id": "44f549c96356d258",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 960,
        "wires": []
    },
    {
        "id": "a1ec343dd39e1f94",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 8,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 960,
        "wires": [
            [
                "44f549c96356d258"
            ]
        ]
    },
    {
        "id": "817254a390f00fa1",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 1080,
        "wires": [
            [
                "790d205c77424103"
            ]
        ]
    },
    {
        "id": "167443805a8090d8",
        "type": "comment",
        "z": "81c350920d78ca81",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 1320,
        "wires": []
    },
    {
        "id": "ebb3daabb719481d",
        "type": "http in",
        "z": "81c350920d78ca81",
        "name": "",
        "url": "/gate/barrier/status",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1380,
        "wires": [
            [
                "a0de1adc71a7812f"
            ]
        ]
    },
    {
        "id": "c4337b79e2ce726d",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1360,
        "wires": []
    },
    {
        "id": "ab1abd7cfe88b529",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1380,
        "wires": []
    },
    {
        "id": "f5b60ea989875ae2",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1380,
        "wires": [
            [
                "ab1abd7cfe88b529"
            ]
        ]
    },
    {
        "id": "6d896f49e42ed8d1",
        "type": "http response",
        "z": "81c350920d78ca81",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1480,
        "wires": []
    },
    {
        "id": "2349a58799ce55b8",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1480,
        "wires": [
            [
                "6d896f49e42ed8d1"
            ]
        ]
    },
    {
        "id": "a0de1adc71a7812f",
        "type": "function",
        "z": "81c350920d78ca81",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 4,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 1360,
        "wires": [
            [
                "c4337b79e2ce726d"
            ]
        ]
    },
    {
        "id": "d61837f41e4096fe",
        "type": "inject",
        "z": "81c350920d78ca81",
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
        "x": 140,
        "y": 1180,
        "wires": [
            [
                "d216a44f94311705"
            ]
        ]
    },
    {
        "id": "18a51b0132ae8ed2",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 49",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 520,
        "y": 140,
        "wires": []
    },
    {
        "id": "105acf0af38d6a9b",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 91",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 140,
        "wires": []
    },
    {
        "id": "16c24fe56d01bef0",
        "type": "debug",
        "z": "81c350920d78ca81",
        "name": "debug 96",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 440,
        "y": 1040,
        "wires": []
    },
    {
        "id": "3b796430382e56f2",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "info",
        "info": "Пожежні ворота- \nзчитувач на вхід: 202, 203, 204; \nзчитувач на вихід: 205, 206, 207\n\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "1d90e6a5b376a28d",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 170,
        "y": 140,
        "wires": []
    },
    {
        "id": "690e2a4a932f8392",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 190,
        "y": 460,
        "wires": []
    },
    {
        "id": "a83513841e8d955d",
        "type": "tcp in",
        "z": "14d316f51007f56c",
        "name": "",
        "server": "client",
        "host": "172.16.9.204",
        "port": "9761",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 160,
        "y": 180,
        "wires": [
            [
                "d5c2805fc21c2535",
                "263b761c7cc53826"
            ]
        ]
    },
    {
        "id": "a98775ba1391a99e",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Socket 2",
        "info": "",
        "x": 160,
        "y": 600,
        "wires": []
    },
    {
        "id": "e0152fabdbcde956",
        "type": "tcp in",
        "z": "14d316f51007f56c",
        "name": "172.16.9.203",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9762",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 170,
        "y": 640,
        "wires": [
            [
                "89f7f4b78ac76462",
                "807774d738ff9535"
            ]
        ]
    },
    {
        "id": "3a6c638be10601ab",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 25",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 440,
        "y": 500,
        "wires": []
    },
    {
        "id": "9f7453fdab7608c7",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Зчитувач",
        "info": "",
        "x": 360,
        "y": 140,
        "wires": []
    },
    {
        "id": "4727a168ec4466d4",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Подыъ з рамки",
        "info": "",
        "x": 380,
        "y": 440,
        "wires": []
    },
    {
        "id": "f96d51e2548ecf2c",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "x": 320,
        "y": 40,
        "wires": [
            [
                "41b6c0324a221afc"
            ]
        ]
    },
    {
        "id": "41b6c0324a221afc",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "b8dd7b880dc38be0",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 26",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 900,
        "y": 180,
        "wires": []
    },
    {
        "id": "d5c2805fc21c2535",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "function 17",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 180,
        "wires": [
            [
                "74cf44cee9f7b396"
            ]
        ]
    },
    {
        "id": "74cf44cee9f7b396",
        "type": "trigger",
        "z": "14d316f51007f56c",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "250",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 560,
        "y": 180,
        "wires": [
            [
                "95442d11e6dab0f3"
            ]
        ]
    },
    {
        "id": "95442d11e6dab0f3",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "function 18",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 180,
        "wires": [
            [
                "b8dd7b880dc38be0",
                "a5910f4c8fd403cf"
            ]
        ]
    },
    {
        "id": "a5910f4c8fd403cf",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": msg.payload,\n    \"control_point_num\": 13,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 260,
        "wires": [
            [
                "f1f5dc1f7ae1a2fc",
                "77db36e8d166a0bf"
            ]
        ]
    },
    {
        "id": "f1f5dc1f7ae1a2fc",
        "type": "http request",
        "z": "14d316f51007f56c",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 650,
        "y": 260,
        "wires": [
            [
                "d6bfc1b6c7defc77"
            ]
        ]
    },
    {
        "id": "d6bfc1b6c7defc77",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 27",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 980,
        "y": 280,
        "wires": []
    },
    {
        "id": "4b7b732b16bd0a46",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 160,
        "y": 240,
        "wires": [
            [
                "a5910f4c8fd403cf"
            ]
        ]
    },
    {
        "id": "5ecdfeb26c8d001f",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 790,
        "y": 360,
        "wires": []
    },
    {
        "id": "77db36e8d166a0bf",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 28",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 300,
        "wires": []
    },
    {
        "id": "57d57eadb8b951b2",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "payload": "8711111",
        "payloadType": "str",
        "x": 150,
        "y": 280,
        "wires": [
            [
                "a5910f4c8fd403cf"
            ]
        ]
    },
    {
        "id": "d06a936667ebfef6",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "payload": "1234567",
        "payloadType": "str",
        "x": 160,
        "y": 320,
        "wires": [
            [
                "a5910f4c8fd403cf"
            ]
        ]
    },
    {
        "id": "9154ff100a61c2d2",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 160,
        "y": 360,
        "wires": [
            [
                "a5910f4c8fd403cf"
            ]
        ]
    },
    {
        "id": "89f7f4b78ac76462",
        "type": "tcp out",
        "z": "14d316f51007f56c",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 230,
        "y": 700,
        "wires": []
    },
    {
        "id": "ea98ba981879d3b6",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 35",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 460,
        "y": 600,
        "wires": []
    },
    {
        "id": "807774d738ff9535",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 5,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 5,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 640,
        "wires": [
            [
                "529a1524f50ec4c6"
            ]
        ]
    },
    {
        "id": "c76f1c8b82752f60",
        "type": "http request",
        "z": "14d316f51007f56c",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 850,
        "y": 640,
        "wires": [
            [
                "6523015eecca97cb"
            ]
        ]
    },
    {
        "id": "529a1524f50ec4c6",
        "type": "delay",
        "z": "14d316f51007f56c",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "allowrate": false,
        "outputs": 1,
        "x": 660,
        "y": 640,
        "wires": [
            [
                "c76f1c8b82752f60"
            ]
        ]
    },
    {
        "id": "6523015eecca97cb",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 36",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 680,
        "wires": []
    },
    {
        "id": "0b6d51e0465dd14a",
        "type": "http request",
        "z": "14d316f51007f56c",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.203/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 370,
        "y": 860,
        "wires": [
            [
                "a89edc74e11d5e2d",
                "fe70262693b3711b"
            ]
        ]
    },
    {
        "id": "a89edc74e11d5e2d",
        "type": "xml",
        "z": "14d316f51007f56c",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 530,
        "y": 860,
        "wires": [
            [
                "17bba2650805a12f",
                "6aec22566c7b4024"
            ]
        ]
    },
    {
        "id": "ae7d0e2762fb3a59",
        "type": "comment",
        "z": "14d316f51007f56c",
        "name": "Socket 2 status",
        "info": "",
        "x": 180,
        "y": 820,
        "wires": []
    },
    {
        "id": "dd235ac2a18db9cf",
        "type": "inject",
        "z": "14d316f51007f56c",
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
        "x": 180,
        "y": 900,
        "wires": [
            [
                "0b6d51e0465dd14a"
            ]
        ]
    },
    {
        "id": "5a8884d8af0026f2",
        "type": "http in",
        "z": "14d316f51007f56c",
        "name": "",
        "url": "/status/gate/fire/1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 860,
        "wires": [
            [
                "0b6d51e0465dd14a",
                "99630490d2b79797"
            ]
        ]
    },
    {
        "id": "56bb72f79e7f2151",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 39",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 820,
        "y": 900,
        "wires": []
    },
    {
        "id": "17bba2650805a12f",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 5,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 860,
        "wires": [
            [
                "56bb72f79e7f2151",
                "d1c87ebd617c4dcf"
            ]
        ]
    },
    {
        "id": "d1c87ebd617c4dcf",
        "type": "http response",
        "z": "14d316f51007f56c",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 860,
        "wires": []
    },
    {
        "id": "6aec22566c7b4024",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 40",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 820,
        "wires": []
    },
    {
        "id": "99630490d2b79797",
        "type": "trigger",
        "z": "14d316f51007f56c",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "1",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 490,
        "y": 980,
        "wires": [
            [
                "add38b9018003a99"
            ]
        ]
    },
    {
        "id": "fe70262693b3711b",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 900,
        "wires": [
            [
                "99630490d2b79797"
            ]
        ]
    },
    {
        "id": "a3c3b37d61263819",
        "type": "http response",
        "z": "14d316f51007f56c",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 980,
        "wires": []
    },
    {
        "id": "add38b9018003a99",
        "type": "function",
        "z": "14d316f51007f56c",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 5,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 980,
        "wires": [
            [
                "a3c3b37d61263819"
            ]
        ]
    },
    {
        "id": "263b761c7cc53826",
        "type": "debug",
        "z": "14d316f51007f56c",
        "name": "debug 50",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 580,
        "y": 140,
        "wires": []
    },
    {
        "id": "2c274bc19d2c3d82",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "info",
        "info": "Пожежні ворота- \nзчитувач на вхід: 202, 203, 204; \nзчитувач на вихід: 205, 206, 207\n\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 70,
        "y": 40,
        "wires": []
    },
    {
        "id": "e0e9c62eadb8d27b",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 130,
        "y": 140,
        "wires": []
    },
    {
        "id": "c542f0ebbfdcfd9e",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 150,
        "y": 460,
        "wires": []
    },
    {
        "id": "0641c85f43db17c0",
        "type": "tcp in",
        "z": "90c1aded870b9244",
        "name": "",
        "server": "client",
        "host": "172.16.9.207",
        "port": "9761",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 120,
        "y": 180,
        "wires": [
            [
                "3690ceb74df90ce4"
            ]
        ]
    },
    {
        "id": "2b3e5e5cfe501d64",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Socket 2",
        "info": "",
        "x": 120,
        "y": 600,
        "wires": []
    },
    {
        "id": "901bfa305b644432",
        "type": "tcp in",
        "z": "90c1aded870b9244",
        "name": "172.16.9.206",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9763",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 130,
        "y": 640,
        "wires": [
            [
                "a5b9e91dca3ec144",
                "8797a0f791c6a59e"
            ]
        ]
    },
    {
        "id": "308d6ce0d199e565",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 30",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 500,
        "wires": []
    },
    {
        "id": "be6319f39425e910",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Зчитувач",
        "info": "",
        "x": 320,
        "y": 140,
        "wires": []
    },
    {
        "id": "28c397aa901d22b7",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Подыъ з рамки",
        "info": "",
        "x": 340,
        "y": 440,
        "wires": []
    },
    {
        "id": "473283434d2aa958",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "x": 280,
        "y": 40,
        "wires": [
            [
                "f2bd7eeb047bcbaf"
            ]
        ]
    },
    {
        "id": "f2bd7eeb047bcbaf",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "47a31f4103181941",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 31",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 180,
        "wires": []
    },
    {
        "id": "3690ceb74df90ce4",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "function 19",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 180,
        "wires": [
            [
                "3b1ff3aa0e03df52"
            ]
        ]
    },
    {
        "id": "3b1ff3aa0e03df52",
        "type": "trigger",
        "z": "90c1aded870b9244",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "250",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 520,
        "y": 180,
        "wires": [
            [
                "c9f2b48edd887b5c"
            ]
        ]
    },
    {
        "id": "c9f2b48edd887b5c",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "function 20",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 690,
        "y": 180,
        "wires": [
            [
                "47a31f4103181941",
                "86f30d3cc4001904"
            ]
        ]
    },
    {
        "id": "86f30d3cc4001904",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": msg.payload,\n    \"control_point_num\": 14,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 260,
        "wires": [
            [
                "fea071ce0e719d5a",
                "381f299f4f4f9121"
            ]
        ]
    },
    {
        "id": "fea071ce0e719d5a",
        "type": "http request",
        "z": "90c1aded870b9244",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 610,
        "y": 260,
        "wires": [
            [
                "69350d3e37e9bac4"
            ]
        ]
    },
    {
        "id": "69350d3e37e9bac4",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 32",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 280,
        "wires": []
    },
    {
        "id": "53d2cd4f03d85d56",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 120,
        "y": 240,
        "wires": [
            [
                "86f30d3cc4001904"
            ]
        ]
    },
    {
        "id": "e139ff5231a02aa9",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 750,
        "y": 360,
        "wires": []
    },
    {
        "id": "381f299f4f4f9121",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 33",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 600,
        "y": 300,
        "wires": []
    },
    {
        "id": "d5de315c988b40cd",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "payload": "8711111",
        "payloadType": "str",
        "x": 110,
        "y": 280,
        "wires": [
            [
                "86f30d3cc4001904"
            ]
        ]
    },
    {
        "id": "2c6c80b04581b0cc",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "payload": "1234567",
        "payloadType": "str",
        "x": 120,
        "y": 320,
        "wires": [
            [
                "86f30d3cc4001904"
            ]
        ]
    },
    {
        "id": "519f73b14766463c",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "payload": "8760977",
        "payloadType": "str",
        "x": 120,
        "y": 360,
        "wires": [
            [
                "86f30d3cc4001904"
            ]
        ]
    },
    {
        "id": "a5b9e91dca3ec144",
        "type": "tcp out",
        "z": "90c1aded870b9244",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 190,
        "y": 700,
        "wires": []
    },
    {
        "id": "0de86065bc3da4de",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 37",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 420,
        "y": 600,
        "wires": []
    },
    {
        "id": "8797a0f791c6a59e",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 6,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 6,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 640,
        "wires": [
            [
                "7c3eed0edee41215"
            ]
        ]
    },
    {
        "id": "ca155f19b7f1c278",
        "type": "http request",
        "z": "90c1aded870b9244",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 810,
        "y": 640,
        "wires": [
            [
                "6dd9a2660f0889df"
            ]
        ]
    },
    {
        "id": "7c3eed0edee41215",
        "type": "delay",
        "z": "90c1aded870b9244",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "allowrate": false,
        "outputs": 1,
        "x": 620,
        "y": 640,
        "wires": [
            [
                "ca155f19b7f1c278"
            ]
        ]
    },
    {
        "id": "6dd9a2660f0889df",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 38",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 680,
        "wires": []
    },
    {
        "id": "7c0b43d25612ed12",
        "type": "http request",
        "z": "90c1aded870b9244",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.206/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 840,
        "wires": [
            [
                "2223b77d98bfd237",
                "02d40ff350adcf0d"
            ]
        ]
    },
    {
        "id": "2223b77d98bfd237",
        "type": "xml",
        "z": "90c1aded870b9244",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 840,
        "wires": [
            [
                "13bf6e9dac24aeeb",
                "1af50da8084300ab"
            ]
        ]
    },
    {
        "id": "13ee95940aa5e295",
        "type": "comment",
        "z": "90c1aded870b9244",
        "name": "Socket 2 status",
        "info": "",
        "x": 160,
        "y": 800,
        "wires": []
    },
    {
        "id": "96f9b19cc514100d",
        "type": "inject",
        "z": "90c1aded870b9244",
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
        "x": 160,
        "y": 880,
        "wires": [
            [
                "7c0b43d25612ed12"
            ]
        ]
    },
    {
        "id": "92f89b213bb22aef",
        "type": "http in",
        "z": "90c1aded870b9244",
        "name": "",
        "url": "/status/gate/fire/2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 840,
        "wires": [
            [
                "7c0b43d25612ed12",
                "bc5530152f733e1e"
            ]
        ]
    },
    {
        "id": "ac6c7bc8ad122b66",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 41",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 880,
        "wires": []
    },
    {
        "id": "13bf6e9dac24aeeb",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 6,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 840,
        "wires": [
            [
                "ac6c7bc8ad122b66",
                "2ebeb22b65025870"
            ]
        ]
    },
    {
        "id": "2ebeb22b65025870",
        "type": "http response",
        "z": "90c1aded870b9244",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 840,
        "wires": []
    },
    {
        "id": "1af50da8084300ab",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 42",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 800,
        "wires": []
    },
    {
        "id": "bc5530152f733e1e",
        "type": "trigger",
        "z": "90c1aded870b9244",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "1",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 470,
        "y": 960,
        "wires": [
            [
                "6a8993a0c0517827"
            ]
        ]
    },
    {
        "id": "02d40ff350adcf0d",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 880,
        "wires": [
            [
                "bc5530152f733e1e"
            ]
        ]
    },
    {
        "id": "0e4f423d92a24123",
        "type": "http response",
        "z": "90c1aded870b9244",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 960,
        "wires": []
    },
    {
        "id": "6a8993a0c0517827",
        "type": "function",
        "z": "90c1aded870b9244",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 6,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 960,
        "wires": [
            [
                "0e4f423d92a24123"
            ]
        ]
    },
    {
        "id": "909ccd0705d0a5dc",
        "type": "debug",
        "z": "90c1aded870b9244",
        "name": "debug 51",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 520,
        "y": 140,
        "wires": []
    },
    {
        "id": "7b33887ac932a130",
        "type": "http request",
        "z": "d3668b4071d28b7f",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.238/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 120,
        "wires": [
            [
                "3ec97b05a24c6351"
            ]
        ]
    },
    {
        "id": "3ec97b05a24c6351",
        "type": "xml",
        "z": "d3668b4071d28b7f",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 120,
        "wires": [
            [
                "65d914228f87d118",
                "af89986470a47227"
            ]
        ]
    },
    {
        "id": "8d91f4430ca6dc2f",
        "type": "comment",
        "z": "d3668b4071d28b7f",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 80,
        "wires": []
    },
    {
        "id": "0c10d8a82db2c184",
        "type": "inject",
        "z": "d3668b4071d28b7f",
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
        "x": 140,
        "y": 200,
        "wires": [
            [
                "7b33887ac932a130"
            ]
        ]
    },
    {
        "id": "084e0a2d66685f19",
        "type": "http in",
        "z": "d3668b4071d28b7f",
        "name": "",
        "url": "/status/traffic/lights",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 120,
        "wires": [
            [
                "7b33887ac932a130"
            ]
        ]
    },
    {
        "id": "0d2dd8083a2936bf",
        "type": "debug",
        "z": "d3668b4071d28b7f",
        "name": "debug 45",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 160,
        "wires": []
    },
    {
        "id": "a4eea352b7f27e9a",
        "type": "http response",
        "z": "d3668b4071d28b7f",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 120,
        "wires": []
    },
    {
        "id": "65d914228f87d118",
        "type": "debug",
        "z": "d3668b4071d28b7f",
        "name": "debug 46",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 80,
        "wires": []
    },
    {
        "id": "af89986470a47227",
        "type": "function",
        "z": "d3668b4071d28b7f",
        "name": "function 21",
        "func": "let traffic_lights_1 = msg.payload.response.led0[0]\nlet traffic_lights_2 = msg.payload.response.led1[0]\n\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 16,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_1\": (traffic_lights_1 === \"0\") ? false : true,\n    \"traffic_lights_2\": (traffic_lights_2 === \"0\") ? false : true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 120,
        "wires": [
            [
                "a4eea352b7f27e9a",
                "0d2dd8083a2936bf"
            ]
        ]
    },
    {
        "id": "dddb3535aed8a6d0",
        "type": "http request",
        "z": "d3668b4071d28b7f",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 490,
        "y": 360,
        "wires": [
            [
                "afcd606bbf783044",
                "b50d6975b8d87561"
            ]
        ]
    },
    {
        "id": "cbee4ed43e692482",
        "type": "comment",
        "z": "d3668b4071d28b7f",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 320,
        "wires": []
    },
    {
        "id": "4aeaba460d0ae0a4",
        "type": "http in",
        "z": "d3668b4071d28b7f",
        "name": "",
        "url": "/traffic/on/off",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 360,
        "wires": [
            [
                "423dd59351a6c369"
            ]
        ]
    },
    {
        "id": "5217ba97220add41",
        "type": "debug",
        "z": "d3668b4071d28b7f",
        "name": "debug 47",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 400,
        "wires": []
    },
    {
        "id": "5f059dfce4dc7c26",
        "type": "http response",
        "z": "d3668b4071d28b7f",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 970,
        "y": 360,
        "wires": []
    },
    {
        "id": "afcd606bbf783044",
        "type": "debug",
        "z": "d3668b4071d28b7f",
        "name": "debug 48",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 320,
        "wires": []
    },
    {
        "id": "b50d6975b8d87561",
        "type": "function",
        "z": "d3668b4071d28b7f",
        "name": "function 22",
        "func": "msg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 16,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_2\": true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 360,
        "wires": [
            [
                "5f059dfce4dc7c26",
                "5217ba97220add41"
            ]
        ]
    },
    {
        "id": "423dd59351a6c369",
        "type": "function",
        "z": "d3668b4071d28b7f",
        "name": "function 23",
        "func": "msg.url = \"http://admin:vkmodule@172.16.9.238/protect/leds.cgi?led=1&timeout=30\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 360,
        "wires": [
            [
                "dddb3535aed8a6d0"
            ]
        ]
    },
    {
        "id": "9334b28f16a96b3b",
        "type": "inject",
        "z": "d3668b4071d28b7f",
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
        "x": 140,
        "y": 420,
        "wires": [
            [
                "423dd59351a6c369"
            ]
        ]
    },
    {
        "id": "b37930d1defba379",
        "type": "inject",
        "z": "eb5f387757a7d2eb",
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
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "88c2cb5a21127f3f"
            ]
        ]
    },
    {
        "id": "1ad64c8918a96697",
        "type": "debug",
        "z": "eb5f387757a7d2eb",
        "name": "debug 88",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1040,
        "y": 300,
        "wires": []
    },
    {
        "id": "69026e6cae799608",
        "type": "ui_template",
        "z": "eb5f387757a7d2eb",
        "group": "3f05b7c4137ac6b3",
        "name": "",
        "order": 1,
        "width": "22",
        "height": 17,
        "format": "<style>\n    /*\n    .nr-dashboard-template{\n        background-image: url(\"http://192.168.0.40:1880/logo\");\n        color: #fdc400; yelow\n        #000000; black\n    }\n    */\n    \n\n\n    .centered-text {\n        position: absolute;\n        top: 150px;\n        left: 5%;\n        transform: translateX(-5%);\n        text-align: center;\n        font-size: 5em;\n        font-weight: bold;\n        color: black;\n        \n    }\n\n    .clock {\n        text-align: right;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    .pointName-test {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 30px;\n        font-weight: bold;\n    }\n\n    .warning {\n        position: absolute;\n        color: red;\n        bottom: 0;\n        left: 0;\n        font-weight: bold;\n        padding: 10px;\n        width: 90%;\n        text-align: center;\n        font-size: 3em;;\n    }\n\n    .modal {\n        display: none;\n        position: fixed;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n    \n    /* Стилі для вікна */\n    .modal-content {\n        background-color: white;\n        padding: 20px;\n        border-radius: 5px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 90%;\n        height: 90%;\n        font-size: 3em;\n        font-weight: bold;\n    }\n\n    .text-modal{\n        margin-top: 5%;\n        text-align: center;\n    }\n\n\n</style>\n<div>\n    <div class=\"pointName-test\">\n        <p>Контрольна точка: {{msg.point}}</p>\n        <p>{{msg.time}}</p>\n    \n    \n    \n        <div class=\"centered-text\">\n            Вага: {{msg.payload}}\n        </div>\n    \n    \n        <div class=\"warning\">\n            {{msg.warning}}\n        </div>\n    \n        <div id=\"myModal\" class=\"modal\">\n            <div class=\"modal-content\">\n                <div class=\"text-modal\">\n                    {{msg.message}}\n                </div>\n            </div>\n        </div>\n</div>\n\n\n<script type=\"text/javascript\">\n    (function(scope) {\n        scope.$watch('msg', function(data) {\n            \n            // Отримуємо модальне вікно\n            var modal = document.getElementById(\"myModal\");\n            \n            // Показуємо модальне вікно\n            if(data.message){\n\n                console.log('msg', data);\n                modal.style.display = \"block\";\n\n                var textElement = document.getElementById(\"myModal\");\n                let colorModal = (data.error) ? 'red': 'rgb(0, 0, 0)'\n                // Змінюємо колір букв за допомогою стилів\n                textElement.style.color =colorModal;\n                \n                // Через 5 секунд закриваємо модальне вікно\n                setTimeout(function() {\n                    modal.style.display = \"none\";\n                }, data.showTime * 1000);\n            }\n           \n        });\n    })(scope);\n\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 840,
        "y": 300,
        "wires": [
            [
                "1ad64c8918a96697"
            ]
        ]
    },
    {
        "id": "2a3e9ab3bc2daa8c",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "time",
        "func": "flow.set(\"time\", msg.time)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "47abebae838f67ad",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "logic",
        "func": "msg.showTime = (msg.payload.showTime) ? msg.payload.showTime: false\nmsg.message = flow.get(\"message1C\")\nmsg.error = (msg.payload.error) ? msg.payload.error : false\n\nmsg.time = flow.get(\"time\")\nmsg.point = flow.get(\"point\")\n\nlet statusOptical = flow.get(\"opticalSensor\")\n\nmsg.warning = (statusOptical)? \"Неправильне позиціонування авто на вагах\" : \"\"\n\nmsg.payload = flow.get(\"weight\")\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 570,
        "y": 300,
        "wires": [
            [
                "dc226516989d14d0",
                "69026e6cae799608"
            ]
        ]
    },
    {
        "id": "dc226516989d14d0",
        "type": "debug",
        "z": "eb5f387757a7d2eb",
        "name": "debug 89",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 340,
        "wires": []
    },
    {
        "id": "5341e5511472da60",
        "type": "http in",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "url": "/show/info/screen",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 400,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "54b8f30b86575239",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "message1C",
        "func": "/**\n * message  showTime    error\n */\nflow.set(\"message1C\", msg.payload.message)\nflow.set(\"block\", true)\nmsg.delay = msg.payload.showTime * 1000\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 400,
        "wires": [
            [
                "a5b76268766a4cfe",
                "47abebae838f67ad",
                "635928c652c98daa",
                "209462f351337dd9"
            ]
        ]
    },
    {
        "id": "a5b76268766a4cfe",
        "type": "http response",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 610,
        "y": 440,
        "wires": []
    },
    {
        "id": "d2e573b134e7ef18",
        "type": "inject",
        "z": "eb5f387757a7d2eb",
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
        "payload": "{\"message\":\"Степан Петрович, сідайте в авто і очікуйте на сигнал світлофора\",\"showTime\":10,\"error\":true}",
        "payloadType": "json",
        "x": 120,
        "y": 440,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "a730ef28a0f975ee",
        "type": "inject",
        "z": "eb5f387757a7d2eb",
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
        "x": 120,
        "y": 40,
        "wires": [
            [
                "8f5810060a97f005"
            ]
        ]
    },
    {
        "id": "8f5810060a97f005",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "init",
        "func": "//flow.set(\"time\", msg.time)\nflow.set(\"point\", 'Ваги 2')\nflow.set(\"message1C\", false)\nflow.set(\"block\", false)\nflow.set(\"opticalSensor\", false)\nflow.set(\"weight\", 0)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "b708656ae2ffd39e",
        "type": "inject",
        "z": "eb5f387757a7d2eb",
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
        "payload": "{\"message\":\"Степан Петрович, сідайте в авто і очікуйте на сигнал світлофора\",\"showTime\":5,\"error\":false}",
        "payloadType": "json",
        "x": 120,
        "y": 480,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "fdc27e53b5feab7b",
        "type": "http in",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "url": "/logo",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 100,
        "y": 600,
        "wires": [
            [
                "d5cd3635c9437c49"
            ]
        ]
    },
    {
        "id": "9a245518ebd66576",
        "type": "http response",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 410,
        "y": 600,
        "wires": []
    },
    {
        "id": "d5cd3635c9437c49",
        "type": "file in",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "filename": "/home/pi/e71fb16ad3741ac80b936a9889da660a.jpeg",
        "filenameType": "str",
        "format": "",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 260,
        "y": 660,
        "wires": [
            [
                "9a245518ebd66576"
            ]
        ]
    },
    {
        "id": "315c5d86faeaa6cb",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "weight",
        "func": "\nconst weight = msg.payload; // Вага в кг\n\nif (weight > 1000) {\n    let formattedWeight = weight.toLocaleString()\n    formattedWeight = formattedWeight.replace(\",\", \" \")\n    msg.payload = formattedWeight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n} else {\n    // console.log(weight); // Вивід ваги без форматування\n    //flow.set(\"weight\", weight)\n    msg.payload = weight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 230,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "34166cb8b8d49721",
        "type": "inject",
        "z": "eb5f387757a7d2eb",
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
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 300,
        "wires": [
            [
                "fbe3b517c53961db"
            ]
        ]
    },
    {
        "id": "635928c652c98daa",
        "type": "trigger",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "op1": "",
        "op2": "false",
        "op1type": "nul",
        "op2type": "bool",
        "duration": "250",
        "extend": false,
        "overrideDelay": true,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 640,
        "y": 400,
        "wires": [
            [
                "fec108f9b284363f"
            ]
        ]
    },
    {
        "id": "fec108f9b284363f",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "block",
        "func": "/**\n * message  showTime    error\n */\nflow.set(\"message1C\", false)\nflow.set(\"block\", false)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 870,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "209462f351337dd9",
        "type": "debug",
        "z": "eb5f387757a7d2eb",
        "name": "debug 90",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 360,
        "wires": []
    },
    {
        "id": "fbe3b517c53961db",
        "type": "switch",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "property": "block",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 330,
        "y": 300,
        "wires": [
            [
                "47abebae838f67ad"
            ]
        ]
    },
    {
        "id": "88c2cb5a21127f3f",
        "type": "moment",
        "z": "eb5f387757a7d2eb",
        "name": "",
        "topic": "",
        "input": "",
        "inputType": "msg",
        "inTz": "Europe/Kiev",
        "adjAmount": "0",
        "adjType": "hours",
        "adjDir": "add",
        "format": "DD.MM.YYYY HH:mm:ss",
        "locale": "en-GB",
        "output": "time",
        "outputType": "msg",
        "outTz": "Europe/Kiev",
        "x": 340,
        "y": 100,
        "wires": [
            [
                "2a3e9ab3bc2daa8c"
            ]
        ]
    },
    {
        "id": "30cbb85af99caa5c",
        "type": "link in",
        "z": "eb5f387757a7d2eb",
        "name": "screen",
        "links": [
            "f2c42f43.7a38a"
        ],
        "x": 75,
        "y": 160,
        "wires": [
            [
                "315c5d86faeaa6cb"
            ]
        ]
    },
    {
        "id": "5bf5ffd4a2346dcb",
        "type": "link in",
        "z": "eb5f387757a7d2eb",
        "name": "link in 1",
        "links": [
            "098f1c894122fb12"
        ],
        "x": 75,
        "y": 200,
        "wires": [
            [
                "223f1dad919a3c9a"
            ]
        ]
    },
    {
        "id": "223f1dad919a3c9a",
        "type": "function",
        "z": "eb5f387757a7d2eb",
        "name": "optical sesnsor",
        "func": "flow.set(\"opticalSensor\", msg.payload.closed)\nreturn msg;\n\n\n// msg.payload = {\n//     procname: \"OpticalLoop\",\n//     control_point_num: 2,\n//     clockseconds: Date.now(),\n//     closed: closed\n// } ",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 200,
        "wires": [
            []
        ]
    }
]
