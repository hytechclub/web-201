# CR**U**D - Update
Add a form to the web app that will allow the user to edit the information for an existing player in the database. First, create an "Edit Player" route that will be accessible via a GET request. Then, create a POST request handler that will take the data from the "Edit Player" form and update the existing player in the `players` table.

## Creating the "Edit Player" Page
### Routing the GET Handler
The GET request for the "Edit Player" page requires a player `id` to render. The `id` can be passed as a [route parameter](http://expressjs.com/en/guide/routing.html#route-parameters) in Express. This means the user can direct their browser to `http://127.0.0.1:5000/edit/5` and the handler will know that the user is editing the player with an `id` of `5`.

1. In the `module.exports` object in the "player.js" file, define a new `editPlayerPage` function with `request` and `response` parameters
1. In the body of the `edtPlayerPage` function, log `request.params.id` to the console
1. Under the log, use `request.render` to render the "edit-player.ejs" page
    ```js
    editPlayerPage: function (request, response) {
        console.log(request.params.id);
        response.render('edit-player');
    }
    ```
1. In the "app.js" file, under the `app.get` calls, add another `app.get` to hook up `/edit:id` to `player.editPlayerPage`
    - This means that whatever comes after the `edit/` will be mapped to the `id` property of `params` in the handler
1. Navigate to the `/edit/5` route and verify that `5` is properly logged in the console as the `id`!

### Updating the GET Handler Function
The GET handler function should query the database to find the information about the player with the given `id`. It should then pass that data along to the EJS for rendering.

1. Remove the code currently in the body of the `editPlayerPage` function
1. Declare a new variable `playerId` and set it to `request.params.id`
1. Define a new string variable `query` that holds a SQL statement to get all data for the player with the given id:
    ```sql
    SELECT * FROM players WHERE ${playerId} = 5;
    ```
1. Call the `db.query` function to execute the statement, passing in `query` and a new anonymous function
1. Give the anonymous function two parameters: `error` and `result`
1. In the body of the anonymous function, if there is an error, return a 500 server error with the error message
1. If there is no error in the callback, log `result[0]` to the console
    - `result[0]` will contain the data for the player with the given `id`
1. Under the log, render the "edit-player.ejs" page, and pass in a data object with `player: result[0]`
    - This will give the EJS template access to the player's data
1. Direct a web browser to the `edit/:id` endpoint, and verify that the data for the player with the `id` is correct!

#### Code
```js
// Load the form to edit a player - GET
editPlayerPage: function (request, response) {
    // Get player ID from the request
    let playerId = request.params.id;

    // Query to find information about the player with the given ID
    let query = `SELECT * FROM players WHERE id = ${playerId};`;

    // Execute the query
    db.query(query, function (error, result) {
        if (error) {
            // Send server Error
            return response.status(500).send(error);
        }

        console.log(result[0]);

        // Load the page
        response.render('edit-player', {
            player: result[0]
        });
    });
}
```

### Updating the EJS
Currently, the "edit-player.ejs" file can only handle adding new players. Update the EJS so that it will dynamically handle adding _or_ editing players. If it is editing an existing player, the player data should be auto-filled in the form.

#### Passing the `add` Flag
1. In the "player.js" file, find the `addPlayerPage` function
1. Update the `response.render` call, and pass in `{ add: true }` for the data parameter
1. In the `editPlayerPage` function, update the `response.render` call and pass in `add: false`
    - This will allow the EJS to render differently for the "Add Player" page and the "Edit Player" page

#### Updating the EJS File
1. In the "edit-player.ejs" file, find the `input` for "First Name" and add a `value` attribute
1. Set the `value` attribute to an EJS segment that takes the `first_name` property from the `player` object
1. Using a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), update the EJS segment so that if `add` is `true`, it returns an empty string
    ```html
    <%=add ? '' : player.first_name%>
    ```
1. Make similar updates for the "Last Name" and "Number" `input` elements
1. For the "Position" `select`, create a new `option` with the `selected` attribute containing an EJS segment with `player.position`
1. Wrap the new `option` in an EJS snippet with an `if (!add)` so that it only appears while editing an existing player
1. In the "Submit" button `input`, replace "Add" with an EJS segment that could be either "Add" or "Update"
    ```html
    <%= add ? 'Add' : 'Update' %>
    ```
1. In the main `form` element, update the `action` attribute so that it can either go to `/add` OR `/edit/{player.id}`
    ```html
    <%=add ? 'add' : `edit/${player.id}`%>
    ```
