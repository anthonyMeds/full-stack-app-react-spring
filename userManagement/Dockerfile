
FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/your-springboot-app.jar app.jar

EXPOSE 8083

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
