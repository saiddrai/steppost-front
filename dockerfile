FROM node:18.15.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install  --silent

COPY . ./

RUN npm run build

CMD ["npx", "serve", "dist", "-s", "-l", "3000"]