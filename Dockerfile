FROM node:20.10.0-alpine As build

WORKDIR /app
COPY dist/panagiotou-bros ./

RUN npm install angular-http-server -g

CMD ["angular-http-server", "--path", "/app"]
