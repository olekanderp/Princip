[
    {
        "id": "ad7735e5.7e4ef8",
        "type": "tab",
        "label": "А9 Avto",
        "disabled": false,
        "info": ""
    },
    {
        "id": "9975e9e.6ec5098",
        "type": "tab",
        "label": "Flow 2"
    },
    {
        "id": "3be3f92f.bdb356",
        "type": "tab",
        "label": "JD 1 ВП-01"
    },
    {
        "id": "825de2d0.1bfa6",
        "type": "tab",
        "label": "JD 1 processing_scale1"
    },
    {
        "id": "5f65b79.8a42648",
        "type": "subflow",
        "name": "ETTN",
        "info": "",
        "in": [],
        "out": []
    },
    {
        "id": "538299a8.ff44f8",
        "type": "subflow",
        "name": "Subflow 1",
        "info": "",
        "in": [],
        "out": []
    },
    {
        "id": "b70553d8.57079",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": true
    },
    {
        "id": "b37204e.06258f8",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "e6192380.8c5b",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "63674be2.d784d4",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "5d934f81.4c23f",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "f0e701a5.a26a3",
        "type": "serial-port",
        "serialport": "/dev/ttyACM0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "200",
        "bin": "false",
        "out": "time",
        "addchar": false
    },
    {
        "id": "cd16ab46.8dc2b8",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": true
    },
    {
        "id": "75b928ff.69f498",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "31161f97.5faa2",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "35acace2.d1c6f4",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "ad48d58f.c82b98",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "2e08d7b9.1ca288",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "61b811c6.8eeca",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "b7f38daa.3917a",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "1415dd6b.973e53",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "9915db68.06c648",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "659370a1.eafe9",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "2b863bae.d65624",
        "type": "tls-config",
        "name": "",
        "cert": "",
        "key": "",
        "ca": "",
        "verifyservercert": false
    },
    {
        "id": "2dffc86f.1e6d58",
        "type": "inject",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "inputString",
        "payloadType": "flow",
        "x": 120,
        "y": 200,
        "wires": [
            [
                "e8e9e286.fa6a7"
            ]
        ]
    },
    {
        "id": "b15c0b6d.f61678",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "GET WEIGHT",
        "func": "var payload = msg.payload;\nvar parser = flow.get('parser');\nvar currentWeight = parser(payload);\n\n\nflow.set('currentWeight',currentWeight);\n\nmsg.payload = currentWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 500,
        "y": 260,
        "wires": [
            [
                "cd37ac86.ccb7e8",
                "19eaa62d.0a94b2"
            ]
        ]
    },
    {
        "id": "68642a40.47e42c",
        "type": "comment",
        "z": "ad7735e5.7e4ef8",
        "name": "Device level",
        "info": "",
        "x": 103.91738891601562,
        "y": 158.04128742218018,
        "wires": []
    },
    {
        "id": "f1e84d71.630ee8",
        "type": "inject",
        "z": "ad7735e5.7e4ef8",
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
                "aef2391f.5dd27"
            ]
        ]
    },
    {
        "id": "687fa75c.c328e8",
        "type": "comment",
        "z": "ad7735e5.7e4ef8",
        "name": "INITIALIZING",
        "info": "",
        "x": 103.91738891601562,
        "y": 38.041287422180176,
        "wires": []
    },
    {
        "id": "aef2391f.5dd27",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "Scale PARSER",
        "func": "flow.set('inputString',Buffer.from(\"0241440d0a03\",\"hex\"));\nflow.set('parser',function(v){\n        \n       v = v.substring(1,8);\n       v = v.split(\"\").reverse().join(\"\");\n       return Number(v);\n       //return v;\n    }\n  );\nglobal.set('scale_id','123');\nglobal.set('ip','10.0.15.100');\nglobal.set('video_camera_url','');\nreturn msg;",
        "outputs": 1,
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
        "id": "19eaa62d.0a94b2",
        "type": "link out",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "links": [
            "7e9975a7.9bb544"
        ],
        "x": 685,
        "y": 260,
        "wires": []
    },
    {
        "id": "dbd3446b.1c60d",
        "type": "debug",
        "z": "ad7735e5.7e4ef8",
        "name": "weight",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 313.9173889160156,
        "y": 316.0412902832031,
        "wires": []
    },
    {
        "id": "e8e9e286.fa6a7",
        "type": "debug",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 350,
        "y": 160,
        "wires": []
    },
    {
        "id": "cd37ac86.ccb7e8",
        "type": "debug",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 529,
        "y": 227,
        "wires": []
    },
    {
        "id": "95f4c827.310a08",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "time_rasp",
        "func": "var time = new Date();\nflow.set(\"time_rasp\", time);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 280,
        "y": 440,
        "wires": [
            [
                "7e87378b.81b0c"
            ]
        ]
    },
    {
        "id": "280a90b0.0862a8",
        "type": "inject",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 110,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "7e87378b.81b0c",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "sub time",
        "func": "var weigth_time = flow.get(\"weigth_time\");\nvar time_rasp = flow.get(\"time_rasp\");\n\nvar sub = time_rasp - weigth_time;\n//msg.payload = {\n//    sub: time_rasp - weigth_time,\n//    weigth_time: weigth_time,\n//    time_rasp: time_rasp\n//}\n\n    if(sub > 5000){\n    msg.payload = 0;\n    return msg;\n    }\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 420,
        "y": 440,
        "wires": [
            [
                "ff291fb1.77952",
                "19eaa62d.0a94b2"
            ]
        ]
    },
    {
        "id": "ff291fb1.77952",
        "type": "debug",
        "z": "ad7735e5.7e4ef8",
        "name": "not connect ",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 600,
        "y": 440,
        "wires": []
    },
    {
        "id": "c0c07061.aac3b",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "Init reset var",
        "func": "flow.set(\"weigth_time\", new Date());\nflow.set(\"date_come\",true);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 330,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "169ee21b.9b840e",
        "type": "inject",
        "z": "ad7735e5.7e4ef8",
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
                "c0c07061.aac3b"
            ]
        ]
    },
    {
        "id": "50f8841.fa29d7c",
        "type": "function",
        "z": "ad7735e5.7e4ef8",
        "name": "Scale PARSER",
        "func": "flow.set('inputString',String.fromCharCode(0x02) + String.fromCharCode(0x41) + String.fromCharCode(0x03));\nflow.set('parser',function(v){\n       v = v.substring(1,8);\n      return Number(v);\n       //return v;\n    }\n  );\nglobal.set('scale_id','123');\nglobal.set('ip','10.0.7.99');\nglobal.set('video_camera_url','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 295,
        "y": 37,
        "wires": [
            []
        ]
    },
    {
        "id": "d38feb4cbe22066d",
        "type": "tcp in",
        "z": "ad7735e5.7e4ef8",
        "name": "",
        "server": "server",
        "host": "",
        "port": "8234",
        "datamode": "stream",
        "datatype": "utf8",
        "newline": "",
        "topic": "",
        "trim": false,
        "base64": false,
        "tls": "",
        "x": 100,
        "y": 260,
        "wires": [
            [
                "c0c07061.aac3b",
                "45eca3890a92d217"
            ]
        ]
    },
    {
        "id": "45eca3890a92d217",
        "type": "delay",
        "z": "ad7735e5.7e4ef8",
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
        "x": 320,
        "y": 260,
        "wires": [
            [
                "b15c0b6d.f61678",
                "dbd3446b.1c60d"
            ]
        ]
    },
    {
        "id": "3602132c21d30a74",
        "type": "inject",
        "z": "ad7735e5.7e4ef8",
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
        "payload": "2000",
        "payloadType": "num",
        "x": 530,
        "y": 140,
        "wires": [
            [
                "19eaa62d.0a94b2"
            ]
        ]
    },
    {
        "id": "7fe1f5ed.09e074",
        "type": "file",
        "z": "9975e9e.6ec5098",
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
        "id": "999223f0.9fac78",
        "type": "exec",
        "z": "9975e9e.6ec5098",
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
                "9d33dc76.bd4d5",
                "a90308dd.619e18"
            ],
            [],
            []
        ]
    },
    {
        "id": "e5f360eb.e171d8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "main config",
        "func": "flow.set('prevWeight',null);\nflow.set('transaction',null);\nflow.set('transactionData',[]);\nflow.set('transactionMaxWeight',null);\nflow.set('transactionHasMinWeight',null);\nflow.set('transactionHasMaxWeight',null);\nflow.set('transactionHasMaxDuration',null);\nflow.set('lasttimedata', new Date());\nflow.set('checkHealth',null);\nflow.set('transactionWaybill',null);\nflow.set('transactionAccWeight', null);\nflow.set('transactionHasOverLoad', null);\nflow.set('transactionOperationName', null);\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 662,
        "y": 262,
        "wires": [
            []
        ]
    },
    {
        "id": "45dbf48b.b172cc",
        "type": "inject",
        "z": "9975e9e.6ec5098",
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
                "62f3699b.8971e8",
                "c27e08fe.e8ec7"
            ]
        ]
    },
    {
        "id": "d850ec8c.32b678",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "",
        "url": "/firmware",
        "method": "post",
        "swaggerDoc": "",
        "x": 140,
        "y": 100,
        "wires": [
            [
                "7fe1f5ed.09e074"
            ]
        ]
    },
    {
        "id": "39fca393.8fe26c",
        "type": "file in",
        "z": "9975e9e.6ec5098",
        "name": "deivce_config",
        "filename": "deivce_config.json",
        "format": "utf8",
        "x": 491,
        "y": 218,
        "wires": [
            [
                "296ed301.095d4c"
            ]
        ]
    },
    {
        "id": "8d2d5b30.65587",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "",
        "url": "/serial",
        "method": "get",
        "swaggerDoc": "",
        "x": 140,
        "y": 40,
        "wires": [
            [
                "999223f0.9fac78"
            ]
        ]
    },
    {
        "id": "9d33dc76.bd4d5",
        "type": "http response",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 616,
        "y": 23,
        "wires": []
    },
    {
        "id": "a90308dd.619e18",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "",
        "func": "msg.payload = msg.payload.split(':')[1].replace('\\n','').replace(' ','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 622,
        "y": 59,
        "wires": [
            [
                "c3bf7d96.00266"
            ]
        ]
    },
    {
        "id": "c3bf7d96.00266",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 759,
        "y": 54,
        "wires": []
    },
    {
        "id": "c83462cb.55dfa8",
        "type": "inject",
        "z": "9975e9e.6ec5098",
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
                "cdd0aa5a.446198"
            ]
        ]
    },
    {
        "id": "cdd0aa5a.446198",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_in_minus_id':'8DB9B239DF5252F0E055000000000001',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_on_id': '85A2CC45702A2DD1E0533300000A0C94',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'event_driver_in':'8E68D8D8B2977181E055000000000001',\n    'event_over_load':'B3EB5F800EFD2620E0530101007F8A05',\n    'snapshot_events':['80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0', \"8E68D8D8B2977181E055000000000001\",\"B3EB5F800EFD2620E0530101007F8A05\"],\n    'main_host':'http://172.16.1.4:8080/ords/ettn',\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':60000,\n    'maxDuration':600000,\n    'minWeight':-40,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':40,\n    'driverWeight':80,\n    'overLoadWeight': 200\n};\nmsg.payload = device_config;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 180,
        "wires": [
            [
                "7fe1f5ed.09e074"
            ]
        ]
    },
    {
        "id": "296ed301.095d4c",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('event_driver_in', device_config.event_driver_in);\nflow.set('event_over_load',device_config.event_over_load);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\nflow.set('driverWeight',device_config.driverWeight);\nflow.set('overLoadWeight', device_config.overLoadWeight);\n\nmsg.payload = {\n\tscale_id: flow.get('scale_id'),\n\tevent_move_in_id: flow.get('event_move_in_id'),\n\tevent_move_in_minus_id: flow.get('event_move_in_minus_id'),\n\tevent_move_out_id: flow.get('event_move_out_id'),\n\tevent_max_weight_id: flow.get('event_max_weight_id'),\n\tevent_off_id: flow.get('event_off_id'),\n\tevent_on_id: flow.get('event_on_id'),\n\tevent_max_duration: flow.get('event_max_duration'),\n\tevent_fake_traffic: flow.get('event_fake_traffic'),\n\tevent_driver_in: flow.get('event_driver_in'),\n\tevent_over_load: flow.get('event_over_load'),\n\tmain_host: flow.get('main_host'),\n\tevent_url: flow.get('event_url'),\n\tstate_url: flow.get('state_url'),\n\tmaxWeight: flow.get('maxWeight'),\n\tminWeight: flow.get('minWeight'),\n\tmaxDuration: flow.get('maxDuration'),\n\tcheckHealthTimeout: flow.get('checkHealthTimeout'),\n\tevent_get_weight_acc: flow.get('event_get_weight_acc'),\n\tevent_min_weight: flow.get('event_min_weight'),\n\tminTriggerWeight: flow.get('minTriggerWeight'),\n\tsnapshot_url: flow.get('snapshot_url'),\n\tsnapshot_events: flow.get('snapshot_events'),\n\tdriverWeight: flow.get('driverWeight'),\n\toverLoadWeight: flow.get('overLoadWeight')\n};\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 662,
        "y": 222,
        "wires": [
            [
                "92862be9.5fd71"
            ]
        ]
    },
    {
        "id": "92862be9.5fd71",
        "type": "json",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 802,
        "y": 222,
        "wires": [
            [
                "e76bafa7.50a858"
            ]
        ]
    },
    {
        "id": "e76bafa7.50a858",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "IN device config",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 952,
        "y": 222,
        "wires": []
    },
    {
        "id": "62f3699b.8971e8",
        "type": "trigger",
        "z": "9975e9e.6ec5098",
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
                "e5f360eb.e171d8"
            ]
        ]
    },
    {
        "id": "72359135.739088",
        "type": "comment",
        "z": "9975e9e.6ec5098",
        "name": "Init",
        "info": "",
        "x": 90,
        "y": 140,
        "wires": []
    },
    {
        "id": "dec1b1a9.52ffe8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага, кг: ' + msg.metadata.weight;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 640,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "9ac057e.9764aa8",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
        "x": 450,
        "y": 560,
        "wires": [
            [
                "dec1b1a9.52ffe8"
            ]
        ]
    },
    {
        "id": "872dbddf.6aeb8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "events payload",
        "func": "// var event_id = msg.event_id;\n// var scale_id = global.get('scale_id');\n// var snapshot_events = flow.get('snapshot_events');\n// var snapshot = false;\n\n// if (snapshot_events.indexOf(event_id)>=0){\n//     snapshot = true;\n// }\n\n// msg.payload = {\n//     'event':{\n//         'id':msg.event_id\n//     },\n//     'devices':[{'id':scale_id}],\n//     'data':msg.metadata,\n//     'description':msg.description\n// }\n\n// msg.headers = {\n//     \"content-type\":\"application/json\"\n// }\n\n// msg.url = flow.get('main_host')+flow.get('event_url');\n// msg.main_host = flow.get('main_host');\n// msg.event_url = flow.get('event_url');\n// msg.snapshot = snapshot;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1020,
        "y": 600,
        "wires": [
            [
                "54223996.0f0f48",
                "6aa6e68e.82415"
            ]
        ]
    },
    {
        "id": "c177b202.242028",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar transactionOperationName = flow.get('transactionOperationName');\n\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar operation_name_income = \"Приход (авто)\";\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\nvar is_minus = false;\nvar transactionAccWeight = flow.get('transactionAccWeight');//облікова вага\nvar overLoadWeight = flow.get('overLoadWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 0) && (weight > 0) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 0) && (weight <=0) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionHasOverLoad',null);\n        flow.set('transactionOperationName',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n        flow.set('transactionAccWeight', null);//облікова вага\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n    if((prevWeight < 0) && ((weight-prevWeight) > minTriggerWeight)){\n        //start of transaction\n        is_minus = true;\n        msg.prevWeight = prevWeight;\n    }\n}\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if (transactionData[i] !== transactionData[i-1]){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable': weight <= 0 ? true : msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'transactionAccWeight':transactionAccWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center,\n    'driverInCar':false,\n    'transactionOperationName':transactionOperationName\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nmsg.is_minus = is_minus;\n\nif(transactionAccWeight && transactionOperationName!==operation_name_income){\n    \n   flow.set('transactionHasOverLoad',(weight-transactionAccWeight)>overLoadWeight);\n   \n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 190,
        "y": 540,
        "wires": [
            [
                "d295b17c.308c18",
                "9ac057e.9764aa8",
                "a11b9e13.55a118",
                "966177fd.416fd",
                "ce1d017e.9aebc"
            ]
        ]
    },
    {
        "id": "4ca99225.6e573c",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar driverWeight = flow.get('driverWeight');\nvar buisness_data = msg.req.query;\n\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\n\n//check driver in a car\nvar driver_in = false;\nmsg.driverWeight = driverWeight;\nif((transactionMaxWeight - msg.metadata.weight) < driverWeight){\n    driver_in = true;\n}\n\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = ' '+buisness_data.operation_name+'. '+buisness_data.operation_type+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер авто: \"+buisness_data.truck1+\" \"+buisness_data.truck2+\" \"+buisness_data.item_name + \", ТТН: \" + buisness_data.waybill;\nmsg.transactionMetadata = transactionMetadata;\nmsg.driver_in = driver_in;\n\nflow.set('transactionAccWeight',  msg.metadata.weight);//облікова вага\nflow.set('transactionOperationName',  msg.metadata.operation_name);//вид операції\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 537.1428680419922,
        "y": 997.1428661346436,
        "wires": [
            [
                "32cbf19c.46de56",
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "8bf7173b.3417a8",
        "type": "http request",
        "z": "9975e9e.6ec5098",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 1240,
        "y": 600,
        "wires": [
            [
                "9d362065.146e98",
                "375a8c42.8c9f2c"
            ]
        ]
    },
    {
        "id": "307bc478.5bad1c",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
                "1ca7efcb.b6c9"
            ]
        ]
    },
    {
        "id": "54223996.0f0f48",
        "type": "json",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 1230,
        "y": 560,
        "wires": [
            [
                "b62784fb.9ac9d"
            ]
        ]
    },
    {
        "id": "6aa6e68e.82415",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "IN event",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 1184,
        "y": 493.9999885559082,
        "wires": []
    },
    {
        "id": "fdf233a9.0cf2f",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 560,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "4dc00b86.7c1174",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 860,
        "wires": [
            [
                "5efefcd6.a45a24"
            ]
        ]
    },
    {
        "id": "78bbc4f1.9f0d94",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 820,
        "wires": [
            [
                "d5d3a797.53a3e8"
            ]
        ]
    },
    {
        "id": "e7889c23.137f38",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Максимальна вага: ' + msg.metadata.transactionMaxWeight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 600,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "85439e8.c210ae",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах, сек: ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 700,
        "y": 680,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "11fb71e6.17a9c6",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "empty waybill",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + Math.round(msg.metadata.duration/60)+ 'хв.'+ \" Максимальна вага: \" + msg.metadata.transactionMaxWeight + \" кг.\";\n//metadata.transactionMaxWeight\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 520,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "f33576f4.66d8f8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага, кг: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 720,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "f6bc5d58.56e6c",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "move in minus",
        "func": "msg.event_id = flow.get('event_move_in_minus_id');\nmsg.description = 'Заїзд із мінусом. ' + msg.prevWeight +' кг.';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 480,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "7e9975a7.9bb544",
        "type": "link in",
        "z": "9975e9e.6ec5098",
        "name": "s4",
        "links": [
            "19eaa62d.0a94b2"
        ],
        "x": 35,
        "y": 540,
        "wires": [
            [
                "c177b202.242028"
            ]
        ]
    },
    {
        "id": "d295b17c.308c18",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
        "x": 432,
        "y": 522.9999885559082,
        "wires": [
            [
                "fdf233a9.0cf2f"
            ],
            [
                "e7889c23.137f38",
                "a7b362c9.116d88",
                "ff945fb1.54156"
            ]
        ]
    },
    {
        "id": "a11b9e13.55a118",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
        "x": 430,
        "y": 600,
        "wires": [
            [
                "85439e8.c210ae"
            ]
        ]
    },
    {
        "id": "966177fd.416fd",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
        "x": 450,
        "y": 640,
        "wires": [
            [
                "f33576f4.66d8f8"
            ]
        ]
    },
    {
        "id": "ce1d017e.9aebc",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
        "x": 440,
        "y": 480,
        "wires": [
            [
                "f6bc5d58.56e6c"
            ]
        ]
    },
    {
        "id": "32cbf19c.46de56",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
                "cd8217f5.b2f2",
                "90501d4f.94ddb8"
            ]
        ]
    },
    {
        "id": "32245597.d255b2",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "",
        "url": "/getWeight",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 183.57144165039062,
        "y": 998.714282989502,
        "wires": [
            [
                "bc751ab.4007de8",
                "4ca99225.6e573c",
                "144ed615.60872a"
            ]
        ]
    },
    {
        "id": "9d362065.146e98",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "parser",
        "func": "var str = {\n    payload: msg.payload,\n    event_id: msg.event_id,\n    metadata: msg.metadata,\n    driverWeight: msg.driverWeight,\n    description: msg.description,\n    url: msg.url,\n    main_host: msg.main_host,\n    event_url: msg.event_url,\n    statusCode: msg.statusCode,\n    responseUrl: msg.responseUrl\n    \n};\nmsg.payload = JSON.stringify(str);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1390,
        "y": 640,
        "wires": [
            [
                "214dc4bd.bb50cc"
            ]
        ]
    },
    {
        "id": "375a8c42.8c9f2c",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 1390,
        "y": 600,
        "wires": []
    },
    {
        "id": "cd8217f5.b2f2",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "driver_in event",
        "func": "msg.event_id = flow.get('event_driver_in');\nmsg.description = 'При зважуванні водій в кабіні. Вага: ' + msg.metadata.weight+\"кг. Номер авто: \"+msg.metadata.truck1+\" \"+msg.metadata.truck2+\" \"+msg.metadata.item_name;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1052.0159301757812,
        "y": 762.2064208984375,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "b62784fb.9ac9d",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "Avto 3 IN event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1390,
        "y": 560,
        "wires": []
    },
    {
        "id": "e2177fd8.61c0d8",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
                "78bbc4f1.9f0d94"
            ],
            [
                "4dc00b86.7c1174"
            ]
        ]
    },
    {
        "id": "a7b362c9.116d88",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
                "11fb71e6.17a9c6"
            ]
        ]
    },
    {
        "id": "90501d4f.94ddb8",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 990,
        "y": 1000,
        "wires": []
    },
    {
        "id": "bc751ab.4007de8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.reader){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 500,
        "y": 1060,
        "wires": [
            [
                "bf3f481d.73cfb8",
                "6b1771b3.65e37"
            ]
        ]
    },
    {
        "id": "214dc4bd.bb50cc",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "Avto 3 IN response event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1580,
        "y": 640,
        "wires": []
    },
    {
        "id": "c070ed26.e5b3f8",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 840,
        "wires": [
            [
                "e2177fd8.61c0d8"
            ]
        ]
    },
    {
        "id": "bf3f481d.73cfb8",
        "type": "http response",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 710,
        "y": 1060,
        "wires": []
    },
    {
        "id": "6b1771b3.65e37",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 670,
        "y": 1100,
        "wires": []
    },
    {
        "id": "bd68036e.067ef8",
        "type": "inject",
        "z": "9975e9e.6ec5098",
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
                "c070ed26.e5b3f8"
            ]
        ]
    },
    {
        "id": "eba323fa.b32578",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "",
        "url": "/getSimpleWeight",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 200,
        "y": 1200,
        "wires": [
            [
                "964df8f1.81504"
            ]
        ]
    },
    {
        "id": "964df8f1.81504",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata').weight;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 1200,
        "wires": [
            [
                "7f5b8b7e.a3ef9c"
            ]
        ]
    },
    {
        "id": "7f5b8b7e.a3ef9c",
        "type": "http response",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 630,
        "y": 1200,
        "wires": []
    },
    {
        "id": "6fdc322b.d2cdb4",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "",
        "url": "/socket",
        "method": "get",
        "swaggerDoc": "",
        "x": 170,
        "y": 1260,
        "wires": [
            [
                "72622977.d1eb18"
            ]
        ]
    },
    {
        "id": "3270a651.05c962",
        "type": "template",
        "z": "9975e9e.6ec5098",
        "name": "socket page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n     \n  <body>\n    <h1><p id='weight'></p></h1>\n    \n     <script>\n    setTimeout(function() {\n       ;(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(\"./lib/\")},{\"./lib/\":2}],2:[function(_dereq_,module,exports){module.exports=_dereq_(\"./socket\");module.exports.parser=_dereq_(\"engine.io-parser\")},{\"./socket\":3,\"engine.io-parser\":19}],3:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(\"./transports\");var Emitter=_dereq_(\"component-emitter\");var debug=_dereq_(\"debug\")(\"engine.io-client:socket\");var index=_dereq_(\"indexof\");var parser=_dereq_(\"engine.io-parser\");var parseuri=_dereq_(\"parseuri\");var parsejson=_dereq_(\"parsejson\");var parseqs=_dereq_(\"parseqs\");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&\"object\"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol==\"https\"||uri.protocol==\"wss\";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&\"https:\"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?\"443\":\"80\"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:\"localhost\");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(\"string\"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||\"/engine.io\").replace(/\\/$/,\"\")+\"/\";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||\"t\";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[\"polling\",\"websocket\"];this.readyState=\"\";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(\"./transport\");Socket.transports=_dereq_(\"./transports\");Socket.parser=_dereq_(\"engine.io-parser\");Socket.prototype.createTransport=function(name){debug('creating transport \"%s\"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf(\"websocket\")!=-1){transport=\"websocket\"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit(\"error\",\"No transports available\")},0);return}else{transport=this.transports[0]}this.readyState=\"opening\";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(\"setting transport %s\",transport.name);var self=this;if(this.transport){debug(\"clearing existing transport %s\",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(\"drain\",function(){self.onDrain()}).on(\"packet\",function(packet){self.onPacket(packet)}).on(\"error\",function(e){self.onError(e)}).on(\"close\",function(){self.onClose(\"transport close\")})};Socket.prototype.probe=function(name){debug('probing transport \"%s\"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport \"%s\" opened',name);transport.send([{type:\"ping\",data:\"probe\"}]);transport.once(\"packet\",function(msg){if(failed)return;if(\"pong\"==msg.type&&\"probe\"==msg.data){debug('probe transport \"%s\" pong',name);self.upgrading=true;self.emit(\"upgrading\",transport);if(!transport)return;Socket.priorWebsocketSuccess=\"websocket\"==transport.name;debug('pausing current transport \"%s\"',self.transport.name);self.transport.pause(function(){if(failed)return;if(\"closed\"==self.readyState)return;debug(\"changing transport and sending upgrade packet\");cleanup();self.setTransport(transport);transport.send([{type:\"upgrade\"}]);self.emit(\"upgrade\",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport \"%s\" failed',name);var err=new Error(\"probe error\");err.transport=transport.name;self.emit(\"upgradeError\",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(\"probe error: \"+err);error.transport=transport.name;freezeTransport();debug('probe transport \"%s\" failed because of error: %s',name,err);self.emit(\"upgradeError\",error)}function onTransportClose(){onerror(\"transport closed\")}function onclose(){onerror(\"socket closed\")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('\"%s\" works - aborting \"%s\"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(\"open\",onTransportOpen);transport.removeListener(\"error\",onerror);transport.removeListener(\"close\",onTransportClose);self.removeListener(\"close\",onclose);self.removeListener(\"upgrading\",onupgrade)}transport.once(\"open\",onTransportOpen);transport.once(\"error\",onerror);transport.once(\"close\",onTransportClose);this.once(\"close\",onclose);this.once(\"upgrading\",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(\"socket open\");this.readyState=\"open\";Socket.priorWebsocketSuccess=\"websocket\"==this.transport.name;this.emit(\"open\");this.flush();if(\"open\"==this.readyState&&this.upgrade&&this.transport.pause){debug(\"starting upgrade probes\");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(\"opening\"==this.readyState||\"open\"==this.readyState){debug('socket receive: type \"%s\", data \"%s\"',packet.type,packet.data);this.emit(\"packet\",packet);this.emit(\"heartbeat\");switch(packet.type){case\"open\":this.onHandshake(parsejson(packet.data));break;case\"pong\":this.setPing();this.emit(\"pong\");break;case\"error\":var err=new Error(\"server error\");err.code=packet.data;this.onError(err);break;case\"message\":this.emit(\"data\",packet.data);this.emit(\"message\",packet.data);break}}else{debug('packet received with socket readyState \"%s\"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(\"handshake\",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(\"closed\"==this.readyState)return;this.setPing();this.removeListener(\"heartbeat\",this.onHeartbeat);this.on(\"heartbeat\",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(\"closed\"==self.readyState)return;self.onClose(\"ping timeout\")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(\"writing ping packet - expecting pong within %sms\",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket(\"ping\",function(){self.emit(\"ping\")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit(\"drain\")}else{this.flush()}};Socket.prototype.flush=function(){if(\"closed\"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug(\"flushing %d packets in socket\",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(\"flush\")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket(\"message\",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if(\"function\"==typeof data){fn=data;data=undefined}if(\"function\"==typeof options){fn=options;options=null}if(\"closing\"==this.readyState||\"closed\"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit(\"packetCreate\",packet);this.writeBuffer.push(packet);if(fn)this.once(\"flush\",fn);this.flush()};Socket.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.readyState=\"closing\";var self=this;if(this.writeBuffer.length){this.once(\"drain\",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose(\"forced close\");debug(\"socket closing - telling transport to close\");self.transport.close()}function cleanupAndClose(){self.removeListener(\"upgrade\",cleanupAndClose);self.removeListener(\"upgradeError\",cleanupAndClose);close()}function waitForUpgrade(){self.once(\"upgrade\",cleanupAndClose);self.once(\"upgradeError\",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug(\"socket error %j\",err);Socket.priorWebsocketSuccess=false;this.emit(\"error\",err);this.onClose(\"transport error\",err)};Socket.prototype.onClose=function(reason,desc){if(\"opening\"==this.readyState||\"open\"==this.readyState||\"closing\"==this.readyState){debug('socket close with reason: \"%s\"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners(\"close\");this.transport.close();this.transport.removeAllListeners();this.readyState=\"closed\";this.id=null;this.emit(\"close\",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./transport\":4,\"./transports\":5,\"component-emitter\":15,debug:17,\"engine.io-parser\":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(_dereq_,module,exports){var parser=_dereq_(\"engine.io-parser\");var Emitter=_dereq_(\"component-emitter\");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=\"\";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=\"TransportError\";err.description=desc;this.emit(\"error\",err);return this};Transport.prototype.open=function(){if(\"closed\"==this.readyState||\"\"==this.readyState){this.readyState=\"opening\";this.doOpen()}return this};Transport.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(\"open\"==this.readyState){this.write(packets)}else{throw new Error(\"Transport not open\")}};Transport.prototype.onOpen=function(){this.readyState=\"open\";this.writable=true;this.emit(\"open\")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(\"packet\",packet)};Transport.prototype.onClose=function(){this.readyState=\"closed\";this.emit(\"close\")}},{\"component-emitter\":15,\"engine.io-parser\":19}],5:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var XHR=_dereq_(\"./polling-xhr\");var JSONP=_dereq_(\"./polling-jsonp\");var websocket=_dereq_(\"./websocket\");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(\"open\"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(\"JSONP disabled\");return new JSONP(opts)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling-jsonp\":6,\"./polling-xhr\":7,\"./websocket\":9,\"xmlhttprequest-ssl\":10}],6:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(\"./polling\");var inherit=_dereq_(\"component-inherit\");module.exports=JSONPPolling;var rNewline=/\\n/g;var rEscapedNewline=/\\\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener(\"beforeunload\",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(\"script\");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(\"jsonp poll error\",e)};var insertAt=document.getElementsByTagName(\"script\")[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt)}else{(document.head||document.body).appendChild(script)}this.script=script;var isUAgecko=\"undefined\"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(\"iframe\");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(\"form\");var area=document.createElement(\"textarea\");var id=this.iframeId=\"eio_iframe_\"+this.index;var iframe;form.className=\"socketio\";form.style.position=\"absolute\";form.style.top=\"-1000px\";form.style.left=\"-1000px\";form.target=id;form.method=\"POST\";form.setAttribute(\"accept-charset\",\"utf-8\");area.name=\"d\";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError(\"jsonp polling iframe removal error\",e)}}try{var html='<iframe src=\"javascript:0\" name=\"'+self.iframeId+'\">';iframe=document.createElement(html)}catch(e){iframe=document.createElement(\"iframe\");iframe.name=self.iframeId;iframe.src=\"javascript:0\"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,\"\\\\\\n\");this.area.value=data.replace(rNewline,\"\\\\n\");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==\"complete\"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-inherit\":16}],7:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var Polling=_dereq_(\"./polling\");var Emitter=_dereq_(\"component-emitter\");var inherit=_dereq_(\"component-inherit\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling-xhr\");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==\"string\"&&data!==undefined;var req=this.request({method:\"POST\",data:data,isBinary:isBinary});var self=this;req.on(\"success\",fn);req.on(\"error\",function(err){self.onError(\"xhr post error\",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(\"xhr poll\");var req=this.request();var self=this;req.on(\"data\",function(data){self.onData(data)});req.on(\"error\",function(err){self.onError(\"xhr poll error\",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||\"GET\";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug(\"xhr open %s: %s\",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType=\"arraybuffer\"}if(\"POST\"==this.method){try{if(this.isBinary){xhr.setRequestHeader(\"Content-type\",\"application/octet-stream\")}else{xhr.setRequestHeader(\"Content-type\",\"text/plain;charset=UTF-8\")}}catch(e){}}if(\"withCredentials\"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(\"xhr data %s\",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(\"success\");this.cleanup()};Request.prototype.onData=function(data){this.emit(\"data\",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(\"error\",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if(\"undefined\"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(\"Content-Type\").split(\";\")[0]}catch(e){}if(contentType===\"application/octet-stream\"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return\"undefined\"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(\"onunload\",unloadHandler)}else if(global.addEventListener){global.addEventListener(\"beforeunload\",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-emitter\":15,\"component-inherit\":16,debug:17,\"xmlhttprequest-ssl\":10}],8:[function(_dereq_,module,exports){var Transport=_dereq_(\"../transport\");var parseqs=_dereq_(\"parseqs\");var parser=_dereq_(\"engine.io-parser\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling\");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=\"polling\";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=\"pausing\";function pause(){debug(\"paused\");self.readyState=\"paused\";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(\"we are currently polling - waiting to pause\");total++;this.once(\"pollComplete\",function(){debug(\"pre-pause polling complete\");--total||pause()})}if(!this.writable){debug(\"we are currently writing - waiting to pause\");total++;this.once(\"drain\",function(){debug(\"pre-pause writing complete\");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(\"polling\");this.polling=true;this.doPoll();this.emit(\"poll\")};Polling.prototype.onData=function(data){var self=this;debug(\"polling got data %s\",data);var callback=function(packet,index,total){if(\"opening\"==self.readyState){self.onOpen()}if(\"close\"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(\"closed\"!=this.readyState){this.polling=false;this.emit(\"pollComplete\");if(\"open\"==this.readyState){this.poll()}else{debug('ignoring poll - transport state \"%s\"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(\"writing close packet\");self.write([{type:\"close\"}])}if(\"open\"==this.readyState){debug(\"transport open - closing\");close()}else{debug(\"transport not open - deferring close\");this.once(\"open\",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(\"drain\")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"https\":\"http\";var port=\"\";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&(\"https\"==schema&&this.port!=443||\"http\"==schema&&this.port!=80)){port=\":\"+this.port}if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query}},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,\"xmlhttprequest-ssl\":10,yeast:30}],9:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_(\"../transport\");var parser=_dereq_(\"engine.io-parser\");var parseqs=_dereq_(\"parseqs\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:websocket\");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window===\"undefined\"){try{WebSocket=_dereq_(\"ws\")}catch(e){}}module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=\"websocket\";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType=\"buffer\"}else{this.ws.binaryType=\"arraybuffer\"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(\"websocket error\",e)}};if(\"undefined\"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len=\"string\"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug(\"websocket closed before onclose event\")}--total||done()})})(packets[i])}function done(){self.emit(\"flush\");setTimeout(function(){self.writable=true;self.emit(\"drain\")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==\"undefined\"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"wss\":\"ws\";var port=\"\";if(this.port&&(\"wss\"==schema&&this.port!=443||\"ws\"==schema&&this.port!=80)){port=\":\"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!(\"__initialize\"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,ws:undefined,yeast:30}],10:[function(_dereq_,module,exports){var hasCORS=_dereq_(\"has-cors\");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(\"undefined\"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(\"undefined\"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}}},{\"has-cors\":22}],11:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error(\"after called too many times\")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],12:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],13:[function(_dereq_,module,exports){(function(chars){\"use strict\";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=\"\";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];\nbase64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+\"=\"}else if(len%3===1){base64=base64.substring(0,base64.length-2)+\"==\"}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===\"=\"){bufferLength--;if(base64[base64.length-2]===\"=\"){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\")},{}],14:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob([\"hi\"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],15:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],16:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],17:[function(_dereq_,module,exports){exports=module.exports=_dereq_(\"./debug\");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=\"undefined\"!=typeof chrome&&\"undefined\"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=[\"lightseagreen\",\"forestgreen\",\"goldenrod\",\"dodgerblue\",\"darkorchid\",\"crimson\"];function useColors(){return\"WebkitAppearance\"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?\"%c\":\"\")+this.namespace+(useColors?\" %c\":\" \")+args[0]+(useColors?\"%c \":\" \")+\"+\"+exports.humanize(this.diff);if(!useColors)return args;var c=\"color: \"+this.color;args=[args[0],c,\"color: inherit\"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if(\"%%\"===match)return;index++;if(\"%c\"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return\"object\"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem(\"debug\")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{\"./debug\":18}],18:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_(\"ms\");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if(\"string\"!==typeof args[0]){args=[\"%o\"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match===\"%%\")return match;index++;var formatter=exports.formatters[format];if(\"function\"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if(\"function\"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||\"\").split(/[\\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\\*/g,\".*?\");if(namespaces[0]===\"-\"){exports.skips.push(new RegExp(\"^\"+namespaces.substr(1)+\"$\"))}else{exports.names.push(new RegExp(\"^\"+namespaces+\"$\"))}}}function disable(){exports.enable(\"\")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:25}],19:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(\"./keys\");var hasBinary=_dereq_(\"has-binary\");var sliceBuffer=_dereq_(\"arraybuffer.slice\");var base64encoder=_dereq_(\"base64-arraybuffer\");var after=_dereq_(\"after\");var utf8=_dereq_(\"utf8\");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:\"error\",data:\"parser error\"};var Blob=_dereq_(\"blob\");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(\"function\"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(\"function\"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(\"\"+encoded)};function encodeBase64Object(packet,callback){var message=\"b\"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=\"b\"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(\",\")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==\"string\"||data===undefined){if(data.charAt(0)==\"b\"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType===\"blob\"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===\"blob\"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==\"function\"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(\"0:\")}function setLengthHeader(message){return message.length+\":\"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(\"\"))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=\"string\"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var packet;if(data==\"\"){return callback(err,0,1)}var length=\"\",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(\":\"!=chr){length+=chr}else{if(\"\"==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=\"\"}}if(length!=\"\"){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===\"string\"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===\"string\";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===\"string\"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=\"\";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=\"\";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./keys\":20,after:11,\"arraybuffer.slice\":12,\"base64-arraybuffer\":13,blob:14,\"has-binary\":21,utf8:29}],20:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],21:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:24}],22:[function(_dereq_,module,exports){try{module.exports=typeof XMLHttpRequest!==\"undefined\"&&\"withCredentials\"in new XMLHttpRequest}catch(err){module.exports=false}},{}],23:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],24:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==\"[object Array]\"}},{}],25:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if(\"string\"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=\"\"+str;if(str.length>1e4)return;var match=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||\"ms\").toLowerCase();switch(type){case\"years\":case\"year\":case\"yrs\":case\"yr\":case\"y\":return n*y;case\"days\":case\"day\":case\"d\":return n*d;case\"hours\":case\"hour\":case\"hrs\":case\"hr\":case\"h\":return n*h;case\"minutes\":case\"minute\":case\"mins\":case\"min\":case\"m\":return n*m;case\"seconds\":case\"second\":case\"secs\":case\"sec\":case\"s\":return n*s;case\"milliseconds\":case\"millisecond\":case\"msecs\":case\"msec\":case\"ms\":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+\"d\";if(ms>=h)return Math.round(ms/h)+\"h\";if(ms>=m)return Math.round(ms/m)+\"m\";if(ms>=s)return Math.round(ms/s)+\"s\";return ms+\"ms\"}function long(ms){return plural(ms,d,\"day\")||plural(ms,h,\"hour\")||plural(ms,m,\"minute\")||plural(ms,s,\"second\")||ms+\" ms\"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+\" \"+name;return Math.ceil(ms/n)+\" \"+name+\"s\"}},{}],26:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\\],:{}\\s]*$/;var rvalidescape=/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\\s*\\[)+/g;var rtrimLeft=/^\\s+/;var rtrimRight=/\\s+$/;module.exports=function parsejson(data){if(\"string\"!=typeof data||!data){return null}data=data.replace(rtrimLeft,\"\").replace(rtrimRight,\"\");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,\"@\").replace(rvalidtokens,\"]\").replace(rvalidbraces,\"\"))){return new Function(\"return \"+data)()}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],27:[function(_dereq_,module,exports){exports.encode=function(obj){var str=\"\";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=\"&\";str+=encodeURIComponent(i)+\"=\"+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(\"&\");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split(\"=\");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],28:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;var parts=[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"];module.exports=function parseuri(str){var src=str,b=str.indexOf(\"[\"),e=str.indexOf(\"]\");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,\";\")+str.substring(e,str.length)}var m=re.exec(str||\"\"),uri={},i=14;while(i--){uri[parts[i]]=m[i]||\"\"}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,\":\");uri.authority=uri.authority.replace(\"[\",\"\").replace(\"]\",\"\").replace(/;/g,\":\");uri.ipv6uri=true}return uri}},{}],29:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==\"object\"&&exports;var freeModule=typeof module==\"object\"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=\"\";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error(\"Lone surrogate U+\"+codePoint.toString(16).toUpperCase()+\" is not a scalar value\")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol=\"\";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=\"\";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error(\"Invalid byte index\")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error(\"Invalid continuation byte\")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error(\"Invalid byte index\")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error(\"Invalid UTF-8 detected\")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:\"2.0.0\",encode:utf8encode,decode:utf8decode};if(typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],30:[function(_dereq_,module,exports){\"use strict\";var alphabet=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_\".split(\"\"),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded=\"\";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+\".\"+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}],31:[function(_dereq_,module,exports){var url=_dereq_(\"./url\");var parser=_dereq_(\"socket.io-parser\");var Manager=_dereq_(\"./manager\");var debug=_dereq_(\"debug\")(\"socket.io-client\");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==\"object\"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts[\"force new connection\"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug(\"ignoring socket cache for %s\",source);io=Manager(source,opts)}else{if(!cache[id]){debug(\"new io instance for %s\",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(\"./manager\");exports.Socket=_dereq_(\"./socket\")},{\"./manager\":32,\"./socket\":34,\"./url\":35,debug:39,\"socket.io-parser\":47}],32:[function(_dereq_,module,exports){var eio=_dereq_(\"engine.io-client\");var Socket=_dereq_(\"./socket\");var Emitter=_dereq_(\"component-emitter\");var parser=_dereq_(\"socket.io-parser\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:manager\");var indexOf=_dereq_(\"indexof\");var Backoff=_dereq_(\"backo2\");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&\"object\"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||\"/socket.io\";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=\"closed\";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(\"readyState %s\",this.readyState);if(~this.readyState.indexOf(\"open\"))return this;debug(\"opening %s\",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=\"opening\";this.skipReconnect=false;var openSub=on(socket,\"open\",function(){self.onopen();fn&&fn()});var errorSub=on(socket,\"error\",function(data){debug(\"connect_error\");self.cleanup();self.readyState=\"closed\";self.emitAll(\"connect_error\",data);if(fn){var err=new Error(\"Connection error\");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug(\"connect attempt will timeout after %d\",timeout);var timer=setTimeout(function(){debug(\"connect attempt timed out after %d\",timeout);openSub.destroy();socket.close();socket.emit(\"error\",\"timeout\");self.emitAll(\"connect_timeout\",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(\"open\");this.cleanup();this.readyState=\"open\";this.emit(\"open\");var socket=this.engine;this.subs.push(on(socket,\"data\",bind(this,\"ondata\")));this.subs.push(on(socket,\"ping\",bind(this,\"onping\")));this.subs.push(on(socket,\"pong\",bind(this,\"onpong\")));this.subs.push(on(socket,\"error\",bind(this,\"onerror\")));this.subs.push(on(socket,\"close\",bind(this,\"onclose\")));this.subs.push(on(this.decoder,\"decoded\",bind(this,\"ondecoded\")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll(\"ping\")};Manager.prototype.onpong=function(){this.emitAll(\"pong\",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(\"packet\",packet)};Manager.prototype.onerror=function(err){debug(\"error\",err);this.emitAll(\"error\",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(\"connecting\",onConnecting);\nsocket.on(\"connect\",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug(\"writing packet %j\",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug(\"cleanup\");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug(\"disconnect\");this.skipReconnect=true;this.reconnecting=false;if(\"opening\"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState=\"closed\";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug(\"onclose\");this.cleanup();this.backoff.reset();this.readyState=\"closed\";this.emit(\"close\",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug(\"reconnect failed\");this.backoff.reset();this.emitAll(\"reconnect_failed\");this.reconnecting=false}else{var delay=this.backoff.duration();debug(\"will wait %dms before reconnect attempt\",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(\"attempting reconnect\");self.emitAll(\"reconnect_attempt\",self.backoff.attempts);self.emitAll(\"reconnecting\",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(\"reconnect attempt error\");self.reconnecting=false;self.reconnect();self.emitAll(\"reconnect_error\",err.data)}else{debug(\"reconnect success\");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll(\"reconnect\",attempt)}},{\"./on\":33,\"./socket\":34,backo2:36,\"component-bind\":37,\"component-emitter\":38,debug:39,\"engine.io-client\":1,indexof:42,\"socket.io-parser\":47}],33:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],34:[function(_dereq_,module,exports){var parser=_dereq_(\"socket.io-parser\");var Emitter=_dereq_(\"component-emitter\");var toArray=_dereq_(\"to-array\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:socket\");var hasBin=_dereq_(\"has-binary\");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,\"open\",bind(this,\"onopen\")),on(io,\"packet\",bind(this,\"onpacket\")),on(io,\"close\",bind(this,\"onclose\"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(\"open\"==this.io.readyState)this.onopen();this.emit(\"connecting\");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(\"message\");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if(\"function\"==typeof args[args.length-1]){debug(\"emitting packet with ack id %d\",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(\"transport is open - connecting\");if(\"/\"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(\"close (%s)\",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit(\"disconnect\",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(\"error\",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(\"emitting event %j\",args);if(null!=packet.id){debug(\"attaching ack callback to event\");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(\"sending ack %j\",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if(\"function\"==typeof ack){debug(\"calling ack %s with %j\",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug(\"bad ack %s\",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(\"connect\");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(\"server disconnect (%s)\",this.nsp);this.destroy();this.onclose(\"io server disconnect\")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(\"performing disconnect (%s)\",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(\"io client disconnect\")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{\"./on\":33,\"component-bind\":37,\"component-emitter\":38,debug:39,\"has-binary\":41,\"socket.io-parser\":47,\"to-array\":51}],35:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(\"parseuri\");var debug=_dereq_(\"debug\")(\"socket.io-client:url\");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+\"//\"+loc.host;if(\"string\"==typeof uri){if(\"/\"==uri.charAt(0)){if(\"/\"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\\/\\//.test(uri)){debug(\"protocol-less url %s\",uri);if(\"undefined\"!=typeof loc){uri=loc.protocol+\"//\"+uri}else{uri=\"https://\"+uri}}debug(\"parse %s\",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=\"80\"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=\"443\"}}obj.path=obj.path||\"/\";var ipv6=obj.host.indexOf(\":\")!==-1;var host=ipv6?\"[\"+obj.host+\"]\":obj.host;obj.id=obj.protocol+\"://\"+host+\":\"+obj.port;obj.href=obj.protocol+\"://\"+host+(loc&&loc.port==obj.port?\"\":\":\"+obj.port);return obj}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{debug:39,parseuri:45}],36:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],37:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(\"string\"==typeof fn)fn=obj[fn];if(\"function\"!=typeof fn)throw new Error(\"bind() requires a function\");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],38:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[\"$\"+event]=this._callbacks[\"$\"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[\"$\"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[\"$\"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[\"$\"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[\"$\"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],39:[function(_dereq_,module,exports){arguments[4][17][0].apply(exports,arguments)},{\"./debug\":40,dup:17}],40:[function(_dereq_,module,exports){arguments[4][18][0].apply(exports,arguments)},{dup:18,ms:44}],41:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON&&\"function\"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:43}],42:[function(_dereq_,module,exports){arguments[4][23][0].apply(exports,arguments)},{dup:23}],43:[function(_dereq_,module,exports){arguments[4][24][0].apply(exports,arguments)},{dup:24}],44:[function(_dereq_,module,exports){arguments[4][25][0].apply(exports,arguments)},{dup:25}],45:[function(_dereq_,module,exports){arguments[4][28][0].apply(exports,arguments)},{dup:28}],46:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");var isBuf=_dereq_(\"./is-buffer\");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(\"object\"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&\"object\"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&\"object\"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./is-buffer\":48,isarray:43}],47:[function(_dereq_,module,exports){var debug=_dereq_(\"debug\")(\"socket.io-parser\");var json=_dereq_(\"json3\");var isArray=_dereq_(\"isarray\");var Emitter=_dereq_(\"component-emitter\");var binary=_dereq_(\"./binary\");var isBuf=_dereq_(\"./is-buffer\");exports.protocol=4;exports.types=[\"CONNECT\",\"DISCONNECT\",\"EVENT\",\"BINARY_EVENT\",\"ACK\",\"BINARY_ACK\",\"ERROR\"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(\"encoding packet %j\",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=\"\";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=\"-\"}if(obj.nsp&&\"/\"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=\",\";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=\",\";str+=json.stringify(obj.data)}debug(\"encoded %j as %s\",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(\"string\"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit(\"decoded\",packet)}}else{this.emit(\"decoded\",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(\"got binary data when not reconstructing a packet\")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(\"decoded\",packet)}}}else{throw new Error(\"Unknown type: \"+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf=\"\";while(str.charAt(++i)!=\"-\"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!=\"-\"){throw new Error(\"Illegal attachments\")}p.attachments=Number(buf)}if(\"/\"==str.charAt(i+1)){p.nsp=\"\";while(++i){var c=str.charAt(i);if(\",\"==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp=\"/\"}var next=str.charAt(i+1);if(\"\"!==next&&Number(next)==next){p.id=\"\";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(\"decoded %s as %j\",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:\"parser error\"}}},{\"./binary\":46,\"./is-buffer\":48,\"component-emitter\":49,debug:39,isarray:43,json3:50}],48:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],49:[function(_dereq_,module,exports){arguments[4][15][0].apply(exports,arguments)},{dup:15}],50:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define===\"function\"&&define.amd;var objectTypes={\"function\":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global==\"object\"&&global;if(freeGlobal&&(freeGlobal[\"global\"]===freeGlobal||freeGlobal[\"window\"]===freeGlobal||freeGlobal[\"self\"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root[\"Object\"]());exports||(exports=root[\"Object\"]());var Number=context[\"Number\"]||root[\"Number\"],String=context[\"String\"]||root[\"String\"],Object=context[\"Object\"]||root[\"Object\"],Date=context[\"Date\"]||root[\"Date\"],SyntaxError=context[\"SyntaxError\"]||root[\"SyntaxError\"],TypeError=context[\"TypeError\"]||root[\"TypeError\"],Math=context[\"Math\"]||root[\"Math\"],nativeJSON=context[\"JSON\"]||root[\"JSON\"];if(typeof nativeJSON==\"object\"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==\"bug-string-char-index\"){isSupported=\"a\"[0]!=\"a\"}else if(name==\"json\"){isSupported=has(\"json-stringify\")&&has(\"json-parse\")}else{var value,serialized='{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';if(name==\"json-stringify\"){var stringify=exports.stringify,stringifySupported=typeof stringify==\"function\"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===\"0\"&&stringify(new Number)===\"0\"&&stringify(new String)=='\"\"'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)===\"1\"&&stringify([value])==\"[1]\"&&stringify([undef])==\"[null]\"&&stringify(null)==\"null\"&&stringify([undef,getClass,null])==\"[null,null,null]\"&&stringify({a:[value,true,false,null,\"\\x00\\b\\n\\f\\r\t\"]})==serialized&&stringify(null,value)===\"1\"&&stringify([1,2],null,1)==\"[\\n 1,\\n 2\\n]\"&&stringify(new Date(-864e13))=='\"-271821-04-20T00:00:00.000Z\"'&&stringify(new Date(864e13))=='\"+275760-09-13T00:00:00.000Z\"'&&stringify(new Date(-621987552e5))=='\"-000001-01-01T00:00:00.000Z\"'&&stringify(new Date(-1))=='\"1969-12-31T23:59:59.999Z\"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==\"json-parse\"){var parse=exports.parse;if(typeof parse==\"function\"){try{if(parse(\"0\")===0&&!parse(false)){value=parse(serialized);var parseSupported=value[\"a\"].length==5&&value[\"a\"][0]===1;if(parseSupported){try{parseSupported=!parse('\"\t\"')}catch(exception){}if(parseSupported){try{parseSupported=parse(\"01\")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(\"1.\")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(\"json\")){var functionClass=\"[object Function]\",dateClass=\"[object Date]\",numberClass=\"[object Number]\",stringClass=\"[object String]\",arrayClass=\"[object Array]\",booleanClass=\"[object Boolean]\";var charIndexBuggy=has(\"bug-string-char-index\");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[\"valueOf\",\"toString\",\"toLocaleString\",\"propertyIsEnumerable\",\"isPrototypeOf\",\"hasOwnProperty\",\"constructor\"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!=\"function\"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property==\"prototype\")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property==\"prototype\")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property==\"prototype\")&&isProperty.call(object,property)&&!(isConstructor=property===\"constructor\")){callback(property)}}if(isConstructor||isProperty.call(object,property=\"constructor\")){callback(property)}}}return forEach(object,callback)};if(!has(\"json-stringify\")){var Escapes={92:\"\\\\\\\\\",34:'\\\\\"',8:\"\\\\b\",12:\"\\\\f\",10:\"\\\\n\",13:\"\\\\r\",9:\"\\\\t\"};var leadingZeroes=\"000000\";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=\"\\\\u00\";var quote=function(value){var result='\"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(\"\"):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'\"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==\"object\"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,\"toJSON\")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?\"-\":\"+\")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+\"-\"+toPaddedString(2,month+1)+\"-\"+toPaddedString(2,date)+\"T\"+toPaddedString(2,hours)+\":\"+toPaddedString(2,minutes)+\":\"+toPaddedString(2,seconds)+\".\"+toPaddedString(3,milliseconds)+\"Z\"}else{value=null}}else if(typeof value.toJSON==\"function\"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,\"toJSON\"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return\"null\"}className=getClass.call(value);if(className==booleanClass){return\"\"+value}else if(className==numberClass){return value>-1/0&&value<1/0?\"\"+value:\"null\"}else if(className==stringClass){return quote(\"\"+value)}if(typeof value==\"object\"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?\"null\":element)}result=results.length?whitespace?\"[\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"]\":\"[\"+results.join(\",\")+\"]\":\"[]\"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+\":\"+(whitespace?\" \":\"\")+element)}});result=results.length?whitespace?\"{\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"}\":\"{\"+results.join(\",\")+\"}\":\"{}\"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace=\"\",width>10&&(width=10);whitespace.length<width;whitespace+=\" \");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize(\"\",(value={},value[\"\"]=source,value),callback,properties,whitespace,\"\",[])}}if(!has(\"json-parse\")){var fromCharCode=String.fromCharCode;var Unescapes={92:\"\\\\\",34:'\"',47:\"/\",98:\"\\b\",116:\"\t\",110:\"\\n\",102:\"\\f\",114:\"\\r\"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=\"@\",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode(\"0x\"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==\"true\"){Index+=4;return true}else if(source.slice(Index,Index+5)==\"false\"){Index+=5;return false}else if(source.slice(Index,Index+4)==\"null\"){Index+=4;return null}abort()}}return\"$\"};var get=function(value){var results,hasMembers;if(value==\"$\"){abort()}if(typeof value==\"string\"){if((charIndexBuggy?value.charAt(0):value[0])==\"@\"){return value.slice(1)}if(value==\"[\"){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"]\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"]\"){abort()}}else{abort()}}if(value==\",\"){abort()}results.push(get(value))}return results}else if(value==\"{\"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"}\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"}\"){abort()}}else{abort()}}if(value==\",\"||typeof value!=\"string\"||(charIndexBuggy?value.charAt(0):value[0])!=\"@\"||lex()!=\":\"){abort()}results[value.slice(1)]=get(lex())\n}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==\"object\"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=\"\"+source;result=get(lex());if(lex()!=\"$\"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[\"\"]=result,value),\"\",callback):result}}}exports[\"runInContext\"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root[\"JSON3\"],isRestored=false;var JSON3=runInContext(root,root[\"JSON3\"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root[\"JSON3\"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],51:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[31])(31)});\n\n    \n      ;var weight = document.getElementById('weight');\n      var socket = io('http://{{ip}}:4001');\n      socket.on('getWeight', function(msg) {\n        weight.innerHTML = msg;\n    \n      }); \n    }, 1000);\n    </script>\n\n  </body>\n</html>\n",
        "x": 510,
        "y": 1260,
        "wires": [
            [
                "d450237.fa2c6e"
            ]
        ]
    },
    {
        "id": "d450237.fa2c6e",
        "type": "http response",
        "z": "9975e9e.6ec5098",
        "name": "",
        "x": 670,
        "y": 1260,
        "wires": []
    },
    {
        "id": "72622977.d1eb18",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "set ip",
        "func": "msg.ip = global.get('ip');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 1260,
        "wires": [
            [
                "3270a651.05c962"
            ]
        ]
    },
    {
        "id": "436a5ca5.072e74",
        "type": "http request",
        "z": "9975e9e.6ec5098",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "",
        "x": 1655.9048805236816,
        "y": 738.1905097961426,
        "wires": [
            [
                "8cc59680.d7198"
            ]
        ]
    },
    {
        "id": "8cc59680.d7198",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1850,
        "y": 740,
        "wires": [
            [
                "c4e7df0.9baae2",
                "2944d03e.76c86"
            ]
        ]
    },
    {
        "id": "c4e7df0.9baae2",
        "type": "http request",
        "z": "9975e9e.6ec5098",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "b70553d8.57079",
        "x": 2060,
        "y": 740,
        "wires": [
            [
                "3ad18b9b.eeea54"
            ]
        ]
    },
    {
        "id": "3e4191d5.450166",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "Avto 3 response snapshot",
        "active": true,
        "console": "true",
        "complete": "payload",
        "x": 2400,
        "y": 740,
        "wires": []
    },
    {
        "id": "3ad18b9b.eeea54",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "parser",
        "func": "var str = {\n    payload: msg.payload,\n    \n};\nmsg.payload = JSON.stringify(str);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2210,
        "y": 740,
        "wires": [
            [
                "3e4191d5.450166"
            ]
        ]
    },
    {
        "id": "2944d03e.76c86",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 2030,
        "y": 700,
        "wires": []
    },
    {
        "id": "1ca7efcb.b6c9",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "video url",
        "func": "msg.url = global.get('video_camera_url'); \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1505.3334884643555,
        "y": 736.7619142532349,
        "wires": [
            [
                "436a5ca5.072e74"
            ]
        ]
    },
    {
        "id": "144ed615.60872a",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 450,
        "y": 960,
        "wires": []
    },
    {
        "id": "5d9f036e.62eadc",
        "type": "http in",
        "z": "9975e9e.6ec5098",
        "name": "Serialgel_Weight",
        "url": "/serial/getWeight",
        "method": "get",
        "swaggerDoc": "",
        "x": 180,
        "y": 1060,
        "wires": [
            [
                "bc751ab.4007de8",
                "3f93556b.4cd2b2",
                "4ca99225.6e573c"
            ]
        ]
    },
    {
        "id": "3f93556b.4cd2b2",
        "type": "debug",
        "z": "9975e9e.6ec5098",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 490.761962890625,
        "y": 1094.9047737121582,
        "wires": []
    },
    {
        "id": "1e70c141.d6516f",
        "type": "comment",
        "z": "9975e9e.6ec5098",
        "name": "Зробити фото",
        "info": "",
        "x": 1320,
        "y": 700,
        "wires": []
    },
    {
        "id": "7e1f3f94.258958",
        "type": "comment",
        "z": "9975e9e.6ec5098",
        "name": "Зважити у Апекс",
        "info": "",
        "x": 162.3333740234375,
        "y": 951.3333625793457,
        "wires": []
    },
    {
        "id": "c35994f0.226648",
        "type": "function",
        "z": "9975e9e.6ec5098",
        "name": "over_load",
        "func": "msg.event_id = flow.get('event_over_load');\nmsg.description = 'Можливий досип після зважування. Максимальная вага: ' + msg.metadata.transactionMaxWeight + \"кг. Облікова вага: \" + msg.metadata.transactionAccWeight + \"кг.\";\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 400,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "ff945fb1.54156",
        "type": "switch",
        "z": "9975e9e.6ec5098",
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
                "c35994f0.226648"
            ]
        ]
    },
    {
        "id": "d5d3a797.53a3e8",
        "type": "delay",
        "z": "9975e9e.6ec5098",
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
        "x": 780,
        "y": 820,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "5efefcd6.a45a24",
        "type": "delay",
        "z": "9975e9e.6ec5098",
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
        "x": 780,
        "y": 860,
        "wires": [
            [
                "872dbddf.6aeb8"
            ]
        ]
    },
    {
        "id": "c27e08fe.e8ec7",
        "type": "delay",
        "z": "9975e9e.6ec5098",
        "name": "",
        "pauseType": "delay",
        "timeout": "2",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "outputs": 1,
        "x": 289,
        "y": 222,
        "wires": [
            [
                "39fca393.8fe26c"
            ]
        ]
    },
    {
        "id": "4740dbb2.59ccd4",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "Для поосевого",
        "func": "flow.set('cmd',\"ALL\\r\"); //текущая команда\n/*\nmsg.payload = \"VER\"  + String.fromCharCode(13)\nmsg.payload = \"VER\"  + String.fromCharCode(10)\nmsg.payload = \"ALL\"  + String.fromCharCode(10)\nmsg.payload = \"ALL\"  + String.fromCharCode(13)\n*/\n\n\nglobal.set('scale_id_jd_1','5088d2f7-709e-4b85-bf23-97b7bbfbd560');\nglobal.set('ip','10.106.21.130');\nglobal.set('video_camera_url','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 40,
        "wires": [
            [
                "92d1d80b.e7f2b8"
            ]
        ]
    },
    {
        "id": "37914c7e.0e9d04",
        "type": "inject",
        "z": "3be3f92f.bdb356",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 40,
        "wires": [
            [
                "4740dbb2.59ccd4"
            ]
        ]
    },
    {
        "id": "a0fdbda0.b7265",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 710,
        "y": 40,
        "wires": []
    },
    {
        "id": "92d1d80b.e7f2b8",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "Общий",
        "func": "var p = {\n    'smartScaleURL':'http://10.1.132.171/preBI/hs/api/v1/weights?token=5af8e4eb-c54a-40ab-8755-b6e154d9a7d1&encoding=utf8',\n    'smartScaleMethod':'POST',\n    'organizationName':'Рахни',\n    'organizationID':'04',\n    'typeOfScale':'IoT',\n    'source':'atom',\n    'scale':'jd1',\n    'dblogin':'atom2',\n    'dbpassword':'123',\n    'log':1,\n    'socketport':'5003',\n    'ip':'10.107.5.200',\n    'inject':\"W\",\n    'parser':function(v){\n          let w = 0;\n          let a1 = 0;\n          let a2 = 0;\n\n          w = Number(v.substring(3,10));\n          a1 = Number(v.substring(10,17));\n          a2 = Number(v.substring(17,24));\n          let с1 = a1 - a2;\n           \n          flow.set('w',w);\n          flow.set('a1',a1);\n          flow.set('a2',a2);\n          flow.set('c', с1);\n           \n           return w;\n        }\n};\nflow.set('p',p);",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 40,
        "wires": [
            [
                "a0fdbda0.b7265"
            ]
        ]
    },
    {
        "id": "cf34919a.9d61f",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 890,
        "y": 380,
        "wires": []
    },
    {
        "id": "667d6e3e.09768",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "Общий",
        "func": "msg.payload = flow.get('w');\nmsg.weight1 = flow.get('a1');\nmsg.weight2 = flow.get('a2');\nmsg.weight_center = msg.weight1 - msg.weight2;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 740,
        "y": 340,
        "wires": [
            [
                "db12acb2.ffe59",
                "cf34919a.9d61f"
            ]
        ]
    },
    {
        "id": "db12acb2.ffe59",
        "type": "link out",
        "z": "3be3f92f.bdb356",
        "name": "",
        "links": [
            "eb91d1b3.8fc88"
        ],
        "x": 855,
        "y": 340,
        "wires": []
    },
    {
        "id": "49f00fe9.f537b",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "",
        "func": "var payload = msg.payload;\nvar parser = flow.get(\"p\").parser;\nvar currentWeight = parser(payload);\n\nflow.set(\"currentWeight\",parser(payload));\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 340,
        "wires": [
            [
                "667d6e3e.09768",
                "a3366863.202038"
            ]
        ]
    },
    {
        "id": "28e9b750.4c8438",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 890,
        "y": 280,
        "wires": []
    },
    {
        "id": "dd48a177.30188",
        "type": "inject",
        "z": "3be3f92f.bdb356",
        "name": "cmd step-by-step",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "cmd",
        "payloadType": "flow",
        "x": 170,
        "y": 280,
        "wires": [
            [
                "32a2beeb.0a60d2",
                "f13304986646ec8e"
            ]
        ]
    },
    {
        "id": "49a78978.c423b8",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "toString",
        "func": "msg.payload = msg.payload.toString();\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 280,
        "wires": [
            [
                "28e9b750.4c8438",
                "49f00fe9.f537b",
                "9cb0d1d2.14283"
            ]
        ]
    },
    {
        "id": "f4a75cc0.9bd5f",
        "type": "comment",
        "z": "3be3f92f.bdb356",
        "name": "info",
        "info": "\"ALL 100 0 100 0 0 0 10000 0 1 0 65 \"//1\n\"ALL 50 0 50 0 0 0 10000 0 1 0 65 \"\n\"ALL 100 100 0 0 0 0 10000 0 1 0 65 \"//2\n",
        "x": 77,
        "y": 84,
        "wires": []
    },
    {
        "id": "cb21faec.77c1d8",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 730,
        "y": 220,
        "wires": []
    },
    {
        "id": "a3366863.202038",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 730,
        "y": 380,
        "wires": []
    },
    {
        "id": "32a2beeb.0a60d2",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 471,
        "y": 204,
        "wires": []
    },
    {
        "id": "9cb0d1d2.14283",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "",
        "func": "var weight = msg.payload;\n\nmsg.payload = {\n    weight: weight,\n    date: new Date(),\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "f0a8781d.52de58",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "time_rasp",
        "func": "var time = new Date();\nflow.set(\"time_rasp\", time);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 380,
        "y": 600,
        "wires": [
            [
                "eead3fb1.54532"
            ]
        ]
    },
    {
        "id": "c6a4dca9.a54b9",
        "type": "inject",
        "z": "3be3f92f.bdb356",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 190,
        "y": 600,
        "wires": [
            [
                "f0a8781d.52de58"
            ]
        ]
    },
    {
        "id": "eead3fb1.54532",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "sub time",
        "func": "var weigth_time = flow.get(\"weigth_time\");\nvar time_rasp = flow.get(\"time_rasp\");\n\nvar sub = time_rasp - weigth_time;\n//msg.payload = {\n//    sub: time_rasp - weigth_time,\n//    weigth_time: weigth_time,\n//    time_rasp: time_rasp\n//}\n\n    if(sub > 30000){\n    msg.connect = \"not\";\n    \n    msg.payload = 0;\n    msg.weight1 = 0;\n    msg.weight2 = 0;\n    msg.weight_center = 0;\n    \n    \n    return msg;\n    }\n",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 600,
        "wires": [
            [
                "ab022106.6caa2",
                "db12acb2.ffe59"
            ]
        ]
    },
    {
        "id": "ab022106.6caa2",
        "type": "debug",
        "z": "3be3f92f.bdb356",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 690,
        "y": 600,
        "wires": []
    },
    {
        "id": "38727cfc.820ee4",
        "type": "function",
        "z": "3be3f92f.bdb356",
        "name": "weigth_time",
        "func": "flow.set('weigth_time',new Date());\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 390,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "460b1fab.b00ca",
        "type": "inject",
        "z": "3be3f92f.bdb356",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 560,
        "wires": [
            [
                "38727cfc.820ee4"
            ]
        ]
    },
    {
        "id": "f13304986646ec8e",
        "type": "tcp request",
        "z": "3be3f92f.bdb356",
        "name": "",
        "server": "172.16.7.26",
        "port": "8080",
        "out": "time",
        "ret": "buffer",
        "splitc": "200",
        "newline": "",
        "trim": false,
        "tls": "",
        "x": 480,
        "y": 280,
        "wires": [
            [
                "49a78978.c423b8"
            ]
        ]
    },
    {
        "id": "eb91d1b3.8fc88",
        "type": "link in",
        "z": "825de2d0.1bfa6",
        "name": "weight",
        "links": [
            "db12acb2.ffe59"
        ],
        "x": 35,
        "y": 380,
        "wires": [
            [
                "37c5bc2e.d17154",
                "e5569d9b.39886",
                "1d8dc8ca.7e6e07"
            ]
        ]
    },
    {
        "id": "1d8dc8ca.7e6e07",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "main module",
        "func": "var prevWeight = flow.get('prevWeight');\nvar transaction = flow.get('transaction');\nvar transactionData = flow.get('transactionData');\nvar transactionMaxWeight = flow.get('transactionMaxWeight');\nvar transactionHasMaxWeight = flow.get('transactionHasMaxWeight');\nvar transactionHasMinWeight = flow.get('transactionHasMinWeight');\nvar transactionHasMaxDuration = flow.get('transactionHasMaxDuration');\nvar waybill = flow.get('transactionWaybill');\nvar weight = msg.payload;\nvar stableSize = 5;\nvar duration = 0;\nvar maxWeight = flow.get('maxWeight');\nvar maxDuration = flow.get('maxDuration');\nvar prevTransaction = transaction;\nvar minWeight = flow.get('minWeight');\nvar minTriggerWeight = flow.get('minTriggerWeight');\n\n//transaction\nif (prevWeight === null){\n    prevWeight = msg.payload;    \n}else{\n    if((prevWeight <= 0) && (weight > 0) && (weight > minTriggerWeight)){\n        //start of transaction\n        transaction = Date.now();\n        msg.on = true;\n        flow.set('transaction',transaction);\n    }else if((prevWeight > 0) && (weight <=0) && (transaction)){\n        //transaction = 0;\n        msg.on = false;\n        transactionData = [];\n        flow.set('transaction',0);\n        flow.set('transactionMaxWeight',null);\n        flow.set('transactionHasMaxWeight',null);\n        flow.set('transactionHasMinWeight',null);\n        flow.set('transactionHasMaxDuration',null);\n        flow.set('transactionWaybill',null);\n        flow.set('transactionMetadata',null);\n    }else if((transaction === null) && (weight>0) && (weight > minTriggerWeight)){\n        transaction = Date.now();\n        flow.set('transaction',transaction);\n    }\n}\n\nmsg.stable = true;\n\nif (transaction > 0){\n    transactionData.push(weight);    \n\n    //stable\n    if(transactionData.length > stableSize+1){\n        var stabletmp = true;\n        for (var i = transactionData.length-1; i > transactionData.length-1-stableSize; i--){\n            if (transactionData[i] !== transactionData[i-1]){\n                stabletmp = false;\n                msg.stable = stabletmp;\n                break;\n            }\n            msg.stable = stabletmp;\n        }\n    }else{\n        msg.stable = false;\n    }\n\n    //duration & transactionMaxWeight\n    duration = (Number(Date.now()) - Number(transaction));\n    if( (weight>transactionMaxWeight) || (transactionMaxWeight === null)){\n        transactionMaxWeight = weight;\n        flow.set(\"transactionMaxWeight\",transactionMaxWeight);\n    }\n    \n    if(!transactionHasMaxWeight && weight > maxWeight){\n        msg.transactionHasMaxWeight = true;\n        flow.set('transactionHasMaxWeight',true);\n    }\n    \n    if(!transactionHasMinWeight && weight < minWeight){\n        msg.transactionHasMinWeight = true;\n        flow.set('transactionHasMinWeight',true);\n    }\n    \n    //max duartion\n    if(!transactionHasMaxDuration && duration > maxDuration){\n        msg.transactionHasMaxDuration = true;\n        flow.set('transactionHasMaxDuration',true);\n    }\n}\n\n//result\nmsg.metadata = {\n    'weight':weight,\n    'prevWeight':prevWeight,\n    'prevTransaction':prevTransaction,\n    'transaction':transaction,\n    'on':msg.on,\n    'transactionDataCount':transactionData.length,\n    'stable':true,//msg.stable,\n    'duration':Math.round(duration/1000),\n    'transactionMaxWeight':transactionMaxWeight,\n    'waybill':waybill,\n    'perimetr':true,\n    'weight1':msg.weight1,\n    'weight2':msg.weight2,\n    'weight_center':msg.weight_center\n}\nflow.set('transactionData',transactionData);\nflow.set('prevWeight',weight);\nflow.set('transactionMetadata',msg.metadata);\nflow.set('lasttimedata', new Date());\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 170,
        "y": 380,
        "wires": [
            [
                "9c4795a8.841498",
                "5929731f.e8dc1c",
                "f66bbb2.62aa148",
                "21536356.f42b1c",
                "e48a74b3.07d1d8"
            ]
        ]
    },
    {
        "id": "55da5748.369008",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "get weight from accounting system",
        "func": "var transactionMetadata = flow.get('transactionMetadata');\nvar buisness_data = msg.req.query;\nmsg.metadata = Object.assign(transactionMetadata,buisness_data);\nmsg.event_id = flow.get('event_get_weight_acc');\ntransactionWaybill = flow.get('transactionWaybill');\nif (!transactionWaybill){\n    flow.set('transactionWaybill',msg.req.query.reader);\n}\nmsg.description = buisness_data.operation_name+'. Зважили в 1С. Поточна вага: ' + msg.metadata.weight+\" Номер вагону: \"+buisness_data.truck1+\" \"+buisness_data.item_name;\nmsg.transactionMetadata = transactionMetadata;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 720,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "9c4795a8.841498",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 370,
        "y": 360,
        "wires": [
            [
                "1d2bd496.821e1b"
            ],
            [
                "e49cee3a.49d1a",
                "e1792911.e96758"
            ]
        ]
    },
    {
        "id": "cba3ce04.b12c3",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "EVENTS",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "b7f38daa.3917a",
        "x": 1151.25,
        "y": 350,
        "wires": [
            [
                "c8e1be24.b6429",
                "73ec9f83.58f45"
            ]
        ]
    },
    {
        "id": "1d2bd496.821e1b",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_move_in_id');\nmsg.description = 'Заїзд на ваги. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 320,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "5929731f.e8dc1c",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 390,
        "y": 400,
        "wires": [
            [
                "1bc7eac0.6f1655"
            ]
        ]
    },
    {
        "id": "1bc7eac0.6f1655",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "transactionHasMaxWeight",
        "func": "msg.event_id = flow.get('event_max_weight_id');\nmsg.description = 'Перевищена максимально-допустима вага: ' + msg.metadata.weight;\nmsg.needSnapshot = true;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 400,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "5acbdc30.effde4",
        "type": "inject",
        "z": "825de2d0.1bfa6",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 110,
        "y": 620,
        "wires": [
            [
                "8331e184.f8bd5"
            ]
        ]
    },
    {
        "id": "8331e184.f8bd5",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "check scale health",
        "func": "var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 20000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 620,
        "wires": [
            [
                "f2fca456.1aedc8"
            ]
        ]
    },
    {
        "id": "f2fca456.1aedc8",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 470,
        "y": 620,
        "wires": [
            [
                "e18325ff.024c78"
            ],
            [
                "ec0e693b.9a19f8"
            ]
        ]
    },
    {
        "id": "ec0e693b.9a19f8",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "off",
        "func": "msg.event_id = flow.get('event_off_id');\nmsg.description = 'Прилад відключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 650,
        "y": 620,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "e18325ff.024c78",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "on",
        "func": "msg.event_id = flow.get('event_on_id');\nmsg.description = 'Прилад підключено';\nmsg.metadata = {\n    'state':msg.checkHealth\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 650,
        "y": 580,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "cac8938e.c0ead",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "main config",
        "func": "flow.set('prevWeight',null);\nflow.set('transaction',null);\nflow.set('transactionData',[]);\nflow.set('transactionMaxWeight',null);\nflow.set('transactionHasMinWeight',null);\nflow.set('transactionHasMaxWeight',null);\nflow.set('transactionHasMaxDuration',null);\nflow.set('lasttimedata', new Date());\nflow.set('checkHealth',null);\nflow.set('transactionWaybill',null);\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "33433630.dde86a",
        "type": "inject",
        "z": "825de2d0.1bfa6",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 90,
        "y": 180,
        "wires": [
            [
                "8cbc8a3d.300378",
                "4e2795c2.3f694c"
            ]
        ]
    },
    {
        "id": "e49cee3a.49d1a",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "move out",
        "func": "msg.event_id = flow.get('event_move_out_id');\nmsg.description = 'Зїзд з ваг. Поточна вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "f66bbb2.62aa148",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 370,
        "y": 440,
        "wires": [
            [
                "48871547.b1e34c"
            ]
        ]
    },
    {
        "id": "48871547.b1e34c",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "transaction has max duration",
        "func": "msg.event_id = flow.get('event_max_duration');\nmsg.description = 'Перевищено максимальний час находження на вагах: ' + msg.metadata.duration/1000;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 440,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "9bb117b9.058438",
        "type": "http in",
        "z": "825de2d0.1bfa6",
        "name": "",
        "url": "/firmware",
        "method": "post",
        "swaggerDoc": "",
        "x": 140,
        "y": 140,
        "wires": [
            [
                "b67ab6ca.e34058"
            ]
        ]
    },
    {
        "id": "b67ab6ca.e34058",
        "type": "file",
        "z": "825de2d0.1bfa6",
        "name": "deivce_config_jd_1.json",
        "filename": "deivce_config_jd_1.json",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "x": 610,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "418988d9.42f538",
        "type": "file in",
        "z": "825de2d0.1bfa6",
        "name": "deivce_config_jd_1.json",
        "filename": "deivce_config_jd_1.json",
        "format": "utf8",
        "x": 550,
        "y": 180,
        "wires": [
            [
                "e402ff8c.2118b"
            ]
        ]
    },
    {
        "id": "89cfa8fc.f00a58",
        "type": "http in",
        "z": "825de2d0.1bfa6",
        "name": "",
        "url": "/serial",
        "method": "get",
        "swaggerDoc": "",
        "x": 120,
        "y": 40,
        "wires": [
            [
                "d272ea34.96e938"
            ]
        ]
    },
    {
        "id": "d272ea34.96e938",
        "type": "exec",
        "z": "825de2d0.1bfa6",
        "command": "cat /proc/cpuinfo",
        "addpay": true,
        "append": "| grep Serial",
        "useSpawn": "",
        "timer": "5",
        "name": "",
        "x": 350,
        "y": 40,
        "wires": [
            [
                "a5a379fc.968a38",
                "b632bd84.0ff85"
            ],
            [],
            []
        ]
    },
    {
        "id": "a5a379fc.968a38",
        "type": "http response",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 550,
        "y": 20,
        "wires": []
    },
    {
        "id": "b632bd84.0ff85",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "",
        "func": "msg.payload = msg.payload.split(':')[1].replace('\\n','').replace(' ','');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 550,
        "y": 60,
        "wires": [
            [
                "fefd3fda.dae74"
            ]
        ]
    },
    {
        "id": "fefd3fda.dae74",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 690,
        "y": 60,
        "wires": []
    },
    {
        "id": "7e98e66d.2fe7e8",
        "type": "inject",
        "z": "825de2d0.1bfa6",
        "name": "DEMO",
        "repeat": "10800",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 100,
        "y": 100,
        "wires": [
            [
                "5e59d1bd.1a367"
            ]
        ]
    },
    {
        "id": "5e59d1bd.1a367",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "DEMO Data",
        "func": "var device_config = {\n    'event_move_in_id':'80096D9ABE7F68F3E0533300000A6C0D',\n    'event_move_out_id':'80096D9ABE8068F3E0533300000A6C0D',\n    'event_max_weight_id':'85A255F950F9BEF4E0533300000AC45D',\n    'event_off_id':'85A2CC4570292DD1E0533300000A0C94',\n    'event_on_id': '85A2CC45702A2DD1E0533300000A0C94',\n    'event_max_duration':'8642EE858DE89BAAE0533300000AFCC7',\n    'event_fake_traffic':'80096EF60C186574E0533300000ADBA5',\n    'event_get_weight_acc':'800970AC1FDC683CE0533300000AF1B0',\n    'event_min_weight':'875C3EB5C9DD092DE055000000000001',\n    'event_test_connection':'925791CDC4E619BDE055000000000001',\n    'main_host':'https://10.107.5.200:8443/ords/ettn',\n    'camera_url':'',\n    'event_url':'/iot_cli/events/log',\n    'snapshot_events':['80096D9ABE7F68F3E0533300000A6C0D','85A255F950F9BEF4E0533300000AC45D','8642EE858DE89BAAE0533300000AFCC7','800970AC1FDC683CE0533300000AF1B0'],\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot',\n    'maxWeight':90000,\n    'maxDuration':1200000,\n    'minWeight':0,\n    'checkHealthTimeout':3000,\n    'minTriggerWeight':200\n}\nmsg.payload = device_config;\n// flow.set('scale_id','80096CB0EFD83B63E0533300000A4334');\n// flow.set('event_move_in_id','80096D9ABE7F68F3E0533300000A6C0D');\n// flow.set('event_move_out_id','80096D9ABE8068F3E0533300000A6C0D');\n// flow.set('event_max_weight_id','85A255F950F9BEF4E0533300000AC45D');\n// flow.set('event_off_id','85A2CC4570292DD1E0533300000A0C94');\n// flow.set('event_on_id', '85A2CC45702A2DD1E0533300000A0C94');\n// flow.set('event_max_duration','8642EE858DE89BAAE0533300000AFCC7');\n// flow.set('main_host','http://prod.apex.rest/ords/ettn');\n// flow.set('event_url','/iot_cli/events/log');\n// flow.set('state_url','/v1/device');\n// flow.set('maxWeight',40000);\n// flow.set('maxDuration',20000);\n// flow.set('checkHealthTimeout',3000);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 100,
        "wires": [
            [
                "b67ab6ca.e34058"
            ]
        ]
    },
    {
        "id": "37c5bc2e.d17154",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "JD 1",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 150,
        "y": 340,
        "wires": []
    },
    {
        "id": "e1792911.e96758",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 580,
        "y": 280,
        "wires": [
            [
                "b3d926cb.17d7f8"
            ]
        ]
    },
    {
        "id": "b3d926cb.17d7f8",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "move in",
        "func": "msg.event_id = flow.get('event_fake_traffic');\nmsg.description = 'Холостий проїзд по вагам. Тривалість проїзду ' + msg.metadata.duration;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 280,
        "wires": [
            [
                "f8d00354.e77be"
            ]
        ]
    },
    {
        "id": "f8d00354.e77be",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 930,
        "y": 280,
        "wires": []
    },
    {
        "id": "4fe3740a.8504dc",
        "type": "http in",
        "z": "825de2d0.1bfa6",
        "name": "",
        "url": "/getWeightJD2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 720,
        "wires": [
            [
                "55da5748.369008",
                "42b8272b.380508",
                "76ddfe93.3fb09"
            ]
        ]
    },
    {
        "id": "9866665f.122ea8",
        "type": "http response",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 670,
        "y": 760,
        "wires": []
    },
    {
        "id": "42b8272b.380508",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata');\nmsg.payload.driverInCar = false;\ntransactionWaybill = flow.get('transactionWaybill');\nmsg.payload.transactionWaybill = transactionWaybill;\nif(transactionWaybill && transactionWaybill !== msg.req.query.waybill){\n    msg.payload.status = false;    \n}else {\n    msg.payload.status = true;    \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 540,
        "y": 760,
        "wires": [
            [
                "9866665f.122ea8"
            ]
        ]
    },
    {
        "id": "c8e1be24.b6429",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "true",
        "x": 1330,
        "y": 360,
        "wires": []
    },
    {
        "id": "21536356.f42b1c",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 390,
        "y": 480,
        "wires": [
            [
                "d4c4407b.190f7"
            ]
        ]
    },
    {
        "id": "d4c4407b.190f7",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "transactionHasMinWeight",
        "func": "msg.event_id = flow.get('event_min_weight');\nmsg.description = 'Перевищена мінімально-допустима вага: ' + msg.metadata.weight;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 480,
        "wires": [
            [
                "9cc85417.37ec88"
            ]
        ]
    },
    {
        "id": "52c0013c.b769f",
        "type": "http in",
        "z": "825de2d0.1bfa6",
        "name": "",
        "url": "/getSimpleWeightJD2",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 190,
        "y": 820,
        "wires": [
            [
                "8b2d8d84.4e069"
            ]
        ]
    },
    {
        "id": "8b2d8d84.4e069",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "response",
        "func": "msg.payload = flow.get('transactionMetadata').weight;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 540,
        "y": 820,
        "wires": [
            [
                "3defc5c8.c65b7a"
            ]
        ]
    },
    {
        "id": "3defc5c8.c65b7a",
        "type": "http response",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 670,
        "y": 820,
        "wires": []
    },
    {
        "id": "14e25d45.2bba63",
        "type": "http in",
        "z": "825de2d0.1bfa6",
        "name": "",
        "url": "/socket_jd_1",
        "method": "get",
        "swaggerDoc": "",
        "x": 160,
        "y": 940,
        "wires": [
            [
                "e7ed77dd.d6f418"
            ]
        ]
    },
    {
        "id": "ecddaf8b.b3695",
        "type": "template",
        "z": "825de2d0.1bfa6",
        "name": "socket page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n     \n  <body>\n    <h1><p id='weight'></p></h1>\n    \n     <script>\n    setTimeout(function() {\n       ;(function(f){if(typeof exports===\"object\"&&typeof module!==\"undefined\"){module.exports=f()}else if(typeof define===\"function\"&&define.amd){define([],f)}else{var g;if(typeof window!==\"undefined\"){g=window}else if(typeof global!==\"undefined\"){g=global}else if(typeof self!==\"undefined\"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_(\"./lib/\")},{\"./lib/\":2}],2:[function(_dereq_,module,exports){module.exports=_dereq_(\"./socket\");module.exports.parser=_dereq_(\"engine.io-parser\")},{\"./socket\":3,\"engine.io-parser\":19}],3:[function(_dereq_,module,exports){(function(global){var transports=_dereq_(\"./transports\");var Emitter=_dereq_(\"component-emitter\");var debug=_dereq_(\"debug\")(\"engine.io-client:socket\");var index=_dereq_(\"indexof\");var parser=_dereq_(\"engine.io-parser\");var parseuri=_dereq_(\"parseuri\");var parsejson=_dereq_(\"parsejson\");var parseqs=_dereq_(\"parseqs\");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&\"object\"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol==\"https\"||uri.protocol==\"wss\";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&\"https:\"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?\"443\":\"80\"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:\"localhost\");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if(\"string\"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||\"/engine.io\").replace(/\\/$/,\"\")+\"/\";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||\"t\";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||[\"polling\",\"websocket\"];this.readyState=\"\";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_(\"./transport\");Socket.transports=_dereq_(\"./transports\");Socket.parser=_dereq_(\"engine.io-parser\");Socket.prototype.createTransport=function(name){debug('creating transport \"%s\"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf(\"websocket\")!=-1){transport=\"websocket\"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit(\"error\",\"No transports available\")},0);return}else{transport=this.transports[0]}this.readyState=\"opening\";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug(\"setting transport %s\",transport.name);var self=this;if(this.transport){debug(\"clearing existing transport %s\",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on(\"drain\",function(){self.onDrain()}).on(\"packet\",function(packet){self.onPacket(packet)}).on(\"error\",function(e){self.onError(e)}).on(\"close\",function(){self.onClose(\"transport close\")})};Socket.prototype.probe=function(name){debug('probing transport \"%s\"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport \"%s\" opened',name);transport.send([{type:\"ping\",data:\"probe\"}]);transport.once(\"packet\",function(msg){if(failed)return;if(\"pong\"==msg.type&&\"probe\"==msg.data){debug('probe transport \"%s\" pong',name);self.upgrading=true;self.emit(\"upgrading\",transport);if(!transport)return;Socket.priorWebsocketSuccess=\"websocket\"==transport.name;debug('pausing current transport \"%s\"',self.transport.name);self.transport.pause(function(){if(failed)return;if(\"closed\"==self.readyState)return;debug(\"changing transport and sending upgrade packet\");cleanup();self.setTransport(transport);transport.send([{type:\"upgrade\"}]);self.emit(\"upgrade\",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport \"%s\" failed',name);var err=new Error(\"probe error\");err.transport=transport.name;self.emit(\"upgradeError\",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error(\"probe error: \"+err);error.transport=transport.name;freezeTransport();debug('probe transport \"%s\" failed because of error: %s',name,err);self.emit(\"upgradeError\",error)}function onTransportClose(){onerror(\"transport closed\")}function onclose(){onerror(\"socket closed\")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('\"%s\" works - aborting \"%s\"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener(\"open\",onTransportOpen);transport.removeListener(\"error\",onerror);transport.removeListener(\"close\",onTransportClose);self.removeListener(\"close\",onclose);self.removeListener(\"upgrading\",onupgrade)}transport.once(\"open\",onTransportOpen);transport.once(\"error\",onerror);transport.once(\"close\",onTransportClose);this.once(\"close\",onclose);this.once(\"upgrading\",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug(\"socket open\");this.readyState=\"open\";Socket.priorWebsocketSuccess=\"websocket\"==this.transport.name;this.emit(\"open\");this.flush();if(\"open\"==this.readyState&&this.upgrade&&this.transport.pause){debug(\"starting upgrade probes\");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(\"opening\"==this.readyState||\"open\"==this.readyState){debug('socket receive: type \"%s\", data \"%s\"',packet.type,packet.data);this.emit(\"packet\",packet);this.emit(\"heartbeat\");switch(packet.type){case\"open\":this.onHandshake(parsejson(packet.data));break;case\"pong\":this.setPing();this.emit(\"pong\");break;case\"error\":var err=new Error(\"server error\");err.code=packet.data;this.onError(err);break;case\"message\":this.emit(\"data\",packet.data);this.emit(\"message\",packet.data);break}}else{debug('packet received with socket readyState \"%s\"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(\"handshake\",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if(\"closed\"==this.readyState)return;this.setPing();this.removeListener(\"heartbeat\",this.onHeartbeat);this.on(\"heartbeat\",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(\"closed\"==self.readyState)return;self.onClose(\"ping timeout\")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(\"writing ping packet - expecting pong within %sms\",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket(\"ping\",function(){self.emit(\"ping\")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit(\"drain\")}else{this.flush()}};Socket.prototype.flush=function(){if(\"closed\"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug(\"flushing %d packets in socket\",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit(\"flush\")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket(\"message\",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if(\"function\"==typeof data){fn=data;data=undefined}if(\"function\"==typeof options){fn=options;options=null}if(\"closing\"==this.readyState||\"closed\"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit(\"packetCreate\",packet);this.writeBuffer.push(packet);if(fn)this.once(\"flush\",fn);this.flush()};Socket.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.readyState=\"closing\";var self=this;if(this.writeBuffer.length){this.once(\"drain\",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose(\"forced close\");debug(\"socket closing - telling transport to close\");self.transport.close()}function cleanupAndClose(){self.removeListener(\"upgrade\",cleanupAndClose);self.removeListener(\"upgradeError\",cleanupAndClose);close()}function waitForUpgrade(){self.once(\"upgrade\",cleanupAndClose);self.once(\"upgradeError\",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug(\"socket error %j\",err);Socket.priorWebsocketSuccess=false;this.emit(\"error\",err);this.onClose(\"transport error\",err)};Socket.prototype.onClose=function(reason,desc){if(\"opening\"==this.readyState||\"open\"==this.readyState||\"closing\"==this.readyState){debug('socket close with reason: \"%s\"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners(\"close\");this.transport.close();this.transport.removeAllListeners();this.readyState=\"closed\";this.id=null;this.emit(\"close\",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./transport\":4,\"./transports\":5,\"component-emitter\":15,debug:17,\"engine.io-parser\":19,indexof:23,parsejson:26,parseqs:27,parseuri:28}],4:[function(_dereq_,module,exports){var parser=_dereq_(\"engine.io-parser\");var Emitter=_dereq_(\"component-emitter\");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=\"\";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=\"TransportError\";err.description=desc;this.emit(\"error\",err);return this};Transport.prototype.open=function(){if(\"closed\"==this.readyState||\"\"==this.readyState){this.readyState=\"opening\";this.doOpen()}return this};Transport.prototype.close=function(){if(\"opening\"==this.readyState||\"open\"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(\"open\"==this.readyState){this.write(packets)}else{throw new Error(\"Transport not open\")}};Transport.prototype.onOpen=function(){this.readyState=\"open\";this.writable=true;this.emit(\"open\")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit(\"packet\",packet)};Transport.prototype.onClose=function(){this.readyState=\"closed\";this.emit(\"close\")}},{\"component-emitter\":15,\"engine.io-parser\":19}],5:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var XHR=_dereq_(\"./polling-xhr\");var JSONP=_dereq_(\"./polling-jsonp\");var websocket=_dereq_(\"./websocket\");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if(\"open\"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error(\"JSONP disabled\");return new JSONP(opts)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling-jsonp\":6,\"./polling-xhr\":7,\"./websocket\":9,\"xmlhttprequest-ssl\":10}],6:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_(\"./polling\");var inherit=_dereq_(\"component-inherit\");module.exports=JSONPPolling;var rNewline=/\\n/g;var rEscapedNewline=/\\\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener(\"beforeunload\",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement(\"script\");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError(\"jsonp poll error\",e)};var insertAt=document.getElementsByTagName(\"script\")[0];if(insertAt){insertAt.parentNode.insertBefore(script,insertAt)}else{(document.head||document.body).appendChild(script)}this.script=script;var isUAgecko=\"undefined\"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement(\"iframe\");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(\"form\");var area=document.createElement(\"textarea\");var id=this.iframeId=\"eio_iframe_\"+this.index;var iframe;form.className=\"socketio\";form.style.position=\"absolute\";form.style.top=\"-1000px\";form.style.left=\"-1000px\";form.target=id;form.method=\"POST\";form.setAttribute(\"accept-charset\",\"utf-8\");area.name=\"d\";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError(\"jsonp polling iframe removal error\",e)}}try{var html='<iframe src=\"javascript:0\" name=\"'+self.iframeId+'\">';iframe=document.createElement(html)}catch(e){iframe=document.createElement(\"iframe\");iframe.name=self.iframeId;iframe.src=\"javascript:0\"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,\"\\\\\\n\");this.area.value=data.replace(rNewline,\"\\\\n\");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==\"complete\"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-inherit\":16}],7:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var Polling=_dereq_(\"./polling\");var Emitter=_dereq_(\"component-emitter\");var inherit=_dereq_(\"component-inherit\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling-xhr\");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL=\"https:\"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!==\"string\"&&data!==undefined;var req=this.request({method:\"POST\",data:data,isBinary:isBinary});var self=this;req.on(\"success\",fn);req.on(\"error\",function(err){self.onError(\"xhr post error\",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(\"xhr poll\");var req=this.request();var self=this;req.on(\"data\",function(data){self.onData(data)});req.on(\"error\",function(err){self.onError(\"xhr poll error\",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||\"GET\";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug(\"xhr open %s: %s\",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType=\"arraybuffer\"}if(\"POST\"==this.method){try{if(this.isBinary){xhr.setRequestHeader(\"Content-type\",\"application/octet-stream\")}else{xhr.setRequestHeader(\"Content-type\",\"text/plain;charset=UTF-8\")}}catch(e){}}if(\"withCredentials\"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug(\"xhr data %s\",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(\"success\");this.cleanup()};Request.prototype.onData=function(data){this.emit(\"data\",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(\"error\",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if(\"undefined\"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader(\"Content-Type\").split(\";\")[0]}catch(e){}if(contentType===\"application/octet-stream\"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return\"undefined\"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent(\"onunload\",unloadHandler)}else if(global.addEventListener){global.addEventListener(\"beforeunload\",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./polling\":8,\"component-emitter\":15,\"component-inherit\":16,debug:17,\"xmlhttprequest-ssl\":10}],8:[function(_dereq_,module,exports){var Transport=_dereq_(\"../transport\");var parseqs=_dereq_(\"parseqs\");var parser=_dereq_(\"engine.io-parser\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:polling\");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_(\"xmlhttprequest-ssl\");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name=\"polling\";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=\"pausing\";function pause(){debug(\"paused\");self.readyState=\"paused\";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(\"we are currently polling - waiting to pause\");total++;this.once(\"pollComplete\",function(){debug(\"pre-pause polling complete\");--total||pause()})}if(!this.writable){debug(\"we are currently writing - waiting to pause\");total++;this.once(\"drain\",function(){debug(\"pre-pause writing complete\");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(\"polling\");this.polling=true;this.doPoll();this.emit(\"poll\")};Polling.prototype.onData=function(data){var self=this;debug(\"polling got data %s\",data);var callback=function(packet,index,total){if(\"opening\"==self.readyState){self.onOpen()}if(\"close\"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if(\"closed\"!=this.readyState){this.polling=false;this.emit(\"pollComplete\");if(\"open\"==this.readyState){this.poll()}else{debug('ignoring poll - transport state \"%s\"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug(\"writing close packet\");self.write([{type:\"close\"}])}if(\"open\"==this.readyState){debug(\"transport open - closing\");close()}else{debug(\"transport not open - deferring close\");this.once(\"open\",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit(\"drain\")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"https\":\"http\";var port=\"\";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&(\"https\"==schema&&this.port!=443||\"http\"==schema&&this.port!=80)){port=\":\"+this.port}if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query}},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,\"xmlhttprequest-ssl\":10,yeast:30}],9:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_(\"../transport\");var parser=_dereq_(\"engine.io-parser\");var parseqs=_dereq_(\"parseqs\");var inherit=_dereq_(\"component-inherit\");var yeast=_dereq_(\"yeast\");var debug=_dereq_(\"debug\")(\"engine.io-client:websocket\");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket;if(!WebSocket&&typeof window===\"undefined\"){try{WebSocket=_dereq_(\"ws\")}catch(e){}}module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name=\"websocket\";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType=\"buffer\"}else{this.ws.binaryType=\"arraybuffer\"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError(\"websocket error\",e)}};if(\"undefined\"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len=\"string\"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug(\"websocket closed before onclose event\")}--total||done()})})(packets[i])}function done(){self.emit(\"flush\");setTimeout(function(){self.writable=true;self.emit(\"drain\")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!==\"undefined\"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?\"wss\":\"ws\";var port=\"\";if(this.port&&(\"wss\"==schema&&this.port!=443||\"ws\"==schema&&this.port!=80)){port=\":\"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query=\"?\"+query}var ipv6=this.hostname.indexOf(\":\")!==-1;return schema+\"://\"+(ipv6?\"[\"+this.hostname+\"]\":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!(\"__initialize\"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"../transport\":4,\"component-inherit\":16,debug:17,\"engine.io-parser\":19,parseqs:27,ws:undefined,yeast:30}],10:[function(_dereq_,module,exports){var hasCORS=_dereq_(\"has-cors\");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if(\"undefined\"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if(\"undefined\"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(\"Microsoft.XMLHTTP\")}catch(e){}}}},{\"has-cors\":22}],11:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error(\"after called too many times\")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],12:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],13:[function(_dereq_,module,exports){(function(chars){\"use strict\";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64=\"\";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];\nbase64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+\"=\"}else if(len%3===1){base64=base64.substring(0,base64.length-2)+\"==\"}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]===\"=\"){bufferLength--;if(base64[base64.length-2]===\"=\"){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\")},{}],14:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob([\"hi\"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],15:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],16:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],17:[function(_dereq_,module,exports){exports=module.exports=_dereq_(\"./debug\");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=\"undefined\"!=typeof chrome&&\"undefined\"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=[\"lightseagreen\",\"forestgreen\",\"goldenrod\",\"dodgerblue\",\"darkorchid\",\"crimson\"];function useColors(){return\"WebkitAppearance\"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?\"%c\":\"\")+this.namespace+(useColors?\" %c\":\" \")+args[0]+(useColors?\"%c \":\" \")+\"+\"+exports.humanize(this.diff);if(!useColors)return args;var c=\"color: \"+this.color;args=[args[0],c,\"color: inherit\"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if(\"%%\"===match)return;index++;if(\"%c\"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return\"object\"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem(\"debug\")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{\"./debug\":18}],18:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_(\"ms\");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if(\"string\"!==typeof args[0]){args=[\"%o\"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match===\"%%\")return match;index++;var formatter=exports.formatters[format];if(\"function\"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if(\"function\"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||\"\").split(/[\\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\\*/g,\".*?\");if(namespaces[0]===\"-\"){exports.skips.push(new RegExp(\"^\"+namespaces.substr(1)+\"$\"))}else{exports.names.push(new RegExp(\"^\"+namespaces+\"$\"))}}}function disable(){exports.enable(\"\")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:25}],19:[function(_dereq_,module,exports){(function(global){var keys=_dereq_(\"./keys\");var hasBinary=_dereq_(\"has-binary\");var sliceBuffer=_dereq_(\"arraybuffer.slice\");var base64encoder=_dereq_(\"base64-arraybuffer\");var after=_dereq_(\"after\");var utf8=_dereq_(\"utf8\");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:\"error\",data:\"parser error\"};var Blob=_dereq_(\"blob\");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if(\"function\"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if(\"function\"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(\"\"+encoded)};function encodeBase64Object(packet,callback){var message=\"b\"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message=\"b\"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(\",\")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data==\"string\"||data===undefined){if(data.charAt(0)==\"b\"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType===\"blob\"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType===\"blob\"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary==\"function\"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback(\"0:\")}function setLengthHeader(message){return message.length+\":\"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(\"\"))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!=\"string\"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var packet;if(data==\"\"){return callback(err,0,1)}var length=\"\",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(\":\"!=chr){length+=chr}else{if(\"\"==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=\"\"}}if(length!=\"\"){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p===\"string\"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p===\"string\";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded===\"string\"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType===\"function\"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength=\"\";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg=\"\";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./keys\":20,after:11,\"arraybuffer.slice\":12,\"base64-arraybuffer\":13,blob:14,\"has-binary\":21,utf8:29}],20:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],21:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:24}],22:[function(_dereq_,module,exports){try{module.exports=typeof XMLHttpRequest!==\"undefined\"&&\"withCredentials\"in new XMLHttpRequest}catch(err){module.exports=false}},{}],23:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],24:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)==\"[object Array]\"}},{}],25:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if(\"string\"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=\"\"+str;if(str.length>1e4)return;var match=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||\"ms\").toLowerCase();switch(type){case\"years\":case\"year\":case\"yrs\":case\"yr\":case\"y\":return n*y;case\"days\":case\"day\":case\"d\":return n*d;case\"hours\":case\"hour\":case\"hrs\":case\"hr\":case\"h\":return n*h;case\"minutes\":case\"minute\":case\"mins\":case\"min\":case\"m\":return n*m;case\"seconds\":case\"second\":case\"secs\":case\"sec\":case\"s\":return n*s;case\"milliseconds\":case\"millisecond\":case\"msecs\":case\"msec\":case\"ms\":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+\"d\";if(ms>=h)return Math.round(ms/h)+\"h\";if(ms>=m)return Math.round(ms/m)+\"m\";if(ms>=s)return Math.round(ms/s)+\"s\";return ms+\"ms\"}function long(ms){return plural(ms,d,\"day\")||plural(ms,h,\"hour\")||plural(ms,m,\"minute\")||plural(ms,s,\"second\")||ms+\" ms\"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+\" \"+name;return Math.ceil(ms/n)+\" \"+name+\"s\"}},{}],26:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\\],:{}\\s]*$/;var rvalidescape=/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\\s*\\[)+/g;var rtrimLeft=/^\\s+/;var rtrimRight=/\\s+$/;module.exports=function parsejson(data){if(\"string\"!=typeof data||!data){return null}data=data.replace(rtrimLeft,\"\").replace(rtrimRight,\"\");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,\"@\").replace(rvalidtokens,\"]\").replace(rvalidbraces,\"\"))){return new Function(\"return \"+data)()}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],27:[function(_dereq_,module,exports){exports.encode=function(obj){var str=\"\";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=\"&\";str+=encodeURIComponent(i)+\"=\"+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split(\"&\");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split(\"=\");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],28:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;var parts=[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"];module.exports=function parseuri(str){var src=str,b=str.indexOf(\"[\"),e=str.indexOf(\"]\");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,\";\")+str.substring(e,str.length)}var m=re.exec(str||\"\"),uri={},i=14;while(i--){uri[parts[i]]=m[i]||\"\"}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,\":\");uri.authority=uri.authority.replace(\"[\",\"\").replace(\"]\",\"\").replace(/;/g,\":\");uri.ipv6uri=true}return uri}},{}],29:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports==\"object\"&&exports;var freeModule=typeof module==\"object\"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global==\"object\"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output=\"\";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error(\"Lone surrogate U+\"+codePoint.toString(16).toUpperCase()+\" is not a scalar value\")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol=\"\";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString=\"\";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error(\"Invalid byte index\")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error(\"Invalid continuation byte\")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error(\"Invalid byte index\")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error(\"Invalid continuation byte\")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error(\"Invalid UTF-8 detected\")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:\"2.0.0\",encode:utf8encode,decode:utf8decode};if(typeof define==\"function\"&&typeof define.amd==\"object\"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],30:[function(_dereq_,module,exports){\"use strict\";var alphabet=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_\".split(\"\"),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded=\"\";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+\".\"+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}],31:[function(_dereq_,module,exports){var url=_dereq_(\"./url\");var parser=_dereq_(\"socket.io-parser\");var Manager=_dereq_(\"./manager\");var debug=_dereq_(\"debug\")(\"socket.io-client\");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri==\"object\"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts[\"force new connection\"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug(\"ignoring socket cache for %s\",source);io=Manager(source,opts)}else{if(!cache[id]){debug(\"new io instance for %s\",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_(\"./manager\");exports.Socket=_dereq_(\"./socket\")},{\"./manager\":32,\"./socket\":34,\"./url\":35,debug:39,\"socket.io-parser\":47}],32:[function(_dereq_,module,exports){var eio=_dereq_(\"engine.io-client\");var Socket=_dereq_(\"./socket\");var Emitter=_dereq_(\"component-emitter\");var parser=_dereq_(\"socket.io-parser\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:manager\");var indexOf=_dereq_(\"indexof\");var Backoff=_dereq_(\"backo2\");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&\"object\"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||\"/socket.io\";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState=\"closed\";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug(\"readyState %s\",this.readyState);if(~this.readyState.indexOf(\"open\"))return this;debug(\"opening %s\",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState=\"opening\";this.skipReconnect=false;var openSub=on(socket,\"open\",function(){self.onopen();fn&&fn()});var errorSub=on(socket,\"error\",function(data){debug(\"connect_error\");self.cleanup();self.readyState=\"closed\";self.emitAll(\"connect_error\",data);if(fn){var err=new Error(\"Connection error\");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug(\"connect attempt will timeout after %d\",timeout);var timer=setTimeout(function(){debug(\"connect attempt timed out after %d\",timeout);openSub.destroy();socket.close();socket.emit(\"error\",\"timeout\");self.emitAll(\"connect_timeout\",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug(\"open\");this.cleanup();this.readyState=\"open\";this.emit(\"open\");var socket=this.engine;this.subs.push(on(socket,\"data\",bind(this,\"ondata\")));this.subs.push(on(socket,\"ping\",bind(this,\"onping\")));this.subs.push(on(socket,\"pong\",bind(this,\"onpong\")));this.subs.push(on(socket,\"error\",bind(this,\"onerror\")));this.subs.push(on(socket,\"close\",bind(this,\"onclose\")));this.subs.push(on(this.decoder,\"decoded\",bind(this,\"ondecoded\")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll(\"ping\")};Manager.prototype.onpong=function(){this.emitAll(\"pong\",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit(\"packet\",packet)};Manager.prototype.onerror=function(err){debug(\"error\",err);this.emitAll(\"error\",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on(\"connecting\",onConnecting);\nsocket.on(\"connect\",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug(\"writing packet %j\",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug(\"cleanup\");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug(\"disconnect\");this.skipReconnect=true;this.reconnecting=false;if(\"opening\"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState=\"closed\";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug(\"onclose\");this.cleanup();this.backoff.reset();this.readyState=\"closed\";this.emit(\"close\",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug(\"reconnect failed\");this.backoff.reset();this.emitAll(\"reconnect_failed\");this.reconnecting=false}else{var delay=this.backoff.duration();debug(\"will wait %dms before reconnect attempt\",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug(\"attempting reconnect\");self.emitAll(\"reconnect_attempt\",self.backoff.attempts);self.emitAll(\"reconnecting\",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug(\"reconnect attempt error\");self.reconnecting=false;self.reconnect();self.emitAll(\"reconnect_error\",err.data)}else{debug(\"reconnect success\");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll(\"reconnect\",attempt)}},{\"./on\":33,\"./socket\":34,backo2:36,\"component-bind\":37,\"component-emitter\":38,debug:39,\"engine.io-client\":1,indexof:42,\"socket.io-parser\":47}],33:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],34:[function(_dereq_,module,exports){var parser=_dereq_(\"socket.io-parser\");var Emitter=_dereq_(\"component-emitter\");var toArray=_dereq_(\"to-array\");var on=_dereq_(\"./on\");var bind=_dereq_(\"component-bind\");var debug=_dereq_(\"debug\")(\"socket.io-client:socket\");var hasBin=_dereq_(\"has-binary\");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,\"open\",bind(this,\"onopen\")),on(io,\"packet\",bind(this,\"onpacket\")),on(io,\"close\",bind(this,\"onclose\"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if(\"open\"==this.io.readyState)this.onopen();this.emit(\"connecting\");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift(\"message\");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if(\"function\"==typeof args[args.length-1]){debug(\"emitting packet with ack id %d\",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug(\"transport is open - connecting\");if(\"/\"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug(\"close (%s)\",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit(\"disconnect\",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(\"error\",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(\"emitting event %j\",args);if(null!=packet.id){debug(\"attaching ack callback to event\");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug(\"sending ack %j\",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if(\"function\"==typeof ack){debug(\"calling ack %s with %j\",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug(\"bad ack %s\",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit(\"connect\");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug(\"server disconnect (%s)\",this.nsp);this.destroy();this.onclose(\"io server disconnect\")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug(\"performing disconnect (%s)\",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose(\"io client disconnect\")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{\"./on\":33,\"component-bind\":37,\"component-emitter\":38,debug:39,\"has-binary\":41,\"socket.io-parser\":47,\"to-array\":51}],35:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_(\"parseuri\");var debug=_dereq_(\"debug\")(\"socket.io-client:url\");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+\"//\"+loc.host;if(\"string\"==typeof uri){if(\"/\"==uri.charAt(0)){if(\"/\"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\\/\\//.test(uri)){debug(\"protocol-less url %s\",uri);if(\"undefined\"!=typeof loc){uri=loc.protocol+\"//\"+uri}else{uri=\"https://\"+uri}}debug(\"parse %s\",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port=\"80\"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port=\"443\"}}obj.path=obj.path||\"/\";var ipv6=obj.host.indexOf(\":\")!==-1;var host=ipv6?\"[\"+obj.host+\"]\":obj.host;obj.id=obj.protocol+\"://\"+host+\":\"+obj.port;obj.href=obj.protocol+\"://\"+host+(loc&&loc.port==obj.port?\"\":\":\"+obj.port);return obj}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{debug:39,parseuri:45}],36:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],37:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if(\"string\"==typeof fn)fn=obj[fn];if(\"function\"!=typeof fn)throw new Error(\"bind() requires a function\");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],38:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[\"$\"+event]=this._callbacks[\"$\"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[\"$\"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[\"$\"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[\"$\"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[\"$\"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],39:[function(_dereq_,module,exports){arguments[4][17][0].apply(exports,arguments)},{\"./debug\":40,dup:17}],40:[function(_dereq_,module,exports){arguments[4][18][0].apply(exports,arguments)},{dup:18,ms:44}],41:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&\"object\"==typeof obj){if(obj.toJSON&&\"function\"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{isarray:43}],42:[function(_dereq_,module,exports){arguments[4][23][0].apply(exports,arguments)},{dup:23}],43:[function(_dereq_,module,exports){arguments[4][24][0].apply(exports,arguments)},{dup:24}],44:[function(_dereq_,module,exports){arguments[4][25][0].apply(exports,arguments)},{dup:25}],45:[function(_dereq_,module,exports){arguments[4][28][0].apply(exports,arguments)},{dup:28}],46:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_(\"isarray\");var isBuf=_dereq_(\"./is-buffer\");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if(\"object\"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&\"object\"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&\"object\"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{\"./is-buffer\":48,isarray:43}],47:[function(_dereq_,module,exports){var debug=_dereq_(\"debug\")(\"socket.io-parser\");var json=_dereq_(\"json3\");var isArray=_dereq_(\"isarray\");var Emitter=_dereq_(\"component-emitter\");var binary=_dereq_(\"./binary\");var isBuf=_dereq_(\"./is-buffer\");exports.protocol=4;exports.types=[\"CONNECT\",\"DISCONNECT\",\"EVENT\",\"BINARY_EVENT\",\"ACK\",\"BINARY_ACK\",\"ERROR\"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug(\"encoding packet %j\",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str=\"\";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+=\"-\"}if(obj.nsp&&\"/\"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=\",\";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=\",\";str+=json.stringify(obj.data)}debug(\"encoded %j as %s\",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if(\"string\"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit(\"decoded\",packet)}}else{this.emit(\"decoded\",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error(\"got binary data when not reconstructing a packet\")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit(\"decoded\",packet)}}}else{throw new Error(\"Unknown type: \"+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf=\"\";while(str.charAt(++i)!=\"-\"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!=\"-\"){throw new Error(\"Illegal attachments\")}p.attachments=Number(buf)}if(\"/\"==str.charAt(i+1)){p.nsp=\"\";while(++i){var c=str.charAt(i);if(\",\"==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp=\"/\"}var next=str.charAt(i+1);if(\"\"!==next&&Number(next)==next){p.id=\"\";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug(\"decoded %s as %j\",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:\"parser error\"}}},{\"./binary\":46,\"./is-buffer\":48,\"component-emitter\":49,debug:39,isarray:43,json3:50}],48:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],49:[function(_dereq_,module,exports){arguments[4][15][0].apply(exports,arguments)},{dup:15}],50:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define===\"function\"&&define.amd;var objectTypes={\"function\":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global==\"object\"&&global;if(freeGlobal&&(freeGlobal[\"global\"]===freeGlobal||freeGlobal[\"window\"]===freeGlobal||freeGlobal[\"self\"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root[\"Object\"]());exports||(exports=root[\"Object\"]());var Number=context[\"Number\"]||root[\"Number\"],String=context[\"String\"]||root[\"String\"],Object=context[\"Object\"]||root[\"Object\"],Date=context[\"Date\"]||root[\"Date\"],SyntaxError=context[\"SyntaxError\"]||root[\"SyntaxError\"],TypeError=context[\"TypeError\"]||root[\"TypeError\"],Math=context[\"Math\"]||root[\"Math\"],nativeJSON=context[\"JSON\"]||root[\"JSON\"];if(typeof nativeJSON==\"object\"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name==\"bug-string-char-index\"){isSupported=\"a\"[0]!=\"a\"}else if(name==\"json\"){isSupported=has(\"json-stringify\")&&has(\"json-parse\")}else{var value,serialized='{\"a\":[1,true,false,null,\"\\\\u0000\\\\b\\\\n\\\\f\\\\r\\\\t\"]}';if(name==\"json-stringify\"){var stringify=exports.stringify,stringifySupported=typeof stringify==\"function\"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)===\"0\"&&stringify(new Number)===\"0\"&&stringify(new String)=='\"\"'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)===\"1\"&&stringify([value])==\"[1]\"&&stringify([undef])==\"[null]\"&&stringify(null)==\"null\"&&stringify([undef,getClass,null])==\"[null,null,null]\"&&stringify({a:[value,true,false,null,\"\\x00\\b\\n\\f\\r\t\"]})==serialized&&stringify(null,value)===\"1\"&&stringify([1,2],null,1)==\"[\\n 1,\\n 2\\n]\"&&stringify(new Date(-864e13))=='\"-271821-04-20T00:00:00.000Z\"'&&stringify(new Date(864e13))=='\"+275760-09-13T00:00:00.000Z\"'&&stringify(new Date(-621987552e5))=='\"-000001-01-01T00:00:00.000Z\"'&&stringify(new Date(-1))=='\"1969-12-31T23:59:59.999Z\"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name==\"json-parse\"){var parse=exports.parse;if(typeof parse==\"function\"){try{if(parse(\"0\")===0&&!parse(false)){value=parse(serialized);var parseSupported=value[\"a\"].length==5&&value[\"a\"][0]===1;if(parseSupported){try{parseSupported=!parse('\"\t\"')}catch(exception){}if(parseSupported){try{parseSupported=parse(\"01\")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse(\"1.\")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has(\"json\")){var functionClass=\"[object Function]\",dateClass=\"[object Date]\",numberClass=\"[object Number]\",stringClass=\"[object String]\",arrayClass=\"[object Array]\",booleanClass=\"[object Boolean]\";var charIndexBuggy=has(\"bug-string-char-index\");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=[\"valueOf\",\"toString\",\"toLocaleString\",\"propertyIsEnumerable\",\"isPrototypeOf\",\"hasOwnProperty\",\"constructor\"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!=\"function\"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property==\"prototype\")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property==\"prototype\")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property==\"prototype\")&&isProperty.call(object,property)&&!(isConstructor=property===\"constructor\")){callback(property)}}if(isConstructor||isProperty.call(object,property=\"constructor\")){callback(property)}}}return forEach(object,callback)};if(!has(\"json-stringify\")){var Escapes={92:\"\\\\\\\\\",34:'\\\\\"',8:\"\\\\b\",12:\"\\\\f\",10:\"\\\\n\",13:\"\\\\r\",9:\"\\\\t\"};var leadingZeroes=\"000000\";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix=\"\\\\u00\";var quote=function(value){var result='\"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(\"\"):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'\"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value==\"object\"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,\"toJSON\")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?\"-\":\"+\")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+\"-\"+toPaddedString(2,month+1)+\"-\"+toPaddedString(2,date)+\"T\"+toPaddedString(2,hours)+\":\"+toPaddedString(2,minutes)+\":\"+toPaddedString(2,seconds)+\".\"+toPaddedString(3,milliseconds)+\"Z\"}else{value=null}}else if(typeof value.toJSON==\"function\"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,\"toJSON\"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return\"null\"}className=getClass.call(value);if(className==booleanClass){return\"\"+value}else if(className==numberClass){return value>-1/0&&value<1/0?\"\"+value:\"null\"}else if(className==stringClass){return quote(\"\"+value)}if(typeof value==\"object\"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?\"null\":element)}result=results.length?whitespace?\"[\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"]\":\"[\"+results.join(\",\")+\"]\":\"[]\"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+\":\"+(whitespace?\" \":\"\")+element)}});result=results.length?whitespace?\"{\\n\"+indentation+results.join(\",\\n\"+indentation)+\"\\n\"+prefix+\"}\":\"{\"+results.join(\",\")+\"}\":\"{}\"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace=\"\",width>10&&(width=10);whitespace.length<width;whitespace+=\" \");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize(\"\",(value={},value[\"\"]=source,value),callback,properties,whitespace,\"\",[])}}if(!has(\"json-parse\")){var fromCharCode=String.fromCharCode;var Unescapes={92:\"\\\\\",34:'\"',47:\"/\",98:\"\\b\",116:\"\t\",110:\"\\n\",102:\"\\f\",114:\"\\r\"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value=\"@\",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode(\"0x\"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)==\"true\"){Index+=4;return true}else if(source.slice(Index,Index+5)==\"false\"){Index+=5;return false}else if(source.slice(Index,Index+4)==\"null\"){Index+=4;return null}abort()}}return\"$\"};var get=function(value){var results,hasMembers;if(value==\"$\"){abort()}if(typeof value==\"string\"){if((charIndexBuggy?value.charAt(0):value[0])==\"@\"){return value.slice(1)}if(value==\"[\"){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"]\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"]\"){abort()}}else{abort()}}if(value==\",\"){abort()}results.push(get(value))}return results}else if(value==\"{\"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value==\"}\"){break}if(hasMembers){if(value==\",\"){value=lex();if(value==\"}\"){abort()}}else{abort()}}if(value==\",\"||typeof value!=\"string\"||(charIndexBuggy?value.charAt(0):value[0])!=\"@\"||lex()!=\":\"){abort()}results[value.slice(1)]=get(lex())\n}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value==\"object\"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=\"\"+source;result=get(lex());if(lex()!=\"$\"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[\"\"]=result,value),\"\",callback):result}}}exports[\"runInContext\"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root[\"JSON3\"],isRestored=false;var JSON3=runInContext(root,root[\"JSON3\"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root[\"JSON3\"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!==\"undefined\"?self:typeof window!==\"undefined\"?window:typeof global!==\"undefined\"?global:{})},{}],51:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[31])(31)});\n\n    \n      ;var weight = document.getElementById('weight');\n      var socket = io('http://{{ip}}:4001');\n      socket.on('getWeight', function(msg) {\n        weight.innerHTML = msg;\n    \n      }); \n    }, 1000);\n    </script>\n\n  </body>\n</html>\n",
        "x": 490,
        "y": 940,
        "wires": [
            [
                "e5efac3b.ba55f"
            ]
        ]
    },
    {
        "id": "e5efac3b.ba55f",
        "type": "http response",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 630,
        "y": 940,
        "wires": []
    },
    {
        "id": "e7ed77dd.d6f418",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "set ip",
        "func": "msg.ip = global.get('ip');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 940,
        "wires": [
            [
                "ecddaf8b.b3695"
            ]
        ]
    },
    {
        "id": "e5569d9b.39886",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "Вес по осям",
        "func": "msg.payload = \"\"+msg.payload+\"<br/>\"+msg.weight1+\"<br/>\"+msg.weight2+\"\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 170,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "31a56c38.5d4504",
        "type": "json",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 1144.285888671875,
        "y": 311.4286193847656,
        "wires": [
            [
                "832fdab0.355308"
            ]
        ]
    },
    {
        "id": "832fdab0.355308",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "GD event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1287.1429443359375,
        "y": 312.8572082519531,
        "wires": []
    },
    {
        "id": "73ec9f83.58f45",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "parser",
        "func": "var str = {\n    payload: msg.payload,\n    event_id: msg.event_id,\n    metadata: msg.metadata,\n    driverWeight: msg.driverWeight,\n    description: msg.description,\n    url: msg.url,\n    main_host: msg.main_host,\n    event_url: msg.event_url,\n    statusCode: msg.statusCode,\n    responseUrl: msg.responseUrl\n    \n};\nmsg.payload = JSON.stringify(str);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1330,
        "y": 400,
        "wires": [
            [
                "263fcbae.d3ae24"
            ]
        ]
    },
    {
        "id": "263fcbae.d3ae24",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "GD response event",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1500,
        "y": 400,
        "wires": []
    },
    {
        "id": "296a72fa.48adee",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "GD device config",
        "active": false,
        "console": "true",
        "complete": "payload",
        "x": 1050,
        "y": 180,
        "wires": []
    },
    {
        "id": "bec83763.7c4ae8",
        "type": "json",
        "z": "825de2d0.1bfa6",
        "name": "",
        "x": 890,
        "y": 180,
        "wires": [
            [
                "296a72fa.48adee"
            ]
        ]
    },
    {
        "id": "9cc85417.37ec88",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "events payload",
        "func": "// var event_id = msg.event_id;\n// var scale_id = global.get('scale_id_jd_1');\n// var snapshot_events = flow.get('snapshot_events');\n// var snapshot = false;\n\n// if (snapshot_events.indexOf(event_id)>=0){\n//     snapshot = true;\n// }\n\n// msg.payload = {\n//     'event':{\n//         'id':msg.event_id\n//     },\n//     'devices':[{'id':scale_id}],\n//     'data':msg.metadata,\n//     'description':msg.description\n// };\n\n// msg.headers = {\n//     \"content-type\":\"application/json\"\n// };\n\n// msg.url = flow.get('main_host')+flow.get('event_url');\n// msg.main_host = flow.get('main_host');\n// msg.event_url = flow.get('event_url');\n// msg.snapshot = snapshot;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 913.9046630859375,
        "y": 337.2618408203125,
        "wires": [
            []
        ]
    },
    {
        "id": "e402ff8c.2118b",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "device config",
        "func": "var device_config = JSON.parse(msg.payload);\n\nflow.set('scale_id',device_config.scale_id);\nflow.set('event_move_in_id',device_config.event_move_in_id);\nflow.set('event_move_in_minus_id',device_config.event_move_in_minus_id);\nflow.set('event_move_out_id',device_config.event_move_out_id);\nflow.set('event_max_weight_id',device_config.event_max_weight_id);\nflow.set('event_off_id',device_config.event_off_id);\nflow.set('event_on_id', device_config.event_on_id);\nflow.set('event_max_duration',device_config.event_max_duration);\nflow.set('event_fake_traffic',device_config.event_fake_traffic);\nflow.set('event_driver_in', device_config.event_driver_in);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('maxWeight',device_config.maxWeight);\nflow.set('minWeight',device_config.minWeight);\nflow.set('maxDuration',device_config.maxDuration);\nflow.set('checkHealthTimeout',device_config.checkHealthTimeout);\nflow.set('event_get_weight_acc',device_config.event_get_weight_acc);\nflow.set('event_min_weight',device_config.event_min_weight);\nflow.set('minTriggerWeight',device_config.minTriggerWeight);\nflow.set('snapshot_url',device_config.snapshot_url);\nflow.set('snapshot_events',device_config.snapshot_events);\nflow.set('driverWeight',device_config.driverWeight)\n\nmsg.payload = {\n\tscale_id: flow.get('scale_id'),\n\tevent_move_in_id: flow.get('event_move_in_id'),\n\tevent_move_in_minus_id: flow.get('event_move_in_minus_id'),\n\tevent_move_out_id: flow.get('event_move_out_id'),\n\tevent_max_weight_id: flow.get('event_max_weight_id'),\n\tevent_off_id: flow.get('event_off_id'),\n\tevent_on_id: flow.get('event_on_id'),\n\tevent_max_duration: flow.get('event_max_duration'),\n\tevent_fake_traffic: flow.get('event_fake_traffic'),\n\tevent_driver_in: flow.get('event_driver_in'),\n\tmain_host: flow.get('main_host'),\n\tevent_url: flow.get('event_url'),\n\tstate_url: flow.get('state_url'),\n\tmaxWeight: flow.get('maxWeight'),\n\tminWeight: flow.get('minWeight'),\n\tmaxDuration: flow.get('maxDuration'),\n\tcheckHealthTimeout: flow.get('checkHealthTimeout'),\n\tevent_get_weight_acc: flow.get('event_get_weight_acc'),\n\tevent_min_weight: flow.get('event_min_weight'),\n\tminTriggerWeight: flow.get('minTriggerWeight'),\n\tsnapshot_url: flow.get('snapshot_url'),\n\tsnapshot_events: flow.get('snapshot_events'),\n\tdriverWeight: flow.get('driverWeight')\n};\n\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 750,
        "y": 180,
        "wires": [
            [
                "bec83763.7c4ae8"
            ]
        ]
    },
    {
        "id": "8cbc8a3d.300378",
        "type": "delay",
        "z": "825de2d0.1bfa6",
        "name": "",
        "pauseType": "delay",
        "timeout": "2",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "outputs": 1,
        "x": 340,
        "y": 180,
        "wires": [
            [
                "418988d9.42f538"
            ]
        ]
    },
    {
        "id": "4e2795c2.3f694c",
        "type": "trigger",
        "z": "825de2d0.1bfa6",
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
        "y": 220,
        "wires": [
            [
                "cac8938e.c0ead"
            ]
        ]
    },
    {
        "id": "76ddfe93.3fb09",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "",
        "active": false,
        "console": "false",
        "complete": "false",
        "x": 400,
        "y": 680,
        "wires": []
    },
    {
        "id": "e48a74b3.07d1d8",
        "type": "debug",
        "z": "825de2d0.1bfa6",
        "name": "stable",
        "active": false,
        "console": "false",
        "complete": "stable",
        "x": 170,
        "y": 460,
        "wires": []
    },
    {
        "id": "d54d7089.de901",
        "type": "comment",
        "z": "825de2d0.1bfa6",
        "name": "Зробити фото",
        "info": "",
        "x": 1080,
        "y": 400,
        "wires": []
    },
    {
        "id": "9a2a54fb.f1a858",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "get id sesion",
        "method": "GET",
        "ret": "obj",
        "url": "https://10.107.9.100:8080/login?username=Admin&password=Admin@RHN_Trassir",
        "tls": "61b811c6.8eeca",
        "x": 1430,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "dbba7729.df2f18",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "sid",
        "func": "//let sid = msg.payload.sid;\nlet sid =global.get('sid');\nmsg.sid = sid;\n\ndelete msg.url;\ndelete msg.headers;\ndelete msg.statusCode;\ndelete msg.responseUrl;\ndelete msg.req;\ndelete msg.res;\n\n\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1570,
        "y": 480,
        "wires": [
            [
                "95bd33ed.0e54b",
                "ea652e7c.e63ff",
                "57c18c50.db9a94"
            ]
        ]
    },
    {
        "id": "f4a21b6a.6f8e68",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "screenshot",
        "func": "let guidChannel = \"lNHlkOHv\";// guid channal\n\nlet url = `https://10.107.9.100:8080/screenshot/${guidChannel}?sid=`;\nlet sid = msg.sid;\n\nmsg.url = url + sid;\ndelete msg.payload;\ndelete msg.statusCode;\ndelete msg.headers;\ndelete msg.sid;\n\n\nmsg.res = flow.get('res');\nmsg.req = flow.get('req');\nreturn msg;\n/*\nlet guidChannel = \"ezoJU3It\";   //TruckScales-R2A08-V6\nlet guidChannel = \"vav9ADtx\"; //TruckScales-R2A07-V5\nlet guidChannel = \"DYL0mD4k\"; //TruckScales-R2A09-V7\n\n\nlet guidChannel = \"oVG1YLM8\"; //TruckScales-R2A05-V3\nlet guidChannel = \"u7c7YCVj\"; //TruckScales-R2A04-V2\n//let guidChannel = \"R2e0sWLr\"; //TruckScales-R2A03-V1\n*/",
        "outputs": 1,
        "noerr": 0,
        "x": 1910,
        "y": 480,
        "wires": [
            [
                "7db6e8a5.df6fb8"
            ]
        ]
    },
    {
        "id": "7db6e8a5.df6fb8",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "61b811c6.8eeca",
        "x": 2110,
        "y": 480,
        "wires": [
            [
                "e0515ff5.cdca4"
            ]
        ]
    },
    {
        "id": "6730b7dc.e0d048",
        "type": "switch",
        "z": "825de2d0.1bfa6",
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
        "x": 1080,
        "y": 440,
        "wires": [
            [
                "23a90b3c.f84694"
            ]
        ]
    },
    {
        "id": "e0515ff5.cdca4",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id_jd_1');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2290,
        "y": 480,
        "wires": [
            [
                "2457a547.47c61a"
            ]
        ]
    },
    {
        "id": "2457a547.47c61a",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "2b863bae.d65624",
        "x": 2500,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "67510147.47e2f",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "screenshot",
        "func": "let guidChannel = \"M3lHmE45\";// guid channal\n\nlet url = `https://10.107.9.100:8080/screenshot/${guidChannel}?sid=`;\nlet sid = msg.sid;\n\nmsg.url = url + sid;\ndelete msg.payload;\ndelete msg.statusCode;\ndelete msg.headers;\ndelete msg.sid;\n\n\nmsg.res = flow.get('res');\nmsg.req = flow.get('req');\nreturn msg;\n/*\nlet guidChannel = \"ezoJU3It\";   //TruckScales-R2A08-V6\nlet guidChannel = \"vav9ADtx\"; //TruckScales-R2A07-V5\nlet guidChannel = \"DYL0mD4k\"; //TruckScales-R2A09-V7\n\n\nlet guidChannel = \"oVG1YLM8\"; //TruckScales-R2A05-V3\nlet guidChannel = \"u7c7YCVj\"; //TruckScales-R2A04-V2\n//let guidChannel = \"R2e0sWLr\"; //TruckScales-R2A03-V1\n*/",
        "outputs": 1,
        "noerr": 0,
        "x": 1910,
        "y": 520,
        "wires": [
            [
                "a09d17f9.b64238"
            ]
        ]
    },
    {
        "id": "5ccd5440.3ad5ec",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "screenshot",
        "func": "let guidChannel = \"DDO0K3x4\";// guid channal\n\nlet url = `https://10.107.9.100:8080/screenshot/${guidChannel}?sid=`;\nlet sid = msg.sid;\n\nmsg.url = url + sid;\ndelete msg.payload;\ndelete msg.statusCode;\ndelete msg.headers;\ndelete msg.sid;\n\n\nmsg.res = flow.get('res');\nmsg.req = flow.get('req');\nreturn msg;\n/*\nlet guidChannel = \"ezoJU3It\";   //TruckScales-R2A08-V6\nlet guidChannel = \"vav9ADtx\"; //TruckScales-R2A07-V5\nlet guidChannel = \"DYL0mD4k\"; //TruckScales-R2A09-V7\n\n\nlet guidChannel = \"oVG1YLM8\"; //TruckScales-R2A05-V3\nlet guidChannel = \"u7c7YCVj\"; //TruckScales-R2A04-V2\n//let guidChannel = \"R2e0sWLr\"; //TruckScales-R2A03-V1\n*/",
        "outputs": 1,
        "noerr": 0,
        "x": 1910,
        "y": 560,
        "wires": [
            [
                "f25fa5eb.d860d8"
            ]
        ]
    },
    {
        "id": "fb0277.cd9a9d88",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "delete",
        "func": "\ndelete msg.url;\ndelete msg.headers;\ndelete msg.statusCode;\ndelete msg.responseUrl;\ndelete msg.req;\ndelete msg.res;\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1290,
        "y": 480,
        "wires": [
            [
                "dbba7729.df2f18"
            ]
        ]
    },
    {
        "id": "a09d17f9.b64238",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "61b811c6.8eeca",
        "x": 2110,
        "y": 520,
        "wires": [
            [
                "38f36731.f151d8"
            ]
        ]
    },
    {
        "id": "38f36731.f151d8",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id_jd_1');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2290,
        "y": 520,
        "wires": [
            [
                "3f49a14f.0ff1ce"
            ]
        ]
    },
    {
        "id": "3f49a14f.0ff1ce",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "2b863bae.d65624",
        "x": 2500,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "f25fa5eb.d860d8",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "url": "",
        "tls": "61b811c6.8eeca",
        "x": 2110,
        "y": 560,
        "wires": [
            [
                "225f2fdf.703c6"
            ]
        ]
    },
    {
        "id": "225f2fdf.703c6",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "snapshot payload",
        "func": "var event_id = msg.event_id;\nvar scale_id = global.get('scale_id_jd_1');\nvar tbase64   = msg.payload.toString('base64');\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'device':{\n        'id':scale_id\n        \n    },\n    'snapshot':tbase64,\n    'ext':'jpeg'\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('snapshot_url');\nmsg.main_host = flow.get('main_host');\nmsg.snapshot_url = flow.get('snapshot_url');\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2290,
        "y": 560,
        "wires": [
            [
                "41b02524.1fde0c"
            ]
        ]
    },
    {
        "id": "41b02524.1fde0c",
        "type": "http request",
        "z": "825de2d0.1bfa6",
        "name": "send a snapshot",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "2b863bae.d65624",
        "x": 2500,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "95bd33ed.0e54b",
        "type": "delay",
        "z": "825de2d0.1bfa6",
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
        "outputs": 1,
        "x": 1720,
        "y": 480,
        "wires": [
            [
                "f4a21b6a.6f8e68"
            ]
        ]
    },
    {
        "id": "ea652e7c.e63ff",
        "type": "delay",
        "z": "825de2d0.1bfa6",
        "name": "",
        "pauseType": "delay",
        "timeout": "4",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "outputs": 1,
        "x": 1720,
        "y": 520,
        "wires": [
            [
                "67510147.47e2f"
            ]
        ]
    },
    {
        "id": "57c18c50.db9a94",
        "type": "delay",
        "z": "825de2d0.1bfa6",
        "name": "",
        "pauseType": "delay",
        "timeout": "7",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "outputs": 1,
        "x": 1720,
        "y": 560,
        "wires": [
            [
                "5ccd5440.3ad5ec"
            ]
        ]
    },
    {
        "id": "23a90b3c.f84694",
        "type": "delay",
        "z": "825de2d0.1bfa6",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "12",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "outputs": 1,
        "x": 1080,
        "y": 480,
        "wires": [
            [
                "fb0277.cd9a9d88"
            ]
        ]
    },
    {
        "id": "9e956bc2.39da08",
        "type": "function",
        "z": "825de2d0.1bfa6",
        "name": "",
        "func": "var weight = msg.payload;\n\nmsg.payload = {\n    info: weight,\n    date: new Date(),\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 660,
        "wires": [
            [
                "3bde89c7.4544f6"
            ]
        ]
    },
    {
        "id": "3bde89c7.4544f6",
        "type": "file",
        "z": "825de2d0.1bfa6",
        "name": "",
        "filename": "/distr/weight_log/log_jd_1_1c_GET_weight.txt",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "false",
        "x": 1120,
        "y": 660,
        "wires": [
            []
        ]
    }
]
