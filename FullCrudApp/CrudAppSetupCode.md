# CRUD App - Setup (Code)
Open the **app.js** file, and write code for a basic boiler-plate Express web server.

## Basic Web Server
1. Require the `express` module
1. Create `const` variables for `hostname` and `port`
1. Use `express()` to create the `app`
1. Define a function named `getHomePage` that takes `request` and `response` as parameters, and sends a simple "Hello World" message as a response
1. Set up the `/` route to respond with the `getHomePage` function
1. Define a function named `listenCallback` that logs the location of the server (hostname and port)
1. Use `app.listen` and pass in the `port`, `hostname`, and `listenCallback`
1. Use `nodemon` to run the server, and verify that the "Hello World" message appears!

### Code
```js
// Imports
const express = require('express');

// Set hosting information
const hostname = '127.0.0.1';
const port = 5000;

// Initialize app
let app = express();

// Route function
function getHomePage(request, response) {
    response.send('<h1>Hello World</h1>')
}

// Set routes
app.get('/', getHomePage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## Organizing the Code
With a larger app, it can be helpful to organize the code in multiple folders and files. This makes it easier to maintain.

### Views Folder - EJS
1. In the project folder, create a new folder named "views"
1. In the "views" folder, create a new file named **index.ejs**
1. For now, put `<h1>TEST</h1>` in **index.ejs** for testing purposes
1. In the **app.js** file, set the app's view engine to EJS
    ```js
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

![](https://i.imgur.com/ThGdU4z.png)

## Connecting to the Database in Node
Update **app.js** so that it is able to connect to the `soccer` database.

1. At the top of the file, import the `mysql` module using `require`
1. Create a new `const` object named `dbConfig` with the following information:
    - `host`: localhost
    - `user`: root
    - `password`: password
    - `database`: soccer
1. Create the database using `mysql.createConnection` and passing in `dbConfig`
    - Store the database in a `const` named `db`
1. Define a function named `connectCallback` that takes an `error` parameter.
1. In the body of `connectCallback`, use `throw` to throw the `error` if there is one
1. In the body of `connectCallback`, log a message saying the database connection was successful
1. For testing purposes, in the body of `connectCallback`, send a `SELECT` query to the database, and log the results
    ```js
    // test
    db.query('SELECT * FROM players', function (error, results) {
        console.log(results);
    });
    ```
1. Add a `db.connect()` call and pass in `connectCallback` as an argument to connect to the database
1. Finally, set `db` to be a global variable using `global.db = db;`
1. Run `nodemon` and make sure the data from the `players` table appears!

### Code
```js
// Configuration object
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'soccer'
}

// Create the database using the config
const db = mysql.createConnection(dbConfig);

// Function to run on connect
function connectCallback (error) {
    if (error) {
        throw error;
    }

    console.log('Connected to the database');
}

// Open the connection to the database
db.connect(connectCallback);

// Set global db variable
global.db = db;
```

## Next Steps
[C**R**UD - Read](CrudAppRead.md)