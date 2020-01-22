# CRUD App Walkthrough
Follow the steps in this guide to build a CRUD app using Node.js, Express, EJS, and MySQL.

||MAYBE GET RID OF USERNAME?||

## Project init
- make github repo
- make folder, init npm project
- install express, mysql, ejs
- install nodemon

## Make database
- run sql script to create the db
- explain auto_increment and primary key
- add some data to the db
- Run the `ALTER USER` command and `flush privileges`: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

## basic app.js setup
- load up empty homepage
```js
// Imports
const express = require('express');

// Set hosting information
const hostname = '127.0.0.1';
const port = 3000;

// Pull route functins
function getHomePage(request, response) {
    response.render('index');
}

// Initialize app
const app = express();

// Setup middleware
app.set('view engine', 'ejs');

// Set routes
app.get('/', getHomePage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## move index.ejs to routes folder
- `module.exports` and `require`

## Connect to the database in Node
- require `mysql`
- `mysql.createConnection`
- connect with callback

## fill out `getHomePage` function
- `db.query` with callback
- Pass data to ejs file
- Show results in json stringified form

## fill out `index.ejs` template
- add header partial, explain partials
    - header with no "add" link
- create table with players
- `if` for empty table
- NO edit/delete button

## create add player page
- create `player.js` file in routes
- add the link in the index page and on nav bar
- require the module
- define `addPlayerPage` function
- setup `app.get` call in "app.js"
- fill out `edit-player.js`

```html
<% include partials/header.ejs %>
<div class="container">
    <form class="add-player-form" method="post" action="add/">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" name="first_name" id="first-name" required>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" name="last_name" id="last-name" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="number">Number</label>
                <input type="number" class="form-control" name="number" id="number" placeholder="Number" required>
            </div>
            <div class="form-group col-md-6">
                <label for="position">Position</label>
                <select id="position" name="position" class="form-control" required>
                    <option>Goalkeeper</option>
                    <option>Defender</option>
                    <option>Midfielder</option>
                    <option>Forward</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-success float-right">Add Player</button>
    </form>
</div>
</div>
</body>
</html>
```

## handle "add player" post request
- define `addPlayer` function in `player.js`
- in "app.js", set up `app.use` and `app.post`

## Handle edit player GET request
- update `edit-player.ejs`
- 

## handle edit player POST request
