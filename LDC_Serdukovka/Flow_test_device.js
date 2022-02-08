[
    {
        "id": "7a43d1c689633aa1",
        "type": "tab",
        "label": "Поток 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b243112323d0cacf",
        "type": "tab",
        "label": "Авторазгрузка 2 ",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "0decc5fa4d7c632d",
        "type": "tab",
        "label": "Авторазгрузка 3",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "61714a687b634652",
        "type": "tab",
        "label": "Авторазгрузка 4",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c9f03318da11fd04",
        "type": "tab",
        "label": "ЖД ваги",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "1f5190a07fb5807d",
        "type": "tab",
        "label": "КПП",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "1d680a8744aafa8d",
        "type": "tab",
        "label": "Вагова",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "6ac1163bdf6c9337",
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
        "id": "f57c0dd078d897e2",
        "type": "ui_tab",
        "name": "Tab 1",
        "icon": "dashboard",
        "order": 1
    },
    {
        "id": "88c3b2b50dd2f80d",
        "type": "ui_group",
        "name": "Default",
        "tab": "f57c0dd078d897e2",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "93f4240e51800c9f",
        "type": "http request",
        "z": "7a43d1c689633aa1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://192.168.0.191/protect/leds.cgi?led=0&timeout=0",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 390,
        "y": 180,
        "wires": [
            [
                "a56998d4459c7c1a"
            ]
        ]
    },
    {
        "id": "0e3f7b048776ebb9",
        "type": "inject",
        "z": "7a43d1c689633aa1",
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
        "x": 220,
        "y": 180,
        "wires": [
            [
                "93f4240e51800c9f"
            ]
        ]
    },
    {
        "id": "a56998d4459c7c1a",
        "type": "debug",
        "z": "7a43d1c689633aa1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 180,
        "wires": []
    },
    {
        "id": "86cdfaf6651c0899",
        "type": "function",
        "z": "7a43d1c689633aa1",
        "name": "",
        "func": "var inData = msg.payload\nvar Status_Led0 = inData.response.led0[0]\n\n\nif(Status_Led0 == \"0\"){\n    msg.label = \"Включити\"\n}else{\n    msg.label = \"Виключити\"\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 240,
        "wires": [
            [
                "7f0210cf617bca7d"
            ]
        ]
    },
    {
        "id": "7f0210cf617bca7d",
        "type": "ui_button",
        "z": "7a43d1c689633aa1",
        "name": "",
        "group": "88c3b2b50dd2f80d",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "{{msg.label}}",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 470,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "f7a1da919b8143a2",
        "type": "debug",
        "z": "7a43d1c689633aa1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 60,
        "wires": []
    },
    {
        "id": "81380a18d7096cb9",
        "type": "inject",
        "z": "7a43d1c689633aa1",
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
        "payload": "<response>     <led0>1</led0>     <led1>0</led1>     <led2>1</led2>     <led3>0</led3>     <led4>0</led4>     <led5>0</led5>     <led6>0</led6>     <led7>1</led7> </response>",
        "payloadType": "str",
        "x": 170,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "2f61e61170aff516",
        "type": "debug",
        "z": "7a43d1c689633aa1",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 320,
        "wires": []
    },
    {
        "id": "5dd07e0456044e7f",
        "type": "xml",
        "z": "7a43d1c689633aa1",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 430,
        "y": 540,
        "wires": [
            [
                "f9f07f04244dc709"
            ]
        ]
    },
    {
        "id": "f9f07f04244dc709",
        "type": "function",
        "z": "7a43d1c689633aa1",
        "name": "",
        "func": "var inData = msg.payload\nvar Status_temp0 = inData.response.temp0[0]\n\nmsg.payload = Status_temp0\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 560,
        "y": 580,
        "wires": [
            [
                "ef059f1b3872f8e8"
            ]
        ]
    },
    {
        "id": "37cdaf8d7b7e3916",
        "type": "http request",
        "z": "7a43d1c689633aa1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://192.168.0.191/protect/leds.cgi?led=0&timeout=0",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 290,
        "y": 540,
        "wires": [
            [
                "5dd07e0456044e7f"
            ]
        ]
    },
    {
        "id": "72a007f6756fc314",
        "type": "inject",
        "z": "7a43d1c689633aa1",
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
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "ef059f1b3872f8e8",
        "type": "ui_text",
        "z": "7a43d1c689633aa1",
        "group": "88c3b2b50dd2f80d",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Температура: ",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 720,
        "y": 540,
        "wires": []
    },
    {
        "id": "b981205892f37615",
        "type": "inject",
        "z": "7a43d1c689633aa1",
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
        "payload": "23",
        "payloadType": "num",
        "x": 500,
        "y": 480,
        "wires": [
            [
                "ef059f1b3872f8e8"
            ]
        ]
    },
    {
        "id": "550a6cb32263a93f",
        "type": "inject",
        "z": "b243112323d0cacf",
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
        "x": 170,
        "y": 120,
        "wires": [
            [
                "0c21d8feecc1ab22",
                "c816f9c5b80fcba9"
            ]
        ]
    },
    {
        "id": "0c21d8feecc1ab22",
        "type": "function",
        "z": "b243112323d0cacf",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 120,
        "wires": [
            [
                "5fd94441868a4044"
            ]
        ]
    },
    {
        "id": "91dcf1771eb2773b",
        "type": "tcp out",
        "z": "b243112323d0cacf",
        "host": "10.107.25.127",
        "port": "5501",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 670,
        "y": 140,
        "wires": []
    },
    {
        "id": "5fd94441868a4044",
        "type": "converter",
        "z": "b243112323d0cacf",
        "name": "",
        "from": "win1251",
        "x": 470,
        "y": 140,
        "wires": [
            [
                "91dcf1771eb2773b"
            ]
        ]
    },
    {
        "id": "c816f9c5b80fcba9",
        "type": "function",
        "z": "b243112323d0cacf",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 160,
        "wires": [
            [
                "5fd94441868a4044"
            ]
        ]
    },
    {
        "id": "fa60329b29a9fc90",
        "type": "inject",
        "z": "b243112323d0cacf",
        "name": "перемикання",
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
        "y": 280,
        "wires": [
            [
                "5322de3994387b97"
            ]
        ]
    },
    {
        "id": "5322de3994387b97",
        "type": "function",
        "z": "b243112323d0cacf",
        "name": "",
        "func": "msg.url = 'http://admin:admin@10.107.25.135/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 280,
        "wires": [
            [
                "abdab1c02497d79c"
            ]
        ]
    },
    {
        "id": "abdab1c02497d79c",
        "type": "http request",
        "z": "b243112323d0cacf",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 550,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "cecea1e329a557a3",
        "type": "comment",
        "z": "b243112323d0cacf",
        "name": "QL 6 Таблло 10.107.25.127",
        "info": "",
        "x": 350,
        "y": 80,
        "wires": []
    },
    {
        "id": "9578f3e376737a80",
        "type": "comment",
        "z": "b243112323d0cacf",
        "name": "A6.1 - ВК-модуль, Світлофор(HL4.2) 10.107.25.135",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\n\n\n http://10.107.25.135/protect/leds.cgi?led=0&timeout=0",
        "x": 430,
        "y": 240,
        "wires": []
    },
    {
        "id": "b05919e2e0561356",
        "type": "inject",
        "z": "b243112323d0cacf",
        "name": "status",
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
        "x": 170,
        "y": 340,
        "wires": [
            [
                "85f263431525d23a"
            ]
        ]
    },
    {
        "id": "85f263431525d23a",
        "type": "function",
        "z": "b243112323d0cacf",
        "name": "status",
        "func": "msg.url = 'http://admin:admin@10.107.25.135/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 340,
        "wires": [
            [
                "7f66674d347475da"
            ]
        ]
    },
    {
        "id": "7f66674d347475da",
        "type": "http request",
        "z": "b243112323d0cacf",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 550,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "c313a8c21a84e892",
        "type": "inject",
        "z": "0decc5fa4d7c632d",
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
        "x": 200,
        "y": 140,
        "wires": [
            [
                "8eebf766c0334ad0",
                "1065ae229dbffeb5"
            ]
        ]
    },
    {
        "id": "8eebf766c0334ad0",
        "type": "function",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "func": "msg.payload = '<s1>Тест 2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 140,
        "wires": [
            [
                "fc02469f72e8e4c4"
            ]
        ]
    },
    {
        "id": "cd7fea72383b9529",
        "type": "tcp out",
        "z": "0decc5fa4d7c632d",
        "host": "10.107.25.138",
        "port": "5503",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 700,
        "y": 160,
        "wires": []
    },
    {
        "id": "fc02469f72e8e4c4",
        "type": "converter",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "from": "win1251",
        "x": 500,
        "y": 160,
        "wires": [
            [
                "cd7fea72383b9529"
            ]
        ]
    },
    {
        "id": "1065ae229dbffeb5",
        "type": "function",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "func": "msg.payload = '<s2>тест 1'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 180,
        "wires": [
            [
                "fc02469f72e8e4c4"
            ]
        ]
    },
    {
        "id": "4d2577714144f11f",
        "type": "inject",
        "z": "0decc5fa4d7c632d",
        "name": "перемикання",
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
        "x": 170,
        "y": 300,
        "wires": [
            [
                "c8b81a4e5e1f4377"
            ]
        ]
    },
    {
        "id": "c8b81a4e5e1f4377",
        "type": "function",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "func": "msg.url = 'http://admin:admin@10.107.25.142/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 300,
        "wires": [
            [
                "7e29672b71497803"
            ]
        ]
    },
    {
        "id": "7e29672b71497803",
        "type": "http request",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 580,
        "y": 300,
        "wires": [
            [
                "ecb82b6721892ef7"
            ]
        ]
    },
    {
        "id": "9bc1ca865afad96a",
        "type": "comment",
        "z": "0decc5fa4d7c632d",
        "name": "QL 9 Таблло 10.107.25.138",
        "info": "",
        "x": 380,
        "y": 100,
        "wires": []
    },
    {
        "id": "f40c4231ccf8bb49",
        "type": "comment",
        "z": "0decc5fa4d7c632d",
        "name": "A8.1 - ВК-модуль, Світлофор(HL5.1) 10.107.25.142",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\n<led0>0</led0> - червоне\n<led0>1</led0> - зелене\n<led1>0</led1> - резерв\n\n\n\n\n\n http://10.107.25.142/protect/leds.cgi?led=0&timeout=0",
        "x": 460,
        "y": 260,
        "wires": []
    },
    {
        "id": "72dcd6dbde0c9f67",
        "type": "inject",
        "z": "0decc5fa4d7c632d",
        "name": "status",
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
        "x": 200,
        "y": 360,
        "wires": [
            [
                "a8b078753dfabeee"
            ]
        ]
    },
    {
        "id": "a8b078753dfabeee",
        "type": "function",
        "z": "0decc5fa4d7c632d",
        "name": "status",
        "func": "msg.url = 'http://admin:admin@10.107.25.142/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 360,
        "wires": [
            [
                "06b6394fa1f653e1"
            ]
        ]
    },
    {
        "id": "06b6394fa1f653e1",
        "type": "http request",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 580,
        "y": 360,
        "wires": [
            [
                "1cac2ec780222913"
            ]
        ]
    },
    {
        "id": "ecb82b6721892ef7",
        "type": "debug",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 740,
        "y": 300,
        "wires": []
    },
    {
        "id": "1cac2ec780222913",
        "type": "debug",
        "z": "0decc5fa4d7c632d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 750,
        "y": 360,
        "wires": []
    },
    {
        "id": "4de05db438c665a9",
        "type": "inject",
        "z": "61714a687b634652",
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
        "y": 140,
        "wires": [
            [
                "5366313ef22b6b60",
                "87a263f80b8fb64b"
            ]
        ]
    },
    {
        "id": "5366313ef22b6b60",
        "type": "function",
        "z": "61714a687b634652",
        "name": "",
        "func": "msg.payload = '<s1>10.107.25.137'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 140,
        "wires": [
            [
                "6c962989fa31c28d"
            ]
        ]
    },
    {
        "id": "fd937e739a6cc223",
        "type": "tcp out",
        "z": "61714a687b634652",
        "host": "10.107.25.137",
        "port": "5502",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 710,
        "y": 160,
        "wires": []
    },
    {
        "id": "6c962989fa31c28d",
        "type": "converter",
        "z": "61714a687b634652",
        "name": "",
        "from": "win1251",
        "x": 480,
        "y": 160,
        "wires": [
            [
                "fd937e739a6cc223"
            ]
        ]
    },
    {
        "id": "87a263f80b8fb64b",
        "type": "function",
        "z": "61714a687b634652",
        "name": "",
        "func": "msg.payload = '<s2>'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 180,
        "wires": [
            [
                "6c962989fa31c28d"
            ]
        ]
    },
    {
        "id": "0ad09256258b220b",
        "type": "inject",
        "z": "61714a687b634652",
        "name": "перемикання",
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
        "x": 150,
        "y": 300,
        "wires": [
            [
                "2f9f5404d4a880f3"
            ]
        ]
    },
    {
        "id": "2f9f5404d4a880f3",
        "type": "function",
        "z": "61714a687b634652",
        "name": "",
        "func": "msg.url = 'http://admin:admin@10.107.25.141/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 300,
        "wires": [
            [
                "7fd99fcf8eae4f81"
            ]
        ]
    },
    {
        "id": "7fd99fcf8eae4f81",
        "type": "http request",
        "z": "61714a687b634652",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 560,
        "y": 300,
        "wires": [
            [
                "c53977649d558cb8"
            ]
        ]
    },
    {
        "id": "36de9f2faba11a3f",
        "type": "comment",
        "z": "61714a687b634652",
        "name": "QL 8 Таблло 10.107.25.137 не працювало з щита",
        "info": "",
        "x": 430,
        "y": 100,
        "wires": []
    },
    {
        "id": "24e5afb42ab1f229",
        "type": "comment",
        "z": "61714a687b634652",
        "name": "A7.1 - ВК-модуль, Світлофор(HL5.2) 10.107.25.141",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\n<led0>0</led0> - червоне\n<led0>1</led0> - зелене\n<led1>0</led1> - резерв\n\n\n\n\n\n http://10.107.25.141/protect/leds.cgi?led=0&timeout=0",
        "x": 440,
        "y": 260,
        "wires": []
    },
    {
        "id": "50c2ba5112fbe065",
        "type": "inject",
        "z": "61714a687b634652",
        "name": "status",
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
        "y": 360,
        "wires": [
            [
                "476f9c542f234804"
            ]
        ]
    },
    {
        "id": "476f9c542f234804",
        "type": "function",
        "z": "61714a687b634652",
        "name": "status",
        "func": "msg.url = 'http://admin:admin@10.107.25.141/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 360,
        "wires": [
            [
                "ba24ed1ba10d4020"
            ]
        ]
    },
    {
        "id": "ba24ed1ba10d4020",
        "type": "http request",
        "z": "61714a687b634652",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 560,
        "y": 360,
        "wires": [
            [
                "2c6abe490d278f5b"
            ]
        ]
    },
    {
        "id": "c53977649d558cb8",
        "type": "debug",
        "z": "61714a687b634652",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 720,
        "y": 300,
        "wires": []
    },
    {
        "id": "2c6abe490d278f5b",
        "type": "debug",
        "z": "61714a687b634652",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 360,
        "wires": []
    },
    {
        "id": "0aeb688d117e0239",
        "type": "inject",
        "z": "c9f03318da11fd04",
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
        "y": 100,
        "wires": [
            [
                "a4ce9e2057253dff"
            ]
        ]
    },
    {
        "id": "a4ce9e2057253dff",
        "type": "function",
        "z": "c9f03318da11fd04",
        "name": "",
        "func": "msg.payload = String.fromCharCode(0);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 100,
        "wires": [
            [
                "6937cf6fedeb4d34"
            ]
        ]
    },
    {
        "id": "6937cf6fedeb4d34",
        "type": "tcp request",
        "z": "c9f03318da11fd04",
        "server": "10.107.25.136",
        "port": "9761",
        "out": "count",
        "ret": "buffer",
        "splitc": "10",
        "name": "",
        "x": 250,
        "y": 180,
        "wires": [
            [
                "ec99199dc2b35f0c",
                "bbdf5d0c3752ab5e"
            ]
        ]
    },
    {
        "id": "bbdf5d0c3752ab5e",
        "type": "debug",
        "z": "c9f03318da11fd04",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 670,
        "y": 180,
        "wires": []
    },
    {
        "id": "ec99199dc2b35f0c",
        "type": "function",
        "z": "c9f03318da11fd04",
        "name": "parse",
        "func": "var weight = msg.payload;\n\nfunction parse (v){\n        \n           var k1 = v.readInt16LE(1,2)*10;\n           var k2 = v.readInt16LE(3,2)*10;\n           var k3 = v.readInt16LE(5,2)*10;\n           var k4 = v.readInt16LE(7,2)*10;\n           \n           return k1+k2+k3+k4;\n           \n        }\n\nmsg.payload = parse(weight);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 200,
        "wires": [
            [
                "bbdf5d0c3752ab5e"
            ]
        ]
    },
    {
        "id": "db416c2220afc0ca",
        "type": "comment",
        "z": "c9f03318da11fd04",
        "name": "Ваги",
        "info": "0: 0xaa\n1: 0x0\n2: 0x0\n3: 0x0\n4: 0x0\n5: 0xff\n6: 0xff\n7: 0x0\n8: 0x0\n9: 0xa9\n\n0: 170\n1: 0x0\n2: 0x0\n3: 0x0\n4: 0x0\n5: 255\n6: 255\n7: 0x0\n8: 0x0\n9: 0xa9",
        "x": 280,
        "y": 60,
        "wires": []
    },
    {
        "id": "f30762c74aef5d19",
        "type": "inject",
        "z": "c9f03318da11fd04",
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
        "y": 380,
        "wires": [
            [
                "46b602dcb8acc2cc",
                "1e1460d51e401a2e"
            ]
        ]
    },
    {
        "id": "46b602dcb8acc2cc",
        "type": "function",
        "z": "c9f03318da11fd04",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 380,
        "wires": [
            [
                "7c54caf333dd5619"
            ]
        ]
    },
    {
        "id": "7c54caf333dd5619",
        "type": "converter",
        "z": "c9f03318da11fd04",
        "name": "",
        "from": "win1251",
        "x": 440,
        "y": 400,
        "wires": [
            [
                "226b9ef4f8a434e9"
            ]
        ]
    },
    {
        "id": "1e1460d51e401a2e",
        "type": "function",
        "z": "c9f03318da11fd04",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 420,
        "wires": [
            [
                "7c54caf333dd5619"
            ]
        ]
    },
    {
        "id": "226b9ef4f8a434e9",
        "type": "tcp out",
        "z": "c9f03318da11fd04",
        "host": "10.107.25.128",
        "port": "46002",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 650,
        "y": 400,
        "wires": []
    },
    {
        "id": "e2f21679f57a76c4",
        "type": "comment",
        "z": "c9f03318da11fd04",
        "name": "QL 7 - 10.107.25.128 табло жд не працювало",
        "info": "",
        "x": 410,
        "y": 340,
        "wires": []
    },
    {
        "id": "88b7f1cd49a0cc6d",
        "type": "inject",
        "z": "1f5190a07fb5807d",
        "name": "перемикання",
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
        "x": 150,
        "y": 200,
        "wires": [
            [
                "e52e76a8ce60a491"
            ]
        ]
    },
    {
        "id": "e52e76a8ce60a491",
        "type": "function",
        "z": "1f5190a07fb5807d",
        "name": "HL1.1 вїзд",
        "func": "msg.url = 'http://admin:admin@10.107.25.107/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 200,
        "wires": [
            [
                "b4047c94271d069f"
            ]
        ]
    },
    {
        "id": "b4047c94271d069f",
        "type": "http request",
        "z": "1f5190a07fb5807d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 510,
        "y": 200,
        "wires": [
            [
                "78fe0bd251c7a810"
            ]
        ]
    },
    {
        "id": "569814c8ce4e84e9",
        "type": "comment",
        "z": "1f5190a07fb5807d",
        "name": "A1.2 - ВК-модуль, Світлофор(HL1.1 - 1.4) 10.107.25.107",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.107/protect/leds.cgi?led=0&timeout=0",
        "x": 390,
        "y": 140,
        "wires": []
    },
    {
        "id": "d82be950dc79e58a",
        "type": "inject",
        "z": "1f5190a07fb5807d",
        "name": "status",
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
        "x": 130,
        "y": 460,
        "wires": [
            [
                "afdfb0521e10d851"
            ]
        ]
    },
    {
        "id": "afdfb0521e10d851",
        "type": "function",
        "z": "1f5190a07fb5807d",
        "name": "status",
        "func": "msg.url = 'http://admin:admin@10.107.25.107/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 460,
        "wires": [
            [
                "960eeae7f7f2f75d"
            ]
        ]
    },
    {
        "id": "960eeae7f7f2f75d",
        "type": "http request",
        "z": "1f5190a07fb5807d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 510,
        "y": 460,
        "wires": [
            [
                "42414dfdc58055b4"
            ]
        ]
    },
    {
        "id": "78fe0bd251c7a810",
        "type": "debug",
        "z": "1f5190a07fb5807d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 200,
        "wires": []
    },
    {
        "id": "42414dfdc58055b4",
        "type": "debug",
        "z": "1f5190a07fb5807d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 460,
        "wires": []
    },
    {
        "id": "bda5b342b16a2e22",
        "type": "inject",
        "z": "1f5190a07fb5807d",
        "name": "перемикання",
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
        "x": 150,
        "y": 240,
        "wires": [
            [
                "fa5b4ea42fdec323"
            ]
        ]
    },
    {
        "id": "fa5b4ea42fdec323",
        "type": "function",
        "z": "1f5190a07fb5807d",
        "name": "HL1.2 виїзд",
        "func": "msg.url = 'http://admin:admin@10.107.25.107/protect/leds.cgi?led=1&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 240,
        "wires": [
            [
                "a0e635ece6471337"
            ]
        ]
    },
    {
        "id": "a0e635ece6471337",
        "type": "http request",
        "z": "1f5190a07fb5807d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 510,
        "y": 240,
        "wires": [
            [
                "2344fb37f023a4d1"
            ]
        ]
    },
    {
        "id": "2344fb37f023a4d1",
        "type": "debug",
        "z": "1f5190a07fb5807d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 240,
        "wires": []
    },
    {
        "id": "52c822ad37ae4760",
        "type": "inject",
        "z": "1f5190a07fb5807d",
        "name": "перемикання",
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
        "x": 150,
        "y": 280,
        "wires": [
            [
                "f25e83c157cfca3f"
            ]
        ]
    },
    {
        "id": "f25e83c157cfca3f",
        "type": "function",
        "z": "1f5190a07fb5807d",
        "name": "HL1.3 вїзд",
        "func": "msg.url = 'http://admin:admin@10.107.25.107/protect/leds.cgi?led=2&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 280,
        "wires": [
            [
                "fb06093a570d1c40"
            ]
        ]
    },
    {
        "id": "fb06093a570d1c40",
        "type": "http request",
        "z": "1f5190a07fb5807d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 510,
        "y": 280,
        "wires": [
            [
                "b010ae4bb229d03d"
            ]
        ]
    },
    {
        "id": "b010ae4bb229d03d",
        "type": "debug",
        "z": "1f5190a07fb5807d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 280,
        "wires": []
    },
    {
        "id": "48ce9e0819afe6fa",
        "type": "inject",
        "z": "1f5190a07fb5807d",
        "name": "перемикання",
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
        "x": 150,
        "y": 320,
        "wires": [
            [
                "61b291d492ba8e61"
            ]
        ]
    },
    {
        "id": "61b291d492ba8e61",
        "type": "function",
        "z": "1f5190a07fb5807d",
        "name": "HL1.4 вїзд",
        "func": "msg.url = 'http://admin:admin@10.107.25.107/protect/leds.cgi?led=3&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 320,
        "wires": [
            [
                "49bb75e0727a2752"
            ]
        ]
    },
    {
        "id": "49bb75e0727a2752",
        "type": "http request",
        "z": "1f5190a07fb5807d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 510,
        "y": 320,
        "wires": [
            [
                "b03f09b8d8e56513"
            ]
        ]
    },
    {
        "id": "b03f09b8d8e56513",
        "type": "debug",
        "z": "1f5190a07fb5807d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 320,
        "wires": []
    },
    {
        "id": "7311541695965906",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 110,
        "y": 120,
        "wires": [
            [
                "8a562dedc3697ad0"
            ]
        ]
    },
    {
        "id": "8a562dedc3697ad0",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.1 авто 1(праві ваги, направлені на ваги для виїзду)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 120,
        "wires": [
            [
                "9f95d3433b42f1df"
            ]
        ]
    },
    {
        "id": "9f95d3433b42f1df",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 710,
        "y": 120,
        "wires": [
            [
                "2c8008a4d6b1908f"
            ]
        ]
    },
    {
        "id": "eb52a5d1d137cf64",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A3.2 - ВК-модуль, Світлофор(HL3.1 - 3.4) 10.107.25.114 від воріт",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.107/protect/leds.cgi?led=0&timeout=0",
        "x": 500,
        "y": 80,
        "wires": []
    },
    {
        "id": "2c8008a4d6b1908f",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 120,
        "wires": []
    },
    {
        "id": "8e02efd31661fcc3",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 110,
        "y": 160,
        "wires": [
            [
                "4d8467974957a675"
            ]
        ]
    },
    {
        "id": "4d8467974957a675",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.2 авто 1 (праві ваги, направлені від вагів для заїзду)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=1&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 160,
        "wires": [
            [
                "e02aef4aaef48084"
            ]
        ]
    },
    {
        "id": "e02aef4aaef48084",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 730,
        "y": 160,
        "wires": [
            [
                "25bfd8ace1ec2fa9"
            ]
        ]
    },
    {
        "id": "25bfd8ace1ec2fa9",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 160,
        "wires": []
    },
    {
        "id": "6e2a5a4f816232dc",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 420,
        "wires": [
            [
                "a6eb483b2e8bef00"
            ]
        ]
    },
    {
        "id": "a6eb483b2e8bef00",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Закрити Тех проїзд",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=4&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 400,
        "y": 420,
        "wires": [
            [
                "cef8a136eadd8e13"
            ]
        ]
    },
    {
        "id": "cef8a136eadd8e13",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 420,
        "wires": [
            [
                "a553285f711f7215"
            ]
        ]
    },
    {
        "id": "a553285f711f7215",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 420,
        "wires": []
    },
    {
        "id": "54d50ca23f320b46",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 460,
        "wires": [
            [
                "f8bd272796e4707a"
            ]
        ]
    },
    {
        "id": "f8bd272796e4707a",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Открити Тех проїзд",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=5&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 400,
        "y": 460,
        "wires": [
            [
                "2c9c6ce4d637dc90"
            ]
        ]
    },
    {
        "id": "2c9c6ce4d637dc90",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 460,
        "wires": [
            [
                "e6992eb8ed645d18"
            ]
        ]
    },
    {
        "id": "e6992eb8ed645d18",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 460,
        "wires": []
    },
    {
        "id": "df638e49634064e5",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A3.2 - ВК-модуль, Шлагбаум SH2 Тех проїзд 10.107.25.114",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.107/protect/leds.cgi?led=0&timeout=0",
        "x": 460,
        "y": 380,
        "wires": []
    },
    {
        "id": "8b4cefc76c656b36",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 110,
        "y": 240,
        "wires": [
            [
                "70cd41233a098fce"
            ]
        ]
    },
    {
        "id": "70cd41233a098fce",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.3 авто 2 (ліві ваги, направлені до вагів для виїзду)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=2&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 240,
        "wires": [
            [
                "335e827e8732c2a9"
            ]
        ]
    },
    {
        "id": "335e827e8732c2a9",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 730,
        "y": 240,
        "wires": [
            [
                "9255e715907f3252"
            ]
        ]
    },
    {
        "id": "9255e715907f3252",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 240,
        "wires": []
    },
    {
        "id": "3db0745d4d796c0a",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 110,
        "y": 280,
        "wires": [
            [
                "4789460f3a841ec2"
            ]
        ]
    },
    {
        "id": "4789460f3a841ec2",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.4 авто 2 (ліві ваги, направлені від вагів для заїзду)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/leds.cgi?led=3&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 280,
        "wires": [
            [
                "c3066113eb46ed34"
            ]
        ]
    },
    {
        "id": "c3066113eb46ed34",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 730,
        "y": 280,
        "wires": [
            [
                "761de643aeb7e7e8"
            ]
        ]
    },
    {
        "id": "761de643aeb7e7e8",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 280,
        "wires": []
    },
    {
        "id": "c0274f9179db76c3",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "status",
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
        "x": 150,
        "y": 520,
        "wires": [
            [
                "07cf6f2a63bacfa7"
            ]
        ]
    },
    {
        "id": "07cf6f2a63bacfa7",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "status 114",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.114/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 520,
        "wires": [
            [
                "be3b1c82bbe53459"
            ]
        ]
    },
    {
        "id": "be3b1c82bbe53459",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 530,
        "y": 520,
        "wires": [
            [
                "707d370bc364be5d"
            ]
        ]
    },
    {
        "id": "707d370bc364be5d",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
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
        "id": "fed511b590d4ace7",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 680,
        "wires": [
            [
                "d58229c84d2109ea"
            ]
        ]
    },
    {
        "id": "d58229c84d2109ea",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Закрити Веса ліві SH5",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.112/protect/leds.cgi?led=2&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 680,
        "wires": [
            [
                "1e07c1abb1d7f6fb"
            ]
        ]
    },
    {
        "id": "1e07c1abb1d7f6fb",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 680,
        "wires": [
            [
                "3a98f0358a865b8b"
            ]
        ]
    },
    {
        "id": "3a98f0358a865b8b",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 680,
        "wires": []
    },
    {
        "id": "cab156fd239b13e7",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 720,
        "wires": [
            [
                "78f88184c33c58b8"
            ]
        ]
    },
    {
        "id": "78f88184c33c58b8",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Відкрити Веса ліві SH5",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.112/protect/leds.cgi?led=3&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 720,
        "wires": [
            [
                "63accc978b21e1c5"
            ]
        ]
    },
    {
        "id": "63accc978b21e1c5",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 720,
        "wires": [
            [
                "3b11bbde2ba33d3e"
            ]
        ]
    },
    {
        "id": "3b11bbde2ba33d3e",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 720,
        "wires": []
    },
    {
        "id": "fb3e679bd0633699",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A2.2 - ВК-модуль(ip від 2.1) Шлагбаум SH1, SH5 - Веса 1 і 2 10.107.25.112 від воріт",
        "info": "\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.112/protect/leds.cgi?led=0&timeout=0",
        "x": 540,
        "y": 640,
        "wires": []
    },
    {
        "id": "dfc04b4a734a54ca",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "status",
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
        "x": 210,
        "y": 980,
        "wires": [
            [
                "fca649c69b8e6641"
            ]
        ]
    },
    {
        "id": "fca649c69b8e6641",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "status 112",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.112/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 980,
        "wires": [
            [
                "9c81951604c69fa5"
            ]
        ]
    },
    {
        "id": "9c81951604c69fa5",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 980,
        "wires": [
            [
                "b85af20c2318bd45"
            ]
        ]
    },
    {
        "id": "b85af20c2318bd45",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 980,
        "wires": []
    },
    {
        "id": "88c38827c446ae67",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 820,
        "wires": [
            [
                "e70e6db3aa6206f9"
            ]
        ]
    },
    {
        "id": "e70e6db3aa6206f9",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Закрити Веса праві SH1",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.112/protect/leds.cgi?led=4&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 820,
        "wires": [
            [
                "0776958ffecbb038"
            ]
        ]
    },
    {
        "id": "0776958ffecbb038",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 820,
        "wires": [
            [
                "6615c9dcd5af0244"
            ]
        ]
    },
    {
        "id": "6615c9dcd5af0244",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 820,
        "wires": []
    },
    {
        "id": "5e1447e742629376",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 860,
        "wires": [
            [
                "f47a16753aab50db"
            ]
        ]
    },
    {
        "id": "f47a16753aab50db",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Відкрити Веса праві SH1",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.112/protect/leds.cgi?led=5&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 860,
        "wires": [
            [
                "a0afe5cf9bb71ee2"
            ]
        ]
    },
    {
        "id": "a0afe5cf9bb71ee2",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 860,
        "wires": [
            [
                "102d39caa54e8190"
            ]
        ]
    },
    {
        "id": "102d39caa54e8190",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 860,
        "wires": []
    },
    {
        "id": "f1cf11c318ed59b0",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A3.1 - ВК-модуль Датчики периметра -  Веса 1 і 2 для заїзду від відворіт 10.107.25.113",
        "info": "<response>\n<btn0>dn</btn0> - ліві ваги(dn - непересічьон, up - пересічон),\n<btn1>dn</btn1> - праві ваги(dn - непересічьон, up - пересічон),\n<btn2>up</btn2> - резерв\n<btn3>up</btn3> - резерв\n</response>\n\n\n\n http://10.107.25.113/protect/leds.cgi?led=0&timeout=0",
        "x": 530,
        "y": 1100,
        "wires": []
    },
    {
        "id": "c914986aee6f9eb3",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "status",
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
        "x": 190,
        "y": 1160,
        "wires": [
            [
                "ba17f466fd72c6d1"
            ]
        ]
    },
    {
        "id": "ba17f466fd72c6d1",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "status 113",
        "func": "msg.url = 'http://admin:admin@10.107.25.113/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 1160,
        "wires": [
            [
                "d13320f25a7e6e54"
            ]
        ]
    },
    {
        "id": "d13320f25a7e6e54",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 570,
        "y": 1160,
        "wires": [
            [
                "167646f23eb1daa1"
            ]
        ]
    },
    {
        "id": "167646f23eb1daa1",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 740,
        "y": 1160,
        "wires": []
    },
    {
        "id": "76c54290bd277fd9",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A4.1 - ВК-модуль Датчики периметра -  Веса 1 і 2 для заїзду від елеватора 10.107.25.119",
        "info": "<response>\n<btn0>dn</btn0> - ліві ваги(dn - непересічьон, up - пересічон),\n<btn1>dn</btn1> - праві ваги(dn - непересічьон, up - пересічон),\n<btn2>up</btn2> - резерв\n<btn3>up</btn3> - резерв\n</response>\n\n\n\n http://10.107.25.113/protect/leds.cgi?led=0&timeout=0",
        "x": 560,
        "y": 1240,
        "wires": []
    },
    {
        "id": "3461e47d934799b7",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "status",
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
        "x": 210,
        "y": 1300,
        "wires": [
            [
                "d43fa671ba7eee0e"
            ]
        ]
    },
    {
        "id": "d43fa671ba7eee0e",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "status 119",
        "func": "msg.url = 'http://admin:admin@10.107.25.119/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 1300,
        "wires": [
            [
                "0794837920a5a884"
            ]
        ]
    },
    {
        "id": "0794837920a5a884",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 1300,
        "wires": [
            [
                "07623b7a7e5453ee"
            ]
        ]
    },
    {
        "id": "07623b7a7e5453ee",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 1300,
        "wires": []
    },
    {
        "id": "faf3a7e794d91cc1",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 130,
        "y": 1420,
        "wires": [
            [
                "a45c37c5d1a5469e"
            ]
        ]
    },
    {
        "id": "a45c37c5d1a5469e",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.5 авто 1(праві ваги, направлені на ваги для виїзду від елеватора)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=0&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 500,
        "y": 1420,
        "wires": [
            [
                "ee9e8970907e2b5f"
            ]
        ]
    },
    {
        "id": "ee9e8970907e2b5f",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 850,
        "y": 1420,
        "wires": [
            [
                "f82b4dd9adfcfe49"
            ]
        ]
    },
    {
        "id": "358dbfcf7c3548c3",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A4.2 - ВК-модуль, Світлофор(HL3.5 - 3.8) 10.107.25.120 від елеватора",
        "info": "виключений - червоний\nвключене - зелене\nled=0\n\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.107/protect/leds.cgi?led=0&timeout=0",
        "x": 540,
        "y": 1380,
        "wires": []
    },
    {
        "id": "f82b4dd9adfcfe49",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1050,
        "y": 1420,
        "wires": []
    },
    {
        "id": "27d58e19a53564d1",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 130,
        "y": 1460,
        "wires": [
            [
                "c23b45839b5c5f37"
            ]
        ]
    },
    {
        "id": "c23b45839b5c5f37",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.6 авто 1 (праві ваги, направлені від вагів для заїзду від елеватора)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=1&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 500,
        "y": 1460,
        "wires": [
            [
                "f17da1c2057eca7a"
            ]
        ]
    },
    {
        "id": "f17da1c2057eca7a",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 850,
        "y": 1460,
        "wires": [
            [
                "d9a932378c346d6d"
            ]
        ]
    },
    {
        "id": "d9a932378c346d6d",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1050,
        "y": 1460,
        "wires": []
    },
    {
        "id": "983f0bc862fcab0b",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 130,
        "y": 1540,
        "wires": [
            [
                "118fa61a26d101c9"
            ]
        ]
    },
    {
        "id": "118fa61a26d101c9",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.7 авто 2 (ліві ваги, направлені від вагів для заїзду від елеватора)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=4&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 500,
        "y": 1540,
        "wires": [
            [
                "1be5a4a29a22e761"
            ]
        ]
    },
    {
        "id": "1be5a4a29a22e761",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 890,
        "y": 1540,
        "wires": [
            [
                "666fd137689e81db"
            ]
        ]
    },
    {
        "id": "666fd137689e81db",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1050,
        "y": 1540,
        "wires": []
    },
    {
        "id": "66f81cbd2616e38e",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 130,
        "y": 1580,
        "wires": [
            [
                "2551ce00e010f0b9"
            ]
        ]
    },
    {
        "id": "2551ce00e010f0b9",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "HL3.8 авто 2 (ліві ваги, направлені до вагів для виїзду від елеватора)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=5&timeout=0'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 500,
        "y": 1580,
        "wires": [
            [
                "dbde5fc4f8b7336f"
            ]
        ]
    },
    {
        "id": "dbde5fc4f8b7336f",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 890,
        "y": 1580,
        "wires": [
            [
                "5e1a1437e8ac7017"
            ]
        ]
    },
    {
        "id": "5e1a1437e8ac7017",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1050,
        "y": 1580,
        "wires": []
    },
    {
        "id": "3ae35264b1baf7ef",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 1740,
        "wires": [
            [
                "d1d1fb0b7dbb031f"
            ]
        ]
    },
    {
        "id": "d1d1fb0b7dbb031f",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Закрити Веса  праві(немає плати)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=2&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 440,
        "y": 1740,
        "wires": [
            [
                "45fd7aa98ea5c1a3"
            ]
        ]
    },
    {
        "id": "45fd7aa98ea5c1a3",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 710,
        "y": 1740,
        "wires": [
            [
                "a82e48f2d0c3cee2"
            ]
        ]
    },
    {
        "id": "a82e48f2d0c3cee2",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 1740,
        "wires": []
    },
    {
        "id": "826b69f6ac48f482",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 1780,
        "wires": [
            [
                "b86b20285d3de17f"
            ]
        ]
    },
    {
        "id": "b86b20285d3de17f",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Відкрити Веса праві(немає плати)",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=3&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 440,
        "y": 1780,
        "wires": [
            [
                "f2d0eb1e497213b2"
            ]
        ]
    },
    {
        "id": "f2d0eb1e497213b2",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 710,
        "y": 1780,
        "wires": [
            [
                "b5ffa2306b8e5fc0"
            ]
        ]
    },
    {
        "id": "b5ffa2306b8e5fc0",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 890,
        "y": 1780,
        "wires": []
    },
    {
        "id": "7516027ef6263518",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 1880,
        "wires": [
            [
                "8d667473a12ae48d"
            ]
        ]
    },
    {
        "id": "8d667473a12ae48d",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Закрити Веса  ліві",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=6&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 1880,
        "wires": [
            [
                "1001bdd429d739e3"
            ]
        ]
    },
    {
        "id": "1001bdd429d739e3",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 1880,
        "wires": [
            [
                "5ebaf236b6c473a5"
            ]
        ]
    },
    {
        "id": "5ebaf236b6c473a5",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 1880,
        "wires": []
    },
    {
        "id": "58c13ee94e93010f",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "перемикання",
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
        "x": 170,
        "y": 1920,
        "wires": [
            [
                "06e2404d5891daa4"
            ]
        ]
    },
    {
        "id": "06e2404d5891daa4",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "Відкрити Веса ліві",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/leds.cgi?led=7&timeout=2'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 390,
        "y": 1920,
        "wires": [
            [
                "39652f0c08301f63"
            ]
        ]
    },
    {
        "id": "39652f0c08301f63",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 1920,
        "wires": [
            [
                "7c858740fff87914"
            ]
        ]
    },
    {
        "id": "7c858740fff87914",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 1920,
        "wires": []
    },
    {
        "id": "ef5bea5bf8c375ce",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A4.2 - ВК-модуль(ip від 2.1) Шлагбаум SH3, SH4 - Веса 1 і 2 10.107.25.120 від елеватора",
        "info": "\nresponse>\n<led0>0</led0> - червоне\n<led1>0</led1> - червоне\n<led2>0</led2> - червоне\n<led3>1</led3> - зелене\n<led4>0</led4> - резер\n<led5>0</led5> - резер\n<led6>0</led6> - резер\n<led7>0</led7> - резер\n</response>\n\n\n\n\n http://10.107.25.112/protect/leds.cgi?led=0&timeout=0",
        "x": 600,
        "y": 1680,
        "wires": []
    },
    {
        "id": "c6418464a279658b",
        "type": "inject",
        "z": "1d680a8744aafa8d",
        "name": "status",
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
        "x": 210,
        "y": 2020,
        "wires": [
            [
                "e913b16c06e08827"
            ]
        ]
    },
    {
        "id": "e913b16c06e08827",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "status 120",
        "func": "msg.url = 'http://admin:vkmodule@10.107.25.120/protect/status.xml'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 2020,
        "wires": [
            [
                "1b1317e151b0a63b"
            ]
        ]
    },
    {
        "id": "1b1317e151b0a63b",
        "type": "http request",
        "z": "1d680a8744aafa8d",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "authType": "",
        "senderr": false,
        "x": 590,
        "y": 2020,
        "wires": [
            [
                "ddc9c2a00c95914a"
            ]
        ]
    },
    {
        "id": "ddc9c2a00c95914a",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 2020,
        "wires": []
    },
    {
        "id": "3b29adc983927d98",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A3.3 - ВК-модуль() ваги ліві ІП- 10.107.25.115",
        "info": "\n\n\n\n http://10.107.25.115/protect/leds.cgi?led=0&timeout=0",
        "x": 400,
        "y": 2140,
        "wires": []
    },
    {
        "id": "ee048ffcc747d161",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "y": 2220,
        "wires": [
            [
                "52f0f70216dcb78d"
            ]
        ]
    },
    {
        "id": "52f0f70216dcb78d",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = String.fromCharCode(0);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 2220,
        "wires": [
            [
                "cd2787d30fd27713"
            ]
        ]
    },
    {
        "id": "cd2787d30fd27713",
        "type": "tcp request",
        "z": "1d680a8744aafa8d",
        "server": "10.107.25.115",
        "port": "9761",
        "out": "time",
        "ret": "string",
        "splitc": "200",
        "name": "",
        "x": 550,
        "y": 2220,
        "wires": [
            [
                "0efc93d22051b2b1"
            ]
        ]
    },
    {
        "id": "0efc93d22051b2b1",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 770,
        "y": 2220,
        "wires": []
    },
    {
        "id": "9bf3634c626ceb63",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "A3.4 - ВК-модуль() ваги праві ІП- 10.107.25.116",
        "info": "\n\n\n\n http://10.107.25.115/protect/leds.cgi?led=0&timeout=0",
        "x": 400,
        "y": 2300,
        "wires": []
    },
    {
        "id": "ced58219e1781018",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "y": 2380,
        "wires": [
            [
                "1f5ee15b330eafe9"
            ]
        ]
    },
    {
        "id": "1f5ee15b330eafe9",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = String.fromCharCode(0);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 2380,
        "wires": [
            [
                "12f974b4a11816c4"
            ]
        ]
    },
    {
        "id": "12f974b4a11816c4",
        "type": "tcp request",
        "z": "1d680a8744aafa8d",
        "server": "10.107.25.116",
        "port": "9761",
        "out": "count",
        "ret": "string",
        "splitc": "12",
        "name": "",
        "x": 550,
        "y": 2380,
        "wires": [
            [
                "71d1de2b2ce3a9d9"
            ]
        ]
    },
    {
        "id": "78ca80cbad53c8a3",
        "type": "debug",
        "z": "1d680a8744aafa8d",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1010,
        "y": 2380,
        "wires": []
    },
    {
        "id": "71d1de2b2ce3a9d9",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "var str = msg.payload\nmsg.payload = str.substring(1,8);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2380,
        "wires": [
            [
                "78ca80cbad53c8a3"
            ]
        ]
    },
    {
        "id": "48a93539af28973f",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "QL3   Табло 10.107.25.123 Ваги праві дальні від воріт",
        "info": "",
        "x": 440,
        "y": 2560,
        "wires": []
    },
    {
        "id": "1dde4ed674486a19",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "x": 200,
        "y": 2620,
        "wires": [
            [
                "424c86c786ac6364",
                "35a9240f3028a00f"
            ]
        ]
    },
    {
        "id": "424c86c786ac6364",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 2620,
        "wires": [
            [
                "8c83a1d2f29a93b5"
            ]
        ]
    },
    {
        "id": "8c83a1d2f29a93b5",
        "type": "converter",
        "z": "1d680a8744aafa8d",
        "name": "",
        "from": "win1251",
        "x": 500,
        "y": 2640,
        "wires": [
            [
                "12534ddf8bc8e3e3"
            ]
        ]
    },
    {
        "id": "35a9240f3028a00f",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 2660,
        "wires": [
            [
                "8c83a1d2f29a93b5"
            ]
        ]
    },
    {
        "id": "12534ddf8bc8e3e3",
        "type": "tcp out",
        "z": "1d680a8744aafa8d",
        "host": "10.107.25.123",
        "port": "5601",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 710,
        "y": 2640,
        "wires": []
    },
    {
        "id": "5620def312d1e77e",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "QL4  Табло 10.107.25.124 Ваги ліві дальні від воріт",
        "info": "",
        "x": 390,
        "y": 2760,
        "wires": []
    },
    {
        "id": "718aa9a35efb24be",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "y": 2820,
        "wires": [
            [
                "0e995da571b56f96",
                "748971ed9af0f823"
            ]
        ]
    },
    {
        "id": "0e995da571b56f96",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 2820,
        "wires": [
            [
                "37a3c8069080b3c9"
            ]
        ]
    },
    {
        "id": "37a3c8069080b3c9",
        "type": "converter",
        "z": "1d680a8744aafa8d",
        "name": "",
        "from": "win1251",
        "x": 460,
        "y": 2840,
        "wires": [
            [
                "94f163eac54fdf36"
            ]
        ]
    },
    {
        "id": "748971ed9af0f823",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 2860,
        "wires": [
            [
                "37a3c8069080b3c9"
            ]
        ]
    },
    {
        "id": "94f163eac54fdf36",
        "type": "tcp out",
        "z": "1d680a8744aafa8d",
        "host": "10.107.25.124",
        "port": "55666",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 710,
        "y": 2840,
        "wires": []
    },
    {
        "id": "6dc2c1bc55e18234",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "QL1 Табло 10.107.25.121 Ваги ліві ближні до воріт",
        "info": "",
        "x": 410,
        "y": 2940,
        "wires": []
    },
    {
        "id": "706e02062dad7377",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "y": 3000,
        "wires": [
            [
                "5797e5fbee62a3e6",
                "a1c23aef43570f38"
            ]
        ]
    },
    {
        "id": "5797e5fbee62a3e6",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 3000,
        "wires": [
            [
                "18f3dd101240ba26"
            ]
        ]
    },
    {
        "id": "18f3dd101240ba26",
        "type": "converter",
        "z": "1d680a8744aafa8d",
        "name": "",
        "from": "win1251",
        "x": 480,
        "y": 3020,
        "wires": [
            [
                "62bf4e549082859e"
            ]
        ]
    },
    {
        "id": "a1c23aef43570f38",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 3040,
        "wires": [
            [
                "18f3dd101240ba26"
            ]
        ]
    },
    {
        "id": "62bf4e549082859e",
        "type": "tcp out",
        "z": "1d680a8744aafa8d",
        "host": "10.107.25.121",
        "port": "3301",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 730,
        "y": 3020,
        "wires": []
    },
    {
        "id": "a026299340d62460",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "QL2 Табло 10.107.25.122 Ваги праві ближні до ворті",
        "info": "",
        "x": 420,
        "y": 3120,
        "wires": []
    },
    {
        "id": "e2c949207ca71dc0",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "y": 3180,
        "wires": [
            [
                "6a5d0da043b86cb3",
                "7a5cde12b5187e4e"
            ]
        ]
    },
    {
        "id": "6a5d0da043b86cb3",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 3180,
        "wires": [
            [
                "f49fd297fb144114"
            ]
        ]
    },
    {
        "id": "f49fd297fb144114",
        "type": "converter",
        "z": "1d680a8744aafa8d",
        "name": "",
        "from": "win1251",
        "x": 480,
        "y": 3200,
        "wires": [
            [
                "1b879e88de41aaaf"
            ]
        ]
    },
    {
        "id": "7a5cde12b5187e4e",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 3220,
        "wires": [
            [
                "f49fd297fb144114"
            ]
        ]
    },
    {
        "id": "1b879e88de41aaaf",
        "type": "tcp out",
        "z": "1d680a8744aafa8d",
        "host": "10.107.25.122",
        "port": "3302",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 730,
        "y": 3200,
        "wires": []
    },
    {
        "id": "989deb46cd793c19",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "QL10 Табло 10.107.25.125 Між воротами лівими і правими",
        "info": "",
        "x": 460,
        "y": 3320,
        "wires": []
    },
    {
        "id": "3168f14d297118fe",
        "type": "inject",
        "z": "1d680a8744aafa8d",
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
        "x": 200,
        "y": 3380,
        "wires": [
            [
                "e100c7d55ee183cc",
                "0243ab44138b81f3"
            ]
        ]
    },
    {
        "id": "e100c7d55ee183cc",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s1>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 3380,
        "wires": [
            [
                "a51f3d1f1a66ca95"
            ]
        ]
    },
    {
        "id": "a51f3d1f1a66ca95",
        "type": "converter",
        "z": "1d680a8744aafa8d",
        "name": "",
        "from": "win1251",
        "x": 500,
        "y": 3400,
        "wires": [
            [
                "07968e427f681818"
            ]
        ]
    },
    {
        "id": "0243ab44138b81f3",
        "type": "function",
        "z": "1d680a8744aafa8d",
        "name": "",
        "func": "msg.payload = '<s2>діма Липа'\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 3420,
        "wires": [
            [
                "a51f3d1f1a66ca95"
            ]
        ]
    },
    {
        "id": "07968e427f681818",
        "type": "tcp out",
        "z": "1d680a8744aafa8d",
        "host": "10.107.25.125",
        "port": "60000",
        "beserver": "client",
        "base64": false,
        "end": false,
        "name": "",
        "x": 750,
        "y": 3400,
        "wires": []
    },
    {
        "id": "be25b3deb70c17a0",
        "type": "comment",
        "z": "1d680a8744aafa8d",
        "name": "Додав сьогодні",
        "info": "**Додав сьогодні**",
        "x": 160,
        "y": 2480,
        "wires": []
    }
]
