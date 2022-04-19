# **C**RUD App - Create (POST)
Create a POST request handler that will take the data from the "Add Player" form and insert the new player into the database. 

When a user fills out the "Add Player" form and clicks the submit button, it will send a POST request to `/add` (as specified in the attributes of the form). The data will be labeled based on the `name` attributes of the `input` elements. The server should take that POST request, and use the data to insert a new player into the database.

## Hooking up an "Add Player" Request Handler
1. In the **routes/player.js** file, add a new module export property named `addPlayer`
    - Make sure to add a comma after the `addPlayerPage` function
1. Set the value of `addPlayer` to be a function with `request` and `response` as parameters
1. In the body of the `addPlayer` function, log `request.body` to the console
1. After the console log, redirect to the homepage with `response.redirect('/')`
1. In the **app.js** file, under the `app.set`, tell the `app` to use the proper middleware to handle POST data:
    ```js
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    ```
1. In the **app.js** file, under the `app.get` routes, add an `app.post` to hook up the `addPlayer` function to the `/add` route:
    ```js
    app.post('/add', player.addPlayer);
    ```

Load up the "Add Player" page, submit the form, and verify that the form data is properly logged in the console!

## Handling the POST Data
Now that the data is properly in the back-end, it's time to put it in the database. Update the **db.js** and **routes/player.js** files to make this happen.

### DB Function
Start by creating a function that can add a new player object to the database.

1. In the **db.js** file, add a new module export property named `addPlayer`
1. Set the value of `addPlayer` to be an `async` function with `playerObj` as a parameter
1. In the body of the `addPlayer` function, create a new variable named `newId`
1. Set `newId` to the "player_" prefix, plus a new UUID
    - This will be the unique key for the database
1. Under that, call `db.set` to set the key (`newId`) to the value (`playerObj`)
1. Use the `await` keyword in front of the `db.set` so it returns properly

#### Code
```js
module.exports = {
	addPlayer: async function(playerObj) {
		let newId = "player_" + uuid.v4();
		await db.set(newId, playerObj);
	}
}
```

### Route Function
Next, update the `/add` POST handler to use the DB function to insert the data into the database.

1. At the top the **routes/player.js** file, `require` the **db.js** module with `require('../db')`
    - Store the value in a `const db`
1. In the `addPlayer` function, remove the `console.log`
1. In its place, add a call to `db.addPlayer`, passing in `request.body` for the player object
1. Put the `await` keyword in front of `db.addPlayer` so it returns properly
1. Add the `async` keyword in front of the function because it uses an `await`

#### Code
```js
const db = require('../db.js');

module.exports = {
  addPlayerPage: function (request, response) {
    response.render('edit-player');
  },
  
  addPlayer: async function (request, response) {
    await db.addPlayer(request.body);
    response.redirect('/');
  }
}
```

### Testing
At this point, it should be fully possible to add Player data to the database.

1. Run the app, and go to the `/add` page
1. Enter information about a new player
1. Click the "Add Player" button
1. Verify that the homepage loads
1. In Repl, open the Database section on the left, and verify that there is some data in there!

![](https://i.imgur.com/S6jlU9U.png)

## Next Steps
[C**R**UD - Read](CrudAppRead.md)