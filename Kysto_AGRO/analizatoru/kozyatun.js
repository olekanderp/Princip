[{"id":"eba66637.9e2b48","type":"tab","label":"Infratek"},{"id":"f730b37e.3883d8","type":"tab","label":"processing_sñelya"},{"id":"2b9fb67b.fe5d5a","type":"serial-port","z":"","serialport":"/dev/ttyACM0","serialbaud":"115200","databits":"8","parity":"none","stopbits":"1","newline":"\\r","bin":"false","out":"char","addchar":false},{"id":"5f9a2a12.4f641c","type":"Firebirddatabase","z":"","host":"192.168.104.26","port":"3050","db":"kazthermo"},{"id":"b5ab11e.d31cef","type":"tcp in","z":"eba66637.9e2b48","name":"","server":"server","host":"","port":"4003","datamode":"stream","datatype":"utf8","newline":"","topic":"","base64":false,"x":80,"y":60,"wires":[["7a06c70b.5f93c8"]]},{"id":"7a06c70b.5f93c8","type":"function","z":"eba66637.9e2b48","name":"set last Analys","func":"flow.set('lastAnalys',msg.payload);\nflow.set('barcode',\"\");\nglobal.set('device_id','4b437ca6-971b-dc99-bc30-c2bc1f019000');\nreturn msg;","outputs":1,"noerr":0,"x":260,"y":60,"wires":[["cecf782e.2573e8"]]},{"id":"704908f5.8f7e28","type":"http in","z":"eba66637.9e2b48","name":"","url":"/getQuality","method":"get","swaggerDoc":"","x":140,"y":120,"wires":[["35ece155.49966e"]]},{"id":"727a08a.58ecef8","type":"http response","z":"eba66637.9e2b48","name":"","x":630,"y":120,"wires":[]},{"id":"35ece155.49966e","type":"function","z":"eba66637.9e2b48","name":"create response","func":"var load = flow.get('load');\nif (load){\n    msg.payload = flow.get('parseQA');    \n    msg.load = true;\n}else{\n    msg.payload = {};\n    msg.load = false;\n}\nmsg.payload.barcode = flow.get('barcode');\nflow.set(\"load\",false);\n\nreturn msg;","outputs":1,"noerr":0,"x":420,"y":120,"wires":[["727a08a.58ecef8","59c89b64.a87c5c"]]},{"id":"cecf782e.2573e8","type":"function","z":"eba66637.9e2b48","name":"parse quality","func":"var result = {\n    localdate:new Date()\n};\n\nvar sdata = msg.payload;\nvar arr_sdata = sdata.split('\\n');\n\nresult.length = arr_sdata.length;\n\n//Ambient Temperature\nvar ambietTemperature = arr_sdata[7];\nvar arr_ambietTemperature = ambietTemperature.split(\":\");\nresult.ambietTemperature = arr_ambietTemperature[1];\n\n//Analysis Counter\nvar analysisCounter = arr_sdata[8];\nvar arr_analysisCounter = analysisCounter.split(\":\");\nresult.analysisCounter = arr_analysisCounter[1];\n\n//Sub sample\nvar subSample = arr_sdata[11];\nvar arr_subSample = subSample.split(\":\");\nvar arr_subSample_1 = arr_subSample[0].split(\"     \");\n\nresult.subsample = {\n   id : arr_subSample[0].replace(\"NrOFSubSamples\",\"\"),\n   NrOFSubSamples : arr_subSample[1]\n}\n\n//Sample hash\nvar sampleHash = arr_sdata[13];\nresult.sampleHash = sampleHash;\n\n//read quailities \nvar startQ  = 14;\nvar qLength = 7;\nvar endStr  = \"#\";\n\nvar qualities = [];\n\nfor( var i = startQ; i <= arr_sdata.length-qLength; ){\n    \n    var q = {\n        id:arr_sdata[i],\n        value:arr_sdata[i+1].split(String.fromCharCode(20)),\n        minmax:arr_sdata[i+4].split(String.fromCharCode(20))\n    }\n    qualities.push(q);   \n    i = i+qLength;\n    \n}\n\nresult.qualities = qualities;\nresult.datahash  = JSON.stringify(result);\n// msg.payload = arr_sdata;\nmsg.payload = result;\nflow.set('parseQA',result);\n\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":60,"wires":[["563a08de.5db16"]]},{"id":"906c5bb3.8a91d8","type":"serial in","z":"eba66637.9e2b48","name":"","serial":"2b9fb67b.fe5d5a","x":110,"y":200,"wires":[["941c9e11.1b9a4"]]},{"id":"bd590e4c.09e88","type":"inject","z":"eba66637.9e2b48","name":"","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":true,"x":90,"y":280,"wires":[["25f0caf5.e6adb6"]]},{"id":"25f0caf5.e6adb6","type":"function","z":"eba66637.9e2b48","name":"init config","func":"flow.set('load',false);\nreturn msg;","outputs":1,"noerr":0,"x":240,"y":280,"wires":[[]]},{"id":"941c9e11.1b9a4","type":"function","z":"eba66637.9e2b48","name":"read barcode","func":"flow.set(\"barcode\",msg.payload.replace(\"\\r\",\"\"));\nflow.set('load',true);\nmsg.payload = {\n    \"barcode\":msg.payload.replace(\"\\r\",\"\")\n}\nreturn msg;","outputs":1,"noerr":0,"x":310,"y":200,"wires":[["927895d2.9da908"]]},{"id":"254dd694.f0b9d2","type":"link in","z":"f730b37e.3883d8","name":"quality","links":["563a08de.5db16"],"x":35,"y":300,"wires":[["7c7a33a1.9c4744"]]},{"id":"8db89d12.85e54","type":"http request","z":"f730b37e.3883d8","name":"EVENTS","method":"POST","ret":"txt","url":"","tls":"","x":920,"y":300,"wires":[[]]},{"id":"f8cc0bc2.a0f23","type":"function","z":"f730b37e.3883d8","name":"events payload","func":"var event_id = msg.event_id;\nvar device_id = global.get('device_id');\n\n\nmsg.payload = {\n    'event':{\n        'id':msg.event_id\n    },\n    'devices':[{'id':device_id}],\n    'data':msg.metadata,\n    'description':msg.description\n}\n\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\n\nmsg.url = flow.get('main_host')+flow.get('event_url');\nmsg.main_host = flow.get('main_host');\nmsg.event_url = flow.get('event_url');\n\nreturn msg;","outputs":1,"noerr":0,"x":760,"y":300,"wires":[["8db89d12.85e54"]]},{"id":"2a1d4b65.e2a7ac","type":"inject","z":"f730b37e.3883d8","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":80,"y":460,"wires":[["8bcad152.a03028"]]},{"id":"8bcad152.a03028","type":"function","z":"f730b37e.3883d8","name":"check scale health","func":"var lastcheckHealth = flow.get('checkHealth');\nvar checkHealth = null;\nvar lasttimedata = flow.get('lasttimedata');\n\nvar currenttimedata = new Date();\n\nif ((currenttimedata - lasttimedata) > 3000){\n    checkHealth = false;\n} else {\n    checkHealth = true;\n}\n\nflow.set(\"checkHealth\",checkHealth);\n\nif (lastcheckHealth != checkHealth){\n    msg.checkHealth = checkHealth;\n}else{\n    msg.checkHealth = null;\n}\nmsg.payload = checkHealth;\n\nreturn msg;","outputs":1,"noerr":0,"x":270,"y":460,"wires":[["879db02d.bed4e"]]},{"id":"8b34fc24.5e7db8","type":"function","z":"f730b37e.3883d8","name":"main config","func":"flow.set('checkHealth',null);\n\nreturn msg;\n","outputs":1,"noerr":0,"x":370,"y":240,"wires":[[]]},{"id":"548561a.840daa","type":"inject","z":"f730b37e.3883d8","name":"","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":true,"x":90,"y":220,"wires":[["d1d9bc1e.e8cf","8b34fc24.5e7db8"]]},{"id":"878c97f3.72cba","type":"http request","z":"f730b37e.3883d8","name":"STATE","method":"POST","ret":"txt","url":"","tls":"","x":610,"y":460,"wires":[["f7c241e3.8c629"]]},{"id":"879db02d.bed4e","type":"function","z":"f730b37e.3883d8","name":"device state","func":"msg.payload = {\n    \"state\":msg.payload\n}\nmsg.headers = {\n    \"content-type\":\"application/json\"\n}\nmsg.url = flow.get('main_host')+flow.get('state_url')+\"?id=\"+global.get(\"scale_id\");\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":460,"wires":[["878c97f3.72cba"]]},{"id":"f6c6e631.0fba5","type":"function","z":"f730b37e.3883d8","name":"device config","func":"var device_config = JSON.parse(msg.payload);\n\nflow.set('event_make_quality_id',device_config.event_make_quality_id);\nflow.set('event_read_barcode_id',device_config.event_read_barcode_id);\nflow.set('event_send_to_accsystem_id',device_config.event_send_to_accsystem_id);\nflow.set('event_no_conditional',device_config.event_no_conditional);\nflow.set('main_host',device_config.main_host);\nflow.set('event_url',device_config.event_url);\nflow.set('state_url',device_config.state_url);\nflow.set('snapshot_url',device_config.snapshot_url);\n\nreturn msg;\n","outputs":1,"noerr":0,"x":570,"y":200,"wires":[["63d782ca.068484"]]},{"id":"fb4e0226.444dc8","type":"http in","z":"f730b37e.3883d8","name":"","url":"/firmware","method":"post","swaggerDoc":"","x":140,"y":160,"wires":[["e2bc4b97.afdcd"]]},{"id":"e2bc4b97.afdcd","type":"file","z":"f730b37e.3883d8","name":"deivce_config","filename":"deivce_config.json","appendNewline":true,"createDir":false,"overwriteFile":"true","x":380,"y":160,"wires":[]},{"id":"d1d9bc1e.e8cf","type":"file in","z":"f730b37e.3883d8","name":"deivce_config","filename":"deivce_config.json","format":"utf8","x":380,"y":200,"wires":[["f6c6e631.0fba5"]]},{"id":"236108b4.c239c8","type":"http in","z":"f730b37e.3883d8","name":"","url":"/serial","method":"get","swaggerDoc":"","x":120,"y":40,"wires":[["225f09bf.a5eea6"]]},{"id":"225f09bf.a5eea6","type":"exec","z":"f730b37e.3883d8","command":"cat /proc/cpuinfo","addpay":true,"append":"| grep Serial","useSpawn":"","timer":"5","name":"","x":350,"y":40,"wires":[["171d13f5.df14dc","c8d4564d.f574b8"],[],[]]},{"id":"171d13f5.df14dc","type":"http response","z":"f730b37e.3883d8","name":"","x":550,"y":20,"wires":[]},{"id":"c8d4564d.f574b8","type":"function","z":"f730b37e.3883d8","name":"","func":"msg.payload = msg.payload.split(':')[1].replace('\\n','').replace(' ','');\nreturn msg;","outputs":1,"noerr":0,"x":540,"y":100,"wires":[["a773b1db.70f7f"]]},{"id":"a773b1db.70f7f","type":"debug","z":"f730b37e.3883d8","name":"","active":false,"console":"false","complete":"false","x":680,"y":100,"wires":[]},{"id":"86dcd94e.9fbeb","type":"inject","z":"f730b37e.3883d8","name":"DEMO","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":true,"x":90,"y":100,"wires":[["1109562a.187722"]]},{"id":"1109562a.187722","type":"function","z":"f730b37e.3883d8","name":"DEMO Data","func":"var device_config = {\n    'event_make_quality_id':'8B9482814EDB2FC9E055000000000001',\n    'event_read_barcode_id':'8B9482814EDC2FC9E055000000000001',\n    'event_send_to_accsystem_id':'8B9482814EDD2FC9E055000000000001',\n    'event_no_conditional':'8C4D78A0466C7B36E055000000000001',\n    'main_host':'http://skelya.prncp.org/ords/ettn',\n    'event_url':'/iot_cli/events/log',\n    'state_url':'/iot_cli/device',\n    'snapshot_url':'/iot_cli/events/snapshot'\n}\nmsg.payload = device_config;\n// flow.set('scale_id','80096CB0EFD83B63E0533300000A4334');\n// flow.set('event_move_in_id','80096D9ABE7F68F3E0533300000A6C0D');\n// flow.set('event_move_out_id','80096D9ABE8068F3E0533300000A6C0D');\n// flow.set('event_max_weight_id','85A255F950F9BEF4E0533300000AC45D');\n// flow.set('event_off_id','85A2CC4570292DD1E0533300000A0C94');\n// flow.set('event_on_id', '85A2CC45702A2DD1E0533300000A0C94');\n// flow.set('event_max_duration','8642EE858DE89BAAE0533300000AFCC7');\n// flow.set('main_host','http://prod.apex.rest/ords/ettn');\n// flow.set('event_url','/iot_cli/events/log');\n// flow.set('state_url','/v1/device');\n// flow.set('maxWeight',40000);\n// flow.set('maxDuration',20000);\n// flow.set('checkHealthTimeout',3000);\nreturn msg;","outputs":1,"noerr":0,"x":230,"y":100,"wires":[["e2bc4b97.afdcd"]]},{"id":"1913d21d.e5e70e","type":"function","z":"f730b37e.3883d8","name":"send quality","func":"msg.event_id = flow.get('event_make_quality_id');\nmsg.description = 'Îòðèìàëè ÿê³ñòü ³ç àíàë³çàòîðó. Íîìåð àíàë³çó: ' + msg.payload.analysisCounter+\". Êàë³áðîâêà \"+msg.payload.subsample_id;\nmsg.metadata = msg.payload;\nreturn msg;","outputs":1,"noerr":0,"x":350,"y":300,"wires":[["f8cc0bc2.a0f23"]]},{"id":"f7c241e3.8c629","type":"debug","z":"f730b37e.3883d8","name":"","active":false,"console":"false","complete":"false","x":750,"y":460,"wires":[]},{"id":"63d782ca.068484","type":"debug","z":"f730b37e.3883d8","name":"","active":false,"console":"false","complete":"payload","x":750,"y":200,"wires":[]},{"id":"9ca4ae0b.efa638","type":"link in","z":"f730b37e.3883d8","name":"barcode","links":["927895d2.9da908"],"x":35,"y":340,"wires":[["d99191a6.fc339"]]},{"id":"d99191a6.fc339","type":"function","z":"f730b37e.3883d8","name":"read barcode","func":"msg.event_id = flow.get('event_read_barcode_id');\nmsg.description = 'Ç÷èòóâàííÿ øòðèõ-êîäó: ' + msg.payload.barcode;\nmsg.metadata = msg.payload;\n\nreturn msg;","outputs":1,"noerr":0,"x":150,"y":340,"wires":[["f8cc0bc2.a0f23"]]},{"id":"ca04a25.ff58ae","type":"function","z":"f730b37e.3883d8","name":"send to 1c","func":"msg.event_id = flow.get('event_send_to_accsystem_id');\nmsg.description = 'Îòðèìàííÿ àíàë³çó â 1Ñ: ' + msg.payload.barcode;\nmsg.metadata = {\n    'barcode':msg.payload.barcode\n}\nreturn msg;","outputs":1,"noerr":0,"x":150,"y":380,"wires":[["f8cc0bc2.a0f23"]]},{"id":"7f30c975.ec2a48","type":"link in","z":"f730b37e.3883d8","name":"1c","links":["5a1f3d76.09eedc"],"x":35,"y":380,"wires":[["ca04a25.ff58ae"]]},{"id":"563a08de.5db16","type":"link out","z":"eba66637.9e2b48","name":"get quality throw tcp","links":["254dd694.f0b9d2"],"x":775,"y":60,"wires":[]},{"id":"5a1f3d76.09eedc","type":"link out","z":"eba66637.9e2b48","name":"1c request","links":["7f30c975.ec2a48"],"x":735,"y":160,"wires":[]},{"id":"927895d2.9da908","type":"link out","z":"eba66637.9e2b48","name":"read barcode","links":["9ca4ae0b.efa638"],"x":435,"y":200,"wires":[]},{"id":"44d8b70a.df4748","type":"switch","z":"f730b37e.3883d8","name":"","property":"isNotConditional","propertyType":"msg","rules":[{"t":"true"}],"checkall":"true","outputs":1,"x":410,"y":400,"wires":[["1b6c5fb1.128488"]]},{"id":"1b6c5fb1.128488","type":"function","z":"f730b37e.3883d8","name":"send quality","func":"msg.event_id = flow.get('event_no_conditional');\nmsg.description = 'Íåêîäèíö³éíÿ ÿê³ñòü. Íîìåð àíàë³çó ' + msg.payload.analysisCounter;\n\nvar payload = {};\nfor (var i = 0; i < msg.notcondition.length; i++){\n    payload = msg.notcondition[i];  \n}\nmsg.metadata = payload;\nreturn msg;","outputs":1,"noerr":0,"x":550,"y":400,"wires":[["f8cc0bc2.a0f23","8328b995.18bd9"]]},{"id":"8328b995.18bd9","type":"debug","z":"f730b37e.3883d8","name":"","active":false,"console":"false","complete":"true","x":760,"y":400,"wires":[]},{"id":"7c7a33a1.9c4744","type":"function","z":"f730b37e.3883d8","name":"parse result","func":"var p = msg.payload;\n\nvar result = {\n    \"ambietTemperature\":p.ambietTemperature,\n    \"analysisCounter\":p.analysisCounter,\n    \"subsample_id\":p.subsample.id,\n    \"subsample_NrOFSubSamples\":p.subsample.NrOFSubSamples,\n    \"sampleHash\":p.sampleHash\n};\nvar notcondition = [];\nvar isNotConditional = false;\n\nfor (var i = 0; i < p.qualities.length; i++){\n    \n    var valueid = p.qualities[i].id.replace(\" \",\"\"); \n    var temp_value_name = p.qualities[i].value[0].match(/[a-zA-Z]+/g)[0];\n    var temp_value = parseFloat(p.qualities[i].value[0].match(/\\d+.\\d+/g));\n    result[temp_value_name] = temp_value;\n    \n    var temp_value_min_name = p.qualities[i].minmax[0].match(/[a-zA-Z]+/g)[0];\n    var temp_value_min = parseFloat(p.qualities[i].minmax[0].match(/\\d+.\\d+/g)[0]);\n    // result[temp_value_name+\"_\"+temp_value_min_name] = temp_value_min;\n    \n    var temp_value_max_name = p.qualities[i].minmax[0].match(/[a-zA-Z]+/g)[1];\n    var temp_value_max = parseFloat(p.qualities[i].minmax[0].match(/\\d+.\\d+/g)[1]);\n    // result[temp_value_name+\"_\"+temp_value_max_name] = temp_value_max;\n    \n    if ((temp_value>temp_value_max) || (temp_value<temp_value_min)){\n        notcondition.push({\n            [temp_value_name]:temp_value,\n            [temp_value_min_name]:temp_value_min,\n            [temp_value_max_name]:temp_value_max\n        });\n        isNotConditional = true;\n    }\n}\nmsg.payload = result;\nmsg.notcondition = notcondition;\nmsg.isNotConditional = isNotConditional;\n\nreturn msg;","outputs":1,"noerr":0,"x":150,"y":300,"wires":[["1913d21d.e5e70e","44d8b70a.df4748"]]},{"id":"59c89b64.a87c5c","type":"switch","z":"eba66637.9e2b48","name":"","property":"load","propertyType":"msg","rules":[{"t":"true"}],"checkall":"true","outputs":1,"x":630,"y":160,"wires":[["5a1f3d76.09eedc"]]}]
