#!/bin/bash

http://resume-from-vue-for-cloudformation.s3-website-ap-northeast-1.amazonaws.com/

npm run build

aws s3 cp ./build s3://resume-from-vue-for-cloudformation/ --recursive