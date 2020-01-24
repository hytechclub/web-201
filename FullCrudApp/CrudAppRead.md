# C**R**UD - Read
Follow the steps below to allow the web app to display data from the `soccer` database.

## Getting the Homepage Data
Update the `getHomePage` function in the "index.js" file so that it pulls data from the database and renders it in the response.

1. Remove the current body of the `getHomePage` function
1. Create a new string variable named `query` that has SQL to find all players ordered by their `id`
    ```sql
    SELECT * FROM players ORDER BY id ASC;
    ```
1. In the body of the `getHomePage` function, define a new function named `queryCallback` that takes `error` and `result` as parameters
    - Note, this is a function defined _within_ another function!
1. In the body of the `queryCallback` function, check if `error` exists, and send a server error if it does
    ```js
    return response.status(500).send(error);
    ```
1. Beyond the `if (error)`, create a new variable named `renderData` with a `players` property that has a value of `result`
    - `result` contains the results of the `SELECT` query
1. Under `renderData`, use `response.render` to render the "index.ejs" page with the data from `renderData`
1. Outside of the body of the `queryCallback` function, use `db.query` to execute the `query` and pass in `queryCallback`
1. For testing purposes, update the "index.ejs" file so that it displays the data from `players`
    ```html
    <%= JSON.stringify(players) %>
    ```
1. Load up the homepage, and verify that the data from the `players` table appears in JSON form!

### "index.js"
```js
module.exports = {
    getHomePage: function (request, response) {
        // Query database to get all the players
        let query = 'SELECT * FROM players ORDER BY id ASC'; 

        // Reponse to query
        function queryCallback(error, result) {
            if (error) {
                // Send server error
                return response.status(500).send(error);
            }

            let renderData = {
                players: result
            }

            response.render('index', renderData);
        }

        // Execute query
        db.query(query, queryCallback);
    },
};
```

## Header Partial
Since this app will have multiple pages that share some HTML and CSS, it would be sensible to separate those repeated parts. Luckily, this is possible with EJS using [**partials**](https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433). Partials allow developers to pull the same blocks of template code into multiple templates!

1. In the "views" folder, create a new folder named "partials"
1. In the "partials" folder, create a new file named "header.ejs"
    - This code will be shared between multiple pages
1. The header should contain a link to [Bootstrap](https://getbootstrap.com/), some CSS, and a navigation bar
    - The code for "header.ejs" is provided below
1. Remove the current code from "index.ejs" and replace it by including the "header" partial:
    ```html
    <%- include('partials/header'); %>
    ```
1. Load up the homepage to make sure the HTML from "header.ejs" renders!

### "header.ejs"
```html
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <body>
        <div class="page-wrapper">
            <nav class="navbar">
                <span class="navbar-brand mb-0 h1" ><a href="/">Soccer Players</a></span>
            </nav>
```


The folder structure at this point should look like this:

![](https://i.imgur.com/clKZ9LJ.png)

## The Homepage Table
The goal of the homepage is to display all of the data in a nice tabular format. This is possible using an HTML `table` and some Bootstrap styles.

### The Table Structure
First, create the HTML table structure without using any actual data. This will make it easier to visualize the data.

1. Under the `include`, create a `div`
1. Within the `div`, create a `table` with a `class` of "table"
1. Within the `table`, create a `thead` with a `class` of "thead-dark"
1. Within the `thead`, create a `tr`
1. Within the `tr`, create `th`s for:
    - ID
    - First Name
    - Last Name
    - Position
    - Number
1. Under the `thead` in the `table`, create a `tbody`
1. In the `tbody`, create a `tr`
1. In the `tr`, create `td`s containing:
    - 1
    - Megan
    - Rapinoe
    - Midfielder
    - 15
1. At the bottom of the file, under the closing `div` tag, add closing tags for `div`, `body`, and `html`
    - These were opened in the "header.ejs" file
1. Load up the homepage and verify that the table appears properly!

#### "index.ejs"
```html
<%- include('partials/header'); %>
<div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <td>Megan</td>
                <td>Rapino</td>
                <td>Midfielder</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
</body>
</html>
```

### Using the Data in the Table
Now that the table structure is in place, update the EJS code so that it actually uses the data from the database. It should loop through each player, and create a new table row HTML element with all of their information.

1. Under the `tbody` opening tag, create an EJS scriptlet containing a `for` loop that will loop through `players`
    - Make sure to include the closing `<% } %>` for the loop under the `tr` closing tag!
1. Within the `td` elements, replace the example data with EJS segments that have data from `players[i]`
1. Load up the homepage, and verify that the table is populated with data from the database!

#### Code
```html
<% for (let i = 0; i < players.length; i++) { %>
    <tr>
        <td><%= players[i].id %></td>
        <td><%= players[i].first_name %></td>
        <td><%= players[i].last_name %></td>
        <td><%= players[i].position %></td>
        <td><%= players[i].number %></td>
    </tr>
<% } %>
```

### Conditional Display
If there are no players in the database, a message saying "No players found" should appear instead of the table. Use EJS scriptlets with an `if`/`else` to accomplish this.

1. Under the `div` opening tag, create an EJS scriptlet containing an `if` statement
1. Set the condition of the `if` statement to check if there are any players in the `players` array
1. Under the `table` closing tag, create an EJS scriptlet that closes the `if` statement, and starts an `else`
1. Under the `else` scriptlet, add a `p` with a `class` of "text-center" saying "No players found."
1. Under the `p`, create an EJS scriptlet that closes the `else`
1. Delete all players from the `players` table
1. Load up the homepage again to verify that the table does not appear, and the message does!

#### "index.ejs"
```html
<%- include('partials/header'); %>
<div>
<% if (players.length > 0) { %>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
        <% for (let i = 0; i < players.length; i++) { %>
            <tr>
                <td><%= players[i].id %></td>
                <td><%= players[i].first_name %></td>
                <td><%= players[i].last_name %></td>
                <td><%= players[i].position %></td>
                <td><%= players[i].number %></td>
            </tr>
        <% } %>
        </tbody>
    </table>
<% } else { %>
    <p class="text-center">No players found.</p>
<% } %>
</div>
</div>
</body>
</html>
```

## Next Steps
[**C**RUD - Create](CrudAppCreate.md)