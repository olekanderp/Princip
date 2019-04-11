[{"id":"2e903c22.f77534","type":"tab","label":"RFID UHF"},{"id":"9ef88788.dfecc8","type":"tab","label":"currentTags"},{"id":"4843531a.a50bac","type":"tab","label":"PostgreSql ","disabled":false,"info":""},{"id":"c2288546.fb7328","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.214","port":"5084","log":false},{"id":"b41d0a4b.66efb8","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.212","port":"5084","log":false},{"id":"dbfc505b.85972","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.210","port":"5084","log":false},{"id":"6b7e777b.8252c8","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.217","port":"5084","log":false},{"id":"db481aa7.26a878","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.211","port":"5084","log":false},{"id":"bbf15f5e.1d626","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.216","port":"5084","log":false},{"id":"b9948f4a.ce724","type":"princip-llrp-device","z":"","ipAddress":"10.3.5.215","port":"5084","log":false},{"id":"e3afc53a.234858","type":"postgresdb","z":"","hostname":"10.3.5.253","port":"5432","db":"rfid_log","ssl":false},{"id":"4ebb8212.ee120c","type":"postgresdb","z":"","hostname":"10.3.5.250","port":"5432","db":"rfid_log","ssl":false},{"id":"c4244328.9ca5b","type":"http in","z":"2e903c22.f77534","name":"","url":"/api/platform/setAccessTable","method":"post","upload":false,"swaggerDoc":"","x":180,"y":240,"wires":[["2110b02c.da661"]]},{"id":"2110b02c.da661","type":"function","z":"2e903c22.f77534","name":"set Access Table","func":"// var accessTable = [exampleAcess];\n// var exampleAcess = {\n//     \"pointID\":\"35235325325235\"\n//     \"ip\":\"10.3.5.210\",\n//     \"antennaID\":\"1\",\n//     \"direction\":0,\n//     \"tags\":[\"124124\",\"3525235\"],\n//     \"gpo\":['80','00'],\n//      \"marked\":false\n// }\n\nflow.set('accessTable',msg.payload);\nflow.set('accessTableUpdate',new Date());\nmsg.statusCode = 200;\nreturn msg;","outputs":1,"noerr":0,"x":450,"y":240,"wires":[["f6676e50.0a1d9","17f3df8e.0ecdb"]]},{"id":"f6676e50.0a1d9","type":"http response","z":"2e903c22.f77534","name":"","x":630,"y":240,"wires":[]},{"id":"10132973.287767","type":"inject","z":"2e903c22.f77534","name":"init","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":true,"x":110,"y":40,"wires":[["27672e17.061f42"]]},{"id":"27672e17.061f42","type":"function","z":"2e903c22.f77534","name":"LLRP conf","func":"//040300000012000001dd0000db0007000280 - 02 GPO index, 80 or 00 - on/off\nflow.set('sendGPO','040300000012000001dd0000db000700');\nflow.set('accessTable',[]);\nflow.set('getReaderConfig','0402000000110000012e00000900000000');\nreturn msg;","outputs":1,"noerr":0,"x":270,"y":20,"wires":[["7e86a773.ba0c98"]]},{"id":"6db18d2e.3887c4","type":"function","z":"2e903c22.f77534","name":"get row from Access Table","func":"var aT = flow.get('accessTable');\nvar aTDate = flow.get('accessTableUpdate');\nvar nowDate = Date();\nvar diff = flow.get('actualDiff');\n\nmsg.do = true;\n//if access table is not actual\nif (nowDate-aTDate > diff){\n    msg.do = false;\n}else{\nfor (var i = 0; i < aT.length; i++){\n    if ((aT[i].ip === msg.ip)&&(Number(aT[i].antenna)===msg.tag.antennaID) && (aT[i].tags.indexOf(msg.tag.tagID) >= 0)&&!(aT[i].done)){\n        msg.accessTable = aT[i];\n        msg.aTLength = aT.length;\n        if ((aT[i].pointID != \"Неопределенно\")){\n            aT[i].done = true;\n        }\n        break;\n     }\n}\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":680,"y":340,"wires":[["4d5e74e2.9dd1ac","d91700e9.c9edb"]]},{"id":"d24474bc.0103e8","type":"function","z":"2e903c22.f77534","name":"get IP","func":"\nmsg.tagID = msg.payload.data.tagID;\nmsg.tag   = msg.payload.data;\nmsg.antennaID = msg.payload.data.antennaID;\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":340,"wires":[["6db18d2e.3887c4","f6af5c82.542e4","9077ef16.6eb15","ffd26b62.135f68"]]},{"id":"9da02192.c56bf","type":"function","z":"2e903c22.f77534","name":"send GPO if Access","func":"var sendGPOtemplate = flow.get('sendGPO');\n\nvar cmd = []; \nif (msg.accessTable){\n    var tags = msg.accessTable.tags;\n    \n    for (var i = 0; i < tags.length; i++){\n        if (tags[i] === msg.tagID){\n           \n            for(var j = 0; j < msg.accessTable.gpo.length; j++){\n                cmd.push({\n                    \"payload\":new Buffer(sendGPOtemplate+msg.accessTable.gpo[j],'hex'),\n                    \"ip\":msg.ip\n                    \n                });\n                \n            } \n            break;\n        } \n    }\n}\n\nreturn cmd;","outputs":"4","noerr":0,"x":1060,"y":340,"wires":[["1d97c93c.518d07"],["e634e8e.882df18"],["8c19f70f.f65788"],["f56ba9cb.39e838"]]},{"id":"587a2b62.9c1c64","type":"princip-llrp-out","z":"2e903c22.f77534","name":"217","device":"6b7e777b.8252c8","x":90,"y":360,"wires":[["c0d85f7d.c029a"]]},{"id":"aa006626.24bc98","type":"princip-llrp-in","z":"2e903c22.f77534","name":"217","device":"6b7e777b.8252c8","x":1290,"y":20,"wires":[]},{"id":"a85edc9d.95529","type":"function","z":"2e903c22.f77534","name":"send getReaderConfig LLRP message","func":"msg.payload = new Buffer(flow.get('getReaderConfig'),'hex');\nmsg.ip = msg.req.query.rfidID;\nreturn msg;","outputs":1,"noerr":0,"x":480,"y":700,"wires":[["278d9db.731a562","1d97c93c.518d07"]]},{"id":"6b03daa9.a68084","type":"switch","z":"2e903c22.f77534","name":"","property":"payload.type","propertyType":"msg","rules":[{"t":"eq","v":"getAccessReport","vt":"str"},{"t":"eq","v":"getReaderConfig","vt":"str"}],"checkall":"true","outputs":2,"x":350,"y":340,"wires":[["d24474bc.0103e8","629de05b.cf96f"],["b3b49218.3f4de"]]},{"id":"de9289c1.62e7b8","type":"http in","z":"2e903c22.f77534","name":"","url":"/api/platform/getReaderConfig","method":"get","upload":false,"swaggerDoc":"","x":140,"y":700,"wires":[["a85edc9d.95529"]]},{"id":"ebe890f5.455d3","type":"function","z":"2e903c22.f77534","name":"Waiting for LLRP response","func":"msg.statusCode = 200;\nmsg.payload = flow.get(msg.ip);\nreturn msg;","outputs":1,"noerr":0,"x":940,"y":700,"wires":[["b68238d5.b3eb18"]]},{"id":"b68238d5.b3eb18","type":"http response","z":"2e903c22.f77534","name":"","x":1130,"y":700,"wires":[]},{"id":"b3b49218.3f4de","type":"function","z":"2e903c22.f77534","name":"get Reader config","func":"flow.set(msg.ip,msg.payload.data);\nreturn msg;","outputs":1,"noerr":0,"x":510,"y":420,"wires":[[]]},{"id":"278d9db.731a562","type":"delay","z":"2e903c22.f77534","name":"","pauseType":"delay","timeout":"100","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":730,"y":700,"wires":[["ebe890f5.455d3"]]},{"id":"da0e0d2d.c3ba3","type":"http in","z":"2e903c22.f77534","name":"","url":"/api/platform/setDefaultTable","method":"post","upload":false,"swaggerDoc":"","x":180,"y":280,"wires":[["e37c3465.1c0318"]]},{"id":"e37c3465.1c0318","type":"function","z":"2e903c22.f77534","name":"set default Table","func":"// var accessTable = [];\n// var exampleAcess = {\n//     \"ip\":\"10.3.5.210\",\n//     \"port\":5084,\n//     \"gpo\":['0180','0200']\n// }\n\nflow.set('accessTable',msg.payload);\nmsg.statusCode = 200;\nreturn msg;","outputs":1,"noerr":0,"x":470,"y":280,"wires":[["4e149eca.2616f"]]},{"id":"4e149eca.2616f","type":"http response","z":"2e903c22.f77534","name":"","x":630,"y":280,"wires":[]},{"id":"cec58ca7.83fdc","type":"link in","z":"9ef88788.dfecc8","name":"","links":["2b4ac59.f7acf3a","ffd26b62.135f68"],"x":35,"y":40,"wires":[["7d421dff.385864","f800bca0.6163f","f2aedd5d.80016","fc9b253d.77b8c8","17697a91.6b7095"]]},{"id":"7d421dff.385864","type":"function","z":"9ef88788.dfecc8","name":"","func":"var ip_name = msg.ip.replace(/\\./g,\"_\");\nvar rfidTags = flow.get(ip_name);\nvar allTags = flow.get('allTags');\n\nif (!allTags){\n    allTags = [];\n}\n\nif(!(rfidTags)){\n    rfidTags = [];\n}\n\nvar tag = {\n    \"ip_name\":ip_name,\n    \"ip\":msg.ip,\n    \"antennaID\":msg.tag.antennaID,\n    \"tagID\":msg.tag.tagID,\n    \"timestamp\":new Date(),\n    \"peakRSSI\":msg.tag.PeakRSSI\n}\n\nfindedAllTags = false;\nfor (var i = 0; i < allTags.length; i++){\n    if((allTags[i].tagID === tag.tagID) && ((allTags[i].antennaID === tag.antennaID))){\n         findedAllTags = true; \n         allTags[i] = tag;\n    }\n}\nif(!findedAllTags){\n    allTags.push(tag);\n}\n\nfinded = false;\nif (rfidTags){\n    for (var i = 0; i < rfidTags.length; i++){\n        if((rfidTags[i].tagID === tag.tagID) && ((rfidTags[i].antennaID === tag.antennaID))){\n         finded = true; \n         rfidTags[i] = tag;\n        }\n    }\n}\n\nif (!finded){\n    rfidTags.push(tag);   \n}\n\nflow.set(ip_name,rfidTags);\nflow.set(\"allTags\",allTags);\nmsg.payload = tag;\nmsg.ip_name = ip_name;\nreturn msg;","outputs":1,"noerr":0,"x":130,"y":40,"wires":[["c8af1b1c.7ccdf8","f3cb8f3e.bac25"]]},{"id":"ffd26b62.135f68","type":"link out","z":"2e903c22.f77534","name":"","links":["cec58ca7.83fdc"],"x":655,"y":380,"wires":[]},{"id":"c0d85f7d.c029a","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.217\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":360,"wires":[["6b03daa9.a68084"]]},{"id":"1d97c93c.518d07","type":"switch","z":"2e903c22.f77534","name":"","property":"ip","propertyType":"msg","rules":[{"t":"eq","v":"10.3.5.217","vt":"str"},{"t":"eq","v":"10.3.5.216","vt":"str"},{"t":"eq","v":"10.3.5.215","vt":"str"},{"t":"eq","v":"10.3.5.214","vt":"str"},{"t":"eq","v":"10.3.5.212","vt":"str"},{"t":"eq","v":"10.3.5.211","vt":"str"},{"t":"eq","v":"10.3.5.210","vt":"str"}],"checkall":"true","outputs":7,"x":1150,"y":240,"wires":[["aa006626.24bc98"],["123900e1.1300df"],["2884f.5111e7b1a"],["6b862b0b.c62fb4"],["83bf901b.cde65"],["40d11da3.8c75c4"],["86f4d188.d3743"]]},{"id":"75965e4a.28e01","type":"princip-llrp-out","z":"2e903c22.f77534","name":"216","device":"bbf15f5e.1d626","x":90,"y":400,"wires":[["e022cb06.bbdf78"]]},{"id":"e022cb06.bbdf78","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.216\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":400,"wires":[["6b03daa9.a68084"]]},{"id":"af48538.06b8db","type":"princip-llrp-out","z":"2e903c22.f77534","name":"215","device":"b9948f4a.ce724","x":90,"y":440,"wires":[["12c82f.a0e557d1"]]},{"id":"12c82f.a0e557d1","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.215\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":440,"wires":[["6b03daa9.a68084"]]},{"id":"9be104ae.0d7af8","type":"princip-llrp-out","z":"2e903c22.f77534","name":"214","device":"c2288546.fb7328","x":90,"y":480,"wires":[["3487464f.9bdc0a"]]},{"id":"3487464f.9bdc0a","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.214\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":480,"wires":[["6b03daa9.a68084"]]},{"id":"1aa3c300.db0bcd","type":"princip-llrp-out","z":"2e903c22.f77534","name":"212","device":"b41d0a4b.66efb8","x":90,"y":520,"wires":[["b56f815c.beb35"]]},{"id":"b56f815c.beb35","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.212\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":520,"wires":[["6b03daa9.a68084"]]},{"id":"241d8135.7cc34e","type":"princip-llrp-out","z":"2e903c22.f77534","name":"211","device":"db481aa7.26a878","x":90,"y":560,"wires":[["8f2e8c42.70bfa"]]},{"id":"8f2e8c42.70bfa","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.211\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":560,"wires":[["6b03daa9.a68084"]]},{"id":"bd7cf3f.c318a1","type":"princip-llrp-out","z":"2e903c22.f77534","name":"210","device":"dbfc505b.85972","x":90,"y":600,"wires":[["a55f9469.47cae8"]]},{"id":"a55f9469.47cae8","type":"function","z":"2e903c22.f77534","name":"set IP","func":"msg.ip = \"10.3.5.210\";\nreturn msg;","outputs":1,"noerr":0,"x":210,"y":600,"wires":[["6b03daa9.a68084"]]},{"id":"123900e1.1300df","type":"princip-llrp-in","z":"2e903c22.f77534","name":"216","device":"bbf15f5e.1d626","x":1290,"y":60,"wires":[]},{"id":"2884f.5111e7b1a","type":"princip-llrp-in","z":"2e903c22.f77534","name":"215","device":"b9948f4a.ce724","x":1290,"y":100,"wires":[]},{"id":"6b862b0b.c62fb4","type":"princip-llrp-in","z":"2e903c22.f77534","name":"214","device":"c2288546.fb7328","x":1290,"y":140,"wires":[]},{"id":"83bf901b.cde65","type":"princip-llrp-in","z":"2e903c22.f77534","name":"212","device":"b41d0a4b.66efb8","x":1290,"y":180,"wires":[]},{"id":"40d11da3.8c75c4","type":"princip-llrp-in","z":"2e903c22.f77534","name":"211","device":"db481aa7.26a878","x":1290,"y":220,"wires":[]},{"id":"86f4d188.d3743","type":"princip-llrp-in","z":"2e903c22.f77534","name":"210","device":"dbfc505b.85972","x":1290,"y":280,"wires":[]},{"id":"da1c65a.88aa298","type":"http in","z":"9ef88788.dfecc8","name":"","url":"/api/platform/getTag","method":"get","upload":false,"swaggerDoc":"","x":130,"y":80,"wires":[["4f4087f4.f215e8"]]},{"id":"4f4087f4.f215e8","type":"function","z":"9ef88788.dfecc8","name":"","func":"var rfidID    = msg.req.query.rfidID.replace(/\\./g,\"_\");\nvar antennaID = msg.req.query.antennaID;\n\nif(antennaID){\n    antennaID = Number(antennaID);\n}\n\nvar tags = [];\nvar rfidTags = flow.get(rfidID);\n\nvar currentDate = new Date();\nvar difference  = 4000;\n\nif(rfidTags){\nfor (var i = rfidTags.length-1; i >=0; i--){\n    \n   if((rfidTags[i].antennaID===antennaID)&&((currentDate - rfidTags[i].timestamp) <= difference)){\n        tags.push({\n            'tagID':rfidTags[i].tagID,\n            'PeakRSSI':rfidTags[i].PeakRSSI,\n            'tagLastSeen':rfidTags[i].timestamp,\n            'currentDate':currentDate,\n            'diff':currentDate-rfidTags[i].timestamp\n            \n        });\n        \n    }\n}\n}\nmsg.payload = tags;\nreturn msg;","outputs":1,"noerr":0,"x":330,"y":80,"wires":[["65e8e5b7.faa0ec"]]},{"id":"65e8e5b7.faa0ec","type":"http response","z":"9ef88788.dfecc8","name":"","x":470,"y":80,"wires":[]},{"id":"c8af1b1c.7ccdf8","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"console":false,"complete":"payload","x":610,"y":116,"wires":[]},{"id":"12268aa6.415875","type":"http in","z":"2e903c22.f77534","name":"","url":"/api/platform/setReaderConfig","method":"post","upload":false,"swaggerDoc":"","x":660,"y":40,"wires":[["7b716f64.4ad0b","a2bcf0dd.977fe","72f5a2d6.ee39bc","a17da4de.5f3f18"]]},{"id":"7b716f64.4ad0b","type":"function","z":"2e903c22.f77534","name":"","func":"var gpo_cmd = msg.payload.cmd;\nvar sendGPO = flow.get('sendGPO');\nmsg.ip      = msg.req.query.rfidID;\nmsg.payload = new Buffer(sendGPO+gpo_cmd,'hex');\nreturn msg;","outputs":"1","noerr":0,"x":910,"y":60,"wires":[["1d97c93c.518d07"]]},{"id":"a2bcf0dd.977fe","type":"http response","z":"2e903c22.f77534","name":"","x":910,"y":100,"wires":[]},{"id":"5ef9860f.fbc278","type":"inject","z":"9ef88788.dfecc8","name":"","topic":"","payload":"10_3_5_210","payloadType":"flow","repeat":"","crontab":"","once":false,"x":120,"y":160,"wires":[["8e4fc3e7.43e63"]]},{"id":"8e4fc3e7.43e63","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"console":"false","complete":"false","x":290,"y":160,"wires":[]},{"id":"73c98008.e27d1","type":"inject","z":"9ef88788.dfecc8","name":"","topic":"","payload":"allTags","payloadType":"flow","repeat":"","crontab":"","once":false,"x":110,"y":200,"wires":[["39e0495d.0dc666"]]},{"id":"39e0495d.0dc666","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"console":"false","complete":"false","x":290,"y":200,"wires":[]},{"id":"3a48f87.8773e08","type":"inject","z":"9ef88788.dfecc8","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":100,"y":240,"wires":[["d2068014.791dc"]]},{"id":"d2068014.791dc","type":"function","z":"9ef88788.dfecc8","name":"","func":"flow.set(\"allTags\",[]);\nreturn msg;","outputs":1,"noerr":0,"x":270,"y":240,"wires":[[]]},{"id":"5410fb15.1b1a04","type":"http in","z":"9ef88788.dfecc8","name":"","url":"/api/platform/getAllTags","method":"get","upload":false,"swaggerDoc":"","x":140,"y":120,"wires":[["93062f26.ade07"]]},{"id":"93062f26.ade07","type":"function","z":"9ef88788.dfecc8","name":"","func":"var allTags = flow.get(\"allTags\");\nvar tags    = [];\nvar currentDate = new Date();\nvar difference  = 4000;\n\nif(allTags){\nfor (var i = allTags.length-1; i >=0; i--){\n    \n   if(((currentDate - allTags[i].timestamp) <= difference)){\n        tags.push({\n            \"ip\":allTags[i].ip,\n            \"antenna\":allTags[i].antennaID,\n            'tagID':allTags[i].tagID,\n            'PeakRSSI':allTags[i].PeakRSSI,\n            'tagLastSeen':allTags[i].timestamp,\n            'currentDate':currentDate,\n            'diff':currentDate-allTags[i].timestamp\n        });\n        \n    }\n}\n}\nmsg.payload = tags;\nreturn msg;","outputs":1,"noerr":0,"x":330,"y":120,"wires":[["69955c64.e416e4","f0fa9e80.66a5b"]]},{"id":"69955c64.e416e4","type":"http response","z":"9ef88788.dfecc8","name":"","x":470,"y":120,"wires":[]},{"id":"484e26a.d99e6d8","type":"inject","z":"2e903c22.f77534","name":"","topic":"","payload":"puller","payloadType":"flow","repeat":"","crontab":"","once":false,"onceDelay":"","x":100,"y":780,"wires":[["beab8dd9.67eb"]]},{"id":"4d5e74e2.9dd1ac","type":"switch","z":"2e903c22.f77534","name":"","property":"do","propertyType":"msg","rules":[{"t":"true"}],"checkall":"true","outputs":1,"x":865,"y":340,"wires":[["9da02192.c56bf"]]},{"id":"f0fa9e80.66a5b","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"console":"false","complete":"false","x":490,"y":160,"wires":[]},{"id":"f3cb8f3e.bac25","type":"function","z":"9ef88788.dfecc8","name":"","func":"var tag = msg.payload;\nmsg = {\n  \"payload\":tag \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":326,"y":41,"wires":[["73f46c11.77fdf4"]]},{"id":"73f46c11.77fdf4","type":"template","z":"9ef88788.dfecc8","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"INSERT INTO public.taglogs(ip, tagid, antenna, diff, peakrssi, lasttimeSeen) VALUES ('{{payload.ip}}', '{{payload.tagID}}','{{payload.antennaID}}', 0,{{payload.peakRSSI}}, now())","x":459,"y":41,"wires":[[]]},{"id":"bb92dbd6.d27e08","type":"inject","z":"2e903c22.f77534","name":"","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":93.5,"y":840,"wires":[["d86d4176.ad823"]]},{"id":"d86d4176.ad823","type":"function","z":"2e903c22.f77534","name":"get row from Access Table","func":"var aT = flow.get('accessTable');\nvar aTDate = flow.get('accessTableUpdate');\nvar nowDate = Date();\nvar diff = 2000;\n\nmsg.do = true;\n//if access table is not actual\nif (nowDate-aTDate > diff){\n    msg.do = false;\n}else{\nfor (var i = 0; i < aT.length; i++){\n    if ((aT[i].ip === msg.ip)&&Number(aT[i].antenna)===msg.tag.antennaID){\n        msg.accessTable = aT[i];\n        msg.aTLength = aT.length;\n        break;\n     }\n}\n}\n\nreturn msg;","outputs":1,"noerr":0,"x":294,"y":840,"wires":[["beab8dd9.67eb"]]},{"id":"7e86a773.ba0c98","type":"function","z":"2e903c22.f77534","name":"TB conf","func":"var devTokens = {\n    \"10.3.5.210\":\"JBhPbXOIurjYtactEULG\",\n\"10.3.5.211\":\"wUalPuK6AjterGIkukel\",\n\"10.3.5.214\":\"4lvWYttSbqXtqJi5f4zR\",\n\"10.3.5.215\":\"D0nQSqXFsTPywQ4L4Bpo\",\n\"10.3.5.216\":\"lJISUdDHKj9PNl2WIFpQ\",\n\"10.3.5.217\":\"RVdgJEDzY2NJvYMkFVB9\",\n\"10.3.5.212\":\"uGq9E2Vq9cnIyrCMx5mX\"\n};\nflow.set('devTokens',devTokens);\nflow.set('hostTB',\"10.3.5.223\");\nflow.set('portTB',\"8080\");\n\nreturn msg;","outputs":1,"noerr":0,"x":260,"y":80,"wires":[["98956c1c.8e513"]]},{"id":"f6af5c82.542e4","type":"function","z":"2e903c22.f77534","name":"send to TB","func":"var devTokens = flow.get('devTokens');\nmsg.url = \"http://\"+flow.get('hostTB')+\":\"+flow.get('portTB')+\"/api/v1/\"+devTokens[msg.ip]+\"/telemetry\";\nmsg.payload = msg.tag;\nmsg.payload.lastSeenTimestampUTC = new Date();\nmsg.payload.ip = msg.ip;\n\nreturn msg;","outputs":1,"noerr":0,"x":620,"y":480,"wires":[[]]},{"id":"3d502f87.6302b","type":"function","z":"2e903c22.f77534","name":"send to 1C","func":"msg.url = flow.get('host1C');\nmsg.tag.lastSeenTimestampUTC = new Date();\nmsg.tag.ip = msg.ip;\nmsg.tag.antenna = msg.tag.antennaID;\nmsg.tag.direction = 'IN';\nmsg.payload = [msg.tag];\nreturn msg;","outputs":1,"noerr":0,"x":670,"y":620,"wires":[["e05be75c.b90f28"]]},{"id":"e05be75c.b90f28","type":"http request","z":"2e903c22.f77534","name":"to 1C","method":"POST","ret":"txt","url":"","tls":"","x":830,"y":620,"wires":[["d22e867.8a1c478"]]},{"id":"98956c1c.8e513","type":"function","z":"2e903c22.f77534","name":"1C conf","func":"//var host1C = \"http://s-app-mir-test/rfid_mir_test/hs/PerimeterControl/api/PrincipNodeRed/getTags\";\nvar host1C = \"http://s-app-mir/UE_mir/hs/PerimeterControl/api/PrincipNodeRed/getTags\";\nflow.set('host1C',host1C);\nflow.set('actualDiff',86900); //сколько секунда таблица доступа актуальна\nmsg.url = host1C;\nflow.set('puller',[]);\nflow.set('puller_timeout_sec',120);\nreturn msg;","outputs":1,"noerr":0,"x":420,"y":80,"wires":[["87ad8170.e587f"]]},{"id":"e634e8e.882df18","type":"delay","z":"2e903c22.f77534","name":"","pauseType":"delay","timeout":"150","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":1390,"y":320,"wires":[["1d97c93c.518d07"]]},{"id":"8c19f70f.f65788","type":"delay","z":"2e903c22.f77534","name":"","pauseType":"delay","timeout":"300","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":1390,"y":360,"wires":[["1d97c93c.518d07"]]},{"id":"aeeb16d5.0ece58","type":"delay","z":"2e903c22.f77534","name":"","pauseType":"delay","timeout":"450","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":1390,"y":400,"wires":[["1d97c93c.518d07"]]},{"id":"f56ba9cb.39e838","type":"delay","z":"2e903c22.f77534","name":"","pauseType":"delay","timeout":"600","timeoutUnits":"milliseconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":1390,"y":440,"wires":[["1d97c93c.518d07"]]},{"id":"f800bca0.6163f","type":"function","z":"9ef88788.dfecc8","name":"","func":"msg.payload = msg.tag;\nmsg.payload.lastSeenTimestampUTC = new Date();\nmsg.payload.ip = msg.ip;\nreturn msg;","outputs":1,"noerr":0,"x":160,"y":340,"wires":[["1e7183ff.1ad5cc","1e0fab7c.1ac375"]]},{"id":"1783efb4.d19ac","type":"postgres","z":"9ef88788.dfecc8","postgresdb":"e3afc53a.234858","name":"rfid_log","output":true,"outputs":1,"x":740,"y":760,"wires":[["c54ab09c.aa8fb"]]},{"id":"ea521376.d2938","type":"template","z":"9ef88788.dfecc8","name":"query field1","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"INSERT INTO thingsboard(\n            lastSeenTimestampUTC,antennaID,tagID,tagSeenCount,PeakRSSI,ip)\n    VALUES ($param1,$param2,$param3,$param4,$param5,$param6);","x":570,"y":760,"wires":[["1783efb4.d19ac"]]},{"id":"1e0fab7c.1ac375","type":"function","z":"9ef88788.dfecc8","name":"setup params","func":"\n\nmsg.queryParameters = msg.queryParameters || {};\nmsg.queryParameters.param1 = msg.payload.lastSeenTimestampUTC;\nmsg.queryParameters.param2 = msg.payload.antennaID;\nmsg.queryParameters.param3 = msg.payload.tagID;\nmsg.queryParameters.param4 = msg.payload.tagSeenCount;\nmsg.queryParameters.param5 = msg.payload.PeakRSSI;\nmsg.queryParameters.param6 = msg.payload.ip;\nreturn msg;","outputs":1,"noerr":0,"x":370,"y":760,"wires":[["ea521376.d2938"]]},{"id":"c54ab09c.aa8fb","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":890,"y":760,"wires":[]},{"id":"a927e9d7.325cf8","type":"comment","z":"9ef88788.dfecc8","name":"Записати дані в таблицю для РФІД Антен","info":"","x":470,"y":720,"wires":[]},{"id":"1e7183ff.1ad5cc","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":330,"y":360,"wires":[]},{"id":"f2aedd5d.80016","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":330,"y":300,"wires":[]},{"id":"72f5a2d6.ee39bc","type":"function","z":"2e903c22.f77534","name":"","func":"msg.payload.ip = msg.req.query.rfidID;\nmsg.payload.event_name = \"Отправка команды\";\nmsg.payload.event_desc = msg.payload.event_name+\" \"+msg.payload.ip+\" \"+msg.payload.cmd;\nreturn msg;","outputs":1,"noerr":0,"x":910,"y":20,"wires":[["d020626d.13d02"]]},{"id":"357b487.368c6b8","type":"link in","z":"9ef88788.dfecc8","name":"send event","links":["d020626d.13d02"],"x":175,"y":480,"wires":[["af3faeb7.af28a","abc7a47a.2f35e8"]]},{"id":"d020626d.13d02","type":"link out","z":"2e903c22.f77534","name":"","links":["357b487.368c6b8"],"x":1055,"y":20,"wires":[]},{"id":"af3faeb7.af28a","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":430,"y":480,"wires":[]},{"id":"d2572e91.9daab","type":"postgres","z":"9ef88788.dfecc8","postgresdb":"e3afc53a.234858","name":"rfid_log","output":true,"outputs":1,"x":740,"y":580,"wires":[["3743e17.b32bf1e"]]},{"id":"3743e17.b32bf1e","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":870,"y":580,"wires":[]},{"id":"a71e9269.c6ca8","type":"inject","z":"4843531a.a50bac","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":160,"y":140,"wires":[["ee610f4f.6be98"]]},{"id":"ee610f4f.6be98","type":"template","z":"4843531a.a50bac","name":"CREATE TABLE","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"CREATE TABLE event_table\n(\n    Event_name character varying,\n    Event_description character varying,\n    IP character varying,\n    Command character varying\n\n)","x":350,"y":140,"wires":[["2e283965.7cf456"]]},{"id":"4174a612.747a68","type":"inject","z":"4843531a.a50bac","name":"trigger","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":"","x":130,"y":220,"wires":[["a3692f5d.5a39b"]]},{"id":"a3692f5d.5a39b","type":"template","z":"4843531a.a50bac","name":"format query","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"select * from event_table ","x":330,"y":220,"wires":[["2e283965.7cf456"]]},{"id":"2e283965.7cf456","type":"postgres","z":"4843531a.a50bac","postgresdb":"e3afc53a.234858","name":"rfid_log","output":true,"outputs":1,"x":580,"y":180,"wires":[["4b999abd.d74014"]]},{"id":"adca34a8.a0a508","type":"comment","z":"4843531a.a50bac","name":"створена таблиця івентів ","info":"","x":290,"y":100,"wires":[]},{"id":"23f6caa9.e29f76","type":"comment","z":"4843531a.a50bac","name":"читаєм таблицю івентів","info":"","x":290,"y":180,"wires":[]},{"id":"80df38a5.8d6178","type":"comment","z":"9ef88788.dfecc8","name":"Відправка даних на таблицю івентів","info":"","x":450,"y":540,"wires":[]},{"id":"4982de7f.d82ce","type":"comment","z":"4843531a.a50bac","name":"прочитати дані таблиці  РФІД Антен","info":"","x":230,"y":440,"wires":[]},{"id":"49d6c5c8.1d2dbc","type":"inject","z":"4843531a.a50bac","name":"trigger","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":"","x":130,"y":480,"wires":[["6c08ef5b.54722"]]},{"id":"6c08ef5b.54722","type":"template","z":"4843531a.a50bac","name":"format query","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"select * from thingsboard ","x":370,"y":480,"wires":[["c2d62544.5a8188"]]},{"id":"c8cf3554.f96708","type":"comment","z":"4843531a.a50bac","name":"створена таблиця для РФІД Антен","info":"","x":240,"y":360,"wires":[]},{"id":"c2d62544.5a8188","type":"postgres","z":"4843531a.a50bac","postgresdb":"e3afc53a.234858","name":"rfid_log","output":true,"outputs":1,"x":580,"y":400,"wires":[["346f9e97.ab6792"]]},{"id":"346f9e97.ab6792","type":"debug","z":"4843531a.a50bac","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":750,"y":400,"wires":[]},{"id":"4d5bdff8.447b","type":"template","z":"4843531a.a50bac","name":"CREATE TABLE","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"CREATE TABLE thingsboard\n(\n    lastSeenTimestampUTC character varying,\n    antennaID INTEGER,\n    tagID character varying,\n    tagSeenCount INTEGER,\n    PeakRSSI INTEGER,\n    ip character varying\n\n)","x":330,"y":400,"wires":[["c2d62544.5a8188"]]},{"id":"65ea216.4ba4de","type":"inject","z":"4843531a.a50bac","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":140,"y":400,"wires":[["4d5bdff8.447b"]]},{"id":"4b999abd.d74014","type":"debug","z":"4843531a.a50bac","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":730,"y":180,"wires":[]},{"id":"87ad8170.e587f","type":"http request","z":"2e903c22.f77534","name":"","method":"GET","ret":"txt","url":"","tls":"","x":350,"y":140,"wires":[["511306fb.842018","f97190e1.97841","43a46e52.d4b46"]]},{"id":"511306fb.842018","type":"function","z":"2e903c22.f77534","name":"set Access Table","func":"flow.set('accessTable',JSON.parse(msg.payload));\nflow.set('accessTableUpdate',new Date());\nreturn msg;","outputs":1,"noerr":0,"x":570,"y":140,"wires":[[]]},{"id":"9e27c9a2.2083c8","type":"inject","z":"4843531a.a50bac","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":180,"y":40,"wires":[["16ad8cc0.c5f853"]]},{"id":"16ad8cc0.c5f853","type":"template","z":"4843531a.a50bac","name":" add colon","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"ALTER TABLE event_table\nADD COLUMN lastSeenTimestampUTC CHARACTER VARYING;","x":340,"y":40,"wires":[["a1fd0388.21225","2e283965.7cf456"]]},{"id":"a1fd0388.21225","type":"debug","z":"4843531a.a50bac","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":570,"y":40,"wires":[]},{"id":"d91700e9.c9edb","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"accessTable","x":850,"y":200,"wires":[]},{"id":"abc7a47a.2f35e8","type":"function","z":"9ef88788.dfecc8","name":"setup params","func":"var cmd_str_f_ch = msg.payload.cmd;\n    cmd_str_f_ch = cmd_str_f_ch.substring(0,2);\nvar cmd_str_f_cmd = msg.payload.cmd\n    cmd_str_f_cmd = cmd_str_f_cmd.substring(2,5);\n\n\nmsg.queryParameters = msg.queryParameters || {};\nmsg.queryParameters.param1 = msg.payload.event_name;\nmsg.queryParameters.param2 = msg.payload.event_desc;\nmsg.queryParameters.param3 = msg.payload.ip;\nmsg.queryParameters.param4 = cmd_str_f_cmd;\nmsg.queryParameters.param5 = new Date();\nmsg.queryParameters.param6 = cmd_str_f_ch;\n\n\nreturn msg;","outputs":1,"noerr":0,"x":380,"y":640,"wires":[["5b41a5e3.1fb1fc"]]},{"id":"5b41a5e3.1fb1fc","type":"template","z":"9ef88788.dfecc8","name":"query field1","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"INSERT INTO event_table(\n             Event_name,Event_description,IP,Command,lastSeenTimestampUTC,channel)\n    VALUES ($param1,$param2,$param3,$param4,$param5,$param6);","x":570,"y":640,"wires":[["8a157269.5b365","d2572e91.9daab"]]},{"id":"d268a250.da404","type":"template","z":"4843531a.a50bac","name":"format query вибірка","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"SELECT * FROM event_table\nLIMIT 50 OFFSET 31940;","x":340,"y":260,"wires":[["2e283965.7cf456"]]},{"id":"f0216051.cfd21","type":"inject","z":"4843531a.a50bac","name":"trigger","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":"","x":110,"y":260,"wires":[["d268a250.da404"]]},{"id":"d22e867.8a1c478","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":990,"y":620,"wires":[]},{"id":"fc9b253d.77b8c8","type":"function","z":"9ef88788.dfecc8","name":"80t","func":"var tag_ip = msg.ip;\n//msg.payload = tag_ip;\nvar ID = msg.tagID;\nif(tag_ip == \"10.3.5.217\"){\n  msg.payload =  ID;  \n}else{\n  msg.payload =  5;  \n    \n}\nreturn msg;","outputs":1,"noerr":0,"x":530,"y":300,"wires":[["ee87d1ff.40f94","d6842c99.7d71b"]]},{"id":"17697a91.6b7095","type":"function","z":"9ef88788.dfecc8","name":"60t","func":"var tag_ip = msg.ip;\n//msg.payload = tag_ip;\nvar ID = msg.tagID;\nif(tag_ip == \"10.3.5.212\"){\n  msg.payload =  ID;  \n}else{\n  msg.payload =  5;  \n    \n}\nreturn msg;","outputs":1,"noerr":0,"x":530,"y":260,"wires":[["c3b00b70.3983d8"]]},{"id":"c3b00b70.3983d8","type":"switch","z":"9ef88788.dfecc8","name":"","property":"payload","propertyType":"msg","rules":[{"t":"neq","v":"5","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":670,"y":260,"wires":[["425681b5.7e627"]]},{"id":"ee87d1ff.40f94","type":"switch","z":"9ef88788.dfecc8","name":"","property":"payload","propertyType":"msg","rules":[{"t":"neq","v":"5","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":670,"y":300,"wires":[["9647502f.c4f64"]]},{"id":"92aff750.ea7e28","type":"tcp out","z":"9ef88788.dfecc8","host":"","port":"4003","beserver":"server","base64":false,"end":false,"name":"","x":980,"y":300,"wires":[]},{"id":"187de7f.2312c18","type":"tcp out","z":"9ef88788.dfecc8","host":"","port":"4004","beserver":"server","base64":false,"end":false,"name":"","x":980,"y":260,"wires":[]},{"id":"425681b5.7e627","type":"delay","z":"9ef88788.dfecc8","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"3","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":true,"x":820,"y":260,"wires":[["187de7f.2312c18"]]},{"id":"9647502f.c4f64","type":"delay","z":"9ef88788.dfecc8","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"1","nbRateUnits":"3","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":true,"x":820,"y":300,"wires":[["92aff750.ea7e28"]]},{"id":"d6842c99.7d71b","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":730,"y":340,"wires":[]},{"id":"8a157269.5b365","type":"debug","z":"9ef88788.dfecc8","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":710,"y":660,"wires":[]},{"id":"9077ef16.6eb15","type":"function","z":"2e903c22.f77534","name":"Filling Puller","func":"var puller = flow.get('puller');\nvar puller_timeout_sec = flow.get('puller_timeout_sec');\nvar current_element = {\n    'ip':msg.ip,\n    'tagID':msg.tagID,\n    'antennaID':msg.tag.antennaID,\n    'lastSeenTimestampUTC':new Date()\n}\nvar pull = true;\nvar finded = false\nfor (var i = 0; i < puller.length; i++){\n    var element = puller[i];\n    if ((element.ip === current_element.ip)&&(element.tagID===current_element.tagID)&&(element.antennaID===current_element.antennaID)){\n        var diff = current_element.lastSeenTimestampUTC-element.lastSeenTimestampUTC*1000;\n        if (diff < puller_timeout_sec){\n            pull = false; \n        }else{\n            puller[i]=current_element;\n        }\n        finded = true;\n    }\n}\nif (!finded){\n    puller.push(current_element);\n}\n\nflow.set('puller',puller);\nmsg.pull = pull;\nreturn msg;","outputs":1,"noerr":0,"x":410,"y":500,"wires":[["8f435d78.0434"]]},{"id":"8f435d78.0434","type":"switch","z":"2e903c22.f77534","name":"","property":"pull","propertyType":"msg","rules":[{"t":"true"}],"checkall":"true","repair":false,"outputs":1,"x":520,"y":620,"wires":[["3d502f87.6302b","933916fb.2194e8"]]},{"id":"629de05b.cf96f","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":590,"y":520,"wires":[]},{"id":"a17da4de.5f3f18","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":1090,"y":80,"wires":[]},{"id":"beab8dd9.67eb","type":"debug","z":"2e903c22.f77534","name":"","active":false,"console":"false","complete":"false","x":510,"y":800,"wires":[]},{"id":"43a46e52.d4b46","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":750,"y":160,"wires":[]},{"id":"17f3df8e.0ecdb","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":600,"y":200,"wires":[]},{"id":"f97190e1.97841","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":630,"y":80,"wires":[]},{"id":"32992367.10de4c","type":"function","z":"2e903c22.f77534","name":"check rule to SOVA event","func":"var ChannelNumber = null;\nvar Type = null;\nvar truck1 = 'не визначено';\nvar truck2 = 'не визначено';\n\nif((msg.ip === '10.3.5.210')&&(msg.antennaID==2)){\n    //въезд КПП 1\n    ChannelNumber = 5;\n    Type = 'TruckIn';\n}else if ((msg.ip === '10.3.5.216')&&(msg.antennaID==1)){\n    //въезд КПП 2\n    ChannelNumber = 5;\n    Type = 'TruckIn';\n}else if ((msg.ip === '10.3.5.210')&&(msg.antennaID==1)){\n    //выезд КПП 1\n    ChannelNumber = 7;\n    Type = 'TruckOut';\n}else if ((msg.ip === '10.3.5.216')&&(msg.antennaID==2)){\n    //выезд КПП 2\n    ChannelNumber = 7;\n    Type = 'TruckOut';\n}\n\n//получим по метка номер транспорта\n// \"tags_data\": [\n// {\n// \"tag\": \"e20000161708017526200fb5\",\n// \"truck_number\": \"БЕЗНОМЕРА3\",\n// \"truck_number2\": \"\",\n// \"waybill_number\": \"\"\n// },\n// {\n// \"tag\": \"e200001b290902701840ecb3\",\n// \"truck_number\": \"СЛУЖБТЕСТ\",\n// \"truck_number2\": \"\",\n// \"waybill_number\": \"\"\n// }\n// ]\nmsg.ChannelNumber = ChannelNumber;\nmsg.Type = Type;\nvar aT = flow.get('accessTable');\nfor (var i = 0; i < aT.length; i++){\n    var tags_data = aT[i].tags_data;\n    for (var j = 0; j < tags_data.length; j++){\n        if (tags_data[j].tag === msg.tagID){\n            truck1 = tags_data[j].truck_number;\n            truck2 = tags_data[j].truck_number2;\n        }        \n    }\n}\nmsg.truck1 = truck1;\nmsg.truck2 = truck2;\n\nmsg.payload = {\"truck1\": truck1, \n                \"ObjectID\": \"1001\", \n                \"truck2\": truck2,\n                \"Value\": \"test\",\n                \"ChannelNumber\": ChannelNumber, \n                \"Type\": Type};\n\nreturn msg;","outputs":1,"noerr":0,"x":1030,"y":480,"wires":[["d79d90cb.4de4d"]]},{"id":"1f1ddfc6.81c56","type":"debug","z":"2e903c22.f77534","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":1370,"y":480,"wires":[]},{"id":"933916fb.2194e8","type":"switch","z":"2e903c22.f77534","name":"Въезд - выезд","property":"ip","propertyType":"msg","rules":[{"t":"eq","v":"10.3.5.210","vt":"str"},{"t":"eq","v":"10.3.5.216","vt":"str"}],"checkall":"false","repair":false,"outputs":2,"x":940,"y":420,"wires":[["32992367.10de4c"],["32992367.10de4c"]]},{"id":"d79d90cb.4de4d","type":"http request","z":"2e903c22.f77534","name":"","method":"POST","ret":"txt","url":"http://10.45.1.60:8081/event","tls":"","x":1220,"y":480,"wires":[["1f1ddfc6.81c56"]]}]
