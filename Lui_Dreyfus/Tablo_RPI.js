[{"id":"45a7bc55.ce0694","type":"tab","label":"Flow 1"},{"id":"e7b8ce48.16e24","type":"serial-port","z":"","serialport":"/dev/string_2","serialbaud":"9600","databits":"8","parity":"none","stopbits":"1","newline":"\\n","bin":"false","out":"char","addchar":false},{"id":"aa628afe.d88b98","type":"serial-port","z":"","serialport":"/dev/string_1","serialbaud":"9600","databits":"8","parity":"none","stopbits":"1","newline":"\\n","bin":"false","out":"char","addchar":false},{"id":"d3b82c79.77f48","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":143,"y":25,"wires":[["32e50519.6caf8a"]]},{"id":"f4968d49.5fc06","type":"serial in","z":"45a7bc55.ce0694","name":"","serial":"e7b8ce48.16e24","x":115,"y":367,"wires":[["8a4913ec.005e6","e2423c7c.29993"]]},{"id":"61a4b88d.b26f68","type":"serial in","z":"45a7bc55.ce0694","name":"","serial":"aa628afe.d88b98","x":117,"y":305,"wires":[["1a2dbbfa.604084","a27cfdef.1c749"]]},{"id":"d16ee030.37d9d","type":"serial out","z":"45a7bc55.ce0694","name":"","serial":"e7b8ce48.16e24","x":1068,"y":35,"wires":[]},{"id":"6fc4702d.58a49","type":"serial out","z":"45a7bc55.ce0694","name":"","serial":"aa628afe.d88b98","x":1078,"y":98,"wires":[]},{"id":"32e50519.6caf8a","type":"function","z":"45a7bc55.ce0694","name":"2","func":"msg.payload = \"2. Паланюк О.В.\"\nreturn msg;","outputs":1,"noerr":0,"x":297,"y":25,"wires":[["74f75b26.d97274","e874d93a.c0bd78"]]},{"id":"d036318.8011bd","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":140,"y":67,"wires":[["374f171d.a1bf78"]]},{"id":"374f171d.a1bf78","type":"function","z":"45a7bc55.ce0694","name":"1","func":"msg.payload = \"1. Пiлащенко А.В.\";\nreturn msg;","outputs":1,"noerr":0,"x":294,"y":67,"wires":[["124dcd21.d15723","5a26f45.90c1a0c"]]},{"id":"8a4913ec.005e6","type":"debug","z":"45a7bc55.ce0694","name":"","active":true,"console":"false","complete":"false","x":305,"y":371,"wires":[]},{"id":"1a2dbbfa.604084","type":"debug","z":"45a7bc55.ce0694","name":"","active":true,"console":"false","complete":"false","x":314,"y":305,"wires":[]},{"id":"7253bea4.ef235","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":132,"y":222,"wires":[["acdd3604.c27118"]]},{"id":"acdd3604.c27118","type":"function","z":"45a7bc55.ce0694","name":"clear 2 row","func":"msg.payload = \" \";\nreturn msg;","outputs":1,"noerr":0,"x":306,"y":217,"wires":[["d16ee030.37d9d"]]},{"id":"f9ea43f7.7a5bf","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":131,"y":255,"wires":[["7734061a.6abac8"]]},{"id":"7734061a.6abac8","type":"function","z":"45a7bc55.ce0694","name":"clear 1 row","func":"msg.payload = \" \";\nreturn msg;","outputs":1,"noerr":0,"x":305,"y":255,"wires":[["6fc4702d.58a49"]]},{"id":"31eb7ac9.1d9c56","type":"file","z":"45a7bc55.ce0694","name":"","filename":"/distr/data/log_send.txt","appendNewline":true,"createDir":false,"overwriteFile":"false","x":932,"y":212,"wires":[]},{"id":"7546ebbe.2c9f34","type":"file","z":"45a7bc55.ce0694","name":"","filename":"/distr/data/log_get.txt","appendNewline":true,"createDir":false,"overwriteFile":"false","x":902,"y":483,"wires":[]},{"id":"a27cfdef.1c749","type":"function","z":"45a7bc55.ce0694","name":"logs 1 row","func":"msg.payload = {\n    string: msg.payload,\n    date: new Date(),\n    row: 1\n};\nreturn msg;","outputs":1,"noerr":0,"x":675,"y":487,"wires":[["7546ebbe.2c9f34","23ab8ed0.ae4af2"]]},{"id":"e2423c7c.29993","type":"function","z":"45a7bc55.ce0694","name":"logs 2 row","func":"msg.payload = {\n    string: msg.payload,\n    date: new Date(),\n    row: 2\n};\nreturn msg;","outputs":1,"noerr":0,"x":673,"y":524,"wires":[["7546ebbe.2c9f34","23ab8ed0.ae4af2"]]},{"id":"124dcd21.d15723","type":"function","z":"45a7bc55.ce0694","name":"logs 1 row","func":"msg.payload = {\n    string: msg.payload,\n    date: new Date(),\n    row: 1\n};\nreturn msg;","outputs":1,"noerr":0,"x":686,"y":197,"wires":[[]]},{"id":"74f75b26.d97274","type":"function","z":"45a7bc55.ce0694","name":"logs 2 row","func":"msg.payload = {\n    string: msg.payload,\n    date: new Date(),\n    row: 2\n};\nreturn msg;","outputs":1,"noerr":0,"x":684,"y":234,"wires":[[]]},{"id":"5a26f45.90c1a0c","type":"function","z":"45a7bc55.ce0694","name":"replace I","func":"var str = msg.payload;\nvar strArray = str.split(\"\");\n\nfor (var i = 0; i < strArray.length; i++) {\n    if(strArray[i] == 'і') {\n        strArray[i] = 'i';\n    } else if(strArray[i] == 'І'){\n        strArray[i] = 'I';\n    } else if(strArray[i] == 'Ї'){\n        strArray[i] = 'I';\n    }else if(strArray[i] == 'ї'){\n        strArray[i] = 'і';\n    }\n\n  \n}\nmsg.payload = strArray.join(\"\");\nreturn msg;","outputs":1,"noerr":0,"x":505,"y":66,"wires":[["6fc4702d.58a49"]]},{"id":"d182062c.38a018","type":"debug","z":"45a7bc55.ce0694","name":"","active":true,"console":"false","complete":"false","x":678,"y":293,"wires":[]},{"id":"609b1ae7.178224","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":142,"y":522,"wires":[["35dc6f0a.547a3"]]},{"id":"35dc6f0a.547a3","type":"function","z":"45a7bc55.ce0694","name":"2","func":"msg.payload = \"2. Паланюк О.В.\"\nreturn msg;","outputs":1,"noerr":0,"x":296,"y":522,"wires":[[]]},{"id":"d88b271b.c06588","type":"inject","z":"45a7bc55.ce0694","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":139,"y":564,"wires":[["a83b6a8b.306c98"]]},{"id":"a83b6a8b.306c98","type":"function","z":"45a7bc55.ce0694","name":"1","func":"msg.payload = \"1. Ілавіщінко І.І\";\nreturn msg;","outputs":1,"noerr":0,"x":293,"y":564,"wires":[[]]},{"id":"e874d93a.c0bd78","type":"function","z":"45a7bc55.ce0694","name":"replace I","func":"var str = msg.payload;\nvar strArray = str.split(\"\");\n\nfor (var i = 0; i < strArray.length; i++) {\n    if(strArray[i] == 'і') {\n        strArray[i] = 'i';\n    } else if(strArray[i] == 'І'){\n        strArray[i] = 'I';\n    } else if(strArray[i] == 'Ї'){\n        strArray[i] = 'I';\n    }else if(strArray[i] == 'ї'){\n        strArray[i] = 'і';\n    }\n\n  \n}\nmsg.payload = strArray.join(\"\");\nreturn msg;","outputs":1,"noerr":0,"x":508,"y":25,"wires":[["d16ee030.37d9d"]]},{"id":"b092a145.8bb03","type":"tcp in","z":"45a7bc55.ce0694","name":"","server":"server","host":"","port":"4002","datamode":"single","datatype":"utf8","newline":"","topic":"","base64":false,"x":105,"y":110,"wires":[["e874d93a.c0bd78"]]},{"id":"8c62f434.caf5b8","type":"tcp in","z":"45a7bc55.ce0694","name":"","server":"server","host":"","port":"4001","datamode":"single","datatype":"utf8","newline":"","topic":"","base64":false,"x":105,"y":152,"wires":[["5a26f45.90c1a0c"]]},{"id":"23ab8ed0.ae4af2","type":"tcp out","z":"45a7bc55.ce0694","host":"","port":"4003","beserver":"server","base64":false,"end":false,"name":"","x":789,"y":395,"wires":[]}]
