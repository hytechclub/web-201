# CR**U**D App - Update (POST)
Now that the "Edit Player" page loads properly, all that's left is making it actually update the player data. Create a handler function that updates the database, and hook it up to the `/edit/:id` POST endpoint.

>NOTE: Using a POST request instead of a PUT request here is kind of cheating, but it simplifies things and works just as well for our purposes.

## Hooking up an "Edit Player" Request Handler
The "Edit Player" request handler will work very similarly to the "Add Player" handler, just with an existing player ID.

1. In the **routes/player.js** file, add a new module export property named `editPlayer`
    - Make sure to add a comma after the `editPlayerPage` function
1. Set the value of `editPlayer` to be a function with `request` and `response` as parameters
1. In the body of the `editPlayer` function, log `request.body` to the console
1. After the console log, redirect to the homepage with `response.redirect('/')`
1. In the **index.js** file, under the `app.post` routes add another `app.post` to hook up the `editPlayer` function to the `/edit/:id` route:
    ```js
    app.post('/edit/:id', player.editPlayer);
    ```

Load up the "Edit Player" page for one of the players, submit the form, and verify that the form data is properly logged in the console!

## Handling the POST Data
Now that the data is properly in the back-end, it's time to put it in the database. Update the **db.js** and **routes/player.js** files to make this happen.

### DB Function
Start by creating a function that can edit an existing player's data in the database.

1. In the **db.js** file, add a new module export property named `editPlayerById`
1. Set the value of `editPlayerById` to be an `async` function with `playerId` and `playerObj` as parameters
1. In the body of the `editPlayerById` function, call `db.set` on `playerId` and `playerObj`
    - This will set the value in the DB to the new value
1. Use the `await` keyword in front of the `db.set` to properly wait for the result

#### Code
```js
editPlayerById: async function(playerId, newPlayerObj) {
    await db.set(playerId, newPlayerObj);
}
```

### Route Function
Next, update the `/edit/:id` POST handler to use the DB function to update the data in the DB. Open the **routes/player.js** file to begin.

1. In the `editPlayer` function, remove the `console.log`
1. In its place, create a new variable named `playerId`
1. Set `playerId` to `request.params.id`
1. Under that, add a call to `db.editPlayerById`, passing in `playerId` and `request.body`
1. Put the `await` keyword in front of `db.editPlayerById` to wait for it to return
1. Add the `async` keyword in front of the `editPlayer` function because it uses an `await`

#### Code
```js
editPlayer: async function (request, response) {
    let playerId = request.params.id;
    await db.editPlayerById(playerId, request.body);

    response.redirect('/');
}
```

### Testing
At this point, it should be fully possible to edit Player data in the database.

1. Run the app, and click on the "Edit" button for an existing player
1. Enter new information about the player
1. Click the "Update Player" button
1. Verify that the homepage loads with the new information!

## Next Steps
[CRU**D** App - Delete](CrudAppDelete.md)