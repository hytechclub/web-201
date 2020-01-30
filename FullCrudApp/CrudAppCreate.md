# **C**RUD - Create
Add a form to the web app that will allow the user to insert a new player into the database. First, create an "Add Player" page that will be accessible via a GET request. Then, create a POST request handler that will take the data from the "Add Player" form and insert the new player into the `players` table.

## Creating the "Add Player" Page
### Creating the GET Route Handler
To properly handle the GET request for the "Add Player" page, it is necessary to build a handler function that renders the EJS.

1. In the "views" folder, create a new file named "edit-player.ejs"
    - For testing purposes, add an HTML header to the file saying "Add Player"
1. In the routes folder, create a new file named "player.js"
1. In the "player.js" file, set `module.exports` equal to a new empty object
1. In the `module.exports` object, set a property named `addPlayerPage` to a new function with `request` and `response` parameters
1. In the body of the `addPlayerPage` function, call `response.render` and pass in "edit-player"

#### "player.js"
```js
module.exports = {
    // Load the form to add a player - GET
    addPlayerPage: function (request, response) {
        // Load the page
        response.render('edit-player');
    }
}
```

### Hooking up the Route
Update the app so that `/add` loads up the "Add Player" page, and there is a link to `/add` in the nav bar.

1. In the "app.js" file, under the `index` module, `require` the `./routes/player` module and put it in `const player`
1. Under the `app.get` call, add another `app.get` to hook up `/add` to `player.addPlayerPage`
1. In the "header.ejs" file, add an `a` to the navbar that links to the `/add` page
    ```html
    <a class="float-right" href="/add">Add a Player</a>
    ```
1. Load up the homepage, click the "Add a Player" link, and verify that the route loads the  HTML from "edit-player.ejs"

### Filling out the "Add Player" EJS
Update the "edit-player.ejs" file so that it properly renders an HTML form that takes in Soccer Player information.

1. Replace the test HTML in "edit-player.ejs" with EJS to include the "header.ejs" partial
1. Create a `div` with a `class` of "container"
1. Within the "container" `div`, create a `form` that will POST to `add/` on submit
    - Set its `method` to `"post"`
    - Set its `action` to `"add/"`
1. In the `form`, add a `div` element with a `class` of "form-row"
1. In the "form-row" `div`, create a "form-group" `div` holding the `label` and `input` for First Name:
    ```html
    <div class="form-group col-md-6">
        <label for="first-name">First Name</label>
        <input type="text" class="form-control" required>
    </div>
    ```
1. Add a `name` attribute to the `input` element with a value of "first_name"
    - This is how the form knows what data to send the server in the POST request
1. Under the First Name "form-group" `div`, create another "form-group" `div` for Last Name
1. Under the "form-row" `div`, create another "form-row" `div`
1. In the second "form-row" `div`, create a "form-group" for Number
    - Ensure that the `type` of the `input` element is "number"
1. Create another "form-group" for Position using a `select` to provide the user with a dropdown list, including:
    - Goalkeeper
    - Defender
    - Midfielder
    - Forward
1. Under the second "form-row" `div`, add HTML for a submit button:
    ```html
    <button type="submit" class="btn btn-success float-right">Add Player</button>
    ```
1. Load up the "Add Player" page, and verify that the form appears and submits the proper POST request!

#### Code
```html
<%- include('partials/header') %>
<div class="container">
    <form method="post" action="add/">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" name="first_name" required>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" name="last_name" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="number">Number</label>
                <input type="number" class="form-control" name="number" required>
            </div>
            <div class="form-group col-md-6">
                <label for="position">Position</label>
                <select name="position" class="form-control" required>
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

## Handling the `/add` POST Request
When a user fills out the "Add Player" form and clicks the submit button, it will send a POST request to `/add` (as specified in the attributes of the form). The data will be labeled based on the `name` attributes of the `input` elements. The server should take that POST request, and use the data to insert a new player into the `players` table in the database.

### Hooking up an "Add Player" Request Handler
1. In the "player.js" file, add a new module export property named `addPlayer`
    - Make sure to add a comma after the `addPlayerPage` function
1. Set the value of `addPlayer` to be a function with `request` and `response` as parameters
1. In the body of the `addPlayer` function, log `request.body` to the console
1. After the console log, redirect to the homepage with `response.redirect('/')`
1. In the "app.js" file, under the `app.set`, tell the `app` to use the proper middleware to handle POST data:
    ```js
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    ```
1. In the "app.js" file, under the `app.get` routes, add an `app.post` to hook up the `addPlayer` function to the `/add` route:
    ```js
    app.post('/add', player.addPlayer);
    ```
1. Load up the "Add Player" page, submit the form, and verify that the form data is properly logged in the console!


### Handling the POST Data
Update the `addPlayer` function in "player.js" so that it takes the player data from the POST request and adds it to the database.

1. Remove all code from the body of the `addPlayer` function
1. Declare a new variable `first_name` and set it to the "First Name" data from the form:
    ```js
    let first_name = request.body.first_name;
    ```
1. Declare and set new variables for the other form data: `last_name`, `position`, `number`
1. Make a new string variable `query` holding an SQL `INSERT INTO` statement
    ```sql
    INSERT INTO players (first_name, last_name, position, number)
    VALUES ('Megan', 'Rapinoe', 'Midfielder', 15);
    ```
1. Update `query` so that it uses the data from the form for the insert values
    - Use template strings with [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Expression_interpolation) to make this easier
1. Call the `db.query` function to execute the statement, passing in `query` and a new [anonymous function](https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions)
1. Give the anonymous function two parameters: `error` and `result`
1. In the body of the anonymous function, if there is an error, return a 500 server error with the error message
1. If there is no error in the callback, that means the `INSERT INTO` was successful; redirect to the homepage with `response.redirect`
1. Load up the "Add Player" page, submit the form, and verify that the data appears in the database!

## "player.js"
```js
module.exports = {
    // Load the form to add a player - GET
    addPlayerPage: function (request, response) {
        // Load the page
        response.render('edit-player');
    },

    // Add a player to the database - POST
    addPlayer: function (request, response) {
        // Load values from the POST request
        let first_name = request.body.first_name;
        let last_name = request.body.last_name;
        let position = request.body.position;
        let number = request.body.number;

        // Query to add the new player to the database
        let query = `INSERT INTO players (first_name, last_name, position, number)
            VALUES ('${first_name}', '${last_name}', '${position}', ${number});`;

        db.query(query, function (error, result) {
            if (error) {
                // Send server error
                return response.status(500).send(error);
            }

            // New player added successfully, reload homepage
            response.redirect('/');
        });
    }
}
```

## Next Steps
[CR**U**D - Update](CrudAppUpdate.md)