FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

RUN npm install -g serve

EXPOSE 1999

CMD ["serve", "-s", "build", "-l", "1999"]
