# Simple Server: Code Along
Follow the instructions to create a simple web server using Node.js.

## Getting Started
1. Create a new file named **server.js** in the current directory
1. Add the line to import the `http` module:
    ```js
    const http = require('http');
    ```
1. Add a couple of constants to store the host and port (e.g., where the server connects on the computer)
1. Write a message to the console saying "starting up"
1. Run the program with `node server.js` to make sure it works so far

>Note: The web server does not have a `process.exit()` statement because it should keep running indefinitely. To kill the process, use `Ctrl`+`C` in the Terminal.

### Code
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log('Starting up...')
```

## Creating the Server and Listening
Now, write the code to make a server!

1. Define a new function named `serverCallback`
    - This function will be used to respond to any incoming requests from the web browser
1. Add two parameters to the `serverCallback` function: `request` and `response
1. In the body of the `serverCallback` function, set the `statusCode` property of the `response` object to `200`
    - This means success!
1. After setting the status code, call the `end` function on the `response` object
1. Outside of the `serverCallback` function, use `http.createServer` and pass in `serverCallback` to create the server
    - Store the server in a constant variable named `server`
1. Use `server.listen` to specify the post and hostname (set as constants previously)
1. Check out the Network tab at [http://127.0.0.1:3000](http://127.0.0.1:3000) to see the HTTP response come through!

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
Before continuing, it is important for the server to log its activity to the console.

1. Define a new function named `listenCallback`
1. In the body of the function, display a message in the console saying where the server is running
    - Use string interpolation to put `hostname` and `port` within a template string 
1. In the `server.listen` function call, add `listenCallback` as an argument

### Code
```js
function listenCallback() {
  console.log(`Server running at http://${hostname}:${port}`);
}

server.listen(port, hostname, listenCallback);
```

## Creating an HTML Response
While the server is technically functioning, it's not doing much yet. Follow the steps below to make the server actually send some HTML!

1. In the body of the `serverCallback` function, use the `setHeader` function of the `response` object to set the Content Type to HTML
1. Under that, use `response.write` to write some HTML - `<h1>Hello World</h1>`
1. Reload the page to see the HTML!

Obviously, this is a very simple HTML page, but it is simply an example. It is easy to extrapolate this basic structure and create much more elaborate HTML pages.

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
To make the server a little more dynamic, add the ability to respond to query parameters! The page should say "Hello World" if the user passes along `world=1`, and "There is no world" for any other value (or no value).

1. At the very top of the **server.js** file, import the `url` module
    ```js
    const url = require('url');
    ```
1. Get the `url` property from the `request` object using `request.url`, and store it in a variable
1. Parse the URL into an object using the `url.parse` function, passing in the request URL and `true`, and store the object in a variable
1. Get the `query` property of the URL object, and from that, get the `world` property. Store this in a variable
1. If the world parameter is `1`, use `reponse.write` to write "Hello World" in an HTML header
1. If the world parameter is anything else, use `reponse.write` to write "There is no world" in an HTML header
1. Use `response.end()` to end the response
1. Open up the web browser, and try going to [http://127.0.0.1:3000?world=1](http://127.0.0.1:3000?world=1) to see the query parameters in action!

### Code
```js
function serverCallback(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  let requestUrl = request.url;
  let parsedUrl = url.parse(requestUrl, true);
  let worldParam = parsedUrl.query.world;

  if (worldParam == 1) {
    response.write('<h1>Hello World</h1>');
  } else {
    response.write("<h1>There is no world</h1>");
  }

  response.end();
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

  let requestUrl = request.url;
  let parsedUrl = url.parse(requestUrl, true);
  let worldParam = parsedUrl.query.world;

  if (worldParam == 1) {
    response.write('<h1>Hello World</h1>');
  } else {
    response.write("<h1>There is no world</h1>");
  }

  response.end();
}

const server = http.createServer(serverCallback);

function listenCallback() {
  console.log(`Server running at http://${hostname}:${port}`);
}

server.listen(port, hostname, listenCallback);
```