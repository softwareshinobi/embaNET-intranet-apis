#!/bin/bash

reset

clear

set -e

set -x

docker-compose -f minimal.yaml pull

docker-compose -f minimal.yaml down --remove-orphans

docker-compose -f minimal.yaml build

docker-compose -f minimal.yaml up -d
