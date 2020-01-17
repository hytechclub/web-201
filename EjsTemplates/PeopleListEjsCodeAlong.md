# People List EJS: Code-Along
The current People List app works for a small number of people, but it becomes increasingly tedious to add more and more. It is frustrating, because so much of the HTML is repeated, and all of the data exists in [people.json](people.json). If only there were a way to pull the data from the JSON file into the HTML, so the server could dynamically generate each page and update the homepage accordingly... well, there is!

**EJS** (**E**mbedded **J**ava**S**cript) allows developers to use JavaScript directly in HTML templates, making them much more dynamic. The server passes a JavaScript object into the HTML based on the specific request and current data. It then renders a specific HTML page to send back up to the client for display!

## Setting Up
1. Open a terminal, and `cd` into the People List project folder
1. Run `npm install ejs --save` to install EJS and add it to the project
1. In the People List project folder, create a new folder named "views"
1. Move the "home.html" file and "person0.html" file into the "views" folder
1. Rename the files to "home.ejs" and "person.ejs"

### "app.js" Updates
Make the following updates to the "app.js" file.

1. Remove the `path` module import as it is no longer necessary
1. After the `app` variable is initialized, use the code below to set the "view engine" to "ejs"
    ```js
    app.set('view engine', 'ejs');
    ```
1. In the body of the `homePage` function, remove the current command and replace it with `response.render('home');`
1. In the `personPage` function, replace the render with `response.render('person')`
1. Remove everything from the `personPage` function except for the part where the `index` query parameter is obtained
    ```js
    function personPage(request, response) {
        let parsedUrl = url.parse(request.url, true);
        let index = Number(parsedUrl.query.index);

        response.render('person');
    }
    ```
1. Run the server, and make sure the homepage still loads along with the first person page (currently ignoring the index)

## Passing the JSON Person
The goal is to have the program dynamically generate an HTML page for each person in the [people.json](people.json) file. To do that, it is necessary to pull the correct person object from the `people.json` array based on the index, and pass it into the template.

1. At the top of the file, import the `fs` module, storing it in a `const` variable
    ```js
    const fs = require('fs');
    ```
1. Use `fs.readFileSync` and `JSON.parse` to put the `people.json` array into a variable named `peopleJson`
    ```js
    let rawdata = fs.readFileSync('../people.json');
    let peopleJson = JSON.parse(rawdata);
    ```
1. In the body of the `personPage` function, use the `index` query parameter to get the correct person from the `peopleJson` array
    ```js
    let currentPerson = peopleJson[index];
    ```
1. In the `response.render` function call, pass in a second parameter that is a new object with a `person` property of `currentPerson`
    ```js
    response.render('person', {
        person: currentPerson
    });
    ```
1. In the "person.ejs" file, add `<%= JSON.stringify(person) %>` somewhere for testing purposes
1. Run the server, load the `/person` page, and make sure that the object displayed changes based on the `index` query parameter!

## Updating the Person Page Template
Now that the `person` object is available in the "person.ejs" template, all that's left is updating the template to use the object properties!

1. Replace the existing name with a dynamic piece of code that gets the `first_name` from the `person`, and adds the `last_name` of the `person`
    - Use `<%=` to start the EJS segment
    - Use `%>` to end the EJS segment
    - All the JavaScript in between those tags will be rendered in the HTML file!
1. Replace the existing occupation with another dynamic EJS segment using `person.occupation`
1. Replace the image source (between `''`) with another dynamic EJS segment using `person.avatar`
1. Check the `/person` page with some different `index` values to see it update dynamically!

### Changing the Background Color
The background color should be green if the person is alive, and red if the person is dead. It is possible to use `if` statements in EJS segments to accomplish this.

1. Remove everything from the `head` element, and add an EJS segment using `<%` and `%>`
    - For control flow, use `<%` with no equals sign because no JavaScript should render to the template
    - Instead of rendering within EJS, these statements use HTML dynamically
