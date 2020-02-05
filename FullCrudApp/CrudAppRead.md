# C**R**UD App - Read
Follow the steps below to allow the web app to display data from the `soccer` database.

## Getting the Homepage Data
Update the `getHomePage` function in the **index.js** file so that it pulls data from the database and renders it in the response.

1. Remove the current body of the `getHomePage` function
1. Create a new string variable named `query` that has SQL to find all players ordered by their `id`:
    ```sql
    SELECT * FROM players ORDER BY id ASC;
    ```
1. In the body of the `getHomePage` function, define a new function named `queryCallback` that takes `error` and `result` as parameters
    - Note, this is a function defined _within_ another function!
1. In the body of the `queryCallback` function, check if `error` exists, and send a server error if it does:
    ```js
    return response.status(500).send(error);
    ```
1. Beyond the `if (error)`, create a new variable named `renderData` with a `players` property that has a value of `result`
    - `result` contains the results of the `SELECT` query
1. Under `renderData`, use `response.render` to render the **index.ejs** page with the data from `renderData`
1. Outside of the body of the `queryCallback` function, use `db.query` to execute the `query` and pass in `queryCallback`
1. For testing purposes, update the **index.ejs** file so that it displays the data from `players`
    ```html
    <%= JSON.stringify(players) %>
    ```
1. Load up the homepage, and verify that the data from the `players` table appears in JSON form!

### **index.js**
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
1. In the "partials" folder, create a new file named **header.ejs**
    - This code will be shared between multiple pages
1. The header should contain a link to [Bootstrap](https://getbootstrap.com/), some CSS, and a navigation bar
    - The code for **header.ejs** is provided below
1. Remove the current code from **index.ejs** and replace it by including the "header" partial:
    ```html
    <%- include('partials/header'); %>
    ```
1. Load up the homepage to make sure the HTML from **header.ejs** renders!

### **header.ejs**
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

## Next Steps
[C**R**UD App - Read (Table)](CrudAppReadTable.md)