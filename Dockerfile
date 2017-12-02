FROM node:slim

RUN npm install -i bespoken-tools -g
COPY package.json /skill/package.json

WORKDIR /skill/
RUN npm install 

EXPOSE 10000
EXPOSE 5000

ENTRYPOINT ["/bin/bash"]