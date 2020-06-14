FROM node:10

#create app dir
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node" , "myserver.js" ]

