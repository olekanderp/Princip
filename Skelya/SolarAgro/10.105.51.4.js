[
    {
        "id": "45fefcf02a742bc1",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "9711fc3a30fc6c44",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "77bdfa0f3904308f",
        "type": "tab",
        "label": "Baryer",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "65b5a5388261abdc",
        "type": "tab",
        "label": "Соняшник/Соя",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "bb9cbd3caa430728",
        "type": "inject",
        "z": "45fefcf02a742bc1",
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
        "y": 100,
        "wires": [
            [
                "b54ff38464b705d4"
            ]
        ]
    },
    {
        "id": "68920c9af5e0c71e",
        "type": "http request",
        "z": "45fefcf02a742bc1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "digest",
        "senderr": false,
        "headers": [],
        "x": 450,
        "y": 100,
        "wires": [
            [
                "cbd807533f8bb465"
            ]
        ]
    },
    {
        "id": "d0ce2d6260f4556a",
        "type": "debug",
        "z": "45fefcf02a742bc1",
        "name": "debug 1",
        "active": true,
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
        "id": "b54ff38464b705d4",
        "type": "function",
        "z": "45fefcf02a742bc1",
        "name": "function 1",
        "func": "msg.url = \"http://10.105.10.34/ISAPI/Event/notification/httpServers/\"\nreturn msg;\n\n// http://admin:Qwerty12345@10.105.10.34/ISAPI/Event/notification/httpServers/",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 100,
        "wires": [
            [
                "68920c9af5e0c71e"
            ]
        ]
    },
    {
        "id": "cbd807533f8bb465",
        "type": "xml",
        "z": "45fefcf02a742bc1",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 330,
        "y": 180,
        "wires": [
            [
                "d0ce2d6260f4556a"
            ]
        ]
    },
    {
        "id": "c48a7d45e5dfe52f",
        "type": "http in",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "url": "/ids34",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 90,
        "y": 140,
        "wires": [
            [
                "9cc71f67a37ec662",
                "53d4ed4134a6a8f4",
                "25bf1c9979d29979",
                "dcd03bc4a50a8631"
            ]
        ]
    },
    {
        "id": "7ef41badeb037334",
        "type": "http in",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "url": "/ids33",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 660,
        "wires": [
            [
                "6dc89f34916f642d",
                "2c40d74e01f39bda",
                "316589d18f8dd504"
            ]
        ]
    },
    {
        "id": "d8bfcd258077331c",
        "type": "http in",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "url": "/ids21",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 920,
        "wires": [
            [
                "54478ff3d26ec6cd",
                "d315749b61e1a260",
                "73b09adb750f053c",
                "716493454deb59cb"
            ]
        ]
    },
    {
        "id": "54478ff3d26ec6cd",
        "type": "http response",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 210,
        "y": 820,
        "wires": []
    },
    {
        "id": "f371845503ec35a7",
        "type": "http in",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "url": "/ids20",
        "method": "post",
        "upload": true,
        "swaggerDoc": "",
        "x": 90,
        "y": 1240,
        "wires": [
            [
                "ad14bf9dce657946",
                "23c00d5c4a3e6669",
                "67fb82b584ee35d1",
                "0db9f1e4db16299a"
            ]
        ]
    },
    {
        "id": "ad14bf9dce657946",
        "type": "http response",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 290,
        "y": 1200,
        "wires": []
    },
    {
        "id": "9cc71f67a37ec662",
        "type": "http response",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 130,
        "y": 200,
        "wires": []
    },
    {
        "id": "75ac62941d8b28af",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "get pal and date",
        "func": "var licensePlate = msg.payload.EventNotificationAlert.ANPR[0].licensePlate[0]\nvar date = msg.payload.EventNotificationAlert.dateTime[0]\n\nmsg.payload = { licensePlate}\nreturn msg;\n\n// eventType: \"VMD\"\n// time: \"2022-11-08T12:21:03+08:00\"",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 1300,
        "wires": [
            [
                "9d4fd08440acbf79",
                "f372df9fd7491b96"
            ]
        ]
    },
    {
        "id": "9d4fd08440acbf79",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "send 1c",
        "func": "\nlet send1c = {\n    truck_id: \"\",\n    device_id: \"2286efc3-5417-f735-7050-384c1f011003\",\n    message: msg.payload\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nmsg.headers = {};\nmsg.headers[\"Content-Type\"] = 'application/json';\n\n\n\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 1300,
        "wires": [
            [
                "f2dea142830eb9b7",
                "fa6972c472447dc4",
                "5d1123809089b76f"
            ]
        ]
    },
    {
        "id": "f2dea142830eb9b7",
        "type": "http request",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": true,
        "authType": "basic",
        "senderr": false,
        "headers": [
            {
                "keyType": "Content-Type",
                "keyValue": "",
                "valueType": "application/json",
                "valueValue": ""
            }
        ],
        "x": 630,
        "y": 1300,
        "wires": [
            [
                "8fb6c95bdfafb97d"
            ]
        ]
    },
    {
        "id": "8fb6c95bdfafb97d",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 6",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 1420,
        "wires": []
    },
    {
        "id": "fa6972c472447dc4",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 7",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 1260,
        "wires": []
    },
    {
        "id": "f372df9fd7491b96",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 8",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 460,
        "y": 1340,
        "wires": []
    },
    {
        "id": "23c00d5c4a3e6669",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req file",
        "func": "flow.set(\"req\", msg.req);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 110,
        "y": 1280,
        "wires": [
            []
        ]
    },
    {
        "id": "da287329b17685ab",
        "type": "inject",
        "z": "9711fc3a30fc6c44",
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
        "payload": "req",
        "payloadType": "flow",
        "x": 130,
        "y": 1120,
        "wires": [
            [
                "9450cf1a7f044580"
            ]
        ]
    },
    {
        "id": "9450cf1a7f044580",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "function 13",
        "func": "msg.req = msg.payload\nmsg.payload = msg.req.body\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 130,
        "y": 1160,
        "wires": [
            [
                "67fb82b584ee35d1"
            ]
        ]
    },
    {
        "id": "67fb82b584ee35d1",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "convert",
        "func": "var date = msg.req.files\n\nif (date){\n    var fileReq = date[0]\n    msg.payload = fileReq.buffer.toString();\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 1240,
        "wires": [
            [
                "fba78d24c2f03ff6"
            ]
        ]
    },
    {
        "id": "fba78d24c2f03ff6",
        "type": "xml",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 450,
        "y": 1240,
        "wires": [
            [
                "75ac62941d8b28af"
            ]
        ]
    },
    {
        "id": "d2c29b6282416c7d",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "get pal and date",
        "func": "var licensePlate = msg.payload.EventNotificationAlert.ANPR[0].licensePlate[0]\nvar date = msg.payload.EventNotificationAlert.dateTime[0]\n\nmsg.payload = { licensePlate}\nreturn msg;\n\n// eventType: \"VMD\"\n// time: \"2022-11-08T12:21:03+08:00\"",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "f375f15c17071309"
            ]
        ]
    },
    {
        "id": "f375f15c17071309",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "send 1c",
        "func": "\nlet send1c = {\n    truck_id: \"\",\n    device_id: \"2286efc3-5417-f735-7050-384c1f011001\",\n    message: msg.payload\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 180,
        "wires": [
            [
                "082eeb074562ebeb",
                "e6e37f434f36f2e2"
            ]
        ]
    },
    {
        "id": "082eeb074562ebeb",
        "type": "http request",
        "z": "9711fc3a30fc6c44",
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
        "x": 710,
        "y": 180,
        "wires": [
            [
                "c9e0f0074f353859"
            ]
        ]
    },
    {
        "id": "c9e0f0074f353859",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 9",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 220,
        "wires": []
    },
    {
        "id": "e6e37f434f36f2e2",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 10",
        "active": false,
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
        "id": "5476340564edea2a",
        "type": "xml",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 430,
        "y": 120,
        "wires": [
            [
                "d2c29b6282416c7d"
            ]
        ]
    },
    {
        "id": "690c97e618efe601",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "get pal and date",
        "func": "var licensePlate = msg.payload.EventNotificationAlert.ANPR[0].licensePlate[0]\nvar date = msg.payload.EventNotificationAlert.dateTime[0]\n\nmsg.payload = { licensePlate}\nreturn msg;\n\n// eventType: \"VMD\"\n// time: \"2022-11-08T12:21:03+08:00\"",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 720,
        "wires": [
            [
                "9dbc74671eec71c0",
                "4b2cd225dc7fc3f9"
            ]
        ]
    },
    {
        "id": "9dbc74671eec71c0",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "send 1c",
        "func": "\nlet send1c = {\n    truck_id: \"\",\n    device_id: \"2286efc3-5417-f735-7050-384c1f011004\",\n    message: msg.payload\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 720,
        "wires": [
            [
                "94738f5a2e6cbf7c",
                "b530b833c580af90"
            ]
        ]
    },
    {
        "id": "94738f5a2e6cbf7c",
        "type": "http request",
        "z": "9711fc3a30fc6c44",
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
        "x": 690,
        "y": 720,
        "wires": [
            [
                "5c48e04bf0d43af7"
            ]
        ]
    },
    {
        "id": "5c48e04bf0d43af7",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 12",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 760,
        "wires": []
    },
    {
        "id": "b530b833c580af90",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 13",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 680,
        "wires": []
    },
    {
        "id": "4b2cd225dc7fc3f9",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 14",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 520,
        "y": 760,
        "wires": []
    },
    {
        "id": "d41cf24245e3a4a1",
        "type": "xml",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 450,
        "y": 660,
        "wires": [
            [
                "690c97e618efe601"
            ]
        ]
    },
    {
        "id": "2272f02848505128",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "get pal and date",
        "func": "var licensePlate = msg.payload.EventNotificationAlert.ANPR[0].licensePlate[0]\nvar date = msg.payload.EventNotificationAlert.dateTime[0]\n\nmsg.payload = { licensePlate}\nreturn msg;\n\n// eventType: \"VMD\"\n// time: \"2022-11-08T12:21:03+08:00\"",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 960,
        "wires": [
            [
                "8039eb5dd7446fa1",
                "f8b8dff3a8ca4caf"
            ]
        ]
    },
    {
        "id": "8039eb5dd7446fa1",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "send 1c",
        "func": "\nlet send1c = {\n    truck_id: \"\",\n    device_id: \"2286efc3-5417-f735-7050-384c1f011002\",\n    message: msg.payload\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 500,
        "y": 960,
        "wires": [
            [
                "ac0b8908db7e9b06",
                "4c910cd5b83cce21"
            ]
        ]
    },
    {
        "id": "ac0b8908db7e9b06",
        "type": "http request",
        "z": "9711fc3a30fc6c44",
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
        "x": 670,
        "y": 960,
        "wires": [
            [
                "c5cfb7c9b8d9eb1c"
            ]
        ]
    },
    {
        "id": "c5cfb7c9b8d9eb1c",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 15",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 1000,
        "wires": []
    },
    {
        "id": "4c910cd5b83cce21",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 16",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 920,
        "wires": []
    },
    {
        "id": "f8b8dff3a8ca4caf",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 17",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 1000,
        "wires": []
    },
    {
        "id": "c2502f868b6e689e",
        "type": "xml",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 900,
        "wires": [
            [
                "2272f02848505128"
            ]
        ]
    },
    {
        "id": "d315749b61e1a260",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 20",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 340,
        "y": 820,
        "wires": []
    },
    {
        "id": "5d1123809089b76f",
        "type": "json",
        "z": "9711fc3a30fc6c44",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 530,
        "y": 1440,
        "wires": [
            [
                "8fb6c95bdfafb97d"
            ]
        ]
    },
    {
        "id": "73b09adb750f053c",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req file",
        "func": "flow.set(\"req21\", msg.req);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 90,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "6dc89f34916f642d",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req file",
        "func": "flow.set(\"req33\", msg.req);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 130,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "53d4ed4134a6a8f4",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req file",
        "func": "flow.set(\"req34\", msg.req);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 130,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "6a751e230afc5e9b",
        "type": "inject",
        "z": "9711fc3a30fc6c44",
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
        "payload": "req33",
        "payloadType": "flow",
        "x": 100,
        "y": 540,
        "wires": [
            [
                "5daff3096c170bed"
            ]
        ]
    },
    {
        "id": "5daff3096c170bed",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req33",
        "func": "msg.req = msg.payload\nmsg.payload = msg.req.body\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 230,
        "y": 540,
        "wires": [
            [
                "2c40d74e01f39bda"
            ]
        ]
    },
    {
        "id": "45eef6bddde72cb0",
        "type": "inject",
        "z": "9711fc3a30fc6c44",
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
        "payload": "req34",
        "payloadType": "flow",
        "x": 100,
        "y": 40,
        "wires": [
            [
                "2fc7c1b9af0149e9"
            ]
        ]
    },
    {
        "id": "2fc7c1b9af0149e9",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "req33",
        "func": "msg.req = msg.payload\nmsg.payload = msg.req.body\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 230,
        "y": 40,
        "wires": [
            [
                "7baa806a2271850f",
                "25bf1c9979d29979"
            ]
        ]
    },
    {
        "id": "7baa806a2271850f",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 22",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 420,
        "y": 40,
        "wires": []
    },
    {
        "id": "25bf1c9979d29979",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "function 17",
        "func": "var inDate = msg.payload.toString();\nvar req = inDate.split(\"--boundary\")\nvar date = req[1].substr(req[1].indexOf(\"<?xml\"))\nmsg.payload = date;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 120,
        "wires": [
            [
                "5476340564edea2a"
            ]
        ]
    },
    {
        "id": "2c40d74e01f39bda",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "function 18",
        "func": "var inDate = msg.payload.toString();\nvar req = inDate.split(\"--boundary\")\nvar date = req[1].substr(req[1].indexOf(\"<?xml\"))\nmsg.payload = date;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 660,
        "wires": [
            [
                "d41cf24245e3a4a1"
            ]
        ]
    },
    {
        "id": "716493454deb59cb",
        "type": "function",
        "z": "9711fc3a30fc6c44",
        "name": "function 19",
        "func": "var inDate = msg.payload.toString();\nvar req = inDate.split(\"--boundary\")\nvar date = req[1].substr(req[1].indexOf(\"<?xml\"))\nmsg.payload = date;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 900,
        "wires": [
            [
                "c2502f868b6e689e"
            ]
        ]
    },
    {
        "id": "dcd03bc4a50a8631",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 25",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 360,
        "y": 220,
        "wires": []
    },
    {
        "id": "316589d18f8dd504",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 26",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 320,
        "y": 620,
        "wires": []
    },
    {
        "id": "0db9f1e4db16299a",
        "type": "debug",
        "z": "9711fc3a30fc6c44",
        "name": "debug 35",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 360,
        "y": 1140,
        "wires": []
    },
    {
        "id": "5f76e78441391c5d",
        "type": "inject",
        "z": "77bdfa0f3904308f",
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
        "y": 140,
        "wires": [
            [
                "acf49f124a2c028b"
            ]
        ]
    },
    {
        "id": "42cad0600a1d2a1e",
        "type": "http in",
        "z": "77bdfa0f3904308f",
        "name": "",
        "url": "/api/platform/barrier",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 200,
        "wires": [
            [
                "acf49f124a2c028b",
                "0ae1ef93e46478b2",
                "9c8a8e956e70042e"
            ]
        ]
    },
    {
        "id": "acf49f124a2c028b",
        "type": "function",
        "z": "77bdfa0f3904308f",
        "name": "high",
        "func": "var url = msg.payload.url\nmsg.url = url\n//msg.url = \"http://10.105.10.34:80/ISAPI/System/IO/outputs/1/trigger\"\n\nmsg.payload = `<IOPortData>\n\t<outputState>high</outputState>\n</IOPortData>\n`\n\n\n\nreturn msg;\n\n\n// <IOPortData>\n//     <outputState>low</outputState>\n// </IOPortData>\n\n\n\n// <IOPortData>\n//     <outputState>high</outputState>\n// </IOPortData>\n\n\n// {\n// \t\"ip\": \"10.105.10.34\",\n// \t\t\"port\": 80,\n// \t\t\t\"login\": \"admin\",\n// \t\t\t\t\"password\": \"admin\",\n// \t\t\t\t\t\"secureConnection\": false,\n// \t\t\t\t\t\t\"timeout\": 30,\n// \t\t\t\t\t\t\t\"status\": true,\n// \t\t\t\t\t\t\t\t\"url\": \"http://10.105.10.34:80//ISAPI/System/IO/outputs/1/trigger\"\n// }",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 200,
        "wires": [
            [
                "ad105b4575dafce8"
            ]
        ]
    },
    {
        "id": "ad105b4575dafce8",
        "type": "http request",
        "z": "77bdfa0f3904308f",
        "name": "",
        "method": "PUT",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "digest",
        "senderr": false,
        "headers": [
            {
                "keyType": "Content-Type",
                "keyValue": "",
                "valueType": "application/xml",
                "valueValue": ""
            }
        ],
        "x": 530,
        "y": 200,
        "wires": [
            [
                "2028901ef288d1d2",
                "0ae1ef93e46478b2"
            ]
        ]
    },
    {
        "id": "2028901ef288d1d2",
        "type": "http response",
        "z": "77bdfa0f3904308f",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 690,
        "y": 200,
        "wires": []
    },
    {
        "id": "9c8a8e956e70042e",
        "type": "trigger",
        "z": "77bdfa0f3904308f",
        "name": "",
        "op1": "",
        "op2": "",
        "op1type": "nul",
        "op2type": "pay",
        "duration": "2",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 180,
        "y": 280,
        "wires": [
            [
                "59e57a08f99a85cd"
            ]
        ]
    },
    {
        "id": "59e57a08f99a85cd",
        "type": "function",
        "z": "77bdfa0f3904308f",
        "name": "low",
        "func": "var url = msg.payload.url\nmsg.url = url\n\n//msg.url = \"http://10.105.10.34:80/ISAPI/System/IO/outputs/1/trigger\"\nmsg.payload = `<IOPortData>\n\t<outputState>low</outputState>\n</IOPortData>\n`\n\nreturn msg;\n\n\n// <IOPortData>\n//     <outputState>low</outputState>\n// </IOPortData>\n\n\n\n// <IOPortData>\n//     <outputState>high</outputState>\n// </IOPortData>",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 280,
        "wires": [
            [
                "ad105b4575dafce8"
            ]
        ]
    },
    {
        "id": "0ae1ef93e46478b2",
        "type": "debug",
        "z": "77bdfa0f3904308f",
        "name": "debug 27",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 280,
        "wires": []
    },
    {
        "id": "0b404c60d76b3b48",
        "type": "comment",
        "z": "65b5a5388261abdc",
        "name": "такс 1",
        "info": "/home/pi/Log Files - каталог з аналізами\n/home/pi/Log Files/sunflower__22_12 _22.RILog - файл аналізами\n\n1. Отримати всі аналізи(прочитати файл аналізу)\n2. Зробити масив аналізів метод spilt() - передати в аргумент символ переводу строку\n3. Зробити масив обєктів з показниками якості(усіх показників)\n    приклад як має бути\n    var full = [{date: 1/2/2023/ weight: 34.685, sampleId: 18, oil: 43.8, moisture: 6.62},\n                {date: 1/2/2023/ weight: 34.685, sampleId: 18, oil: 43.8, moisture: 6.62},\n                {date: 1/2/2023/ weight: 34.685, sampleId: 18, oil: 43.8, moisture: 6.62}\n      ]\n\n      і Так всі аналізи що є у файлі",
        "x": 90,
        "y": 120,
        "wires": []
    },
    {
        "id": "994a033cc2172adc",
        "type": "file in",
        "z": "65b5a5388261abdc",
        "name": "read_sunflower",
        "filename": "/home/pi/atomdata/mrAnalis/Log Files/sunflower__22_12 _22.RILog",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 660,
        "y": 160,
        "wires": [
            [
                "a1021fa0d40c9471",
                "5043def6d81174fa",
                "3160c365bad36845"
            ]
        ]
    },
    {
        "id": "89dd6c0c017bb5e9",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "last_suflower",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 160,
        "wires": []
    },
    {
        "id": "a1021fa0d40c9471",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "last_sunflower",
        "func": "var all=flow.get('all_1')\nvar original = msg.payload.split('\\n')\nvar rus=[]\nvar dlin=original.length\nfor (var i = 0; i < dlin; i++) {\n    var arr_1 = original[i].split(',')\n    var pris = {\n        number: arr_1[0],\n        data: arr_1[1],\n        time: arr_1[2],\n        vaga: arr_1[3],\n        id: arr_1[4],\n        user: arr_1[6],\n        oil: arr_1[8],\n        molsture: arr_1[9],\n        dry: arr_1[10],\n        origen: original[i]\n\n    }\n    rus.push(pris)\n}\nrus.pop()\nvar isEqual = rus.toString() === all.toString();\nif (isEqual) {\n    \n} else {\n    msg.payload = rus[rus.length - 1]\n    flow.set(\"all_1\", rus)\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 900,
        "y": 160,
        "wires": [
            [
                "89dd6c0c017bb5e9",
                "d4276d9a.3fe8c"
            ]
        ]
    },
    {
        "id": "c8d6f84f0f8d8978",
        "type": "inject",
        "z": "65b5a5388261abdc",
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
        "payload": "all_1",
        "payloadType": "flow",
        "x": 100,
        "y": 400,
        "wires": [
            [
                "ef4c60788d9ec376"
            ]
        ]
    },
    {
        "id": "ef4c60788d9ec376",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 22",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 240,
        "y": 400,
        "wires": []
    },
    {
        "id": "5043def6d81174fa",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 23",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 80,
        "wires": []
    },
    {
        "id": "e1d99c6a7cabf8d6",
        "type": "inject",
        "z": "65b5a5388261abdc",
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
                "5285cab53c406e41",
                "4bc1d04648b86524"
            ]
        ]
    },
    {
        "id": "5285cab53c406e41",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "init_all_varriable",
        "func": "flow.set(\"all_1\", []);\nflow.set(\"all_2\", []);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "c35c97ced24ac209",
        "type": "inject",
        "z": "65b5a5388261abdc",
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
        "repeat": "15",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "f40fa600eccbfdff"
            ]
        ]
    },
    {
        "id": "f40fa600eccbfdff",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "function 11",
        "func": "var pass = \"1111\"\nvar login = \"MQC\"\nvar ip =\"10.105.51.200\"\n\n\nmsg.payload = `sudo sshpass -p \"${pass}\" scp -r ${login}@${ip}:'C:/\"Program Files (x86)\"/Resonance/RICalib/\"Log Files\"' /home/pi/atomdata/mrAnalis`\nreturn msg;\n\n\"\"",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 150,
        "y": 220,
        "wires": [
            [
                "58eb6629fbc01a93"
            ]
        ]
    },
    {
        "id": "58eb6629fbc01a93",
        "type": "exec",
        "z": "65b5a5388261abdc",
        "command": "",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 370,
        "y": 220,
        "wires": [
            [
                "9bbb3f808ba1ea04",
                "994a033cc2172adc",
                "0d5dca71c1f49fb3"
            ],
            [
                "9bbb3f808ba1ea04"
            ],
            [
                "9bbb3f808ba1ea04"
            ]
        ]
    },
    {
        "id": "3160c365bad36845",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "function 12",
        "func": "var original = msg.payload.split('\\n')\nmsg.payload=original\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 890,
        "y": 200,
        "wires": [
            [
                "11f9d3a69ff99977"
            ]
        ]
    },
    {
        "id": "11f9d3a69ff99977",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1080,
        "y": 200,
        "wires": []
    },
    {
        "id": "0d5dca71c1f49fb3",
        "type": "file in",
        "z": "65b5a5388261abdc",
        "name": "read_soya",
        "filename": "/home/pi/atomdata/mrAnalis/Log Files/soy 22_12_22.RILog",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 630,
        "y": 500,
        "wires": [
            [
                "1809b862b8782157",
                "60638a4dc293acd3",
                "cde228a82353ae41"
            ]
        ]
    },
    {
        "id": "1809b862b8782157",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 26",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 440,
        "wires": []
    },
    {
        "id": "60638a4dc293acd3",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "lust_soya",
        "func": "var all=flow.get('all_2')\nvar original = msg.payload.split('\\n')\nvar rus=[]\nvar dlin=original.length\nfor (var i = 0; i < dlin; i++) {\n    var arr_1 = original[i].split(',')\n    var pris = {\n        number: arr_1[0],\n        data: arr_1[1],\n        time: arr_1[2],\n        vaga: arr_1[3],\n        id: arr_1[4],\n        user: arr_1[6],\n        oil: arr_1[8],\n        molsture: arr_1[9],\n        dry: arr_1[10],\n        origen: original[i]\n\n    }\n    rus.push(pris)\n}\nrus.pop()\nvar isEqual = rus.toString() === all.toString();\nif (isEqual) {\n    \n} else {\n    msg.payload = rus[rus.length - 1]\n    flow.set(\"all_2\", rus)\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 500,
        "wires": [
            [
                "b6926a1e9afbcefa",
                "410b8a38acb0c428"
            ]
        ]
    },
    {
        "id": "b6926a1e9afbcefa",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "lust_soya",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 500,
        "wires": []
    },
    {
        "id": "cde228a82353ae41",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "function 14",
        "func": "var original = msg.payload.split('\\n')\nmsg.payload=original\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 850,
        "y": 540,
        "wires": [
            [
                "da56015ed40ad920"
            ]
        ]
    },
    {
        "id": "da56015ed40ad920",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 28",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 540,
        "wires": []
    },
    {
        "id": "31ed4e055ff4edb1",
        "type": "inject",
        "z": "65b5a5388261abdc",
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
        "payload": "all_2",
        "payloadType": "flow",
        "x": 100,
        "y": 440,
        "wires": [
            [
                "f6f733006c1805c1"
            ]
        ]
    },
    {
        "id": "f6f733006c1805c1",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 29",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 240,
        "y": 440,
        "wires": []
    },
    {
        "id": "4bc1d04648b86524",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 30",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 320,
        "y": 100,
        "wires": []
    },
    {
        "id": "9bbb3f808ba1ea04",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 33",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 80,
        "wires": []
    },
    {
        "id": "47e23a0f9e22b2e5",
        "type": "comment",
        "z": "65b5a5388261abdc",
        "name": "Соя",
        "info": "/home/pi/Log Files/soy 22_12_22.RILog",
        "x": 630,
        "y": 440,
        "wires": []
    },
    {
        "id": "e2f7fa53bdd8bf88",
        "type": "comment",
        "z": "65b5a5388261abdc",
        "name": "Соняшник",
        "info": "/home/pi/Log Files/sunflower__22_12 _22.RILog",
        "x": 680,
        "y": 120,
        "wires": []
    },
    {
        "id": "7ac45a2b351f196e",
        "type": "inject",
        "z": "65b5a5388261abdc",
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
        "y": 640,
        "wires": [
            [
                "c94ecc9dc68c3743"
            ]
        ]
    },
    {
        "id": "c94ecc9dc68c3743",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "function 18",
        "func": "var file = \"sunflower__22_12 _22.RILog\" //sunflower__22_12 _22.RILog\nmsg.filename = `/home/pi/LOG_FILE/${file}`\n\nmsg.payload = `sudo sshpass -p \"020895\" scp -r sasha_pc_w10@192.168.0.103:'E:/m21/\"Log Files\"/\"${file}\"' /home/pi/LOG_FILE`\n\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 640,
        "wires": [
            [
                "b2f9ecd406ed4a29"
            ]
        ]
    },
    {
        "id": "b2f9ecd406ed4a29",
        "type": "exec",
        "z": "65b5a5388261abdc",
        "command": "",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 450,
        "y": 640,
        "wires": [
            [
                "e0b9c5b19545685d",
                "dbbf93134cf6fb3e"
            ],
            [
                "dbbf93134cf6fb3e"
            ],
            [
                "dbbf93134cf6fb3e"
            ]
        ]
    },
    {
        "id": "e0b9c5b19545685d",
        "type": "file in",
        "z": "65b5a5388261abdc",
        "name": "read_soya",
        "filename": "filename",
        "filenameType": "msg",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 130,
        "y": 720,
        "wires": [
            [
                "a9b02cca4a918fba"
            ]
        ]
    },
    {
        "id": "dbbf93134cf6fb3e",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "debug 34",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 640,
        "wires": []
    },
    {
        "id": "a9b02cca4a918fba",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "last_sunflower",
        "func": "var all=flow.get('all_1')\nvar original = msg.payload.split('\\n')\nvar rus=[]\nvar dlin=original.length\nfor (var i = 0; i < dlin; i++) {\n    var arr_1 = original[i].split(',')\n    var pris = {\n        number: arr_1[0],\n        data: arr_1[1],\n        time: arr_1[2],\n        vaga: arr_1[3],\n        id: arr_1[4],\n        user: arr_1[6],\n        oil: arr_1[8],\n        molsture: arr_1[9],\n        dry: arr_1[10],\n        origen: original[i]\n\n    }\n    rus.push(pris)\n}\nrus.pop()\nvar isEqual = rus.toString() === all.toString();\nif (isEqual) {\n    \n} else {\n    msg.payload = rus[rus.length - 1]\n    flow.set(\"all_1\", rus)\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 720,
        "wires": [
            [
                "8d9c76229cb41975"
            ]
        ]
    },
    {
        "id": "8d9c76229cb41975",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "last_suflower",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 720,
        "wires": []
    },
    {
        "id": "67cc96ff4834be8e",
        "type": "comment",
        "z": "65b5a5388261abdc",
        "name": "Соняшник файл",
        "info": "/home/pi/Log Files/sunflower__22_12 _22.RILog",
        "x": 160,
        "y": 600,
        "wires": []
    },
    {
        "id": "d4276d9a.3fe8c",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "send 1c",
        "func": "let send1c = {\n    truck_id: \"\",\n    device_id:\"2286efc3-5417-f735-7050-384c1f019000\",\n    message: msg.payload.origen,\n    type: \"sunflower\"\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 280,
        "wires": [
            [
                "f91be1a7.262ff",
                "94c2d89b10b09e22"
            ]
        ]
    },
    {
        "id": "f91be1a7.262ff",
        "type": "http request",
        "z": "65b5a5388261abdc",
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
        "x": 1070,
        "y": 300,
        "wires": [
            [
                "21b7ec19.f53514"
            ]
        ]
    },
    {
        "id": "21b7ec19.f53514",
        "type": "debug",
        "z": "65b5a5388261abdc",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 1250,
        "y": 300,
        "wires": []
    },
    {
        "id": "410b8a38acb0c428",
        "type": "function",
        "z": "65b5a5388261abdc",
        "name": "send 1c",
        "func": "let send1c = {\n    truck_id: \"\",\n    device_id:\"2286efc3-5417-f735-7050-384c1f019000\",\n    message: msg.payload.origen,\n    type: \"soy\"\n}\n\nmsg.payload = send1c;\nmsg.url = \"http://10.105.51.1/kku_prod/hs/PerimeterControl/api/SmartScales/quality\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 340,
        "wires": [
            [
                "f91be1a7.262ff",
                "94c2d89b10b09e22"
            ]
        ]
    },
    {
        "id": "94c2d89b10b09e22",
        "type": "json",
        "z": "65b5a5388261abdc",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 1070,
        "y": 360,
        "wires": [
            [
                "21b7ec19.f53514"
            ]
        ]
    }
]
