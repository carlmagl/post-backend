#!/bin/bash

echo What should the version be?

read VERSION

docker build -t carlmagnus/lireddit:$VERSION .
docker push carlmagnus/lireddit:$VERSION
ssh root@46.101.232.189 "docker pull carlmagnus/lireddit:$VERSION && docker tag carlmagnus/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"