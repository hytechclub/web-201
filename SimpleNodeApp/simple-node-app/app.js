const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function serverCallback(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>\n');
}

const server = http.createServer(serverCallback);

function listenCallback() {
  console.log(`Server running at http://${hostname}:${port}`);
}

server.listen(port, hostname, listenCallback);