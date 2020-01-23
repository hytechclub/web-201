# **C**RUD - Create
## create add player page
- create `player.js` file in routes
- add the link in the index page and on nav bar
- require the module
- define `addPlayerPage` function
- setup `app.get` call in "app.js"
- fill out `edit-player.js`

```html
<% include partials/header.ejs %>
<div class="container">
    <form class="add-player-form" method="post" action="add/">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" name="first_name" id="first-name" required>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" name="last_name" id="last-name" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="number">Number</label>
                <input type="number" class="form-control" name="number" id="number" placeholder="Number" required>
            </div>
            <div class="form-group col-md-6">
                <label for="position">Position</label>
                <select id="position" name="position" class="form-control" required>
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

## handle "add player" post request
- define `addPlayer` function in `player.js`
- in "app.js", set up `app.use` and `app.post`
