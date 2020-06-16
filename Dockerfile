FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=5150

EXPOSE 5150

CMD ["npm", "start"]