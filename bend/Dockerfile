FROM frolvlad/alpine-oraclejdk8:slim

EXPOSE 8080

#install Spring Boot artifact
VOLUME /tmp
ADD /target/bend-0.0.1-SNAPSHOT.jar bend.jar
RUN sh -c 'touch /bend.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/bend.jar"]
