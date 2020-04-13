# CRU**D** App - Delete
- [Video](https://www.youtube.com/watch?v=vSxTtVtl8Go&list=PL1P_sExxi-9PSNwmays_UE8JYllVu7P7u&index=52)

The last step for the CRUD app is allowing the user to delete rows from the database. Add this ability with a GET request that includes a player's `id` as a route parameter.

## Routing the GET Handler
>NOTE: It is not best practice to use an HTTP GET request to perform a DELETE operation. However, using a GET handler in this instance works fine, so it is used for the sake of simplicity.

1. In the `module.exports` object in the **player.js** file, define a new `deletePlayer` function with `request` and `response` parameters
1. In the body of the `deletePlayer` function, log `request.params.id` to the console
1. Under the log, use `request.redirect` to redirect to the homepage:
    ```js
    deletePlayer: function (request, response) {
        console.log(request.params.id);
        response.redirect('/');
    }
    ```
1. In the **app.js** file, under the `app.get` calls, add another `app.get` to hook up `/delete:id` to `player.deletePlayer`
1. Navigate to the `/player/5` route and verify that `5` is properly logged in the console as the `id`!

## Deleting the Player in the GET Handler
The GET handler function should delete the player with the given `id` from the `players` table. 

1. Remove the code currently in the body of the `deletePlayer` function
1. Declare a new variable `playerId` and set it to `request.params.id`
1. Define a new string variable `query` that holds a SQL statement to delete the player with the given id:
    ```sql
    DELETE FROM players WHERE id = ${playerId};;
    ```
1. Call the `db.query` function to execute the statement, passing in `query` and a new anonymous function
1. Give the anonymous function two parameters: `error` and `result`
1. In the body of the anonymous function, if there is an error, return a 500 server error with the error message
1. If there is no error in the callback, that means the `DELETE FROM` was successful; redirect to the homepage with `response.redirect`
1. Direct a web browser to the `delete/:id` endpoint, and verify that the player with the `id` is successfully deleted!

### Code
```js
// Delete a player from the database - GET
deletePlayer: function (request, response) {
    // Get player ID from request
    let playerId = request.params.id;

    // Query to delete the given player
    let query = `DELETE FROM players WHERE id = ${playerId};`;

    db.query(query, function (error, result) {
        if (error) {
            // Send server error
            return response.status(500).send(error);
        }

        // Delete successful, return to homepage
        response.redirect('/');
    });
}
```

## Delete Buttons
The `/delete` endpoint works, but it would be much easier for the user to delete players using buttons. Update the homepage so that each player in the table has a "Delete" button.

1. In the **index.ejs** file, within the last `td` from the `for` loop, add an `a` element with the text "Delete"
1. Set the `href` attribute of the `a` to `/delete/` with the player's `id`
1. Set the `class` attribute of the `a` to "btn btn-sm btn-success" to make it appear like a red button:
    ```html
    <a href="/delete/<%= players[i].id %>" class="btn btn-sm btn-danger">Delete</a>
    ```
1. Load up the homepage, and verify that the "Delete" button properly deletes the player!

## Next Steps
[Final Project](../FinalProject/FinalProject.md)