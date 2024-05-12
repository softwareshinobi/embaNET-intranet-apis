#!/bin/bash

set -e

set -x

## navigate out of the .automation folder back to root dir

cd ..

## print compose script for logging visibility

echo
echo "the compose file"
echo

cat compose.yaml

sleep 4

### note / the following build sequences introduces downtime. but it's the cleanest way.

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
