FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env ./

RUN npm install

COPY . .

EXPOSE 3000
