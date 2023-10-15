FROM node:18-alpine
WORKDIR /app
EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent
COPY . ./


RUN npm run build

RUN npm install -g serve


CMD ["npx", "serve", "-s", "dist"]

