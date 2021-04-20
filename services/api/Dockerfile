FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx sequelize-cli db:migrate

EXPOSE 3030
CMD [ "npm", "start"]