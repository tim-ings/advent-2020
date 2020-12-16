#!/bin/bash

DAY="day$1"

cat ./src/$DAY/input.txt | yarn start ./src/$DAY/$DAY.ts