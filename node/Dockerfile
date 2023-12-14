FROM node:16.4.2-slim

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . . 

RUN apt-get -y update && apt-get -y install wget

ENV DOCKERIZE_VERSION v0.7.0
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

