FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000