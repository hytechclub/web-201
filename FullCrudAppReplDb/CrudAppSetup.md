# CRUD App - Setup
Write code for a basic boiler-plate Express web server.

## Getting Started
First, get a basic Node.js app up and running.

1. Create a new [Node.js Repl project](https://replit.com/new/nodejs)
1. Name it "CRUD App"
1. Create a new file named **app.js** in the current directory
1. For test purposes, add a `console.log('hello')` statement to **app.js** 
1. Create another new file, this one named **.replit**
1. In the **.replit** file, add `run = "node app.js"`
1. Click the "Run" button to run the program, and make sure it works so far

## Basic Web Server
Next, it's time to create the bare-bones Express server. Open the **app.js** file

1. Require the `express` module
1. Create `const` variables for `hostname` and `port`
1. Use `express()` to create the `app` object
1. Define a function named `getHomePage` that takes `request` and `response` as parameters, and sends a simple HTML "Hello World" message as a response
1. Set up the `/` route to respond with the `getHomePage` function
1. Define a function named `listenCallback` that logs a "Server Running" message
1. Use `app.listen` and pass in the `port`, `hostname`, and `listenCallback`
1. Click "Run" to run the server, open the homepage, and verify that the "Hello World" message appears!

### Code
```js
// Imports
const express = require('express');

// Set hosting information
const hostname = '0.0.0.0';
const port = 8080;

// Initialize app
let app = express();

// Route function
function getHomePage(request, response) {
    response.send('<h1>Hello World</h1>')
}

// Set routes
app.get('/', getHomePage);

function listenCallback() {
    console.log('Server Running');
}

app.listen(port, hostname, listenCallback);
```

## Organizing the Code
With a larger app, it can be helpful to organize the code in multiple folders and files. This makes it easier to maintain.

### Views Folder - EJS
1. In the project folder, create a new folder named "views"
1. In the "views" folder, create a new file named **index.ejs**
1. For now, put `<h1>TEST</h1>` in **index.ejs** for testing purposes
1. In the **app.js** file, import the `ejs` module and set the app's view engine to EJS
    ```js
    require('ejs');
    app.set('view engine', 'ejs');
    ```
1. For now, in the `getHomePage` function, replace the `response.send` statement with `response.render('index');`
1. Load up the homepage in a browser, and verify that the "TEST" message appears!

### Routes Folder
With many different routes, it is much easier to organize functions in multiple files. To do this, it is necessary to use `module.exports` in the separate files, and `require` in the **app.js** file.

1. In the project folder, create a new folder named "routes"
1. In the "routes" folder, create a new file named **index.js**
1. In the **index.js** file, set the `module.exports` property to an empty object
1. Add a property named `getHomePage` to the `module.exports` object, and set its value to a function
1. Make the function the same as the `getHomePage` function from **app.js**
    ```js
    module.exports = {
        getHomePage: function (request, response) {
            response.render('index');
        }
    };
    ```
1. In the **app.js** file, remove the `getHomePage` function definition
1. In the place of the `getHomePage` function definition, use `require` to pull in the **index.js** module
    ```js
    const index = require('./routes/index');
    ```
1. In the `app.get` homepage route, replace `getHomePage` with `index.getHomePage`
1. Load up the homepage and make sure it still works!

The folder structure at this point should look like this:

![](https://i.imgur.com/tIp8165.png)

## Creating the Database
The next step is to create the Replit DB, and prepare for the various functions that will be needed to interact with it.

1. In the project folder, create a new file named **db.js**
1. In the **db.js** file, require `@replit/database`, and store it in a const named `Database`
1. Under that, require `uuid`, and store it in a const named `uuid`
1. Under that, create a new variable `db` and set it to a `new Database()` call
1. Set `module.exports` to be an empty object

The code in the **db.js** file should look something like this:

```js
const Database = require("@replit/database");
const uuid = require("uuid");
let db = new Database();

module.exports = {

}
```

Note that this should not do anything (yet). It will be used in the future for all database actions.

## Next Steps
[**C**RUD - Create (GET)](CrudAppCreateGet.md)