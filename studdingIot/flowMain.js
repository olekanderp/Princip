[
    {
        "id": "e068fec5.fa4cc8",
        "type": "tab",
        "label": "avto1 АФТ"
    },
    {
        "id": "ef4d44ec.f22628",
        "type": "tab",
        "label": "processing_scale1"
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
        "id": "87a78ced.8e394",
        "type": "serial-port",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": ""
    },
    {
        "id": "6bd523ae7ae95f9a",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "564ec9b7374f6017",
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
        "id": "a872f2f334bf028d",
        "type": "ui_group",
        "name": "Склад-виробництва-насіння",
        "tab": "23ccd5174ba63ae7",
        "order": 2,
        "disp": true,
        "width": "8",
        "collapse": false,
        "className": ""
    },
    {
        "id": "73aa47c2dccd733d",
        "type": "ui_group",
        "name": "Час",
        "tab": "23ccd5174ba63ae7",
        "order": 3,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "57824bfc98184c0c",
        "type": "ui_group",
        "name": "Оновлення",
        "tab": "23ccd5174ba63ae7",
        "order": 4,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "219f127652ed0953",
        "type": "ui_group",
        "name": "Зважування",
        "tab": "23ccd5174ba63ae7",
        "order": 5,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "b2034a2b22217ae4",
        "type": "ui_group",
        "name": "Зона-встановлення",
        "tab": "23ccd5174ba63ae7",
        "order": 6,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "23ccd5174ba63ae7",
        "type": "ui_tab",
        "name": "CFG-Main",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "9b844d240972bd40",
        "type": "ui_group",
        "name": "Час",
        "tab": "bd05451a3f4664ea",
        "order": 2,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "f7212ccbe506b720",
        "type": "ui_group",
        "name": "Пункт-призначення",
        "tab": "bd05451a3f4664ea",
        "order": 5,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "a33b02296f9eae2a",
        "type": "ui_group",
        "name": "Замовлення-обрати",
        "tab": "bd05451a3f4664ea",
        "order": 8,
        "disp": true,
        "width": "7",
        "collapse": false,
        "className": ""
    },
    {
        "id": "4596be2352f910a1",
        "type": "ui_group",
        "name": "На-головну",
        "tab": "bd05451a3f4664ea",
        "order": 9,
        "disp": true,
        "width": "5",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0c92e160f882a8d2",
        "type": "ui_group",
        "name": "Зберегти",
        "tab": "bd05451a3f4664ea",
        "order": 11,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "96b6755094790ed1",
        "type": "ui_group",
        "name": "Вага",
        "tab": "bd05451a3f4664ea",
        "order": 10,
        "disp": true,
        "width": "4",
        "collapse": false,
        "className": ""
    },
    {
        "id": "a9d474c49dde265b",
        "type": "ui_group",
        "name": "Склад-насіння",
        "tab": "bd05451a3f4664ea",
        "order": 3,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "69e8a07b594b3024",
        "type": "ui_group",
        "name": "Замовлення",
        "tab": "bd05451a3f4664ea",
        "order": 7,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "bd05451a3f4664ea",
        "type": "ui_tab",
        "name": "Зважування",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "a2f640ef77e95873",
        "type": "ui_group",
        "name": "Головний-Склад",
        "tab": "23ccd5174ba63ae7",
        "order": 1,
        "disp": true,
        "width": "8",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0e83c6aa56f5e2ea",
        "type": "ui_group",
        "name": "Склад-виробництва-насіння",
        "tab": "bd05451a3f4664ea",
        "order": 1,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "00dbd4954bfb081f",
        "type": "ui_group",
        "name": "Склад-насіння-текст",
        "tab": "bd05451a3f4664ea",
        "order": 4,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "20f3c81d2e40ecb1",
        "type": "ui_group",
        "name": "Замовлення-text",
        "tab": "bd05451a3f4664ea",
        "order": 6,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "70902a8aa789236f",
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
        "id": "4a9360132790d3d2",
        "type": "ui_group",
        "name": "Проскануйте або введіть номер пломби",
        "tab": "7af4771e58852f96",
        "order": 1,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "7af4771e58852f96",
        "type": "ui_tab",
        "name": "Пломба",
        "icon": "dashboard",
        "order": 3,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "e52f50a6ed38ec53",
        "type": "ui_group",
        "name": "Збережена інформація",
        "tab": "7af4771e58852f96",
        "order": 2,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "63c10443f892b143",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "certname": "",
        "keyname": "",
        "caname": "",
        "servername": "",
        "verifyservercert": false,
        "alpnprotocol": ""
    },
    {
        "id": "aa7d3427.72044",
        "type": "serial-port",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "=",
        "bin": "false",
        "out": "char",
        "addchar": false
    },
    {
        "id": "2e6d76dd.e014ba",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "9962ed1d.6ccc18",
        "type": "inject",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 140,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "bd283742.7fc79",
        "type": "function",
        "z": "e068fec5.fa4cc8",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\nflow.set('currentWeight',currentWeight);\n\nmsg.payload = currentWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 140,
        "wires": [
            [
                "d6917081.47cca",
                "9eaf71ee.30753"
            ]
        ]
    },
    {
        "id": "94206846.2336a",
        "type": "comment",
        "z": "e068fec5.fa4cc8",
        "name": "Device level",
        "info": "",
        "x": 110,
        "y": 180,
        "wires": []
    },
    {
        "id": "f653d66f.f11e7",
        "type": "inject",
        "z": "e068fec5.fa4cc8",
        "name": "init",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "init",
        "payloadType": "str",
        "x": 110,
        "y": 80,
        "wires": [
            [
                "5f5ef191.8e3ae8"
            ]
        ]
    },
    {
        "id": "d7ffed6.a17139",
        "type": "comment",
        "z": "e068fec5.fa4cc8",
        "name": "INITIALIZING",
        "info": "",
        "x": 93.99999618530273,
        "y": 46.99999809265137,
        "wires": []
    },
    {
        "id": "5f5ef191.8e3ae8",
        "type": "function",
        "z": "e068fec5.fa4cc8",
        "name": "Модель весов",
        "func": "flow.set('inputString',\"CMD\");// відправляти треба w1\nflow.set('parser',function(v){\n            //тут пишем персер\n        return Number(v);\n        }\n    );\nglobal.set('scale_id','3a43d8ac-8a07-00e0-bd30-38271f019000');\nglobal.set('ip','172.16.18.41');\nglobal.set('video_camera_url','http://admin:admin333@192.168.104.247/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG');\n   \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "a94a931b.68249",
        "type": "function",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "func": "flow.set('tempCurrentWeight',msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "ee99388b.9d874",
        "type": "inject",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "props": [
            {
                "p": "payload",
                "v": "tempCurrentWeight",
                "vt": "flow"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "str"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "tempCurrentWeight",
        "payloadType": "flow",
        "x": 170,
        "y": 140,
        "wires": [
            [
                "bd283742.7fc79"
            ]
        ]
    },
    {
        "id": "d6917081.47cca",
        "type": "link out",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "links": [
            "5a245bf1.5a7664",
            "cf9c5dcc.e9ac9",
            "675e680c.65ced8",
            "cb239684.35464"
        ],
        "x": 645,
        "y": 140,
        "wires": []
    },
    {
        "id": "9eaf71ee.30753",
        "type": "debug",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 690,
        "y": 180,
        "wires": []
    },
    {
        "id": "d4277c12.90acc8",
        "type": "debug",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 430,
        "y": 360,
        "wires": []
    },
    {
        "id": "fcfd0fcf2f1cdebd",
        "type": "tcp in",
        "z": "e068fec5.fa4cc8",
        "name": "",
        "server": "client",
        "host": "192.168.0.106",
        "port": "1702",
        "datamode": "stream",
        "datatype": "utf8",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 140,
        "y": 320,
        "wires": [
            [
                "d4277c12.90acc8",
                "a94a931b.68249"
            ]
        ]
    },
    {
        "id": "526af467.93c684",
        "type": "exec",
        "z": "ef4d44ec.f22628",
        "command": "cat /proc/cpuinfo",
        "addpay": true,
        "append": "| grep Serial",
        "useSpawn": "",
        "timer": "5",
        "name": "",
        "x": 340,
        "y": 60,
        "wires": [
            [
                "a204171e.3f52c",
                "9a52262e.561c9"
            ],
            [],
            []
        ]
    },
    {
        "id": "cb239684.35464",
        "type": "link in",
        "z": "ef4d44ec.f22628",
        "name": "weight",
        "links": [
            "d6917081.47cca"
        ],
        "x": 25,
        "y": 400,
        "wires": [
            [
                "9dcdf464.0ea37",
                "8ba6879e.77edd"
            ]
        ]
    },
    {
        "id": "9dcdf464.0ea37",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 0) && (weight > 0) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 0) && (weight <=0) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if (transactionData[i] !== transactionData[i-1]){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable':msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 160,
        "y": 400,
        "wires": [
            [
                "1a5c4dd3.07e96a",
                "82c7b87e.6298a8",
                "566b9422.ef8444",
                "9e1ae050.46517",
                "8ce86b06.e78f3"
            ]
        ]
    },
    {
        "id": "8565242c.e959c",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar buisness_data = msg.req.query;\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = buisness_data.operation_name+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер авто: \"+buisness_data.truck1+\" \"+buisness_data.truck2+\" \"+buisness_data.item_name;\nmsg.transactionMetadata = transactionMetadata;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 700,
        "wires": [
            [
                "79990822.cb8688",
                "b52d534f.591a28"
            ]
        ]
    },
    {
        "id": "1a5c4dd3.07e96a",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 380,
        "y": 380,
        "wires": [
            [
                "f0226919.0782b"
            ],
            [
                "2c7f154f.37cf42",
                "b0722b96.f434e8"
            ]
        ]
    },
    {
        "id": "79990822.cb8688",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "events payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id');\nvar snapshot_events = flow.get('snapshot_events');\nvar snapshot = false;\n\nif (snapshot_events.indexOf(event_id)>=0){\n    snapshot = true;\n}\n\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'devices':[{'id':scale_id}],\n    'data':msg.metadata,\n    'description':msg.description\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('event_url');\nmsg.main_host = flow.get('main_host');\nmsg.event_url = flow.get('event_url');\nmsg.snapshot = snapshot;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 970,
        "y": 460,
        "wires": [
            [
                "2615557d.f705c2"
            ]
        ]
    },
    {
        "id": "f0226919.0782b",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 340,
        "wires": [
            [
                "79990822.cb8688",
                "92c15a30.df4288"
            ]
        ]
    },
    {
        "id": "82c7b87e.6298a8",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 380,
        "y": 420,
        "wires": [
            [
                "32ee73.0154118e"
            ]
        ]
    },
    {
        "id": "32ee73.0154118e",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага, кг: ' + msg.metadata.weight;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 420,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "3f2cbf17.6c9f48",
        "type": "inject",
        "z": "ef4d44ec.f22628",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 100,
        "y": 640,
        "wires": [
            [
                "7c65840.e22fcfc"
            ]
        ]
    },
    {
        "id": "7c65840.e22fcfc",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 640,
        "wires": [
            [
                "4a402474.932304"
            ]
        ]
    },
    {
        "id": "4a402474.932304",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 460,
        "y": 600,
        "wires": [
            [
                "51c8ebbc.d51c44"
            ],
            [
                "e318813c.9a0b58"
            ]
        ]
    },
    {
        "id": "e318813c.9a0b58",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 600,
        "y": 580,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "51c8ebbc.d51c44",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 600,
        "y": 540,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "d2d021f4.1d5838",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "main config",
        "func": "flow.set('prevWeight',null);\nflow.set('transaction',null);\nflow.set('transactionData',[]);\nflow.set('transactionMaxWeight',null);\nflow.set('transactionHasMinWeight',null);\nflow.set('transactionHasMaxWeight',null);\nflow.set('transactionHasMaxDuration',null);\nflow.set('lasttimedata', new Date());\nflow.set('checkHealth',null);\nflow.set('transactionWaybill',null);\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "25b30407.cf2354",
        "type": "inject",
        "z": "ef4d44ec.f22628",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 80,
        "y": 240,
        "wires": [
            [
                "3c800211.6d48e6",
                "d2d021f4.1d5838"
            ]
        ]
    },
    {
        "id": "d0d9d5f5.e72158",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 560,
        "y": 220,
        "wires": [
            [
                "a7c11265.d3e8f8"
            ]
        ]
    },
    {
        "id": "2c7f154f.37cf42",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 380,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "566b9422.ef8444",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 360,
        "y": 460,
        "wires": [
            [
                "738fa919.3694e"
            ]
        ]
    },
    {
        "id": "738fa919.3694e",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах, сек: ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 460,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "b5db389.5314b48",
        "type": "http in",
        "z": "ef4d44ec.f22628",
        "name": "",
        "url": "/firmware",
        "method": "post",
        "swaggerDoc": "",
        "x": 130,
        "y": 180,
        "wires": [
            [
                "e3524d02.7e1f38"
            ]
        ]
    },
    {
        "id": "e3524d02.7e1f38",
        "type": "file",
        "z": "ef4d44ec.f22628",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "x": 370,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "3c800211.6d48e6",
        "type": "file in",
        "z": "ef4d44ec.f22628",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "format": "utf8",
        "x": 370,
        "y": 220,
        "wires": [
            [
                "d0d9d5f5.e72158"
            ]
        ]
    },
    {
        "id": "d79db463.19d4a8",
        "type": "http in",
        "z": "ef4d44ec.f22628",
        "name": "",
        "url": "/serial",
        "method": "get",
        "swaggerDoc": "",
        "x": 110,
        "y": 60,
        "wires": [
            [
                "526af467.93c684"
            ]
        ]
    },
    {
        "id": "a204171e.3f52c",
        "type": "http response",
        "z": "ef4d44ec.f22628",
        "name": "",
        "x": 540,
        "y": 40,
        "wires": []
    },
    {
        "id": "9a52262e.561c9",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "",
        "func": "msg.payload = msg.payload.split(':')[1].replace('\\n','').replace(' ','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 530,
        "y": 120,
        "wires": [
            [
                "4545f41e.cf36f4"
            ]
        ]
    },
    {
        "id": "4545f41e.cf36f4",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 670,
        "y": 120,
        "wires": []
    },
    {
        "id": "1c0f15bc.83253a",
        "type": "inject",
        "z": "ef4d44ec.f22628",
        "name": "DEMO",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 80,
        "y": 120,
        "wires": [
            [
                "86c5e4f8.d4bfd8"
            ]
        ]
    },
    {
        "id": "86c5e4f8.d4bfd8",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_in_minus_id':'8DB9B239DF5252F0E055000000000001',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'snapshot_events':['80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0'],\n    'main_host':'https://156.67.53.93:8443/ords/ettn',\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':60000,\n    'maxDuration':600000,\n    'minWeight':-40,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':120\n}\nmsg.payload = device_config;\n// flow.set('scale_id','80096CB0EFD83B63E0533300000A4334');\n// flow.set('event_move_in_id','80096D9ABE7F68F3E0533300000A6C0D');\n// flow.set('event_move_out_id','80096D9ABE8068F3E0533300000A6C0D');\n// flow.set('event_max_weight_id','85A255F950F9BEF4E0533300000AC45D');\n// flow.set('event_off_id','85A2CC4570292DD1E0533300000A0C94');\n// flow.set('event_on_id', '85A2CC45702A2DD1E0533300000A0C94');\n// flow.set('event_max_duration','8642EE858DE89BAAE0533300000AFCC7');\n// flow.set('main_host','http://prod.apex.rest/ords/ettn');\n// flow.set('event_url','/iot_cli/events/log');\n// flow.set('state_url','/v1/device');\n// flow.set('maxWeight',40000);\n// flow.set('maxDuration',20000);\n// flow.set('checkHealthTimeout',3000);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 220,
        "y": 120,
        "wires": [
            [
                "e3524d02.7e1f38"
            ]
        ]
    },
    {
        "id": "8ba6879e.77edd",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 180,
        "y": 320,
        "wires": []
    },
    {
        "id": "b0722b96.f434e8",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 570,
        "y": 300,
        "wires": [
            [
                "7662a153.2672e"
            ]
        ]
    },
    {
        "id": "7662a153.2672e",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "empty waybill",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + Math.round(msg.metadata.duration/60)+ 'хв.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 730,
        "y": 300,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "92c15a30.df4288",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 920,
        "y": 300,
        "wires": []
    },
    {
        "id": "7434cf00.b689b8",
        "type": "http in",
        "z": "ef4d44ec.f22628",
        "name": "",
        "url": "/getWeight",
        "method": "get",
        "swaggerDoc": "",
        "x": 130,
        "y": 760,
        "wires": [
            [
                "e8b15882.d40aa8",
                "8565242c.e959c"
            ]
        ]
    },
    {
        "id": "db03181a.e28438",
        "type": "http response",
        "z": "ef4d44ec.f22628",
        "name": "",
        "x": 590,
        "y": 760,
        "wires": []
    },
    {
        "id": "e8b15882.d40aa8",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.reader){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 760,
        "wires": [
            [
                "db03181a.e28438",
                "ef24050c.cd9228"
            ]
        ]
    },
    {
        "id": "ef24050c.cd9228",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 610,
        "y": 800,
        "wires": []
    },
    {
        "id": "2615557d.f705c2",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 1130,
        "y": 300,
        "wires": []
    },
    {
        "id": "9e1ae050.46517",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 380,
        "y": 500,
        "wires": [
            [
                "53a08687.835ee"
            ]
        ]
    },
    {
        "id": "53a08687.835ee",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага, кг: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 500,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "8e1a12dc.df66d",
        "type": "switch",
        "z": "ef4d44ec.f22628",
        "name": "take snapshot",
        "property": "snapshot",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "outputs": 1,
        "x": 1312,
        "y": 534,
        "wires": [
            [
                "a5658983.a46a78"
            ]
        ]
    },
    {
        "id": "fc1a0740.599228",
        "type": "http in",
        "z": "ef4d44ec.f22628",
        "name": "",
        "url": "/getSimpleWeight",
        "method": "get",
        "swaggerDoc": "",
        "x": 160,
        "y": 880,
        "wires": [
            [
                "d13f1a10.851e2"
            ]
        ]
    },
    {
        "id": "d13f1a10.851e2",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata').weight;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 400,
        "y": 880,
        "wires": [
            [
                "b54eb07c.f904a8"
            ]
        ]
    },
    {
        "id": "b54eb07c.f904a8",
        "type": "http response",
        "z": "ef4d44ec.f22628",
        "name": "",
        "x": 530,
        "y": 880,
        "wires": []
    },
    {
        "id": "eee0a1e9.79ca28",
        "type": "http in",
        "z": "ef4d44ec.f22628",
        "name": "",
        "url": "/socket",
        "method": "get",
        "swaggerDoc": "",
        "x": 110,
        "y": 960,
        "wires": [
            [
                "d1398312.568ed8"
            ]
        ]
    },
    {
        "id": "7511ef30.b9687",
        "type": "template",
        "z": "ef4d44ec.f22628",
        "name": "socket page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n     \n  <body>\n    <h1><p id='weight'></p></h1>\n    \n     <script>\n    setTimeout(function() {\n       ;(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(\"./lib/\")},{\"./lib/\":2}],2:[function(_dereq_,module,exports){module.exports=_dereq_(\"./socket\");module.exports.parser=_dereq_(\"engine.io-parser\")},{\"./socket\":3,\"engine.io-parser\":19}],3:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(\"./transports\");var Emitter=_dereq_(\"component-emitter\");var debug=_dereq_(\"debug\")(\"engine.io-client:socket\");var index=_dereq_(\"indexof\");var parser=_dereq_(\"engine.io-parser\");var parseuri=_dereq_(\"parseuri\");var parsejson=_dereq_(\"parsejson\");var parseqs=_dereq_(\"parseqs\");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&\"object\"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol==\"https\"||uri.protocol==\"wss\";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&\"https:\"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?\"443\":\"80\"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:\"localhost\");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(\"string\"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||\"/engine.io\").replace(/\\/$/,\"\")+\"/\";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||\"t\";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[\"polling\",\"websocket\"];this.readyState=\"\";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(\"./transport\");Socket.transports=_dereq_(\"./transports\");Socket.parser=_dereq_(\"engine.io-parser\");Socket.prototype.createTransport=function(name){debug('creating transport \"%s\"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf(\"websocket\")!=-1){transport=\"websocket\"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit(\"error\",\"No transports available\")},0);return}else{transport=this.transports[0]}this.readyState=\"opening\";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(\"setting transport %s\",transport.name);var self=this;if(this.transport){debug(\"clearing existing transport %s\",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(\"drain\",function(){self.onDrain()}).on(\"packet\",function(packet){self.onPacket(packet)}).on(\"error\",function(e){self.onError(e)}).on(\"close\",function(){self.onClose(\"transport close\")})};Socket.prototype.probe=function(name){debug('probing transport \"%s\"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport \"%s\" opened',name);transport.send([{type:\"ping\",data:\"probe\"}]);transport.once(\"packet\",function(msg){if(failed)return;if(\"pong\"==msg.type&&\"probe\"==msg.data){debug('probe transport \"%s\" pong',name);self.upgrading=true;self.emit(\"upgrading\",transport);if(!transport)return;Socket.priorWebsocketSuccess=\"websocket\"==transport.name;debug('pausing current transport \"%s\"',self.transport.name);self.transport.pause(function(){if(failed)return;if(\"closed\"==self.readyState)return;debug(\"changing transport and sending upgrade packet\");cleanup();self.setTransport(transport);transport.send([{type:\"upgrade\"}]);self.emit(\"upgrade\",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport \"%s\" failed',name);var err=new Error(\"probe error\");err.transport=transport.name;self.emit(\"upgradeError\",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(\"probe error: \"+err);error.transport=transport.name;freezeTransport();debug('probe transport \"%s\" failed because of error: %s',name,err);self.emit(\"upgradeError\",error)}function onTransportClose(){onerror(\"transport closed\")}function onclose(){onerror(\"socket closed\")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('\"%s\" works - aborting \"%s\"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(\"open\",onTransportOpen);transport.removeListener(\"error\",onerror);transport.removeListener(\"close\",onTransportClose);self.removeListener(\"close\",onclose);self.removeListener(\"upgrading\",onupgrade)}transport.once(\"open\",onTransportOpen);transport.once(\"error\",onerror);transport.once(\"close\",onTransportClose);this.once(\"close\",onclose);this.once(\"upgrading\",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(\"socket open\");this.readyState=\"open\";Socket.priorWebsocketSuccess=\"websocket\"==this.transport.name;this.emit(\"open\");this.flush();if(\"open\"==this.readyState&&this.upgrade&&this.transport.pause){debug(\"starting upgrade probes\");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(\"opening\"==this.readyState||\"open\"==this.readyState){debug('socket receive: type \"%s\", data \"%s\"',packet.type,packet.data);this.emit(\"packet\",packet);this.emit(\"heartbeat\");switch(packet.type){case\"open\":this.onHandshake(parsejson(packet.data));break;case\"pong\":this.setPing();this.emit(\"pong\");break;case\"error\":var err=new Error(\"server error\");err.code=packet.data;this.onError(err);break;case\"message\":this.emit(\"data\",packet.data);this.emit(\"message\",packet.data);break}}else{debug('packet received with socket readyState \"%s\"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(\"handshake\",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(\"closed\"==this.readyState)return;this.setPing();this.removeListener(\"heartbeat\",this.onHeartbeat);this.on(\"heartbeat\",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(\"closed\"==self.readyState)return;self.onClose(\"ping timeout\")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(\"writing ping packet - expecting pong within %sms\",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket(\"ping\",function(){self.emit(\"ping\")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit(\"drain\")}else{this.flush()}};Socket.prototype.flush=function(){if(\"closed\"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug(\"flushing %d packets in socket\",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(\"flush\")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket(\"message\",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if(\"function\"==typeof data){fn=data;data=undefined}if(\"function\"==typeof options){fn=options;options=null}if(\"closing\"==this.readyState||\"closed\"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit(\"packetCreate\",packet);this.writeBuffer.push(packet);if(fn)this.once(\"flush\",fn);this.flush()};Socket.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.readyState=\"closing\";var self=this;if(this.writeBuffer.length){this.once(\"drain\",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose(\"forced close\");debug(\"socket closing - telling transport to close\");self.transport.close()}function cleanupAndClose(){self.removeListener(\"upgrade\",cleanupAndClose);self.removeListener(\"upgradeError\",cleanupAndClose);close()}function waitForUpgrade(){self.once(\"upgrade\",cleanupAndClose);self.once(\"upgradeError\",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug(\"socket error %j\",err);Socket.priorWebsocketSuccess=false;this.emit(\"error\",err);this.onClose(\"transport error\",err)};Socket.prototype.onClose=function(reason,desc){if(\"opening\"==this.readyState||\"open\"==this.readyState||\"closing\"==this.readyState){debug('socket close with reason: \"%s\"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners(\"close\");this.transport.close();this.transport.removeAllListeners();this.readyState=\"closed\";this.id=null;this.emit(\"close\",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./transport\":4,\"./transports\":5,\"component-emitter\":15,debug:17,\"engine.io-parser\":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(_dereq_,module,exports){var parser=_dereq_(\"engine.io-parser\");var Emitter=_dereq_(\"component-emitter\");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=\"\";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=\"TransportError\";err.description=desc;this.emit(\"error\",err);return this};Transport.prototype.open=function(){if(\"closed\"==this.readyState||\"\"==this.readyState){this.readyState=\"opening\";this.doOpen()}return this};Transport.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(\"open\"==this.readyState){this.write(packets)}else{throw new Error(\"Transport not open\")}};Transport.prototype.onOpen=function(){this.readyState=\"open\";this.writable=true;this.emit(\"open\")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(\"packet\",packet)};Transport.prototype.onClose=function(){this.readyState=\"closed\";this.emit(\"close\")}},{\"component-emitter\":15,\"engine.io-parser\":19}],5:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var XHR=_dereq_(\"./polling-xhr\");var JSONP=_dereq_(\"./polling-jsonp\");var websocket=_dereq_(\"./websocket\");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(\"open\"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(\"JSONP disabled\");return new JSONP(opts)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling-jsonp\":6,\"./polling-xhr\":7,\"./websocket\":9,\"xmlhttprequest-ssl\":10}],6:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(\"./polling\");var inherit=_dereq_(\"component-inherit\");module.exports=JSONPPolling;var rNewline=/\\n/g;var rEscapedNewline=/\\\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener(\"beforeunload\",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(\"script\");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(\"jsonp poll error\",e)};var insertAt=document.getElementsByTagName(\"script\")[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt)}else{(document.head||document.body).appendChild(script)}this.script=script;var isUAgecko=\"undefined\"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(\"iframe\");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(\"form\");var area=document.createElement(\"textarea\");var id=this.iframeId=\"eio_iframe_\"+this.index;var iframe;form.className=\"socketio\";form.style.position=\"absolute\";form.style.top=\"-1000px\";form.style.left=\"-1000px\";form.target=id;form.method=\"POST\";form.setAttribute(\"accept-charset\",\"utf-8\");area.name=\"d\";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError(\"jsonp polling iframe removal error\",e)}}try{var html='<iframe src=\"javascript:0\" name=\"'+self.iframeId+'\">';iframe=document.createElement(html)}catch(e){iframe=document.createElement(\"iframe\");iframe.name=self.iframeId;iframe.src=\"javascript:0\"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,\"\\\\\\n\");this.area.value=data.replace(rNewline,\"\\\\n\");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==\"complete\"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-inherit\":16}],7:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var Polling=_dereq_(\"./polling\");var Emitter=_dereq_(\"component-emitter\");var inherit=_dereq_(\"component-inherit\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling-xhr\");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==\"string\"&&data!==undefined;var req=this.request({method:\"POST\",data:data,isBinary:isBinary});var self=this;req.on(\"success\",fn);req.on(\"error\",function(err){self.onError(\"xhr post error\",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(\"xhr poll\");var req=this.request();var self=this;req.on(\"data\",function(data){self.onData(data)});req.on(\"error\",function(err){self.onError(\"xhr poll error\",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||\"GET\";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug(\"xhr open %s: %s\",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType=\"arraybuffer\"}if(\"POST\"==this.method){try{if(this.isBinary){xhr.setRequestHeader(\"Content-type\",\"application/octet-stream\")}else{xhr.setRequestHeader(\"Content-type\",\"text/plain;charset=UTF-8\")}}catch(e){}}if(\"withCredentials\"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(\"xhr data %s\",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(\"success\");this.cleanup()};Request.prototype.onData=function(data){this.emit(\"data\",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(\"error\",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if(\"undefined\"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(\"Content-Type\").split(\";\")[0]}catch(e){}if(contentType===\"application/octet-stream\"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return\"undefined\"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(\"onunload\",unloadHandler)}else if(global.addEventListener){global.addEventListener(\"beforeunload\",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-emitter\":15,\"component-inherit\":16,debug:17,\"xmlhttprequest-ssl\":10}],8:[function(_dereq_,module,exports){var Transport=_dereq_(\"../transport\");var parseqs=_dereq_(\"parseqs\");var parser=_dereq_(\"engine.io-parser\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling\");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=\"polling\";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=\"pausing\";function pause(){debug(\"paused\");self.readyState=\"paused\";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(\"we are currently polling - waiting to pause\");total++;this.once(\"pollComplete\",function(){debug(\"pre-pause polling complete\");--total||pause()})}if(!this.writable){debug(\"we are currently writing - waiting to pause\");total++;this.once(\"drain\",function(){debug(\"pre-pause writing complete\");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(\"polling\");this.polling=true;this.doPoll();this.emit(\"poll\")};Polling.prototype.onData=function(data){var self=this;debug(\"polling got data %s\",data);var callback=function(packet,index,total){if(\"opening\"==self.readyState){self.onOpen()}if(\"close\"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(\"closed\"!=this.readyState){this.polling=false;this.emit(\"pollComplete\");if(\"open\"==this.readyState){this.poll()}else{debug('ignoring poll - transport state \"%s\"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(\"writing close packet\");self.write([{type:\"close\"}])}if(\"open\"==this.readyState){debug(\"transport open - closing\");close()}else{debug(\"transport not open - deferring close\");this.once(\"open\",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(\"drain\")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"https\":\"http\";var port=\"\";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&(\"https\"==schema&&this.port!=443||\"http\"==schema&&this.port!=80)){port=\":\"+this.port}if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query}},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,\"xmlhttprequest-ssl\":10,yeast:30}],9:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_(\"../transport\");var parser=_dereq_(\"engine.io-parser\");var parseqs=_dereq_(\"parseqs\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:websocket\");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window===\"undefined\"){try{WebSocket=_dereq_(\"ws\")}catch(e){}}module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=\"websocket\";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType=\"buffer\"}else{this.ws.binaryType=\"arraybuffer\"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(\"websocket error\",e)}};if(\"undefined\"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len=\"string\"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug(\"websocket closed before onclose event\")}--total||done()})})(packets[i])}function done(){self.emit(\"flush\");setTimeout(function(){self.writable=true;self.emit(\"drain\")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==\"undefined\"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"wss\":\"ws\";var port=\"\";if(this.port&&(\"wss\"==schema&&this.port!=443||\"ws\"==schema&&this.port!=80)){port=\":\"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!(\"__initialize\"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,ws:undefined,yeast:30}],10:[function(_dereq_,module,exports){var hasCORS=_dereq_(\"has-cors\");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(\"undefined\"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(\"undefined\"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}}},{\"has-cors\":22}],11:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error(\"after called too many times\")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],12:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],13:[function(_dereq_,module,exports){(function(chars){\"use strict\";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=\"\";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];\nbase64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+\"=\"}else if(len%3===1){base64=base64.substring(0,base64.length-2)+\"==\"}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===\"=\"){bufferLength--;if(base64[base64.length-2]===\"=\"){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\")},{}],14:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob([\"hi\"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],15:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],16:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],17:[function(_dereq_,module,exports){exports=module.exports=_dereq_(\"./debug\");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=\"undefined\"!=typeof chrome&&\"undefined\"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=[\"lightseagreen\",\"forestgreen\",\"goldenrod\",\"dodgerblue\",\"darkorchid\",\"crimson\"];function useColors(){return\"WebkitAppearance\"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?\"%c\":\"\")+this.namespace+(useColors?\" %c\":\" \")+args[0]+(useColors?\"%c \":\" \")+\"+\"+exports.humanize(this.diff);if(!useColors)return args;var c=\"color: \"+this.color;args=[args[0],c,\"color: inherit\"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if(\"%%\"===match)return;index++;if(\"%c\"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return\"object\"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem(\"debug\")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{\"./debug\":18}],18:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_(\"ms\");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if(\"string\"!==typeof args[0]){args=[\"%o\"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match===\"%%\")return match;index++;var formatter=exports.formatters[format];if(\"function\"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if(\"function\"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||\"\").split(/[\\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\\*/g,\".*?\");if(namespaces[0]===\"-\"){exports.skips.push(new RegExp(\"^\"+namespaces.substr(1)+\"$\"))}else{exports.names.push(new RegExp(\"^\"+namespaces+\"$\"))}}}function disable(){exports.enable(\"\")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:25}],19:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(\"./keys\");var hasBinary=_dereq_(\"has-binary\");var sliceBuffer=_dereq_(\"arraybuffer.slice\");var base64encoder=_dereq_(\"base64-arraybuffer\");var after=_dereq_(\"after\");var utf8=_dereq_(\"utf8\");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:\"error\",data:\"parser error\"};var Blob=_dereq_(\"blob\");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(\"function\"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(\"function\"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(\"\"+encoded)};function encodeBase64Object(packet,callback){var message=\"b\"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=\"b\"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(\",\")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==\"string\"||data===undefined){if(data.charAt(0)==\"b\"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType===\"blob\"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===\"blob\"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==\"function\"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(\"0:\")}function setLengthHeader(message){return message.length+\":\"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(\"\"))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=\"string\"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var packet;if(data==\"\"){return callback(err,0,1)}var length=\"\",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(\":\"!=chr){length+=chr}else{if(\"\"==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=\"\"}}if(length!=\"\"){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===\"string\"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===\"string\";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===\"string\"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=\"\";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=\"\";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./keys\":20,after:11,\"arraybuffer.slice\":12,\"base64-arraybuffer\":13,blob:14,\"has-binary\":21,utf8:29}],20:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],21:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:24}],22:[function(_dereq_,module,exports){try{module.exports=typeof XMLHttpRequest!==\"undefined\"&&\"withCredentials\"in new XMLHttpRequest}catch(err){module.exports=false}},{}],23:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],24:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==\"[object Array]\"}},{}],25:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if(\"string\"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=\"\"+str;if(str.length>1e4)return;var match=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||\"ms\").toLowerCase();switch(type){case\"years\":case\"year\":case\"yrs\":case\"yr\":case\"y\":return n*y;case\"days\":case\"day\":case\"d\":return n*d;case\"hours\":case\"hour\":case\"hrs\":case\"hr\":case\"h\":return n*h;case\"minutes\":case\"minute\":case\"mins\":case\"min\":case\"m\":return n*m;case\"seconds\":case\"second\":case\"secs\":case\"sec\":case\"s\":return n*s;case\"milliseconds\":case\"millisecond\":case\"msecs\":case\"msec\":case\"ms\":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+\"d\";if(ms>=h)return Math.round(ms/h)+\"h\";if(ms>=m)return Math.round(ms/m)+\"m\";if(ms>=s)return Math.round(ms/s)+\"s\";return ms+\"ms\"}function long(ms){return plural(ms,d,\"day\")||plural(ms,h,\"hour\")||plural(ms,m,\"minute\")||plural(ms,s,\"second\")||ms+\" ms\"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+\" \"+name;return Math.ceil(ms/n)+\" \"+name+\"s\"}},{}],26:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\\],:{}\\s]*$/;var rvalidescape=/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\\s*\\[)+/g;var rtrimLeft=/^\\s+/;var rtrimRight=/\\s+$/;module.exports=function parsejson(data){if(\"string\"!=typeof data||!data){return null}data=data.replace(rtrimLeft,\"\").replace(rtrimRight,\"\");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,\"@\").replace(rvalidtokens,\"]\").replace(rvalidbraces,\"\"))){return new Function(\"return \"+data)()}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],27:[function(_dereq_,module,exports){exports.encode=function(obj){var str=\"\";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=\"&\";str+=encodeURIComponent(i)+\"=\"+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(\"&\");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split(\"=\");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],28:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;var parts=[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"];module.exports=function parseuri(str){var src=str,b=str.indexOf(\"[\"),e=str.indexOf(\"]\");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,\";\")+str.substring(e,str.length)}var m=re.exec(str||\"\"),uri={},i=14;while(i--){uri[parts[i]]=m[i]||\"\"}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,\":\");uri.authority=uri.authority.replace(\"[\",\"\").replace(\"]\",\"\").replace(/;/g,\":\");uri.ipv6uri=true}return uri}},{}],29:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==\"object\"&&exports;var freeModule=typeof module==\"object\"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=\"\";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error(\"Lone surrogate U+\"+codePoint.toString(16).toUpperCase()+\" is not a scalar value\")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol=\"\";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=\"\";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error(\"Invalid byte index\")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error(\"Invalid continuation byte\")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error(\"Invalid byte index\")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error(\"Invalid UTF-8 detected\")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:\"2.0.0\",encode:utf8encode,decode:utf8decode};if(typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],30:[function(_dereq_,module,exports){\"use strict\";var alphabet=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_\".split(\"\"),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded=\"\";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+\".\"+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}],31:[function(_dereq_,module,exports){var url=_dereq_(\"./url\");var parser=_dereq_(\"socket.io-parser\");var Manager=_dereq_(\"./manager\");var debug=_dereq_(\"debug\")(\"socket.io-client\");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==\"object\"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts[\"force new connection\"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug(\"ignoring socket cache for %s\",source);io=Manager(source,opts)}else{if(!cache[id]){debug(\"new io instance for %s\",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(\"./manager\");exports.Socket=_dereq_(\"./socket\")},{\"./manager\":32,\"./socket\":34,\"./url\":35,debug:39,\"socket.io-parser\":47}],32:[function(_dereq_,module,exports){var eio=_dereq_(\"engine.io-client\");var Socket=_dereq_(\"./socket\");var Emitter=_dereq_(\"component-emitter\");var parser=_dereq_(\"socket.io-parser\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:manager\");var indexOf=_dereq_(\"indexof\");var Backoff=_dereq_(\"backo2\");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&\"object\"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||\"/socket.io\";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=\"closed\";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(\"readyState %s\",this.readyState);if(~this.readyState.indexOf(\"open\"))return this;debug(\"opening %s\",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=\"opening\";this.skipReconnect=false;var openSub=on(socket,\"open\",function(){self.onopen();fn&&fn()});var errorSub=on(socket,\"error\",function(data){debug(\"connect_error\");self.cleanup();self.readyState=\"closed\";self.emitAll(\"connect_error\",data);if(fn){var err=new Error(\"Connection error\");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug(\"connect attempt will timeout after %d\",timeout);var timer=setTimeout(function(){debug(\"connect attempt timed out after %d\",timeout);openSub.destroy();socket.close();socket.emit(\"error\",\"timeout\");self.emitAll(\"connect_timeout\",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(\"open\");this.cleanup();this.readyState=\"open\";this.emit(\"open\");var socket=this.engine;this.subs.push(on(socket,\"data\",bind(this,\"ondata\")));this.subs.push(on(socket,\"ping\",bind(this,\"onping\")));this.subs.push(on(socket,\"pong\",bind(this,\"onpong\")));this.subs.push(on(socket,\"error\",bind(this,\"onerror\")));this.subs.push(on(socket,\"close\",bind(this,\"onclose\")));this.subs.push(on(this.decoder,\"decoded\",bind(this,\"ondecoded\")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll(\"ping\")};Manager.prototype.onpong=function(){this.emitAll(\"pong\",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(\"packet\",packet)};Manager.prototype.onerror=function(err){debug(\"error\",err);this.emitAll(\"error\",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(\"connecting\",onConnecting);\nsocket.on(\"connect\",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug(\"writing packet %j\",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug(\"cleanup\");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug(\"disconnect\");this.skipReconnect=true;this.reconnecting=false;if(\"opening\"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState=\"closed\";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug(\"onclose\");this.cleanup();this.backoff.reset();this.readyState=\"closed\";this.emit(\"close\",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug(\"reconnect failed\");this.backoff.reset();this.emitAll(\"reconnect_failed\");this.reconnecting=false}else{var delay=this.backoff.duration();debug(\"will wait %dms before reconnect attempt\",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(\"attempting reconnect\");self.emitAll(\"reconnect_attempt\",self.backoff.attempts);self.emitAll(\"reconnecting\",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(\"reconnect attempt error\");self.reconnecting=false;self.reconnect();self.emitAll(\"reconnect_error\",err.data)}else{debug(\"reconnect success\");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll(\"reconnect\",attempt)}},{\"./on\":33,\"./socket\":34,backo2:36,\"component-bind\":37,\"component-emitter\":38,debug:39,\"engine.io-client\":1,indexof:42,\"socket.io-parser\":47}],33:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],34:[function(_dereq_,module,exports){var parser=_dereq_(\"socket.io-parser\");var Emitter=_dereq_(\"component-emitter\");var toArray=_dereq_(\"to-array\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:socket\");var hasBin=_dereq_(\"has-binary\");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,\"open\",bind(this,\"onopen\")),on(io,\"packet\",bind(this,\"onpacket\")),on(io,\"close\",bind(this,\"onclose\"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(\"open\"==this.io.readyState)this.onopen();this.emit(\"connecting\");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(\"message\");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if(\"function\"==typeof args[args.length-1]){debug(\"emitting packet with ack id %d\",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(\"transport is open - connecting\");if(\"/\"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(\"close (%s)\",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit(\"disconnect\",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(\"error\",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(\"emitting event %j\",args);if(null!=packet.id){debug(\"attaching ack callback to event\");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(\"sending ack %j\",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if(\"function\"==typeof ack){debug(\"calling ack %s with %j\",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug(\"bad ack %s\",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(\"connect\");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(\"server disconnect (%s)\",this.nsp);this.destroy();this.onclose(\"io server disconnect\")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(\"performing disconnect (%s)\",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(\"io client disconnect\")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{\"./on\":33,\"component-bind\":37,\"component-emitter\":38,debug:39,\"has-binary\":41,\"socket.io-parser\":47,\"to-array\":51}],35:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(\"parseuri\");var debug=_dereq_(\"debug\")(\"socket.io-client:url\");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+\"//\"+loc.host;if(\"string\"==typeof uri){if(\"/\"==uri.charAt(0)){if(\"/\"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\\/\\//.test(uri)){debug(\"protocol-less url %s\",uri);if(\"undefined\"!=typeof loc){uri=loc.protocol+\"//\"+uri}else{uri=\"https://\"+uri}}debug(\"parse %s\",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=\"80\"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=\"443\"}}obj.path=obj.path||\"/\";var ipv6=obj.host.indexOf(\":\")!==-1;var host=ipv6?\"[\"+obj.host+\"]\":obj.host;obj.id=obj.protocol+\"://\"+host+\":\"+obj.port;obj.href=obj.protocol+\"://\"+host+(loc&&loc.port==obj.port?\"\":\":\"+obj.port);return obj}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{debug:39,parseuri:45}],36:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],37:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(\"string\"==typeof fn)fn=obj[fn];if(\"function\"!=typeof fn)throw new Error(\"bind() requires a function\");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],38:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[\"$\"+event]=this._callbacks[\"$\"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[\"$\"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[\"$\"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[\"$\"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[\"$\"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],39:[function(_dereq_,module,exports){arguments[4][17][0].apply(exports,arguments)},{\"./debug\":40,dup:17}],40:[function(_dereq_,module,exports){arguments[4][18][0].apply(exports,arguments)},{dup:18,ms:44}],41:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON&&\"function\"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:43}],42:[function(_dereq_,module,exports){arguments[4][23][0].apply(exports,arguments)},{dup:23}],43:[function(_dereq_,module,exports){arguments[4][24][0].apply(exports,arguments)},{dup:24}],44:[function(_dereq_,module,exports){arguments[4][25][0].apply(exports,arguments)},{dup:25}],45:[function(_dereq_,module,exports){arguments[4][28][0].apply(exports,arguments)},{dup:28}],46:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");var isBuf=_dereq_(\"./is-buffer\");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(\"object\"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&\"object\"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&\"object\"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./is-buffer\":48,isarray:43}],47:[function(_dereq_,module,exports){var debug=_dereq_(\"debug\")(\"socket.io-parser\");var json=_dereq_(\"json3\");var isArray=_dereq_(\"isarray\");var Emitter=_dereq_(\"component-emitter\");var binary=_dereq_(\"./binary\");var isBuf=_dereq_(\"./is-buffer\");exports.protocol=4;exports.types=[\"CONNECT\",\"DISCONNECT\",\"EVENT\",\"BINARY_EVENT\",\"ACK\",\"BINARY_ACK\",\"ERROR\"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(\"encoding packet %j\",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=\"\";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=\"-\"}if(obj.nsp&&\"/\"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=\",\";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=\",\";str+=json.stringify(obj.data)}debug(\"encoded %j as %s\",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(\"string\"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit(\"decoded\",packet)}}else{this.emit(\"decoded\",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(\"got binary data when not reconstructing a packet\")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(\"decoded\",packet)}}}else{throw new Error(\"Unknown type: \"+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf=\"\";while(str.charAt(++i)!=\"-\"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!=\"-\"){throw new Error(\"Illegal attachments\")}p.attachments=Number(buf)}if(\"/\"==str.charAt(i+1)){p.nsp=\"\";while(++i){var c=str.charAt(i);if(\",\"==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp=\"/\"}var next=str.charAt(i+1);if(\"\"!==next&&Number(next)==next){p.id=\"\";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(\"decoded %s as %j\",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:\"parser error\"}}},{\"./binary\":46,\"./is-buffer\":48,\"component-emitter\":49,debug:39,isarray:43,json3:50}],48:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],49:[function(_dereq_,module,exports){arguments[4][15][0].apply(exports,arguments)},{dup:15}],50:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define===\"function\"&&define.amd;var objectTypes={\"function\":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global==\"object\"&&global;if(freeGlobal&&(freeGlobal[\"global\"]===freeGlobal||freeGlobal[\"window\"]===freeGlobal||freeGlobal[\"self\"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root[\"Object\"]());exports||(exports=root[\"Object\"]());var Number=context[\"Number\"]||root[\"Number\"],String=context[\"String\"]||root[\"String\"],Object=context[\"Object\"]||root[\"Object\"],Date=context[\"Date\"]||root[\"Date\"],SyntaxError=context[\"SyntaxError\"]||root[\"SyntaxError\"],TypeError=context[\"TypeError\"]||root[\"TypeError\"],Math=context[\"Math\"]||root[\"Math\"],nativeJSON=context[\"JSON\"]||root[\"JSON\"];if(typeof nativeJSON==\"object\"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==\"bug-string-char-index\"){isSupported=\"a\"[0]!=\"a\"}else if(name==\"json\"){isSupported=has(\"json-stringify\")&&has(\"json-parse\")}else{var value,serialized='{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';if(name==\"json-stringify\"){var stringify=exports.stringify,stringifySupported=typeof stringify==\"function\"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===\"0\"&&stringify(new Number)===\"0\"&&stringify(new String)=='\"\"'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)===\"1\"&&stringify([value])==\"[1]\"&&stringify([undef])==\"[null]\"&&stringify(null)==\"null\"&&stringify([undef,getClass,null])==\"[null,null,null]\"&&stringify({a:[value,true,false,null,\"\\x00\\b\\n\\f\\r\t\"]})==serialized&&stringify(null,value)===\"1\"&&stringify([1,2],null,1)==\"[\\n 1,\\n 2\\n]\"&&stringify(new Date(-864e13))=='\"-271821-04-20T00:00:00.000Z\"'&&stringify(new Date(864e13))=='\"+275760-09-13T00:00:00.000Z\"'&&stringify(new Date(-621987552e5))=='\"-000001-01-01T00:00:00.000Z\"'&&stringify(new Date(-1))=='\"1969-12-31T23:59:59.999Z\"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==\"json-parse\"){var parse=exports.parse;if(typeof parse==\"function\"){try{if(parse(\"0\")===0&&!parse(false)){value=parse(serialized);var parseSupported=value[\"a\"].length==5&&value[\"a\"][0]===1;if(parseSupported){try{parseSupported=!parse('\"\t\"')}catch(exception){}if(parseSupported){try{parseSupported=parse(\"01\")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(\"1.\")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(\"json\")){var functionClass=\"[object Function]\",dateClass=\"[object Date]\",numberClass=\"[object Number]\",stringClass=\"[object String]\",arrayClass=\"[object Array]\",booleanClass=\"[object Boolean]\";var charIndexBuggy=has(\"bug-string-char-index\");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[\"valueOf\",\"toString\",\"toLocaleString\",\"propertyIsEnumerable\",\"isPrototypeOf\",\"hasOwnProperty\",\"constructor\"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!=\"function\"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property==\"prototype\")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property==\"prototype\")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property==\"prototype\")&&isProperty.call(object,property)&&!(isConstructor=property===\"constructor\")){callback(property)}}if(isConstructor||isProperty.call(object,property=\"constructor\")){callback(property)}}}return forEach(object,callback)};if(!has(\"json-stringify\")){var Escapes={92:\"\\\\\\\\\",34:'\\\\\"',8:\"\\\\b\",12:\"\\\\f\",10:\"\\\\n\",13:\"\\\\r\",9:\"\\\\t\"};var leadingZeroes=\"000000\";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=\"\\\\u00\";var quote=function(value){var result='\"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(\"\"):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'\"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==\"object\"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,\"toJSON\")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?\"-\":\"+\")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+\"-\"+toPaddedString(2,month+1)+\"-\"+toPaddedString(2,date)+\"T\"+toPaddedString(2,hours)+\":\"+toPaddedString(2,minutes)+\":\"+toPaddedString(2,seconds)+\".\"+toPaddedString(3,milliseconds)+\"Z\"}else{value=null}}else if(typeof value.toJSON==\"function\"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,\"toJSON\"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return\"null\"}className=getClass.call(value);if(className==booleanClass){return\"\"+value}else if(className==numberClass){return value>-1/0&&value<1/0?\"\"+value:\"null\"}else if(className==stringClass){return quote(\"\"+value)}if(typeof value==\"object\"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?\"null\":element)}result=results.length?whitespace?\"[\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"]\":\"[\"+results.join(\",\")+\"]\":\"[]\"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+\":\"+(whitespace?\" \":\"\")+element)}});result=results.length?whitespace?\"{\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"}\":\"{\"+results.join(\",\")+\"}\":\"{}\"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace=\"\",width>10&&(width=10);whitespace.length<width;whitespace+=\" \");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize(\"\",(value={},value[\"\"]=source,value),callback,properties,whitespace,\"\",[])}}if(!has(\"json-parse\")){var fromCharCode=String.fromCharCode;var Unescapes={92:\"\\\\\",34:'\"',47:\"/\",98:\"\\b\",116:\"\t\",110:\"\\n\",102:\"\\f\",114:\"\\r\"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=\"@\",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode(\"0x\"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==\"true\"){Index+=4;return true}else if(source.slice(Index,Index+5)==\"false\"){Index+=5;return false}else if(source.slice(Index,Index+4)==\"null\"){Index+=4;return null}abort()}}return\"$\"};var get=function(value){var results,hasMembers;if(value==\"$\"){abort()}if(typeof value==\"string\"){if((charIndexBuggy?value.charAt(0):value[0])==\"@\"){return value.slice(1)}if(value==\"[\"){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"]\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"]\"){abort()}}else{abort()}}if(value==\",\"){abort()}results.push(get(value))}return results}else if(value==\"{\"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"}\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"}\"){abort()}}else{abort()}}if(value==\",\"||typeof value!=\"string\"||(charIndexBuggy?value.charAt(0):value[0])!=\"@\"||lex()!=\":\"){abort()}results[value.slice(1)]=get(lex())\n}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==\"object\"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=\"\"+source;result=get(lex());if(lex()!=\"$\"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[\"\"]=result,value),\"\",callback):result}}}exports[\"runInContext\"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root[\"JSON3\"],isRestored=false;var JSON3=runInContext(root,root[\"JSON3\"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root[\"JSON3\"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],51:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[31])(31)});\n\n    \n      ;var weight = document.getElementById('weight');\n      var socket = io('http://{{ip}}:4001');\n      socket.on('getWeight', function(msg) {\n        weight.innerHTML = msg;\n    \n      }); \n    }, 1000);\n    </script>\n\n  </body>\n</html>\n",
        "x": 520,
        "y": 960,
        "wires": [
            [
                "9ba552e0.7d0638"
            ]
        ]
    },
    {
        "id": "9ba552e0.7d0638",
        "type": "http response",
        "z": "ef4d44ec.f22628",
        "name": "",
        "x": 720,
        "y": 960,
        "wires": []
    },
    {
        "id": "d1398312.568ed8",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "set ip",
        "func": "msg.ip = global.get('ip');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 320,
        "y": 960,
        "wires": [
            [
                "7511ef30.b9687"
            ]
        ]
    },
    {
        "id": "a5658983.a46a78",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "video url",
        "func": "msg.url = global.get('video_camera_url'); \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1490,
        "y": 520,
        "wires": [
            [
                "fdfb9564.de875"
            ]
        ]
    },
    {
        "id": "fdfb9564.de875",
        "type": "http request",
        "z": "ef4d44ec.f22628",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "",
        "x": 1660,
        "y": 520,
        "wires": [
            [
                "94bc4464.360ad8"
            ]
        ]
    },
    {
        "id": "94bc4464.360ad8",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1880,
        "y": 520,
        "wires": [
            [
                "3368ff44.c343e8",
                "2a2307ff.dc43c8"
            ]
        ]
    },
    {
        "id": "3368ff44.c343e8",
        "type": "http request",
        "z": "ef4d44ec.f22628",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 2100,
        "y": 520,
        "wires": [
            [
                "80bf2bf7.5d0a2"
            ]
        ]
    },
    {
        "id": "80bf2bf7.5d0a2",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 2260,
        "y": 520,
        "wires": []
    },
    {
        "id": "a7c11265.d3e8f8",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "payload",
        "x": 740,
        "y": 220,
        "wires": []
    },
    {
        "id": "2a2307ff.dc43c8",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 2050,
        "y": 360,
        "wires": []
    },
    {
        "id": "b52d534f.591a28",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "transactionMetadata",
        "x": 990,
        "y": 700,
        "wires": []
    },
    {
        "id": "8ce86b06.e78f3",
        "type": "switch",
        "z": "ef4d44ec.f22628",
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
        "x": 380,
        "y": 320,
        "wires": [
            [
                "ed2c83d6.e7e268"
            ]
        ]
    },
    {
        "id": "ed2c83d6.e7e268",
        "type": "function",
        "z": "ef4d44ec.f22628",
        "name": "move in minus",
        "func": "msg.event_id = flow.get('event_move_in_minus_id');\nmsg.description = 'Заїзд із мінусом. ' + msg.prevWeight +' кг.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 260,
        "wires": [
            [
                "79990822.cb8688"
            ]
        ]
    },
    {
        "id": "32d634e6.453e24",
        "type": "debug",
        "z": "ef4d44ec.f22628",
        "name": "",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1316,
        "y": 411,
        "wires": []
    },
    {
        "id": "7da54e29.ef1c18",
        "type": "http request",
        "z": "ef4d44ec.f22628",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "2e6d76dd.e014ba",
        "x": 1126,
        "y": 500,
        "wires": [
            [
                "32d634e6.453e24"
            ]
        ]
    }
]
