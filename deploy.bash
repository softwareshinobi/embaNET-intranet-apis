set -e

set -x

docker-compose build

docker-compose push

docker-compose down --remove-orphans

docker-compose up -d

docker-compose ps
