FROM node:12.14.0-alpine3.9 AS nodeBuild

# add antiword to support .doc file
RUN apt add antiword

# add tesseract-ocr to support image ocr
RUN apt app tesseract-ocr

# add node registry for speed up
RUN npm config set registry https://registry.npm.taobao.org --global && \
    npm config set disturl https://npm.taobao.org/dist --global
WORKDIR /app
COPY ./package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
