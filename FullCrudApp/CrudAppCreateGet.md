# **C**RUD - Create (GET)
Add a form to the web app that will allow the user to insert a new player into the database. Create an "Add Player" page that will be accessible via a GET request.

## Creating the GET Route Handler
To properly handle the GET request for the "Add Player" page, it is necessary to build a handler function that renders the EJS.

1. In the "views" folder, create a new file named "edit-player.ejs"
    - For testing purposes, add an HTML header to the file saying "Add Player"
1. In the routes folder, create a new file named "player.js"
1. In the "player.js" file, set `module.exports` equal to a new empty object
1. In the `module.exports` object, set a property named `addPlayerPage` to a new function with `request` and `response` parameters
1. In the body of the `addPlayerPage` function, call `response.render` and pass in "edit-player"

### "player.js"
```js
module.exports = {
    // Load the form to add a player - GET
    addPlayerPage: function (request, response) {
        // Load the page
        response.render('edit-player');
    }
}
```

## Hooking up the Route
Update the app so that `/add` loads up the "Add Player" page, and there is a link to `/add` in the nav bar.

1. In the "app.js" file, under the `index` module, `require` the `./routes/player` module and put it in `const player`
1. Under the `app.get` call, add another `app.get` to hook up `/add` to `player.addPlayerPage`
1. In the "header.ejs" file, add an `a` to the navbar that links to the `/add` page
    ```html
    <a class="float-right" href="/add">Add a Player</a>
    ```
1. Load up the homepage, click the "Add a Player" link, and verify that the route loads the  HTML from "edit-player.ejs"

## Filling out the "Add Player" EJS
Update the "edit-player.ejs" file so that it properly renders an HTML form that takes in Soccer Player information.

1. Replace the test HTML in "edit-player.ejs" with EJS to include the "header.ejs" partial
1. Create a `div` with a `class` of "container"
1. Within the "container" `div`, create a `form` that will POST to `add/` on submit
    - Set its `method` to `"post"`
    - Set its `action` to `"add/"`
1. In the `form`, add a `div` element with a `class` of "form-row"
1. In the "form-row" `div`, create a "form-group" `div` holding the `label` and `input` for First Name:
    ```html
    <div class="form-group col-md-6">
        <label for="first-name">First Name</label>
        <input type="text" class="form-control" required>
    </div>
    ```
1. Add a `name` attribute to the `input` element with a value of "first_name"
    - This is how the form knows what data to send the server in the POST request
1. Under the First Name "form-group" `div`, create another "form-group" `div` for Last Name
1. Under the "form-row" `div`, create another "form-row" `div`
1. In the second "form-row" `div`, create a "form-group" for Number
    - Ensure that the `type` of the `input` element is "number"
1. Create another "form-group" for Position using a `select` to provide the user with a dropdown list, including:
    - Goalkeeper
    - Defender
    - Midfielder
    - Forward
1. Under the second "form-row" `div`, add HTML for a submit button:
    ```html
    <button type="submit" class="btn btn-success float-right">Add Player</button>
    ```
1. Load up the "Add Player" page, and verify that the form appears and submits the proper POST request!

### Code
```html
<%- include('partials/header') %>
<div class="container">
    <form method="post" action="add/">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" name="first_name" required>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" name="last_name" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="number">Number</label>
                <input type="number" class="form-control" name="number" required>
            </div>
            <div class="form-group col-md-6">
                <label for="position">Position</label>
                <select name="position" class="form-control" required>
                    <option>Goalkeeper</option>
                    <option>Defender</option>
                    <option>Midfielder</option>
                    <option>Forward</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-success float-right">Add Player</button>
    </form>
</div>
</div>
</body>
</html>
```

## Next Steps
[**C**RUD App - Create (POST)](CrudAppCreatePost.md)