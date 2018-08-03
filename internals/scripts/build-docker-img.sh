#!/bin/sh

IMG_NAME=${1:-react-boilerplate-img}

docker build -t $IMG_NAME .