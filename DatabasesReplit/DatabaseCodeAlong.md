# Video Watchlist Code-Along Activity
Follow the instructions below to create an Express web app that holds a list of video links. These video links should persist on the server by way of the [Repl.it Database](https://blog.repl.it/database).

## Getting Started
First, get a basic Node.js app up and running.

1. Create a new [Node.js Repl project](https://repl.it/new/nodejs)
1. Name it "Video Watchlist"
1. Create a new file named **app.js** in the current directory
1. For test purposes, add a `console.log('hello')` statement to **app.js** 
1. Create another new file, this one named **.replit**
1. In the **.replit** file, add `run = "node app.js"`
1. Click the "Run" button to run the program, and make sure it works so far

## A Basic Express/EJS App
Next, create a basic web server using Express and EJS.

### EJS Page
In the Repl project, start by creating a new folder named **views**. Then, within that folder, create a new file named **index.ejs**. Open the **index.ejs** file, and add the following code:

```html
<html>
    <body>
        <h1>Video Watchlist</h1>
        <p>This is a place to store all the videos you want to watch.</p>
    </body>
</html>
```

### App Code - Setup
Now, fill out the basic Express/EJS setup code in the **app.js** file. Start by removing all existing code from the file, then follow the steps below.

1. At the top, create a `const express` variable set to `require("express")`
1. Next, create a `const ejs` variable set to `require("ejs")`
1. Under that, create two `const` variables for `hostname` and `port`
    - `"0.0.0.0"` and `8080` respectively
1. Next, initialize an `app` variable by calling `express()`
1. Under that, use `app.set` to set the `"view engine"` to `"ejs"`

```js
const express = require("express");
const ejs = require("ejs");

const hostname = "0.0.0.0";
const port = 8080;

let app = express();
app.set("view engine", "ejs");
```

### App Code - Homepage
Now that the introductory part is complete, it's time to create a homepage.

1. Define a new function named `homePage`
1. Give the function two parameters: `request` and `response`
1. In the body of the function, call `response.render` and pass in `"index"`
1. Under the `homePage` definition, make some space
1. Call `app.get` and pass in `"/"` and `homePage`
    - This makes the `homePage` function run when the root URL is hit
1. Under that, define the basic `listenCallback` function
1. Finally, call `app.listen`, passing in `port`, `hostname`, and `listenCallback`

Run the program, and verify that the **index.ejs** code is properly rendered on the homepage!

```js
function homePage(request, response) {
    response.render("index");
}

app.get("/", homePage);

function listenCallback() {
    console.log("Server Running");
}

app.listen(port, hostname, listenCallback);
```

## Adding Videos
Obviously, there are no videos yet. Before viewing videos, add the ability for the user of the site to add videos to the list.

### A Form in EJS
First, open the **index.ejs** file, and add a `<form></form>` element under the existing `<p></p>` in the `<body></body>`. It should look like this:

```html
<form action="/add">
    <p>Add a new video:</p>
    <input type="text" name="link" placeholder="Video Link">
    <input type="text" name="note" placeholder="Video Note">
    <input type="submit">
</form>
```

Notice the following parts of the HTML:
- The `action` attribute set to `"/add"`
  - It will be necessary to create this endpoint in the **app.js** code
- The `name` attributes on the `<input>` elements
    - These will correspond to the video data in the database

Run the program again, and verify that the form appears on the homepage. Nothing should happen on submit yet... that comes later.

### More Setup
To prepare the code to handle someone submitting the form, start with a few more setup steps. Open up the **app.js** file, and follow the steps in the top section.

1. Create a `const url` variable set to `require("url")`
    - This module will be used to parse form results
1. Create a `const uuid` variable set to `require("uuid")`
    - This module will be used to generate unique IDs
1. Create a `const Database` variable set to `require("@replit/database")`
    - This module will allow the code to connect to the Repl.it database
1. Create a new variable named `db` and set it to `new Database()`
    - The `db` variable will be the connection!

```js
const url = require("url");
const uuid = require("uuid");
const Database = require("@replit/database");

let db = new Database();
```

### The `/add` Endpoint
Now that the database exists, it's time to add some stuff to it. Every time a user submits the form, it should take that data, generate a unique ID for it, and create a new video object in the database.

>Note: Using an HTTP `GET` request to add data is kind of cheating - it should be a `POST` request, but `GET` is a little easier to use for now

#### The `addVideo` Function - Basics
1. Under the `homePage` function definition, create some space
1. Define a new function named `addVideo`
1. Give the `addVideo` function two parameters: `request` and `response`
1. Make the `addVideo` function asynchronous by adding `async` in front of the `function` keyword

#### The `addVideo` Function - Body
1. In the body of the `addVideo` function, create a variable named `parsedUrl`
1. Set `parsedUrl` to `url.parse(request.url, true)`
    - This contains the data from the form
1. Under that, create a new variable named `newKey`
1. Set `newKey` to `"video_" + uuid.v4()`
    - This will create a new unique ID prefixed with `video_`
1. Next, call the `db.set` function
1. Pass in `newKey` for the first argument
    - This is the unique key for the created movie object
1. Pass in `parsedUrl.query` for the second argument
    - This contains all the data from the form: `link` and `note`
1.  Add the `await` keyword in front of the `db.set` call
    - This makes sure the function will not return until the value has been set
1. Finally, call `response.redirect` and pass in `"/"`

#### Hooking Up the `addVideo` Function
1. Under the `addVideo` definition, call `app.get`
1. Pass in `"/add"` as the first argument
1. Pass in `addVideo` as the second argument

Now, it should actually be possible to add some data to the database! Run the program, and verify that no errors occur when submitting the form. Go to YouTube to find some video links. For testing purposes, it may be beneficial to use `console.log` in the body of the `addVideo` function, to make sure the code is running properly.

```js
async function addVideo(request, response) {
    let parsedUrl = url.parse(request.url, true);
    let newKey = "video_" + uuid.v4();
    await db.set(newKey, parsedUrl.query);

    response.redirect("/");
}

app.get("/add", addVideo);
```

## Viewing Videos
Now there may be some videos in the database, but what good are they if no one can see them? Update the homepage so that it displays the list of videos.

### Defining the `getVideos` Function
First, define a function to retrieve data from the database, and put it in a nice manageable format.

1. Above the `homePage` function, define a new function named `getVideos`
1. Make the `getVideos` function `async`
1. In the body of the function, create a new variable named `allVideoKeys`
1. Use `db.list` to get all keys prefixed with `"video_"`
    - This will retrieve all the video objects added through `addVideo`
1. Add an `await` before `db.list` so that the code does not continue until the keys are retrieved
1. Under that, create a new empty list variable named `allVideos`
    - This will store the nicely formed video objects
1. Create a `for` loop structure looping through `allVideoKeys`
1. In the body of the `for` loop, get the current key as `currentKey`
1. Retrieve the _value_ for the current key using `await db.get`
    - Store that in a variable named `video`
1. Set the `"id"` property of the `video` object to `currentKey`
    - This will come in handy later
1. `push` the `video` object to the `allVideos` list
1. Outside of the `for` loop, return the `allVideos` list

Now, the `getVideos` should properly retrieve every video in the database! Next up, it's time to _use_ the function.

```js
async function getVideos() {
    let allVideoKeys = await db.list("video_");
    let allVideos = [];

    for (let i = 0; i < allVideoKeys.length; i++) {
        let currentKey = allVideoKeys[i];
        let video = await db.get(currentKey);
        video["id"] = currentKey;

        allVideos.push(video);
    }

    return allVideos;
}
```

### Updating the `homePage` Function
The `homePage` function should send along some data to the `"index"` template. This data should be retrieved using the `getVideos` function!

1. Find the the `homePage` function definition
1. Make the `homePage` function `async`
    - This is necessary because it will need to `await` the `getVideos` function
1. At the top of the body of the function, create a variable named `allVideos`
1. Set `allVideos` to `await getVideos()`
1. Create a new object named `renderData`
1. Set the `videos` property of `renderData` to be `allVideos`
1. Pass in `renderData` to the call to `response.render`

Now, the **index.ejs** template should have access to all the video data!

```js
async function homePage(request, response) {
    let allVideos = await getVideos();

    let renderData = {
        videos: allVideos
    };

    response.render("index", renderData);
}
```

### Updating the index.ejs Template
All that's left is to update the **index.ejs** file so that it can handle the new data it has been given. Open it up and follow the steps below.

1. Make some space above the `<form></form>` element in the HTML `body`
1. Create a `<ul></ul>` element
1. Between the `ul` tags, create a `for` loop structure with EJS
    - This should loop through the `videos` list
    - Make sure to add the `{` and `}`
1. In the body of the `for` loop, create an `li` element
1. In the body of the `li` element, create an `a` element
1. Set the `href` of the `a` to point to the current video link
    - `<%= videos[i].link %>`
1. Set the content of the `a` to be the current video note
    - `<%= videos[i].note %>`
1. Under the `</ul>`, create an `if` statement structure
1. For the `if` condition, check if the `videos` list is empty
1. In the body of the `if`, add a `p` saying no videos have been added

Run the program, and verify that some videos appear! Try adding a few more, and making sure the page updates automatically to view them. This web server is successfully storing data and surfacing it!

```html
    <ul>
    <% for (let i = 0; i < videos.length; i++) { %>
        <li>
            <a href="<%= videos[i].link %>"><%= videos[i].note %></a>
        </li>
    <% } %>
    </ul>
<% if (videos.length < 1) { %>
    <p>No videos have been added to the list 😔</p>
<% } %>
```

## Removing Videos
Now, to make the video watchlist functional, add the ability to remove videos. That way, if a user watches a video on their watchlist, they can actually remove it from the list.

### The `/delete/:id` Endpoint in JavaScript
Start by working in the **app.js** file to create a `/delete/:id` endpoint.

1. Under the `addVideo` function, define a new function named `deleteVideo`
1. Make the function `async`
1. Give the function two parameters: `request` and `response`
1. Outside the function, nder the other `app.get` calls, create another one
1. Pass in `/delete/:id` and `deleteVideo`
    - This will call the `deleteVideo` function whenever the user goes to `/delete/<some id>`
1. In the body of the `deleteVideo` function, create a variable named `videoId`
1. Set `videoId` to be `request.params.id`
    - This will be whatever comes after the slash; the `:id` in `/delete/:id`
1. Call `db.delete`, passing in the `videoId` variable
1. Add the `await` keyword in front of `db.delete`
1. Use `response.redirect` to send the user back to the root: `"/"`

Try going to a `/delete/` url with a valid `id` appended on the end. The object should disappear from the list!

```js
async function deleteVideo(request, response) {
    let videoId = request.params.id;
    await db.delete(videoId);

    response.redirect("/");
}


app.get('/delete/:id', deleteVideo);
```

### Adding a Delete Link in EJS
Now it is possible to directly delete data, but it would be nice if there were a way to do it without having to copy and paste a URL. Follow the instructions below to create a delete link that will appear next to each video. Open the **index.ejs** file to get started.

#### Styling
First, for simplicity, copy the following code into the above the `<html></html>` element, above the `<body>`:

```html
<head>
    <style>
        a.del {
            color: pink;
            text-decoration: none;
        }

        a.del:hover {
            color: red;
        }
    </style>
</head>
```

This will make things look a little nicer.

#### Adding the Link
Next, add the actual link. For a given video, the link should go to `/delete/` with the video's `id` tacked onto the end.

1. Find the `a` within the `li` in the `for` loop
1. Under that, create another `a` element
1. Add a `class` attribute of `del` (for styling purposes)
1. In the content for the `a`, paste in this times character: `✕`
1. Create an `href` attribute on the `a`
1. Set it to `"/delete/"`
1. After the slash, add EJS code to get the `id` of the current video
    - `<%= videos[i].id %>`

Run the code again, and verify that a little "X" appears next to all the videos! Clicking the "X" should make the video disappear.

```html
<a class="del" href="/delete/<%= videos[i].id %>">✕</a>
```

The video watchlist is fully functional!

## Final Code

**views/index.ejs**
```html
<html>
    <head>
        <style>
            a.del {
                color: pink;
                text-decoration: none;
            }

            a.del:hover {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Video Watchlist</h1>
        <p>This is a place to store all the videos you want to watch.</p>
        <ul>
        <% for (let i = 0; i < videos.length; i++) { %>
            <li>
                <a href="<%= videos[i].link %>"><%= videos[i].note %></a>
                <a class="del" href="/delete/<%= videos[i].id %>">✕</a>
            </li>
        <% } %>
        </ul>
    <% if (videos.length < 1) { %>
        <p>No videos have been added to the list 😔</p>
    <% } %>
        <form action="/add">
            <p>Add a new video:</p>
            <input type="text" name="link" placeholder="Video Link">
            <input type="text" name="note" placeholder="Video Note">
            <input type="submit">
        </form>
    </body>
</html>
```

**app.js**
```js
const express = require("express");
const ejs = require("ejs");
const url = require("url");
const uuid = require("uuid");
const Database = require("@replit/database");

const hostname = "0.0.0.0";
const port = 8080;

let db = new Database();
let app = express();

app.set("view engine", "ejs");

async function getVideos() {
    let allVideoKeys = await db.list("video_");
    let allVideos = [];

    for (let i = 0; i < allVideoKeys.length; i++) {
        let currentKey = allVideoKeys[i];
        let video = await db.get(currentKey);
        video["id"] = currentKey;

        allVideos.push(video);
    }

    return allVideos;
}

async function homePage(request, response) {
    let allVideos = await getVideos();

    let renderData = {
        videos: allVideos
    };

    response.render("index", renderData);
}

async function addVideo(request, response) {
    let parsedUrl = url.parse(request.url, true);
    let newKey = "video_" + uuid.v4();
    await db.set(newKey, parsedUrl.query);

    response.redirect("/");
}

async function deleteVideo(request, response) {
    let videoId = request.params.id;
    await db.delete(videoId);

    response.redirect("/");
}

app.get("/", homePage);
app.get("/add", addVideo);
app.get('/delete/:id', deleteVideo);

function listenCallback() {
    console.log("Server Running");
}

app.listen(port, hostname, listenCallback);
```

## Individual Exercises
After the code-along project is complete, go to [this page](DatabaseIndividualExercises.md) to work on some individual exercises.
