# **C**RUD App - Create (GET)
Add a form to the web app that will allow the user to insert a new player into the database. First, create an "Add Player" page that will be accessible via a GET request.

## Creating the GET Route Handler
To properly handle the GET request for the "Add Player" page, it is necessary to build a handler function that renders the EJS.

1. In the "views" folder, create a new file named "edit-player.ejs"
    - For testing purposes, add an HTML header to the file saying "Add Player"
1. In the "routes" folder, create a new file named **player.js**
1. In the **player.js** file, set `module.exports` equal to a new empty object
1. In the `module.exports` object, set a property named `addPlayerPage` to a new function with `request` and `response` parameters
1. In the body of the `addPlayerPage` function, call `response.render` and pass in "edit-player"

### **player.js**
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
Update the app so that `/add` loads up the "Add Player" page.

1. In the **index.js** file, under the `index` module, `require` the `./routes/player` module and put it in `const player`
1. Under the existing `app.get` call, add another `app.get` to hook up `/add` to `player.addPlayerPage`
1. Run the app in a new tab, go to `/add`, and verify that the route loads the HTML from **edit-player.ejs**!

## Filling out the "Add Player" EJS
Now it's time to make the "Add Player" page look how it should.

### Header Partial
Since this app will have multiple pages that share some HTML and CSS, it would be sensible to separate those repeated parts. Luckily, this is possible with EJS using [**partials**](https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433). Partials allow developers to pull the same blocks of template code into multiple templates!

1. In the "views" folder, create a new folder named "partials"
1. In the "partials" folder, create a new file named **header.ejs**
    - This code will be shared between multiple pages
1. The header file should contain a link to [Bootstrap](https://getbootstrap.com/), some CSS, and a navigation bar
    - The code for **header.ejs** is provided below
1. Remove the current code from **edit-player.ejs** and replace it by including the "header" partial:
    ```html
    <%- include('partials/header'); %>
    ```
1. Load up the `/add` route to make sure the header renders!

#### header.ejs
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
				<a class="float-right" href="/add">Add a Player</a>
			</nav>
```

The folder structure at this point should look something like this:

![](https://i.imgur.com/9n0rSCO.png)

### Add Player Form
Next, update the **edit-player.ejs** file so that it properly renders an HTML form that takes in Soccer Player information.

1. Under the included header partial, create a `div` with a `class` of "container"
1. Within the "container" `div`, create a `form` that will POST to `/add/` on submit
    - Set its `method` to `"post"`
    - Set its `action` to `"/add/"`
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
1.  Create another "form-group" for Position using a `select` to provide the user with a dropdown list, including:
    - Goalkeeper
    - Defender
    - Midfielder
    - Forward
1. Under the second "form-row" `div`, add HTML for a submit button:
    ```html
    <button type="submit" class="btn btn-success float-right">Add Player</button>
    ```

Load up the "Add Player" page, and verify that the form appears and submits the proper POST request! For now, on submit it should say `Cannot POST /add/`.

### Code

**edit-player.ejs**
```html
<%- include('partials/header') %>
<div class="container">
    <form method="post" action="/add/">
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