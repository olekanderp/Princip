#!/bin/bash
sleep 20

string2=$(lp -d Canon_LBP151 /opt/conteiner/CONF/NODERED/print.pdf)
TargetDirectory=/opt/conteiner/CONF/NODERED/print.pdf

while true; do

sleep 10

if [ -f "$TargetDirectory" ]; then
   #echo "file is";
   #echo $string2
   lp -d Canon_LBP151 /opt/conteiner/CONF/NODERED/print.pdf
   sleep 5
   sudo rm -f $TargetDirectory
fi
done
