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
    response.write('<h1>Hello World</h1>\n');
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