@echo off

docker-compose down --volumes
docker system prune -f
docker-compose up --build --force-recreate --remove-orphans