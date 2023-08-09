FROM node:18.12.1-alpine
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist"]
