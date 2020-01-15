# People List EJS: Code-Along
- Explain what EJS is

### Starter App
```js
const express = require('express');
const path = require('path');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();

function homePage(request, response) {
    response.sendFile(path.join(__dirname, 'home.html'));
}

function personPage(request, response) {
    let personFile;
    let parsedUrl = url.parse(request.url, true);
    let index = Number(parsedUrl.query.index);

    if (index == 0 || isNaN(index)) {
        personFile = 'person0.html';
    } else if (index == 1) {
        personFile = 'person1.html';
    }

    let personPath = path.join(__dirname, personFile);
    response.sendFile(personPath);
}

app.get('/', homePage);
app.get('/person', personPage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## Setting up
- npm installing ejs
- setting the 'view engine' to ejs
- renaming "home.html" and "person0.html" and moving them to a "views" folder
- updating the render calls, cleaning up `personPage`
- removing the `path` module

### Code
```js
const express = require('express');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();
app.set('view engine', 'ejs');

function homePage(request, response) {
    response.render('home');
}

function personPage(request, response) {
    let parsedUrl = url.parse(request.url, true);
    let index = Number(parsedUrl.query.index);

    response.render('person');
}

app.get('/', homePage);
app.get('/person', personPage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## Passing the JSON Person
- importing `fs`
- getting the people from people.json
- getting the right person object from people
- passing the person into the template
- adding `<%= JSON.stringify(person) %>` to the template to test

### Code
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
    response.render('home');
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

## Updating the Person Page Template
- adding the name (first name + last name)
    - emphasize that this is just putting JavaScript right into html
    - syntax - `<%= ...stuff... %>`
- adding the occupation
- adding the `img` `src`
- if person is alive
    - special - using `if` and CSS

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
- pass the people when rendering
- loop
- link
- name

### Code
```html
<html>
    <body>
        <h1>People List</h1>
        <p>Welcome to the list of people</p>
        <ul>
        <% for (let i = 0; i < people.length; i++) { %>
            <li>
                <a href='/person?index=<%= i %>'><%= people[i].first_name + ' ' + people[i].last_name %></a>
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