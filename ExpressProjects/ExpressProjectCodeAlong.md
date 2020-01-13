# Express Web Server Project
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
1. For "entry point," type in "app.js"
    - This will be the starting file for the web server
1. Skip the "test command," "git repository," "keywords," "author," and "license" by pressing `Enter` without typing anything
1. Press `Enter` once more to finish creating the project!

## Initializing an Express Project
1. In the terminal, enter `npm install express --save`
1. After the command is run, check the "package.json" file to make sure Express was properly added as a dependency
1. Additionally, notice that a "node_modules" directory and a "package-lock.json" file should have been generated
    - The "node_modules" folder contains all the code necessary for all dependencies, and "package-lock.json" handles versioning for dependencies
1. In the directory, create a new file named "app.js"

## Creating a Simple Express Web App

## Adding Multiple Endpoints

## Sending HTML Files

## Final Code
```js
const express = require('express');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();
app.use(express.static('public'));

function indexCallback(request, response) {
    response.send('Hello World!');
}

function infoCallback(request, response) {
    response.sendFile(path.join(__dirname, 'info.html'));
}

app.get('/', indexCallback);
app.get('/info', infoCallback);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```