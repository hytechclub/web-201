# CRU**D** App - Delete
The last step for the CRUD app is allowing the user to delete objects from the database. Add this ability with a GET request that includes a player's `id` as a route parameter.

## Routing the GET Handler
>NOTE: It is not best practice to use an HTTP GET request to perform a DELETE operation. However, using a GET handler in this instance works fine, so it is used for the sake of simplicity.

1. In the `module.exports` object in the **routes/player.js** file, define a new `deletePlayer` function with `request` and `response` parameters
1. In the body of the `deletePlayer` function, log `request.params.id` to the console
1. Under the log, use `response.redirect` to redirect to the homepage:
    ```js
    deletePlayer: function (request, response) {
        console.log(request.params.id);
        response.redirect('/');
    }
    ```
1. In the **app.js** file, under the `app.get` calls, add another `app.get` to hook up `/delete/:id` to `player.deletePlayer`
1. Run the app, navigate to the `/delete/5` route, and verify that `5` is properly logged in the console as the `id`!

## Adding the Delete Buttons
Now that the "Delete Player" route exists, the user needs a way to navigate to it! Add "Delete" buttons for each player in the home page table.

1. In the **views/index.ejs** file, find the `for` loop `td` with the "Edit" button
1. Within the `td`, add a new `a` with the text "Delete" that points the user to `/delete/` with the player's `id`
1. Set the `class` attribute of the `a` to "btn btn-sm btn-danger" to make it appear like a red button:
    ```html
    <a href="/delete/<%= players[i].id %>" class="btn btn-sm btn-danger">Delete</a>
    ```
1. Load up the homepage, and verify that the "Delete" button links to the "Delete" route for the proper player!

At this point, the player ID should simply be logged in the console. The program will end up using that ID to delete the player data.

## Deleting the Player from the DB
The GET handler function should delete the player with the given `id` from the database.

### DB Function
Start by creating a function that can delete a player from the database based on its ID.

1. In the **db.js** file, add a new module export property named `deletePlayerById`
1. Set the value of `deletePlayerById` to be an `async` function with `playerId` as a parameter
1. In the body of the `deletePlayerById` function, call `db.delete` on `playerId`
    - This will delete the key and value from the database
1. Use the `await` keyword in front of the `db.delete` to properly wait for the result

#### Code
```js
deletePlayerById: async function(playerId) {
    await db.delete(playerId);
}
```

### Route Function
Next, update the `/delete/:id` GET handler to use the DB function to delete the data in the DB. Open the **routes/player.js** file to begin.

1. In the `deletePlayer` function, remove the `console.log`
1. In its place, create a new variable named `playerId`
1. Set `playerId` to `request.params.id`
1. Under that, add a call to `db.deletePlayerById`, passing in `playerId`
1. Put the `await` keyword in front of `db.deletePlayerById` to wait for it to return
1. Add the `async` keyword in front of the `deletePlayer` function because it uses an `await`

#### Code
```js
deletePlayer: async function (request, response) {
    let playerId = request.params.id;
    await db.deletePlayerById(playerId);

    response.redirect('/');
}
```

At this point, it should be possible to load up the homepage and delete a player! Click the "Delete" button next to one of the players, and verify that that player disappears. Try deleting _all_ players, and verify that the "No players found." message appears.

Now all four of the CRUD operations should be working! Congratulations, you've built a CRUD app.

## Next Steps
[Final Project](../FinalProject/FinalProject.md)