[
    {
        "id": "ae927d6b4aa867d7",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b11e996f.8b0ec8",
        "type": "modbus-client",
        "name": "10.2.0.33",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": false,
        "tcpHost": "10.2.0.33",
        "tcpPort": "9763",
        "tcpType": "TELNET",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "",
        "unit_id": 1,
        "commandDelay": 1,
        "clientTimeout": 1000,
        "reconnectOnTimeout": false,
        "reconnectTimeout": 2000,
        "parallelUnitIdsAllowed": false,
        "showErrors": false,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "8b68bee3.7aa0c",
        "type": "modbus-read",
        "z": "ae927d6b4aa867d7",
        "d": true,
        "name": "",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "",
        "dataType": "HoldingRegister",
        "adr": "625",
        "quantity": "6",
        "rate": "10",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "b11e996f.8b0ec8",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 150,
        "y": 220,
        "wires": [
            [
                "d41051b1.641cd",
                "8a64bd10.3f8dc8"
            ],
            []
        ]
    },
    {
        "id": "86e8fc4a.5178b8",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 590,
        "y": 180,
        "wires": []
    },
    {
        "id": "8a64bd10.3f8dc8",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "Counter 1",
        "func": "const reg_1 = [msg.payload[0],msg.payload[1]]\nconst reg_2 = [msg.payload[2],msg.payload[3]]\nconst reg_3 = [msg.payload[4],msg.payload[5]]\n\n// const value = (reg[0] << 16 | reg[1])\n// msg.payload = value\n\n\nconst value_1 = (reg_1[1] << 16 | reg_1[0])\nconst value_2 = (reg_2[1] << 16 | reg_2[0])\nconst value_3 = (reg_3[1] << 16 | reg_3[0])\n\n\nfunction format(val){\n    let str = val.toString()\n    while(str.length < 3){\n        str = '0' + str;\n    }\n    return str\n}\n\n\n\nconst weight = `${value_1}${format(value_2)}${format(value_3)}`\nmsg.payload = {\n    weight,\n    date: new Date()\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 340,
        "y": 220,
        "wires": [
            [
                "86e8fc4a.5178b8",
                "835c7a77.ae582"
            ]
        ]
    },
    {
        "id": "d41051b1.641cd",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 350,
        "y": 180,
        "wires": []
    },
    {
        "id": "c1ee503f.9b08a",
        "type": "modbus-read",
        "z": "ae927d6b4aa867d7",
        "d": true,
        "name": "",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "",
        "dataType": "HoldingRegister",
        "adr": "631",
        "quantity": "6",
        "rate": "10",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "b11e996f.8b0ec8",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 150,
        "y": 280,
        "wires": [
            [
                "28772b41.ea0514",
                "768b4a92.a9b24c"
            ],
            []
        ]
    },
    {
        "id": "fe751b93.2b2d9",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 590,
        "y": 320,
        "wires": []
    },
    {
        "id": "768b4a92.a9b24c",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "Counter common",
        "func": "const reg_1 = [msg.payload[0],msg.payload[1]]\nconst reg_2 = [msg.payload[2],msg.payload[3]]\nconst reg_3 = [msg.payload[4],msg.payload[5]]\n\n// const value = (reg[0] << 16 | reg[1])\n// msg.payload = value\n\n\nconst value_1 = (reg_1[1] << 16 | reg_1[0])\nconst value_2 = (reg_2[1] << 16 | reg_2[0])\nconst value_3 = (reg_3[1] << 16 | reg_3[0])\n\n\nfunction format(val){\n    let str = val.toString()\n    while(str.length < 3){\n        str = '0' + str;\n    }\n    return str\n}\n\n\n\nconst weight = `${value_1}${format(value_2)}${format(value_3)}`\nmsg.payload = {\n    weight,\n    date: new Date()\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 280,
        "wires": [
            [
                "fe751b93.2b2d9",
                "66ee30fb.de909"
            ]
        ]
    },
    {
        "id": "28772b41.ea0514",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 350,
        "y": 320,
        "wires": []
    },
    {
        "id": "3206d3da.828e1c",
        "type": "file",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/home/pi/storage/count_1.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "x": 880,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "ebc73949.8a8ed8",
        "type": "file",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/home/pi/storage/count_main.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "x": 900,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "835c7a77.ae582",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "count_1",
        "func": "const globalVal = flow.get(\"count_1\");\nif(globalVal){\n    if(globalVal === msg.payload.weight){\n        \n    }else{\n        flow.set(\"count_1\",  msg.payload.weight);\n        return msg;\n    }\n}else {\n    flow.set(\"count_1\",  msg.payload.weight);\n    return msg;\n}\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 580,
        "y": 220,
        "wires": [
            [
                "da21486c.2353b8",
                "3206d3da.828e1c"
            ]
        ]
    },
    {
        "id": "da21486c.2353b8",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "to file",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 770,
        "y": 180,
        "wires": []
    },
    {
        "id": "66ee30fb.de909",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "count_main",
        "func": "const globalVal = flow.get(\"count_main\");\nif(globalVal){\n    if(globalVal === msg.payload.weight){\n        \n    }else{\n        flow.set(\"count_main\",  msg.payload.weight);\n        return msg;\n    }\n}else {\n    flow.set(\"count_main\",  msg.payload.weight);\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 280,
        "wires": [
            [
                "ebc73949.8a8ed8",
                "7311ba50.d64e44"
            ]
        ]
    },
    {
        "id": "1a74035.f31337d",
        "type": "http in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "url": "/get/count_1",
        "method": "get",
        "swaggerDoc": "",
        "x": 360,
        "y": 460,
        "wires": [
            [
                "b869ab99.76b0a"
            ]
        ]
    },
    {
        "id": "b869ab99.76b0a",
        "type": "file in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/distr/data/count_1.txt",
        "format": "utf8",
        "x": 560,
        "y": 460,
        "wires": [
            [
                "2c9b0b2b.7edd8c"
            ]
        ]
    },
    {
        "id": "2c9b0b2b.7edd8c",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 730,
        "y": 460,
        "wires": []
    },
    {
        "id": "da4cfeaf.012cd",
        "type": "http in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "url": "/get/count_main",
        "method": "get",
        "swaggerDoc": "",
        "x": 340,
        "y": 500,
        "wires": [
            [
                "9827d819.332078"
            ]
        ]
    },
    {
        "id": "9827d819.332078",
        "type": "file in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/distr/data/count_main.txt",
        "format": "utf8",
        "x": 560,
        "y": 500,
        "wires": [
            [
                "c231cd00.f36378"
            ]
        ]
    },
    {
        "id": "c231cd00.f36378",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 730,
        "y": 500,
        "wires": []
    },
    {
        "id": "d8b4269e.847ec8",
        "type": "file",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/home/pi/storage/count_1.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "delete",
        "x": 1200,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "c11debe2.57ff28",
        "type": "inject",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 940,
        "y": 100,
        "wires": [
            [
                "d8b4269e.847ec8",
                "3a720dbe.03b582"
            ]
        ]
    },
    {
        "id": "3a720dbe.03b582",
        "type": "file",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "filename": "/home/pi/storage/count_main.txt",
        "filenameType": "str",
        "appendNewline": false,
        "createDir": true,
        "overwriteFile": "delete",
        "x": 1210,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "20229554.47d2fa",
        "type": "comment",
        "z": "ae927d6b4aa867d7",
        "name": "Prod mode save data in file",
        "info": "",
        "x": 250,
        "y": 140,
        "wires": []
    },
    {
        "id": "7311ba50.d64e44",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 810,
        "y": 320,
        "wires": []
    },
    {
        "id": "9f23e225.c57368",
        "type": "http in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "url": "/api/platform/get/countById",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 250,
        "y": 660,
        "wires": [
            [
                "6c2945b3.dee28c",
                "2fb44b24.17930c",
                "d2c8b512.ec5d1"
            ]
        ]
    },
    {
        "id": "6c2945b3.dee28c",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "func": "const periodStart = msg.payload.start;\nconst periodEnd = msg.payload.end;\nconst countId = msg.payload.countId\n\nlet fileName = '/home/pi/storage/count_1.txt' ///distr/data/count_main.txt\n\nif(!periodStart || !periodEnd){\n    msg.error = true;\n    msg.errorText = \"Period is not set\"\n    return msg;\n}\n\n\n\nif(countId === '1'){\n    fileName = '/home/pi/storage/count_1.txt'\n}else if(countId === '2'){\n    fileName = '/home/pi/storage/count_main.txt'\n}else {\n    msg.error = true;\n    msg.errorText = \"Id counter is not set\"\n    return msg;\n}\n\nmsg.payload = `gawk -v start=\"${periodStart}\" -v end=\"${periodEnd}\" \\\n'{ if ($0 ~ /\"date\":\"/) {\n    match($0, /\"date\":\"([^\"]+)\"/, arr);\n    if (arr[1] >= start && arr[1] <= end) print $0;\n} }' ${fileName}`;\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 720,
        "wires": [
            [
                "903b8321.17c118"
            ]
        ]
    },
    {
        "id": "8ba59715.b8858",
        "type": "exec",
        "z": "ae927d6b4aa867d7",
        "command": " ",
        "addpay": true,
        "append": "",
        "useSpawn": "",
        "timer": "",
        "name": "",
        "x": 470,
        "y": 680,
        "wires": [
            [
                "6249fd76.d5e16c",
                "cdb6c54c.fe3ce8"
            ],
            [],
            []
        ]
    },
    {
        "id": "6249fd76.d5e16c",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "func": "let raw = msg.payload.trim();\n\n// Make sure it's separated properly\nlet parts = raw.split(/}\\s*{/);\n\n// Step 2: Rebuild as valid JSON array\nlet jsonText = \"[\" + parts.map((p, i) => {\n    if (!p.startsWith(\"{\")) p = \"{\" + p;\n    if (!p.endsWith(\"}\")) p = p + \"}\";\n    return p;\n}).join(\",\") + \"]\";\n\n// Step 3: Parse into JS object\nlet data;\ntry {\n    data = JSON.parse(jsonText);\n} catch (err) {\n    node.error(\"Failed to parse JSON array\", err);\n    return null;\n}\n\n// Put parsed array back into payload\nmsg.payload = data;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 660,
        "wires": [
            [
                "114cb844.d94f78",
                "d2c8b512.ec5d1",
                "4eaea298.397a6c"
            ]
        ]
    },
    {
        "id": "114cb844.d94f78",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 1180,
        "y": 660,
        "wires": []
    },
    {
        "id": "903b8321.17c118",
        "type": "switch",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "property": "error",
        "propertyType": "msg",
        "rules": [
            {
                "t": "null"
            },
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 310,
        "y": 720,
        "wires": [
            [
                "8ba59715.b8858",
                "2bb64b05.f66c54"
            ],
            [
                "fa0d6bf5.e3cd68",
                "f3a513f6.872c",
                "ac9e4d0a.7bfd38"
            ]
        ]
    },
    {
        "id": "fa0d6bf5.e3cd68",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "Id error",
        "func": "msg.payload = {\n  data: `${msg.errorText}, body: ${JSON.stringify(msg.payload)}` \n}\nmsg.statusCode = 500\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 820,
        "wires": [
            [
                "7bcda869.bf7568",
                "acc51585.3ddae8"
            ]
        ]
    },
    {
        "id": "7bcda869.bf7568",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 630,
        "y": 820,
        "wires": []
    },
    {
        "id": "f3a513f6.872c",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 470,
        "y": 720,
        "wires": []
    },
    {
        "id": "2fb44b24.17930c",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 310,
        "y": 560,
        "wires": []
    },
    {
        "id": "d2c8b512.ec5d1",
        "type": "trigger",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "op1": "",
        "op2": "0",
        "op1type": "nul",
        "op2type": "str",
        "duration": "5",
        "extend": false,
        "units": "s",
        "reset": "",
        "outputs": 1,
        "x": 420,
        "y": 1000,
        "wires": [
            [
                "b427bf9.5ab9b4"
            ]
        ]
    },
    {
        "id": "b427bf9.5ab9b4",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "server error",
        "func": "msg.payload = {\n  data: `Server error` \n}\nmsg.statusCode = 500\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 1000,
        "wires": [
            [
                "60e6a63a.9ecbc"
            ]
        ]
    },
    {
        "id": "60e6a63a.9ecbc",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 710,
        "y": 1000,
        "wires": []
    },
    {
        "id": "ac9e4d0a.7bfd38",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "period error",
        "func": "msg.payload = {\n  data: `${msg.errorText}, body: ${JSON.stringify(msg.payload)}` \n}\nmsg.statusCode = 500\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 860,
        "wires": [
            [
                "17186682.623f69",
                "acc51585.3ddae8"
            ]
        ]
    },
    {
        "id": "17186682.623f69",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "x": 630,
        "y": 860,
        "wires": []
    },
    {
        "id": "acc51585.3ddae8",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "reset triger",
        "func": "msg.reset = true\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 940,
        "wires": [
            [
                "d2c8b512.ec5d1"
            ]
        ]
    },
    {
        "id": "2bb64b05.f66c54",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 480,
        "y": 620,
        "wires": []
    },
    {
        "id": "cdb6c54c.fe3ce8",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 670,
        "y": 600,
        "wires": []
    },
    {
        "id": "4eaea298.397a6c",
        "type": "debug",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 1123,
        "y": 580,
        "wires": []
    },
    {
        "id": "dd1e26f4f67b10ba",
        "type": "http in",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "url": "/auth/login",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 60,
        "wires": [
            [
                "cba59eef1648cee4"
            ]
        ]
    },
    {
        "id": "cba59eef1648cee4",
        "type": "function",
        "z": "ae927d6b4aa867d7",
        "name": "function 1",
        "func": "msg.payload = {\n   \"login\":\"user\",\n   \"password\":\"user\",\n   \"name\":\"office-10-20-00000000db95b409\",\n   \"serial\": \"00000000db95b409\",\n   \"ip\":\"81.30.161.168\",\n   \"port\": \"4000\",\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdXBwb3J0IiwiaWF0IjoxNjAzNzA5ODU1fQ.9Qz2hbEkoWqyRFAMZ_HQw94-lK9UBRLGkokxkOR6rMo\"\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 60,
        "wires": [
            [
                "5d824661448f9e2e"
            ]
        ]
    },
    {
        "id": "5d824661448f9e2e",
        "type": "http response",
        "z": "ae927d6b4aa867d7",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 450,
        "y": 60,
        "wires": []
    }
]
