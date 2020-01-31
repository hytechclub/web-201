# People List: Starter App
Build an Express app to display a list of people, each with their own page containing more information about them. This will help illustrate the need for **templates**, because it will become increasingly tedious to create a page for each individual person.

## Getting Started
1. Open up a terminal, create a new folder for the People List project, and `cd` into it
1. Run `npm init`, taking all of the defaults other than setting "app.js" for the entry point
1. Install Express with `npm install express --save`
1. Create a new file in the People List project folder named "home.html"
1. Fill out the "home.html" file with a header, a paragraph, and an empty list
1. Create a new file in the People List project folder named "app.js"

## A Basic Express Server
Open up the "app.js" file, and add the code for a simple web server.

1. Import the `express` and `path` modules, storing them in `const` variables
1. Create `const` variables for the hostname (127.0.0.1) and port (3000)
1. Initialize the by calling `express()` and storing the result in a variable named `app`
1. Define a new function named `homePage` with two parameters: `request` and `response`
1. In the body of the `homePage` function, use `response.sendFile` to send "home.html"
    - Use `path.join` to get the absolute path for "home.html"
1. Use `app.get` to specify that requests to the root (`'/'`) should call the `homePage` callback
1. Define a function named `listenCallback`, and in the body, log the hostname and port
1. Finally, use `app.listen` to listen on the proper `port` and `hostname`, and pass `listenCallback` as the callback
1. Run the app with `node app.js`, and navigate to [http://127.0.0.1:3000](http://127.0.0.1:3000) to make sure it is running!

### Code
```js
const express = require('express');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();

function homePage(request, response) {
    response.sendFile(path.join(__dirname, 'home.html'));
}

app.get('/', homePage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);
```

## Creating a Person Page
The people for this website should come from the **people.json** file. Right click the <a href="people.json" target="_blank">people.json</a> link to download it into the same directory as the "app.js" file. Note the data that appears for each person: First Name, Last Name, Avatar (image), Job, and Alive (boolean). The Person page should have a representation for all of this information.

1. Create a new file in the People List project folder named "people0.html"
1. Fill out the "people0.html" file with the HTML provided below
    - Note that this person is the first in the <a href="people.json" target="_blank">people.json</a> array
1. In the "app.js" file, define a new function named `personPage` with two parameters: `request` and `response`
1. In the body of the `personPage` function, use `response.sendFile` to send "person0.html"
    - Use `path.join` to get the absolute path for "person0.html"
1. Use `app.get` to specify that requests to the `/person` endpoint should call the `personPage` callback
1. In the "home.html" file, add an `li` to the list, and link to this person page
    - The text should be the person's name
    - The `href` attribute should be `/person`

**person0.html**
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
    </body>
</html>
```

Run the server to make sure the page for Dorisa loads properly!

## Adding Multiple People with a Query Parameter
One person is good, but the app would be much better if it could show multiple people. However, it would be ideal if all of these different people could be surfaced from the same endpoint (`/person`). It is possible to change the person information based on a query parameter!

1. Create a new file in the People List project folder named "person1.html"
1. Copy the HTML code from "person0.html" into "person1.html"
1. Update "person1.html" so that it properly represents the second person from the <a href="people.json" target="_blank">people.json</a> array
    - The background color should be `red` because Tammy is dead ☹
1. At the top of the "app.js" file, import the `url` module, and store it in a `const`
    ```js
    const url = require('url');
    ```
1. In the body of the `personPage` function, obtain the value of a query parameter `index` and store it in a variable:
    ```js
    let parsedUrl = url.parse(request.url, true);
    let index = Number(parsedUrl.query.index);
    ```
1. Create an `if` statement to check if `index` is `0` or `NaN`
    - If it is, the server should respond to the request by sending "person0.html"
1. Use an `else if` to check if `index` is `1`
    - If it is, the server should respond to the request by sending "person1.html"
1. In the "home.html" file, add a link to this second person by setting the `href` to `/person?index=1`
1. Run the server to make sure each link works properly!

### Code
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

## Adding More People
When this part is working, add another HTML page for the third person in the <a href="people.json" target="_blank">people.json</a> array. Make sure to properly route to this new person's page based on the query parameter in the `personPage` function, and add a link on the "home.html" page. 