FROM node:latest
ADD . /app
WORKDIR /app
RUN npm install -g nodemon@1.3.0-7
RUN npm install
