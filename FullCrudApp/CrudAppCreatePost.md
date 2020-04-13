# **C**RUD App - Create (POST)
- [Video](https://www.youtube.com/watch?v=aTndTNIx498&list=PL1P_sExxi-9PSNwmays_UE8JYllVu7P7u&index=50)
- Create a POST request handler that will take the data from the "Add Player" form and insert the new player into the `players` table. 

When a user fills out the "Add Player" form and clicks the submit button, it will send a POST request to `/add` (as specified in the attributes of the form). The data will be labeled based on the `name` attributes of the `input` elements. The server should take that POST request, and use the data to insert a new player into the `players` table in the database.

## Hooking up an "Add Player" Request Handler
1. In the **player.js** file, add a new module export property named `addPlayer`
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
1. Load up the "Add Player" page, submit the form, and verify that the form data is properly logged in the console!


## Handling the POST Data
Update the `addPlayer` function in **player.js** so that it takes the player data from the POST request and adds it to the database.

1. Remove all code from the body of the `addPlayer` function
1. Declare a new variable `first_name` and set it to the "First Name" data from the form:
    ```js
    let first_name = request.body.first_name;
    ```
1. Declare and set new variables for the other form data: `last_name`, `position`, `number`
1. Make a new string variable `query` holding an SQL `INSERT INTO` statement, e.g.:
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

## **player.js**
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
[CR**U**D - Update (GET)](CrudAppUpdateGet.md)