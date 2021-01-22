# Express Web Server: Code-Along
Follow the steps below to create an npm project that uses Express to run a simple web server.

## Getting Started
1. Create a new [Node.js Repl project](https://repl.it/new/nodejs)
1. Name it "Express App"
1. Create a new file named **app.js** in the current directory
1. For test purposes, add a `console.log('hello')` statement to **app.js** 
1. Create another new file, this one named **.replit**
1. In the **.replit** file, add `run = "node app.js"`
1. Click the "Run" button to run the program, and make sure it works so far

## Creating a Simple Express Web App
At first, creating an Express web server is a lot like creating a web server with the `http` module. However, the capabilities of the Express framework make it much easier to go beyond the basics. Start building the server in the **app.js** file by following the steps below.

1. Import the `express` module using `require`, and store it in a `const` variable named `express`
1. Create `const` variables for `hostname` and `port`
    - These should be `'0.0.0.0'` and `8080` respectively
1. Initialize an Express app by calling the `express` module as a function, and store it in a variable named `app`
1. Define a new function named `handleHomeRequest` that has `request` and `response` as parameters
1. In the body of the `handleHomeRequest` function, use `response.send` to display 'Hello World!' to the user
1. Use `app.get` to specify that when a browser goes to the root of the server (`'/'`), `handleHomeRequest` should run
    ```js
    app.get('/', handleHomeRequest);
    ```
1. Define a new function named `listenCallback` that logs a message to the console saying the server is running
1. Finally, use `app.listen` to listen on the appropriate port on the host, and call `listenCallback` when listening
1. Test out the server by clicking the "Run" button

Notice that after clicking "Run", the **package.json** file should automatically be updated to include `express` as a dependency. It should also automatically run the `npm install` command, which will install the `express` module on the server. This is all thanks to Repl.it; without it, a developer would have to do all of this manually!

### Code
```js
const express = require('express');

const hostname = '0.0.0.0';
const port = 8080;

let app = express();

function handleHomeRequest(request, response) {
    response.send('Hello World!');
}

app.get('/', handleHomeRequest);

function listenCallback() {
    console.log('Server running');
}

app.listen(port, hostname, listenCallback);
```

## Adding Multiple Endpoints
It is much simpler to add additional HTTP endpoints using the Express framework!

1. Define a new function named `handleInfoRequest` that has `request` and `response` as parameters
1. In the body of the `handleInfoRequest` function, use `response.send` to show an HTML header to the user that says "Info"
1. Use `app.get` to specify that when a browser goes to the `'/info'` endpoint, `handleInfoRequest` should run
1. Test out the new endpoint by clicking the "Run" button, opening the page in a new tab, and appending `/info` to the URL

### Code
```js
function handleInfoRequest(request, response) {
    response.send('<h1>Info</h1>');
}

app.get('/info', handleInfoRequest);
```

## Sending HTML Files
So far the webpages are not very exciting, but it would be very annoying put a lot of HTML into a template string. Instead, Express makes it possible to send a whole HTML file as a response!

1. Create a new file in the project directory named **info.html**
1. Fill out some basic HTML in the file
1. At the top of the **app.js** file, import the `path` module and store it in a variable
    ```js
    const path = require('path');
    ```
1. In the `handleInfoRequest` function, remove the `response.send` statement
1. Use `path.join` to combine `__dirname` and `'info.html'` to get the absolute path of the HTML file and store it in a variable
    ```js
    let infoPath = path.join(__dirname, 'info.html');
    ```
1. Use `response.sendFile` to pass HTML file to the response
1. Load up the server and check out the `/info` endpoint to make sure the **info.html** file renders properly!

## Final Code
```js
const express = require('express');
const path = require('path');

const hostname = '0.0.0.0';
const port = 8080;

let app = express();

function handleHomeRequest(request, response) {
    response.send('Hello World!');
}

function handleInfoRequest(request, response) {
    let infoPath = path.join(__dirname, 'info.html');
    response.sendFile(infoPath);
}

app.get('/', handleHomeRequest);
app.get('/info', handleInfoRequest);

function listenCallback() {
    console.log('Server Running');
}

app.listen(port, hostname, listenCallback);
```