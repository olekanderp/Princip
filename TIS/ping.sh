#!/bin/bash

value=`cat /home/pi/ip_server.txt`
echo "$value"
ping "$value" -c 8
