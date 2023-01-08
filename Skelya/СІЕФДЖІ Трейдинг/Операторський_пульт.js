[
    {
        "id": "d14017f84deacb57",
        "type": "tab",
        "label": "Налаштування",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "99366da2301717ce",
        "type": "tab",
        "label": "Ловим кнопку",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "471a6e91c9155e06",
        "type": "tab",
        "label": "Поток 3",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "7a204b0920df63ed",
        "type": "tab",
        "label": "Поток 4",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "656dc0405eaa1150",
        "type": "tab",
        "label": "Barcode",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "72983c2150b8b211",
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
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "reset": false
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
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 60,
                "sy": 48,
                "gx": 20,
                "gy": 20,
                "cx": 6,
                "cy": 6,
                "px": 10,
                "py": 10
            }
        }
    },
    {
        "id": "78ceeb719193c72a",
        "type": "serial-port",
        "serialport": "/dev/ttyACM0",
        "serialbaud": "115200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "50",
        "bin": "false",
        "out": "time",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "4353e747c8d4b524",
        "type": "ui_group",
        "name": "Склад-виробництва-насіння",
        "tab": "977954cde5f1ca1c",
        "order": 2,
        "disp": true,
        "width": "8",
        "collapse": false,
        "className": ""
    },
    {
        "id": "7af8f5ab77f89f5d",
        "type": "ui_group",
        "name": "Час",
        "tab": "977954cde5f1ca1c",
        "order": 3,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "b9964f39675ebe86",
        "type": "ui_group",
        "name": "Оновлення",
        "tab": "977954cde5f1ca1c",
        "order": 4,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "23c93d78a4b645f5",
        "type": "ui_group",
        "name": "Зважування",
        "tab": "977954cde5f1ca1c",
        "order": 5,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "ab7a484e14eb4c13",
        "type": "ui_group",
        "name": "Зона-встановлення",
        "tab": "977954cde5f1ca1c",
        "order": 6,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "977954cde5f1ca1c",
        "type": "ui_tab",
        "name": "CFG-Main",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "4145b0defc59a94a",
        "type": "ui_group",
        "name": "Час",
        "tab": "5d5961574f63fd32",
        "order": 2,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "64359bea3eb3e718",
        "type": "ui_group",
        "name": "Пункт-призначення",
        "tab": "5d5961574f63fd32",
        "order": 5,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "c8d5262f8f157177",
        "type": "ui_group",
        "name": "Замовлення-обрати",
        "tab": "5d5961574f63fd32",
        "order": 8,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "1e8db8a7d4b744dc",
        "type": "ui_group",
        "name": "На-головну",
        "tab": "5d5961574f63fd32",
        "order": 9,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "7396c88169167354",
        "type": "ui_group",
        "name": "Зберегти",
        "tab": "5d5961574f63fd32",
        "order": 11,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "c1f45491b04defce",
        "type": "ui_group",
        "name": "Вага",
        "tab": "5d5961574f63fd32",
        "order": 10,
        "disp": true,
        "width": "4",
        "collapse": false,
        "className": ""
    },
    {
        "id": "a173837072965094",
        "type": "ui_group",
        "name": "Склад-насіння",
        "tab": "5d5961574f63fd32",
        "order": 3,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0eecf4fa4bd8fdf8",
        "type": "ui_group",
        "name": "Замовлення",
        "tab": "5d5961574f63fd32",
        "order": 7,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "5d5961574f63fd32",
        "type": "ui_tab",
        "name": "Зважування",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "f67cab9887ac5e76",
        "type": "ui_group",
        "name": "Головний-Склад",
        "tab": "977954cde5f1ca1c",
        "order": 1,
        "disp": true,
        "width": "8",
        "collapse": false,
        "className": ""
    },
    {
        "id": "dc1a5f20f54fd0b8",
        "type": "ui_group",
        "name": "Склад-виробництва-насіння",
        "tab": "5d5961574f63fd32",
        "order": 1,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "78c64c2b02b15f43",
        "type": "ui_group",
        "name": "Склад-насіння-текст",
        "tab": "5d5961574f63fd32",
        "order": 4,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "66090daa3c0909a6",
        "type": "ui_group",
        "name": "Замовлення-text",
        "tab": "5d5961574f63fd32",
        "order": 6,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "77a5462ed379721c",
        "type": "serial-port",
        "serialport": "/dev/ttyACM0",
        "serialbaud": "115200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "50",
        "bin": "false",
        "out": "time",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "2927b1677483d4a7",
        "type": "ui_group",
        "name": "Проскануйте або введіть номер пломби",
        "tab": "0572032f1b40fb10",
        "order": 1,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0572032f1b40fb10",
        "type": "ui_tab",
        "name": "Пломба",
        "icon": "dashboard",
        "order": 3,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "1903964e747c6a1c",
        "type": "ui_group",
        "name": "Збережена інформація",
        "tab": "0572032f1b40fb10",
        "order": 2,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "63ac5825bcf64c6f",
        "type": "inject",
        "z": "d14017f84deacb57",
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
        "y": 120,
        "wires": [
            [
                "4fbd73c6cd92a207"
            ]
        ]
    },
    {
        "id": "4fbd73c6cd92a207",
        "type": "function",
        "z": "d14017f84deacb57",
        "name": "function 49",
        "func": "global.set(\"printerName\", \"\");\nglobal.set(\"sendTo1C\", \"\");\nglobal.set(\"getWith1C\", \"\");\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "81093c9dbc487b42",
        "type": "ui_template",
        "z": "99366da2301717ce",
        "group": "23c93d78a4b645f5",
        "name": "",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<script>\n    (function($scope) {\n    document.onkeydown = function (e) {\n        let msg = {\"payload\": e.key,  \"topic\": \"keydown\"};\n        $scope.send(msg);\n    };\n    \n    document.onkeyup = function (e) {\n        let msg = {\"payload\": e.key, \"topic\": \"keyup\"};\n        $scope.send(msg);\n    };\n})(scope);\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 120,
        "y": 280,
        "wires": [
            [
                "aa4ef6f6718433a2"
            ]
        ]
    },
    {
        "id": "7f838993c4d7ba34",
        "type": "function",
        "z": "99366da2301717ce",
        "name": "function 42",
        "func": "var currentWindow = flow.get(\"CurrentWindow\")\nvar key = msg.payload;\n\nif (msg.topic == \"keydown\" && key == \"Enter\"){\n    if (currentWindow.name == \"Зважування\"){\n        // var newMsg = { payload: \"Enter\"};\n        // return [null, newMsg];\n    } else if (currentWindow.name == \"CFG-Main\"){\n        var newMsg = { payload: \"Enter\" };\n        return [newMsg, null];\n    } else if (currentWindow.name == \"Пломба\") {\n        var newMsg = { payload: \"Enter\" };\n        return [null, newMsg];\n    }else{\n        \n    }\n}\n\n//return msg;\n\n// payload: \"change\"\n// tab: \"1\"\n// name: \"Зважування\"\n// socketid: \"xizACaUb1nbqCm-XAAAB\"\n// socketip: \"192.168.0.102\"\n// params: object\n// _msgid: \"b2a3c3b754f1c832\"\n\n\n// payload: \"change\"\n// tab: \"0\"\n// name: \"CFG-Main\"\n// socketid: \"xizACaUb1nbqCm-XAAAB\"\n// socketip: \"192.168.0.102\"\n// params: object\n// _msgid: \"7ea7dc5c182e2fc6\"",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 590,
        "y": 300,
        "wires": [
            [
                "88a17c4d9ebaf3c7",
                "0da06f3cb6c58d8c"
            ],
            [
                "fb0d3e70a7a6a2d8",
                "e99b64e16475459d"
            ]
        ]
    },
    {
        "id": "88a17c4d9ebaf3c7",
        "type": "debug",
        "z": "99366da2301717ce",
        "name": "CFG-MAIN",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 830,
        "y": 280,
        "wires": []
    },
    {
        "id": "fb0d3e70a7a6a2d8",
        "type": "debug",
        "z": "99366da2301717ce",
        "name": "Пломба",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 820,
        "y": 320,
        "wires": []
    },
    {
        "id": "3342777bad4587fa",
        "type": "link in",
        "z": "99366da2301717ce",
        "name": "Ловим кнопку",
        "links": [
            "191ec7ea2b14f1e3"
        ],
        "x": 95,
        "y": 180,
        "wires": [
            [
                "82cfdcfbc8b807f1",
                "9cb922d1a9554528"
            ]
        ]
    },
    {
        "id": "82cfdcfbc8b807f1",
        "type": "function",
        "z": "99366da2301717ce",
        "name": "function 43",
        "func": "if (msg.payload == \"change\") {\n    flow.set(\"CurrentWindow\", msg)\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "a9391cefa56418c8",
        "type": "inject",
        "z": "99366da2301717ce",
        "name": "CurrentWindow",
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
        "payload": "CurrentWindow",
        "payloadType": "flow",
        "x": 160,
        "y": 80,
        "wires": [
            [
                "8aa9379d68383ab4"
            ]
        ]
    },
    {
        "id": "8aa9379d68383ab4",
        "type": "debug",
        "z": "99366da2301717ce",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 370,
        "y": 80,
        "wires": []
    },
    {
        "id": "9cb922d1a9554528",
        "type": "debug",
        "z": "99366da2301717ce",
        "name": "debug 42",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 220,
        "y": 140,
        "wires": []
    },
    {
        "id": "0da06f3cb6c58d8c",
        "type": "link out",
        "z": "99366da2301717ce",
        "name": "link out 3",
        "mode": "link",
        "links": [
            "6a7c9e9f74b69479"
        ],
        "x": 775,
        "y": 220,
        "wires": []
    },
    {
        "id": "e99b64e16475459d",
        "type": "link out",
        "z": "99366da2301717ce",
        "name": "link out 4",
        "mode": "link",
        "links": [
            "cfa4e126eaad31a3"
        ],
        "x": 775,
        "y": 360,
        "wires": []
    },
    {
        "id": "b76a24b7d7ee06ee",
        "type": "ui_template",
        "z": "99366da2301717ce",
        "group": "2927b1677483d4a7",
        "name": "",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<script>\n    (function($scope) {\n    document.onkeydown = function (e) {\n        let msg = {\"payload\": e.key,  \"topic\": \"keydown\"};\n        $scope.send(msg);\n    };\n    \n    document.onkeyup = function (e) {\n        let msg = {\"payload\": e.key, \"topic\": \"keyup\"};\n        $scope.send(msg);\n    };\n})(scope);\n</script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 120,
        "y": 320,
        "wires": [
            [
                "aa4ef6f6718433a2"
            ]
        ]
    },
    {
        "id": "aa4ef6f6718433a2",
        "type": "delay",
        "z": "99366da2301717ce",
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
        "allowrate": false,
        "outputs": 2,
        "x": 320,
        "y": 300,
        "wires": [
            [
                "7f838993c4d7ba34"
            ],
            []
        ]
    },
    {
        "id": "44576446608a48b0",
        "type": "ui_dropdown",
        "z": "471a6e91c9155e06",
        "name": "",
        "label": "Оберіть із списку",
        "tooltip": "",
        "place": "",
        "group": "4353e747c8d4b524",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [],
        "payload": "",
        "topic": "",
        "topicType": "str",
        "className": "widgetbr",
        "x": 650,
        "y": 160,
        "wires": [
            [
                "0cda26629cbee96d",
                "a5e69696878bcfe4"
            ]
        ]
    },
    {
        "id": "2bd64194758e524f",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "onceDelay": "0.7",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 100,
        "y": 160,
        "wires": [
            [
                "02f99db808d9ea45",
                "b6d322a2982cab47"
            ]
        ]
    },
    {
        "id": "45e365eaa0b2a0b9",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "parse",
        "func": "msg.options = [ \n    {\"Склад виробництва насіння (м.Хоростків)\":\"1\"}, \n    {\"Склад виробництва насіння (с.Батятичі)\":\"2\"}, \n    {\"Тест\":\"3\"} ]\n\nvar metadataName = msg.payload\nvar newOption = []\n\nfor(let house of metadataName.data){\n    let option = {}\n    option[house.Warehouse] = { Warehouse: house.Warehouse, WarehouseCode: house.WarehouseCode}\n    newOption.push(option)\n}\n\nmsg.payload = newOption\nmsg.options = newOption\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 430,
        "y": 160,
        "wires": [
            [
                "44576446608a48b0"
            ]
        ]
    },
    {
        "id": "66d04674ac2c1b03",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "час",
        "func": "var d = new Date();\n\nvar utc = d.getTime() + (d.getTimezoneOffset() * 60000);\n\nvar offset = 2; // This is the offset for UTC+3, in your case (UTC+1) should be 1\n\nconst newDate = new Date(utc + (3600000*offset));\n//let text = d.toLocaleString();\n//msg.payload = newDate;\nvar dateLocal = newDate.toLocaleString(\"ru-RU\",{hour12:false});\nmsg.payload = dateLocal.replace(\",\",\"\");\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 60,
        "wires": [
            [
                "2ab89e2981700ec7"
            ]
        ]
    },
    {
        "id": "2a8219f9b2253f21",
        "type": "inject",
        "z": "471a6e91c9155e06",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 60,
        "wires": [
            [
                "66d04674ac2c1b03"
            ]
        ]
    },
    {
        "id": "2ab89e2981700ec7",
        "type": "ui_text",
        "z": "471a6e91c9155e06",
        "group": "7af8f5ab77f89f5d",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-left",
        "className": "",
        "x": 550,
        "y": 60,
        "wires": []
    },
    {
        "id": "f0895a3f822bbca7",
        "type": "ui_button",
        "z": "471a6e91c9155e06",
        "name": "",
        "group": "b9964f39675ebe86",
        "order": 1,
        "width": "0",
        "height": "0",
        "passthru": false,
        "label": "Оновлення",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "date",
        "topic": "",
        "topicType": "str",
        "x": 90,
        "y": 300,
        "wires": [
            [
                "2ed356f756f769f7",
                "1c4fc271bdc0c8e3",
                "b6d322a2982cab47",
                "045124bf8e87feef"
            ]
        ]
    },
    {
        "id": "bcf5ae75b751ad75",
        "type": "debug",
        "z": "471a6e91c9155e06",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 450,
        "y": 200,
        "wires": []
    },
    {
        "id": "461410de7677dc4b",
        "type": "ui_button",
        "z": "471a6e91c9155e06",
        "name": "",
        "group": "23c93d78a4b645f5",
        "order": 1,
        "width": "0",
        "height": "0",
        "passthru": true,
        "label": "Зважування",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "date",
        "topic": "",
        "topicType": "str",
        "x": 490,
        "y": 640,
        "wires": [
            [
                "b053b813a475b584"
            ]
        ]
    },
    {
        "id": "58b23df214d62e03",
        "type": "ui_button",
        "z": "471a6e91c9155e06",
        "name": "",
        "group": "ab7a484e14eb4c13",
        "order": 1,
        "width": "0",
        "height": "0",
        "passthru": false,
        "label": "Зона встановлення",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "date",
        "topic": "",
        "topicType": "str",
        "x": 140,
        "y": 460,
        "wires": [
            [
                "7344e1919e0388fa",
                "02f99db808d9ea45"
            ]
        ]
    },
    {
        "id": "02f99db808d9ea45",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "Date",
        "func": "// msg.payload = {\n//     \"metadataName\": \"seedswarehouses\",\n//     \"count\": 2,\n//     \"data\": [{\n//             \"Warehouse\": \"Склад виробництва насіння (м.Хоростків)\",\n//             \"WarehouseCode\": \"000000000064\"\n//         }, {\n//             \"Warehouse\": \"Склад виробництва насіння (с.Батятичі)\",\n//             \"WarehouseCode\": \"000000000065\"\n//         }\n//     ]\n// }\n\nmsg.payload = flow.get(\"main_sklad\");\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 160,
        "wires": [
            [
                "bcf5ae75b751ad75",
                "45e365eaa0b2a0b9"
            ]
        ]
    },
    {
        "id": "1495fcdc1e753f82",
        "type": "ui_ui_control",
        "z": "471a6e91c9155e06",
        "name": "",
        "x": 800,
        "y": 740,
        "wires": [
            [
                "0179d3d32eeeba7c",
                "4e9d6afdfdb8e87f"
            ]
        ]
    },
    {
        "id": "0179d3d32eeeba7c",
        "type": "debug",
        "z": "471a6e91c9155e06",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1050,
        "y": 740,
        "wires": []
    },
    {
        "id": "b053b813a475b584",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "перехід на Зважування",
        "func": "//msg.linkEvent = \"true\"\nif (msg.linkEvent == null){\n    msg.payload = { tab: \"Зважування\" }\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 230,
        "y": 740,
        "wires": [
            [
                "1495fcdc1e753f82"
            ]
        ]
    },
    {
        "id": "dae07916c7697790",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "y": 920,
        "wires": [
            [
                "2418ef8ebd49ef29"
            ]
        ]
    },
    {
        "id": "2418ef8ebd49ef29",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "hide/show",
        "func": "msg.payload = { \n    group: { \n        hide: [\"CFG-Main_Склад-виробництва-насіння\"],\n        show: [\"CFG-Main_Головний-Склад\", \"CFG-Main_Час\", \"CFG-Main_Оновлення\", \"CFG-Main_Зважування\", \"CFG-Main_Зона-встановлення\"]\n    } \n}\n\nlet qwerty = { \n    \"group\": { \n        \"hide\": [\"tab_name_group_name_with_underscores\"], \n        \"show\": [\"reveal_another_group\"], \n        \"focus\": true \n    } \n}\n//        hide: [\"CFG-Main_qwerty\", \"CFG-Main_Час\", \"CFG-Main_Оновлення\", \"CFG-Main_Зважування\", \"CFG-Main_Зона-встановлення\", \"CFG-Main_Склад-виробництва-насіння\"]\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 920,
        "wires": [
            [
                "1495fcdc1e753f82"
            ]
        ]
    },
    {
        "id": "7344e1919e0388fa",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "hide/show DropDown",
        "func": "msg.payload = { \n    \"group\": { \n        \"hide\": [\"CFG-Main_Головний-Склад\"], \n        \"show\": [\"CFG-Main_Склад-виробництва-насіння\"] \n    } \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 240,
        "y": 540,
        "wires": [
            [
                "1495fcdc1e753f82"
            ]
        ]
    },
    {
        "id": "ab2aafaa9d2bf410",
        "type": "ui_text",
        "z": "471a6e91c9155e06",
        "group": "f67cab9887ac5e76",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Склад:",
        "format": "{{msg.info}}",
        "layout": "row-spread",
        "className": "",
        "x": 1040,
        "y": 420,
        "wires": []
    },
    {
        "id": "b6d322a2982cab47",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "clear",
        "func": "msg.info = \"Потрібно обрати\"\nflow.set(\"main_sklad\", null);\nflow.set(\"main_sklad_triger\", null);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 420,
        "wires": [
            [
                "ab2aafaa9d2bf410",
                "d739f430671ba965"
            ]
        ]
    },
    {
        "id": "0cda26629cbee96d",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "hide/show DropDown",
        "func": "msg.payload = { \n    \"group\": { \n        \"hide\": [\"CFG-Main_Склад-виробництва-насіння\"], \n        \"show\": [\"CFG-Main_Головний-Склад\" ] \n    } \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1060,
        "y": 540,
        "wires": [
            [
                "1495fcdc1e753f82",
                "1c4fc271bdc0c8e3"
            ]
        ]
    },
    {
        "id": "655359257b988043",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "function 3",
        "func": "var sklad = flow.get(\"main_sklad_triger\");\nif (!sklad){\n    msg.enabled = false;\n}else{\n    msg.enabled = true;\n}\nmsg.linkEvent = \"true\"\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 840,
        "wires": [
            [
                "461410de7677dc4b"
            ]
        ]
    },
    {
        "id": "a5e69696878bcfe4",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "Відправка Головного складу",
        "func": "//msg.payload = msg.payload.Warehouse\nvar inDate = msg.payload\nmsg.info = inDate.Warehouse\nflow.set(\"main_sklad_triger\", msg.info);\nmsg.payload = inDate\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 320,
        "wires": [
            [
                "ab2aafaa9d2bf410",
                "e92879fadfd7a038"
            ]
        ]
    },
    {
        "id": "e92879fadfd7a038",
        "type": "link out",
        "z": "471a6e91c9155e06",
        "name": "link out 1",
        "mode": "link",
        "links": [
            "c4e5a8dcaf84f20a"
        ],
        "x": 1115,
        "y": 280,
        "wires": []
    },
    {
        "id": "fc2f873eec03e144",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "Запит 1",
        "func": "//Куінтус, нас., 1 р, 2021\nmsg.payload = {\n    \"metadataName\": \"seedstaskordersnew\",\n    \"count\": 1,\n    \"data\": [{\n        \"DocumentNumber\": \"000000000064\",\n        \"DocumentDate\": \"2022-02-01T00:00:00\",\n        \"PartyName\": \"10000-100622-0911\",\n        \"Note\": \"Тернопіль, Схема 2\",\n        \"NomenclatureName\": \"Нас. оз. пш. Мулан\",\n        \"NomenclatureCode\": \"Ц0000056426\",\n        \"NomenclatureCharacteristics\": \"Мулан, нас., 1 р, 2019\",\n        \"Disinfectant1\": \"Вайбранс Інтеграл\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Цензор XL\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Вітазим К\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"МРІЯ НАСІННЄВИЙ ЗАВОД, ТОВ (Хоростків)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    },\n    {\n        \"DocumentNumber\": \"000000000020\",\n        \"DocumentDate\": \"2022-02-01T00:00:00\",\n        \"PartyName\": \"20000-200222-0222\",\n        \"Note\": \"Тернопіль, Схема 3\",\n        \"NomenclatureName\": \"Нас. оз. пш. Тіфун\",\n        \"NomenclatureCode\": \"Ц0000056439\",\n        \"NomenclatureCharacteristics\": \"Куінтус, нас., 2 р, 2021\",\n        \"Disinfectant1\": \"Вайбранс Інтеграл\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Цензор XL\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Вітазим К\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"ТІФУН НАСІННЄВИЙ ЗАВОД, ТОВ (Мангуш)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    },\n    {\n        \"DocumentNumber\": \"0000000000350\",\n        \"DocumentDate\": \"2022-04-06T00:00:00\",\n        \"PartyName\": \"80000-200888-0888\",\n        \"Note\": \"Суми, Схема 5\",\n        \"NomenclatureName\": \"Нас. оз. пш. Тіфун\",\n        \"NomenclatureCode\": \"Ц0000056439\",\n        \"NomenclatureCharacteristics\": \"Кактус, нас., 3 р, 2022\",\n        \"Disinfectant1\": \"Вайсберг\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Захист 10\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Кович У\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"Солін НАСІННЄВИЙ ЗАВОД, ТОВ (Солін)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    }\n    ]\n}\n\n\nflow.set(\"main_orders\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "50dd18e4d417d15e",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "Запит 2",
        "func": "msg.payload = {\n    \"metadataName\": \"seedswarehouses\",\n    \"count\": 2,\n    \"data\": [{\n        \"Warehouse\": \"Склад виробництва насіння (м.Хоростків)\",\n        \"WarehouseCode\": \"000000000064\"\n    }, {\n        \"Warehouse\": \"Склад виробництва насіння (с.Батятичі)\",\n        \"WarehouseCode\": \"000000000065\"\n    }\n    ]\n}\nflow.set(\"main_sklad\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1080,
        "wires": [
            [
                "62372d3cca0bbd0c"
            ]
        ]
    },
    {
        "id": "52ea7a534b067130",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "onceDelay": "0.5",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 640,
        "y": 1040,
        "wires": [
            [
                "fc2f873eec03e144"
            ]
        ]
    },
    {
        "id": "e2a5c70bab2f611c",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "onceDelay": "0.5",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 640,
        "y": 1080,
        "wires": [
            [
                "50dd18e4d417d15e"
            ]
        ]
    },
    {
        "id": "2ed356f756f769f7",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "очистка",
        "func": "msg.payload = \"\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 280,
        "wires": [
            [
                "e92879fadfd7a038"
            ]
        ]
    },
    {
        "id": "1c4fc271bdc0c8e3",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "enabled false",
        "func": "msg.enabled = false;\nmsg.linkEvent = \"true\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 610,
        "y": 540,
        "wires": [
            [
                "461410de7677dc4b"
            ]
        ]
    },
    {
        "id": "4e9d6afdfdb8e87f",
        "type": "switch",
        "z": "471a6e91c9155e06",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "connect",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 770,
        "y": 880,
        "wires": [
            [
                "2418ef8ebd49ef29"
            ]
        ]
    },
    {
        "id": "9c8ac1eda37f8c7d",
        "type": "ui_template",
        "z": "471a6e91c9155e06",
        "group": "7af8f5ab77f89f5d",
        "name": "",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<style>\n    .masonry-container {\n        width: 1200px;\n    }\n</style>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 340,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "944ea198966c4c54",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "y": 1040,
        "wires": [
            [
                "9c8ac1eda37f8c7d"
            ]
        ]
    },
    {
        "id": "9a6b0fee86445faf",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "repeat": "0.5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 840,
        "wires": [
            [
                "655359257b988043"
            ]
        ]
    },
    {
        "id": "28a086298e452577",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "y": 1120,
        "wires": [
            [
                "755e34536259deb3"
            ]
        ]
    },
    {
        "id": "755e34536259deb3",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "init var",
        "func": "flow.set(\"main_sklad\", null);\nflow.set(\"main_sklad_triger\", null);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1120,
        "wires": [
            []
        ]
    },
    {
        "id": "797b046a568f936a",
        "type": "inject",
        "z": "471a6e91c9155e06",
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
        "payload": "main_sklad",
        "payloadType": "flow",
        "x": 140,
        "y": 1200,
        "wires": [
            [
                "95253c621cab1d07"
            ]
        ]
    },
    {
        "id": "95253c621cab1d07",
        "type": "debug",
        "z": "471a6e91c9155e06",
        "name": "debug 3",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 320,
        "y": 1200,
        "wires": []
    },
    {
        "id": "11915801d010aafc",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Отримання даних зовні",
        "info": "",
        "x": 670,
        "y": 1000,
        "wires": []
    },
    {
        "id": "6a7c9e9f74b69479",
        "type": "link in",
        "z": "471a6e91c9155e06",
        "name": "Enter для переходу на Зважування",
        "links": [
            "0da06f3cb6c58d8c"
        ],
        "x": 95,
        "y": 640,
        "wires": [
            [
                "811efefa87d3e7d6",
                "a9349b08eb545516"
            ]
        ]
    },
    {
        "id": "811efefa87d3e7d6",
        "type": "function",
        "z": "471a6e91c9155e06",
        "name": "triger",
        "func": "var sklad = flow.get(\"main_sklad\");\nif (!sklad) {\n    \n} else {\n    msg.linkEvent = null\n    return msg;\n}\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 640,
        "wires": [
            [
                "461410de7677dc4b"
            ]
        ]
    },
    {
        "id": "a9349b08eb545516",
        "type": "debug",
        "z": "471a6e91c9155e06",
        "name": "debug 46",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 280,
        "y": 600,
        "wires": []
    },
    {
        "id": "0b3ed14b875ac2b2",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Час",
        "info": "",
        "x": 330,
        "y": 20,
        "wires": []
    },
    {
        "id": "2e21507e89b94f4e",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Відправка даних на строрінку 2",
        "info": "",
        "x": 970,
        "y": 240,
        "wires": []
    },
    {
        "id": "b7e2fc4503171d52",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Отримані дані з 1с",
        "info": "",
        "x": 150,
        "y": 1160,
        "wires": []
    },
    {
        "id": "4044b857d621352f",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Очистка даних з 1С",
        "info": "",
        "x": 150,
        "y": 1080,
        "wires": []
    },
    {
        "id": "2aea7419fc5aae17",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Стилі для сторінки",
        "info": "",
        "x": 150,
        "y": 1000,
        "wires": []
    },
    {
        "id": "d5cb63aa3f0bf2a0",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Сховати/Показати групи на сторінці",
        "info": "",
        "x": 230,
        "y": 880,
        "wires": []
    },
    {
        "id": "204423c7db8f032c",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Активувати/Деактивувати кнопку переходу на строінку 2",
        "info": "",
        "x": 230,
        "y": 800,
        "wires": []
    },
    {
        "id": "dd12a71d5ebcb699",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Перейти на сторінку 2",
        "info": "",
        "x": 240,
        "y": 700,
        "wires": []
    },
    {
        "id": "20fa47a42c86e470",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Сховати/Показати групи на сторінці",
        "info": "",
        "x": 210,
        "y": 500,
        "wires": []
    },
    {
        "id": "3d35165be4f48e30",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Сховати/Показати групи на сторінці",
        "info": "",
        "x": 1090,
        "y": 500,
        "wires": []
    },
    {
        "id": "cf22961afd9cd0f5",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Декативація кнопки Зважування",
        "info": "",
        "x": 610,
        "y": 500,
        "wires": []
    },
    {
        "id": "180992d05b42cf0d",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Очищення після натискання Оновлення",
        "info": "",
        "x": 540,
        "y": 380,
        "wires": []
    },
    {
        "id": "1d9160d0b8792b67",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Вивести інформацію",
        "info": "",
        "x": 1040,
        "y": 380,
        "wires": []
    },
    {
        "id": "045124bf8e87feef",
        "type": "debug",
        "z": "471a6e91c9155e06",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 450,
        "y": 240,
        "wires": []
    },
    {
        "id": "d739f430671ba965",
        "type": "link out",
        "z": "471a6e91c9155e06",
        "name": "Оновити склади",
        "mode": "link",
        "links": [
            "3aa870eb316b2d19"
        ],
        "x": 655,
        "y": 440,
        "wires": []
    },
    {
        "id": "3aa870eb316b2d19",
        "type": "link in",
        "z": "471a6e91c9155e06",
        "name": "link in 6",
        "links": [
            "d739f430671ba965"
        ],
        "x": 625,
        "y": 1180,
        "wires": [
            [
                "50dd18e4d417d15e"
            ]
        ]
    },
    {
        "id": "5f782a13ad962e45",
        "type": "comment",
        "z": "471a6e91c9155e06",
        "name": "Оновлення складів",
        "info": "",
        "x": 610,
        "y": 1140,
        "wires": []
    },
    {
        "id": "62372d3cca0bbd0c",
        "type": "link out",
        "z": "471a6e91c9155e06",
        "name": "Запис після обновлення",
        "mode": "link",
        "links": [
            "a35bda0784d12b4a"
        ],
        "x": 955,
        "y": 1080,
        "wires": []
    },
    {
        "id": "a35bda0784d12b4a",
        "type": "link in",
        "z": "471a6e91c9155e06",
        "name": "Після оновлення",
        "links": [
            "62372d3cca0bbd0c"
        ],
        "x": 95,
        "y": 200,
        "wires": [
            [
                "02f99db808d9ea45"
            ]
        ]
    },
    {
        "id": "5dc4902beb1fbddd",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Час",
        "func": "var d = new Date();\n\nvar utc = d.getTime() + (d.getTimezoneOffset() * 60000);\n\nvar offset = 2; // This is the offset for UTC+3, in your case (UTC+1) should be 1\n\nconst newDate = new Date(utc + (3600000*offset));\n//let text = d.toLocaleString();\n//msg.payload = newDate;\nvar dateLocal = newDate.toLocaleString(\"ru-RU\",{hour12:false});\nmsg.payload = dateLocal.replace(\",\",\"\");\n\nglobal.set(\"dateHlobal\", msg.payload.split(\" \")[0])\nglobal.set(\"dateGlobalForPDF\", msg.payload.replace(\" \", \"_\"))\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 20,
        "wires": [
            [
                "93d290cd1ff71964"
            ]
        ]
    },
    {
        "id": "40f2071837cd1256",
        "type": "inject",
        "z": "7a204b0920df63ed",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 20,
        "wires": [
            [
                "5dc4902beb1fbddd"
            ]
        ]
    },
    {
        "id": "93d290cd1ff71964",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "4145b0defc59a94a",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "Час",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-left",
        "className": "",
        "x": 490,
        "y": 20,
        "wires": []
    },
    {
        "id": "fb5d754887e4f548",
        "type": "ui_button",
        "z": "7a204b0920df63ed",
        "name": "",
        "group": "64359bea3eb3e718",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Пункт призначення",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 120,
        "y": 440,
        "wires": [
            [
                "f8324010af8f5742",
                "2181a6187ef3a01b",
                "1af8c773b1a0cecb"
            ]
        ]
    },
    {
        "id": "853d0bb459a81e5d",
        "type": "ui_button",
        "z": "7a204b0920df63ed",
        "name": "",
        "group": "c8d5262f8f157177",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Замовлення",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 110,
        "y": 660,
        "wires": [
            [
                "1c9decf618bc886c",
                "4de25d1dd42fb778",
                "1af8c773b1a0cecb"
            ]
        ]
    },
    {
        "id": "6b4a03cc71eb085b",
        "type": "ui_button",
        "z": "7a204b0920df63ed",
        "name": "",
        "group": "1e8db8a7d4b744dc",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "На головну",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 170,
        "y": 1020,
        "wires": [
            [
                "c16a57a920620e51"
            ]
        ]
    },
    {
        "id": "11bb8ed3c99a7ad2",
        "type": "ui_button",
        "z": "7a204b0920df63ed",
        "name": "Зважити",
        "group": "7396c88169167354",
        "order": 1,
        "width": "0",
        "height": "0",
        "passthru": true,
        "label": "Зважити",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "open",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 325,
        "y": 880,
        "wires": [
            [
                "97f7843bad7452a7"
            ]
        ],
        "l": false
    },
    {
        "id": "79151a0c45dabfdc",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "onceDelay": "0.5",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 320,
        "wires": [
            [
                "2181a6187ef3a01b"
            ]
        ]
    },
    {
        "id": "2181a6187ef3a01b",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "main_orders",
        "func": "msg.payload = flow.get(\"main_orders\")\n//WHouseName\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 320,
        "wires": [
            [
                "7b608debab5e3294"
            ]
        ]
    },
    {
        "id": "7b608debab5e3294",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Склад",
        "func": "// {\n// \"metadataName\": \"seedstaskordersnew\",\n// \"count\": 1,\n// \"data\": [{\n//     \"DocumentNumber\": \"000000000064\",\n//     \"DocumentDate\": \"2022-02-01T00:00:00\",\n//     \"PartyName\": \"10000-100622-0911\",\n//     \"Note\": \"Тернопіль, Схема 2\",\n//     \"NomenclatureName\": \"Нас. оз. пш. Мулан\",\n//     \"NomenclatureCode\": \"Ц0000056426\",\n//     \"NomenclatureCharacteristics\": \"Мулан, нас., ЕН, 2019\",\n//     \"Disinfectant1\": \"Вайбранс Інтеграл\",\n//     \"DisinfectantCode1\": \"Ц0000100594\",\n//     \"Disinfectant2\": \"Цензор XL\",\n//     \"DisinfectantCode2\": \"Ц0000102126\",\n//     \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n//     \"DisinfectantCode3\": \"Ц0000100669\",\n//     \"Disinfectant4\": \"Вітазим К\",\n//     \"DisinfectantCode4\": \"Ц0000085308\",\n//     \"WHouseName\": \"МРІЯ НАСІННЄВИЙ ЗАВОД, ТОВ (Хоростків)\",\n//     \"WHouseCode\": \"ЦК0007135\",\n//     \"BarcodeCode\": \"430\",\n//     \"MassOfThousands\": \"0.080\"\n// }\n// ]\n// }\n\n\nvar metadataName = msg.payload\nvar newOption = []\n\nfor (let house of metadataName.data) {\n    let option = {}\n    option[house.WHouseName] = house\n    newOption.push(option)\n}\n\nmsg.payload = newOption\nmsg.options = newOption\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 450,
        "y": 320,
        "wires": [
            [
                "e2ab1fb90c4f0b1f"
            ]
        ]
    },
    {
        "id": "e2ab1fb90c4f0b1f",
        "type": "ui_dropdown",
        "z": "7a204b0920df63ed",
        "name": "",
        "label": "Оберіть із списку",
        "tooltip": "",
        "place": "",
        "group": "a173837072965094",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "topicType": "str",
        "className": "",
        "x": 610,
        "y": 320,
        "wires": [
            [
                "e6db1c8de15ef401",
                "98c7e1dff9d2eefd",
                "95a1173c01486c4b",
                "3e6462e04088c6d2",
                "2a88e954bf32d1a3"
            ]
        ]
    },
    {
        "id": "4de25d1dd42fb778",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "",
        "func": "msg.payload = flow.get(\"sklad\")\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 660,
        "wires": [
            [
                "95a1173c01486c4b"
            ]
        ]
    },
    {
        "id": "95a1173c01486c4b",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "INFO",
        "func": "// {\n// \"metadataName\": \"seedstaskordersnew\",\n// \"count\": 1,\n// \"data\": [{\n//     \"DocumentNumber\": \"000000000064\",\n//     \"DocumentDate\": \"2022-02-01T00:00:00\",\n//     \"PartyName\": \"10000-100622-0911\",\n//     \"Note\": \"Тернопіль, Схема 2\",\n//     \"NomenclatureName\": \"Нас. оз. пш. Мулан\",\n//     \"NomenclatureCode\": \"Ц0000056426\",\n//     \"NomenclatureCharacteristics\": \"Мулан, нас., ЕН, 2019\",\n//     \"Disinfectant1\": \"Вайбранс Інтеграл\",\n//     \"DisinfectantCode1\": \"Ц0000100594\",\n//     \"Disinfectant2\": \"Цензор XL\",\n//     \"DisinfectantCode2\": \"Ц0000102126\",\n//     \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n//     \"DisinfectantCode3\": \"Ц0000100669\",\n//     \"Disinfectant4\": \"Вітазим К\",\n//     \"DisinfectantCode4\": \"Ц0000085308\",\n//     \"WHouseName\": \"МРІЯ НАСІННЄВИЙ ЗАВОД, ТОВ (Хоростків)\",\n//     \"WHouseCode\": \"ЦК0007135\",\n//     \"BarcodeCode\": \"430\",\n//     \"MassOfThousands\": \"0.080\"\n// }\n// ]\n// }\n\nvar metadataName = [msg.payload]\nvar newOption = []\n\nfor (let house of metadataName) {\n    let option = {}\n    house.optionVirtual = `${house.DocumentNumber} ${house.NomenclatureName}`\n    option[`${house.DocumentNumber} ${house.NomenclatureName}`] = house\n    newOption.push(option)\n}\n\nmsg.payload = newOption\nmsg.options = newOption\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 660,
        "wires": [
            [
                "b2b13453c2ee7886"
            ]
        ]
    },
    {
        "id": "b2b13453c2ee7886",
        "type": "ui_dropdown",
        "z": "7a204b0920df63ed",
        "name": "",
        "label": "Оберіть із списку",
        "tooltip": "",
        "place": "",
        "group": "0eecf4fa4bd8fdf8",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "topicType": "str",
        "className": "",
        "x": 770,
        "y": 660,
        "wires": [
            [
                "c7348b3934deb4c1",
                "129feb8c14eb46e4",
                "501d97169fc0ce97"
            ]
        ]
    },
    {
        "id": "7766c02bee02101d",
        "type": "ui_ui_control",
        "z": "7a204b0920df63ed",
        "name": "ui control",
        "x": 420,
        "y": 1060,
        "wires": [
            [
                "95f33529e27715a2",
                "da5ad17bd49b15fd",
                "12bbb99508dbc1c4",
                "191ec7ea2b14f1e3"
            ]
        ]
    },
    {
        "id": "95f33529e27715a2",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 980,
        "wires": []
    },
    {
        "id": "c16a57a920620e51",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "",
        "func": "msg.payload = { tab:\"CFG-Main\"}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 180,
        "y": 1060,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "e069987f6a76a87f",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "y": 1320,
        "wires": [
            [
                "a8c8266b58cb87d8"
            ]
        ]
    },
    {
        "id": "a8c8266b58cb87d8",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 6",
        "func": "msg.payload = { \n    group: { \n        hide: [\"Зважування_Склад-насіння\", \"Зважування_Замовлення\", \"Зважування_Link\"],\n        show: [\"Зважування_Замовлення-text\", \"Зважування_Склад-насіння-текст\", \"Зважування_Склад-виробництва-насіння\", \"Зважування_Час\", \"Зважування_Склад-насіння\", \"Зважування_Пункт-призначення\", \"Зважування_INFO\", \"Зважування_Замовлення-обрати\", \"Зважування_На-головну\", \"Зважування_Вага\", \"Зважування_Зберегти\"]\n    } \n}\n\n//[\"Зважування_Склад-виробництва-насіння\", \"Зважування_Склад-виробництва-насіння-2\", \"Зважування_Час\", \"Зважування_Склад-насіння\", \"Зважування_Пункт-призначення\", \"Зважування_INFO\", \"Зважування_Замовлення\", \"Зважування_На-головну\", \"Зважування_Вага\", \"Зважування_Зберегти\"],\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 1320,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "b51e284e6c8e37ea",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "dc1a5f20f54fd0b8",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "Склад-виробництва-насіння",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-left",
        "className": "",
        "x": 580,
        "y": 140,
        "wires": []
    },
    {
        "id": "c4e5a8dcaf84f20a",
        "type": "link in",
        "z": "7a204b0920df63ed",
        "name": "Склад-виробництва-насіння",
        "links": [
            "e92879fadfd7a038"
        ],
        "x": 55,
        "y": 180,
        "wires": [
            [
                "26bce8db5618fa7e",
                "a848161691533b24"
            ]
        ]
    },
    {
        "id": "194a6a5f850ac3e3",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "78c64c2b02b15f43",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Обраний:",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 1060,
        "y": 320,
        "wires": []
    },
    {
        "id": "e6db1c8de15ef401",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "text",
        "func": "msg.payload = msg.payload.WHouseName\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 320,
        "wires": [
            [
                "194a6a5f850ac3e3"
            ]
        ]
    },
    {
        "id": "f8324010af8f5742",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "hide/show DropDown",
        "func": "msg.payload = { \n    \"group\": { \n        \"hide\": [\"Зважування_Склад-насіння-текст\"], \n        \"show\": [\"Зважування_Склад-насіння\"] \n    } \n}\nflow.set(\"sklad\", null);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 440,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "98c7e1dff9d2eefd",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "hide/show DropDown",
        "func": "msg.payload = { \n    \"group\": { \n        \"hide\": [\"Зважування_Склад-насіння\"], \n        \"show\": [\"Зважування_Склад-насіння-текст\"] \n    } \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 420,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "c7348b3934deb4c1",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "text",
        "func": "msg.payload = msg.payload.optionVirtual\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 560,
        "wires": [
            [
                "40e0abc6fcc25324"
            ]
        ]
    },
    {
        "id": "40e0abc6fcc25324",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "66090daa3c0909a6",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Обране:",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 1000,
        "y": 560,
        "wires": []
    },
    {
        "id": "1c9decf618bc886c",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "hide/show DropDown",
        "func": "msg.payload = { \n    \"group\": { \n        \"hide\": [\"Зважування_Замовлення-text\"], \n        \"show\": [\"Зважування_Замовлення\"] \n    } \n}\nflow.set(\"order\", null);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 700,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "129feb8c14eb46e4",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "hide/show DropDown",
        "func": "msg.payload = {\n    \"group\": {\n        \"hide\": [\"Зважування_Замовлення\"],\n        \"show\": [\"Зважування_Замовлення-text\"]\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 700,
        "wires": [
            [
                "7766c02bee02101d"
            ]
        ]
    },
    {
        "id": "55793104f3baf01b",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "set ",
        "func": "\n\n\nflow.set(\"sklad\", msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1130,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "501d97169fc0ce97",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "set ",
        "func": "flow.set(\"order\", msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1210,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "26bce8db5618fa7e",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "set ",
        "func": "if (msg.payload == \"\"){\n    flow.set(\"main_sklad\",null);\n}else{\n    flow.set(\"main_sklad\", msg.payload);\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "2bfd915a4cbeedf9",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "init var",
        "func": "flow.set(\"main_sklad\", null);\nflow.set(\"sklad\", null);\nflow.set(\"order\", null);\nflow.set(\"plomba\", null);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1400,
        "wires": [
            []
        ]
    },
    {
        "id": "713f9317a4b0f668",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "y": 1400,
        "wires": [
            [
                "2bfd915a4cbeedf9"
            ]
        ]
    },
    {
        "id": "aee6082c7d289677",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "main_sklad",
        "payloadType": "flow",
        "x": 140,
        "y": 1560,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "87400fbf97e25e7f",
        "type": "inject",
        "z": "7a204b0920df63ed",
        "name": "timer",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "0.5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 110,
        "y": 840,
        "wires": [
            [
                "27130c545e0ff7f7"
            ]
        ]
    },
    {
        "id": "27130c545e0ff7f7",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "enb save",
        "func": "var main_sklad = flow.get(\"main_sklad\");\nvar sklad = flow.get(\"sklad\");\nvar order = flow.get(\"order\");\nvar weight = flow.get(\"weight\");\n\nif (main_sklad && sklad && order && (weight > 50)){\n    msg.enabled = true;\n}else{\n    msg.enabled = false;\n}\n\nmsg.linkEvent = \"true\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 120,
        "y": 880,
        "wires": [
            [
                "11bb8ed3c99a7ad2"
            ]
        ]
    },
    {
        "id": "a5cba42270c6fc94",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 370,
        "y": 1580,
        "wires": []
    },
    {
        "id": "74e87916204df5ae",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "sklad",
        "payloadType": "flow",
        "x": 120,
        "y": 1600,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "fc203d178aef4891",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "order",
        "payloadType": "flow",
        "x": 120,
        "y": 1640,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "97f7843bad7452a7",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "get all data",
        "func": "//msg.linkEvent = \"true\"\nif (msg.linkEvent == null){\n    var main_sklad = flow.get(\"main_sklad\");\n    var sklad = flow.get(\"sklad\");\n    var order = flow.get(\"order\");\n    var weight = flow.get(\"weight\");\n    //var plomba = flow.get(\"plomba\")\n\n    msg.payload = { main_sklad, sklad, weight }\n    msg.info = { main_sklad, sklad, weight }\n    flow.set(\"all\", msg.payload)\n    msg.payload = \"open\"\n\n\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 710,
        "y": 880,
        "wires": [
            [
                "0872feaccb095392",
                "2e4b600dee25932b",
                "bd8e7927b244a788"
            ]
        ]
    },
    {
        "id": "a5060de1a0fb8592",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Запит 1",
        "func": "//Куінтус, нас., 1 р, 2021\nmsg.payload = {\n    \"metadataName\": \"seedstaskordersnew\",\n    \"count\": 1,\n    \"data\": [{\n        \"DocumentNumber\": \"000000000064\",\n        \"DocumentDate\": \"2022-02-01T00:00:00\",\n        \"PartyName\": \"10000-100622-0911\",\n        \"Note\": \"Тернопіль, Схема 2\",\n        \"NomenclatureName\": \"Нас. оз. пш. Мулан\",\n        \"NomenclatureCode\": \"Ц0000056426\",\n        \"NomenclatureCharacteristics\": \"Мулан, нас., 1 р, 2019\",\n        \"Disinfectant1\": \"Вайбранс Інтеграл\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Цензор XL\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Вітазим К\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"МРІЯ НАСІННЄВИЙ ЗАВОД, ТОВ (Хоростків)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    },\n    {\n        \"DocumentNumber\": \"000000000020\",\n        \"DocumentDate\": \"2022-02-01T00:00:00\",\n        \"PartyName\": \"20000-200222-0222\",\n        \"Note\": \"Тернопіль, Схема 3\",\n        \"NomenclatureName\": \"Нас. оз. пш. Тіфун\",\n        \"NomenclatureCode\": \"Ц0000056439\",\n        \"NomenclatureCharacteristics\": \"Куінтус, нас., 2 р, 2021\",\n        \"Disinfectant1\": \"Вайбранс Інтеграл\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Цензор XL\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Яра Віта Рексолін АВС Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Вітазим К\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"ТІФУН НАСІННЄВИЙ ЗАВОД, ТОВ (Мангуш)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    },\n    {\n        \"DocumentNumber\": \"0000000000350\",\n        \"DocumentDate\": \"2022-04-06T00:00:00\",\n        \"PartyName\": \"80000-200888-0888\",\n        \"Note\": \"Суми, Схема 5\",\n        \"NomenclatureName\": \"Нас. оз. пш. Солін\",\n        \"NomenclatureCode\": \"Ц0000056439\",\n        \"NomenclatureCharacteristics\": \"Кактус, нас., 3 р, 2022\",\n        \"Disinfectant1\": \"Вайсберг\",\n        \"DisinfectantCode1\": \"Ц0000100594\",\n        \"Disinfectant2\": \"Захист 10\",\n        \"DisinfectantCode2\": \"Ц0000102126\",\n        \"Disinfectant3\": \"Фульвогумін\",\n        \"DisinfectantCode3\": \"Ц0000100669\",\n        \"Disinfectant4\": \"Кович У\",\n        \"DisinfectantCode4\": \"Ц0000085308\",\n        \"WHouseName\": \"Солін НАСІННЄВИЙ ЗАВОД, ТОВ (Солін)\",\n        \"WHouseCode\": \"ЦК0007135\",\n        \"BarcodeCode\": \"430\",\n        \"MassOfThousands\": \"0.080\"\n    },\n        {\n            \"DocumentNumber\": \"000000000099\",\n            \"DocumentDate\": \"2022-02-01T00:00:00\",\n            \"PartyName\": \"10000-100622-0911\",\n            \"Note\": \"Ужгород, Схема '2'\",\n            \"NomenclatureName\": \"Нас. оз. пш. Тімбер\",\n            \"NomenclatureCode\": \"Ц0000056426\",\n            \"NomenclatureCharacteristics\": \"Тімбер, нас., 2 р, 2020\",\n            \"Disinfectant1\": \"Інтеграл\",\n            \"DisinfectantCode1\": \"Ц0000100594\",\n            \"Disinfectant2\": \"Цілібур\",\n            \"DisinfectantCode2\": \"Ц0000102126\",\n            \"Disinfectant3\": \"Стронг\",\n            \"DisinfectantCode3\": \"Ц0000100669\",\n            \"Disinfectant4\": \"Мітозим\",\n            \"DisinfectantCode4\": \"Ц0000085308\",\n            \"WHouseName\": \"Капітул НАСІННЄВИЙ ЗАВОД, ТОВ (Ужгород)\",\n            \"WHouseCode\": \"ЦК0007135\",\n            \"BarcodeCode\": \"430\",\n            \"MassOfThousands\": \"0.080\"\n        }\n    ]\n}\n\n\nflow.set(\"main_orders\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "220ff70d6dfd12d2",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Запит 2",
        "func": "msg.payload = {\n    \"metadataName\": \"seedswarehouses\",\n    \"count\": 2,\n    \"data\": [{\n        \"Warehouse\": \"Склад виробництва насіння (м.Хоростків)\",\n        \"WarehouseCode\": \"000000000064\"\n    }, {\n        \"Warehouse\": \"Склад виробництва насіння (с.Батятичі)\",\n        \"WarehouseCode\": \"000000000065\"\n    }\n    ]\n}\nflow.set(\"main_sklad\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "efad14fe538cb19f",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "y": 2060,
        "wires": [
            [
                "a5060de1a0fb8592"
            ]
        ]
    },
    {
        "id": "296384c424a6ecbf",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "y": 2100,
        "wires": [
            [
                "220ff70d6dfd12d2"
            ]
        ]
    },
    {
        "id": "da5ad17bd49b15fd",
        "type": "switch",
        "z": "7a204b0920df63ed",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "connect",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 590,
        "y": 1120,
        "wires": [
            [
                "a8c8266b58cb87d8"
            ]
        ]
    },
    {
        "id": "531a56770354c078",
        "type": "ui_template",
        "z": "7a204b0920df63ed",
        "group": "c1f45491b04defce",
        "name": "",
        "order": 1,
        "width": 0,
        "height": 0,
        "format": "<style>\n    .masonry-container {\n        width: 1200px;\n    }\n</style>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 340,
        "y": 1480,
        "wires": [
            []
        ]
    },
    {
        "id": "55be90fc4cc719aa",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "y": 1480,
        "wires": [
            [
                "531a56770354c078"
            ]
        ]
    },
    {
        "id": "a848161691533b24",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 18",
        "func": "msg.payload = msg.payload.Warehouse\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 140,
        "wires": [
            [
                "b51e284e6c8e37ea"
            ]
        ]
    },
    {
        "id": "0f7aa388c468727f",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "onceDelay": "0.5",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 120,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "1af8c773b1a0cecb",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "enb save",
        "func": "msg.enabled = false;\nmsg.linkEvent = \"true\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 740,
        "wires": [
            [
                "11bb8ed3c99a7ad2"
            ]
        ]
    },
    {
        "id": "ac63787e68ae022a",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "Потрібно обрати",
        "payloadType": "str",
        "x": 350,
        "y": 100,
        "wires": [
            [
                "b51e284e6c8e37ea"
            ]
        ]
    },
    {
        "id": "b4a2cdecb662f7d1",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "Потрібно обрати",
        "payloadType": "str",
        "x": 850,
        "y": 280,
        "wires": [
            [
                "194a6a5f850ac3e3"
            ]
        ]
    },
    {
        "id": "e6ad2e67d395dd1c",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "Потрібно обрати",
        "payloadType": "str",
        "x": 790,
        "y": 540,
        "wires": [
            [
                "40e0abc6fcc25324"
            ]
        ]
    },
    {
        "id": "502765df4aba02ec",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "false",
        "payloadType": "bool",
        "x": 90,
        "y": 220,
        "wires": [
            [
                "26bce8db5618fa7e"
            ]
        ]
    },
    {
        "id": "d627290e8cca12b5",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "false",
        "payloadType": "bool",
        "x": 970,
        "y": 360,
        "wires": [
            [
                "55793104f3baf01b"
            ]
        ]
    },
    {
        "id": "8328010ed9675371",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "false",
        "payloadType": "bool",
        "x": 1030,
        "y": 640,
        "wires": [
            [
                "501d97169fc0ce97"
            ]
        ]
    },
    {
        "id": "3e6462e04088c6d2",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "ser/reset order",
        "func": "var newData = msg.payload;\nvar oldData = flow.get(\"sklad\");\nif (newData !== oldData){\n    msg.payload = \"Оновіть замовлення\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 440,
        "wires": [
            [
                "40e0abc6fcc25324",
                "cc0570d7d1b232e8"
            ]
        ]
    },
    {
        "id": "2a88e954bf32d1a3",
        "type": "delay",
        "z": "7a204b0920df63ed",
        "name": "",
        "pauseType": "delay",
        "timeout": "300",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 950,
        "y": 400,
        "wires": [
            [
                "55793104f3baf01b"
            ]
        ]
    },
    {
        "id": "cc0570d7d1b232e8",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 19",
        "func": "msg.payload = false\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1150,
        "y": 440,
        "wires": [
            [
                "501d97169fc0ce97"
            ]
        ]
    },
    {
        "id": "6d014aa659099725",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Отримання даних зовні",
        "info": "",
        "x": 150,
        "y": 2020,
        "wires": []
    },
    {
        "id": "51b3a2eb811e2902",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Вага",
        "func": "function getRandomFloat(min, max, decimals) {\n  const str = (Math.random() * (max - min) + min).toFixed(decimals);\n\n  return parseFloat(str);\n}\n\nmsg.payload = getRandomFloat(1.5, 300.5, 1); \n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 1920,
        "wires": [
            [
                "cdf0297fd51ca919",
                "17b25e05bd26aac8"
            ]
        ]
    },
    {
        "id": "35eadcfa20fdab33",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "repeat": "3",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 1920,
        "wires": [
            [
                "51b3a2eb811e2902"
            ]
        ]
    },
    {
        "id": "cdf0297fd51ca919",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "c1f45491b04defce",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "Вага",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-left",
        "className": "",
        "x": 430,
        "y": 1920,
        "wires": []
    },
    {
        "id": "17b25e05bd26aac8",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "set ",
        "func": "flow.set(\"weight\", msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 430,
        "y": 1960,
        "wires": [
            []
        ]
    },
    {
        "id": "85811ba6a02c5863",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "plomba",
        "payloadType": "flow",
        "x": 130,
        "y": 1680,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "0872feaccb095392",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "debug 24",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 880,
        "wires": []
    },
    {
        "id": "8811a5f2f82c7ba0",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "NumberBox",
        "payloadType": "flow",
        "x": 140,
        "y": 1720,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "1db3a61bc8a29606",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "debug 29",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1520,
        "y": 1500,
        "wires": []
    },
    {
        "id": "9aa910a67b429989",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Сторінка пломби",
        "info": "",
        "x": 1120,
        "y": 1420,
        "wires": []
    },
    {
        "id": "edef263b1a8ce74e",
        "type": "ui_template",
        "z": "7a204b0920df63ed",
        "group": "7396c88169167354",
        "name": "window redirect",
        "order": 3,
        "width": 0,
        "height": 0,
        "format": "<!-- <script>\n(function(scope) {\n    scope.$watch('msg.payload', function(data) {\n        if(data == \"open\") {\n            window.location.href = \"http://192.168.0.105:1880/getDate\";\n        }\n        \n    });\n})(scope);\n</script> -->\n\n\n<script>\n    (function(scope) {\n    scope.$watch('msg.payload', function(data) {\n        if (data == \"open\") {\n          //window.open(\"https://www.nodered.org\");\n          window.location.href = \"/getLabel\";\n        } \n        if (data == \"GitHub\") {\n          //window.open(\"https://github.com/node-red\");\n          window.location.href = \"https://github.com/node-red\";\n        } \n    });\n})(scope);\n</script>",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "resendOnRefresh": false,
        "templateScope": "local",
        "className": "",
        "x": 1280,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "1514936ceabbe176",
        "type": "delay",
        "z": "7a204b0920df63ed",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1170,
        "y": 1240,
        "wires": [
            []
        ]
    },
    {
        "id": "aa48f08e5eea417b",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 40",
        "func": "msg.payload = \"open\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 1240,
        "wires": [
            [
                "edef263b1a8ce74e"
            ]
        ]
    },
    {
        "id": "12bbb99508dbc1c4",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "CurrentWindow",
        "func": "if (msg.payload == \"change\"){\n    flow.set(\"CurrentWindow\", msg)\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "daebb3ecbed10bea",
        "type": "inject",
        "z": "7a204b0920df63ed",
        "name": "CurrentWindow",
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
        "payload": "CurrentWindow",
        "payloadType": "flow",
        "x": 140,
        "y": 1760,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "191ec7ea2b14f1e3",
        "type": "link out",
        "z": "7a204b0920df63ed",
        "name": "link out 2",
        "mode": "link",
        "links": [
            "3342777bad4587fa"
        ],
        "x": 595,
        "y": 1020,
        "wires": []
    },
    {
        "id": "cfa4e126eaad31a3",
        "type": "link in",
        "z": "7a204b0920df63ed",
        "name": "Enter для Зважування",
        "links": [
            "e99b64e16475459d"
        ],
        "x": 765,
        "y": 1660,
        "wires": [
            [
                "bd25b97292a31e85"
            ]
        ]
    },
    {
        "id": "bd25b97292a31e85",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "Check var",
        "func": "var all = flow.get(\"all\")\n\nvar main_sklad = all.main_sklad;\nvar sklad = all.sklad;\nvar order = all.sklad.optionVirtual//flow.get(\"order\");//optionVirtual\nvar weight = all.weight;\nvar plomba = flow.get(\"plomba\")\n\nif (plomba && main_sklad && sklad && order && (weight > 50)){\n\n    msg.payload = { main_sklad, sklad, weight, plomba}\n    msg.info = { main_sklad, sklad, weight, plomba}\n    return [msg, null];\n} else if (!plomba && main_sklad && sklad && order && (weight > 50)){\n    msg.payload = \"Пломба не заповнена\"\n    return [null, msg];\n}\n\n\nreturn [msg, null];",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 1660,
        "wires": [
            [
                "cddb747c946f377a",
                "22b9b6028030f54c",
                "1514936ceabbe176",
                "ae99f60652efa374"
            ],
            [
                "2a90d14480d45458"
            ]
        ]
    },
    {
        "id": "87025187263a1295",
        "type": "ui_text_input",
        "z": "7a204b0920df63ed",
        "name": "Пломба",
        "label": "Пломба",
        "tooltip": "",
        "group": "2927b1677483d4a7",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "mode": "text",
        "delay": "200",
        "topic": "topic",
        "sendOnBlur": true,
        "className": "",
        "topicType": "msg",
        "x": 1180,
        "y": 1500,
        "wires": [
            [
                "086692f38fe3819e"
            ]
        ]
    },
    {
        "id": "0d8a1135941efde8",
        "type": "link in",
        "z": "7a204b0920df63ed",
        "name": "link in 4",
        "links": [
            "40d164af678b88b6"
        ],
        "x": 965,
        "y": 1540,
        "wires": [
            [
                "87025187263a1295",
                "35120ff5e8fe08ba"
            ]
        ]
    },
    {
        "id": "086692f38fe3819e",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 44",
        "func": "if(msg.payload == \"\"){\n    flow.set(\"plomba\", null)\n}else{\n    flow.set(\"plomba\", msg.payload)\n}\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 1500,
        "wires": [
            [
                "1db3a61bc8a29606"
            ]
        ]
    },
    {
        "id": "35120ff5e8fe08ba",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "debug 43",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1260,
        "y": 1580,
        "wires": []
    },
    {
        "id": "22b9b6028030f54c",
        "type": "link out",
        "z": "7a204b0920df63ed",
        "name": "Друк",
        "mode": "link",
        "links": [
            "ee1c61f6c3929a85",
            "1282afc20df153fe"
        ],
        "x": 1165,
        "y": 1660,
        "wires": []
    },
    {
        "id": "2e4b600dee25932b",
        "type": "link out",
        "z": "7a204b0920df63ed",
        "name": "Clear plomba",
        "mode": "link",
        "links": [
            "1282afc20df153fe"
        ],
        "x": 955,
        "y": 960,
        "wires": []
    },
    {
        "id": "1282afc20df153fe",
        "type": "link in",
        "z": "7a204b0920df63ed",
        "name": "link in 5",
        "links": [
            "2e4b600dee25932b",
            "22b9b6028030f54c"
        ],
        "x": 765,
        "y": 1500,
        "wires": [
            [
                "0e5ae93a8e415269",
                "62cdf0c52850b379",
                "bada28a9fd8be2df",
                "05897679937ec25a",
                "4ad66a9e40fcabc3",
                "9e2315d850e822f7"
            ]
        ]
    },
    {
        "id": "0e5ae93a8e415269",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "clear",
        "func": "msg.payload = \"\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 1500,
        "wires": [
            [
                "87025187263a1295"
            ]
        ]
    },
    {
        "id": "a975dfac3f3cb716",
        "type": "ui_toast",
        "z": "7a204b0920df63ed",
        "position": "top left",
        "displayTime": "3",
        "highlight": "",
        "sendall": true,
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "raw": false,
        "className": "",
        "topic": "Відправка на друк",
        "name": "",
        "x": 1430,
        "y": 1700,
        "wires": []
    },
    {
        "id": "cddb747c946f377a",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 45",
        "func": "msg.payload = \"Триває друк\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1230,
        "y": 1700,
        "wires": [
            [
                "a975dfac3f3cb716"
            ]
        ]
    },
    {
        "id": "ed28ca07658bbbd5",
        "type": "inject",
        "z": "7a204b0920df63ed",
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
        "payload": "all",
        "payloadType": "flow",
        "x": 110,
        "y": 1800,
        "wires": [
            [
                "a5cba42270c6fc94"
            ]
        ]
    },
    {
        "id": "9025b45a5645caf4",
        "type": "ui_ui_control",
        "z": "7a204b0920df63ed",
        "name": "ui control",
        "x": 1180,
        "y": 920,
        "wires": [
            []
        ]
    },
    {
        "id": "bd8e7927b244a788",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "",
        "func": "msg.payload = { tab:\"Пломба\"}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1040,
        "y": 920,
        "wires": [
            [
                "9025b45a5645caf4"
            ]
        ]
    },
    {
        "id": "9a6e869cf410e717",
        "type": "ui_toast",
        "z": "7a204b0920df63ed",
        "position": "top left",
        "displayTime": "3",
        "highlight": "red",
        "sendall": true,
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "raw": false,
        "className": "",
        "topic": "Помилка",
        "name": "",
        "x": 1430,
        "y": 1740,
        "wires": []
    },
    {
        "id": "2a90d14480d45458",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 47",
        "func": "\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1230,
        "y": 1740,
        "wires": [
            [
                "9a6e869cf410e717"
            ]
        ]
    },
    {
        "id": "20fb455814bb8740",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "",
        "func": "\nmsg.payload = { tab: \"Зважування\" }\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1320,
        "y": 1620,
        "wires": [
            [
                "564d158d64bf69bf"
            ]
        ]
    },
    {
        "id": "564d158d64bf69bf",
        "type": "ui_ui_control",
        "z": "7a204b0920df63ed",
        "name": "ui control",
        "x": 1460,
        "y": 1620,
        "wires": [
            []
        ]
    },
    {
        "id": "ae99f60652efa374",
        "type": "delay",
        "z": "7a204b0920df63ed",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1170,
        "y": 1620,
        "wires": [
            [
                "20fb455814bb8740"
            ]
        ]
    },
    {
        "id": "951fe5a6845130a2",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Отримання ваги",
        "info": "",
        "x": 120,
        "y": 1880,
        "wires": []
    },
    {
        "id": "9c1392c1bd7f4337",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Для відладки",
        "info": "",
        "x": 110,
        "y": 1520,
        "wires": []
    },
    {
        "id": "6340d1464ac02653",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Для перевірки ",
        "info": "",
        "x": 1220,
        "y": 1180,
        "wires": []
    },
    {
        "id": "393510fdd590d9d7",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Стилі для сторінки",
        "info": "",
        "x": 130,
        "y": 1440,
        "wires": []
    },
    {
        "id": "e0b003d37b3c07af",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Ініціалізація",
        "info": "",
        "x": 110,
        "y": 1360,
        "wires": []
    },
    {
        "id": "b070f25f4e907435",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Сховати/Показати групи на сторінці",
        "info": "",
        "x": 190,
        "y": 1280,
        "wires": []
    },
    {
        "id": "66a1a48f35c40419",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Перехід на сторінку 1",
        "info": "",
        "x": 160,
        "y": 980,
        "wires": []
    },
    {
        "id": "aab36f99dfd8d873",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Дозвіл на перехід сторінку 3",
        "info": "",
        "x": 120,
        "y": 800,
        "wires": []
    },
    {
        "id": "ea6933d77c864aa3",
        "type": "comment",
        "z": "7a204b0920df63ed",
        "name": "Дані з 1 сторінки",
        "info": "",
        "x": 100,
        "y": 140,
        "wires": []
    },
    {
        "id": "62cdf0c52850b379",
        "type": "debug",
        "z": "7a204b0920df63ed",
        "name": "debug 47",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 1560,
        "wires": []
    },
    {
        "id": "bada28a9fd8be2df",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "1903964e747c6a1c",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Головний склад: ",
        "format": "{{msg.info.main_sklad.Warehouse}}",
        "layout": "row-left",
        "className": "",
        "x": 1250,
        "y": 1780,
        "wires": []
    },
    {
        "id": "05897679937ec25a",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "1903964e747c6a1c",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Склад насіння: ",
        "format": "{{msg.info.sklad.WHouseName}}",
        "layout": "row-left",
        "className": "",
        "x": 1240,
        "y": 1820,
        "wires": []
    },
    {
        "id": "4ad66a9e40fcabc3",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "1903964e747c6a1c",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Вага(кг): ",
        "format": "{{msg.info.weight}}",
        "layout": "row-left",
        "className": "",
        "x": 1220,
        "y": 1900,
        "wires": []
    },
    {
        "id": "c8cc892f4e1b77ab",
        "type": "ui_text",
        "z": "7a204b0920df63ed",
        "group": "1903964e747c6a1c",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Замовлення:  ",
        "format": "{{msg.payload}}",
        "layout": "row-left",
        "className": "",
        "x": 1240,
        "y": 1860,
        "wires": []
    },
    {
        "id": "9e2315d850e822f7",
        "type": "function",
        "z": "7a204b0920df63ed",
        "name": "function 48",
        "func": "msg.payload = msg.info.sklad.DocumentNumber + \", \" + msg.info.sklad.NomenclatureName \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1010,
        "y": 1860,
        "wires": [
            [
                "c8cc892f4e1b77ab"
            ]
        ]
    },
    {
        "id": "fd880cdb89252940",
        "type": "Barcode Generator",
        "z": "656dc0405eaa1150",
        "name": "",
        "data": "payload",
        "dataType": "msg",
        "barcode": "ean13",
        "barcodeType": "barcode",
        "options": "",
        "optionsType": "ui",
        "sendProperty": "payload",
        "props": [
            {
                "p": "includetext",
                "v": "true",
                "vt": "bool"
            },
            {
                "p": "textxalign",
                "v": "center",
                "vt": "str"
            },
            {
                "p": "backgroundcolor",
                "v": "ffffff",
                "vt": "str"
            }
        ],
        "x": 310,
        "y": 380,
        "wires": [
            [
                "83404e61983c6d8a",
                "00528dceab3703eb"
            ]
        ]
    },
    {
        "id": "20bb22beac3e73c4",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "str1",
        "func": "msg.str1 = msg.info.sklad.NomenclatureName; //\"Нас. оз. пш. Мулан\"\nmsg.str2 = msg.info.sklad.NomenclatureCharacteristics; //\"Мулан, нас., ЕН, 2019\"\nmsg.str3 = \"Сорт: \" + msg.info.sklad.NomenclatureCharacteristics.split(',')[0]//\"Сорт: Мулан\"\nmsg.str4 = \"Репродукція: \" + msg.info.sklad.NomenclatureCharacteristics.split(',')[2]//доробити\nmsg.str5 = msg.info.weight + \" кг.\"//\"973 кг\"\n\n\nmsg.str6 = \"Протруйники: \" + (msg.info.sklad.Disinfectant1 ? msg.info.sklad.Disinfectant1 + \", \" : \"\") + (msg.info.sklad.Disinfectant2 ? msg.info.sklad.Disinfectant2 + \", \" : \"\") + (msg.info.sklad.Disinfectant3 ? msg.info.sklad.Disinfectant3 + \", \" : \"\") + (msg.info.sklad.Disinfectant4 ? msg.info.sklad.Disinfectant4 + \", \"  : \"\")\nmsg.str7 = msg.info.plomba//\"L99482284\" // Доробити\nmsg.str8 = \"Примітка: \" + msg.info.sklad.Note\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 460,
        "wires": [
            [
                "f662d67669b39494",
                "817020e355e43375"
            ]
        ]
    },
    {
        "id": "ac89ee6bd54bedf2",
        "type": "pdfmake",
        "z": "656dc0405eaa1150",
        "name": "",
        "outputType": "Buffer",
        "inputProperty": "payload",
        "options": "{}",
        "outputProperty": "payload",
        "x": 600,
        "y": 540,
        "wires": [
            [
                "7637f5bcd3103c8e"
            ]
        ]
    },
    {
        "id": "4a067c46b0278beb",
        "type": "file",
        "z": "656dc0405eaa1150",
        "name": "",
        "filename": "filename",
        "filenameType": "msg",
        "appendNewline": false,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 380,
        "y": 580,
        "wires": [
            [
                "d11eea285ffa28a8",
                "51a0787c1571cc04"
            ]
        ]
    },
    {
        "id": "d11eea285ffa28a8",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 7",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 580,
        "wires": []
    },
    {
        "id": "f662d67669b39494",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 16",
        "func": "var barcode = msg.barcode\nvar str1 = msg.str1\nvar str2 = msg.str2\nvar str3 = msg.str3\nvar str4 = msg.str4\nvar str5 = msg.str5//вес\nvar str6 = msg.str6\nvar str7 = msg.str7\nvar str8 = msg.str8\nvar verticalText = `\n          <svg>\n            <text\n              transform=\"translate(24, 80) rotate(-90)\"\n              font-weight=\"bold\"\n              style=\"font-size: 10px;\"\n            >\n              Дата: ${global.get(\"dateHlobal\")}\n            </text>\n          </svg>\n        `\n\nmsg.payload = {\n    \"content\": [\n        { text: str1, fontSize: 20, bold: true },\n        { text: str2, fontSize: 14, bold: true },\n        str3,\n        str4,\n        {\n          columns: [\n            { text: \"H/B::\", fontSize: 14},\n            { text: str5, fontSize: 16, bold: true }\n          ]\n        },\n        str6,\n        {\n          columns: [\n            { text: \"Номер пломби: \" + str7},\n            { text: \"Маса т.з.:\", margin: [45, 0, 0, 0]}\n          ]\n        },\n        str8,\n        {\n            columns: [\n                {\n                    image: barcode,\n                    width: 200,\n                    height: 100\n                },\n                {\n                    width: 32,\n                    svg: verticalText\n                },\n            ]\n        }\n    ],\n    pageSize: {\n        width: 400,\n        height: 380\n    },\n    pageMargins: [40, 30, 40, 40],\n    \n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 500,
        "wires": [
            [
                "ac89ee6bd54bedf2",
                "817020e355e43375"
            ]
        ]
    },
    {
        "id": "83404e61983c6d8a",
        "type": "jimp-image",
        "z": "656dc0405eaa1150",
        "name": "",
        "data": "payload",
        "dataType": "msg",
        "ret": "b64",
        "parameter1": "",
        "parameter1Type": "msg",
        "parameter2": "",
        "parameter2Type": "msg",
        "parameter3": "",
        "parameter3Type": "msg",
        "parameter4": "",
        "parameter4Type": "msg",
        "parameter5": "",
        "parameter5Type": "msg",
        "parameter6": "",
        "parameter6Type": "msg",
        "parameter7": "",
        "parameter7Type": "msg",
        "parameter8": "",
        "parameter8Type": "msg",
        "sendProperty": "barcode",
        "sendPropertyType": "msg",
        "parameterCount": 0,
        "jimpFunction": "none",
        "selectedJimpFunction": {
            "name": "none",
            "fn": "none",
            "description": "Just loads the image.",
            "parameters": []
        },
        "x": 330,
        "y": 420,
        "wires": [
            [
                "20bb22beac3e73c4"
            ]
        ]
    },
    {
        "id": "79af2ebf76d3c53b",
        "type": "http in",
        "z": "656dc0405eaa1150",
        "name": "",
        "url": "/getLabel",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 860,
        "wires": [
            [
                "7a8bd9b4bb0ce08c"
            ]
        ]
    },
    {
        "id": "ccb4ed78483dae9c",
        "type": "file in",
        "z": "656dc0405eaa1150",
        "name": "",
        "filename": "filename",
        "filenameType": "msg",
        "format": "",
        "allProps": false,
        "x": 500,
        "y": 860,
        "wires": [
            [
                "8931f594d7fc6d99"
            ]
        ]
    },
    {
        "id": "8931f594d7fc6d99",
        "type": "change",
        "z": "656dc0405eaa1150",
        "name": "Set Headers",
        "rules": [
            {
                "t": "set",
                "p": "headers",
                "pt": "msg",
                "to": "{}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "headers.content-type",
                "pt": "msg",
                "to": "application/pdf",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 860,
        "wires": [
            [
                "eb0fb474aac35d5c"
            ]
        ]
    },
    {
        "id": "eb0fb474aac35d5c",
        "type": "http response",
        "z": "656dc0405eaa1150",
        "name": "",
        "x": 870,
        "y": 860,
        "wires": []
    },
    {
        "id": "ee1c61f6c3929a85",
        "type": "link in",
        "z": "656dc0405eaa1150",
        "name": "link in 1",
        "links": [
            "22b9b6028030f54c"
        ],
        "x": 55,
        "y": 280,
        "wires": [
            [
                "3dcf719fb3b412ac",
                "81e06407bdab2c34"
            ]
        ]
    },
    {
        "id": "3dcf719fb3b412ac",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 20",
        "func": "// 1\t«4» - префікс типу штрихкода\n// 2 - 3\tРік виробництва, наприклад «21», «22»\n// 4 - 7\tНомер завдання на виробництво, наприклад «0025»\n// 8 - 12\tПорядковий номер у завданні.Початковий номер(0, якщо початок виробництва по завданню) + виготовлені мішки.\nvar inData = msg.info\n\nconst year = new Date().getFullYear().toString().substring(2,4);\nvar orderNumber = Number(inData.sklad.DocumentNumber);\nif (orderNumber < 100){\n    orderNumber = \"00\" + orderNumber\n} else if (orderNumber > 100 && orderNumber < 1000){\n    orderNumber = \"0\" + orderNumber\n}\n\n//Формуєм номер мішка\nvar dbLog = flow.get(\"DB_log\");\nvar number = 0;\n\n//\n//msg.info.box\n\nfor (let i = 0; i < dbLog.length; i++) {\n    if (inData.sklad.DocumentNumber == dbLog[i].sklad.DocumentNumber){\n        number++;\n    }\n}\n\nvar firstNumber = \"00001\" // номер мішка\nif (!msg.info.box){\n    if (number > 0) {\n        if (number < 10) {\n            firstNumber = \"0000\" + number\n        } else if (number == 10) {\n            firstNumber = \"000\" + number\n        } else if (number > 10 && number < 100) {\n            firstNumber = \"000\" + number\n        } else if (number > 100 && number < 1000) {\n            firstNumber = \"00\" + number\n        } else if (number > 1000 && number < 10000) {\n            firstNumber = \"0\" + number\n        } else if (number > 10000 && number < 100000) {\n            firstNumber = \"\" + number\n        }\n    }\n}else{\n    if (msg.info.box > 0) {\n        if (msg.info.box < 10) {\n            firstNumber = \"0000\" + msg.info.box\n        } else if (msg.info.box == 10) {\n            firstNumber = \"000\" + msg.info.box\n        } else if (msg.info.box > 10 && msg.info.box < 100) {\n            firstNumber = \"000\" + msg.info.box\n        } else if (msg.info.box > 100 && msg.info.box < 1000) {\n            firstNumber = \"00\" + msg.info.box\n        } else if (msg.info.box > 1000 && msg.info.box < 10000) {\n            firstNumber = \"0\" + msg.info.box\n        } else if (msg.info.box > 10000 && msg.info.box < 100000) {\n            firstNumber = \"\" + msg.info.box\n        }\n    }\n}\n\n\n\nvar barcode = 4 + year + orderNumber + firstNumber\nmsg.payload = barcode\nmsg.info.barcode = barcode\n\nmsg.info.barcodePDF = \"/home/pi/barcodeLib/\" + barcode + \"_\" + global.get(\"dateGlobalForPDF\") + \".pdf\"\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 230,
        "y": 280,
        "wires": [
            [
                "fd880cdb89252940",
                "a4789bab58713920",
                "00528dceab3703eb"
            ]
        ]
    },
    {
        "id": "d5efaf3dd368b9ce",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Отримання даних для формування ПДФ",
        "info": "",
        "x": 220,
        "y": 240,
        "wires": []
    },
    {
        "id": "a4789bab58713920",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 21",
        "func": "var mainData = msg.info\nmainData.id = Date.now();\nvar file = \"/home/pi/db_date/db_log.txt\"\nmsg.filename = file;\nmsg.payload = mainData;\n\n//msg.url = global.get(\"sendTo1C\");\nreturn msg;\n\n// global.set(\"printerName\", \"\");\n// global.set(\"sendTo1C\", \"\");\n// global.set(\"getWith1C\", \"\");",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 490,
        "y": 280,
        "wires": [
            [
                "1cc6e5cead3162b2"
            ]
        ]
    },
    {
        "id": "1cc6e5cead3162b2",
        "type": "file",
        "z": "656dc0405eaa1150",
        "name": "",
        "filename": "filename",
        "filenameType": "msg",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "encoding": "utf8",
        "x": 680,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "7637f5bcd3103c8e",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "збереження файла ПДФ",
        "func": "var mainData = msg.info\n//global.set(\"dateGlobalForPDF\", msg.payload.replace(\" \", \"_\"))\nvar file = \"/home/pi/barcodeLib/\" + mainData.barcode + \"_\" + global.get(\"dateGlobalForPDF\") + \".pdf\"\n//msg.filename = file;\nmsg.filename = msg.info.barcodePDF;\n\n//msg.payload = mainData;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 170,
        "y": 580,
        "wires": [
            [
                "4a067c46b0278beb"
            ]
        ]
    },
    {
        "id": "b2f92b160ee1a7d5",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 1040,
        "wires": [
            [
                "27e8a31fcf6ccb66"
            ]
        ]
    },
    {
        "id": "27e8a31fcf6ccb66",
        "type": "exec",
        "z": "656dc0405eaa1150",
        "command": "cat /home/pi/db_date/db_log.txt",
        "addpay": "",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "read DB",
        "x": 160,
        "y": 1100,
        "wires": [
            [
                "1de8577715ed2403"
            ],
            [],
            []
        ]
    },
    {
        "id": "8967cc949f648ac1",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 9",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 1080,
        "wires": []
    },
    {
        "id": "1de8577715ed2403",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 23",
        "func": "var arrayDb = msg.payload.split(\"\\n\");\narrayDb.pop()\n\nfor (let i = 0; i < arrayDb.length; i++) {\n    arrayDb[i] = JSON.parse(arrayDb[i])\n}\n\n\narrayDb.sort(function (a, b) {\n    return a.id - b.id;\n});\n\nflow.set(\"DB_log\", arrayDb);\nmsg.payload = arrayDb;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1080,
        "wires": [
            [
                "8967cc949f648ac1"
            ]
        ]
    },
    {
        "id": "9180bb5ecc384c6c",
        "type": "http request",
        "z": "656dc0405eaa1150",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://192.168.0.100:1880/send",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 850,
        "y": 200,
        "wires": [
            [
                "081697672d185002",
                "32ff8f3e3e5240e7"
            ]
        ]
    },
    {
        "id": "081697672d185002",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 10",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 160,
        "wires": []
    },
    {
        "id": "32ff8f3e3e5240e7",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 25",
        "func": "var mainData = msg.info\nvar statusCode = msg.statusCode\nif (mainData && statusCode == 200){\n    var file = \"/home/pi/db_date/db_log_send_1C.txt\"\n    msg.filename = file;\n    msg.payload = mainData.id;\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1010,
        "y": 200,
        "wires": [
            [
                "ded634bec11e4114",
                "6d55bb4957e36748"
            ]
        ]
    },
    {
        "id": "ded634bec11e4114",
        "type": "file",
        "z": "656dc0405eaa1150",
        "name": "",
        "filename": "filename",
        "filenameType": "msg",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "encoding": "utf8",
        "x": 1180,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "aff90f87356e71cb",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 750,
        "y": 1040,
        "wires": [
            [
                "12d06da0d6a193ac"
            ]
        ]
    },
    {
        "id": "12d06da0d6a193ac",
        "type": "exec",
        "z": "656dc0405eaa1150",
        "command": "cat /home/pi/db_date/db_log_send_1C.txt",
        "addpay": "",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "read DB 1C",
        "x": 730,
        "y": 1100,
        "wires": [
            [
                "93dea6db7aa2c009"
            ],
            [],
            []
        ]
    },
    {
        "id": "d83935310c6a785d",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 11",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1080,
        "y": 1080,
        "wires": []
    },
    {
        "id": "93dea6db7aa2c009",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 26",
        "func": "var arrayDb = msg.payload.split(\"\\n\");\narrayDb.pop()\n\nfor (let i = 0; i < arrayDb.length; i++) {\n    arrayDb[i] = Number(arrayDb[i])\n}\n\n\n\nflow.set(\"DB_log_1C\", arrayDb);\nmsg.payload = arrayDb;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 890,
        "y": 1100,
        "wires": [
            [
                "d83935310c6a785d"
            ]
        ]
    },
    {
        "id": "a7871f7f9d9c65dd",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "y": 1460,
        "wires": [
            [
                "c189a10942439f23"
            ]
        ]
    },
    {
        "id": "c189a10942439f23",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 27",
        "func": "var dateLog = flow.get(\"DB_log\");\nvar dateLog1C = flow.get(\"DB_log_1C\");\nvar mustSend = []\n\nfor (let i = 0; i < dateLog.length; i++) {\n    //const array1 = [1, 2, 3];\n    //console.log(array1.includes(2));\n    // expected output: true\n    if (dateLog1C.includes(dateLog[i].id)){\n        \n    }else{\n        mustSend.push(dateLog[i])\n    }\n    \n    \n}\n\n//msg.payload = mustSend;\nif (mustSend.length){\n    msg.info = mustSend[0];\n    msg.payload = mustSend[0];\n    msg.requestTimeout = 15 * 1000;\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1460,
        "wires": [
            [
                "a28f751a9e1189b9",
                "1c0521b1088c5a2a"
            ]
        ]
    },
    {
        "id": "a28f751a9e1189b9",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 12",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 1420,
        "wires": []
    },
    {
        "id": "5eda2446c1716068",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "payload": "DB_log",
        "payloadType": "flow",
        "x": 110,
        "y": 1500,
        "wires": [
            [
                "4343bee4251bf336"
            ]
        ]
    },
    {
        "id": "b15187ccebe41888",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "payload": "DB_log_1C",
        "payloadType": "flow",
        "x": 120,
        "y": 1540,
        "wires": [
            [
                "4343bee4251bf336"
            ]
        ]
    },
    {
        "id": "4343bee4251bf336",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 13",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 300,
        "y": 1500,
        "wires": []
    },
    {
        "id": "1c0521b1088c5a2a",
        "type": "http request",
        "z": "656dc0405eaa1150",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://192.168.0.105:1880/send",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 530,
        "y": 1460,
        "wires": [
            [
                "0aed4543478ce1c6",
                "63390c03baaa704f"
            ]
        ]
    },
    {
        "id": "0aed4543478ce1c6",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 14",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 1420,
        "wires": []
    },
    {
        "id": "63390c03baaa704f",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 28",
        "func": "var mainData = msg.info\nvar statusCode = msg.statusCode\nif (mainData && statusCode == 200){\n    var file = \"/home/pi/db_date/db_log_send_1C.txt\"\n    msg.filename = file;\n    msg.payload = mainData.id;\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 1460,
        "wires": [
            [
                "5eb7e05b75c8dcbe",
                "ce78b6073342523c"
            ]
        ]
    },
    {
        "id": "5eb7e05b75c8dcbe",
        "type": "file",
        "z": "656dc0405eaa1150",
        "name": "",
        "filename": "filename",
        "filenameType": "msg",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "encoding": "utf8",
        "x": 900,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "1ed20efcbfc0fa5f",
        "type": "http request",
        "z": "656dc0405eaa1150",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://192.168.0.102:1880/send",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 330,
        "y": 1640,
        "wires": [
            [
                "ae584c790cd93b92"
            ]
        ]
    },
    {
        "id": "2b369fa7991d872b",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "y": 1640,
        "wires": [
            [
                "1ed20efcbfc0fa5f"
            ]
        ]
    },
    {
        "id": "ae584c790cd93b92",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 15",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 1640,
        "wires": []
    },
    {
        "id": "6d55bb4957e36748",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 17",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1200,
        "y": 240,
        "wires": []
    },
    {
        "id": "81e06407bdab2c34",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 18",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 140,
        "y": 320,
        "wires": []
    },
    {
        "id": "7a8bd9b4bb0ce08c",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 30",
        "func": "msg.filename = flow.get(\"lastFilePDf\")\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 860,
        "wires": [
            [
                "ccb4ed78483dae9c"
            ]
        ]
    },
    {
        "id": "31cce65903d85481",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "repeat": "0.5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 1220,
        "wires": [
            [
                "676718f5e3b171d9"
            ]
        ]
    },
    {
        "id": "676718f5e3b171d9",
        "type": "exec",
        "z": "656dc0405eaa1150",
        "command": "ls -1t /home/pi/barcodeLib | head -n 1",
        "addpay": "",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "last file",
        "x": 160,
        "y": 1280,
        "wires": [
            [
                "ab3656b2e79e9e72"
            ],
            [],
            []
        ]
    },
    {
        "id": "74dad85f3d42bc7e",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 19",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 600,
        "y": 1260,
        "wires": []
    },
    {
        "id": "ab3656b2e79e9e72",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 31",
        "func": "flow.set(\"lastFilePDf\", \"/home/pi/barcodeLib/\" + msg.payload.replace(\"\\n\", \"\"));\nmsg.payload = \"/home/pi/barcodeLib/\" + msg.payload.replace(\"\\n\", \"\");\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 1260,
        "wires": [
            [
                "74dad85f3d42bc7e"
            ]
        ]
    },
    {
        "id": "77b2f5af4a88eb5e",
        "type": "serial in",
        "z": "656dc0405eaa1150",
        "name": "",
        "serial": "77a5462ed379721c",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "a4acf03eca23d4b7",
                "0b75f388e4b560af"
            ]
        ]
    },
    {
        "id": "a4acf03eca23d4b7",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "function 32",
        "func": "//var num = msg.payload.replace(\"\\n\", \"\") \nmsg.plomba = msg.payload\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 140,
        "wires": [
            [
                "40d164af678b88b6"
            ]
        ]
    },
    {
        "id": "51a0787c1571cc04",
        "type": "function",
        "z": "656dc0405eaa1150",
        "name": "друк файла",
        "func": "var file = msg.filename\n//var printerName = global.get(\"printerName\");\n//msg.payload = `lp -d ${printerName} ` + file; \nmsg.payload = \"lp -d ZT410_2 \" + file; \nreturn msg;\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 700,
        "wires": [
            [
                "40726d8380e2bb21"
            ]
        ]
    },
    {
        "id": "40726d8380e2bb21",
        "type": "exec",
        "z": "656dc0405eaa1150",
        "command": "",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "print",
        "x": 470,
        "y": 700,
        "wires": [
            [
                "8d8833e2a9f46398"
            ],
            [],
            []
        ]
    },
    {
        "id": "8d8833e2a9f46398",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 20",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 700,
        "wires": []
    },
    {
        "id": "00528dceab3703eb",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 22",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 440,
        "y": 340,
        "wires": []
    },
    {
        "id": "40d164af678b88b6",
        "type": "link out",
        "z": "656dc0405eaa1150",
        "name": "Пломба вихід",
        "mode": "link",
        "links": [
            "0d8a1135941efde8"
        ],
        "x": 395,
        "y": 140,
        "wires": []
    },
    {
        "id": "817020e355e43375",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 25",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 460,
        "wires": []
    },
    {
        "id": "deccdd6e2283cf57",
        "type": "inject",
        "z": "656dc0405eaa1150",
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
        "payload": "LD123LD123",
        "payloadType": "str",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "a4acf03eca23d4b7"
            ]
        ]
    },
    {
        "id": "0b75f388e4b560af",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 30",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 300,
        "y": 100,
        "wires": []
    },
    {
        "id": "ce78b6073342523c",
        "type": "debug",
        "z": "656dc0405eaa1150",
        "name": "debug 45",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 920,
        "y": 1420,
        "wires": []
    },
    {
        "id": "7126fa235e51d4b7",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Відправка у випадку відсутності зв'язку",
        "info": "",
        "x": 180,
        "y": 1420,
        "wires": []
    },
    {
        "id": "d92dcde774c47702",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "відправка в 1С",
        "info": "",
        "x": 820,
        "y": 160,
        "wires": []
    },
    {
        "id": "95b8f28ebaa81551",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Останній збережений файл",
        "info": "",
        "x": 160,
        "y": 1180,
        "wires": []
    },
    {
        "id": "3bfecc064079ece1",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Список етикеток відправлених в 1С ",
        "info": "",
        "x": 780,
        "y": 1000,
        "wires": []
    },
    {
        "id": "525413b23f5d0a83",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Список локльно збережених етикеток ",
        "info": "",
        "x": 190,
        "y": 1000,
        "wires": []
    },
    {
        "id": "b549621e3b94b268",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Отримати ПДФ останньої етикетки",
        "info": "",
        "x": 200,
        "y": 820,
        "wires": []
    },
    {
        "id": "c5384e795835e5a7",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Команда на друк ПДФ",
        "info": "",
        "x": 440,
        "y": 640,
        "wires": []
    },
    {
        "id": "332a4e184d1f3f39",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Збереження файла",
        "info": "",
        "x": 150,
        "y": 540,
        "wires": []
    },
    {
        "id": "e7a9c92f782fac1e",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Збереження етикетки в локальну базу",
        "info": "",
        "x": 770,
        "y": 280,
        "wires": []
    },
    {
        "id": "c57f3291651e1142",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Отримання даних від сканера",
        "info": "",
        "x": 170,
        "y": 60,
        "wires": []
    },
    {
        "id": "322f8e4c44faf382",
        "type": "comment",
        "z": "656dc0405eaa1150",
        "name": "Збереження результату відправки",
        "info": "",
        "x": 1280,
        "y": 160,
        "wires": []
    }
]