1. Within the EJS segment, enter the first line of an `if` statement checking `person.alive`
    ```html
    <% if (person.alive) { %>
    ```
1. Under the EJS segment, in the "body" of the `if` statement, add a `style` element with the CSS to set the background color of the page to `mediumseagreen`
    ```html
    <style>
        body {
            background: mediumseagreen;
        }
    </style>
    ```
1. Under the HTML, add another EJS segment to close off the `if` statement: `<% } %>`
1. Load up the `/person` page, and make sure only alive people have green backgrounds!
1. In the `if` closing EJS segment, add an `else` to handle dead people
    ```html
    <% } else { %>
    ```
1. Under the EJS segment, in the "body" of the else, add a `style` element with the CSS to set the background color of the page to `red`
1. Under the HTML, add another EJS segment to close off the `else` statement
1. Load up the `/person` page, and make sure that dead people have red backgrounds!

### Code
```html
<html>
    <head> 
    <% if (person.alive) { %>
        <style>
            body {
                background: mediumseagreen;
            }
        </style>
    <% } else { %>
        <style>
            body {
                background: red;
            }
        </style>
    <% } %>
    </head>
    <body>
        <h3>Person Information</h3>
        <p>Name: <%= person.first_name + ' ' + person.last_name %></p>
        <p>Occupation: <%= person.job %></p>
        <img src='<%= person.avatar %>' />
    </body>
</html>
```

## Updating the Home Page Template
Now that the person page dynamically loads each individual person, update the home page so that the list of links is generated dynamically too!

### Setting up the Loop
1. In the "app.js" file, update the `homePage` function so that it passes `peopleJson` when rendering the page
    ```js
    response.render('home', {
        people: peopleJson
    });
    ```
1. In the "home.ejs" file, remove all of the `li` elements
    - They will be dynamically generated!
1. Within the `ul`, add an EJS segment containing a `for` loop that will loop through all of the people in the `people` array
    ```html
    <% for (let i = 0; i < people.length; i++) { %>

    <% } %>
1. In the "body" of the `for` loop, add an `li`
1. In the `li`, add an EJS segment to render the current index in the `for` loop: `<%= i %>`
1. Load up the homepage, and make sure the proper number of list items appears!

### Creating the Person Links
1. Around the `i` EJS segment, add an `a` element that will link to the person with the given `i` index
    ```html
    <li>
        <a href='/person?index=<%= i %>'>Person</a>
    </li>
    ```
1. Update the text of the Person link so that it also provides the index
1. Update the text of the Person link so that it contains the first name of the person at the given index
1. Update the text of the Person link so that it contains both the first _and_ the last name of the person
    ```html
    <a href='/person?index=<%= i %>'>
        <%= people[i].first_name + ' ' + people[i].last_name %>
    </a>
    ```
1. Load up the homepage, and make sure the links function properly!

### Code
```html
<html>
    <body>
        <h1>People List</h1>
        <p>Welcome to the list of people</p>
        <ul>
        <% for (let i = 0; i < people.length; i++) { %>
            <li>
                <a href='/person?index=<%= i %>'>
                    <%= people[i].first_name + ' ' + people[i].last_name %>
                </a>
            </li>
        <% } %>
        </ul>
    </body>
</html>
```


## Final "app.js" Code
```js
const express = require('express');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

let rawdata = fs.readFileSync('../people.json');
let peopleJson = JSON.parse(rawdata);

let app = express();
app.set('view engine', 'ejs');

function homePage(request, response) {
    response.render('home', {
        people: peopleJson
    });
}

function personPage(request, response) {
    let parsedUrl = url.parse(request.url, true);
    let index = Number(parsedUrl.query.index);
    let currentPerson = peopleJson[index];
    
    response.render('person', {
        person: currentPerson
    });
}

app.get('/', homePage);
app.get('/person', personPage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```