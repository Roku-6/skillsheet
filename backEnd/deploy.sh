#!/bin/bash

npm run build

#下記 Sample 部分を適当なものに書き換え

# aws cloudformation package --template-file template.yml --s3-bucket バケット名(https://selfnote.work/20210215/programming/create-s3-error/ [命名規則(名称は世界中で被れない)]) --output-template-file packaged-template.yml
aws cloudformation package --template-file template.yml --s3-bucket cloudformation-resume-api --output-template-file packaged-template.yml
# aws cloudformation deploy --template-file packaged-template.yml --stack-name Sample --capabilities CAPABILITY_NAMED_IAM
aws cloudformation deploy --template-file packaged-template.yml --stack-name cloudformation-resume-api --capabilities CAPABILITY_NAMED_IAM






mysql -u masterUser -p -h db-practice-resume.cthkduzbn8rq.ap-northeast-1.rds.amazonaws.com