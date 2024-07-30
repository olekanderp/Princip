[{"id":"d691701.5edf69","type":"tab","label":"Flow 1"},{"id":"c0f05bf0.879b48","type":"serial-port","z":"","serialport":"/dev/ttyUSB0","serialbaud":"19200","databits":"8","parity":"none","stopbits":"1","newline":"1000","bin":"bin","out":"time","addchar":false},{"id":"e47e64b.8c50998","type":"serial in","z":"d691701.5edf69","name":"","serial":"c0f05bf0.879b48","x":114,"y":89,"wires":[["725606af.3dfa58","6c4c6b8a.2b89e4","49d4964e.3da728"]]},{"id":"7e8e2631.8f1b88","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"false","x":546,"y":61,"wires":[]},{"id":"725606af.3dfa58","type":"file","z":"d691701.5edf69","name":"","filename":"/distr/data/log.txt","appendNewline":true,"createDir":true,"overwriteFile":"false","x":325,"y":129,"wires":[]},{"id":"6c4c6b8a.2b89e4","type":"function","z":"d691701.5edf69","name":"","func":"msg.payload = {\n    date: new Date(),\n    msg: msg.payload\n}\nreturn msg;","outputs":1,"noerr":0,"x":227,"y":211,"wires":[["5d8d0946.33bb18"]]},{"id":"5d8d0946.33bb18","type":"file","z":"d691701.5edf69","name":"","filename":"/distr/data/log2.txt","appendNewline":true,"createDir":true,"overwriteFile":"false","x":394,"y":214,"wires":[]},{"id":"4793de61.30e68","type":"inject","z":"d691701.5edf69","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":136,"y":389,"wires":[["c5e2075d.0b2bd8"]]},{"id":"49d4964e.3da728","type":"function","z":"d691701.5edf69","name":"","func":"msg.payload = msg.payload.toString('utf8');\nreturn msg;","outputs":1,"noerr":0,"x":346,"y":58,"wires":[["7e8e2631.8f1b88"]]},{"id":"c5e2075d.0b2bd8","type":"file in","z":"d691701.5edf69","name":"","filename":"/distr/data/log.txt","format":"utf8","x":353,"y":354,"wires":[["aa5ddfae.6b994","d40627bf.c5c018"]]},{"id":"43366475.919f0c","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"true","x":662,"y":386,"wires":[]},{"id":"aa5ddfae.6b994","type":"function","z":"d691701.5edf69","name":"","func":"let text = msg.payload\n\n\n\nconst regex = /^(?!Disabled|Enabled).*$/gm;\n\nconst matches = text.match(regex);\nconst filteredArray = matches.filter(item => item !== \"\");\nlet listAnalises = filteredArray.join('').split('------------------------');\n\nlistAnalises = listAnalises.filter(item => item !== \"\\u0000\");\n\nmsg.object = listAnalises\n\nlet lastAnalis = listAnalises[listAnalises.length -1]\n\nconst startIndex = lastAnalis.indexOf('Component');\nmsg.qqq = startIndex\nlet result = \"\"\n// Если найдено, обрезаем строку от найденного индекса до конца\nif (startIndex !== -1) {\n    result = lastAnalis.substring(startIndex);\n\n}\n\nmsg.payload = {\n    result, list: msg.object\n}\nreturn msg;","outputs":1,"noerr":0,"x":544,"y":357,"wires":[["43366475.919f0c","ca05734c.4a75b"]]},{"id":"d2286bbd.5f44e8","type":"http in","z":"d691701.5edf69","name":"","url":"/getQuality","method":"get","swaggerDoc":"","x":143,"y":533,"wires":[["942165d9.9df278","b09e6cd2.588c8"]]},{"id":"4305f2d4.63f71c","type":"function","z":"d691701.5edf69","name":"send 1c","func":"let data = msg.payload\n\nmsg.payload = {\n    \"device_id\":\"infrascan\",\n    \"truck_id\":\"\",\n    \"data\":data.result\n}\nreturn msg;","outputs":1,"noerr":0,"x":438,"y":593,"wires":[["7e9348e2.dc2d38","7b9816c0.20bd38"]]},{"id":"7e9348e2.dc2d38","type":"http response","z":"d691701.5edf69","name":"","x":662,"y":594,"wires":[]},{"id":"6fcf996e.394788","type":"http in","z":"d691701.5edf69","name":"","url":"/get123","method":"get","swaggerDoc":"","x":137,"y":351,"wires":[["c5e2075d.0b2bd8"]]},{"id":"ca05734c.4a75b","type":"http response","z":"d691701.5edf69","name":"","x":660,"y":323,"wires":[]},{"id":"d40627bf.c5c018","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"false","x":485,"y":412,"wires":[]},{"id":"942165d9.9df278","type":"file in","z":"d691701.5edf69","name":"","filename":"/distr/data/log.txt","format":"utf8","x":131,"y":591,"wires":[["749d37a7.261528","dfeb5b6a.abfad8"]]},{"id":"749d37a7.261528","type":"function","z":"d691701.5edf69","name":"","func":"let text = msg.payload\n\n\n\nconst regex = /^(?!Disabled|Enabled).*$/gm;\n\nconst matches = text.match(regex);\nconst filteredArray = matches.filter(item => item !== \"\");\nlet listAnalises = filteredArray.join('').split('------------------------');\n\nlistAnalises = listAnalises.filter(item => item !== \"\\u0000\");\n\nmsg.object = listAnalises\n\nlet lastAnalis = listAnalises[listAnalises.length -1]\n\nconst startIndex = lastAnalis.indexOf('Component');\nmsg.qqq = startIndex\nlet result = \"\"\n// Если найдено, обрезаем строку от найденного индекса до конца\nif (startIndex !== -1) {\n    result = lastAnalis.substring(startIndex);\n\n}\n\nmsg.payload = {\n    result, list: msg.object\n}\nreturn msg;","outputs":1,"noerr":0,"x":309,"y":592,"wires":[["4305f2d4.63f71c"]]},{"id":"7b9816c0.20bd38","type":"function","z":"d691701.5edf69","name":"","func":"msg.payload = Buffer.from(JSON.stringify(msg.payload))\nreturn msg;","outputs":1,"noerr":0,"x":433,"y":538,"wires":[["80a22b74.57c5d8"]]},{"id":"80a22b74.57c5d8","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"false","x":608,"y":536,"wires":[]},{"id":"f163d3ef.49a38","type":"http in","z":"d691701.5edf69","name":"","url":"/getQuality2222","method":"get","swaggerDoc":"","x":140,"y":936,"wires":[["9f8bd6dd.c68288"]]},{"id":"83713d6f.c2aa7","type":"function","z":"d691701.5edf69","name":"send 1c","func":"let data = msg.payload\n\nmsg.payload = {\n    \"device_id\":\"infrascan\",\n    \"truck_id\":\"\",\n    \"data\":data.result\n}\nreturn msg;","outputs":1,"noerr":0,"x":444,"y":1004,"wires":[["d3dab9d2.daa328"]]},{"id":"72499401.443dbc","type":"http response","z":"d691701.5edf69","name":"","x":765,"y":1010,"wires":[]},{"id":"9f8bd6dd.c68288","type":"file in","z":"d691701.5edf69","name":"","filename":"/distr/data/log.txt","format":"utf8","x":147,"y":1007,"wires":[["a5064c91.e3eac"]]},{"id":"a5064c91.e3eac","type":"function","z":"d691701.5edf69","name":"","func":"let text = msg.payload\n\n\n\nconst regex = /^(?!Disabled|Enabled).*$/gm;\n\nconst matches = text.match(regex);\nconst filteredArray = matches.filter(item => item !== \"\");\nlet listAnalises = filteredArray.join('').split('------------------------');\n\nlistAnalises = listAnalises.filter(item => item !== \"\\u0000\");\n\nmsg.object = listAnalises\n\nlet lastAnalis = listAnalises[listAnalises.length -1]\n\nconst startIndex = lastAnalis.indexOf('Component');\nmsg.qqq = startIndex\nlet result = \"\"\n// Если найдено, обрезаем строку от найденного индекса до конца\nif (startIndex !== -1) {\n    result = lastAnalis.substring(startIndex);\n\n}\n\nmsg.payload = {\n    result, list: msg.object\n}\nreturn msg;","outputs":1,"noerr":0,"x":310,"y":1004,"wires":[["83713d6f.c2aa7"]]},{"id":"d3dab9d2.daa328","type":"function","z":"d691701.5edf69","name":"","func":"msg.payload = Array.from(Buffer.from(JSON.stringify(msg.payload)));\nreturn msg;","outputs":1,"noerr":0,"x":590,"y":999,"wires":[["ec795935.5eb4f8","72499401.443dbc"]]},{"id":"ec795935.5eb4f8","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"false","x":781,"y":954,"wires":[]},{"id":"6ea710e4.a69eb","type":"inject","z":"d691701.5edf69","name":"","topic":"","payload":"","payloadType":"date","repeat":"11","crontab":"","once":false,"x":119,"y":757,"wires":[["a24822ef.fde8"]]},{"id":"a24822ef.fde8","type":"function","z":"d691701.5edf69","name":"","func":"const now = new Date();\n\n// Получаем часы и минуты\nconst hours = now.getHours();\nconst minutes = now.getMinutes();\n\n// Проверяем, является ли текущее время 00:10\nif (hours === 23 && minutes === 10) {\n    return msg;\n} else {\n    // msg.payload = {hours, minutes, now}\n    // return msg;\n}\n","outputs":1,"noerr":0,"x":282,"y":754,"wires":[["e9a96dfe.cdd23"]]},{"id":"2281bfdd.bb555","type":"file","z":"d691701.5edf69","name":"","filename":"/distr/data/log.txt","appendNewline":true,"createDir":false,"overwriteFile":"delete","x":668,"y":754,"wires":[]},{"id":"e9a96dfe.cdd23","type":"delay","z":"d691701.5edf69","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"minute","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":true,"x":443,"y":754,"wires":[["2281bfdd.bb555"]]},{"id":"b09e6cd2.588c8","type":"trigger","z":"d691701.5edf69","op1":"","op2":"1","op1type":"nul","op2type":"str","duration":"4","extend":false,"units":"s","reset":"","name":"","x":297,"y":652,"wires":[["10c3b1af.da553e","a9a2af6d.e7255"]]},{"id":"dfeb5b6a.abfad8","type":"function","z":"d691701.5edf69","name":"reset","func":"if(!msg.error){\n    msg.reset = true\n    return msg;\n}\n","outputs":1,"noerr":0,"x":93,"y":651,"wires":[["b09e6cd2.588c8"]]},{"id":"10c3b1af.da553e","type":"function","z":"d691701.5edf69","name":"send 1c","func":"msg.payload = {\n    \"device_id\":\"infrascan\",\n    \"truck_id\":\"\",\n    \"data\":\"\"\n}\nreturn msg;","outputs":1,"noerr":0,"x":445,"y":654,"wires":[["7e9348e2.dc2d38"]]},{"id":"a9a2af6d.e7255","type":"debug","z":"d691701.5edf69","name":"","active":true,"console":"false","complete":"true","x":438,"y":694,"wires":[]}]