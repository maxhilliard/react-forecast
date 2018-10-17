#!/bin/sh

IMG_NAME=${1:-react-forecast-img}

docker build -f ./internals/build/Dockerfile -t $IMG_NAME .