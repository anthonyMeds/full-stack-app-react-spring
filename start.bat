@echo off

docker-compose down --volumes

docker build -t backend-crud-app:latest ./userManagement


docker build -t frontend-crud-app:latest ./frontend


docker-compose up --build --force-recreate --remove-orphans