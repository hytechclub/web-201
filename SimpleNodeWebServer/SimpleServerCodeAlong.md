# Simple Server: Code Along
Follow the instructions to create a simple web server using Node.js.

## Getting Started
1. Create a new file named "server.js"

>Note: The web server does not have a `process.exit()` statement because it should keep running indefinitely. To kill the process, use `Ctrl`+`C` in the Terminal.

### Code
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log('Starting up...')
```

## Creating the Server and Listening

Check out the live site at [http://127.0.0.1:3000](http://127.0.0.1:3000) to see the HTTP response come through!

### Code
```js
function serverCallback(request, response) {
    response.statusCode = 200;
    response.end();
}

const server = http.createServer(serverCallback);

server.listen(port, hostname);
```

## Adding a Callback for Listening

### Code
```js
function listenCallback() {
  console.log(`Server running at http://${hostname}:${port}`);
}

server.listen(port, hostname, listenCallback);
```

## Creating an HTML Response

### Code
```js
function serverCallback(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Hello World</h1>');
  response.end();
}
```

## Using Query Parameters to Change the Response

### Code
```js
function serverCallback(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  let requestURL = request.url;
  let parsedURL = url.parse(requestURL, true);

  if (parsedURL.query.world == 1) {
    response.write('<h1>Hello World</h1>');
    response.end();
  } else {
    response.write("<h1>There is no world</h1>");
    response.end();
  }
}
```

## Final Code
```js
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

function serverCallback(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  let requestURL = request.url;
  let parsedURL = url.parse(requestURL, true);

  if (parsedURL.query.world == 1) {
    response.write('<h1>Hello World</h1>');
    response.end();
  } else {
    response.write("<h1>There is no world</h1>");
    response.end();
  }
}

const server = http.createServer(serverCallback);

function listenCallback() {
  console.log(`Server running at http://${hostname}:${port}`);
}

server.listen(port, hostname, listenCallback);
```