# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./

ADD public /app/public

ADD src /app/src

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install react-router-dom
RUN npm install npm i react-bootstrap
RUN npm install react react-dom


# start app
CMD ["npm", "start"]

