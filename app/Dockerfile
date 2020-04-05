FROM node:12.16.1-alpine
WORKDIR /usr/src

COPY ./app/package.json .
RUN yarn

COPY ./app ./app