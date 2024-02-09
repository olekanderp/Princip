[
    {
        "id": "28baf7452715fc07",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "17b575ec3d70118a",
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
            "hideToolbar": "false",
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
        "id": "b37930d1defba379",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "y": 120,
        "wires": [
            [
                "88c2cb5a21127f3f"
            ]
        ]
    },
    {
        "id": "1ad64c8918a96697",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 88",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1020,
        "y": 460,
        "wires": []
    },
    {
        "id": "69026e6cae799608",
        "type": "ui_template",
        "z": "28baf7452715fc07",
        "group": "3f05b7c4137ac6b3",
        "name": "",
        "order": 1,
        "width": "22",
        "height": 17,
        "format": "<style>\n    /*\n    .nr-dashboard-template{\n        background-image: url(\"http://192.168.0.40:1880/logo\");\n        color: #fdc400; yelow\n        #000000; black\n    }\n    */\n\n\n\n    .centered-text {\n        position: absolute;\n        top: 150px;\n        left: 5%;\n        transform: translateX(-5%);\n        text-align: center;\n        font-size: 5em;\n        font-weight: bold;\n        color: black;\n\n    }\n\n    .clock {\n        text-align: right;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    .pointName-test {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 30px;\n        font-weight: bold;\n    }\n\n    .warning {\n        position: absolute;\n        color: red;\n        bottom: 0;\n        left: 0;\n        font-weight: bold;\n        padding: 10px;\n        width: 90%;\n        text-align: center;\n        font-size: 3em;\n        ;\n    }\n\n    .modal {\n        display: none;\n        position: fixed;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n    /* Стилі для вікна */\n    .modal-content {\n        background-color: white;\n        padding: 20px;\n        border-radius: 5px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 90%;\n        height: 90%;\n        font-size: 3em;\n        font-weight: bold;\n    }\n\n    .text-modal {\n        margin-top: 5%;\n        text-align: center;\n    }\n</style>\n<div>\n    <div class=\"pointName-test\">\n        <p>Контрольна точка: {{msg.point}}</p>\n        <p>{{msg.time}}</p>\n\n\n\n        <div class=\"centered-text\">\n            Вага: {{msg.payload}}\n        </div>\n\n\n        <div class=\"warning\">\n            {{msg.warning}}\n        </div>\n\n        <div id=\"myModal\" class=\"modal\">\n            <div class=\"modal-content\">\n                <div class=\"text-modal\">\n                    {{msg.message}}\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <script type=\"text/javascript\">\n        (function(scope) {\n        scope.$watch('msg', function(data) {\n            \n            // Отримуємо модальне вікно\n            var modal = document.getElementById(\"myModal\");\n            \n            // Показуємо модальне вікно\n            if(data.message){\n\n                console.log('msg', data);\n                modal.style.display = \"block\";\n\n                var textElement = document.getElementById(\"myModal\");\n                let colorModal = (data.error) ? 'red': 'rgb(0, 0, 0)'\n                // Змінюємо колір букв за допомогою стилів\n                textElement.style.color =colorModal;\n                \n                // Через 5 секунд закриваємо модальне вікно\n                setTimeout(function() {\n                    modal.style.display = \"none\";\n                }, data.showTime * 1000);\n            }\n           \n        });\n    })(scope);\n\n    </script>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 860,
        "y": 460,
        "wires": [
            [
                "1ad64c8918a96697"
            ]
        ]
    },
    {
        "id": "2a3e9ab3bc2daa8c",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "time",
        "func": "flow.set(\"time\", msg.time)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 530,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "47abebae838f67ad",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "logic",
        "func": "msg.showTime = (msg.payload.showTime) ? msg.payload.showTime : false\nmsg.message = flow.get(\"message1C\")\nmsg.error = (msg.payload.error) ? msg.payload.error : false\n\nmsg.time = flow.get(\"time\")\nmsg.point = flow.get(\"point\")\n\nlet statusOptical = flow.get(\"opticalSensor\")\n\nmsg.warning = (statusOptical) ? \"Неправильне позиціонування авто на вагах\" : \"\"\n\nmsg.payload = flow.get(\"weight\")\n\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 460,
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
        "z": "28baf7452715fc07",
        "name": "debug 89",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 860,
        "y": 500,
        "wires": []
    },
    {
        "id": "5341e5511472da60",
        "type": "http in",
        "z": "28baf7452715fc07",
        "name": "",
        "url": "/show/info/screen",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 520,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "54b8f30b86575239",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "message1C",
        "func": "/**\n * message  showTime    error\n */\nflow.set(\"message1C\", msg.payload.message)\nflow.set(\"block\", true)\nmsg.delay = msg.payload.showTime * 1000\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 520,
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
        "z": "28baf7452715fc07",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 650,
        "y": 600,
        "wires": []
    },
    {
        "id": "d2e573b134e7ef18",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "x": 140,
        "y": 560,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "a730ef28a0f975ee",
        "type": "inject",
        "z": "28baf7452715fc07",
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
                "8f5810060a97f005"
            ]
        ]
    },
    {
        "id": "8f5810060a97f005",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "init",
        "func": "//flow.set(\"time\", msg.time)\nflow.set(\"point\", 'Ваги 1')\nflow.set(\"message1C\", false)\nflow.set(\"block\", false)\nflow.set(\"opticalSensor\", false)\nflow.set(\"weight\", 0)\nflow.set(\"weightTCP\", 0)\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "b708656ae2ffd39e",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "x": 140,
        "y": 600,
        "wires": [
            [
                "54b8f30b86575239"
            ]
        ]
    },
    {
        "id": "fdc27e53b5feab7b",
        "type": "http in",
        "z": "28baf7452715fc07",
        "name": "",
        "url": "/logo",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 680,
        "wires": [
            [
                "d5cd3635c9437c49"
            ]
        ]
    },
    {
        "id": "9a245518ebd66576",
        "type": "http response",
        "z": "28baf7452715fc07",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 430,
        "y": 680,
        "wires": []
    },
    {
        "id": "d5cd3635c9437c49",
        "type": "file in",
        "z": "28baf7452715fc07",
        "name": "",
        "filename": "/home/pi/e71fb16ad3741ac80b936a9889da660a.jpeg",
        "filenameType": "str",
        "format": "",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 280,
        "y": 740,
        "wires": [
            [
                "9a245518ebd66576"
            ]
        ]
    },
    {
        "id": "315c5d86faeaa6cb",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "weight",
        "func": "\nconst weight = Number(msg.payload); // Вага в кг\n\nif (weight > 1000) {\n    let formattedWeight = weight.toLocaleString()\n    formattedWeight = formattedWeight.replace(\",\", \" \")\n    msg.payload = formattedWeight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n} else {\n    // console.log(weight); // Вивід ваги без форматування\n    //flow.set(\"weight\", weight)\n    msg.payload = weight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "34166cb8b8d49721",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "y": 460,
        "wires": [
            [
                "fbe3b517c53961db"
            ]
        ]
    },
    {
        "id": "635928c652c98daa",
        "type": "trigger",
        "z": "28baf7452715fc07",
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
        "x": 680,
        "y": 560,
        "wires": [
            [
                "fec108f9b284363f"
            ]
        ]
    },
    {
        "id": "fec108f9b284363f",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "block",
        "func": "/**\n * message  showTime    error\n */\nflow.set(\"message1C\", false)\nflow.set(\"block\", false)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 890,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "209462f351337dd9",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 90",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 520,
        "wires": []
    },
    {
        "id": "fbe3b517c53961db",
        "type": "switch",
        "z": "28baf7452715fc07",
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
        "x": 350,
        "y": 460,
        "wires": [
            [
                "47abebae838f67ad"
            ]
        ]
    },
    {
        "id": "88c2cb5a21127f3f",
        "type": "moment",
        "z": "28baf7452715fc07",
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
        "x": 360,
        "y": 120,
        "wires": [
            [
                "2a3e9ab3bc2daa8c"
            ]
        ]
    },
    {
        "id": "223f1dad919a3c9a",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "optical sesnsor",
        "func": "flow.set(\"opticalSensor\", msg.payload.closed)\nreturn msg;\n\n\n// msg.payload = {\n//     procname: \"OpticalLoop\",\n//     control_point_num: 2,\n//     clockseconds: Date.now(),\n//     closed: closed\n// } ",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "aaee8e3e20b20af1",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "payload": "opticalSensor",
        "payloadType": "flow",
        "x": 930,
        "y": 100,
        "wires": [
            [
                "24645f584f1f9e45"
            ]
        ]
    },
    {
        "id": "24645f584f1f9e45",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 92",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1160,
        "y": 100,
        "wires": []
    },
    {
        "id": "c77e7a3fbf03940a",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 98",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 180,
        "wires": []
    },
    {
        "id": "e23cbb714f4fad4d",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 99",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "c23612c5e2c91405",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 100",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 590,
        "y": 300,
        "wires": []
    },
    {
        "id": "3b7498e3a1aea280",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 101",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 590,
        "y": 340,
        "wires": []
    },
    {
        "id": "a9429701cb15c303",
        "type": "json",
        "z": "28baf7452715fc07",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 350,
        "y": 400,
        "wires": [
            [
                "3b7498e3a1aea280",
                "223f1dad919a3c9a"
            ]
        ]
    },
    {
        "id": "f507310dfa8d3058",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Отриманн ваги і позиціонування він центрального РПІ",
        "info": "",
        "x": 270,
        "y": 260,
        "wires": []
    },
    {
        "id": "ec56a15143e7e07c",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "payload": "weightTCP",
        "payloadType": "flow",
        "x": 130,
        "y": 180,
        "wires": [
            [
                "315c5d86faeaa6cb"
            ]
        ]
    },
    {
        "id": "783cfb3cd639c571",
        "type": "tcp request",
        "z": "28baf7452715fc07",
        "name": "",
        "server": "172.16.13.30",
        "port": "8887",
        "out": "time",
        "ret": "string",
        "splitc": "200",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 480,
        "y": 880,
        "wires": [
            [
                "ffdec716d4095690",
                "b413ab3b378bd4f3"
            ]
        ]
    },
    {
        "id": "2dffc86f.1e6d58",
        "type": "inject",
        "z": "28baf7452715fc07",
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
        "payload": "1",
        "payloadType": "str",
        "x": 150,
        "y": 880,
        "wires": [
            [
                "9278d92c2154a227"
            ]
        ]
    },
    {
        "id": "2dda4e5ae52414bb",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 102",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 810,
        "y": 880,
        "wires": []
    },
    {
        "id": "9278d92c2154a227",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "cmd",
        "func": "msg.payload = \"G01W\"+String.fromCharCode(13)+String.fromCharCode(10)\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 880,
        "wires": [
            [
                "783cfb3cd639c571"
            ]
        ]
    },
    {
        "id": "ffdec716d4095690",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "set weight",
        "func": "var inData = msg.payload\n\ninData = inData.substring(4, 10)\nmsg.payload =  Number(inData) * 1000;\nflow.set(\"weightTCP\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 880,
        "wires": [
            [
                "2dda4e5ae52414bb"
            ]
        ]
    },
    {
        "id": "b413ab3b378bd4f3",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 103",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 670,
        "y": 840,
        "wires": []
    },
    {
        "id": "7eb70a1559ff3ef2",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Get weight from VkModule",
        "info": "",
        "x": 230,
        "y": 840,
        "wires": []
    }
]
