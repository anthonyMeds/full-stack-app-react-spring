# Arquitetura arm e amd
FROM eclipse-temurin:17.0.8.1_1-jdk-jammy

RUN apt-get update && apt-get install -y maven

COPY . .

RUN mvn clean install -DskipTests

ENTRYPOINT ["java", "-jar", "target/userManagement-0.0.1-SNAPSHOT.jar"]
