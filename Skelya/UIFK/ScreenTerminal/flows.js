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
        "id": "77d56a86e263e328",
        "type": "tab",
        "label": "Send Event to 1C",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "ba6b9558dcf5f1e9",
        "type": "tab",
        "label": "Поток 1",
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
        "width": "18",
        "collapse": false,
        "className": ""
    },
    {
        "id": "fa890cb01fe3b58c",
        "type": "ui_tab",
        "name": "Granary",
        "icon": "dashboard",
        "order": 1,
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
        "x": 190,
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
        "width": "18",
        "height": "11",
        "format": "<style>\n\n    .centered-text {\n        position: absolute;\n        top: 60px;\n        left: 5%;\n        transform: translateX(-5%);\n        text-align: center;\n        font-size: 3em;\n        font-weight: bold;\n        color: black;\n\n    }\n\n    .clock {\n        //text-align: right;\n        font-size: 24px;\n        font-weight: bold;\n        position: absolute; /* абсолютне позиціонування */\n        top: 10px; /* відступ від нижнього краю */\n        right: 10px; /* відступ від правого краю */\n    }\n\n    .pointName-test {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 30px;\n        font-weight: bold;\n    }\n\n    .warning {\n        position: absolute;\n        color: red;\n        bottom: 0;\n        left: 0;\n        font-weight: bold;\n        padding: 10px;\n        width: 90%;\n        text-align: center;\n        font-size: 3em;\n        ;\n    }\n    \n    /* Стилі для вікна */\n    .modal {\n        display: none;\n        position: fixed;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n    /* Стилі для вікна */\n    .modal-content {\n        background-color: white;\n        padding: 20px;\n        border-radius: 5px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 90%;\n        height: 90%;\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n    /* Стилі для вікна */\n    .text-modal {\n        margin-top: 5%;\n        text-align: start;\n    }\n    /*\n    .body-msg {\n        width: 800px;\n    }\n    */\n    /* Стилі для периметра */\n    .footer {\n        position: fixed; /* Фиксированное положение */\n        left: 0; /* Прижимаем к левому краю */\n        bottom: 0; /* Прижимаем к нижнему краю */\n        width: 100%; /* Ширина на всю страницу */\n        background-color: lightgray; /* Цвет фона */\n        padding: 10px; /* Внутренний отступ */\n    }\n    /* Стилі для периметра */\n    .footer > div {\n        display: inline-block; /* Чтобы прямоугольник и текст были на одной строке */\n    }\n    /* Стилі для статуса периметра */\n    .status-ok {\n        width: 100px; /* Ширина прямоугольника */\n        height: 20px; /* Высота прямоугольника */\n        background-color: green; /* Цвет прямоугольника */\n        display: inline-block; /* Продолжить на той же строке */\n    }\n    /* Стилі для статуса периметра */\n    .status-false {\n        width: 100px; /* Ширина прямоугольника */\n        height: 20px; /* Высота прямоугольника */\n        background-color: red; /* Цвет прямоугольника */\n        display: inline-block; /* Продолжить на той же строке */\n    }\n    /* Стилі для таймера модалки */\n    #timer {\n        position: absolute; /* абсолютне позиціонування */\n        bottom: 10px; /* відступ від нижнього краю */\n        right: 10px; /* відступ від правого краю */\n        color: red; /* червоний колір */\n        font-size: 32px;\n        font-weight: bold;\n    }\n\n    .column > div:first-child {\n        margin-top: 150px; /* Отступ сверху для первого элемента в колонке */\n    }\n    \n    .column > div {\n        display: block;\n        margin-bottom: 10px; /* Отступ между элементами */\n        font-size: 24px;\n        font-weight: bold;\n    }\n\n\n</style>\n<div class=\"body-msg\">\n    <div class=\"pointName-test\">\n            <p>Контрольна точка: {{msg.point}}</p>\n            <p class=\"clock\">{{msg.time}}</p>\n\n\n\n        <div class=\"centered-text\">\n            Вага: {{msg.payload}}\n        </div>\n        <div class=\"footer\">\n            <div>\n                Статус периметра лівий:\n                <div class=\"{{msg.rectangle}}\"></div>\n            </div>\n            <div>\n                Статус периметра правий:\n                <div class=\"{{msg.rectangle2}}\"></div>\n            </div>\n        </div>\n        <div class=\"warning\">\n            {{msg.warning}}\n        </div>\n\n        <div id=\"myModal\" class=\"modal\">\n            <div class=\"modal-content\">\n                <div class=\"text-modal\">\n                    <div ng-bind-html=\"msg.message\"></div>\n                    <!-- {{msg.message}} -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"column\">\n        <div ng-bind-html=\"msg.cardNfc\"></div>\n        <div ng-bind-html=\"msg.sendOnBoard\"></div>\n\n        <div style=\"color: red;\" ng-bind-html=\"msg.res_1C\"></div>\n    </div>\n\n    <div id=\"timer\">\n        <div ng-bind-html=\"msg.timer\"></div>\n    </div>\n</div>\n\n    <script type=\"text/javascript\">\n        (function(scope) {\n        scope.$watch('msg', function(data) {\n            \n            // Отримуємо модальне вікно\n            var modal = document.getElementById(\"myModal\");\n            \n            // Показуємо модальне вікно\n            if(data.message){\n\n                console.log('msg', data);\n                modal.style.display = \"block\";\n\n                var textElement = document.getElementById(\"myModal\");\n                let colorModal = (data.error) ? 'red': 'rgb(0, 0, 0)'\n                // Змінюємо колір букв за допомогою стилів\n                textElement.style.color =colorModal;\n                \n                // Через 5 секунд закриваємо модальне вікно\n                setTimeout(function() {\n                    modal.style.display = \"none\";\n                }, data.showTime * 1000);\n            }\n           \n        });\n    })(scope);\n\n    </script>",
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
        "x": 570,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "47abebae838f67ad",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "logic",
        "func": "msg.showTime = (msg.payload.showTime) ? msg.payload.showTime : false\nmsg.message = flow.get(\"message1C\")\nmsg.error = (msg.payload.error) ? msg.payload.error : false\n\nmsg.time = flow.get(\"time\")\nmsg.point = flow.get(\"point\")\n\nlet statusOptical = flow.get(\"opticalSensor\")\n\nmsg.warning = (statusOptical) ? \"Неправильне позиціонування авто на вагах\" : \"\"\n\nmsg.payload = flow.get(\"weight\")\n\n\nlet left =  flow.get(\"left\")\nlet right =  flow.get(\"right\")\nmsg.rectangle = left == \"dn\" ? \"status-ok\" : \"status-false\" \nmsg.rectangle2 = right == \"dn\" ? \"status-ok\" : \"status-false\"\n\nmsg.cardNfc = flow.get(\"cardNfc\")\nmsg.sendOnBoard = flow.get(\"sendOnBoard\")\nmsg.res_1C = global.get(\"res_1C\")\n\nlet timer = flow.get(\"timer\")\nif (timer != \"\"){\n    msg.timer = timer\n    timer = timer - 1;\n    flow.set(\"timer\", timer)\n}else{\n    msg.timer = timer\n}\n\nreturn msg;",
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
        "timeout": "",
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
        "x": 180,
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
        "func": "//flow.set(\"time\", msg.time)\nflow.set(\"point\", 'Ваги 1')\nflow.set(\"message1C\", false)\nflow.set(\"block\", false)\nflow.set(\"opticalSensor\", false)\nflow.set(\"weight\", 0)\nflow.set(\"weightTCP\", 0)\n\n\nflow.set(\"cardNfc\", \"\")\nflow.set(\"sendOnBoard\", \"\")\nglobal.set(\"res_1C\", \"\")\nflow.set(\"timer\", \"\")\nflow.set(\"securityCard\", [\"BAA0025F\", \"9AE58E74\"])\nflow.set(\"driver_card\", \"\")\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
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
        "id": "315c5d86faeaa6cb",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "weight",
        "func": "const weight = Number(msg.payload); // Вага в кг\n\nif (weight > 1000) {\n    let formattedWeight = weight.toLocaleString()\n    formattedWeight = formattedWeight.replace(\",\", \" \")\n    msg.payload = formattedWeight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n} else {\n    // console.log(weight); // Вивід ваги без форматування\n    //flow.set(\"weight\", weight)\n    msg.payload = weight + \" кг\"\n    flow.set(\"weight\", msg.payload)\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 240,
        "wires": [
            [
                "c77e7a3fbf03940a"
            ]
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
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 870,
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
        "active": false,
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
        "x": 410,
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
        "x": 400,
        "y": 100,
        "wires": [
            [
                "2a3e9ab3bc2daa8c"
            ]
        ]
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
        "x": 680,
        "y": 240,
        "wires": []
    },
    {
        "id": "f507310dfa8d3058",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Отриманн ваги і позиціонування він центрального РПІ",
        "info": "",
        "x": 290,
        "y": 180,
        "wires": []
    },
    {
        "id": "7f3c2b79314972d3",
        "type": "trigger",
        "z": "28baf7452715fc07",
        "name": "",
        "op1": "",
        "op2": "0",
        "op1type": "nul",
        "op2type": "str",
        "duration": "2",
        "extend": false,
        "overrideDelay": false,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 370,
        "y": 340,
        "wires": [
            [
                "315c5d86faeaa6cb",
                "0c2c73de5fbffe4e"
            ]
        ]
    },
    {
        "id": "0d3d84172f2813ea",
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
        "repeat": "10",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 340,
        "wires": [
            [
                "7f3c2b79314972d3"
            ]
        ]
    },
    {
        "id": "c1149104a90e2b7a",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 1",
        "func": "msg.reset = true\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 260,
        "wires": [
            [
                "7f3c2b79314972d3"
            ]
        ]
    },
    {
        "id": "0c2c73de5fbffe4e",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 104",
        "active": false,
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
        "id": "edeb9f319ea897da",
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
        "repeat": "3.5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 900,
        "wires": [
            [
                "ef00d8cf34114803"
            ]
        ]
    },
    {
        "id": "ef00d8cf34114803",
        "type": "exec",
        "z": "28baf7452715fc07",
        "command": "node /home/pi/acr1252/nfc.js",
        "addpay": "",
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "read",
        "x": 350,
        "y": 900,
        "wires": [
            [
                "bf78af0aaeba0f8f",
                "fa86444d6c6a624d"
            ],
            [],
            []
        ]
    },
    {
        "id": "bf78af0aaeba0f8f",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 2",
        "func": "try{\n    let inDate = JSON.parse(msg.payload)\n    if (inDate.uid){\n        inDate.uid = inDate.uid.toUpperCase()\n        msg.payload = inDate\n        var timer = 30\n        flow.set(\"timer\", timer)\n        msg.delay = timer * 1000\n        return msg;\n    }\n}catch(e){\n\n}\n\n\n\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 900,
        "wires": [
            [
                "8ae9267ca48c1e5c",
                "af97c11b85aa28ec",
                "691cc38e2a036c6a"
            ]
        ]
    },
    {
        "id": "e52ce0ee3fed4322",
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
        "x": 170,
        "y": 1020,
        "wires": [
            [
                "28021fe1de57ba0b"
            ]
        ]
    },
    {
        "id": "28021fe1de57ba0b",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 4",
        "func": "msg.url = `http://admin:admin@10.30.1.116/protect/status.xml`\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 1020,
        "wires": [
            [
                "bbb3c1d2725d65e8"
            ]
        ]
    },
    {
        "id": "bbb3c1d2725d65e8",
        "type": "http request",
        "z": "28baf7452715fc07",
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
        "x": 550,
        "y": 1020,
        "wires": [
            [
                "ab35f548f09e1df7"
            ]
        ]
    },
    {
        "id": "b23808b0afb047d3",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 105",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 1060,
        "wires": []
    },
    {
        "id": "ab35f548f09e1df7",
        "type": "xml",
        "z": "28baf7452715fc07",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 150,
        "y": 1060,
        "wires": [
            [
                "99f99d9e689cd6f5"
            ]
        ]
    },
    {
        "id": "99f99d9e689cd6f5",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 5",
        "func": "flow.set(\"left\", msg.payload.response.btn0[0])\nflow.set(\"right\", msg.payload.response.btn1[0])\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1060,
        "wires": [
            [
                "b23808b0afb047d3"
            ]
        ]
    },
    {
        "id": "6a33c36bdb96cf25",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Get status perimetr",
        "info": "",
        "x": 150,
        "y": 980,
        "wires": []
    },
    {
        "id": "6d84fa5a684437b8",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Read NFC",
        "info": "",
        "x": 120,
        "y": 860,
        "wires": []
    },
    {
        "id": "f9f1afc8447a59b5",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": " Обнуляєм вагу, якщо  немає конекта",
        "info": "",
        "x": 210,
        "y": 300,
        "wires": []
    },
    {
        "id": "bcfc3d97048771a2",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Дашборд",
        "info": "",
        "x": 760,
        "y": 420,
        "wires": []
    },
    {
        "id": "d26a76d778b1c4ab",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 6",
        "func": "let led = 0 //    Переменная \"led\" передает номер реле, состояние которого изменяем.\n\n//Переменная \"timeout\" устанавливает длительность включения реле в секундах. Допустимые значения 0...255. Если установлен 0, то включение на постоянно. \n//Если установлено 1-255, то через заданное количество секунд реле отключится.\nlet timeout = 0 \n\n\nmsg.url = `http://admin:admin@10.30.1.116/protect/leds.cgi?led=${led}&timeout=${timeout}`\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1340,
        "wires": [
            [
                "855786e67c054d6c"
            ]
        ]
    },
    {
        "id": "855786e67c054d6c",
        "type": "http request",
        "z": "28baf7452715fc07",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "persist": false,
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 490,
        "y": 1340,
        "wires": [
            [
                "19035319a77fdbab"
            ]
        ]
    },
    {
        "id": "08aea7b55111f208",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 106",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1310,
        "y": 1340,
        "wires": []
    },
    {
        "id": "1aaf0765cb50a6fe",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Swith light box",
        "info": "",
        "x": 170,
        "y": 1280,
        "wires": []
    },
    {
        "id": "0310fe75341f65be",
        "type": "http in",
        "z": "28baf7452715fc07",
        "name": "",
        "url": "/sendOnBoard",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 160,
        "y": 1160,
        "wires": [
            [
                "f0cc9c3b09a7f3bb"
            ]
        ]
    },
    {
        "id": "aaddda10c7b22f1b",
        "type": "http response",
        "z": "28baf7452715fc07",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 710,
        "y": 1160,
        "wires": []
    },
    {
        "id": "f0cc9c3b09a7f3bb",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 8",
        "func": "flow.set(\"sendOnBoard\", msg.payload)\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 560,
        "y": 1160,
        "wires": [
            [
                "aaddda10c7b22f1b"
            ]
        ]
    },
    {
        "id": "af97c11b85aa28ec",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "Body",
        "func": "flow.set(\"cardNfc\", \"Карта отримана: \" + msg.payload.uid)\nvar securityCard = flow.get(\"securityCard\")\nvar elementExists = securityCard.includes(msg.payload.uid);\n\nlet securityMsg = {\n    \"device_id\": \"GuardTerminal\",\n    \"truck_id\": msg.payload.uid\n}\n\nlet driverMsg = {\n    \"device_id\": \"ScaleTerminal\",\n    \"truck_id\": msg.payload.uid\n}\n\nif (elementExists){\n    msg.payload = {\n        \"device_id\": \"GuardTerminal\",\n        \"truck_id\": flow.get(\"driver_card\")\n    }\n}else{\n    flow.set(\"driver_card\", msg.payload.uid)\n    msg.payload = driverMsg\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 990,
        "y": 960,
        "wires": [
            [
                "3a8fc154cf09e78e",
                "afe200fa562c4bf8"
            ]
        ]
    },
    {
        "id": "176efc142f5cb877",
        "type": "inject",
        "z": "28baf7452715fc07",
        "name": "Получено от 1С симуляция",
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
        "payload": "Получено с sendOnBoard",
        "payloadType": "str",
        "x": 1260,
        "y": 1260,
        "wires": [
            [
                "f0cc9c3b09a7f3bb"
            ]
        ]
    },
    {
        "id": "c5fe819e0f0059fb",
        "type": "inject",
        "z": "28baf7452715fc07",
        "name": "Ответ 1С Симуляция",
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
        "payload": "Ответ 1С получено",
        "payloadType": "str",
        "x": 1240,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "691cc38e2a036c6a",
        "type": "trigger",
        "z": "28baf7452715fc07",
        "name": "",
        "op1": "",
        "op2": "1",
        "op1type": "nul",
        "op2type": "num",
        "duration": "30",
        "extend": false,
        "overrideDelay": true,
        "units": "s",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 990,
        "y": 840,
        "wires": [
            [
                "28c9cb25013c2ff0"
            ]
        ]
    },
    {
        "id": "28c9cb25013c2ff0",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 12",
        "func": "flow.set(\"cardNfc\", \"\")\nflow.set(\"sendOnBoard\", \"\")\nglobal.set(\"res_1C\", \"\")\nflow.set(\"timer\", \"\")\nflow.set(\"driver_card\", \"\")\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1150,
        "y": 840,
        "wires": [
            [
                "322dcb7ca1e76dd5"
            ]
        ]
    },
    {
        "id": "322dcb7ca1e76dd5",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 110",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1310,
        "y": 840,
        "wires": []
    },
    {
        "id": "37803ba5e1f66b2f",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 111",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 910,
        "y": 360,
        "wires": []
    },
    {
        "id": "b1a7f6ade733ad7a",
        "type": "inject",
        "z": "28baf7452715fc07",
        "name": "Карта симуляция",
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
        "x": 1230,
        "y": 1180,
        "wires": [
            [
                "1f57cd7d330ce6eb"
            ]
        ]
    },
    {
        "id": "1f57cd7d330ce6eb",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 13",
        "func": "msg.payload = {\n    uid: \"BAA0022F\"\n}\nmsg.payload = JSON.stringify(msg.payload)\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1470,
        "y": 1180,
        "wires": [
            [
                "bf78af0aaeba0f8f"
            ]
        ]
    },
    {
        "id": "73a7f344f2411ae8",
        "type": "comment",
        "z": "28baf7452715fc07",
        "name": "Для симуляции",
        "info": "",
        "x": 1200,
        "y": 1100,
        "wires": []
    },
    {
        "id": "2f70c2dc274003af",
        "type": "http in",
        "z": "28baf7452715fc07",
        "name": "",
        "url": "/weight",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 240,
        "wires": [
            [
                "315c5d86faeaa6cb",
                "c1149104a90e2b7a",
                "ee274dd82a1547a0"
            ]
        ]
    },
    {
        "id": "ee274dd82a1547a0",
        "type": "http response",
        "z": "28baf7452715fc07",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 330,
        "y": 220,
        "wires": []
    },
    {
        "id": "3a8fc154cf09e78e",
        "type": "link out",
        "z": "28baf7452715fc07",
        "name": "1c send",
        "mode": "link",
        "links": [
            "711e039ca715894e"
        ],
        "x": 1115,
        "y": 960,
        "wires": []
    },
    {
        "id": "46d8c4abccd3cf4d",
        "type": "http in",
        "z": "28baf7452715fc07",
        "name": "",
        "url": "/lightBox",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 1340,
        "wires": [
            [
                "d26a76d778b1c4ab",
                "c065cba79768eda7"
            ]
        ]
    },
    {
        "id": "c065cba79768eda7",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 113",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 330,
        "y": 1400,
        "wires": []
    },
    {
        "id": "19035319a77fdbab",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 15",
        "func": "msg.url = `http://admin:admin@10.30.1.116/protect/status.xml`\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 670,
        "y": 1340,
        "wires": [
            [
                "1e836ffe547224bc"
            ]
        ]
    },
    {
        "id": "1e836ffe547224bc",
        "type": "http request",
        "z": "28baf7452715fc07",
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
        "x": 830,
        "y": 1340,
        "wires": [
            [
                "4d6013f756bf0ad0"
            ]
        ]
    },
    {
        "id": "4d6013f756bf0ad0",
        "type": "xml",
        "z": "28baf7452715fc07",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 970,
        "y": 1340,
        "wires": [
            [
                "54bba9ba950c87c1"
            ]
        ]
    },
    {
        "id": "846dac69a9c40b3a",
        "type": "http response",
        "z": "28baf7452715fc07",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1290,
        "y": 1380,
        "wires": []
    },
    {
        "id": "db290a33332f7275",
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
        "payload": "",
        "payloadType": "date",
        "x": 340,
        "y": 1260,
        "wires": [
            [
                "d26a76d778b1c4ab"
            ]
        ]
    },
    {
        "id": "54bba9ba950c87c1",
        "type": "function",
        "z": "28baf7452715fc07",
        "name": "function 16",
        "func": "\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1110,
        "y": 1340,
        "wires": [
            [
                "08aea7b55111f208",
                "846dac69a9c40b3a"
            ]
        ]
    },
    {
        "id": "8ae9267ca48c1e5c",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 114",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 650,
        "y": 800,
        "wires": []
    },
    {
        "id": "afe200fa562c4bf8",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 115",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1170,
        "y": 920,
        "wires": []
    },
    {
        "id": "fa86444d6c6a624d",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 116",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 450,
        "y": 760,
        "wires": []
    },
    {
        "id": "266e47cdc4d75e09",
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
        "payload": "",
        "payloadType": "date",
        "x": 160,
        "y": 1660,
        "wires": [
            [
                "6179b89b5c2bfcb9"
            ]
        ]
    },
    {
        "id": "6179b89b5c2bfcb9",
        "type": "exec",
        "z": "28baf7452715fc07",
        "command": "node /home/pi/acr1252/test.js",
        "addpay": "",
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 410,
        "y": 1660,
        "wires": [
            [
                "44bc46a13726313a"
            ],
            [],
            []
        ]
    },
    {
        "id": "44bc46a13726313a",
        "type": "debug",
        "z": "28baf7452715fc07",
        "name": "debug 117",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 710,
        "y": 1640,
        "wires": []
    },
    {
        "id": "b88cdf19ad0f0eef",
        "type": "http request",
        "z": "77d56a86e263e328",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": "ignore",
        "url": "http://10.30.1.2/kku_dev/hs/PerimeterControl/api/SmartScales/TagEvent",
        "tls": "",
        "persist": true,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "basic",
        "senderr": false,
        "headers": [],
        "x": 550,
        "y": 80,
        "wires": [
            [
                "4e89328d2fe3c542",
                "5690ec2fb3f0782b"
            ]
        ]
    },
    {
        "id": "eaad932f76f124e6",
        "type": "inject",
        "z": "77d56a86e263e328",
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
        "y": 80,
        "wires": [
            [
                "bbb30a7b475d735d"
            ]
        ]
    },
    {
        "id": "4e89328d2fe3c542",
        "type": "debug",
        "z": "77d56a86e263e328",
        "name": "debug 107",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 790,
        "y": 80,
        "wires": []
    },
    {
        "id": "bbb30a7b475d735d",
        "type": "function",
        "z": "77d56a86e263e328",
        "name": "Test Body",
        "func": "msg.payload = {\n    \"device_id\":\"ScaleTerminal\",\n    \"truck_id\":\"1ABF607B\"\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 80,
        "wires": [
            [
                "b88cdf19ad0f0eef"
            ]
        ]
    },
    {
        "id": "711e039ca715894e",
        "type": "link in",
        "z": "77d56a86e263e328",
        "name": "link sent to 1C",
        "links": [
            "ae175a26d39eb619",
            "3a8fc154cf09e78e"
        ],
        "x": 315,
        "y": 160,
        "wires": [
            [
                "b88cdf19ad0f0eef",
                "3e492bbbc01b59d4"
            ]
        ]
    },
    {
        "id": "5690ec2fb3f0782b",
        "type": "function",
        "z": "77d56a86e263e328",
        "name": "function 14",
        "func": "if (msg.payload !== \"{}\"){\n    global.set(\"res_1C\", \"Службове повідомлення: \" + msg.payload)\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "3e492bbbc01b59d4",
        "type": "debug",
        "z": "77d56a86e263e328",
        "name": "debug 112",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 530,
        "y": 160,
        "wires": []
    },
    {
        "id": "c8c6d71c4636ef86",
        "type": "inject",
        "z": "ba6b9558dcf5f1e9",
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
        "onceDelay": "5",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 160,
        "y": 40,
        "wires": [
            [
                "e945fe0dd74bef13"
            ]
        ]
    },
    {
        "id": "e84c343309a2bc98",
        "type": "exec",
        "z": "ba6b9558dcf5f1e9",
        "command": "",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "open",
        "x": 430,
        "y": 100,
        "wires": [
            [
                "9854b9cf01fb8cb4"
            ],
            [],
            []
        ]
    },
    {
        "id": "9854b9cf01fb8cb4",
        "type": "debug",
        "z": "ba6b9558dcf5f1e9",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 600,
        "y": 100,
        "wires": []
    },
    {
        "id": "e945fe0dd74bef13",
        "type": "function",
        "z": "ba6b9558dcf5f1e9",
        "name": "function 1",
        "func": "msg.payload = 'DISPLAY=:0 chromium-browser -kiosk'\nmsg.payload = 'DISPLAY=:0 chromium-browser --disable-restore-session-state --kiosk --app=http://127.0.0.1:1880/ui/'\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 240,
        "y": 100,
        "wires": [
            [
                "e84c343309a2bc98"
            ]
        ]
    }
]
