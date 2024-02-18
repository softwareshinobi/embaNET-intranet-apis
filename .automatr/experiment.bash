reset

clear

cd ..

docker-compose -f .experiment.yaml down

docker-compose -f .experiment.yaml up --build
