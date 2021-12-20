# CR**U**D App - Update (GET)
Add a form to the web app that will allow the user to edit the information for an existing player in the database. First, create an "Edit Player" route that will be accessible via a GET request.

## Routing the GET Handler
The GET request for the "Edit Player" page requires a player `id` to render. The `id` can be passed as a [route parameter](http://expressjs.com/en/guide/routing.html#route-parameters) in Express. The user should be able to direct their browser to `http://<base-url>/edit/5` and the handler will know that the user would like to edit the player with an `id` of `5`.

1. In the `module.exports` object in the **routes/player.js** file, define a new `editPlayerPage` function with `request` and `response` parameters
1. In the body of the `editPlayerPage` function, log `request.params.id` to the console
1. Under the log, use `request.render` to render the **edit-player.ejs** page:
    ```js
    editPlayerPage: function (request, response) {
        console.log(request.params.id);
        response.render('edit-player');
    }
    ```
1. In the **app.js** file, under the `app.get` calls, add another `app.get` to hook up `/edit/:id` to `player.editPlayerPage`
    - This means that whatever comes after the `edit/` will be mapped to the `id` property of `params` in the handler
1. Navigate to the `/edit/5` route and verify that `5` is properly logged in the console as the `id`!

## Adding the Edit Buttons
Now that the "Edit Player" route exists, the user needs a way to navigate to it! Add "Edit" buttons for each player in the home page table.

1. In the **views/index.ejs** file, add another `th` to the `table` header row with the text "Action"
1. Within the `for` loop row, add another `td` under the number `td`
1. Within the new `td`, add an `a` with the text "Edit" that points the user to `/edit/` with the player's `id`
1. Set the `class` attribute of the `a` to "btn btn-sm btn-success" to make it appear like a green button:
    ```html
    <td>
        <a href="/edit/<%= players[i].id %>" class="btn btn-sm btn-success">Edit</a>
    </td>
    ```
1. Load up the homepage, and verify that the "Edit" button links to the "Edit" page for the proper player!

At this point, the player ID should simply be logged in the console. The program will end up using that ID to get the data for a player.

## Updating the GET Handler Function
The GET handler function should query the database to find the information about the player with the given `id`. It should then pass that data along to the EJS for rendering.

### Getting the Data from the DB
Start by adding a way to get the player data from the database. Open the **db.js** file to begin.

1. In the `module.exports`, add a new property named `getPlayerById`
1. Make it an `async` function that takes `playerId` as a parameter
1. In the body of the function, create a new variable named `player`
1. Use `db.get` to get the value for the player given the `playerId`
1. Use the `await` keyword to properly return the value
1. Under that, set the `"id"` property of the `player` object to the `playerId`
1. Finally, return `player`

#### Code
```js
getPlayerById: async function(playerId) {
    let player = await db.get(playerId);
    player["id"] = playerId;

    return player;
}
```

### Getting the Data
1. Remove the code currently in the body of the `editPlayerPage` function
1. Declare a new variable `playerId` and set it to `request.params.id`
1. Under that, declare a new variable named `playerObj`
1. Use `db.getPlayerById` to get the player data for `playerId`
1. Use the `await` keyword to properly return the value
1. Make the `editPlayerPage` function asynchronous with the `async` keyword
1. Use `console.log` to log the data to the console

Load up the homepage, click one of the "Edit" buttons, and verify that the data for that player appears in the console!

## Updating the EJS
Currently, the **edit-player.ejs** file can only handle adding new players. Update the EJS so that it will dynamically handle adding _or_ editing players. If it is editing an existing player, the player data should be auto-filled in the form.

### Passing in the Render Data
Now that there are two different uses for the **edit-player.ejs** template, it will be necessary to pass in some data to distinguish them. Open the **routes/player.js** file to begin.

#### `addplayerPage`
1. Find the `addPlayerPage` function
1. At the top of the function body, create a new variable named `renderData`
1. Set the `renderData` variable to a JS object with two properties: `player` and `add`
1. Set `player` to an empty object, and `add` to `true`
1. In the call to `response.render`, pass in `renderData` as the second argument

#### `editPlayerPage`
1. Find the `editPlayerPage` function
1. Under the existing code, create a new variable named `renderData`
1. Set the `renderData` variable to a JS object with two properties: `player` and `add`
1. Set `player` to `playerObj` , and `add` to `false`
2. Call `response.render`, passing in `edit-player` and `renderData` 

Now, the template should have all the data it needs!

### Updating the EJS File
This is the tricky part. It's time to update the EJS to handle all of the data, and make it work for both adding _and_ editing players.

1. In the **edit-player.ejs** file, find the `input` for "First Name" and add a `value` attribute
1. Set the `value` attribute to an EJS segment that takes the `first_name` property from the `player` object
1. Using a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), update the EJS segment so that if `add` is `true`, it returns an empty string:
    ```html
    <%=add ? '' : player.first_name%>
    ```
1. Make similar updates for the "Last Name" and "Number" `input` elements
1. For the "Position" `select`, create a new `option` with the `selected` attribute containing an EJS segment with `player.position`
1. Wrap the new `option` in an EJS scriptlet with an `if (!add)` so that it only appears while editing an existing player
1. In the "Submit" button `input`, replace "Add" with an EJS segment that could be either "Add" or "Update":
    ```html
    <%= add ? 'Add' : 'Update' %>
    ```
1. In the main `form` element, update the `action` attribute so that it can either go to `/add` OR `/edit/{player.id}`:
    ```html
    <%=add ? 'add' : `edit/${player.id}`%>
    ```
1. Wrap the entire `form` element in an EJS scriptlet with an `if (add || player)`
    - This means if the user attempts to edit a player that does not exist, the form will not render
1. Under the `form`, add an `else` EJS scriptlet with a `p` that says "Player Not Found."
    - Give it a class of `"text-center"`
1. Load up the "Edit Player" page for a given `id`, and verify that the proper player information appears
1. Load up the "Add Player" page, and verify that everything still works the same way

#### **edit-player.ejs**
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

## Next Steps
[CR**U**D App - Update (POST)](CrudAppUpdatePost.md)
