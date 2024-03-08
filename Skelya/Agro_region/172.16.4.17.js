[
    {
        "id": "94eb55da.b46208",
        "type": "tab",
        "label": "A9",
        "disabled": false,
        "info": ""
    },
    {
        "id": "aba48cf7.2bc8d",
        "type": "tab",
        "label": "processing_scale",
        "disabled": false,
        "info": ""
    },
    {
        "id": "71a71ea9.9016d",
        "type": "serial-port",
        "serialport": "/dev/ttyACM1",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": false
    },
    {
        "id": "1b05e92a.30b507",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": true
    },
    {
        "id": "a1f398cb.c92da8",
        "type": "inject",
        "z": "94eb55da.b46208",
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
        "payload": "inputString",
        "payloadType": "flow",
        "x": 130,
        "y": 200,
        "wires": [
            [
                "d82fe95b.7f7dd8"
            ]
        ]
    },
    {
        "id": "afbaa315.c138d",
        "type": "function",
        "z": "94eb55da.b46208",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\nflow.set('weigth_time',new Date());\nflow.set('currentWeight',currentWeight);\n\nmsg.payload = currentWeight;\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 260,
        "wires": [
            [
                "495d9a07.6bd184",
                "be14c98bdddeeaa4"
            ]
        ]
    },
    {
        "id": "9ee68eb1.d2b4c",
        "type": "comment",
        "z": "94eb55da.b46208",
        "name": "Device level",
        "info": "",
        "x": 103.91738891601562,
        "y": 158.04128742218018,
        "wires": []
    },
    {
        "id": "f3365b84.e1a6f8",
        "type": "inject",
        "z": "94eb55da.b46208",
        "name": "init",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "init",
        "payloadType": "str",
        "x": 103.91738891601562,
        "y": 98.04128742218018,
        "wires": [
            [
                "cc1f5b72.9673c8"
            ]
        ]
    },
    {
        "id": "861873d8.0b07f",
        "type": "comment",
        "z": "94eb55da.b46208",
        "name": "INITIALIZING",
        "info": "",
        "x": 103.91738891601562,
        "y": 38.041287422180176,
        "wires": []
    },
    {
        "id": "cc1f5b72.9673c8",
        "type": "function",
        "z": "94eb55da.b46208",
        "name": "Scale PARSER",
        "func": "flow.set('inputString',\"CMD\");\nflow.set('parser',function(v){\n       v = v.substring(1, 9);\n       //return v\n       return Number(v);\n    }\n  );\nglobal.set('scale_id','123');\nglobal.set('ip','192.168.0.110');\nglobal.set('video_camera_url','');\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 293.9173889160156,
        "y": 98.04128742218018,
        "wires": [
            []
        ]
    },
    {
        "id": "495d9a07.6bd184",
        "type": "link out",
        "z": "94eb55da.b46208",
        "name": "",
        "links": [
            "38658d54.d7eca2"
        ],
        "x": 955,
        "y": 300,
        "wires": []
    },
    {
        "id": "d82fe95b.7f7dd8",
        "type": "debug",
        "z": "94eb55da.b46208",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 370,
        "y": 160,
        "wires": []
    },
    {
        "id": "c579ea43.5a6258",
        "type": "function",
        "z": "94eb55da.b46208",
        "name": "time_rasp",
        "func": "var time = new Date();\nflow.set(\"time_rasp\", time);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 320,
        "y": 560,
        "wires": [
            [
                "e093bcfa.d2cdc"
            ]
        ]
    },
    {
        "id": "58b3a88c.729668",
        "type": "inject",
        "z": "94eb55da.b46208",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 560,
        "wires": [
            [
                "c579ea43.5a6258"
            ]
        ]
    },
    {
        "id": "e093bcfa.d2cdc",
        "type": "function",
        "z": "94eb55da.b46208",
        "name": "sub time",
        "func": "var weigth_time = flow.get(\"weigth_time\");\nvar time_rasp = flow.get(\"time_rasp\");\n\nvar sub = time_rasp - weigth_time;\n//msg.payload = {\n//    sub: time_rasp - weigth_time,\n//    weigth_time: weigth_time,\n//    time_rasp: time_rasp\n//}\n\n    if(sub > 5000){\n    msg.payload = 0;\n    return msg;\n    }\n",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 560,
        "wires": [
            [
                "90617c50.f2069",
                "495d9a07.6bd184"
            ]
        ]
    },
    {
        "id": "90617c50.f2069",
        "type": "debug",
        "z": "94eb55da.b46208",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 630,
        "y": 560,
        "wires": []
    },
    {
        "id": "46bde8221677445e",
        "type": "inject",
        "z": "94eb55da.b46208",
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
        "y": 500,
        "wires": [
            [
                "c5814266575cbc88"
            ]
        ]
    },
    {
        "id": "c5814266575cbc88",
        "type": "function",
        "z": "94eb55da.b46208",
        "name": "GET WEIGHT",
        "func": "flow.set('weigth_time',new Date());\n\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "e617206fe1ab6059",
        "type": "inject",
        "z": "94eb55da.b46208",
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
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "2",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 340,
        "wires": [
            [
                "848ce2af749a9247"
            ]
        ]
    },
    {
        "id": "848ce2af749a9247",
        "type": "tcp request",
        "z": "94eb55da.b46208",
        "name": "",
        "server": "172.16.4.16",
        "port": "9761",
        "out": "sit",
        "ret": "string",
        "splitc": " ",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 380,
        "y": 340,
        "wires": [
            [
                "c5814266575cbc88",
                "e56a4a6c49f0a85b"
            ]
        ]
    },
    {
        "id": "be14c98bdddeeaa4",
        "type": "debug",
        "z": "94eb55da.b46208",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 340,
        "wires": []
    },
    {
        "id": "e56a4a6c49f0a85b",
        "type": "delay",
        "z": "94eb55da.b46208",
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
        "outputs": 1,
        "x": 560,
        "y": 260,
        "wires": [
            [
                "afbaa315.c138d",
                "be14c98bdddeeaa4"
            ]
        ]
    },
    {
        "id": "6f7797d8.1d1dc8",
        "type": "file",
        "z": "aba48cf7.2bc8d",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "x": 460,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "86026c2e.2e25b",
        "type": "exec",
        "z": "aba48cf7.2bc8d",
        "command": "cat /proc/cpuinfo",
        "addpay": true,
        "append": "| grep Serial",
        "useSpawn": "",
        "timer": "5",
        "name": "",
        "x": 400,
        "y": 40,
        "wires": [
            [
                "b5fc5be3.609488",
                "61eaf3e5.1ee72c"
            ],
            [],
            []
        ]
    },
    {
        "id": "e5904419.e606a8",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "main config",
        "func": "flow.set('prevWeight',null);\nflow.set('transaction',null);\nflow.set('transactionData',[]);\nflow.set('transactionMaxWeight',null);\nflow.set('transactionHasMinWeight',null);\nflow.set('transactionHasMaxWeight',null);\nflow.set('transactionHasMaxDuration',null);\nflow.set('lasttimedata', new Date());\nflow.set('checkHealth',null);\nflow.set('transactionWaybill',null);\nflow.set('transactionAccWeight', null);\nflow.set('transactionHasOverLoad', null);\nflow.set('transactionOperationName', null);\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "f5f8ff2c.dfd4d",
        "type": "inject",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 110,
        "y": 220,
        "wires": [
            [
                "6221b949.663458",
                "ec5016de.412768"
            ]
        ]
    },
    {
        "id": "33bd0e48.77bde2",
        "type": "http in",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "url": "/firmware",
        "method": "post",
        "swaggerDoc": "",
        "x": 140,
        "y": 100,
        "wires": [
            [
                "6f7797d8.1d1dc8"
            ]
        ]
    },
    {
        "id": "6221b949.663458",
        "type": "file in",
        "z": "aba48cf7.2bc8d",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "format": "utf8",
        "x": 300,
        "y": 220,
        "wires": [
            [
                "1d2f126e.617a1e"
            ]
        ]
    },
    {
        "id": "265688f0.6dd7d8",
        "type": "http in",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "url": "/serial",
        "method": "get",
        "swaggerDoc": "",
        "x": 140,
        "y": 40,
        "wires": [
            [
                "86026c2e.2e25b"
            ]
        ]
    },
    {
        "id": "b5fc5be3.609488",
        "type": "http response",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "x": 616,
        "y": 23,
        "wires": []
    },
    {
        "id": "61eaf3e5.1ee72c",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "func": "msg.payload = msg.payload.split(':')[1].replace('\\n','').replace(' ','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 622,
        "y": 59,
        "wires": [
            [
                "c295f82d.43de78"
            ]
        ]
    },
    {
        "id": "c295f82d.43de78",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 759,
        "y": 54,
        "wires": []
    },
    {
        "id": "47eae7c9.e39028",
        "type": "inject",
        "z": "aba48cf7.2bc8d",
        "name": "DEMO",
        "repeat": "10800",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 120,
        "y": 180,
        "wires": [
            [
                "2fb8d271.d0937e"
            ]
        ]
    },
    {
        "id": "2fb8d271.d0937e",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_in_minus_id':'8DB9B239DF5252F0E055000000000001',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_on_id': '85A2CC45702A2DD1E0533300000A0C94',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'event_driver_in':'8E68D8D8B2977181E055000000000001',\n    'event_over_load':'B3EB5F800EFD2620E0530101007F8A05',\n    'snapshot_events':['80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0', \"8E68D8D8B2977181E055000000000001\",\"B3EB5F800EFD2620E0530101007F8A05\"],\n    'main_host':'http://172.16.1.4:8080/ords/ettn',\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':60000,\n    'maxDuration':600000,\n    'minWeight':-40,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':40,\n    'driverWeight':80,\n    'overLoadWeight': 200\n};\nmsg.payload = device_config;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 180,
        "wires": [
            [
                "6f7797d8.1d1dc8"
            ]
        ]
    },
    {
        "id": "1d2f126e.617a1e",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('event_driver_in', device_config.event_driver_in);\nflow.set('event_over_load',device_config.event_over_load);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\nflow.set('driverWeight',device_config.driverWeight);\nflow.set('overLoadWeight', device_config.overLoadWeight);\n\nmsg.payload = {\n\tscale_id: flow.get('scale_id'),\n\tevent_move_in_id: flow.get('event_move_in_id'),\n\tevent_move_in_minus_id: flow.get('event_move_in_minus_id'),\n\tevent_move_out_id: flow.get('event_move_out_id'),\n\tevent_max_weight_id: flow.get('event_max_weight_id'),\n\tevent_off_id: flow.get('event_off_id'),\n\tevent_on_id: flow.get('event_on_id'),\n\tevent_max_duration: flow.get('event_max_duration'),\n\tevent_fake_traffic: flow.get('event_fake_traffic'),\n\tevent_driver_in: flow.get('event_driver_in'),\n\tevent_over_load: flow.get('event_over_load'),\n\tmain_host: flow.get('main_host'),\n\tevent_url: flow.get('event_url'),\n\tstate_url: flow.get('state_url'),\n\tmaxWeight: flow.get('maxWeight'),\n\tminWeight: flow.get('minWeight'),\n\tmaxDuration: flow.get('maxDuration'),\n\tcheckHealthTimeout: flow.get('checkHealthTimeout'),\n\tevent_get_weight_acc: flow.get('event_get_weight_acc'),\n\tevent_min_weight: flow.get('event_min_weight'),\n\tminTriggerWeight: flow.get('minTriggerWeight'),\n\tsnapshot_url: flow.get('snapshot_url'),\n\tsnapshot_events: flow.get('snapshot_events'),\n\tdriverWeight: flow.get('driverWeight'),\n\toverLoadWeight: flow.get('overLoadWeight')\n};\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 220,
        "wires": [
            [
                "fd1d5d9f.17ec3"
            ]
        ]
    },
    {
        "id": "fd1d5d9f.17ec3",
        "type": "json",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "x": 630,
        "y": 220,
        "wires": [
            [
                "7e5bb13d.54c22"
            ]
        ]
    },
    {
        "id": "7e5bb13d.54c22",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "IN device config",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 780,
        "y": 220,
        "wires": []
    },
    {
        "id": "ec5016de.412768",
        "type": "trigger",
        "z": "aba48cf7.2bc8d",
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
        "x": 283.8571428571429,
        "y": 264.4285714285714,
        "wires": [
            [
                "e5904419.e606a8"
            ]
        ]
    },
    {
        "id": "e43ba6ba.7dddb8",
        "type": "comment",
        "z": "aba48cf7.2bc8d",
        "name": "Init",
        "info": "",
        "x": 90,
        "y": 140,
        "wires": []
    },
    {
        "id": "9d7eebe5.5c6748",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага, кг: ' + msg.metadata.weight;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 640,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "38f8584f.79eb88",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 408,
        "y": 557.0000114440918,
        "wires": [
            [
                "9d7eebe5.5c6748"
            ]
        ]
    },
    {
        "id": "4f07143.e82fcec",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "events payload",
        "func": "// var event_id = msg.event_id;\n// var scale_id = global.get('scale_id');\n// var snapshot_events = flow.get('snapshot_events');\n// var snapshot = false;\n\n// if (snapshot_events.indexOf(event_id)>=0){\n//     snapshot = true;\n// }\n\n// msg.payload = {\n//     'event':{\n//         'id':msg.event_id\n//     },\n//     'devices':[{'id':scale_id}],\n//     'data':msg.metadata,\n//     'description':msg.description\n// }\n\n// msg.headers = {\n//     \"content-type\":\"application/json\"\n// }\n\n// msg.url = flow.get('main_host')+flow.get('event_url');\n// msg.main_host = flow.get('main_host');\n// msg.event_url = flow.get('event_url');\n// msg.snapshot = snapshot;\n// return msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1020,
        "y": 600,
        "wires": [
            [
                "77ddf1bb.bdd3d",
                "567aacfb.bf53c4"
            ]
        ]
    },
    {
        "id": "696b5aab.5d6fe4",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar transactionOperationName = flow.get('transactionOperationName');\n\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar operation_name_income = \"Приход (авто)\";\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\nvar transactionAccWeight = flow.get('transactionAccWeight');//облікова вага\nvar overLoadWeight = flow.get('overLoadWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 0) && (weight > 0) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 0) && (weight <=0) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionHasOverLoad',null);\n        flow.set('transactionOperationName',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n        flow.set('transactionAccWeight', null);//облікова вага\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if (transactionData[i] !== transactionData[i-1]){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable': weight <= 40 ? true : msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'transactionAccWeight':transactionAccWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false,\n    'transactionOperationName':transactionOperationName\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nif(transactionAccWeight && transactionOperationName!==operation_name_income){\n    \n   flow.set('transactionHasOverLoad',(weight-transactionAccWeight)>overLoadWeight);\n   \n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 540,
        "wires": [
            [
                "be2e5228.f4cf8",
                "38f8584f.79eb88",
                "bb911c7b.f96ef",
                "ab9cf95c.9bcef8",
                "85ea052c.49e638"
            ]
        ]
    },
    {
        "id": "6415c413.b99c8c",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar driverWeight = flow.get('driverWeight');\nvar buisness_data = msg.req.query;\n\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\n\n//check driver in a car\nvar driver_in = false;\nmsg.driverWeight = driverWeight;\nif((transactionMaxWeight - msg.metadata.weight) < driverWeight){\n    driver_in = true;\n}\n\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = ' '+buisness_data.operation_name+'. '+buisness_data.operation_type+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер авто: \"+buisness_data.truck1+\" \"+buisness_data.truck2+\" \"+buisness_data.item_name + \", ТТН: \" + buisness_data.waybill;\nmsg.transactionMetadata = transactionMetadata;\nmsg.driver_in = driver_in;\n\nflow.set('transactionAccWeight',  msg.metadata.weight);//облікова вага\nflow.set('transactionOperationName',  msg.metadata.operation_name);//вид операції\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 537.1428680419922,
        "y": 997.1428661346436,
        "wires": [
            [
                "95ef2d77.9d9d",
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "f66ad3f6.322d",
        "type": "http request",
        "z": "aba48cf7.2bc8d",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 1240,
        "y": 600,
        "wires": [
            [
                "d634df8d.686a6",
                "64808ab.6a4ef74"
            ]
        ]
    },
    {
        "id": "5c2daf9d.49b54",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 1327.1429443359375,
        "y": 740,
        "wires": [
            [
                "a725ff47.0d267"
            ]
        ]
    },
    {
        "id": "77ddf1bb.bdd3d",
        "type": "json",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "x": 1230,
        "y": 560,
        "wires": [
            [
                "eda85c7e.75dae"
            ]
        ]
    },
    {
        "id": "567aacfb.bf53c4",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "IN event",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 1184,
        "y": 493.9999885559082,
        "wires": []
    },
    {
        "id": "20c644.0ef6b9bc",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 560,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "2097d0ee.7a8b2",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 860,
        "wires": [
            [
                "cbc238b2.1252c8"
            ]
        ]
    },
    {
        "id": "a87f1911.e7c0b8",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 820,
        "wires": [
            [
                "411a5d52.25abb4"
            ]
        ]
    },
    {
        "id": "c89c0881.206e38",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Максимальна вага: ' + msg.metadata.transactionMaxWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 600,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "3f5dcec0.3e8102",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах, сек: ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 700,
        "y": 680,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "c0551a6f.68fa58",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "empty waybill",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + Math.round(msg.metadata.duration/60)+ 'хв.'+ \" Максимальна вага: \" + msg.metadata.transactionMaxWeight + \" кг.\";\n//metadata.transactionMaxWeight\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 520,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "7f19ff.eee616",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага, кг: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 720,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "9212f4a4.df1b48",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "move in minus",
        "func": "msg.event_id = flow.get('event_move_in_minus_id');\nmsg.description = 'Заїзд із мінусом. ' + msg.prevWeight +' кг.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 480,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "38658d54.d7eca2",
        "type": "link in",
        "z": "aba48cf7.2bc8d",
        "name": "s4",
        "links": [
            "495d9a07.6bd184"
        ],
        "x": 55,
        "y": 540,
        "wires": [
            [
                "696b5aab.5d6fe4"
            ]
        ]
    },
    {
        "id": "be2e5228.f4cf8",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 390,
        "y": 520,
        "wires": [
            [
                "20c644.0ef6b9bc"
            ],
            [
                "c89c0881.206e38",
                "3437fc29.89bb74",
                "d23726e6.4ca568"
            ]
        ]
    },
    {
        "id": "bb911c7b.f96ef",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 388,
        "y": 597.0000114440918,
        "wires": [
            [
                "3f5dcec0.3e8102"
            ]
        ]
    },
    {
        "id": "ab9cf95c.9bcef8",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 408,
        "y": 637.0000114440918,
        "wires": [
            [
                "7f19ff.eee616"
            ]
        ]
    },
    {
        "id": "85ea052c.49e638",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 398,
        "y": 477.0000114440918,
        "wires": [
            [
                "9212f4a4.df1b48"
            ]
        ]
    },
    {
        "id": "95ef2d77.9d9d",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 830,
        "y": 1000,
        "wires": [
            [
                "d4d1fc09.85b42",
                "8d01c032.5e918"
            ]
        ]
    },
    {
        "id": "8544b52a.fde5e8",
        "type": "http in",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "url": "/getWeight",
        "method": "get",
        "swaggerDoc": "",
        "x": 140,
        "y": 1000,
        "wires": [
            [
                "67813e2b.9e39a",
                "6415c413.b99c8c",
                "4feda8a3.ca0bd8"
            ]
        ]
    },
    {
        "id": "d634df8d.686a6",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "parser",
        "func": "var str = {\n    payload: msg.payload,\n    event_id: msg.event_id,\n    metadata: msg.metadata,\n    driverWeight: msg.driverWeight,\n    description: msg.description,\n    url: msg.url,\n    main_host: msg.main_host,\n    event_url: msg.event_url,\n    statusCode: msg.statusCode,\n    responseUrl: msg.responseUrl\n    \n};\nmsg.payload = JSON.stringify(str);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1390,
        "y": 640,
        "wires": [
            [
                "abb32882.bb9458"
            ]
        ]
    },
    {
        "id": "64808ab.6a4ef74",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 1390,
        "y": 600,
        "wires": []
    },
    {
        "id": "d4d1fc09.85b42",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "driver_in event",
        "func": "msg.event_id = flow.get('event_driver_in');\nmsg.description = 'При зважуванні водій в кабіні. Вага: ' + msg.metadata.weight+\"кг. Номер авто: \"+msg.metadata.truck1+\" \"+msg.metadata.truck2+\" \"+msg.metadata.item_name;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1052.0159301757812,
        "y": 762.2064208984375,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "eda85c7e.75dae",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "Avto 3 IN event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1390,
        "y": 560,
        "wires": []
    },
    {
        "id": "cdc149e9.a428e8",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 490,
        "y": 840,
        "wires": [
            [
                "a87f1911.e7c0b8"
            ],
            [
                "2097d0ee.7a8b2"
            ]
        ]
    },
    {
        "id": "3437fc29.89bb74",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 640,
        "y": 520,
        "wires": [
            [
                "c0551a6f.68fa58"
            ]
        ]
    },
    {
        "id": "8d01c032.5e918",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 990,
        "y": 1000,
        "wires": []
    },
    {
        "id": "67813e2b.9e39a",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.reader){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 1060,
        "wires": [
            [
                "321d5d39.cdc0d2",
                "73f5e288.feddac"
            ]
        ]
    },
    {
        "id": "abb32882.bb9458",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "Avto 3 IN response event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1580,
        "y": 640,
        "wires": []
    },
    {
        "id": "5d1cd94.c1a8428",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 840,
        "wires": [
            [
                "cdc149e9.a428e8"
            ]
        ]
    },
    {
        "id": "321d5d39.cdc0d2",
        "type": "http response",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "x": 670,
        "y": 1060,
        "wires": []
    },
    {
        "id": "73f5e288.feddac",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 690,
        "y": 1100,
        "wires": []
    },
    {
        "id": "aaf673d6.92e2a",
        "type": "inject",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "repeat": "6",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 110,
        "y": 840,
        "wires": [
            [
                "5d1cd94.c1a8428"
            ]
        ]
    },
    {
        "id": "1caecb8c.3dbe24",
        "type": "http in",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "url": "/getSimpleWeight",
        "method": "get",
        "swaggerDoc": "",
        "x": 160,
        "y": 1180,
        "wires": [
            [
                "a6e3d79.634dd28"
            ]
        ]
    },
    {
        "id": "a6e3d79.634dd28",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata').weight;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 1180,
        "wires": [
            [
                "bfeb63b.70989a"
            ]
        ]
    },
    {
        "id": "bfeb63b.70989a",
        "type": "http response",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "x": 610,
        "y": 1180,
        "wires": []
    },
    {
        "id": "e6c209b1.f2c8a8",
        "type": "http request",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "",
        "x": 1655.9048805236816,
        "y": 738.1905097961426,
        "wires": [
            [
                "964cb9fb.c43488"
            ]
        ]
    },
    {
        "id": "964cb9fb.c43488",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1850,
        "y": 740,
        "wires": [
            [
                "fd5d0ff.a6dbcf",
                "b944a43a.8b3438"
            ]
        ]
    },
    {
        "id": "fd5d0ff.a6dbcf",
        "type": "http request",
        "z": "aba48cf7.2bc8d",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "1b05e92a.30b507",
        "x": 2060,
        "y": 740,
        "wires": [
            [
                "bd3b7f57.a8e85"
            ]
        ]
    },
    {
        "id": "195db502.6fc3db",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "Avto 3 response snapshot",
        "active": true,
        "console": "true",
        "complete": "payload",
        "x": 2400,
        "y": 740,
        "wires": []
    },
    {
        "id": "bd3b7f57.a8e85",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "parser",
        "func": "var str = {\n    payload: msg.payload,\n    \n};\nmsg.payload = JSON.stringify(str);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2210,
        "y": 740,
        "wires": [
            [
                "195db502.6fc3db"
            ]
        ]
    },
    {
        "id": "b944a43a.8b3438",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 2030,
        "y": 700,
        "wires": []
    },
    {
        "id": "a725ff47.0d267",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "video url",
        "func": "msg.url = global.get('video_camera_url'); \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1505.3334884643555,
        "y": 736.7619142532349,
        "wires": [
            [
                "e6c209b1.f2c8a8"
            ]
        ]
    },
    {
        "id": "4feda8a3.ca0bd8",
        "type": "debug",
        "z": "aba48cf7.2bc8d",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 450,
        "y": 960,
        "wires": []
    },
    {
        "id": "2c7e022d.c6336e",
        "type": "comment",
        "z": "aba48cf7.2bc8d",
        "name": "Зробити фото",
        "info": "",
        "x": 1320,
        "y": 700,
        "wires": []
    },
    {
        "id": "b0ab8612.b363d8",
        "type": "comment",
        "z": "aba48cf7.2bc8d",
        "name": "Зважити у Апекс",
        "info": "",
        "x": 162.3333740234375,
        "y": 951.3333625793457,
        "wires": []
    },
    {
        "id": "8f4eadc9.7961b",
        "type": "function",
        "z": "aba48cf7.2bc8d",
        "name": "over_load",
        "func": "msg.event_id = flow.get('event_over_load');\nmsg.description = 'Можливий досип після зважування. Максимальная вага: ' + msg.metadata.transactionMaxWeight + \"кг. Облікова вага: \" + msg.metadata.transactionAccWeight + \"кг.\";\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 400,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "d23726e6.4ca568",
        "type": "switch",
        "z": "aba48cf7.2bc8d",
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
        "x": 630,
        "y": 400,
        "wires": [
            [
                "8f4eadc9.7961b"
            ]
        ]
    },
    {
        "id": "411a5d52.25abb4",
        "type": "delay",
        "z": "aba48cf7.2bc8d",
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
        "x": 820,
        "y": 820,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    },
    {
        "id": "cbc238b2.1252c8",
        "type": "delay",
        "z": "aba48cf7.2bc8d",
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
        "x": 820,
        "y": 860,
        "wires": [
            [
                "4f07143.e82fcec"
            ]
        ]
    }
]
