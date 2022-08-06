#!/bin/bash

http://skillsheets-app.s3-website-ap-northeast-1.amazonaws.com/

npm run build

aws s3 cp ./build s3://skillsheets-app/ --recursive