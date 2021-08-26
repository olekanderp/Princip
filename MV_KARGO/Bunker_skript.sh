#!/bin/bash


RESULT=$(cat /distr/data/portion.json | wc -l)
#echo $RESULT

#cat with 20 to 25 string
head -$RESULT /distr/data/portion.json | tail -n +$1

