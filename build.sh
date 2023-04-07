#!/bin/bash
###
 # @title: 
 # @Author: ttttmr
 # @Github: https://github.com/ttttmr
 # @Email: i@xlab.app
 # @date: 2023-04-07 16:32:08
 # @LastEditors: ttttmr
 # @LastEditTime: 2023-04-07 16:32:09
### 
mkdir -p dist
cat lib/index.js > dist/worker.js
echo "" >> dist/worker.js
cat worker/worker.js >> dist/worker.js