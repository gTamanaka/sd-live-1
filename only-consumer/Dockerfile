FROM node:alpine

WORKDIR /app
COPY . .

RUN npm ci

ENTRYPOINT [ "node" ]
CMD [ "app.js" ]