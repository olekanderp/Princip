#!/bin/bash
sleep 2

TargetDirectory=/opt/conteiner/CONF/NODERED/error.txt
while true; do

sleep 5

if [ -f "$TargetDirectory" ]; then
   echo "file is";
   #echo $string2
   sudo python /home/pi/reset_usb_device.py
   sleep 5
   sudo rm -f $TargetDirectory
else
   echo "file is not"
fi
done

