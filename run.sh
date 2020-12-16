#!/bin/bash

DAY="day$1"
PART="part$2"

cat ./src/$DAY/input.txt | yarn start ./src/$DAY/$PART.ts
