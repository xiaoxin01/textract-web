# a web based textract

## What can I do

Extract text from files.

Web based [textract](https://github.com/dbashford/textract).

## How to use

### Local test

1. Build and start server

    npm install
    npm start

2. Access test html

    http://localhost:3000/

3. Upload file, get the parsed text

### Deploy server by docker

```bash
docker build . -f ./Dockerfile -t textract-web
docker run --name textract_web_1 -p 3000:3000 --rm textract-web
```

# Need to do

[best-practice-performance](https://expressjs.com/zh-cn/advanced/best-practice-performance.html)
