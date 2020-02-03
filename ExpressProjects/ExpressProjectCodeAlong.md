# Express Web Server Project: Code-Along
Follow the steps below to create an npm project that uses Express to run a simple web server.

## Creating an npm Project
1. In Visual Studio Code, select "Terminal" from the menu, and select "New Terminal" from the dropdown
    - Make sure the terminal is a Git Bash instance
1. Create a new folder for the project with `mkdir`
1. Change the current directory to the new folder with `cd`
1. Type `npm init` and press `Enter` to run the command
    - This command will walk the user through the steps of initializing an npm project
1. Enter a proper name for "package name" and press `Enter`
1. Simply press `Enter` for "version" to take the default
1. Enter a description and press `Enter`
1. For "entry point," type in **app.js**
    - This will be the starting file for the web server
1. Skip the "test command," "git repository," "keywords," "author," and "license" by pressing `Enter` without typing anything
1. Press `Enter` once more to finish creating the project!

## Initializing an Express Project
1. In the terminal, enter `npm install express --save`
1. After the command is run, check the "package.json" file to make sure Express was properly added as a dependency:
    ```js
    {
        // ...
        "dependencies": {
            "express": "^4.17.1"
        }
    }
1. Additionally, notice that a "node_modules" directory and a "package-lock.json" file should have been generated
    - The "node_modules" folder contains all the code necessary for all dependencies, and "package-lock.json" handles versioning for dependencies
1. In the directory, create a new file named **app.js**

## Creating a Simple Express Web App
At first, creating an Express web server is a lot like creating a web server with the `http` module. However, the capabilities of the Express framework make it much easier to go beyond the basics. Start building the server in the **app.js** file by following the steps below.

1. Import the `express` module using `require`, and store it in a `const` variable named `express`
1. Create `const` variables for `hostname` and `port`
1. Initialize an Express app by calling the `express` module as a function, and store it in a variable named `app`
1. Define a new function named `indexCallback` that has `request` and `response` as parameters
1. In the body of the `indexCallback` function, use `response.send` to display 'Hello World!' to the user
1. Use `app.get` to specify that when a browser goes to the root of the server (`'/'`), `indexCallback` should run
    ```js
    app.get('/', indexCallback);
    ```
1. Define a new function named `listenCallback` that logs a message to the console with the location of the web server
1. Finally, use `app.listen` to listen on the appropriate port on the host, and call `listenCallback` when listening
1. Test out the server by running it with `node app.js` and visiting [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

### Code
```js
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();

function indexCallback(request, response) {
    response.send('Hello World!');
}

app.get('/', indexCallback);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## Adding Multiple Endpoints
It is much simpler to add additional HTTP endpoints using the Express framework!

1. Define a new function named `infoCallback` that has `request` and `response` as parameters
1. In the body of the `infoCallback` function, use `response.send` to show an HTML header to the user that says "Info"
1. Use `app.get` to specify that when a browser goes to the `'/info'` endpoint, `infoCallback` should run
1. Test out the new endpoint by running `node app.js` again and visiting [http://127.0.0.1:3000/info](http://127.0.0.1:3000/info)

### Code
```js
function infoCallback(request, response) {
    response.send('<h1>Info</h1>');
}

app.get('/info', infoCallback);
```

## Sending HTML Files
So far the webpages are not very exciting, but it would be very annoying put a lot of HTML into a template string. Instead, Express makes it possible to send a whole HTML file as a response!

1. Create a new file in the project directory named **info.html**
1. Fill out some basic HTML in the file
1. At the top of the **app.js** file, import the `path` module and store it in a variable
    ```js
    const path = require('path');
    ```
1. In the `infoCallback` function, remove the `response.send` statement
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

const hostname = '127.0.0.1';
const port = 3000;

let app = express();

function indexCallback(request, response) {
    response.send('Hello World!');
}

function infoCallback(request, response) {
    let infoPath = path.join(__dirname, 'info.html');
    response.sendFile(infoPath);
}

app.get('/', indexCallback);
app.get('/info', infoCallback);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```