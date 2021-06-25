# People List: Starter App
Build an Express app to display a list of people, each with their own page containing more information about them. This will help illustrate the need for **templates**, because it will become increasingly tedious to create a page for each individual person. The data for the people is stored in a file named **people.json**.

## Getting Started
1. Log into Repl.it
1. Open and fork the [People List Starter Repl Project](https://repl.it/@JosephMaxwell/PeopleListStarter)

Nothing should happen yet. Follow the steps below to start building the server.

## A Basic Express Server
Open up the **app.js** file, and add the code for a simple web server.

1. Import the `express` and `path` modules, storing them in `const` variables
1. Create `const` variables for the hostname (`'0.0.0.0'`) and port (`8080`)
1. Create a variable named `app`, set to `express()`
1. Define a new function named `homePage` that has two parameters: `request` and `response`
1. In the body of the `homePage` function, use `response.sendFile` to send **home.html**
   - Use `path.join` to get the absolute path for **home.html**
1. Under the function, call `app.get`
   - Pass in `'/'` and `homepage` to specify that requests to the root (`'/'`) should call the `homePage` callback
1. Under that, define a function named `listenCallback`
1. Add `console.log('Server Running')` to the body of `listenCallback`
1. Finally, call `app.listen` and pass in `port`, `hostname`, and `listenCallback
1. Run the server and verify that the **home.html** document appears on the homepage!

### Code
```js
const express = require('express');
const path = require('path');

const hostname = '0.0.0.0';
const port = 8080;

let app = express();

function homePage(request, response) {
    response.sendFile(path.join(__dirname, 'home.html'));
}

app.get('/', homePage);

function listenCallback() {
    console.log('Server Running');
}

app.listen(port, hostname, listenCallback);
```

## Creating a Person Page
The people for this website should come from the **people.json** file. Note the data that appears for each person: First Name, Last Name, Avatar (image URL), Job, and Alive (boolean). The Person page should have a representation for all of this information.

### Adding the HTML
First, create a new file in the People List project folder named **people0.html**. Fill it with the following HTML:

```html
<html>
    <head>
        <style>
            body {
                background: mediumseagreen;
            }
        </style>
    </head>
    <body>
        <h3>Person Information</h3>
        <p>Name: Dorisa Wonfar</p>
        <p>Occupation: Media Manager I</p>
        <img src='https://robohash.org/facilisvitaeprovident.png?size=50x50&set=set1' />        
        <p><a href='/'>Home</a></p>
    </body>
</html>
```

Note that this person is the first from the **people.json** array. In addition to adding **people0.html**, update the **home.html** file with a link. The link should be within an `li` element in the `ul` element, and should send the user to the `/person` page.

```html
<li>
    <a href="/person">Dorisa Wonfar</a>
</li>
```

### Updating the JavaScript
Next, update the JavaScript to serve the new page.

1. In the **app.js** file, define a new function named `personPage` with two parameters: `request` and `response`
1. In the body of the `personPage` function, use `response.sendFile` to send **person0.html**
    - Use `path.join` to get the absolute path for **person0.html**
1. Outside the function, call `app.get`
1. Pass in arguments to specify that requests to the `/person` endpoint should call the `personPage` callback

Run the server to make sure the page for Dorisa loads properly!

```js
function personPage(request, response) {
    let personFile = personFile = 'person0.html';
    let personPath = path.join(__dirname, personFile);
    response.sendFile(personPath);
}

app.get('/person', personPage);
```

## Adding Multiple People with a Query Parameter
One person is good, but the app would be much better if it could show multiple people. However, it would be ideal if all of these different people could be surfaced from the same endpoint (`/person`). It is possible to change the person information based on a query parameter!

1. Create a new file in the People List project folder named **person1.html**
1. Copy the HTML code from **person0.html** into **person1.html**
1. Update **person1.html** so that it properly represents the second person from the **people.json** array
    - The background color should be `red` because Tammy is dead ☹
1. At the top of the **app.js** file, import the `url` module, and store it in a `const`
    ```js
    const url = require('url');
    ```
1. In the body of the `personPage` function, obtain the value of a query parameter `index` and store it in a variable:
    ```js
    let parsedUrl = url.parse(request.url, true);
    let index = Number(parsedUrl.query.index);
    ```
1. Create an `if` statement to check if `index` is `0` or `NaN`
    - If it is, the server should respond to the request by sending **person0.html**
1. Use an `else if` to check if `index` is `1`
    - If it is, the server should respond to the request by sending **person1.html**
1. In the **home.html** file, add a link to this second person by setting the `href` to `/person?index=1`:
    ```html
    <li><a href="/person?index=1">Tammy Dalgliesh</a></li>
    ```
1. Run the server to make sure each link works properly!

### Code
```js
const express = require('express');
const path = require('path');
const url = require('url');

const hostname = '0.0.0.0';
const port = 8080;

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
    console.log('Server Running');
}

app.listen(port, hostname, listenCallback);
```

## Adding More People
When this part is working, add another HTML page for the third person in the **people.json** array. Make sure to properly route to this new person's page based on the query parameter in the `personPage` function, and add a link on the **home.html** page. Add pages for as many of the people as possible!