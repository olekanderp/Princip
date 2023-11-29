[
    {
        "id": "8f221f996621bf70",
        "type": "tab",
        "label": "CARD  Ваги 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c15a3dd8.04655",
        "type": "tab",
        "label": "Ваги 1 Avto_1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "f276aaac.2ff468",
        "type": "tab",
        "label": "Ваги 1 Avto_1 processing_scale1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "5b41289ad69477f1",
        "type": "tab",
        "label": "Ваги 1 Ворота",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "a21c7d12624fa5bd",
        "type": "tab",
        "label": "Ваги 1 Світлофори",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "73b0505b9305902b",
        "type": "tab",
        "label": "Ваги 1 Зчитувач на вагові",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "09199622c1a1c282",
        "type": "tab",
        "label": "Ваги 2 Карта",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c331810f9e53762d",
        "type": "tab",
        "label": "Ваги 2 Avto_2",
        "disabled": false,
        "info": ""
    },
    {
        "id": "9276f7c982d767df",
        "type": "tab",
        "label": "Ваги 2 Avto_2 processing_scale1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "8d272cf92b0e3e74",
        "type": "tab",
        "label": "Ваги 2 Ворота",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "a6b252bc4b20c0ab",
        "type": "tab",
        "label": "Ваги 2 Пожежний вхід",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "95a4c69dfb430959",
        "type": "tab",
        "label": "Ваги 2 Пожежний вихыд",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2e9d521348c04d2b",
        "type": "tab",
        "label": "Ваги 2 Світлофори",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "91cc16af9676526d",
        "type": "tab",
        "label": "Завальна яма 3 (new)",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "f330dd24d68f1676",
        "type": "tab",
        "label": "Яма 3 CARD",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "ca2f71b32b2cf24e",
        "type": "tab",
        "label": "Яма 3 Шлагбаум",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "faecd4c0664297e1",
        "type": "tab",
        "label": "Яма 3 Світлофори",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b26a2a4ee91c8b9d",
        "type": "tab",
        "label": "jd  3 платформи",
        "disabled": false,
        "info": ""
    },
    {
        "id": "3466efb0e3b831a5",
        "type": "tab",
        "label": "jd  2 платформи",
        "disabled": false,
        "info": ""
    },
    {
        "id": "1cfa887c3e9a5aa2",
        "type": "tab",
        "label": "Яма 2 (стара)",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "1baa1890d7bd7b12",
        "type": "tab",
        "label": "Яма 2 CARD",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "7a96b55d27e51205",
        "type": "tab",
        "label": "Яма 2 Шлагбаум",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "ae16c5990a2246bd",
        "type": "tab",
        "label": "Яма 2 Світлофори",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "74565def2561d592",
        "type": "tab",
        "label": "Загрузка",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "edcf18b7134e0820",
        "type": "tab",
        "label": "Загрузка CARD",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d9e05908ebb0562a",
        "type": "tab",
        "label": "Загрузка Шлагбаум",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "1e6db574b7566234",
        "type": "tab",
        "label": "Загрузка Світлофори",
        "disabled": false,
        "info": "",
        "env": []
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
        "id": "cd65df4c2baf6aad",
        "type": "tcp in",
        "z": "8f221f996621bf70",
        "name": "",
        "server": "client",
        "host": "172.16.9.240",
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
                "b8ced80273f5fd68",
                "98843298f354bb35"
            ]
        ]
    },
    {
        "id": "2eb5bb6126de0be7",
        "type": "debug",
        "z": "8f221f996621bf70",
        "name": "debug 5",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 180,
        "wires": []
    },
    {
        "id": "703acbaa9495683b",
        "type": "comment",
        "z": "8f221f996621bf70",
        "name": "Зчитувач 9761 ",
        "info": "3C 00 48 B6 8A",
        "x": 120,
        "y": 140,
        "wires": []
    },
    {
        "id": "b8ced80273f5fd68",
        "type": "function",
        "z": "8f221f996621bf70",
        "name": "function 2",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "6c85933ed5294c73",
                "98843298f354bb35"
            ]
        ]
    },
    {
        "id": "6c85933ed5294c73",
        "type": "trigger",
        "z": "8f221f996621bf70",
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
                "ff1e0883037b82fa",
                "98843298f354bb35"
            ]
        ]
    },
    {
        "id": "731171307e215b27",
        "type": "inject",
        "z": "8f221f996621bf70",
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
                "0bb40e0a4b7ca4fc"
            ]
        ]
    },
    {
        "id": "0bb40e0a4b7ca4fc",
        "type": "function",
        "z": "8f221f996621bf70",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "ff1e0883037b82fa",
        "type": "function",
        "z": "8f221f996621bf70",
        "name": "function 3",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 180,
        "wires": [
            [
                "2eb5bb6126de0be7",
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "98843298f354bb35",
        "type": "debug",
        "z": "8f221f996621bf70",
        "name": "debug 15",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 140,
        "wires": []
    },
    {
        "id": "c1d94071c156f84f",
        "type": "function",
        "z": "8f221f996621bf70",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 9,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
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
        "z": "8f221f996621bf70",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.27/bc/hs/elevator",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 730,
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
        "z": "8f221f996621bf70",
        "name": "debug 18",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 280,
        "wires": []
    },
    {
        "id": "1f5850c634a72f72",
        "type": "inject",
        "z": "8f221f996621bf70",
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
        "x": 260,
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
        "z": "8f221f996621bf70",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 710,
        "y": 240,
        "wires": []
    },
    {
        "id": "9db5fe1e8cc70463",
        "type": "debug",
        "z": "8f221f996621bf70",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 320,
        "wires": []
    },
    {
        "id": "4a0a82c4a1e9a734",
        "type": "inject",
        "z": "8f221f996621bf70",
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
        "x": 250,
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
        "z": "8f221f996621bf70",
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
        "x": 260,
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
        "z": "8f221f996621bf70",
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
        "x": 260,
        "y": 400,
        "wires": [
            [
                "c1d94071c156f84f"
            ]
        ]
    },
    {
        "id": "727cb712a9128158",
        "type": "comment",
        "z": "8f221f996621bf70",
        "name": "",
        "info": "0300866665\n\n9600 [ 0 ] [ 134, 102 ] [ 101 ]\n19200 [ 0 ] [ 120, 120 ] [ 102, 120 ]\n115200 [ 0 ] [ 0, 0, 0, 0 ] [ 0, 0, 0, 0, 0 ]\n38400 [ 0 ] [ 128, 0, 128 ] [ 128, 120, 120, 248 ]",
        "x": 190,
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
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 120,
        "y": 180,
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
        "x": 110,
        "y": 140,
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
        "x": 90,
        "y": 100,
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
        "name": "INITIALIZING Автоваги 1 ()",
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
        "func": "flow.set('inputString', \"G01W\" + String.fromCharCode(13) + String.fromCharCode(10));\nflow.set('parser',function(v){\n        v = v.substring(4, v.length)\n        v = Number(v) * 1000\n       //return v\n       return Number(v.toFixed());\n    }\n  );\n//global.set('scale_id_1','7b633b9c-b05c-2a3b-f500-7f991f019000');\n//global.set('ip','');\nglobal.set('video_camera_url','');\nglobal.set(\"scaleOn\", true)\nglobal.set(\"url1C\", \"172.16.9.27/bc/hs/elevator\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 240,
        "y": 100,
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
        "x": 430,
        "y": 180,
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
        "func": "var weigth_time = flow.get(\"weigth_time\");\nvar time_rasp = flow.get(\"time_rasp\");\n\nvar sub = time_rasp - weigth_time;\n//msg.payload = {\n//    sub: time_rasp - weigth_time,\n//    weigth_time: weigth_time,\n//    time_rasp: time_rasp\n//}\n\n    if(sub > 5000){\n        msg.payload = 0;\n        global.set(\"scaleOn\", false)\n    return msg;\n    }\n",
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
        "x": 410,
        "y": 100,
        "wires": []
    },
    {
        "id": "239cd42a199c180d",
        "type": "tcp request",
        "z": "c15a3dd8.04655",
        "name": "",
        "server": "172.16.9.236",
        "port": "9762",
        "out": "char",
        "ret": "string",
        "splitc": "\\n",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 140,
        "y": 280,
        "wires": [
            [
                "84b55b7c.21b408",
                "6229f4b1.8460cc"
            ]
        ]
    },
    {
        "id": "dc807f923e10621d",
        "type": "comment",
        "z": "c15a3dd8.04655",
        "name": "tcp 9762",
        "info": "",
        "x": 140,
        "y": 240,
        "wires": []
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
        "url": "/getWeightFull/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
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
        "x": 650,
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
        "active": false,
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
                "a69a3bd649466461"
            ]
        ]
    },
    {
        "id": "556ab1c7bd340d59",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/scale/getWeight/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 1100,
        "wires": [
            [
                "af92073257a99353"
            ]
        ]
    },
    {
        "id": "af92073257a99353",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 14",
        "func": "\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 170,
        "y": 1200,
        "wires": [
            [
                "6d6a8a172f211c06",
                "81b90b7627071161"
            ]
        ]
    },
    {
        "id": "6d6a8a172f211c06",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 410,
        "y": 1200,
        "wires": [
            [
                "c52ae045f4942d97",
                "71cb46eb4bb6b86f",
                "7794c8c454ca0ded"
            ]
        ]
    },
    {
        "id": "81b90b7627071161",
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
        "y": 1320,
        "wires": [
            [
                "c6ecdf1354fa1ec3"
            ]
        ]
    },
    {
        "id": "b66466b2d1141715",
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
        "y": 1360,
        "wires": [
            [
                "6d6a8a172f211c06",
                "81b90b7627071161"
            ]
        ]
    },
    {
        "id": "c52ae045f4942d97",
        "type": "xml",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 550,
        "y": 1200,
        "wires": [
            [
                "764dd9013b66af82"
            ]
        ]
    },
    {
        "id": "71cb46eb4bb6b86f",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 13",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 580,
        "y": 1160,
        "wires": []
    },
    {
        "id": "7794c8c454ca0ded",
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
        "y": 1280,
        "wires": [
            [
                "81b90b7627071161"
            ]
        ]
    },
    {
        "id": "c6ecdf1354fa1ec3",
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
        "y": 1320,
        "wires": [
            [
                "79c5c3bbc957abb0",
                "e14d742af04744c4"
            ]
        ]
    },
    {
        "id": "764dd9013b66af82",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 12",
        "func": "var perimetr = msg.payload.response.btn0[0]; //dn - true up -false\nvar res = false\nif (perimetr === 'dn'){\n    res = true\n}\nif (perimetr === 'up') {\n    res = false\n}\n\nmsg.payload = res\nmsg.perimetr = res\n//perimetr\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 690,
        "y": 1200,
        "wires": [
            [
                "cfb272171e400b70",
                "e14d742af04744c4"
            ]
        ]
    },
    {
        "id": "79c5c3bbc957abb0",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 14",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 1320,
        "wires": []
    },
    {
        "id": "e14d742af04744c4",
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
        "y": 1260,
        "wires": [
            [
                "a6bb89435dabfa52"
            ]
        ]
    },
    {
        "id": "cfb272171e400b70",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 12",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 1200,
        "wires": []
    },
    {
        "id": "a6bb89435dabfa52",
        "type": "http response",
        "z": "f276aaac.2ff468",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1010,
        "y": 1260,
        "wires": []
    },
    {
        "id": "200d97e9da4b7855",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/scale/getWeight4",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1020,
        "wires": [
            [
                "ec8826c934a58151"
            ]
        ]
    },
    {
        "id": "ec8826c934a58151",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "response",
        "func": "msg.payload = {\n    date: new Date(),\n    weight: flow.get('transactionMetadata').weight,\n    scaleId: 1,\n    stable: flow.get('transactionMetadata').stable,\n    scaleOn: global.get(\"scaleOn\")\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 400,
        "y": 1020,
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
        "x": 590,
        "y": 1020,
        "wires": []
    },
    {
        "id": "edd7bbcafd545fce",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
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
        "y": 1520,
        "wires": [
            [
                "c1ab948dabd96084",
                "5af9bdd39f7dd4d1"
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
        "y": 1480,
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
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 1600,
        "wires": [
            [
                "f3cc16a88f0ac7ce"
            ]
        ]
    },
    {
        "id": "ed04f3adb1c693c2",
        "type": "http in",
        "z": "f276aaac.2ff468",
        "name": "",
        "url": "/status/perimetr/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 1520,
        "wires": [
            [
                "edd7bbcafd545fce"
            ]
        ]
    },
    {
        "id": "c28f9ace7d31b3c4",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 28",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 1560,
        "wires": []
    },
    {
        "id": "c1ab948dabd96084",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 19",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}else{\n    closed = true\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 1520,
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
        "y": 1520,
        "wires": []
    },
    {
        "id": "5af9bdd39f7dd4d1",
        "type": "debug",
        "z": "f276aaac.2ff468",
        "name": "debug 29",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 1480,
        "wires": []
    },
    {
        "id": "3e9c0c8cb31fcc81",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Події оптосенсорів",
        "info": "",
        "x": 150,
        "y": 1660,
        "wires": []
    },
    {
        "id": "346093e50b13ee89",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Socket 2 tcp 9763",
        "info": "",
        "x": 150,
        "y": 1720,
        "wires": []
    },
    {
        "id": "a3696adbd564e9ea",
        "type": "tcp in",
        "z": "f276aaac.2ff468",
        "name": "172.16.9.241",
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
        "x": 170,
        "y": 1760,
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
        "x": 230,
        "y": 1820,
        "wires": []
    },
    {
        "id": "ce3d09c73ae98ce7",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            procname: \"OpticalLoop\",\n            control_point_num: 1,\n            clockseconds: Date.now(),\n            closed: closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            procname: \"OpticalLoop\",\n            control_point_num: 1,\n            clockseconds: Date.now(),\n            closed: closed //true перетнутий  : false - все ок\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 430,
        "y": 1760,
        "wires": [
            [
                "bd38888a3e58ae89",
                "4d6f2019bc75c513"
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
        "x": 830,
        "y": 1760,
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
        "x": 640,
        "y": 1760,
        "wires": [
            [
                "6d70f4d905021a99"
            ]
        ]
    },
    {
        "id": "3ed520810a6e3e7e",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 750,
        "y": 1700,
        "wires": []
    },
    {
        "id": "4d6f2019bc75c513",
        "type": "link out",
        "z": "f276aaac.2ff468",
        "name": "link out 1",
        "mode": "link",
        "links": [
            "5bf5ffd4a2346dcb"
        ],
        "x": 755,
        "y": 1660,
        "wires": []
    },
    {
        "id": "f3cc16a88f0ac7ce",
        "type": "http request",
        "z": "f276aaac.2ff468",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 1600,
        "wires": [
            [
                "a4da4614811a4662"
            ]
        ]
    },
    {
        "id": "a4da4614811a4662",
        "type": "xml",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 1600,
        "wires": [
            [
                "413a7d06b74dd0a6"
            ]
        ]
    },
    {
        "id": "413a7d06b74dd0a6",
        "type": "function",
        "z": "f276aaac.2ff468",
        "name": "function 25",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 1600,
        "wires": [
            [
                "4d6f2019bc75c513",
                "c28f9ace7d31b3c4",
                "b2702b44eaac3f34"
            ]
        ]
    },
    {
        "id": "84fe273a21c193b3",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Події оптосенсорів",
        "info": "",
        "x": 150,
        "y": 1560,
        "wires": []
    },
    {
        "id": "a69a3bd649466461",
        "type": "tcp out",
        "z": "f276aaac.2ff468",
        "name": "",
        "host": "172.16.9.234",
        "port": "2001",
        "beserver": "client",
        "base64": false,
        "end": true,
        "tls": "",
        "x": 360,
        "y": 620,
        "wires": []
    },
    {
        "id": "0db8d2fb72bec947",
        "type": "comment",
        "z": "f276aaac.2ff468",
        "name": "Відправка на екран",
        "info": "",
        "x": 270,
        "y": 580,
        "wires": []
    },
    {
        "id": "f8add9274bb9132d",
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
        "payload": "123",
        "payloadType": "num",
        "x": 90,
        "y": 620,
        "wires": [
            [
                "a69a3bd649466461"
            ]
        ]
    },
    {
        "id": "ca07d3cb0bc0911c",
        "type": "tcp out",
        "z": "f276aaac.2ff468",
        "name": "",
        "host": "172.16.9.234",
        "port": "2002",
        "beserver": "client",
        "base64": false,
        "end": true,
        "tls": "",
        "x": 1020,
        "y": 1600,
        "wires": []
    },
    {
        "id": "b2702b44eaac3f34",
        "type": "json",
        "z": "f276aaac.2ff468",
        "name": "",
        "property": "payload",
        "action": "str",
        "pretty": false,
        "x": 830,
        "y": 1600,
        "wires": [
            [
                "ca07d3cb0bc0911c"
            ]
        ]
    },
    {
        "id": "a10a2b84fea4df0e",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "info",
        "info": "1-ші ваги айпі зчитувача шлагбаума : 246, 247, 248   ; \n2-гі ваги айпі  зчитувача шлагбаума 245, 244, 243\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 70,
        "y": 20,
        "wires": []
    },
    {
        "id": "fcea232f8e2e57f6",
        "type": "tcp in",
        "z": "5b41289ad69477f1",
        "name": "",
        "server": "client",
        "host": "172.16.9.246",
        "port": "9764",
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
                "5b719ce2d3a7a608"
            ]
        ]
    },
    {
        "id": "b13c3e0f90213837",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Ethernet/RS232/485 tcp 9764",
        "info": "",
        "x": 160,
        "y": 120,
        "wires": []
    },
    {
        "id": "13d365223df95feb",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Socket 2 tcp 9765",
        "info": "",
        "x": 110,
        "y": 580,
        "wires": []
    },
    {
        "id": "160f47fecb4be8ec",
        "type": "tcp in",
        "z": "5b41289ad69477f1",
        "name": "",
        "server": "server",
        "host": "172.16.9.247",
        "port": "9765",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 160,
        "y": 620,
        "wires": [
            [
                "a6b3949710f6b823",
                "24aef9e4cbc4a40a",
                "841b00660a702df3"
            ]
        ]
    },
    {
        "id": "b6ac78c44ae235e0",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Зчитувач",
        "info": "",
        "x": 500,
        "y": 120,
        "wires": []
    },
    {
        "id": "c096e24b1f8d3ed7",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Подыъ з рамки",
        "info": "",
        "x": 300,
        "y": 580,
        "wires": []
    },
    {
        "id": "081af3cf83ddc082",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 20,
        "wires": [
            [
                "339a7784331adf74"
            ]
        ]
    },
    {
        "id": "339a7784331adf74",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 20,
        "wires": [
            []
        ]
    },
    {
        "id": "52498e67f7b3a6f1",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 20",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 160,
        "wires": []
    },
    {
        "id": "5b719ce2d3a7a608",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "function 15",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 160,
        "wires": [
            [
                "fe3abdddf8a1da41",
                "292a6b696235644b"
            ]
        ]
    },
    {
        "id": "fe3abdddf8a1da41",
        "type": "trigger",
        "z": "5b41289ad69477f1",
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
        "y": 160,
        "wires": [
            [
                "7904da0b24b04d37",
                "292a6b696235644b"
            ]
        ]
    },
    {
        "id": "7904da0b24b04d37",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "function 16",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 690,
        "y": 160,
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
        "z": "5b41289ad69477f1",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 11,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 260,
        "wires": [
            [
                "7d55a628f1b110c8",
                "823da2b84ba3fe08"
            ]
        ]
    },
    {
        "id": "823da2b84ba3fe08",
        "type": "http request",
        "z": "5b41289ad69477f1",
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
                "0885bd875ffd6859"
            ]
        ]
    },
    {
        "id": "0885bd875ffd6859",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 22",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 260,
        "wires": []
    },
    {
        "id": "a73cca97b8ac34a0",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 220,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "7d55a628f1b110c8",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 23",
        "active": false,
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
        "id": "77d57a060e3b3f92",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 260,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "0be1d460efd692a9",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 300,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "9dddf975f9f5fd22",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "payload": "5089014",
        "payloadType": "str",
        "x": 120,
        "y": 340,
        "wires": [
            [
                "d73a5f3d14c2487a"
            ]
        ]
    },
    {
        "id": "a6b3949710f6b823",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 24",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 480,
        "y": 580,
        "wires": []
    },
    {
        "id": "24aef9e4cbc4a40a",
        "type": "tcp out",
        "z": "5b41289ad69477f1",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 250,
        "y": 680,
        "wires": []
    },
    {
        "id": "a243de676c131e62",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 610,
        "y": 220,
        "wires": []
    },
    {
        "id": "6ab1251038328007",
        "type": "http request",
        "z": "5b41289ad69477f1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.247/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 780,
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
        "z": "5b41289ad69477f1",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 780,
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
        "z": "5b41289ad69477f1",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 740,
        "wires": []
    },
    {
        "id": "05c461a425fed6fd",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 820,
        "wires": [
            [
                "6ab1251038328007"
            ]
        ]
    },
    {
        "id": "4189ddd13b9397fb",
        "type": "http in",
        "z": "5b41289ad69477f1",
        "name": "",
        "url": "/status/gate/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 780,
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
        "z": "5b41289ad69477f1",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 820,
        "wires": []
    },
    {
        "id": "6c5f2a955cb82212",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 7,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 780,
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
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 780,
        "wires": []
    },
    {
        "id": "841b00660a702df3",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 7,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 3,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 620,
        "wires": [
            [
                "9942a9515e08b14f"
            ]
        ]
    },
    {
        "id": "76abb24434c34e0d",
        "type": "http request",
        "z": "5b41289ad69477f1",
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
        "x": 890,
        "y": 620,
        "wires": [
            [
                "0acf5f288749c2e2"
            ]
        ]
    },
    {
        "id": "9942a9515e08b14f",
        "type": "delay",
        "z": "5b41289ad69477f1",
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
        "x": 700,
        "y": 620,
        "wires": [
            [
                "76abb24434c34e0d"
            ]
        ]
    },
    {
        "id": "0acf5f288749c2e2",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 26",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 660,
        "wires": []
    },
    {
        "id": "8a878d0507c6dada",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 190,
        "y": 1000,
        "wires": []
    },
    {
        "id": "d216a44f94311705",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "url",
        "func": "msg.url = 'http://admin:vkmodule@172.16.9.247/protect/leds.cgi?led=1&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 1060,
        "wires": [
            [
                "9a4a9e5db5900d31"
            ]
        ]
    },
    {
        "id": "86fa2ad0bb51b8cb",
        "type": "http in",
        "z": "5b41289ad69477f1",
        "name": "",
        "url": "/gate/barrier/w1",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1060,
        "wires": [
            [
                "d5dc6602ca42f756",
                "d216a44f94311705"
            ]
        ]
    },
    {
        "id": "790d205c77424103",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1020,
        "wires": []
    },
    {
        "id": "9a4a9e5db5900d31",
        "type": "http request",
        "z": "5b41289ad69477f1",
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
        "y": 1060,
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
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1060,
        "wires": []
    },
    {
        "id": "edbe86c03cb66c9b",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 27",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 740,
        "wires": []
    },
    {
        "id": "132f25ac7289113e",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 3,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1060,
        "wires": [
            [
                "f9973cba42fde219"
            ]
        ]
    },
    {
        "id": "d5dc6602ca42f756",
        "type": "trigger",
        "z": "5b41289ad69477f1",
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
        "y": 1160,
        "wires": [
            [
                "2a69867981dde1e6"
            ]
        ]
    },
    {
        "id": "1c19aec479bb81d6",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 1100,
        "wires": [
            [
                "d5dc6602ca42f756"
            ]
        ]
    },
    {
        "id": "11b5738f1e068f5a",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1160,
        "wires": []
    },
    {
        "id": "2a69867981dde1e6",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 3,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1160,
        "wires": [
            [
                "11b5738f1e068f5a"
            ]
        ]
    },
    {
        "id": "82e875a479f2f30e",
        "type": "trigger",
        "z": "5b41289ad69477f1",
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
        "y": 900,
        "wires": [
            [
                "a1ec343dd39e1f94"
            ]
        ]
    },
    {
        "id": "025547e0e366ae0c",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 820,
        "wires": [
            [
                "82e875a479f2f30e"
            ]
        ]
    },
    {
        "id": "44f549c96356d258",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 900,
        "wires": []
    },
    {
        "id": "a1ec343dd39e1f94",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 7,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 900,
        "wires": [
            [
                "44f549c96356d258"
            ]
        ]
    },
    {
        "id": "817254a390f00fa1",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 1020,
        "wires": [
            [
                "790d205c77424103"
            ]
        ]
    },
    {
        "id": "167443805a8090d8",
        "type": "comment",
        "z": "5b41289ad69477f1",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 1260,
        "wires": []
    },
    {
        "id": "ebb3daabb719481d",
        "type": "http in",
        "z": "5b41289ad69477f1",
        "name": "",
        "url": "/gate/barrier/status/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 1320,
        "wires": [
            [
                "a0de1adc71a7812f"
            ]
        ]
    },
    {
        "id": "c4337b79e2ce726d",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1300,
        "wires": []
    },
    {
        "id": "ab1abd7cfe88b529",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1320,
        "wires": []
    },
    {
        "id": "f5b60ea989875ae2",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1320,
        "wires": [
            [
                "ab1abd7cfe88b529"
            ]
        ]
    },
    {
        "id": "6d896f49e42ed8d1",
        "type": "http response",
        "z": "5b41289ad69477f1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1420,
        "wires": []
    },
    {
        "id": "2349a58799ce55b8",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1420,
        "wires": [
            [
                "6d896f49e42ed8d1"
            ]
        ]
    },
    {
        "id": "a0de1adc71a7812f",
        "type": "function",
        "z": "5b41289ad69477f1",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 3,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 1300,
        "wires": [
            [
                "c4337b79e2ce726d"
            ]
        ]
    },
    {
        "id": "a34b20bcef368b17",
        "type": "inject",
        "z": "5b41289ad69477f1",
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
        "y": 1100,
        "wires": [
            [
                "d216a44f94311705"
            ]
        ]
    },
    {
        "id": "292a6b696235644b",
        "type": "debug",
        "z": "5b41289ad69477f1",
        "name": "debug 97",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 120,
        "wires": []
    },
    {
        "id": "7b33887ac932a130",
        "type": "http request",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 100,
        "wires": [
            [
                "3ec97b05a24c6351"
            ]
        ]
    },
    {
        "id": "3ec97b05a24c6351",
        "type": "xml",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 100,
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
        "z": "a21c7d12624fa5bd",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 60,
        "wires": []
    },
    {
        "id": "0c10d8a82db2c184",
        "type": "inject",
        "z": "a21c7d12624fa5bd",
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
        "y": 180,
        "wires": [
            [
                "7b33887ac932a130"
            ]
        ]
    },
    {
        "id": "084e0a2d66685f19",
        "type": "http in",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "url": "/status/traffic/lights/w1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "7b33887ac932a130"
            ]
        ]
    },
    {
        "id": "0d2dd8083a2936bf",
        "type": "debug",
        "z": "a21c7d12624fa5bd",
        "name": "debug 45",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 140,
        "wires": []
    },
    {
        "id": "a4eea352b7f27e9a",
        "type": "http response",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 100,
        "wires": []
    },
    {
        "id": "65d914228f87d118",
        "type": "debug",
        "z": "a21c7d12624fa5bd",
        "name": "debug 46",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 60,
        "wires": []
    },
    {
        "id": "af89986470a47227",
        "type": "function",
        "z": "a21c7d12624fa5bd",
        "name": "function 21",
        "func": "let traffic_lights_1 = msg.payload.response.led0[0]\nlet traffic_lights_2 = msg.payload.response.led1[0]\n\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_1\": (traffic_lights_1 === \"0\") ? false : true,\n    \"traffic_lights_2\": (traffic_lights_2 === \"0\") ? false : true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 100,
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
        "z": "a21c7d12624fa5bd",
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
        "y": 340,
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
        "z": "a21c7d12624fa5bd",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 300,
        "wires": []
    },
    {
        "id": "4aeaba460d0ae0a4",
        "type": "http in",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "url": "/traffic/on/off/w1",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 340,
        "wires": [
            [
                "423dd59351a6c369"
            ]
        ]
    },
    {
        "id": "5217ba97220add41",
        "type": "debug",
        "z": "a21c7d12624fa5bd",
        "name": "debug 47",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 380,
        "wires": []
    },
    {
        "id": "5f059dfce4dc7c26",
        "type": "http response",
        "z": "a21c7d12624fa5bd",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 970,
        "y": 340,
        "wires": []
    },
    {
        "id": "afcd606bbf783044",
        "type": "debug",
        "z": "a21c7d12624fa5bd",
        "name": "debug 48",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 300,
        "wires": []
    },
    {
        "id": "b50d6975b8d87561",
        "type": "function",
        "z": "a21c7d12624fa5bd",
        "name": "function 22",
        "func": "msg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_2\": true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 340,
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
        "z": "a21c7d12624fa5bd",
        "name": "function 23",
        "func": "msg.url = \"http://admin:vkmodule@172.16.9.241/protect/leds.cgi?led=1&timeout=30\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 340,
        "wires": [
            [
                "dddb3535aed8a6d0"
            ]
        ]
    },
    {
        "id": "9334b28f16a96b3b",
        "type": "inject",
        "z": "a21c7d12624fa5bd",
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
        "y": 400,
        "wires": [
            [
                "423dd59351a6c369"
            ]
        ]
    },
    {
        "id": "7d307e3048d42f3e",
        "type": "tcp in",
        "z": "73b0505b9305902b",
        "name": "",
        "server": "client",
        "host": "172.16.9.65",
        "port": "9766",
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
                "c47fd8e3287ef596",
                "495cb662f8b4bff6"
            ]
        ]
    },
    {
        "id": "2a003c78da01249c",
        "type": "comment",
        "z": "73b0505b9305902b",
        "name": "Ethernet/RS232/485 tcp 9766",
        "info": "",
        "x": 140,
        "y": 140,
        "wires": []
    },
    {
        "id": "a4347713e9225cfc",
        "type": "comment",
        "z": "73b0505b9305902b",
        "name": "Зчитувач",
        "info": "",
        "x": 440,
        "y": 140,
        "wires": []
    },
    {
        "id": "b4c044f60693def1",
        "type": "debug",
        "z": "73b0505b9305902b",
        "name": "debug 93",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 980,
        "y": 180,
        "wires": []
    },
    {
        "id": "c47fd8e3287ef596",
        "type": "function",
        "z": "73b0505b9305902b",
        "name": "function 26",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 180,
        "wires": [
            [
                "7cc71e8d3e0fd490"
            ]
        ]
    },
    {
        "id": "7cc71e8d3e0fd490",
        "type": "trigger",
        "z": "73b0505b9305902b",
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
        "x": 640,
        "y": 180,
        "wires": [
            [
                "f879ed655c5e0527"
            ]
        ]
    },
    {
        "id": "f879ed655c5e0527",
        "type": "function",
        "z": "73b0505b9305902b",
        "name": "function 27",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\ntmp.splice(0, 3);\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 810,
        "y": 180,
        "wires": [
            [
                "b4c044f60693def1",
                "b9af5fca57e370a3"
            ]
        ]
    },
    {
        "id": "b9af5fca57e370a3",
        "type": "function",
        "z": "73b0505b9305902b",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 26,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 320,
        "wires": [
            [
                "1072454943315a17",
                "80f1e5f55798a20c"
            ]
        ]
    },
    {
        "id": "1072454943315a17",
        "type": "http request",
        "z": "73b0505b9305902b",
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
        "y": 320,
        "wires": [
            [
                "e44a54e650b819ca"
            ]
        ]
    },
    {
        "id": "396568dc6db185c6",
        "type": "inject",
        "z": "73b0505b9305902b",
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
        "y": 280,
        "wires": [
            [
                "b9af5fca57e370a3"
            ]
        ]
    },
    {
        "id": "80f1e5f55798a20c",
        "type": "debug",
        "z": "73b0505b9305902b",
        "name": "debug 94",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 360,
        "wires": []
    },
    {
        "id": "9e74566692a7709d",
        "type": "inject",
        "z": "73b0505b9305902b",
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
        "y": 320,
        "wires": [
            [
                "b9af5fca57e370a3"
            ]
        ]
    },
    {
        "id": "2d115f78dba6c8db",
        "type": "inject",
        "z": "73b0505b9305902b",
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
        "y": 360,
        "wires": [
            [
                "b9af5fca57e370a3"
            ]
        ]
    },
    {
        "id": "cf0f65cb52e71c04",
        "type": "inject",
        "z": "73b0505b9305902b",
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
        "y": 400,
        "wires": [
            [
                "b9af5fca57e370a3"
            ]
        ]
    },
    {
        "id": "a75360d34fc00865",
        "type": "comment",
        "z": "73b0505b9305902b",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 650,
        "y": 280,
        "wires": []
    },
    {
        "id": "495cb662f8b4bff6",
        "type": "debug",
        "z": "73b0505b9305902b",
        "name": "debug 95",
        "active": false,
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
        "id": "fbb324c624974696",
        "type": "inject",
        "z": "73b0505b9305902b",
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
        "y": 20,
        "wires": [
            [
                "4770efdf45a14901"
            ]
        ]
    },
    {
        "id": "4770efdf45a14901",
        "type": "function",
        "z": "73b0505b9305902b",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 20,
        "wires": [
            []
        ]
    },
    {
        "id": "e44a54e650b819ca",
        "type": "debug",
        "z": "73b0505b9305902b",
        "name": "debug 96",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 320,
        "wires": []
    },
    {
        "id": "2d19e8e7ad32ad39",
        "type": "comment",
        "z": "73b0505b9305902b",
        "name": "",
        "info": "4994588 \nbuffer[6]\n0: 31\n1: 7\n2: 0\n3: 76\n4: 54\n5: 28\n\n\n0: 0x1f\n1: 0x7\n2: 0x0\n3: 0x4c\n4: 0x36\n5: 0x1c",
        "x": 150,
        "y": 440,
        "wires": []
    },
    {
        "id": "8723c138d5fc9612",
        "type": "tcp in",
        "z": "09199622c1a1c282",
        "name": "",
        "server": "client",
        "host": "172.16.9.237",
        "port": "9767",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 120,
        "y": 160,
        "wires": [
            [
                "48070f6948275b66",
                "80d8484c65432326"
            ]
        ]
    },
    {
        "id": "1e9a5e80545eb641",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 3",
        "active": false,
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
        "id": "2a62acb3d9674306",
        "type": "comment",
        "z": "09199622c1a1c282",
        "name": "Зчитування карти на вагах tcp 9767",
        "info": "[ 0 ]\n05.04.2023, 11:49:23node: debug 4\nmsg.payload : buffer[1]\n[ 72 ]\n05.04.2023, 11:49:23node: debug 4\nmsg.payload : buffer[2]\n[ 182, 138 ]",
        "x": 150,
        "y": 120,
        "wires": []
    },
    {
        "id": "5be8e345ced2ca2e",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "1e9a5e80545eb641",
                "93b2734ada9b019d"
            ]
        ]
    },
    {
        "id": "48070f6948275b66",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 4",
        "active": false,
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
        "id": "80d8484c65432326",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "958029c0e91db048"
            ]
        ]
    },
    {
        "id": "958029c0e91db048",
        "type": "trigger",
        "z": "09199622c1a1c282",
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
                "5be8e345ced2ca2e",
                "63af3dea9534cd4f"
            ]
        ]
    },
    {
        "id": "1e786c0bcccda771",
        "type": "function",
        "z": "09199622c1a1c282",
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
        "id": "ce55a28151c86d45",
        "type": "inject",
        "z": "09199622c1a1c282",
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
                "1e786c0bcccda771"
            ]
        ]
    },
    {
        "id": "93b2734ada9b019d",
        "type": "function",
        "z": "09199622c1a1c282",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 10,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 280,
        "wires": [
            [
                "06cb1f01b4d04a16",
                "a2eba554705e3709"
            ]
        ]
    },
    {
        "id": "06cb1f01b4d04a16",
        "type": "http request",
        "z": "09199622c1a1c282",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.27/bc/hs/elevator",
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
                "55d2df350d0028ed"
            ]
        ]
    },
    {
        "id": "55d2df350d0028ed",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 18",
        "active": false,
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
        "id": "feec1d839a6046ab",
        "type": "inject",
        "z": "09199622c1a1c282",
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
        "payload": "8736941",
        "payloadType": "num",
        "x": 160,
        "y": 220,
        "wires": [
            [
                "93b2734ada9b019d"
            ]
        ]
    },
    {
        "id": "4ab2f2f2073fddaa",
        "type": "comment",
        "z": "09199622c1a1c282",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 730,
        "y": 240,
        "wires": []
    },
    {
        "id": "a2eba554705e3709",
        "type": "debug",
        "z": "09199622c1a1c282",
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
        "id": "f639103f5298b0bf",
        "type": "inject",
        "z": "09199622c1a1c282",
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
        "y": 260,
        "wires": [
            [
                "93b2734ada9b019d"
            ]
        ]
    },
    {
        "id": "db5ad6ffc94c7329",
        "type": "inject",
        "z": "09199622c1a1c282",
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
        "y": 300,
        "wires": [
            [
                "93b2734ada9b019d"
            ]
        ]
    },
    {
        "id": "5d9b912d34e02c05",
        "type": "inject",
        "z": "09199622c1a1c282",
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
        "y": 340,
        "wires": [
            [
                "93b2734ada9b019d"
            ]
        ]
    },
    {
        "id": "0787bf753ba8d076",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "b349dcf2017fab20",
                "62484fae94713714"
            ]
        ]
    },
    {
        "id": "35ac450a80db394c",
        "type": "inject",
        "z": "09199622c1a1c282",
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
                "0787bf753ba8d076"
            ]
        ]
    },
    {
        "id": "b349dcf2017fab20",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "cc645b09145984b1"
            ]
        ]
    },
    {
        "id": "cc645b09145984b1",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 92",
        "active": false,
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
        "id": "62484fae94713714",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 93",
        "active": false,
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
        "id": "63af3dea9534cd4f",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 94",
        "active": false,
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
        "id": "05d8a5e3aeaaf314",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "a19fdac54fb2d82e"
            ]
        ]
    },
    {
        "id": "eaeee1f83c917f89",
        "type": "inject",
        "z": "09199622c1a1c282",
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
                "5cb5c4ca6ecf2691"
            ]
        ]
    },
    {
        "id": "5cb5c4ca6ecf2691",
        "type": "function",
        "z": "09199622c1a1c282",
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
                "05d8a5e3aeaaf314"
            ]
        ]
    },
    {
        "id": "a19fdac54fb2d82e",
        "type": "debug",
        "z": "09199622c1a1c282",
        "name": "debug 95",
        "active": false,
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
        "id": "fda1e37e4e17073d",
        "type": "inject",
        "z": "c331810f9e53762d",
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
        "onceDelay": "",
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 127.14286041259766,
        "y": 214.28571224212646,
        "wires": [
            [
                "c558e9dfc8138191",
                "bbcdaf71f6434466"
            ]
        ]
    },
    {
        "id": "8bd7a3e5cafa7d66",
        "type": "function",
        "z": "c331810f9e53762d",
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
                "39269543ef144b46",
                "11cde1294c5d70a1"
            ]
        ]
    },
    {
        "id": "9920b83e0c36f964",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "Device level",
        "info": "",
        "x": 101.06024932861328,
        "y": 172.32699966430664,
        "wires": []
    },
    {
        "id": "a536ab54ecde2fbf",
        "type": "inject",
        "z": "c331810f9e53762d",
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
                "56433a4b0a20b799"
            ]
        ]
    },
    {
        "id": "7cf1ae4fa4bccf61",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "INITIALIZING Автоваги 2 ()",
        "info": "",
        "x": 153.91738891601562,
        "y": 38.041287422180176,
        "wires": []
    },
    {
        "id": "56433a4b0a20b799",
        "type": "function",
        "z": "c331810f9e53762d",
        "name": "Scale PARSER",
        "func": "flow.set('inputString', \"G01W\" + String.fromCharCode(13) + String.fromCharCode(10));\nflow.set('parser',function(v){\n        v = v.substring(4, v.length)\n        v = Number(v) * 1000\n       //return v\n       return Number(v.toFixed());\n    }\n  );\n//global.set('scale_id_1','7b633b9c-b05c-2a3b-f500-7f991f019000');\n//global.set('ip','');\nglobal.set('video_camera_url','');\nglobal.set(\"scaleOn\", true)\nglobal.set(\"url1C\", \"172.16.9.27/bc/hs/elevator\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
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
        "id": "c558e9dfc8138191",
        "type": "debug",
        "z": "c331810f9e53762d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 370,
        "y": 200,
        "wires": []
    },
    {
        "id": "d640b7c0b261f1a8",
        "type": "function",
        "z": "c331810f9e53762d",
        "name": "time_rasp",
        "func": "var time = new Date();\nflow.set(\"time_rasp\", time);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 320,
        "y": 440,
        "wires": [
            [
                "1f308ae18e57eaba"
            ]
        ]
    },
    {
        "id": "29c9ec019ae3cfe4",
        "type": "inject",
        "z": "c331810f9e53762d",
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
                "d640b7c0b261f1a8"
            ]
        ]
    },
    {
        "id": "1f308ae18e57eaba",
        "type": "function",
        "z": "c331810f9e53762d",
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
                "8b616658f9413d3b",
                "aff08d3bb16b98b7"
            ]
        ]
    },
    {
        "id": "8b616658f9413d3b",
        "type": "debug",
        "z": "c331810f9e53762d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 630,
        "y": 440,
        "wires": []
    },
    {
        "id": "39269543ef144b46",
        "type": "debug",
        "z": "c331810f9e53762d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 670,
        "y": 240,
        "wires": []
    },
    {
        "id": "689d93eb3dd394d2",
        "type": "inject",
        "z": "c331810f9e53762d",
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
                "c6efe2585a412ad4"
            ]
        ]
    },
    {
        "id": "c6efe2585a412ad4",
        "type": "function",
        "z": "c331810f9e53762d",
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
        "id": "11cde1294c5d70a1",
        "type": "delay",
        "z": "c331810f9e53762d",
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
                "aff08d3bb16b98b7"
            ]
        ]
    },
    {
        "id": "4ac219bf27eff809",
        "type": "inject",
        "z": "c331810f9e53762d",
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
                "7263daafcb25ff65"
            ]
        ]
    },
    {
        "id": "7263daafcb25ff65",
        "type": "exec",
        "z": "c331810f9e53762d",
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
                "c00ad44759b2e98e"
            ],
            [
                "c00ad44759b2e98e"
            ],
            [
                "c00ad44759b2e98e"
            ]
        ]
    },
    {
        "id": "c00ad44759b2e98e",
        "type": "debug",
        "z": "c331810f9e53762d",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 451,
        "y": 582,
        "wires": []
    },
    {
        "id": "6d4a81b63abd8fd1",
        "type": "inject",
        "z": "c331810f9e53762d",
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
                "aa60649b446db49e"
            ]
        ]
    },
    {
        "id": "aa60649b446db49e",
        "type": "exec",
        "z": "c331810f9e53762d",
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
                "3e94b558a544f050"
            ],
            [
                "3e94b558a544f050"
            ],
            [
                "3e94b558a544f050"
            ]
        ]
    },
    {
        "id": "3e94b558a544f050",
        "type": "debug",
        "z": "c331810f9e53762d",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 460,
        "y": 679,
        "wires": []
    },
    {
        "id": "1d35a147f467cc8e",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "Скільки працює від останнього перезапуску",
        "info": "",
        "x": 310,
        "y": 540,
        "wires": []
    },
    {
        "id": "232e66472f1c90bf",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "Локальна дата на RPI",
        "info": "",
        "x": 240,
        "y": 640,
        "wires": []
    },
    {
        "id": "0bfd319dddd71243",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "Відправка штучного 0 при відстуності ваги певний час",
        "info": "",
        "x": 310,
        "y": 360,
        "wires": []
    },
    {
        "id": "d8a8f61af956bcc4",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "На головний модуль",
        "info": "",
        "x": 880,
        "y": 220,
        "wires": []
    },
    {
        "id": "aff08d3bb16b98b7",
        "type": "link out",
        "z": "c331810f9e53762d",
        "name": "Вага",
        "mode": "link",
        "links": [
            "de3eb23622b8030e",
            "e814dbb1f42eed2e"
        ],
        "x": 842.1428604125977,
        "y": 274.28571224212646,
        "wires": []
    },
    {
        "id": "90b19bc18ea37d0e",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "Парсинг вагів",
        "info": "",
        "x": 261.42858505249023,
        "y": 81.42857360839844,
        "wires": []
    },
    {
        "id": "bbcdaf71f6434466",
        "type": "tcp request",
        "z": "c331810f9e53762d",
        "name": "",
        "server": "172.16.9.235",
        "port": "9768",
        "out": "char",
        "ret": "string",
        "splitc": "\\n",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 160,
        "y": 300,
        "wires": [
            [
                "8bd7a3e5cafa7d66",
                "c6efe2585a412ad4",
                "39269543ef144b46"
            ]
        ]
    },
    {
        "id": "c6384ec28a89edb5",
        "type": "comment",
        "z": "c331810f9e53762d",
        "name": "tcp 9768",
        "info": "",
        "x": 160,
        "y": 260,
        "wires": []
    },
    {
        "id": "4d2447d9a85e9bed",
        "type": "file",
        "z": "9276f7c982d767df",
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
        "id": "59b7b9aae838b10d",
        "type": "function",
        "z": "9276f7c982d767df",
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
        "id": "2d9dd375a6427063",
        "type": "inject",
        "z": "9276f7c982d767df",
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
                "a50d68b5be264b76",
                "36137a241a8ee6d4"
            ]
        ]
    },
    {
        "id": "a50d68b5be264b76",
        "type": "file in",
        "z": "9276f7c982d767df",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "format": "utf8",
        "x": 320,
        "y": 120,
        "wires": [
            [
                "3bfec6fd4c78f367"
            ]
        ]
    },
    {
        "id": "a6b221c37c69f02c",
        "type": "inject",
        "z": "9276f7c982d767df",
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
                "8321628e8eebf2f5"
            ]
        ]
    },
    {
        "id": "8321628e8eebf2f5",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_in_minus_id':'8DB9B239DF5252F0E055000000000001',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_on_id': '85A2CC45702A2DD1E0533300000A0C94',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'event_driver_in':'8E68D8D8B2977181E055000000000001',\n    'event_over_load':'B3EB5F800EFD2620E0530101007F8A05',\n    'snapshot_events':['80096EF60C186574E0533300000ADBA5','80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0', \"8E68D8D8B2977181E055000000000001\",\"B3EB5F800EFD2620E0530101007F8A05\"],\n    'main_host':global.get('urlSkelia'),\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':60000,\n    'maxDuration':600000,\n    'minWeight':-40,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':40,\n    'driverWeight':80,\n    'overLoadWeight': 200,\n    'stableDiff': 60\n};\nmsg.payload = device_config;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 80,
        "wires": [
            [
                "4d2447d9a85e9bed"
            ]
        ]
    },
    {
        "id": "3bfec6fd4c78f367",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('event_driver_in', device_config.event_driver_in);\nflow.set('event_over_load',device_config.event_over_load);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\nflow.set('driverWeight',device_config.driverWeight);\nflow.set('overLoadWeight', device_config.overLoadWeight);\nflow.set('stableDiff', device_config.stableDiff);\n\nmsg.payload = {\n\tscale_id: flow.get('scale_id'),\n\tevent_move_in_id: flow.get('event_move_in_id'),\n\tevent_move_in_minus_id: flow.get('event_move_in_minus_id'),\n\tevent_move_out_id: flow.get('event_move_out_id'),\n\tevent_max_weight_id: flow.get('event_max_weight_id'),\n\tevent_off_id: flow.get('event_off_id'),\n\tevent_on_id: flow.get('event_on_id'),\n\tevent_max_duration: flow.get('event_max_duration'),\n\tevent_fake_traffic: flow.get('event_fake_traffic'),\n\tevent_driver_in: flow.get('event_driver_in'),\n\tevent_over_load: flow.get('event_over_load'),\n\tmain_host: flow.get('main_host'),\n\tevent_url: flow.get('event_url'),\n\tstate_url: flow.get('state_url'),\n\tmaxWeight: flow.get('maxWeight'),\n\tminWeight: flow.get('minWeight'),\n\tmaxDuration: flow.get('maxDuration'),\n\tcheckHealthTimeout: flow.get('checkHealthTimeout'),\n\tevent_get_weight_acc: flow.get('event_get_weight_acc'),\n\tevent_min_weight: flow.get('event_min_weight'),\n\tminTriggerWeight: flow.get('minTriggerWeight'),\n\tsnapshot_url: flow.get('snapshot_url'),\n\tsnapshot_events: flow.get('snapshot_events'),\n\tdriverWeight: flow.get('driverWeight'),\n\toverLoadWeight: flow.get('overLoadWeight'),\n\tstableDiff: flow.get('stableDiff')\n};\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 120,
        "wires": [
            [
                "c5f331b53c4cc702"
            ]
        ]
    },
    {
        "id": "c5f331b53c4cc702",
        "type": "json",
        "z": "9276f7c982d767df",
        "name": "",
        "x": 630,
        "y": 120,
        "wires": [
            [
                "8e81da73d0a4f353"
            ]
        ]
    },
    {
        "id": "8e81da73d0a4f353",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "IN device config",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 780,
        "y": 120,
        "wires": []
    },
    {
        "id": "36137a241a8ee6d4",
        "type": "trigger",
        "z": "9276f7c982d767df",
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
                "59b7b9aae838b10d"
            ]
        ]
    },
    {
        "id": "75116c612bddcf95",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Ініціалізаця при старті",
        "info": "",
        "x": 180,
        "y": 40,
        "wires": []
    },
    {
        "id": "86b8dd46e234bb05",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага, кг: ' + msg.metadata.weight;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 520,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "c3788658681f445c",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "86b8dd46e234bb05"
            ]
        ]
    },
    {
        "id": "072c5d2f42f594fc",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "b3583fa863929add"
            ]
        ]
    },
    {
        "id": "cfe179077c15eee6",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar transactionOperationName = flow.get('transactionOperationName');\nvar stableDiff = flow.get('stableDiff');//дельта стабільності\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar operation_name_income = \"Приход (авто)\";\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\nvar transactionAccWeight = flow.get('transactionAccWeight');//облікова вага\nvar overLoadWeight = flow.get('overLoadWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 400) && (weight > 400) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 200) && (weight <=200) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionHasOverLoad',null);\n        flow.set('transactionOperationName',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n        flow.set('transactionAccWeight', null);//облікова вага\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nmsg.stable = true;\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if ((transactionData[i] - transactionData[i-1]) > stableDiff || (transactionData[i] - transactionData[i-1]) < -stableDiff){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable':msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'transactionAccWeight':transactionAccWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false,\n    'transactionOperationName':transactionOperationName\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nif(transactionAccWeight && transactionOperationName!==operation_name_income){\n    \n   flow.set('transactionHasOverLoad',(weight-transactionAccWeight)>overLoadWeight);\n   \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 420,
        "wires": [
            [
                "95a373809dc3894d",
                "c3788658681f445c",
                "5f205e5429053bc1",
                "4c04b14d9bc9dd4b",
                "48756f50465c2057"
            ]
        ]
    },
    {
        "id": "bdbfa011cc34424c",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar driverWeight = flow.get('driverWeight');\nvar buisness_data = msg.req.query;\n\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\n\n//check driver in a car\nvar driver_in = false;\nmsg.driverWeight = driverWeight;\nif((transactionMaxWeight - msg.metadata.weight) < driverWeight){\n    driver_in = true;\n}\n\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = ' '+buisness_data.operation_name+'. '+buisness_data.operation_type+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер авто: \"+buisness_data.truck1+\" \"+buisness_data.truck2+\" \"+buisness_data.item_name + \", ТТН: \" + buisness_data.waybill;\nmsg.transactionMetadata = transactionMetadata;\nmsg.driver_in = driver_in;\n\nflow.set('transactionAccWeight',  msg.metadata.weight);//облікова вага\nflow.set('transactionOperationName',  msg.metadata.operation_name);//вид операції\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 900,
        "wires": [
            [
                "b407c16654fcb02f",
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "1832b18c99bc53d1",
        "type": "http request",
        "z": "9276f7c982d767df",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "25c52be0.ae7764",
        "x": 1300,
        "y": 480,
        "wires": [
            [
                "5ac44cd6cae16244"
            ]
        ]
    },
    {
        "id": "b3583fa863929add",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "IN event",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 1215.7142868041992,
        "y": 404.2857155799866,
        "wires": []
    },
    {
        "id": "af578986776725db",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 440,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "c6ad36f4a42a906b",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 760,
        "wires": [
            [
                "f9b2e76b09b00ba2"
            ]
        ]
    },
    {
        "id": "e835ae7e5cfbebf0",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 720,
        "wires": [
            [
                "0ca722dc3299646b"
            ]
        ]
    },
    {
        "id": "b926abd47928e872",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Максимальна вага: ' + msg.metadata.transactionMaxWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 480,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "001c4c820ef7cbf8",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах, сек: ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 560,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "40b35b1a1e6b408c",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "empty waybill",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + Math.round(msg.metadata.duration/60)+ 'хв.'+ \" Максимальна вага: \" + msg.metadata.transactionMaxWeight + \" кг.\";\n//metadata.transactionMaxWeight\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 400,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "b2625f2191602ae7",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага, кг: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 600,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "813662b5ffc3ff5e",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "move in minus",
        "func": "msg.event_id = flow.get('event_move_in_minus_id');\nmsg.description = 'Заїзд із мінусом. ' + msg.prevWeight +' кг.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 360,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "95a373809dc3894d",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "af578986776725db"
            ],
            [
                "b926abd47928e872",
                "4f67e8a94be786f0",
                "1c856a78984da3fc"
            ]
        ]
    },
    {
        "id": "5f205e5429053bc1",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "001c4c820ef7cbf8"
            ]
        ]
    },
    {
        "id": "4c04b14d9bc9dd4b",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "b2625f2191602ae7"
            ]
        ]
    },
    {
        "id": "48756f50465c2057",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "813662b5ffc3ff5e"
            ]
        ]
    },
    {
        "id": "b407c16654fcb02f",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "acd7bddd149406e1"
            ]
        ]
    },
    {
        "id": "a7d5e68f2675460a",
        "type": "http in",
        "z": "9276f7c982d767df",
        "name": "",
        "url": "/getWeightFull/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 900,
        "wires": [
            [
                "bb042be11675e1e8",
                "bdbfa011cc34424c",
                "ddf5d76b9f591b86"
            ]
        ]
    },
    {
        "id": "5ac44cd6cae16244",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 1443,
        "y": 480,
        "wires": []
    },
    {
        "id": "acd7bddd149406e1",
        "type": "function",
        "z": "9276f7c982d767df",
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
        "id": "895d7d546068d329",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "e835ae7e5cfbebf0"
            ],
            [
                "c6ad36f4a42a906b"
            ]
        ]
    },
    {
        "id": "4f67e8a94be786f0",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "40b35b1a1e6b408c"
            ]
        ]
    },
    {
        "id": "bb042be11675e1e8",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.reader){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 940,
        "wires": [
            [
                "0c518f92f13395a5"
            ]
        ]
    },
    {
        "id": "b0d7fec64102422a",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 740,
        "wires": [
            [
                "895d7d546068d329"
            ]
        ]
    },
    {
        "id": "0c518f92f13395a5",
        "type": "http response",
        "z": "9276f7c982d767df",
        "name": "",
        "x": 610,
        "y": 940,
        "wires": []
    },
    {
        "id": "771ada7e5dd835ce",
        "type": "inject",
        "z": "9276f7c982d767df",
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
                "b0d7fec64102422a"
            ]
        ]
    },
    {
        "id": "93e12e133e1d2599",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Отримання ваги",
        "info": "",
        "x": 140,
        "y": 980,
        "wires": []
    },
    {
        "id": "f2e1c62948e91bd9",
        "type": "function",
        "z": "9276f7c982d767df",
        "name": "over_load",
        "func": "msg.event_id = flow.get('event_over_load');\nmsg.description = 'Можливий досип після зважування. Максимальная вага: ' + msg.metadata.transactionMaxWeight + \"кг. Облікова вага: \" + msg.metadata.transactionAccWeight + \"кг.\";\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 320,
        "wires": [
            [
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "1c856a78984da3fc",
        "type": "switch",
        "z": "9276f7c982d767df",
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
                "f2e1c62948e91bd9"
            ]
        ]
    },
    {
        "id": "0ca722dc3299646b",
        "type": "delay",
        "z": "9276f7c982d767df",
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
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "f9b2e76b09b00ba2",
        "type": "delay",
        "z": "9276f7c982d767df",
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
                "072c5d2f42f594fc"
            ]
        ]
    },
    {
        "id": "a9962dc19ebc3eea",
        "type": "function",
        "z": "9276f7c982d767df",
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
        "id": "8ad0176304b90868",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 210,
        "y": 340,
        "wires": []
    },
    {
        "id": "ddf5d76b9f591b86",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "1С",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 432.8571319580078,
        "y": 862.8571338653564,
        "wires": []
    },
    {
        "id": "edaac77f243837e5",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Відправка події в Скелю",
        "info": "",
        "x": 1325,
        "y": 440,
        "wires": []
    },
    {
        "id": "44aec0272f0c3a50",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Подія водій в кабіні при зважуванні",
        "info": "",
        "x": 960,
        "y": 940,
        "wires": []
    },
    {
        "id": "7c43920ca5d19892",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Подія прилад підключено/відключено",
        "info": "",
        "x": 330,
        "y": 820,
        "wires": []
    },
    {
        "id": "9c9dbeb5677ccd2a",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Всі події",
        "info": "",
        "x": 600.0000228881836,
        "y": 271.6666717529297,
        "wires": []
    },
    {
        "id": "cda3e6edd6fec401",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Головний модуль логіки",
        "info": "",
        "x": 250,
        "y": 300,
        "wires": []
    },
    {
        "id": "e814dbb1f42eed2e",
        "type": "link in",
        "z": "9276f7c982d767df",
        "name": "",
        "links": [
            "aff08d3bb16b98b7"
        ],
        "x": 55,
        "y": 420,
        "wires": [
            [
                "cfe179077c15eee6",
                "8ad0176304b90868",
                "d51eb052d157fa52"
            ]
        ]
    },
    {
        "id": "2bd2ebd0354d8f11",
        "type": "http in",
        "z": "9276f7c982d767df",
        "name": "",
        "url": "/scale/getWeight/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 1020,
        "wires": [
            [
                "69b3b91646764148"
            ]
        ]
    },
    {
        "id": "1c8921cd89b280d6",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "90a14038037faa74"
            ]
        ]
    },
    {
        "id": "90a14038037faa74",
        "type": "http response",
        "z": "9276f7c982d767df",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1010,
        "y": 1180,
        "wires": []
    },
    {
        "id": "898379e9c983c8e7",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Периметр",
        "info": "relay 0 - зелена стрелка їхати вигружатись\nrelay 1 - виїзд з тереторії зелене світло\n\nНычого немаэ\nbtn0: array[1]\n0: \"dn\"\nbtn1: array[1]\n0: \"up\"\n\nПериметр порушений\nbtn0: array[1]\n0: \"up\"\nbtn1: array[1]\n0: \"up\"",
        "x": 120,
        "y": 1080,
        "wires": []
    },
    {
        "id": "51534a2ed7b8733b",
        "type": "inject",
        "z": "9276f7c982d767df",
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
                "62ec53e423ea9921",
                "03d5192c02969168"
            ]
        ]
    },
    {
        "id": "62ec53e423ea9921",
        "type": "http request",
        "z": "9276f7c982d767df",
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
                "71e233f00fe26913",
                "b93bd81f099c6829",
                "325ec94f91d6d729"
            ]
        ]
    },
    {
        "id": "71e233f00fe26913",
        "type": "xml",
        "z": "9276f7c982d767df",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 550,
        "y": 1120,
        "wires": [
            [
                "bada912bf5c61c06"
            ]
        ]
    },
    {
        "id": "bada912bf5c61c06",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "0e8e04195adb5cc8",
                "1c8921cd89b280d6"
            ]
        ]
    },
    {
        "id": "0e8e04195adb5cc8",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "debug 12",
        "active": false,
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
        "id": "03d5192c02969168",
        "type": "trigger",
        "z": "9276f7c982d767df",
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
                "31f0275950141817"
            ]
        ]
    },
    {
        "id": "325ec94f91d6d729",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "03d5192c02969168"
            ]
        ]
    },
    {
        "id": "b93bd81f099c6829",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "debug 13",
        "active": false,
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
        "id": "31f0275950141817",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "20dd66e2be08793e",
                "1c8921cd89b280d6"
            ]
        ]
    },
    {
        "id": "20dd66e2be08793e",
        "type": "debug",
        "z": "9276f7c982d767df",
        "name": "debug 14",
        "active": false,
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
        "id": "69b3b91646764148",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "62ec53e423ea9921",
                "03d5192c02969168"
            ]
        ]
    },
    {
        "id": "e0ac6e7f71570875",
        "type": "http request",
        "z": "9276f7c982d767df",
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
                "89b1be482d48ce5d"
            ]
        ]
    },
    {
        "id": "89b1be482d48ce5d",
        "type": "xml",
        "z": "9276f7c982d767df",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 1440,
        "wires": [
            [
                "043784c957aeade6"
            ]
        ]
    },
    {
        "id": "929a4ba7dbf43aa4",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 1400,
        "wires": []
    },
    {
        "id": "e2a0768456181723",
        "type": "inject",
        "z": "9276f7c982d767df",
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
        "y": 1520,
        "wires": [
            [
                "6aa984c7a168f2d3"
            ]
        ]
    },
    {
        "id": "19392e09f2e09bf5",
        "type": "http in",
        "z": "9276f7c982d767df",
        "name": "",
        "url": "/status/perimetr/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 1440,
        "wires": [
            [
                "e0ac6e7f71570875"
            ]
        ]
    },
    {
        "id": "043784c957aeade6",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "cdb89f750f9d6db4"
            ]
        ]
    },
    {
        "id": "cdb89f750f9d6db4",
        "type": "http response",
        "z": "9276f7c982d767df",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 1440,
        "wires": []
    },
    {
        "id": "aae86220e6e15bf6",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Події оптосенсорів",
        "info": "",
        "x": 130,
        "y": 1600,
        "wires": []
    },
    {
        "id": "1b18996b3f82a438",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Socket 2 tcp 9769",
        "info": "",
        "x": 130,
        "y": 1660,
        "wires": []
    },
    {
        "id": "c1de8fb69921e02f",
        "type": "tcp in",
        "z": "9276f7c982d767df",
        "name": "172.16.9.238",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9769",
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
                "100c8c32d2f4fdd3",
                "f1ba80bd3db675a2"
            ]
        ]
    },
    {
        "id": "100c8c32d2f4fdd3",
        "type": "tcp out",
        "z": "9276f7c982d767df",
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
        "id": "f1ba80bd3db675a2",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "1b9e2b5e1f2bdff9",
                "ae99704bc656123f",
                "3d22dc264092fee6"
            ]
        ]
    },
    {
        "id": "b56410f468d8096c",
        "type": "http request",
        "z": "9276f7c982d767df",
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
        "id": "1b9e2b5e1f2bdff9",
        "type": "delay",
        "z": "9276f7c982d767df",
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
                "b56410f468d8096c"
            ]
        ]
    },
    {
        "id": "0ff445d5c5b581e3",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Подыъ инфо",
        "info": "ID события - 0x21 (3310)\nНазначение: Смена состояния цифрового входа.\nДанные: 0 Байт Номер входа (0...1)\n1 Байт 0–Замкнут; 1–Разомкнут;\n\nперетнули\n0: 33\n1: 0\n2: 1\n\n\nвсе ок\n\n0: 33\n1: 0\n2: 0",
        "x": 410,
        "y": 1660,
        "wires": []
    },
    {
        "id": "e64d8498cd32915d",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 730,
        "y": 1640,
        "wires": []
    },
    {
        "id": "ae99704bc656123f",
        "type": "link out",
        "z": "9276f7c982d767df",
        "name": "eventOptical",
        "mode": "link",
        "links": [
            "51cac67f78cbedbb"
        ],
        "x": 835,
        "y": 1540,
        "wires": []
    },
    {
        "id": "6aa984c7a168f2d3",
        "type": "http request",
        "z": "9276f7c982d767df",
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
                "914c6a4a893110a9"
            ]
        ]
    },
    {
        "id": "914c6a4a893110a9",
        "type": "xml",
        "z": "9276f7c982d767df",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 1520,
        "wires": [
            [
                "a4a91edb99aa4d98"
            ]
        ]
    },
    {
        "id": "a4a91edb99aa4d98",
        "type": "function",
        "z": "9276f7c982d767df",
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
                "ae99704bc656123f",
                "3d22dc264092fee6"
            ]
        ]
    },
    {
        "id": "d51eb052d157fa52",
        "type": "tcp out",
        "z": "9276f7c982d767df",
        "name": "",
        "host": "172.16.9.129",
        "port": "2001",
        "beserver": "client",
        "base64": false,
        "end": true,
        "tls": "",
        "x": 380,
        "y": 620,
        "wires": []
    },
    {
        "id": "2ab740751deafa90",
        "type": "comment",
        "z": "9276f7c982d767df",
        "name": "Відправка на екран",
        "info": "",
        "x": 290,
        "y": 580,
        "wires": []
    },
    {
        "id": "05ba58c95d76ce6e",
        "type": "inject",
        "z": "9276f7c982d767df",
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
        "payload": "123",
        "payloadType": "num",
        "x": 110,
        "y": 620,
        "wires": [
            [
                "d51eb052d157fa52"
            ]
        ]
    },
    {
        "id": "3d22dc264092fee6",
        "type": "json",
        "z": "9276f7c982d767df",
        "name": "",
        "property": "payload",
        "action": "str",
        "pretty": false,
        "x": 870,
        "y": 1580,
        "wires": [
            [
                "973b44560b541d0b"
            ]
        ]
    },
    {
        "id": "973b44560b541d0b",
        "type": "tcp out",
        "z": "9276f7c982d767df",
        "name": "",
        "host": "172.16.9.129",
        "port": "2002",
        "beserver": "client",
        "base64": false,
        "end": true,
        "tls": "",
        "x": 1060,
        "y": 1580,
        "wires": []
    },
    {
        "id": "194aa25016e147e6",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "info",
        "info": "1-ші ваги айпі зчитувача шлагбаума : 246, 247, 248   ; \n2-гі ваги айпі  зчитувача шлагбаума 245, 244, 243\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 90,
        "y": 20,
        "wires": []
    },
    {
        "id": "464c78d943d39723",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Ethernet/RS232/485 tcp 9771",
        "info": "",
        "x": 140,
        "y": 140,
        "wires": []
    },
    {
        "id": "1e42d0aada955263",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 170,
        "y": 500,
        "wires": []
    },
    {
        "id": "b98542bbd5835ad5",
        "type": "tcp in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "server": "client",
        "host": "172.16.9.243",
        "port": "9771",
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
                "a385821e39c91c85",
                "5eeac2de00809b9f"
            ]
        ]
    },
    {
        "id": "ae133bc6417b72f6",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Socket 2 tcp 9772",
        "info": "",
        "x": 110,
        "y": 600,
        "wires": []
    },
    {
        "id": "7cab5dae596055ae",
        "type": "tcp in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9772",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 120,
        "y": 640,
        "wires": [
            [
                "445191b920ca03d4",
                "d1841fb099897093",
                "68ea282e095cc4ed"
            ]
        ]
    },
    {
        "id": "7298a3843c94035e",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Зчитувач",
        "info": "",
        "x": 340,
        "y": 140,
        "wires": []
    },
    {
        "id": "c4dfa492d68f733b",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
        "x": 460,
        "y": 40,
        "wires": [
            [
                "d3a33fd12ccfa9d2"
            ]
        ]
    },
    {
        "id": "d3a33fd12ccfa9d2",
        "type": "function",
        "z": "8d272cf92b0e3e74",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "95c78a8a76522516",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 20",
        "active": false,
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
        "id": "a385821e39c91c85",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "dbfbe086b7a5a39d"
            ]
        ]
    },
    {
        "id": "dbfbe086b7a5a39d",
        "type": "trigger",
        "z": "8d272cf92b0e3e74",
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
                "811375b204d64fac",
                "58ca3943f6a50551"
            ]
        ]
    },
    {
        "id": "811375b204d64fac",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "95c78a8a76522516",
                "43647a81830a671c"
            ]
        ]
    },
    {
        "id": "43647a81830a671c",
        "type": "function",
        "z": "8d272cf92b0e3e74",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 12,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 280,
        "wires": [
            [
                "d3f0125f8ecccc3c",
                "2df5e406f85a3dec"
            ]
        ]
    },
    {
        "id": "d3f0125f8ecccc3c",
        "type": "http request",
        "z": "8d272cf92b0e3e74",
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
                "e1a4b3cc8355e48f"
            ]
        ]
    },
    {
        "id": "e1a4b3cc8355e48f",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 22",
        "active": false,
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
        "id": "1df6217e3423294c",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
        "y": 280,
        "wires": [
            [
                "43647a81830a671c"
            ]
        ]
    },
    {
        "id": "123d1a0702b3595c",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 790,
        "y": 240,
        "wires": []
    },
    {
        "id": "2df5e406f85a3dec",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 23",
        "active": false,
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
        "id": "e96176dd2eef026a",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
        "y": 320,
        "wires": [
            [
                "43647a81830a671c"
            ]
        ]
    },
    {
        "id": "753296c06e66e815",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
        "y": 360,
        "wires": [
            [
                "43647a81830a671c"
            ]
        ]
    },
    {
        "id": "7bcc5a4f3f92b561",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
        "y": 400,
        "wires": [
            [
                "a385821e39c91c85"
            ]
        ]
    },
    {
        "id": "445191b920ca03d4",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 24",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 600,
        "wires": []
    },
    {
        "id": "d1841fb099897093",
        "type": "tcp out",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 390,
        "y": 680,
        "wires": []
    },
    {
        "id": "68ea282e095cc4ed",
        "type": "function",
        "z": "8d272cf92b0e3e74",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 8,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"MagneticLoop\",\n            \"control_point_num\": 4,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 640,
        "wires": [
            [
                "764218dae004966d"
            ]
        ]
    },
    {
        "id": "441453be7ecd79de",
        "type": "http request",
        "z": "8d272cf92b0e3e74",
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
                "0acdac7f484d530c"
            ]
        ]
    },
    {
        "id": "764218dae004966d",
        "type": "delay",
        "z": "8d272cf92b0e3e74",
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
                "441453be7ecd79de"
            ]
        ]
    },
    {
        "id": "0acdac7f484d530c",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
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
        "id": "ae7ac0e429429f52",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Подыъ з магнітної рамки ",
        "info": "ID события - 0x21 (33 10)\nНазначение: Смена состояния цифрового входа.\nДанные: 0 Байт Номер входа (0...1)\n1 Байт 0–Замкнут; 1–Разомкнут;",
        "x": 430,
        "y": 600,
        "wires": []
    },
    {
        "id": "e5b7e1976346ed93",
        "type": "http request",
        "z": "8d272cf92b0e3e74",
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
        "y": 880,
        "wires": [
            [
                "3d4388d9e0229afe",
                "f07aea5f7cdc8c3c"
            ]
        ]
    },
    {
        "id": "3d4388d9e0229afe",
        "type": "xml",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 840,
        "wires": [
            [
                "57ce15d90126edb8",
                "cce092adca338dc1"
            ]
        ]
    },
    {
        "id": "93f4d556514d0319",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Socket 2 status магнітна рамка",
        "info": "",
        "x": 170,
        "y": 780,
        "wires": []
    },
    {
        "id": "906a92318ea23106",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
                "e5b7e1976346ed93"
            ]
        ]
    },
    {
        "id": "0781334464869c8a",
        "type": "http in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "url": "/status/gate/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 840,
        "wires": [
            [
                "5b4ae8dfaa7f4bbc",
                "d7484f8d79c4c81b"
            ]
        ]
    },
    {
        "id": "c296622ad69b61bf",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 25",
        "active": false,
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
        "id": "57ce15d90126edb8",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "c296622ad69b61bf",
                "5463c3e3c9644045"
            ]
        ]
    },
    {
        "id": "5463c3e3c9644045",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 840,
        "wires": []
    },
    {
        "id": "9b69de60c7b2bf24",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 190,
        "y": 1060,
        "wires": []
    },
    {
        "id": "9472629617b3c488",
        "type": "function",
        "z": "8d272cf92b0e3e74",
        "name": "url",
        "func": "//msg.url = 'http://admin:vkmodule@172.16.9.244/protect/leds.cgi?led=1&timeout=2'\nmsg.url = 'http://admin:vkmodule@172.16.9.206/protect/leds.cgi?led=1&timeout=2'\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 1120,
        "wires": [
            [
                "1ade6e015b576159"
            ]
        ]
    },
    {
        "id": "360503bee8ce5942",
        "type": "http in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "url": "/gate/barrier/w2",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1120,
        "wires": [
            [
                "4255d2fe95bb2be5",
                "9472629617b3c488",
                "cc22995a55c25d40"
            ]
        ]
    },
    {
        "id": "60de875ed121da06",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1080,
        "wires": []
    },
    {
        "id": "1ade6e015b576159",
        "type": "http request",
        "z": "8d272cf92b0e3e74",
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
                "2642bf7e607b12a6",
                "7bc9db4c6d7f802d"
            ]
        ]
    },
    {
        "id": "c03d063a5d4103ca",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1120,
        "wires": []
    },
    {
        "id": "cce092adca338dc1",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 27",
        "active": false,
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
        "id": "2642bf7e607b12a6",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "c03d063a5d4103ca"
            ]
        ]
    },
    {
        "id": "4255d2fe95bb2be5",
        "type": "trigger",
        "z": "8d272cf92b0e3e74",
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
                "9a18b71ff6b99e4b"
            ]
        ]
    },
    {
        "id": "7bc9db4c6d7f802d",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "4255d2fe95bb2be5"
            ]
        ]
    },
    {
        "id": "e8281e2ac32f8730",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1220,
        "wires": []
    },
    {
        "id": "9a18b71ff6b99e4b",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "e8281e2ac32f8730"
            ]
        ]
    },
    {
        "id": "5b4ae8dfaa7f4bbc",
        "type": "trigger",
        "z": "8d272cf92b0e3e74",
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
                "2a55a236216a31cb"
            ]
        ]
    },
    {
        "id": "f07aea5f7cdc8c3c",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "5b4ae8dfaa7f4bbc"
            ]
        ]
    },
    {
        "id": "aff0f750e61ffe60",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 960,
        "wires": []
    },
    {
        "id": "2a55a236216a31cb",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "aff0f750e61ffe60"
            ]
        ]
    },
    {
        "id": "a954bc9d97cc62e0",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "60de875ed121da06"
            ]
        ]
    },
    {
        "id": "cb9a9ca4b66fab8f",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 1320,
        "wires": []
    },
    {
        "id": "98891047661a5e77",
        "type": "http in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "url": "/gate/barrier/status/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 1380,
        "wires": [
            [
                "622d96db2b956e13"
            ]
        ]
    },
    {
        "id": "e84edd05caf4fe12",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 1360,
        "wires": []
    },
    {
        "id": "d6824458f6a08eff",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1380,
        "wires": []
    },
    {
        "id": "8f0681b5ba176e77",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "d6824458f6a08eff"
            ]
        ]
    },
    {
        "id": "7c952ee345b151b2",
        "type": "http response",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 1480,
        "wires": []
    },
    {
        "id": "b02c3e7c360ccaa2",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "7c952ee345b151b2"
            ]
        ]
    },
    {
        "id": "622d96db2b956e13",
        "type": "function",
        "z": "8d272cf92b0e3e74",
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
                "e84edd05caf4fe12"
            ]
        ]
    },
    {
        "id": "6de8b4b4dbb477ab",
        "type": "inject",
        "z": "8d272cf92b0e3e74",
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
                "9472629617b3c488"
            ]
        ]
    },
    {
        "id": "5eeac2de00809b9f",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 49",
        "active": false,
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
        "id": "58ca3943f6a50551",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 91",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 140,
        "wires": []
    },
    {
        "id": "cc22995a55c25d40",
        "type": "debug",
        "z": "8d272cf92b0e3e74",
        "name": "debug 96",
        "active": false,
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
        "id": "7b5dda0ccc2c18e4",
        "type": "tcp in",
        "z": "8d272cf92b0e3e74",
        "name": "",
        "server": "client",
        "host": "172.16.9.207",
        "port": "9770",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 140,
        "y": 100,
        "wires": [
            [
                "a385821e39c91c85"
            ]
        ]
    },
    {
        "id": "97dde869fae36fad",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Зняли з пожежних воріт tcp 9770",
        "info": "[ 0 ]\n\n[ 134 ]\n\n[ 84, 100 ]",
        "x": 160,
        "y": 60,
        "wires": []
    },
    {
        "id": "5e254515f5476850",
        "type": "tcp in",
        "z": "8d272cf92b0e3e74",
        "name": "172.16.9.206",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9773",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 90,
        "y": 740,
        "wires": [
            [
                "68ea282e095cc4ed",
                "d1841fb099897093"
            ]
        ]
    },
    {
        "id": "f2b3491ad05fac1a",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Зняли з пожежних воріт tcp 9773",
        "info": "[ 0 ]\n\n[ 134 ]\n\n[ 84, 100 ]",
        "x": 160,
        "y": 700,
        "wires": []
    },
    {
        "id": "d7484f8d79c4c81b",
        "type": "http request",
        "z": "8d272cf92b0e3e74",
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
        "x": 330,
        "y": 800,
        "wires": [
            [
                "3d4388d9e0229afe",
                "f07aea5f7cdc8c3c"
            ]
        ]
    },
    {
        "id": "af8dc4844c53e0d3",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Зняли з пожежних воріт",
        "info": "[ 0 ]\n\n[ 134 ]\n\n[ 84, 100 ]",
        "x": 430,
        "y": 760,
        "wires": []
    },
    {
        "id": "3a454327530fc0a1",
        "type": "comment",
        "z": "8d272cf92b0e3e74",
        "name": "Зняли з пожежних воріт",
        "info": "[ 0 ]\n\n[ 134 ]\n\n[ 84, 100 ]",
        "x": 170,
        "y": 1020,
        "wires": []
    },
    {
        "id": "41778b79990b7733",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "info",
        "info": "Пожежні ворота- \nзчитувач на вхід: 202, 203, 204; \nзчитувач на вихід: 205, 206, 207\n\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "327c75e4236e0a9a",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Ethernet/RS232/485 tcp 9774",
        "info": "",
        "x": 140,
        "y": 140,
        "wires": []
    },
    {
        "id": "67bffc471555a87c",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 190,
        "y": 460,
        "wires": []
    },
    {
        "id": "64b13d4b54514a85",
        "type": "tcp in",
        "z": "a6b252bc4b20c0ab",
        "name": "",
        "server": "client",
        "host": "172.16.9.204",
        "port": "9774",
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
                "3fe076d67d213b68",
                "42d4f50bab4ba60d"
            ]
        ]
    },
    {
        "id": "bde408f7ea4be497",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Socket 2 tcp 9775",
        "info": "",
        "x": 190,
        "y": 600,
        "wires": []
    },
    {
        "id": "a36a54aea16068f2",
        "type": "tcp in",
        "z": "a6b252bc4b20c0ab",
        "name": "172.16.9.203",
        "server": "server",
        "host": "172.16.9.244",
        "port": "9775",
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
                "17f2cc26a395f817",
                "e7d46f8ab1f1408b"
            ]
        ]
    },
    {
        "id": "9b2c5dc01b8f6ebb",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
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
        "id": "ea0b500af925c1d5",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Зчитувач",
        "info": "",
        "x": 360,
        "y": 140,
        "wires": []
    },
    {
        "id": "d66525a8a05ee388",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Подыъ з рамки",
        "info": "",
        "x": 380,
        "y": 440,
        "wires": []
    },
    {
        "id": "b99f99e266603e0b",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "8a366666d631c84a"
            ]
        ]
    },
    {
        "id": "8a366666d631c84a",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
        "id": "6a6b2c94203006c7",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 26",
        "active": false,
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
        "id": "3fe076d67d213b68",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "ce4c7ac5f0eda7f9"
            ]
        ]
    },
    {
        "id": "ce4c7ac5f0eda7f9",
        "type": "trigger",
        "z": "a6b252bc4b20c0ab",
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
                "9283dc1233e267d1"
            ]
        ]
    },
    {
        "id": "9283dc1233e267d1",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "6a6b2c94203006c7",
                "e412cab76f2c0a9f"
            ]
        ]
    },
    {
        "id": "e412cab76f2c0a9f",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 13,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 260,
        "wires": [
            [
                "ecbe9ea9b26a7e4d",
                "a8088f4f9f3fc1c5"
            ]
        ]
    },
    {
        "id": "ecbe9ea9b26a7e4d",
        "type": "http request",
        "z": "a6b252bc4b20c0ab",
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
                "407da5077b7fee73"
            ]
        ]
    },
    {
        "id": "407da5077b7fee73",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 27",
        "active": false,
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
        "id": "8336fe657622128b",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "e412cab76f2c0a9f"
            ]
        ]
    },
    {
        "id": "eb6392e737fe18f4",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 810,
        "y": 240,
        "wires": []
    },
    {
        "id": "a8088f4f9f3fc1c5",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 28",
        "active": false,
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
        "id": "0b3df54a10ae2c52",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "e412cab76f2c0a9f"
            ]
        ]
    },
    {
        "id": "99e598a9319a305f",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "e412cab76f2c0a9f"
            ]
        ]
    },
    {
        "id": "4da181af768e8f22",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "e412cab76f2c0a9f"
            ]
        ]
    },
    {
        "id": "17f2cc26a395f817",
        "type": "tcp out",
        "z": "a6b252bc4b20c0ab",
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
        "id": "bbb3c555e2a0ece5",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 35",
        "active": false,
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
        "id": "e7d46f8ab1f1408b",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "1227d702d195cafd"
            ]
        ]
    },
    {
        "id": "745512db3f6b92c0",
        "type": "http request",
        "z": "a6b252bc4b20c0ab",
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
                "88031593fd76e05e"
            ]
        ]
    },
    {
        "id": "1227d702d195cafd",
        "type": "delay",
        "z": "a6b252bc4b20c0ab",
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
                "745512db3f6b92c0"
            ]
        ]
    },
    {
        "id": "88031593fd76e05e",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
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
        "id": "ae5f4a93ca2f41f5",
        "type": "http request",
        "z": "a6b252bc4b20c0ab",
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
                "3cf32fc30c7e7045",
                "62d844a7f0f81b5c"
            ]
        ]
    },
    {
        "id": "3cf32fc30c7e7045",
        "type": "xml",
        "z": "a6b252bc4b20c0ab",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 530,
        "y": 860,
        "wires": [
            [
                "c015ab6d13888852",
                "66ccbfd5535f2801"
            ]
        ]
    },
    {
        "id": "31a0437fc3ddb554",
        "type": "comment",
        "z": "a6b252bc4b20c0ab",
        "name": "Socket 2 status",
        "info": "",
        "x": 180,
        "y": 820,
        "wires": []
    },
    {
        "id": "d44cf525b22f9b6d",
        "type": "inject",
        "z": "a6b252bc4b20c0ab",
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
                "ae5f4a93ca2f41f5"
            ]
        ]
    },
    {
        "id": "d6b8ebbd0813570b",
        "type": "http in",
        "z": "a6b252bc4b20c0ab",
        "name": "",
        "url": "/status/gate/fire/1",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 860,
        "wires": [
            [
                "ae5f4a93ca2f41f5",
                "b36d17243c614dd3"
            ]
        ]
    },
    {
        "id": "de82f2608cccb4dd",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 39",
        "active": false,
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
        "id": "c015ab6d13888852",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "de82f2608cccb4dd",
                "2aeb90be6b685423"
            ]
        ]
    },
    {
        "id": "2aeb90be6b685423",
        "type": "http response",
        "z": "a6b252bc4b20c0ab",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 860,
        "wires": []
    },
    {
        "id": "66ccbfd5535f2801",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 40",
        "active": false,
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
        "id": "b36d17243c614dd3",
        "type": "trigger",
        "z": "a6b252bc4b20c0ab",
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
                "025294fa161de600"
            ]
        ]
    },
    {
        "id": "62d844a7f0f81b5c",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "b36d17243c614dd3"
            ]
        ]
    },
    {
        "id": "8119191707ca57df",
        "type": "http response",
        "z": "a6b252bc4b20c0ab",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 980,
        "wires": []
    },
    {
        "id": "025294fa161de600",
        "type": "function",
        "z": "a6b252bc4b20c0ab",
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
                "8119191707ca57df"
            ]
        ]
    },
    {
        "id": "42d4f50bab4ba60d",
        "type": "debug",
        "z": "a6b252bc4b20c0ab",
        "name": "debug 50",
        "active": false,
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
        "id": "d749bb1108ea6b70",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "info",
        "info": "Пожежні ворота- \nзчитувач на вхід: 202, 203, 204; \nзчитувач на вихід: 205, 206, 207\n\n\n\npointID: 1 - ваги 1\npointID: 2 - ваги 2\npointID: 3 - ворота ваги 1 \npointID: 4 - ворота ваги 2\npointID: 5 - пожежні ворота заїзд\npointID: 6 - пожежні ворота виїзд",
        "x": 70,
        "y": 40,
        "wires": []
    },
    {
        "id": "cdf94dd163ab28a0",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 130,
        "y": 140,
        "wires": []
    },
    {
        "id": "7061a41a83c97911",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Ethernet/RS232/485",
        "info": "",
        "x": 150,
        "y": 460,
        "wires": []
    },
    {
        "id": "2a596675298216b0",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Socket 2 тимсасово з пожежшних ворыт",
        "info": "",
        "x": 220,
        "y": 600,
        "wires": []
    },
    {
        "id": "f8b3bae105d4c80e",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "45d987c79cd35940",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Зчитувач",
        "info": "",
        "x": 320,
        "y": 140,
        "wires": []
    },
    {
        "id": "42566429b01d1690",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Подыъ з рамки",
        "info": "",
        "x": 340,
        "y": 440,
        "wires": []
    },
    {
        "id": "a14f296fd9ba3359",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
                "5a66da3a8ddbf2cb"
            ]
        ]
    },
    {
        "id": "5a66da3a8ddbf2cb",
        "type": "function",
        "z": "95a4c69dfb430959",
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
        "id": "ae37e52cce911144",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "61096a818acb1df6",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "b6a9f7ee6c8015ae"
            ]
        ]
    },
    {
        "id": "b6a9f7ee6c8015ae",
        "type": "trigger",
        "z": "95a4c69dfb430959",
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
                "ac7074b907837c5c"
            ]
        ]
    },
    {
        "id": "ac7074b907837c5c",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "ae37e52cce911144",
                "fe0383e1e1b13d01"
            ]
        ]
    },
    {
        "id": "fe0383e1e1b13d01",
        "type": "function",
        "z": "95a4c69dfb430959",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 14,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 280,
        "wires": [
            [
                "9476c67d90e51725",
                "83682cb1d5d3648f"
            ]
        ]
    },
    {
        "id": "9476c67d90e51725",
        "type": "http request",
        "z": "95a4c69dfb430959",
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
        "y": 280,
        "wires": [
            [
                "766e8e3f40dfea77"
            ]
        ]
    },
    {
        "id": "766e8e3f40dfea77",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "d0f5df7751e1b21c",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
        "y": 300,
        "wires": [
            [
                "fe0383e1e1b13d01"
            ]
        ]
    },
    {
        "id": "0abe44b16c285b93",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 630,
        "y": 240,
        "wires": []
    },
    {
        "id": "83682cb1d5d3648f",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "y": 320,
        "wires": []
    },
    {
        "id": "866e7bfb21efce3f",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
        "y": 340,
        "wires": [
            [
                "fe0383e1e1b13d01"
            ]
        ]
    },
    {
        "id": "c3dea64f95894da4",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
        "y": 380,
        "wires": [
            [
                "fe0383e1e1b13d01"
            ]
        ]
    },
    {
        "id": "a567b3a47468d5da",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
        "y": 420,
        "wires": [
            [
                "fe0383e1e1b13d01"
            ]
        ]
    },
    {
        "id": "9a903f6e39165079",
        "type": "tcp out",
        "z": "95a4c69dfb430959",
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
        "id": "ce64d90fa854aa88",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "9f44d68ccccb9cb1",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "35c3779236155769"
            ]
        ]
    },
    {
        "id": "f304c8918ea7600c",
        "type": "http request",
        "z": "95a4c69dfb430959",
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
                "0233bc3881a683c3"
            ]
        ]
    },
    {
        "id": "35c3779236155769",
        "type": "delay",
        "z": "95a4c69dfb430959",
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
                "f304c8918ea7600c"
            ]
        ]
    },
    {
        "id": "0233bc3881a683c3",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "9af835aecacfee43",
        "type": "http request",
        "z": "95a4c69dfb430959",
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
                "aaacac85eebeebc2",
                "90b1fa3572e9498d"
            ]
        ]
    },
    {
        "id": "aaacac85eebeebc2",
        "type": "xml",
        "z": "95a4c69dfb430959",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 840,
        "wires": [
            [
                "0fc4efc6194f683e",
                "a3fa0c554884f557"
            ]
        ]
    },
    {
        "id": "1da08f0e0728fd8c",
        "type": "comment",
        "z": "95a4c69dfb430959",
        "name": "Socket 2 status",
        "info": "",
        "x": 160,
        "y": 800,
        "wires": []
    },
    {
        "id": "bb4c5afe7ec9f5b8",
        "type": "inject",
        "z": "95a4c69dfb430959",
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
                "9af835aecacfee43"
            ]
        ]
    },
    {
        "id": "85dd47d1d39ece87",
        "type": "http in",
        "z": "95a4c69dfb430959",
        "name": "",
        "url": "/status/gate/fire/2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 840,
        "wires": [
            [
                "9af835aecacfee43",
                "4f6a647934d6b4d4"
            ]
        ]
    },
    {
        "id": "188764ae24896da6",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "0fc4efc6194f683e",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "188764ae24896da6",
                "0a5bd3ec84dd8381"
            ]
        ]
    },
    {
        "id": "0a5bd3ec84dd8381",
        "type": "http response",
        "z": "95a4c69dfb430959",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 840,
        "wires": []
    },
    {
        "id": "a3fa0c554884f557",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "4f6a647934d6b4d4",
        "type": "trigger",
        "z": "95a4c69dfb430959",
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
                "7dfe01f2fe2e3d9f"
            ]
        ]
    },
    {
        "id": "90b1fa3572e9498d",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "4f6a647934d6b4d4"
            ]
        ]
    },
    {
        "id": "4cd2099f47c689fa",
        "type": "http response",
        "z": "95a4c69dfb430959",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 960,
        "wires": []
    },
    {
        "id": "7dfe01f2fe2e3d9f",
        "type": "function",
        "z": "95a4c69dfb430959",
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
                "4cd2099f47c689fa"
            ]
        ]
    },
    {
        "id": "1f4df8eac735391a",
        "type": "debug",
        "z": "95a4c69dfb430959",
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
        "id": "5f4a2db8f814413f",
        "type": "http request",
        "z": "2e9d521348c04d2b",
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
                "a21bd745866ecb66"
            ]
        ]
    },
    {
        "id": "a21bd745866ecb66",
        "type": "xml",
        "z": "2e9d521348c04d2b",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 120,
        "wires": [
            [
                "3b4f26d386c3c40b",
                "4158210f203a2565"
            ]
        ]
    },
    {
        "id": "4a707a9f3637d4f6",
        "type": "comment",
        "z": "2e9d521348c04d2b",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 80,
        "wires": []
    },
    {
        "id": "af07d727b6a6148c",
        "type": "inject",
        "z": "2e9d521348c04d2b",
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
                "5f4a2db8f814413f"
            ]
        ]
    },
    {
        "id": "f1dd7760952d4c51",
        "type": "http in",
        "z": "2e9d521348c04d2b",
        "name": "",
        "url": "/status/traffic/lights/w2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 120,
        "wires": [
            [
                "5f4a2db8f814413f"
            ]
        ]
    },
    {
        "id": "f44f9234fcaffc33",
        "type": "debug",
        "z": "2e9d521348c04d2b",
        "name": "debug 45",
        "active": false,
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
        "id": "1e1a13469d60c985",
        "type": "http response",
        "z": "2e9d521348c04d2b",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 120,
        "wires": []
    },
    {
        "id": "3b4f26d386c3c40b",
        "type": "debug",
        "z": "2e9d521348c04d2b",
        "name": "debug 46",
        "active": false,
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
        "id": "4158210f203a2565",
        "type": "function",
        "z": "2e9d521348c04d2b",
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
                "1e1a13469d60c985",
                "f44f9234fcaffc33"
            ]
        ]
    },
    {
        "id": "57d1fc033c023556",
        "type": "http request",
        "z": "2e9d521348c04d2b",
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
                "50611b36ab5fab58",
                "bcf33537c8309f40"
            ]
        ]
    },
    {
        "id": "2e8b40202fa6988c",
        "type": "comment",
        "z": "2e9d521348c04d2b",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 320,
        "wires": []
    },
    {
        "id": "b627101398f2c8a9",
        "type": "http in",
        "z": "2e9d521348c04d2b",
        "name": "",
        "url": "/traffic/on/off/w2",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 360,
        "wires": [
            [
                "88a19733d33e6470"
            ]
        ]
    },
    {
        "id": "069eed90e94e16db",
        "type": "debug",
        "z": "2e9d521348c04d2b",
        "name": "debug 47",
        "active": false,
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
        "id": "ed2dd194f55e6bee",
        "type": "http response",
        "z": "2e9d521348c04d2b",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 360,
        "wires": []
    },
    {
        "id": "50611b36ab5fab58",
        "type": "debug",
        "z": "2e9d521348c04d2b",
        "name": "debug 48",
        "active": false,
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
        "id": "bcf33537c8309f40",
        "type": "function",
        "z": "2e9d521348c04d2b",
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
                "ed2dd194f55e6bee",
                "069eed90e94e16db"
            ]
        ]
    },
    {
        "id": "88a19733d33e6470",
        "type": "function",
        "z": "2e9d521348c04d2b",
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
                "57d1fc033c023556"
            ]
        ]
    },
    {
        "id": "cceecd253489e001",
        "type": "inject",
        "z": "2e9d521348c04d2b",
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
                "88a19733d33e6470"
            ]
        ]
    },
    {
        "id": "8d1ee52c14392309",
        "type": "comment",
        "z": "91cc16af9676526d",
        "name": "",
        "info": "Завальна яма 3(нова): Екран - 192, зчитувач: 191,190,189. \nЗавальна яма 2 (стара): екран -196, зчитувач: 195,194,193. \nЗагрузка: екран- 188, зчитувач: 208,209,187",
        "x": 130,
        "y": 100,
        "wires": []
    },
    {
        "id": "412b15991f8f703c",
        "type": "tcp in",
        "z": "f330dd24d68f1676",
        "name": "",
        "server": "client",
        "host": "172.16.9.191",
        "port": "9776",
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
                "001342881c78c02a",
                "869e6c28929e8f91"
            ]
        ]
    },
    {
        "id": "f455c0430bc08e6a",
        "type": "debug",
        "z": "f330dd24d68f1676",
        "name": "debug 5",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 180,
        "wires": []
    },
    {
        "id": "636da190b1e7e808",
        "type": "comment",
        "z": "f330dd24d68f1676",
        "name": "Зчитувач tcp 9776",
        "info": "3C 00 48 B6 8A",
        "x": 130,
        "y": 140,
        "wires": []
    },
    {
        "id": "001342881c78c02a",
        "type": "function",
        "z": "f330dd24d68f1676",
        "name": "function 2",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "c800b6a8b81d8ef3"
            ]
        ]
    },
    {
        "id": "c800b6a8b81d8ef3",
        "type": "trigger",
        "z": "f330dd24d68f1676",
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
                "a91fd8e557300c44"
            ]
        ]
    },
    {
        "id": "7c1b1dd1c4964218",
        "type": "inject",
        "z": "f330dd24d68f1676",
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
                "11353c8632cd9af6"
            ]
        ]
    },
    {
        "id": "11353c8632cd9af6",
        "type": "function",
        "z": "f330dd24d68f1676",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "a91fd8e557300c44",
        "type": "function",
        "z": "f330dd24d68f1676",
        "name": "function 3",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 180,
        "wires": [
            [
                "f455c0430bc08e6a",
                "7054903cf48f0ee6"
            ]
        ]
    },
    {
        "id": "869e6c28929e8f91",
        "type": "debug",
        "z": "f330dd24d68f1676",
        "name": "debug 15",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 380,
        "y": 140,
        "wires": []
    },
    {
        "id": "7054903cf48f0ee6",
        "type": "function",
        "z": "f330dd24d68f1676",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 21,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 280,
        "wires": [
            [
                "4e135b093a16b753",
                "53b28bbc1f2d0ad4"
            ]
        ]
    },
    {
        "id": "4e135b093a16b753",
        "type": "http request",
        "z": "f330dd24d68f1676",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.27/bc/hs/elevator",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 730,
        "y": 280,
        "wires": [
            [
                "b901b0dfcadf4d34"
            ]
        ]
    },
    {
        "id": "b901b0dfcadf4d34",
        "type": "debug",
        "z": "f330dd24d68f1676",
        "name": "debug 18",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 280,
        "wires": []
    },
    {
        "id": "e309e7a85f126a97",
        "type": "inject",
        "z": "f330dd24d68f1676",
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
        "x": 260,
        "y": 280,
        "wires": [
            [
                "7054903cf48f0ee6"
            ]
        ]
    },
    {
        "id": "e6ff1b451dbbf04b",
        "type": "comment",
        "z": "f330dd24d68f1676",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 710,
        "y": 240,
        "wires": []
    },
    {
        "id": "53b28bbc1f2d0ad4",
        "type": "debug",
        "z": "f330dd24d68f1676",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 320,
        "wires": []
    },
    {
        "id": "0e7e7a8694c37dde",
        "type": "inject",
        "z": "f330dd24d68f1676",
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
        "x": 250,
        "y": 320,
        "wires": [
            [
                "7054903cf48f0ee6"
            ]
        ]
    },
    {
        "id": "571ab5594b65d2b0",
        "type": "inject",
        "z": "f330dd24d68f1676",
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
        "x": 260,
        "y": 360,
        "wires": [
            [
                "7054903cf48f0ee6"
            ]
        ]
    },
    {
        "id": "ce10f1eba8a1e551",
        "type": "inject",
        "z": "f330dd24d68f1676",
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
        "x": 260,
        "y": 400,
        "wires": [
            [
                "7054903cf48f0ee6"
            ]
        ]
    },
    {
        "id": "c141c5aa0c86f476",
        "type": "comment",
        "z": "f330dd24d68f1676",
        "name": "",
        "info": "0300866665\n\n9600 [ 0 ] [ 134, 102 ] [ 101 ]\n19200 [ 0 ] [ 120, 120 ] [ 102, 120 ]\n115200 [ 0 ] [ 0, 0, 0, 0 ] [ 0, 0, 0, 0, 0 ]\n38400 [ 0 ] [ 128, 0, 128 ] [ 128, 120, 120, 248 ]",
        "x": 90,
        "y": 280,
        "wires": []
    },
    {
        "id": "ecc07ffdbae6c309",
        "type": "debug",
        "z": "f330dd24d68f1676",
        "name": "debug 93",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 380,
        "y": 220,
        "wires": []
    },
    {
        "id": "41ccc50f5b3c3eb0",
        "type": "http request",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.190/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 100,
        "wires": [
            [
                "00243455dcb289bf",
                "2b236558ba0e7798"
            ]
        ]
    },
    {
        "id": "00243455dcb289bf",
        "type": "xml",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 100,
        "wires": [
            [
                "9bd4d15b552df892",
                "313e60dfbbd5c968"
            ]
        ]
    },
    {
        "id": "8e4d56ac4745e1cd",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 60,
        "wires": []
    },
    {
        "id": "0ffe1c78af730ba9",
        "type": "inject",
        "z": "ca2f71b32b2cf24e",
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
        "y": 140,
        "wires": [
            [
                "41ccc50f5b3c3eb0"
            ]
        ]
    },
    {
        "id": "fb71fafc6c2c1416",
        "type": "http in",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "url": "/status/gate/y3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "41ccc50f5b3c3eb0",
                "747da3980ac78693"
            ]
        ]
    },
    {
        "id": "25e0b3ae2a3b685d",
        "type": "debug",
        "z": "ca2f71b32b2cf24e",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 140,
        "wires": []
    },
    {
        "id": "9bd4d15b552df892",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 22,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 100,
        "wires": [
            [
                "25e0b3ae2a3b685d",
                "6916829c6f8ccd2a"
            ]
        ]
    },
    {
        "id": "6916829c6f8ccd2a",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 100,
        "wires": []
    },
    {
        "id": "e251930c64316606",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 190,
        "y": 380,
        "wires": []
    },
    {
        "id": "0ed8501d3a6f25da",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "url",
        "func": "msg.url = 'http://admin:vkmodule@172.16.9.190/protect/leds.cgi?led=1&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 440,
        "wires": [
            [
                "cadd22298a557e72"
            ]
        ]
    },
    {
        "id": "610b901017bc546b",
        "type": "http in",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "url": "/gate/barrier/y3",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 440,
        "wires": [
            [
                "aee3bf78ef85a458",
                "0ed8501d3a6f25da"
            ]
        ]
    },
    {
        "id": "ddb8b3a0ab509af8",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 400,
        "wires": []
    },
    {
        "id": "cadd22298a557e72",
        "type": "http request",
        "z": "ca2f71b32b2cf24e",
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
        "y": 440,
        "wires": [
            [
                "bc8b58953fe9b4a3",
                "ff849d2d4fdb64b4"
            ]
        ]
    },
    {
        "id": "a44efd1a56469dc3",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 440,
        "wires": []
    },
    {
        "id": "313e60dfbbd5c968",
        "type": "debug",
        "z": "ca2f71b32b2cf24e",
        "name": "debug 27",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 60,
        "wires": []
    },
    {
        "id": "bc8b58953fe9b4a3",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 22,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 440,
        "wires": [
            [
                "a44efd1a56469dc3"
            ]
        ]
    },
    {
        "id": "aee3bf78ef85a458",
        "type": "trigger",
        "z": "ca2f71b32b2cf24e",
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
        "y": 540,
        "wires": [
            [
                "bdae17e9187fa720"
            ]
        ]
    },
    {
        "id": "ff849d2d4fdb64b4",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 480,
        "wires": [
            [
                "aee3bf78ef85a458"
            ]
        ]
    },
    {
        "id": "3fe6a26228ad1125",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 540,
        "wires": []
    },
    {
        "id": "bdae17e9187fa720",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 22,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 540,
        "wires": [
            [
                "3fe6a26228ad1125"
            ]
        ]
    },
    {
        "id": "747da3980ac78693",
        "type": "trigger",
        "z": "ca2f71b32b2cf24e",
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
        "y": 180,
        "wires": [
            [
                "94e8c4935d2d7367"
            ]
        ]
    },
    {
        "id": "2b236558ba0e7798",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 140,
        "wires": [
            [
                "747da3980ac78693"
            ]
        ]
    },
    {
        "id": "c0c766d589da9919",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 770,
        "y": 180,
        "wires": []
    },
    {
        "id": "94e8c4935d2d7367",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 22,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 180,
        "wires": [
            [
                "c0c766d589da9919"
            ]
        ]
    },
    {
        "id": "ba3f59e494ae0003",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 400,
        "wires": [
            [
                "ddb8b3a0ab509af8"
            ]
        ]
    },
    {
        "id": "425f5289fc67f2b8",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 640,
        "wires": []
    },
    {
        "id": "4b373a6fc939fd7f",
        "type": "http in",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "url": "/gate/barrier/status/y3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 680,
        "wires": [
            [
                "e0ba40744c8dc6ab"
            ]
        ]
    },
    {
        "id": "e44ef46f0c1873d1",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 680,
        "wires": []
    },
    {
        "id": "1055129c5a51970d",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 640,
        "wires": []
    },
    {
        "id": "9b81ce0ed539810b",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 640,
        "wires": [
            [
                "1055129c5a51970d"
            ]
        ]
    },
    {
        "id": "35a30119d78a80fd",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 680,
        "wires": []
    },
    {
        "id": "d79d287f4e62c191",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 680,
        "wires": [
            [
                "35a30119d78a80fd"
            ]
        ]
    },
    {
        "id": "e0ba40744c8dc6ab",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 22,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 680,
        "wires": [
            [
                "e44ef46f0c1873d1"
            ]
        ]
    },
    {
        "id": "217572346aedac8e",
        "type": "inject",
        "z": "ca2f71b32b2cf24e",
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
        "y": 480,
        "wires": [
            [
                "0ed8501d3a6f25da"
            ]
        ]
    },
    {
        "id": "aee87ac2454c9689",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Socket 2 tcp 9777",
        "info": "",
        "x": 150,
        "y": 840,
        "wires": []
    },
    {
        "id": "88f3d76050225729",
        "type": "tcp in",
        "z": "ca2f71b32b2cf24e",
        "name": "172.16.9.190",
        "server": "server",
        "host": "172.16.9.247",
        "port": "9777",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 170,
        "y": 900,
        "wires": [
            [
                "f2b4876d23051fa7",
                "057c5261eb247154",
                "64f780ac7289a95b"
            ]
        ]
    },
    {
        "id": "11c944ace283d0a2",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Подыъ з оптопар",
        "info": "",
        "x": 430,
        "y": 840,
        "wires": []
    },
    {
        "id": "f2b4876d23051fa7",
        "type": "debug",
        "z": "ca2f71b32b2cf24e",
        "name": "debug 24",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 860,
        "wires": []
    },
    {
        "id": "057c5261eb247154",
        "type": "tcp out",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 270,
        "y": 960,
        "wires": []
    },
    {
        "id": "64f780ac7289a95b",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"OpticalLoop\",\n            \"control_point_num\": 25,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"OpticalLoop\",\n            \"control_point_num\": 25,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 900,
        "wires": [
            [
                "14a8f91c4e00450d"
            ]
        ]
    },
    {
        "id": "5c277be2c86f1ed3",
        "type": "http request",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://172.16.9.27/bc/hs/agb",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 930,
        "y": 900,
        "wires": [
            [
                "69452eef815e9e29"
            ]
        ]
    },
    {
        "id": "14a8f91c4e00450d",
        "type": "delay",
        "z": "ca2f71b32b2cf24e",
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
        "x": 740,
        "y": 900,
        "wires": [
            [
                "5c277be2c86f1ed3"
            ]
        ]
    },
    {
        "id": "69452eef815e9e29",
        "type": "debug",
        "z": "ca2f71b32b2cf24e",
        "name": "debug 26",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 920,
        "y": 940,
        "wires": []
    },
    {
        "id": "1335d12c19d4180f",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 870,
        "y": 840,
        "wires": []
    },
    {
        "id": "4a25427be9069442",
        "type": "http request",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.190/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 280,
        "wires": [
            [
                "b402f790fcc1bc35"
            ]
        ]
    },
    {
        "id": "b402f790fcc1bc35",
        "type": "xml",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 280,
        "wires": [
            [
                "f202d1f201ee708f"
            ]
        ]
    },
    {
        "id": "2602a02e708df95d",
        "type": "comment",
        "z": "ca2f71b32b2cf24e",
        "name": "Socket 2 status периметра",
        "info": "",
        "x": 190,
        "y": 240,
        "wires": []
    },
    {
        "id": "15f9dd688e35bcad",
        "type": "http in",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "url": "/status/perimetr/y3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 280,
        "wires": [
            [
                "4a25427be9069442"
            ]
        ]
    },
    {
        "id": "f202d1f201ee708f",
        "type": "function",
        "z": "ca2f71b32b2cf24e",
        "name": "function 19",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}else{\n    closed = true\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 24,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 280,
        "wires": [
            [
                "e59e3671bcb8d986",
                "40a94dd30d0d2032"
            ]
        ]
    },
    {
        "id": "e59e3671bcb8d986",
        "type": "http response",
        "z": "ca2f71b32b2cf24e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 280,
        "wires": []
    },
    {
        "id": "971209d64f94742d",
        "type": "inject",
        "z": "ca2f71b32b2cf24e",
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
        "y": 320,
        "wires": [
            [
                "4a25427be9069442"
            ]
        ]
    },
    {
        "id": "40a94dd30d0d2032",
        "type": "debug",
        "z": "ca2f71b32b2cf24e",
        "name": "debug 93",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 240,
        "wires": []
    },
    {
        "id": "19b4726af5eb31c3",
        "type": "http request",
        "z": "faecd4c0664297e1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 100,
        "wires": [
            [
                "3d46a7d56b8aa4a5"
            ]
        ]
    },
    {
        "id": "3d46a7d56b8aa4a5",
        "type": "xml",
        "z": "faecd4c0664297e1",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 100,
        "wires": [
            [
                "dc0603454d842103",
                "e45b77a83c56017d"
            ]
        ]
    },
    {
        "id": "fe4d412959e67080",
        "type": "comment",
        "z": "faecd4c0664297e1",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 60,
        "wires": []
    },
    {
        "id": "6de97a87a5f0cc7a",
        "type": "inject",
        "z": "faecd4c0664297e1",
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
        "y": 180,
        "wires": [
            [
                "19b4726af5eb31c3"
            ]
        ]
    },
    {
        "id": "31e77e6af05f31cb",
        "type": "http in",
        "z": "faecd4c0664297e1",
        "name": "",
        "url": "/status/traffic/lights/y3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "19b4726af5eb31c3"
            ]
        ]
    },
    {
        "id": "b7acd6c10beed3ad",
        "type": "debug",
        "z": "faecd4c0664297e1",
        "name": "debug 45",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 140,
        "wires": []
    },
    {
        "id": "acc1f4b9e61a6750",
        "type": "http response",
        "z": "faecd4c0664297e1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 100,
        "wires": []
    },
    {
        "id": "dc0603454d842103",
        "type": "debug",
        "z": "faecd4c0664297e1",
        "name": "debug 46",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 60,
        "wires": []
    },
    {
        "id": "e45b77a83c56017d",
        "type": "function",
        "z": "faecd4c0664297e1",
        "name": "function 21",
        "func": "let traffic_lights_1 = msg.payload.response.led0[0]\nlet traffic_lights_2 = msg.payload.response.led1[0]\n\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_1\": (traffic_lights_1 === \"0\") ? false : true,\n    \"traffic_lights_2\": (traffic_lights_2 === \"0\") ? false : true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 100,
        "wires": [
            [
                "acc1f4b9e61a6750",
                "b7acd6c10beed3ad"
            ]
        ]
    },
    {
        "id": "36bfa79b0c44dfc6",
        "type": "http request",
        "z": "faecd4c0664297e1",
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
        "y": 340,
        "wires": [
            [
                "3324fd62b3f1aa3c",
                "06861c92d2fd02f6"
            ]
        ]
    },
    {
        "id": "b95b048da8f784e3",
        "type": "comment",
        "z": "faecd4c0664297e1",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 300,
        "wires": []
    },
    {
        "id": "c33c53de71554de5",
        "type": "http in",
        "z": "faecd4c0664297e1",
        "name": "",
        "url": "/traffic/on/off/y3",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 340,
        "wires": [
            [
                "a53128d66c23710e"
            ]
        ]
    },
    {
        "id": "7204e43227fcbb62",
        "type": "debug",
        "z": "faecd4c0664297e1",
        "name": "debug 47",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 380,
        "wires": []
    },
    {
        "id": "edd85daf96238c51",
        "type": "http response",
        "z": "faecd4c0664297e1",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 970,
        "y": 340,
        "wires": []
    },
    {
        "id": "3324fd62b3f1aa3c",
        "type": "debug",
        "z": "faecd4c0664297e1",
        "name": "debug 48",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 300,
        "wires": []
    },
    {
        "id": "06861c92d2fd02f6",
        "type": "function",
        "z": "faecd4c0664297e1",
        "name": "function 22",
        "func": "msg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_2\": true\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 340,
        "wires": [
            [
                "edd85daf96238c51",
                "7204e43227fcbb62"
            ]
        ]
    },
    {
        "id": "a53128d66c23710e",
        "type": "function",
        "z": "faecd4c0664297e1",
        "name": "function 23",
        "func": "msg.url = \"http://admin:vkmodule@172.16.9.241/protect/leds.cgi?led=1&timeout=30\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 340,
        "wires": [
            [
                "36bfa79b0c44dfc6"
            ]
        ]
    },
    {
        "id": "1112c5f5defcf892",
        "type": "inject",
        "z": "faecd4c0664297e1",
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
        "y": 400,
        "wires": [
            [
                "a53128d66c23710e"
            ]
        ]
    },
    {
        "id": "0984431cfce4646b",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
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
        "repeat": "1.5",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 120,
        "y": 167,
        "wires": [
            [
                "cdc918b86853a4c0",
                "c5dbfee8148d8729",
                "92033b2121fc7bf2"
            ]
        ]
    },
    {
        "id": "0e198aebb925bbef",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\nflow.set('currentWeight',currentWeight);\n\nmsg.payload       = currentWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 280,
        "wires": [
            [
                "b6d6b69126be1d68",
                "a507eee460a0dde7",
                "2240688d5ba2df2d",
                "6e56954d43bea92e"
            ]
        ]
    },
    {
        "id": "fb02e96db6e1a7ab",
        "type": "http in",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "url": "/jdVesa/getWeight/status",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 180,
        "y": 520,
        "wires": [
            [
                "3316d1e74d563a8a"
            ]
        ]
    },
    {
        "id": "758fbf130e4234ad",
        "type": "http in",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "url": "/jdVesa/getWeight3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 600,
        "wires": [
            [
                "d720a5e557737c9d"
            ]
        ]
    },
    {
        "id": "d720a5e557737c9d",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "FAST WEIGHT",
        "func": "msg.payload = {\n    weight: flow.get('currentWeight'),\n    weight1: flow.get('w1'),\n    weight2: flow.get('w2'),\n    weight3: flow.get('w3'),\n    status:true,\n    stable:true,    \n    perimetr:true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 600,
        "wires": [
            [
                "a2254616de0e952d"
            ]
        ]
    },
    {
        "id": "a2254616de0e952d",
        "type": "http response",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "x": 600,
        "y": 600,
        "wires": []
    },
    {
        "id": "5ef40be1e5d6402e",
        "type": "comment",
        "z": "b26a2a4ee91c8b9d",
        "name": "Device level",
        "info": "",
        "x": 95,
        "y": 123,
        "wires": []
    },
    {
        "id": "a32af697969d105e",
        "type": "comment",
        "z": "b26a2a4ee91c8b9d",
        "name": "INTEGRATION LEVEL (API)",
        "info": "",
        "x": 160,
        "y": 480,
        "wires": []
    },
    {
        "id": "43c2949090125ede",
        "type": "switch",
        "z": "b26a2a4ee91c8b9d",
        "name": "Logging",
        "property": "log",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 960,
        "y": 240,
        "wires": [
            [
                "15f9e62d1e00ab4f",
                "eaa84f6417149717"
            ]
        ]
    },
    {
        "id": "cf1ee9d97de84a79",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
        "name": "init",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "init",
        "payloadType": "str",
        "x": 70,
        "y": 80,
        "wires": [
            [
                "5f5a4652291e076b"
            ]
        ]
    },
    {
        "id": "e23a30de77dddc73",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "CONFIG",
        "func": "var config;\n\nconfig = {\n    'scale':'avto1',\n    'deltaWeight':250,\n    'sizeOfArrayOfWeights':5,\n    'inaccuracy':60\n}\n \nflow.set('config',config);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 80,
        "wires": [
            [
                "9a811f17398f9763"
            ]
        ]
    },
    {
        "id": "85ed917259be8f4f",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 790,
        "y": 80,
        "wires": []
    },
    {
        "id": "8f920a6325edbe9e",
        "type": "comment",
        "z": "b26a2a4ee91c8b9d",
        "name": "INITIALIZING",
        "info": "",
        "x": 90,
        "y": 40,
        "wires": []
    },
    {
        "id": "b6d6b69126be1d68",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "MAKE PAGE",
        "func": "return msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 751,
        "y": 202,
        "wires": [
            []
        ]
    },
    {
        "id": "da19efd11c23d498",
        "type": "comment",
        "z": "b26a2a4ee91c8b9d",
        "name": "TRAFFIC LIGHT",
        "info": "!",
        "x": 900,
        "y": 20,
        "wires": []
    },
    {
        "id": "3316d1e74d563a8a",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "STATUSZERO",
        "func": "var UID = msg.req.query.reader;\nvar lastUID = flow.get('lastUID');\nvar zero    = flow.get('zero');\n\nif (UID!==lastUID && !zero) \n{\n    msg.statusZero = false;    \n} else {\n    msg.statusZero = true;\n   flow.set('zero',false);\n   flow.set('lastUID',UID);\n}\n\nmsg.uid = UID; \n\nmsg.payload = zero;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 520,
        "wires": [
            [
                "43c2949090125ede",
                "4cc66147c85aff6c"
            ]
        ]
    },
    {
        "id": "15f9e62d1e00ab4f",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "Logging to table",
        "func": "var table = flow.get('table');\nvar currentWeight = flow.get('currentWeight');\nvar obj = {\n    'datetime': new Date(),\n    'uid': msg.uid,\n    'weight': currentWeight\n};\n\ntable.push(obj);\n\nflow.set('table',table);\nflow.set('lastWeight',currentWeight);\n\nmsg.payload = obj;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1100,
        "y": 300,
        "wires": [
            [
                "72e0287e92ee9b1c"
            ]
        ]
    },
    {
        "id": "a507eee460a0dde7",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "LAST WEIGHT",
        "func": "var lastWeight    = flow.get('lastWeight');\nvar currentWeight = flow.get('currentWeight');\nvar deltaWeight   = flow.get('config').deltaWeight;\n\nvar log = 0;\nif ((lastWeight - currentWeight)>deltaWeight || (lastWeight - currentWeight) < -deltaWeight){\n    log = 1;\n} else if( lastWeight!==0 && currentWeight === 0){\n    log = 1;\n} else {\n    log = 0;\n}\n\nif (log){\n    if (currentWeight > lastWeight){\n        flow.set('in',true);\n        flow.set('out',false);\n    }else{\n        flow.set('in',false);\n        flow.set('out',true);\n    } \n}else{\n    flow.set('in',false);\n    flow.set('out',false);\n}\n\nif (currentWeight === 0){\n    flow.set('zero',true);\n} \n\nmsg.log = log;\nmsg.uid = '';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 761,
        "y": 242,
        "wires": [
            [
                "43c2949090125ede"
            ]
        ]
    },
    {
        "id": "4cc66147c85aff6c",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "MAKE BODY",
        "func": "msg.payload = {\n    weight:flow.get('currentWeight'),\n    status:msg.statusZero,\n    stable:flow.get('stability'),    \n    perimetr:flow.get('perimetrStatus')\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 520,
        "wires": [
            [
                "f4f3f6726bd53f14"
            ]
        ]
    },
    {
        "id": "f4f3f6726bd53f14",
        "type": "http response",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "x": 750,
        "y": 520,
        "wires": []
    },
    {
        "id": "72e0287e92ee9b1c",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 1270,
        "y": 300,
        "wires": []
    },
    {
        "id": "eaa84f6417149717",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 1110,
        "y": 260,
        "wires": []
    },
    {
        "id": "2240688d5ba2df2d",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 728,
        "y": 142,
        "wires": []
    },
    {
        "id": "6e56954d43bea92e",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "STABLE",
        "func": "var arrayOfWeights       = flow.get('arrayOfWeights');\nvar sizeOfArrayOfWeights = flow.get('config').sizeOfArrayOfWeights;\nvar inaccuracy           = flow.get('config').inaccuracy;\nvar size = arrayOfWeights.length - 1 - sizeOfArrayOfWeights;\n\narrayOfWeights.push(msg.payload);\n\nif (size > 0){\n    \n    flow.set('stability',true);\n    \n    for (var i = 0; i <= sizeOfArrayOfWeights; i++ ){\n        var ai = (arrayOfWeights.length - 1 - i);\n        var bi = (ai - 1);\n        var a = arrayOfWeights[ai];\n        var b = arrayOfWeights[bi];\n        if ((a-b)>inaccuracy || (a-b)<-inaccuracy){\n            flow.set('stability',false);\n            break;\n        }\n    }\n    \n}else {\n    flow.set('stability',false);\n}\n\nflow.set('arrayOfWeights',arrayOfWeights);\n\nmsg.payload = flow.get('stability');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 741,
        "y": 282,
        "wires": [
            []
        ]
    },
    {
        "id": "5f5a4652291e076b",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "INIT",
        "func": "flow.set('currentWeight',0);\nflow.set('perimetrStatus',0);\nflow.set('stability',true);\nflow.set('zero',false);\nflow.set('lastUID','');\nflow.set('lastWeight',0);\nflow.set('arrayOfWeights',[]);\nflow.set('table',[]);\nflow.set('log',0);\nflow.set('in',false);\nflow.set('out',true);\n  \n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 80,
        "wires": [
            [
                "e23a30de77dddc73"
            ]
        ]
    },
    {
        "id": "9a811f17398f9763",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "Модель весов поправити*",
        "func": "flow.set('inputString2', Buffer.from(\"A15e\", \"hex\"));\n\n\nflow.set('inputString', String.fromCharCode(0x00)); //тут пишем строку, которую шлем в ком порт, при необходимости\nflow.set('parser',function(v){\n        //тут парсим строку, которая приходит с весовго модуля\n\n    var k1_comon = 0;\n    var k2_comon = 0;\n    var k3_comon = 0;\n    var k4_comon = 0;\n    var k5_comon = 0;\n    var k6_comon = 0;\n    //забираєм елементи\n    var k1_h = v[2];\n    var k1_l = v[1];\n\n    var k2_h = v[4];\n    var k2_l = v[3];\n\n    var k3_h = v[6];\n    var k3_l = v[5];\n\n    var k4_h = v[8];\n    var k4_l = v[7];\n\n    var k5_h = v[10];\n    var k5_l = v[9];\n\n    var k6_h = v[12];\n    var k6_l = v[11];\n\n    //зміщення\n    k1_h = k1_h << 8;\n    k2_h = k2_h << 8;\n    k3_h = k3_h << 8;\n    k4_h = k4_h << 8;\n    k5_h = k5_h << 8;\n    k6_h = k6_h << 8;\n    // a | b  \n    k1_comon = k1_h | k1_l;\n    k2_comon = k2_h | k2_l;\n    k3_comon = k3_h | k3_l;\n    k4_comon = k4_h | k4_l;\n    k5_comon = k5_h | k5_l;\n    k6_comon = k6_h | k6_l;\n\n    v = (k1_comon + k2_comon + k3_comon + k4_comon + k5_comon + k6_comon);\n    var w1 = (k1_comon + k2_comon) * 10;\n    var w2 = (k3_comon + k4_comon) * 10;\n    var w3 = (k5_comon + k6_comon) * 10;\n    //w3 = 0 //тимчасово\n    flow.set('w1', w1);\n    flow.set('w2', w2);\n    flow.set('w3', w3);\n    return Number(v) * 10;\n    //return Number(v);\n});\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 566.8570861816406,
        "y": 79.71429443359375,
        "wires": [
            [
                "85ed917259be8f4f"
            ]
        ]
    },
    {
        "id": "cdc918b86853a4c0",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 379,
        "y": 129,
        "wires": []
    },
    {
        "id": "92033b2121fc7bf2",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 450,
        "y": 240,
        "wires": []
    },
    {
        "id": "c5dbfee8148d8729",
        "type": "tcp request",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "server": "172.16.9.23",
        "port": "9778",
        "out": "time",
        "ret": "buffer",
        "splitc": "500",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 200,
        "y": 240,
        "wires": [
            [
                "0e198aebb925bbef",
                "92033b2121fc7bf2"
            ]
        ]
    },
    {
        "id": "978acce60ff59307",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
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
        "y": 320,
        "wires": [
            [
                "4125397dc8e80d9c"
            ]
        ]
    },
    {
        "id": "4125397dc8e80d9c",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "1-2 реальна 2-3",
        "func": "msg.payload = Buffer.from(\"A15E\", \"hex\")\n//0xA1 0x5Е \n//msg.payload = Buffer.from(\"00\", \"hex\")\nmsg.payload = Buffer.from(\"A45B\", \"hex\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 320,
        "wires": [
            [
                "c5dbfee8148d8729",
                "2084acb82cb61b63"
            ]
        ]
    },
    {
        "id": "2a44fce0b0d1db7f",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
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
        "y": 360,
        "wires": [
            [
                "db11ac0241018613"
            ]
        ]
    },
    {
        "id": "db11ac0241018613",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "1-3",
        "func": "\nmsg.payload = Buffer.from(\"A55A\", \"hex\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 360,
        "wires": [
            [
                "c5dbfee8148d8729",
                "2084acb82cb61b63"
            ]
        ]
    },
    {
        "id": "1764800a2397d976",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
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
        "y": 400,
        "wires": [
            [
                "b5c47d0d4bc95c6f"
            ]
        ]
    },
    {
        "id": "b5c47d0d4bc95c6f",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "2-3",
        "func": "\nmsg.payload = Buffer.from(\"A659\", \"hex\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 400,
        "wires": [
            [
                "c5dbfee8148d8729",
                "2084acb82cb61b63"
            ]
        ]
    },
    {
        "id": "fca29260808e93c7",
        "type": "inject",
        "z": "b26a2a4ee91c8b9d",
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
        "y": 440,
        "wires": [
            [
                "4a4bc68ef627c10e"
            ]
        ]
    },
    {
        "id": "4a4bc68ef627c10e",
        "type": "function",
        "z": "b26a2a4ee91c8b9d",
        "name": "1-2-3",
        "func": "//0xA7 0x58\nmsg.payload = Buffer.from(\"A758\", \"hex\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 440,
        "wires": [
            [
                "c5dbfee8148d8729",
                "2084acb82cb61b63"
            ]
        ]
    },
    {
        "id": "2084acb82cb61b63",
        "type": "debug",
        "z": "b26a2a4ee91c8b9d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 530,
        "y": 380,
        "wires": []
    },
    {
        "id": "685bf1d0035dd042",
        "type": "comment",
        "z": "b26a2a4ee91c8b9d",
        "name": "tcp 9778",
        "info": "",
        "x": 120,
        "y": 200,
        "wires": []
    },
    {
        "id": "61199138ab03c26b",
        "type": "inject",
        "z": "3466efb0e3b831a5",
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
        "repeat": "1.5",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 120,
        "y": 167,
        "wires": [
            [
                "ba5882fe5e900594",
                "6c6b1b697b5434ae"
            ]
        ]
    },
    {
        "id": "8eca675b283e65ba",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\nflow.set('currentWeight',currentWeight);\n\nmsg.payload       = currentWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 280,
        "wires": [
            [
                "69e5ae580e8ed33d",
                "da1dc84acc991622",
                "909bf45172c5222e",
                "c18f524abb15324b"
            ]
        ]
    },
    {
        "id": "46e012e827bbeb7b",
        "type": "http in",
        "z": "3466efb0e3b831a5",
        "name": "",
        "url": "/jdVesa/getWeight/status",
        "method": "get",
        "swaggerDoc": "",
        "x": 180,
        "y": 460,
        "wires": [
            [
                "f62f7ddf5cd05604"
            ]
        ]
    },
    {
        "id": "bd76e6dadf81c3d8",
        "type": "http in",
        "z": "3466efb0e3b831a5",
        "name": "",
        "url": "/jdVesa/getWeight2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 540,
        "wires": [
            [
                "e25ffe7b19b5801c"
            ]
        ]
    },
    {
        "id": "e25ffe7b19b5801c",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "FAST WEIGHT",
        "func": "msg.payload = {\n    weight: flow.get('currentWeight'),\n    weight1: flow.get('w1'),\n    weight2: flow.get('w2'),\n    weight3: 0,\n    status:true,\n    stable:true,    \n    perimetr:true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 540,
        "wires": [
            [
                "8b0c8bfc58ccc168"
            ]
        ]
    },
    {
        "id": "8b0c8bfc58ccc168",
        "type": "http response",
        "z": "3466efb0e3b831a5",
        "name": "",
        "x": 600,
        "y": 540,
        "wires": []
    },
    {
        "id": "deddfe399bf586f3",
        "type": "comment",
        "z": "3466efb0e3b831a5",
        "name": "Device level tcp 9779",
        "info": "",
        "x": 125,
        "y": 123,
        "wires": []
    },
    {
        "id": "4a827741f67a1933",
        "type": "comment",
        "z": "3466efb0e3b831a5",
        "name": "INTEGRATION LEVEL (API)",
        "info": "",
        "x": 160,
        "y": 400,
        "wires": []
    },
    {
        "id": "8013441f564844b5",
        "type": "switch",
        "z": "3466efb0e3b831a5",
        "name": "Logging",
        "property": "log",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 941,
        "y": 242,
        "wires": [
            [
                "6b3b6d4452fba46f",
                "b6a374fb566e63c5"
            ]
        ]
    },
    {
        "id": "27684866d372feda",
        "type": "inject",
        "z": "3466efb0e3b831a5",
        "name": "init",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "init",
        "payloadType": "str",
        "x": 70,
        "y": 80,
        "wires": [
            [
                "a44655082a5aee13"
            ]
        ]
    },
    {
        "id": "b4b2200f61c9201f",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "CONFIG",
        "func": "var config;\n\nconfig = {\n    'scale':'avto1',\n    'deltaWeight':250,\n    'sizeOfArrayOfWeights':5,\n    'inaccuracy':60\n}\n \nflow.set('config',config);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 80,
        "wires": [
            [
                "f169bf5a04330b2e"
            ]
        ]
    },
    {
        "id": "36eba8fc1a644b6a",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 724,
        "y": 81,
        "wires": []
    },
    {
        "id": "2e1add2d16283b2a",
        "type": "comment",
        "z": "3466efb0e3b831a5",
        "name": "INITIALIZING",
        "info": "",
        "x": 90,
        "y": 40,
        "wires": []
    },
    {
        "id": "69e5ae580e8ed33d",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "MAKE PAGE",
        "func": "return msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 751,
        "y": 202,
        "wires": [
            []
        ]
    },
    {
        "id": "4b42ac010a5e5739",
        "type": "comment",
        "z": "3466efb0e3b831a5",
        "name": "TRAFFIC LIGHT",
        "info": "!",
        "x": 900,
        "y": 20,
        "wires": []
    },
    {
        "id": "f62f7ddf5cd05604",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "STATUSZERO",
        "func": "var UID = msg.req.query.reader;\nvar lastUID = flow.get('lastUID');\nvar zero    = flow.get('zero');\n\nif (UID!==lastUID && !zero) \n{\n    msg.statusZero = false;    \n} else {\n    msg.statusZero = true;\n   flow.set('zero',false);\n   flow.set('lastUID',UID);\n}\n\nmsg.uid = UID; \n\nmsg.payload = zero;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 460,
        "wires": [
            [
                "8013441f564844b5",
                "6712d07e78233f5b"
            ]
        ]
    },
    {
        "id": "6b3b6d4452fba46f",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "Logging to table",
        "func": "var table = flow.get('table');\nvar currentWeight = flow.get('currentWeight');\nvar obj = {\n    'datetime': new Date(),\n    'uid': msg.uid,\n    'weight': currentWeight\n};\n\ntable.push(obj);\n\nflow.set('table',table);\nflow.set('lastWeight',currentWeight);\n\nmsg.payload = obj;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1100,
        "y": 300,
        "wires": [
            [
                "e7efcbe7fb3a327c"
            ]
        ]
    },
    {
        "id": "da1dc84acc991622",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "LAST WEIGHT",
        "func": "var lastWeight    = flow.get('lastWeight');\nvar currentWeight = flow.get('currentWeight');\nvar deltaWeight   = flow.get('config').deltaWeight;\n\nvar log = 0;\nif ((lastWeight - currentWeight)>deltaWeight || (lastWeight - currentWeight) < -deltaWeight){\n    log = 1;\n} else if( lastWeight!==0 && currentWeight === 0){\n    log = 1;\n} else {\n    log = 0;\n}\n\nif (log){\n    if (currentWeight > lastWeight){\n        flow.set('in',true);\n        flow.set('out',false);\n    }else{\n        flow.set('in',false);\n        flow.set('out',true);\n    } \n}else{\n    flow.set('in',false);\n    flow.set('out',false);\n}\n\nif (currentWeight === 0){\n    flow.set('zero',true);\n} \n\nmsg.log = log;\nmsg.uid = '';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 761,
        "y": 242,
        "wires": [
            [
                "8013441f564844b5"
            ]
        ]
    },
    {
        "id": "6712d07e78233f5b",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "MAKE BODY",
        "func": "msg.payload = {\n    weight:flow.get('currentWeight'),\n    status:msg.statusZero,\n    stable:flow.get('stability'),    \n    perimetr:flow.get('perimetrStatus')\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 460,
        "wires": [
            [
                "5ac32805a46a3906"
            ]
        ]
    },
    {
        "id": "5ac32805a46a3906",
        "type": "http response",
        "z": "3466efb0e3b831a5",
        "name": "",
        "x": 750,
        "y": 460,
        "wires": []
    },
    {
        "id": "e7efcbe7fb3a327c",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 1270,
        "y": 300,
        "wires": []
    },
    {
        "id": "b6a374fb566e63c5",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 1110,
        "y": 260,
        "wires": []
    },
    {
        "id": "909bf45172c5222e",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 728,
        "y": 142,
        "wires": []
    },
    {
        "id": "c18f524abb15324b",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "STABLE",
        "func": "var arrayOfWeights       = flow.get('arrayOfWeights');\nvar sizeOfArrayOfWeights = flow.get('config').sizeOfArrayOfWeights;\nvar inaccuracy           = flow.get('config').inaccuracy;\nvar size = arrayOfWeights.length - 1 - sizeOfArrayOfWeights;\n\narrayOfWeights.push(msg.payload);\n\nif (size > 0){\n    \n    flow.set('stability',true);\n    \n    for (var i = 0; i <= sizeOfArrayOfWeights; i++ ){\n        var ai = (arrayOfWeights.length - 1 - i);\n        var bi = (ai - 1);\n        var a = arrayOfWeights[ai];\n        var b = arrayOfWeights[bi];\n        if ((a-b)>inaccuracy || (a-b)<-inaccuracy){\n            flow.set('stability',false);\n            break;\n        }\n    }\n    \n}else {\n    flow.set('stability',false);\n}\n\nflow.set('arrayOfWeights',arrayOfWeights);\n\nmsg.payload = flow.get('stability');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 741,
        "y": 282,
        "wires": [
            []
        ]
    },
    {
        "id": "a44655082a5aee13",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "INIT",
        "func": "flow.set('currentWeight',0);\nflow.set('perimetrStatus',0);\nflow.set('stability',true);\nflow.set('zero',false);\nflow.set('lastUID','');\nflow.set('lastWeight',0);\nflow.set('arrayOfWeights',[]);\nflow.set('table',[]);\nflow.set('log',0);\nflow.set('in',false);\nflow.set('out',true);\n  \n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 80,
        "wires": [
            [
                "b4b2200f61c9201f"
            ]
        ]
    },
    {
        "id": "f169bf5a04330b2e",
        "type": "function",
        "z": "3466efb0e3b831a5",
        "name": "Модель весов",
        "func": "flow.set('inputString', String.fromCharCode(0x00)); //тут пишем строку, которую шлем в ком порт, при необходимости\nflow.set('parser',function(v){\n        //тут парсим строку, которая приходит с весовго модуля\n\n    var k1_comon = 0;\n    var k2_comon = 0;\n    var k3_comon = 0;\n    var k4_comon = 0;\n    //забираєм елементи\n    var k1_h = v[2];\n    var k1_l = v[1];\n\n    var k2_h = v[4];\n    var k2_l = v[3];\n\n    var k3_h = v[6];\n    var k3_l = v[5];\n\n    var k4_h = v[8];\n    var k4_l = v[7];\n\n    //зміщення\n    k1_h = k1_h << 8;\n    k2_h = k2_h << 8;\n    k3_h = k3_h << 8;\n    k4_h = k4_h << 8;\n    // a | b  \n    k1_comon = k1_h | k1_l;\n    k2_comon = k2_h | k2_l;\n    k3_comon = k3_h | k3_l;\n    k4_comon = k4_h | k4_l;\n\n    v = (k1_comon + k2_comon + k3_comon + k4_comon);\n    var w1 = (k1_comon + k2_comon) * 10;\n    var w2 = (k3_comon + k4_comon) * 10;\n    flow.set('w1', w1);\n    flow.set('w2', w2);\n    return Number(v) * 10;\n    //return Number(v);\n});\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 526.8570861816406,
        "y": 79.71429443359375,
        "wires": [
            [
                "36eba8fc1a644b6a"
            ]
        ]
    },
    {
        "id": "ba5882fe5e900594",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 379,
        "y": 129,
        "wires": []
    },
    {
        "id": "8441fa8411cbc3b1",
        "type": "debug",
        "z": "3466efb0e3b831a5",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 410,
        "y": 240,
        "wires": []
    },
    {
        "id": "6c6b1b697b5434ae",
        "type": "tcp request",
        "z": "3466efb0e3b831a5",
        "name": "",
        "server": "172.16.9.24",
        "port": "9779",
        "out": "time",
        "ret": "buffer",
        "splitc": "200",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 200,
        "y": 280,
        "wires": [
            [
                "8eca675b283e65ba",
                "8441fa8411cbc3b1"
            ]
        ]
    },
    {
        "id": "89c6787fae794b5d",
        "type": "comment",
        "z": "1cfa887c3e9a5aa2",
        "name": "Інфо",
        "info": "Завальна яма 3(нова): Екран - 192, зчитувач: 191,190,189. \nЗавальна яма 2 (стара): екран -196, зчитувач: 195,194,193. \nЗагрузка: екран- 188, зчитувач: 208,209,187",
        "x": 130,
        "y": 40,
        "wires": []
    },
    {
        "id": "b7b096c31cc3a921",
        "type": "tcp in",
        "z": "1baa1890d7bd7b12",
        "name": "",
        "server": "client",
        "host": "172.16.9.195",
        "port": "9780",
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
                "bb5e5e06a5d028be",
                "b029dd3d72587d33"
            ]
        ]
    },
    {
        "id": "11757b78cf147349",
        "type": "debug",
        "z": "1baa1890d7bd7b12",
        "name": "debug 5",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 180,
        "wires": []
    },
    {
        "id": "d45b96e87bdd46a9",
        "type": "comment",
        "z": "1baa1890d7bd7b12",
        "name": "Зчитувач tcp 9780",
        "info": "3C 00 48 B6 8A",
        "x": 130,
        "y": 140,
        "wires": []
    },
    {
        "id": "bb5e5e06a5d028be",
        "type": "function",
        "z": "1baa1890d7bd7b12",
        "name": "function 2",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "e692fb45dd9e2540"
            ]
        ]
    },
    {
        "id": "e692fb45dd9e2540",
        "type": "trigger",
        "z": "1baa1890d7bd7b12",
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
                "d5e3b6fad26b772d"
            ]
        ]
    },
    {
        "id": "f510b8834cdce9ab",
        "type": "inject",
        "z": "1baa1890d7bd7b12",
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
                "5b0afd4996d97227"
            ]
        ]
    },
    {
        "id": "5b0afd4996d97227",
        "type": "function",
        "z": "1baa1890d7bd7b12",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "d5e3b6fad26b772d",
        "type": "function",
        "z": "1baa1890d7bd7b12",
        "name": "function 3",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 180,
        "wires": [
            [
                "11757b78cf147349",
                "3e8cb2cde616a471"
            ]
        ]
    },
    {
        "id": "b029dd3d72587d33",
        "type": "debug",
        "z": "1baa1890d7bd7b12",
        "name": "debug 15",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 140,
        "wires": []
    },
    {
        "id": "3e8cb2cde616a471",
        "type": "function",
        "z": "1baa1890d7bd7b12",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 19,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 280,
        "wires": [
            [
                "d7ad4a422aac7265",
                "17d19e2bca7a6eb1"
            ]
        ]
    },
    {
        "id": "d7ad4a422aac7265",
        "type": "http request",
        "z": "1baa1890d7bd7b12",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.27/bc/hs/elevator",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 730,
        "y": 280,
        "wires": [
            [
                "2432bbc03cb63304"
            ]
        ]
    },
    {
        "id": "2432bbc03cb63304",
        "type": "debug",
        "z": "1baa1890d7bd7b12",
        "name": "debug 18",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 280,
        "wires": []
    },
    {
        "id": "0286710c91c084e3",
        "type": "inject",
        "z": "1baa1890d7bd7b12",
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
        "x": 260,
        "y": 280,
        "wires": [
            [
                "3e8cb2cde616a471"
            ]
        ]
    },
    {
        "id": "eab4a4d50fac49f5",
        "type": "comment",
        "z": "1baa1890d7bd7b12",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 710,
        "y": 240,
        "wires": []
    },
    {
        "id": "17d19e2bca7a6eb1",
        "type": "debug",
        "z": "1baa1890d7bd7b12",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 320,
        "wires": []
    },
    {
        "id": "e1b33f123cf9385a",
        "type": "inject",
        "z": "1baa1890d7bd7b12",
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
        "x": 250,
        "y": 320,
        "wires": [
            [
                "3e8cb2cde616a471"
            ]
        ]
    },
    {
        "id": "793f74a98c676a0d",
        "type": "inject",
        "z": "1baa1890d7bd7b12",
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
        "x": 260,
        "y": 360,
        "wires": [
            [
                "3e8cb2cde616a471"
            ]
        ]
    },
    {
        "id": "f8cbc84e40cc9a83",
        "type": "inject",
        "z": "1baa1890d7bd7b12",
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
        "x": 260,
        "y": 400,
        "wires": [
            [
                "3e8cb2cde616a471"
            ]
        ]
    },
    {
        "id": "01a4cd9904f1764e",
        "type": "comment",
        "z": "1baa1890d7bd7b12",
        "name": "",
        "info": "0300866665\n\n9600 [ 0 ] [ 134, 102 ] [ 101 ]\n19200 [ 0 ] [ 120, 120 ] [ 102, 120 ]\n115200 [ 0 ] [ 0, 0, 0, 0 ] [ 0, 0, 0, 0, 0 ]\n38400 [ 0 ] [ 128, 0, 128 ] [ 128, 120, 120, 248 ]",
        "x": 90,
        "y": 280,
        "wires": []
    },
    {
        "id": "44e53532c4232280",
        "type": "http request",
        "z": "7a96b55d27e51205",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.194/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 100,
        "wires": [
            [
                "e7c4b593666c9f2c",
                "054acc118cc4d68e"
            ]
        ]
    },
    {
        "id": "e7c4b593666c9f2c",
        "type": "xml",
        "z": "7a96b55d27e51205",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 100,
        "wires": [
            [
                "6b59eca28c9ffe86",
                "8b6a5590ac328a7e"
            ]
        ]
    },
    {
        "id": "989382397d9de38f",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 60,
        "wires": []
    },
    {
        "id": "b1934eefe25300b0",
        "type": "inject",
        "z": "7a96b55d27e51205",
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
        "y": 140,
        "wires": [
            [
                "44e53532c4232280"
            ]
        ]
    },
    {
        "id": "4198bb719f3d9ea7",
        "type": "http in",
        "z": "7a96b55d27e51205",
        "name": "",
        "url": "/status/gate/y2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "44e53532c4232280",
                "19509b0d4fca101d"
            ]
        ]
    },
    {
        "id": "fb5202d2f89bedae",
        "type": "debug",
        "z": "7a96b55d27e51205",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 140,
        "wires": []
    },
    {
        "id": "6b59eca28c9ffe86",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 20,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 100,
        "wires": [
            [
                "fb5202d2f89bedae",
                "c4e5927d79187144"
            ]
        ]
    },
    {
        "id": "c4e5927d79187144",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 100,
        "wires": []
    },
    {
        "id": "6b80cbdcaf2b3636",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 170,
        "y": 400,
        "wires": []
    },
    {
        "id": "c96d9c5610b8bcf8",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "url",
        "func": "msg.url = 'http://admin:vkmodule@172.16.9.194/protect/leds.cgi?led=1&timeout=30'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 440,
        "wires": [
            [
                "e8d70a37b363d5d8"
            ]
        ]
    },
    {
        "id": "d264613afd02796f",
        "type": "http in",
        "z": "7a96b55d27e51205",
        "name": "",
        "url": "/gate/barrier/y2",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 440,
        "wires": [
            [
                "78a6a9735ee298c3",
                "c96d9c5610b8bcf8"
            ]
        ]
    },
    {
        "id": "d17bf1f8c89a0003",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 400,
        "wires": []
    },
    {
        "id": "e8d70a37b363d5d8",
        "type": "http request",
        "z": "7a96b55d27e51205",
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
        "y": 440,
        "wires": [
            [
                "9526e082b4e9502e",
                "57060d6eab29c45d"
            ]
        ]
    },
    {
        "id": "2210b3b7a64a50bc",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 440,
        "wires": []
    },
    {
        "id": "8b6a5590ac328a7e",
        "type": "debug",
        "z": "7a96b55d27e51205",
        "name": "debug 27",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 60,
        "wires": []
    },
    {
        "id": "9526e082b4e9502e",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 20,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 440,
        "wires": [
            [
                "2210b3b7a64a50bc"
            ]
        ]
    },
    {
        "id": "78a6a9735ee298c3",
        "type": "trigger",
        "z": "7a96b55d27e51205",
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
        "y": 540,
        "wires": [
            [
                "0fb41409de39f81f"
            ]
        ]
    },
    {
        "id": "57060d6eab29c45d",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 480,
        "wires": [
            [
                "78a6a9735ee298c3"
            ]
        ]
    },
    {
        "id": "ed0febfa123e549a",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 540,
        "wires": []
    },
    {
        "id": "0fb41409de39f81f",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 20,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 540,
        "wires": [
            [
                "ed0febfa123e549a"
            ]
        ]
    },
    {
        "id": "19509b0d4fca101d",
        "type": "trigger",
        "z": "7a96b55d27e51205",
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
        "y": 180,
        "wires": [
            [
                "fbd7b436540520cd"
            ]
        ]
    },
    {
        "id": "054acc118cc4d68e",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 140,
        "wires": [
            [
                "19509b0d4fca101d"
            ]
        ]
    },
    {
        "id": "6cd23c34ee2b79b9",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 770,
        "y": 180,
        "wires": []
    },
    {
        "id": "fbd7b436540520cd",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 20,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 180,
        "wires": [
            [
                "6cd23c34ee2b79b9"
            ]
        ]
    },
    {
        "id": "286bdf97c8505b7d",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 400,
        "wires": [
            [
                "d17bf1f8c89a0003"
            ]
        ]
    },
    {
        "id": "1ec401928b87c6d9",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 640,
        "wires": []
    },
    {
        "id": "3b979d4f435485aa",
        "type": "http in",
        "z": "7a96b55d27e51205",
        "name": "",
        "url": "/gate/barrier/status/y2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 680,
        "wires": [
            [
                "ae71e55ed29462c3"
            ]
        ]
    },
    {
        "id": "0255c552417a90cb",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 680,
        "wires": []
    },
    {
        "id": "fd250c63565d46b0",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 640,
        "wires": []
    },
    {
        "id": "55fc3bb03e7583b3",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 640,
        "wires": [
            [
                "fd250c63565d46b0"
            ]
        ]
    },
    {
        "id": "d81ee43406d6e59a",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 680,
        "wires": []
    },
    {
        "id": "e0d9503c52cbfcf1",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 680,
        "wires": [
            [
                "d81ee43406d6e59a"
            ]
        ]
    },
    {
        "id": "ae71e55ed29462c3",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 20,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 680,
        "wires": [
            [
                "0255c552417a90cb"
            ]
        ]
    },
    {
        "id": "5284c5e695e33380",
        "type": "inject",
        "z": "7a96b55d27e51205",
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
        "y": 480,
        "wires": [
            [
                "c96d9c5610b8bcf8"
            ]
        ]
    },
    {
        "id": "c24aff7a76af3016",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Socket 2 tcp 9781",
        "info": "",
        "x": 130,
        "y": 780,
        "wires": []
    },
    {
        "id": "c6c10d4c0b0f25e3",
        "type": "tcp in",
        "z": "7a96b55d27e51205",
        "name": "172.16.9.194",
        "server": "server",
        "host": "172.16.9.247",
        "port": "9781",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 150,
        "y": 840,
        "wires": [
            [
                "b4333b6eab4ab36b",
                "2c80182174adb7fe",
                "e6de47c793af34c7"
            ]
        ]
    },
    {
        "id": "818c5ca34b47a1cb",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Подыъ з оптопар",
        "info": "",
        "x": 370,
        "y": 780,
        "wires": []
    },
    {
        "id": "b4333b6eab4ab36b",
        "type": "debug",
        "z": "7a96b55d27e51205",
        "name": "debug 24",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 480,
        "y": 800,
        "wires": []
    },
    {
        "id": "2c80182174adb7fe",
        "type": "tcp out",
        "z": "7a96b55d27e51205",
        "name": "",
        "host": "",
        "port": "",
        "beserver": "reply",
        "base64": false,
        "end": false,
        "tls": "",
        "x": 250,
        "y": 900,
        "wires": []
    },
    {
        "id": "e6de47c793af34c7",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "в 1С выдправка",
        "func": "var inDate = msg.payload\n\nif (inDate.length == 3) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[0] == 33 && inDate[1] === 0) {\n        closed = (inDate[2] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"OpticalLoop\",\n            \"control_point_num\": 24,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n\n\nif (inDate.length == 4) {\n    var closed = false\n    // ID события - 0x21(3310)\n    // Назначение: Смена состояния цифрового входа.\n    //     Данные: 0 Байт Номер входа(0...1)\n    // 1 Байт 0–Замкнут; 1–Разомкнут;\n    if (inDate[1] == 33 && inDate[2] === 0) {\n        closed = (inDate[3] == 1) ? true : false\n        msg.payload = {\n            \"procname\": \"OpticalLoop\",\n            \"control_point_num\": 24,\n            \"clockseconds\": Date.now(),\n            \"closed\": closed\n        }\n        msg.url = global.get(\"url1C\")\n        return msg;\n    }\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 840,
        "wires": [
            [
                "f6dd9745f714f668"
            ]
        ]
    },
    {
        "id": "0e4313c792e06024",
        "type": "http request",
        "z": "7a96b55d27e51205",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://172.16.9.27/bc/hs/agb",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 910,
        "y": 840,
        "wires": [
            [
                "b0e21015a5825e41"
            ]
        ]
    },
    {
        "id": "f6dd9745f714f668",
        "type": "delay",
        "z": "7a96b55d27e51205",
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
        "x": 720,
        "y": 840,
        "wires": [
            [
                "0e4313c792e06024"
            ]
        ]
    },
    {
        "id": "b0e21015a5825e41",
        "type": "debug",
        "z": "7a96b55d27e51205",
        "name": "debug 26",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 900,
        "y": 880,
        "wires": []
    },
    {
        "id": "10e632ddcff2be6b",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 850,
        "y": 780,
        "wires": []
    },
    {
        "id": "87b6cd49304142f8",
        "type": "http request",
        "z": "7a96b55d27e51205",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.194/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 370,
        "y": 300,
        "wires": [
            [
                "37beeb799f4287c9"
            ]
        ]
    },
    {
        "id": "37beeb799f4287c9",
        "type": "xml",
        "z": "7a96b55d27e51205",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 530,
        "y": 300,
        "wires": [
            [
                "5c804f9681941031"
            ]
        ]
    },
    {
        "id": "341dae4584320ea8",
        "type": "comment",
        "z": "7a96b55d27e51205",
        "name": "Socket 2 status периметра",
        "info": "",
        "x": 210,
        "y": 260,
        "wires": []
    },
    {
        "id": "d5bd27f01789bffd",
        "type": "http in",
        "z": "7a96b55d27e51205",
        "name": "",
        "url": "/status/perimetr/y2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 300,
        "wires": [
            [
                "87b6cd49304142f8"
            ]
        ]
    },
    {
        "id": "5c804f9681941031",
        "type": "function",
        "z": "7a96b55d27e51205",
        "name": "function 19",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}else{\n    closed = true\n}\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 24,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 300,
        "wires": [
            [
                "79d4d16d35bf4e06",
                "8a8c6ff748a2fefb"
            ]
        ]
    },
    {
        "id": "79d4d16d35bf4e06",
        "type": "http response",
        "z": "7a96b55d27e51205",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 830,
        "y": 300,
        "wires": []
    },
    {
        "id": "8c2ca97140e1480a",
        "type": "inject",
        "z": "7a96b55d27e51205",
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
        "y": 340,
        "wires": [
            [
                "87b6cd49304142f8"
            ]
        ]
    },
    {
        "id": "8a8c6ff748a2fefb",
        "type": "debug",
        "z": "7a96b55d27e51205",
        "name": "debug 93",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 260,
        "wires": []
    },
    {
        "id": "95a1548d5d67a878",
        "type": "http request",
        "z": "ae16c5990a2246bd",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 100,
        "wires": [
            [
                "8dc36f477d6f90c5"
            ]
        ]
    },
    {
        "id": "8dc36f477d6f90c5",
        "type": "xml",
        "z": "ae16c5990a2246bd",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 100,
        "wires": [
            [
                "301e8bd0bb5d2a3b",
                "8d4e71a0724c5be6"
            ]
        ]
    },
    {
        "id": "d383fe444eb6595f",
        "type": "comment",
        "z": "ae16c5990a2246bd",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 60,
        "wires": []
    },
    {
        "id": "35a1047af01dcf0c",
        "type": "inject",
        "z": "ae16c5990a2246bd",
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
        "y": 180,
        "wires": [
            [
                "95a1548d5d67a878"
            ]
        ]
    },
    {
        "id": "0e816c256dbd4818",
        "type": "http in",
        "z": "ae16c5990a2246bd",
        "name": "",
        "url": "/status/traffic/lights/y2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "95a1548d5d67a878"
            ]
        ]
    },
    {
        "id": "eaf94874ec9b7f08",
        "type": "debug",
        "z": "ae16c5990a2246bd",
        "name": "debug 45",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 140,
        "wires": []
    },
    {
        "id": "6303a22bb6392b6c",
        "type": "http response",
        "z": "ae16c5990a2246bd",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 100,
        "wires": []
    },
    {
        "id": "301e8bd0bb5d2a3b",
        "type": "debug",
        "z": "ae16c5990a2246bd",
        "name": "debug 46",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 60,
        "wires": []
    },
    {
        "id": "8d4e71a0724c5be6",
        "type": "function",
        "z": "ae16c5990a2246bd",
        "name": "function 21",
        "func": "let traffic_lights_1 = msg.payload.response.led0[0]\nlet traffic_lights_2 = msg.payload.response.led1[0]\n\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_1\": (traffic_lights_1 === \"0\") ? false : true,\n    \"traffic_lights_2\": (traffic_lights_2 === \"0\") ? false : true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 100,
        "wires": [
            [
                "6303a22bb6392b6c",
                "eaf94874ec9b7f08"
            ]
        ]
    },
    {
        "id": "a7a3d21e43ff4ee5",
        "type": "http request",
        "z": "ae16c5990a2246bd",
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
        "y": 340,
        "wires": [
            [
                "9cda47db11aada71",
                "03f151ed95f117e9"
            ]
        ]
    },
    {
        "id": "c87ceee847ec277b",
        "type": "comment",
        "z": "ae16c5990a2246bd",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 300,
        "wires": []
    },
    {
        "id": "87af8555087be0df",
        "type": "http in",
        "z": "ae16c5990a2246bd",
        "name": "",
        "url": "/traffic/on/off/y2",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 340,
        "wires": [
            [
                "50c28e9ea1b45133"
            ]
        ]
    },
    {
        "id": "208f38e2937adbac",
        "type": "debug",
        "z": "ae16c5990a2246bd",
        "name": "debug 47",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 380,
        "wires": []
    },
    {
        "id": "60c736dd7f01896c",
        "type": "http response",
        "z": "ae16c5990a2246bd",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 970,
        "y": 340,
        "wires": []
    },
    {
        "id": "9cda47db11aada71",
        "type": "debug",
        "z": "ae16c5990a2246bd",
        "name": "debug 48",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 300,
        "wires": []
    },
    {
        "id": "03f151ed95f117e9",
        "type": "function",
        "z": "ae16c5990a2246bd",
        "name": "function 22",
        "func": "msg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 15,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_2\": true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 340,
        "wires": [
            [
                "60c736dd7f01896c",
                "208f38e2937adbac"
            ]
        ]
    },
    {
        "id": "50c28e9ea1b45133",
        "type": "function",
        "z": "ae16c5990a2246bd",
        "name": "function 23",
        "func": "msg.url = \"http://admin:vkmodule@172.16.9.241/protect/leds.cgi?led=1&timeout=30\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 340,
        "wires": [
            [
                "a7a3d21e43ff4ee5"
            ]
        ]
    },
    {
        "id": "999f97b34a2f9155",
        "type": "inject",
        "z": "ae16c5990a2246bd",
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
        "y": 400,
        "wires": [
            [
                "50c28e9ea1b45133"
            ]
        ]
    },
    {
        "id": "0eb254079683a4a3",
        "type": "comment",
        "z": "74565def2561d592",
        "name": "Інфо",
        "info": "Завальна яма 3(нова): Екран - 192, зчитувач: 191,190,189. \nЗавальна яма 2 (стара): екран -196, зчитувач: 195,194,193. \nЗагрузка: екран- 188, зчитувач: 208,209,187",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "1f269e3b0a7e4fc8",
        "type": "debug",
        "z": "edcf18b7134e0820",
        "name": "debug 5",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 940,
        "y": 180,
        "wires": []
    },
    {
        "id": "b51e93af657ccc53",
        "type": "comment",
        "z": "edcf18b7134e0820",
        "name": "Зчитувач tcp 9782",
        "info": "3C 00 48 B6 8A",
        "x": 130,
        "y": 140,
        "wires": []
    },
    {
        "id": "270ad0612341acdf",
        "type": "function",
        "z": "edcf18b7134e0820",
        "name": "function 2",
        "func": "var tmp = flow.get(\"card\")\n\nfor(let el of msg.payload){\n    tmp.push(el)\n}\nflow.set(\"card\", tmp)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "6e93c913dc8da833"
            ]
        ]
    },
    {
        "id": "6e93c913dc8da833",
        "type": "trigger",
        "z": "edcf18b7134e0820",
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
                "6f2b41dadd143952"
            ]
        ]
    },
    {
        "id": "b79e56885d7fbacc",
        "type": "inject",
        "z": "edcf18b7134e0820",
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
                "e287ad750f958d8b"
            ]
        ]
    },
    {
        "id": "e287ad750f958d8b",
        "type": "function",
        "z": "edcf18b7134e0820",
        "name": "init",
        "func": "flow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "6f2b41dadd143952",
        "type": "function",
        "z": "edcf18b7134e0820",
        "name": "function 3",
        "func": "var tmp = flow.get(\"card\")\nvar newTmp = []\nfor (let el of tmp) {\n    let elCard = el.toString(\"16\")\n    if (elCard === \"0\") {\n        newTmp.push(\"00\")\n    } else {\n        newTmp.push(el.toString(\"16\"))\n    }\n\n}\nmsg.payload = newTmp.join(\"\")\nconst decimalValue = parseInt(msg.payload, 16);\nmsg.payload = decimalValue\nflow.set(\"card\", [])\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 180,
        "wires": [
            [
                "1f269e3b0a7e4fc8",
                "b622a4fa39474d56"
            ]
        ]
    },
    {
        "id": "58cec7213029311b",
        "type": "debug",
        "z": "edcf18b7134e0820",
        "name": "debug 15",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 140,
        "wires": []
    },
    {
        "id": "b622a4fa39474d56",
        "type": "function",
        "z": "edcf18b7134e0820",
        "name": "в 1С выдправка",
        "func": "msg.payload = {\n    \"procname\": \"EventCard\",\n    \"cardnumber\": Number(msg.payload).toString(16).toUpperCase().padStart(8, '0'),//msg.payload,\n    \"control_point_num\": 17,\n    \"clockseconds\": Date.now()\n}\nmsg.url = global.get(\"url1C\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 280,
        "wires": [
            [
                "fca17eeed1d1f155",
                "e87123efb8bce388"
            ]
        ]
    },
    {
        "id": "fca17eeed1d1f155",
        "type": "http request",
        "z": "edcf18b7134e0820",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "172.16.9.27/bc/hs/elevator",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 730,
        "y": 280,
        "wires": [
            [
                "118d581f69405fc9"
            ]
        ]
    },
    {
        "id": "118d581f69405fc9",
        "type": "debug",
        "z": "edcf18b7134e0820",
        "name": "debug 18",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 880,
        "y": 280,
        "wires": []
    },
    {
        "id": "8a75bb55e8a41b83",
        "type": "inject",
        "z": "edcf18b7134e0820",
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
        "x": 260,
        "y": 280,
        "wires": [
            [
                "b622a4fa39474d56"
            ]
        ]
    },
    {
        "id": "5f9dbcf42f51a67d",
        "type": "comment",
        "z": "edcf18b7134e0820",
        "name": "ынфо",
        "info": "http://172.16.9.7/bc/hs/agb\n\nbasic auth\n\nusername: AGB\n\n\npassword: 12345",
        "x": 710,
        "y": 240,
        "wires": []
    },
    {
        "id": "e87123efb8bce388",
        "type": "debug",
        "z": "edcf18b7134e0820",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 320,
        "wires": []
    },
    {
        "id": "d773f6b691d6232a",
        "type": "inject",
        "z": "edcf18b7134e0820",
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
        "x": 250,
        "y": 320,
        "wires": [
            [
                "b622a4fa39474d56"
            ]
        ]
    },
    {
        "id": "e58140483247a28d",
        "type": "inject",
        "z": "edcf18b7134e0820",
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
        "x": 260,
        "y": 360,
        "wires": [
            [
                "b622a4fa39474d56"
            ]
        ]
    },
    {
        "id": "3078dbe643f20c86",
        "type": "inject",
        "z": "edcf18b7134e0820",
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
        "x": 260,
        "y": 400,
        "wires": [
            [
                "b622a4fa39474d56"
            ]
        ]
    },
    {
        "id": "bfc8e3abb15f1dc7",
        "type": "comment",
        "z": "edcf18b7134e0820",
        "name": "",
        "info": "0300866665\n\n9600 [ 0 ] [ 134, 102 ] [ 101 ]\n19200 [ 0 ] [ 120, 120 ] [ 102, 120 ]\n115200 [ 0 ] [ 0, 0, 0, 0 ] [ 0, 0, 0, 0, 0 ]\n38400 [ 0 ] [ 128, 0, 128 ] [ 128, 120, 120, 248 ]",
        "x": 190,
        "y": 580,
        "wires": []
    },
    {
        "id": "ba3e6a251c1cc416",
        "type": "tcp in",
        "z": "edcf18b7134e0820",
        "name": "",
        "server": "client",
        "host": "172.16.9.187",
        "port": "9782",
        "datamode": "stream",
        "datatype": "buffer",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 140,
        "y": 220,
        "wires": [
            [
                "270ad0612341acdf",
                "59b0a7febb270d4c"
            ]
        ]
    },
    {
        "id": "59b0a7febb270d4c",
        "type": "debug",
        "z": "edcf18b7134e0820",
        "name": "debug 93",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 220,
        "wires": []
    },
    {
        "id": "30a37573a03450d6",
        "type": "http request",
        "z": "d9e05908ebb0562a",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.209/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 100,
        "wires": [
            [
                "d032a1b484a39bc5",
                "857f6e8bb0296311"
            ]
        ]
    },
    {
        "id": "d032a1b484a39bc5",
        "type": "xml",
        "z": "d9e05908ebb0562a",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 490,
        "y": 100,
        "wires": [
            [
                "1aa11f70c4d256f5",
                "367089366da42fcf"
            ]
        ]
    },
    {
        "id": "12032bf64c608edf",
        "type": "comment",
        "z": "d9e05908ebb0562a",
        "name": "Socket 2 status",
        "info": "",
        "x": 140,
        "y": 60,
        "wires": []
    },
    {
        "id": "0dde333ecf5af0fa",
        "type": "inject",
        "z": "d9e05908ebb0562a",
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
        "y": 140,
        "wires": [
            [
                "30a37573a03450d6"
            ]
        ]
    },
    {
        "id": "90eee47762b11447",
        "type": "http in",
        "z": "d9e05908ebb0562a",
        "name": "",
        "url": "/status/gate/z3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "30a37573a03450d6",
                "b43a760a24dcaec2"
            ]
        ]
    },
    {
        "id": "4bef3b9821150549",
        "type": "debug",
        "z": "d9e05908ebb0562a",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 780,
        "y": 140,
        "wires": []
    },
    {
        "id": "1aa11f70c4d256f5",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "let closed = msg.payload.response.btn0[0]\nif ('dn' === closed){\n    closed = false\n}\nmsg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 18,\n    \"clockseconds\": Date.now(),\n    \"closed\": closed // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 100,
        "wires": [
            [
                "4bef3b9821150549",
                "ae5d31206bc52821"
            ]
        ]
    },
    {
        "id": "ae5d31206bc52821",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 790,
        "y": 100,
        "wires": []
    },
    {
        "id": "13fb1fe2d5afcafe",
        "type": "comment",
        "z": "d9e05908ebb0562a",
        "name": "Socket 2 шлагбаум open/close",
        "info": "",
        "x": 190,
        "y": 320,
        "wires": []
    },
    {
        "id": "26b1f4bbf806c0c6",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "url",
        "func": "msg.url = 'http://admin:vkmodule@172.16.9.209/protect/leds.cgi?led=1&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 380,
        "wires": [
            [
                "9577051271364829"
            ]
        ]
    },
    {
        "id": "f23928965e356c6b",
        "type": "http in",
        "z": "d9e05908ebb0562a",
        "name": "",
        "url": "/gate/barrier/z3",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 380,
        "wires": [
            [
                "d8df36a3e659f4fa",
                "26b1f4bbf806c0c6"
            ]
        ]
    },
    {
        "id": "c8086fa68c87a441",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 340,
        "wires": []
    },
    {
        "id": "9577051271364829",
        "type": "http request",
        "z": "d9e05908ebb0562a",
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
        "y": 380,
        "wires": [
            [
                "12bea7efeaec5230",
                "ea3ab8d96f695a7e"
            ]
        ]
    },
    {
        "id": "eab763f9ec981cca",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 380,
        "wires": []
    },
    {
        "id": "367089366da42fcf",
        "type": "debug",
        "z": "d9e05908ebb0562a",
        "name": "debug 27",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 60,
        "wires": []
    },
    {
        "id": "12bea7efeaec5230",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 18,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 380,
        "wires": [
            [
                "eab763f9ec981cca"
            ]
        ]
    },
    {
        "id": "d8df36a3e659f4fa",
        "type": "trigger",
        "z": "d9e05908ebb0562a",
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
        "y": 480,
        "wires": [
            [
                "6c9623964b2e3067"
            ]
        ]
    },
    {
        "id": "ea3ab8d96f695a7e",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 420,
        "wires": [
            [
                "d8df36a3e659f4fa"
            ]
        ]
    },
    {
        "id": "654efb1eece4d4ca",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 480,
        "wires": []
    },
    {
        "id": "6c9623964b2e3067",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 18,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 480,
        "wires": [
            [
                "654efb1eece4d4ca"
            ]
        ]
    },
    {
        "id": "b43a760a24dcaec2",
        "type": "trigger",
        "z": "d9e05908ebb0562a",
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
        "y": 180,
        "wires": [
            [
                "1a985bd807265aeb"
            ]
        ]
    },
    {
        "id": "857f6e8bb0296311",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "reset",
        "func": "if (msg.statusCode == 200){\n    msg.reset = true\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 140,
        "wires": [
            [
                "b43a760a24dcaec2"
            ]
        ]
    },
    {
        "id": "2b23e74eacd68fa7",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 770,
        "y": 180,
        "wires": []
    },
    {
        "id": "1a985bd807265aeb",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"MagneticLoop\",\n    \"control_point_num\": 18,\n    \"clockseconds\": Date.now(),\n    \"closed\": true // true = э машина; false -немаэ машини\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 180,
        "wires": [
            [
                "2b23e74eacd68fa7"
            ]
        ]
    },
    {
        "id": "8aaa4b46a5e69970",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now()\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 340,
        "wires": [
            [
                "c8086fa68c87a441"
            ]
        ]
    },
    {
        "id": "31f1d982a7369047",
        "type": "comment",
        "z": "d9e05908ebb0562a",
        "name": "Socket 2 шлагбаум status open/close",
        "info": "",
        "x": 210,
        "y": 640,
        "wires": []
    },
    {
        "id": "f0c8837c8e396d2a",
        "type": "http in",
        "z": "d9e05908ebb0562a",
        "name": "",
        "url": "/gate/barrier/status/z3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 680,
        "wires": [
            [
                "2217490e40773f92"
            ]
        ]
    },
    {
        "id": "31b6f5952a7c7363",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 550,
        "y": 680,
        "wires": []
    },
    {
        "id": "4dc4e09afc65fb97",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 640,
        "wires": []
    },
    {
        "id": "c702a386189d7af4",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 640,
        "wires": [
            [
                "4dc4e09afc65fb97"
            ]
        ]
    },
    {
        "id": "eb8578619f4e466d",
        "type": "http response",
        "z": "d9e05908ebb0562a",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 680,
        "wires": []
    },
    {
        "id": "e001d33de39ebb23",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 1,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 680,
        "wires": [
            [
                "eb8578619f4e466d"
            ]
        ]
    },
    {
        "id": "2217490e40773f92",
        "type": "function",
        "z": "d9e05908ebb0562a",
        "name": "event test",
        "func": "msg.payload = {\n    \"procname\": \"Barrier\",\n    \"control_point_num\": 18,\n    \"clockseconds\": Date.now(),\n    \"open\": false\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 680,
        "wires": [
            [
                "31b6f5952a7c7363"
            ]
        ]
    },
    {
        "id": "c3ac85f2f7b5846c",
        "type": "inject",
        "z": "d9e05908ebb0562a",
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
                "26b1f4bbf806c0c6"
            ]
        ]
    },
    {
        "id": "3a2bafc44889a539",
        "type": "http request",
        "z": "1e6db574b7566234",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://admin:vkmodule@172.16.9.241/protect/status.xml",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 350,
        "y": 100,
        "wires": [
            [
                "e7bf5b1af2775e29"
            ]
        ]
    },
    {
        "id": "e7bf5b1af2775e29",
        "type": "xml",
        "z": "1e6db574b7566234",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 510,
        "y": 100,
        "wires": [
            [
                "b71de6677ebabb85",
                "2b0e24ca29c98118"
            ]
        ]
    },
    {
        "id": "eb9bc0ff513aad47",
        "type": "comment",
        "z": "1e6db574b7566234",
        "name": "Socket 2 status світлофорів",
        "info": "",
        "x": 200,
        "y": 60,
        "wires": []
    },
    {
        "id": "0130028538977a69",
        "type": "inject",
        "z": "1e6db574b7566234",
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
        "y": 180,
        "wires": [
            [
                "3a2bafc44889a539"
            ]
        ]
    },
    {
        "id": "12da0ef584525c8d",
        "type": "http in",
        "z": "1e6db574b7566234",
        "name": "",
        "url": "/status/traffic/lights/z3",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 100,
        "wires": [
            [
                "3a2bafc44889a539"
            ]
        ]
    },
    {
        "id": "6cdc108e41c562ec",
        "type": "debug",
        "z": "1e6db574b7566234",
        "name": "debug 45",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 140,
        "wires": []
    },
    {
        "id": "3761519b160541e5",
        "type": "http response",
        "z": "1e6db574b7566234",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 810,
        "y": 100,
        "wires": []
    },
    {
        "id": "b71de6677ebabb85",
        "type": "debug",
        "z": "1e6db574b7566234",
        "name": "debug 46",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 640,
        "y": 60,
        "wires": []
    },
    {
        "id": "2b0e24ca29c98118",
        "type": "function",
        "z": "1e6db574b7566234",
        "name": "function 21",
        "func": "let traffic_lights_1 = msg.payload.response.led0[0]\nlet traffic_lights_2 = msg.payload.response.led1[0]\n\nmsg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 23,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_1\": (traffic_lights_1 === \"0\") ? false : true,\n    \"traffic_lights_2\": (traffic_lights_2 === \"0\") ? false : true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 100,
        "wires": [
            [
                "3761519b160541e5",
                "6cdc108e41c562ec"
            ]
        ]
    },
    {
        "id": "879859df05419470",
        "type": "http request",
        "z": "1e6db574b7566234",
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
        "y": 340,
        "wires": [
            [
                "620b1686e4bc531b",
                "fd7343113116869e"
            ]
        ]
    },
    {
        "id": "548cc6dcc60bcd78",
        "type": "comment",
        "z": "1e6db574b7566234",
        "name": "Socket 2 status перемикання світлофора на зелене",
        "info": "",
        "x": 260,
        "y": 300,
        "wires": []
    },
    {
        "id": "95a7080649ce38ce",
        "type": "http in",
        "z": "1e6db574b7566234",
        "name": "",
        "url": "/traffic/on/off/z3",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 340,
        "wires": [
            [
                "82bef6541a11355c"
            ]
        ]
    },
    {
        "id": "beb9fb3762e376fc",
        "type": "debug",
        "z": "1e6db574b7566234",
        "name": "debug 47",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 380,
        "wires": []
    },
    {
        "id": "8da9a409fc45bd04",
        "type": "http response",
        "z": "1e6db574b7566234",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 970,
        "y": 340,
        "wires": []
    },
    {
        "id": "620b1686e4bc531b",
        "type": "debug",
        "z": "1e6db574b7566234",
        "name": "debug 48",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 300,
        "wires": []
    },
    {
        "id": "fd7343113116869e",
        "type": "function",
        "z": "1e6db574b7566234",
        "name": "function 22",
        "func": "msg.payload = {\n    \"procname\": \"OpticalLoop\",\n    \"control_point_num\": 23,\n    \"clockseconds\": Date.now(),\n    \"traffic_lights_2\": true\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 340,
        "wires": [
            [
                "8da9a409fc45bd04",
                "beb9fb3762e376fc"
            ]
        ]
    },
    {
        "id": "82bef6541a11355c",
        "type": "function",
        "z": "1e6db574b7566234",
        "name": "function 23",
        "func": "msg.url = \"http://admin:vkmodule@172.16.9.209/protect/leds.cgi?led=1&timeout=30\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 340,
        "wires": [
            [
                "879859df05419470"
            ]
        ]
    },
    {
        "id": "82f9b896446c0a25",
        "type": "inject",
        "z": "1e6db574b7566234",
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
        "y": 400,
        "wires": [
            [
                "82bef6541a11355c"
            ]
        ]
    }
]
