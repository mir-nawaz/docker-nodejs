# install latest node
# https://hub.docker.com/_/node/
FROM node:latest

# create and set app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# install app dependencies
# this is done before the following COPY command to take advantage of layer caching

# copy app source to destination container
COPY . .
RUN npm install


# expose container port

CMD npm start

EXPOSE 3000
