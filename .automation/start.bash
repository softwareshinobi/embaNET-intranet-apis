#!/bin/bash

set -e

set -x

cd ..

### note / this will introduce downtime. but it's the cleanest way.

echo
echo "shutting down containers."
echo

docker-compose down --remove-orphans

echo
echo "updating images."
echo

docker-compose pull

echo
echo "building images."
echo

docker-compose up --build -d

echo
echo "containers up."
echo
