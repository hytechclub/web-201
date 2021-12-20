# C**R**UD App - Read
Follow the steps below to allow the web app to display existing data from the database.

## Getting the Data from the Database
First, define a function to get all the player data from the database.

1. In the **db.js** file, add a new module export property named `getPlayersList`
    - Make sure to add a comma after the `addPlayer` function
1. Set the value of `getPlayersList` to a new `async` function with no parameters
1. In the body of the function, create a new variable named `playerKeys`
1. Use `db.list` to get all keys prefixed with `"player"`
    - This will retrieve all the player objects inserted into the database
1. Add an `await` before `db.list` so that the code does not continue until the keys are retrieved
1. Under that, create a new empty list variable named `players`
    - This will store the nicely formed video objects
1. Create a `for` loop structure looping through `playerKeys`
1. In the body of the `for` loop, get the current key as `currentKey`
1. Retrieve the _value_ for the current key using `await db.get`
    - Store that in a variable named `currentPlayer`
1. Set the `"id"` property of the `currentPlayer` object to `currentKey`
    - This will come in handy later
1. `push` the `currentPlayer` object to the `players` list
1. Outside of the `for` loop, return the `players` list

### Code
```js
getPlayersList: async function() {
    let playerKeys = await db.list("player_");
    let players = [];
    
    for (let i = 0; i < playerKeys.length; i++) {
        let currentKey = playerKeys[i];
        let currentPlayer = await db.get(currentKey);
        currentPlayer["id"] = currentKey;

        players.push(currentPlayer);
    }

    return players;
}
```

## Passing the Data to the Page
Now that there is a way to get the data from the DB, it's time to show it on the homepage.

### Back-end Updates
Update the **routes/index.js** file to pass the data when rendering.

1. At the top the **index.js** file, `require` the **db.js** module with `require('../db')`
    - Store the value in a `const db`
1. Add an `async` keyword in front of the `getHomePage` function to make it async
1. In the body of the `getHomePage` function, above the `response.render`, create a new variable named `result`
1. Set the `result` variable to an `await`ed call to the `db.getPlayersList` function
1. Under that, create a new variable named `renderData`, set to an empty object
1. Add a `players` property to the `renderData` object, set to `result`
1. In the `response.render` call, pass in the `renderData` object

Now the **index.ejs** file will be able to access the `players` data!

### Front-end Updates
For now, the front-end will just show all the data as a JSON string.

1. Open the **index.ejs** file for editing
1. Add code to display the data from `players`
    ```html
    <%= JSON.stringify(players) %>
    ```

Run the program, and verify that it is possible to view the data from the database! It may not look pretty, but it should be there.

## Next Steps
[C**R**UD App - Read (Table)](CrudAppReadTable.md)