1. Wrap the entire `form` element in an EJS snippet with an `if (add || player)`
    - This means if the user attempts to edit a player that does not exist, the form will not render
1. Under the `form`, add an `else` EJS snippet with a `p` that says "Player Not Found."
1. Load up the "Edit Player" page for a given `id`, and verify that the proper player information appears
1. Load up the "Add Player" page, and verify that everything still works the same way

##### "edit-player.ejs"
```html
<%- include('partials/header') %>
<div class="container">
<% if (add || player) { %>
    <form method="post" action="/<%=add ? 'add' : `edit/${player.id}`%>">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" name="first_name" value="<%=add ? '' : player.first_name%>" required>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" name="last_name" value="<%=add ? '' : player.last_name%>" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="number">Number</label>
                <input type="number" class="form-control" name="number" value="<%=add ? '' : player.number%>" required>
            </div>
            <div class="form-group col-md-6">
                <label for="position">Position</label>
                <select name="position" class="form-control" required>
                <% if (!add) { %>
                    <option selected><%= player.position %></option>
                <% } %>
                    <option>Goalkeeper</option>
                    <option>Defender</option>
                    <option>Midfielder</option>
                    <option>Forward</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-success float-right"><%= add ? 'Add' : 'Update' %> Player</button>
    </form>
<% } else { %>
    <p class="text-center">Player Not Found.</p>
<% } %>
</div>
</div>
</body>
</html>
```

### Adding the Edit Buttons
Now that the "Edit Player" page loads properly, the user needs a way to navigate to it! Add "Edit" buttons to each player in the home page table.

1. In the "index.ejs" file, add another `th` to the `table` header row with the text "Action"
1. Within the `for` loop row, add another `td` under the number `td`
1. Within the new `td`, add an `a` with the text "Edit" that points the user to `/edit/` with the player's `id`
1. Set the `class` attribute of the `a` to "btn btn-sm btn-success" to make it appear like a button
    ```html
    <td>
        <a href="/edit/<%= players[i].id %>" class="btn btn-sm btn-success">Edit</a>
    </td>
    ```
1. Load up the homepage, and verify that the "Edit" button links to the "Edit" page for the proper player!

## Handling the `/edit` POST Request
Now that the "Edit Player" page loads properly, all that's left is making it actually update the player data. Create a handler function that updates the database, and hook it up to the `/edit/:id` endpoint.

### Creating the Handler Function
1. In the "player.js" file, add a new function to the `module.exports` object named `editPlayer`
1. Make the function take in two parameters: `request` and `response`
1. In the body of the function, declare a new variable `playerId` and set it to `request.params.id`
    - This will be the route parameter from the URL
1. Declare variables for all of the form data, and set each of them to the corresponding values from `request.body`
1. Define a new string variable `query` that holds a SQL statement to update the proper player with the new data:
    ```sql
    UPDATE players
    SET first_name = '${first_name}', last_name = '${last_name}', position = '${position}', number = ${number}
    WHERE id = ${playerId};
    ```
1. Call the `db.query` function to execute the statement, passing in `query` and a new anonymous function
1. Give the anonymous function two parameters: `error` and `result`
1. In the body of the anonymous function, if there is an error, return a 500 server error with the error message
1. If there is no error in the callback, that means the `UPDATE` was successful; redirect to the homepage with `response.redirect`

#### Code
```js
// Update a player in the database - POST
editPlayer: function (request, response) {
    // Get values from the request
    let playerId = request.params.id;
    let first_name = request.body.first_name;
    let last_name = request.body.last_name;
    let position = request.body.position;
    let number = request.body.number;

    // Query to update the existing player
    let query = `UPDATE players
        SET first_name = '${first_name}', last_name = '${last_name}', position = '${position}', number = ${number}
        WHERE id = ${playerId};`;

    // Execute the query
    db.query(query, function (error, result) {
        if (error) {
            // Send server error
            return response.status(500).send(error);
        }

        // Update successful, return to homepage
        response.redirect('/');
    });
},
```

### Hooking Up the Route
1. In the "app.js" file, under the `app.post` route, add another `app.post` to hook up the `editPlayer` function to the `/edit/:id` route:
    ```js
    app.post('/edit/:id', player.editPlayer);
    ```
1. Load up the app, edit a player, and verify that the update happens in the database!

## Next Steps
[CRU**D** - Delete](CrudAppDelete.md)