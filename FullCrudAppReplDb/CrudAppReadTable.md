# C**R**UD App - Read (Table)
The goal of the homepage is to display all of the data in a nice tabular format. This is possible using an HTML `table` and some Bootstrap styles.

## The Table Structure
First, create the HTML table structure without using any actual data. This will make it easier to visualize the data. Open the **views/index.ejs** file and remove all the existing code to get started.

1. Add an `include` to include the header
    - `<%- include('partials/header'); %>`
1. Under the `include`, create a `div`
1. Within the `div`, create a `table` with a `class` of "table"
1. Within the `table`, create a `thead` with a `class` of "thead-dark"
1. Within the `thead`, create a `tr`
1. Within the `tr`, create `th`s for:
    - First Name
    - Last Name
    - Position
    - Number
1. Under the `thead` in the `table`, create a `tbody`
1. In the `tbody`, create a `tr`
1. In the `tr`, create `td`s containing:
    - Megan
    - Rapinoe
    - Midfielder
    - 15
1. At the bottom of the file, under the closing `div` tag, add closing tags for `div`, `body`, and `html`
    - These were opened in the **header.ejs** file
1. Load up the homepage and verify that the table appears properly!

### **index.ejs**
```html
<%- include('partials/header'); %>
<div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
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

## Using the Data in the Table
Now that the table structure is in place, update the EJS code so that it actually uses the data from the database. It should loop through each player, and create a new table row HTML element with all of their information.

1. Under the `tbody` opening tag, create an EJS scriptlet containing a `for` loop that will loop through `players`
    - Make sure to include the closing `<% } %>` for the loop under the `tr` closing tag!
1. Within the `td` elements, replace the example data with EJS segments that have data from `players[i]`
1. Load up the homepage, and verify that the table is populated with data from the database!

### Code
```html
<% for (let i = 0; i < players.length; i++) { %>
    <tr>
        <td><%= players[i].first_name %></td>
        <td><%= players[i].last_name %></td>
        <td><%= players[i].position %></td>
        <td><%= players[i].number %></td>
    </tr>
<% } %>
```

## Conditional Display
If there are no players in the database, a message saying "No players found" should appear instead of the table. Use EJS scriptlets with an `if`/`else` to accomplish this.

1. Under the `div` opening tag, create an EJS scriptlet containing an `if` statement
1. Set the condition of the `if` statement to check if there are any players in the `players` array
1. Under the `table` closing tag, create an EJS scriptlet that closes the `if` statement, and starts an `else`
1. Under the `else` scriptlet, add a `p` with a `class` of "text-center" saying "No players found."
1. Under the `p`, create an EJS scriptlet that closes the `else`

Unfortunately, there is no way to test this without removing all keys from the database. Test out the feature after implementing the **D**elete functionality!

The code in the **index.ejs** file should look something like this:

```html
<%- include('partials/header'); %>
<div>
<% if (players.length > 0) { %>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
        <% for (let i = 0; i < players.length; i++) { %>
            <tr>
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
[CR**U**D - Update (GET)](CrudAppUpdateGet.md)