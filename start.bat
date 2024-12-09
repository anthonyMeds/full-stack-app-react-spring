@echo off

docker-compose down

docker build -t backend-crud-app:latest ./userManagement


docker build -t frontend-crud-app:latest ./frontend


docker-compose up --build --force-recreate --remove-orphans