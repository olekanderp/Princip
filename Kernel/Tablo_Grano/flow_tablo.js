[{"id":"76465b3c.8bf864","type":"tab","label":"Flow 1"},{"id":"c4cb335a.8e101","type":"function","z":"76465b3c.8bf864","name":"ТЕСТ 1 сторона 0","func":"\nvar num_avto_r1 = msg.payload.w;\nvar num_avto_r2 = msg.payload.a1;\nvar num_avto_r3 = msg.payload.a2;\n\n\nmsg.payload =\"START1;0;0;1;0;\" + num_avto_r1 +\";\" + num_avto_r2 +\";\" + num_avto_r3 +\";\"+ String.fromCharCode(10) + String.fromCharCode(13);\n//            START1;0;0;1;0;Верхня;Нижня<EOR>            \nreturn msg;","outputs":1,"noerr":0,"x":350,"y":160,"wires":[["c24a2af3.f152c8","f5140abf.383e28"]]},{"id":"7b071541.55ee3c","type":"inject","z":"76465b3c.8bf864","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":121,"y":76,"wires":[["c4cb335a.8e101"]]},{"id":"d35574d9.5ec4f8","type":"inject","z":"76465b3c.8bf864","name":"","topic":"","payload":"","payloadType":"date","repeat":"60","crontab":"","once":false,"x":104,"y":290,"wires":[["68c6cd81.c12934"]]},{"id":"68c6cd81.c12934","type":"function","z":"76465b3c.8bf864","name":"яскравість 100 всі сторони","func":"\n\n\nmsg.payload =\"START1;0;0;102;255;255;\" + String.fromCharCode(10) + String.fromCharCode(13);\n             \nreturn msg;","outputs":1,"noerr":0,"x":327,"y":291,"wires":[["c24a2af3.f152c8","d98f026a.4201f"]]},{"id":"c24a2af3.f152c8","type":"tcp out","z":"76465b3c.8bf864","host":"10.3.45.223","port":"9761","beserver":"client","base64":false,"end":false,"name":"","x":688,"y":198,"wires":[]},{"id":"b3144033.7ed02","type":"link in","z":"76465b3c.8bf864","name":"","links":["66eb119e.11377"],"x":103,"y":156,"wires":[["1996b6d2.783269","c4cb335a.8e101"]]},{"id":"1996b6d2.783269","type":"debug","z":"76465b3c.8bf864","name":"","active":false,"console":"false","complete":"false","x":196,"y":207,"wires":[]},{"id":"f5140abf.383e28","type":"debug","z":"76465b3c.8bf864","name":"","active":false,"console":"false","complete":"false","x":439,"y":95,"wires":[]},{"id":"d98f026a.4201f","type":"delay","z":"76465b3c.8bf864","name":"","pauseType":"rate","timeout":"1","timeoutUnits":"minutes","rate":"1","nbRateUnits":"1","rateUnits":"minute","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":404,"y":212,"wires":[["c24a2af3.f152c8"]]}]
