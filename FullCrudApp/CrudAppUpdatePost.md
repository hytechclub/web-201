# CR**U**D App - Update (POST)
Now that the "Edit Player" page loads properly, all that's left is making it actually update the player data. Create a handler function that updates the database, and hook it up to the `/edit/:id` endpoint.

## Creating the Handler Function
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

### Code
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

## Hooking Up the Route
1. In the "app.js" file, under the `app.post` route, add another `app.post` to hook up the `editPlayer` function to the `/edit/:id` route:
    ```js
    app.post('/edit/:id', player.editPlayer);
    ```
1. Load up the app, edit a player, and verify that the update happens in the database!

## Next Steps
[CRU**D** App - Delete](CrudAppDelete.md)