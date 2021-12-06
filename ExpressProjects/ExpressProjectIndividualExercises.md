# Express Web Server: Individual Exercises
Complete the following exercises to update the Express project and personalize it.

## A New Page
First, create yet another possible route for the website. This one should display a message of "This is a new page!" when the user appends `/new` to the URL. This will be very similar to how the existing pages are set up, so use those as a reference.

1. Find the definition for the `handleHomeRequest` function in the **app.js** file
1. Under that, define a new function named `handleNewRequest`
1. Give the function two parameters: `request` and `response`
1. In the body of the `handleNewRequest` function, call `response.send`
1. Pass in `'This is a new page!'` to the `response.send` call
1. Under the function definitions, find the `app.get` calls
1. Under those, add a new `app.get` call
    - For the first argument, pass in `'/new'` (route for URL)
    - For the second argument, pass in `handleNewRequest` (function name)
1. Run the server, open the site in a new tab, and append `/new` to the URL
1. Verify that the message for the new page appears!

<input type="checkbox" id="reveal1" class="reveal-checkbox" />

<label for="reveal1" class="reveal-label">Click to Reveal Code</label>

```js
function handleNewRequest(request, response) {
  response.send('This is a new page!');
}

app.get('/new', handleNewRequest);
```

## A New "Home"
Using simple text responses can be helpful for testing, but for a real website, HTML can do a lot more. Update the homepage so that instead of simply sending text, it sends a whole HTML document.

1. Create a new HTML file named **home.html** in the project directory
1. In the **home.html** file, add some HTML to create a custom page welcoming the user
    - It should have a header that says "Home"
    - It should have links to the **Info** page and **New** page
    - It can also have pictures and introductory information
    - Feel free to add anything at all!
1. In the body of the `handleHomeRequest` function, replace the existing code with a new variable named `homePath`
1. Set the `homePath` variable to be a call to `path.join`, passing in `__dirname` and the filename
    - _HINT: This is similar to the `handleInfoRequest` function_
1. Under that, use `response.sendFile` to send the `homePath` file
1. Run the server and test it out to make sure the homepage HTML appears!

<input type="checkbox" id="reveal2" class="reveal-checkbox" />

<label for="reveal2" class="reveal-label">Click to Reveal Code</label>

```js
function handleHomeRequest(request, response) {
  let homePath = path.join(__dirname, 'home.html'); // assuming a 'home.html' file exists
  response.sendFile(homePath);
}
```

## Yet Another Page
Add another endpoint with another HTML page for the site! This will be similar to how the **Home** and **Info** pages work. This new page should be all about your favorite food.

### Creating the HTML
1. Create a new HTML file named **food.html** in the project directory
1. In the **food.html** file, add some HTML to create a page
    - It should have a header with your favorite food
    - It should have a picture of your favorite food
    - It should have a link to the **Home** page
    - It can have anything else you want on it too

### Creating the Handler Function
1. Open the **app.js** file for editing
1. Under the `handleInfoRequest` function, define a new function
    - Name it `handleFoodRequest`
    - Give it two parameters: `request` and `response`
1. In the body of the function, create a new variable named `foodPath`
1. Set the `foodPath` variable to `path.join`, passing in `__dirname` and the filename
1. Under that, use `response.sendFile` to send the `foodPath` file

### Hooking Up the Route 
1. Find the `app.get` function calls in the **app.js** file
1. Under those, make another `app.get` call
1. Pass in `/food` for the route, and `handleFoodRequest` for the function

### Adding a Link from Home
1. Open the **home.html** file for editing
1. Somewhere in the file, add an `<a href="/food">` to link to the **Food** page

Run the server and verify that it is now possible to go to the **Food** page!

## An Info Form
In the **info.html** file, there should be an HTML form that will allow the user to enter information to be received by the server.

1. At the bottom of the `body` of the info file, add a `<form></form>` element
    - Set the `action` attribute of the form to point back to the current place: `'/info'`
1. Within the form, add a `<p></p>` that says "What type of information would you like?"
1. Under the `p`, add a text `<input />`
    - Set the `name` attribute of the input to `'infoType'`
1. Under the `input`, add another `<input />` with type `submit` and value `Submit`

<input type="checkbox" id="reveal3" class="reveal-checkbox" />

<label for="reveal3" class="reveal-label">Click to Reveal Code</label>

```html
<form action="/info">
    <p>What type of information would you like?</p>
    <input type="text" name="infoType" />
    <input type="submit" value="Submit" />
</form>
```

### Receiving the Form Request
In the **app.js** file, in the `handleInfoRequest` function, there should be code to properly handle GET requests from the new form. The form information will be sent as query parameters.

1. At the top of the **app.js** file, import the `url` module, and store it in a `const` named `url`  
    ```js
    const url = require('url');
    ```
1. In the body of the `handleInfoRequest` function, find the `infoPath` variable declaration
1. Under that, declare a new variable named `parsedUrl`
1. Set the `parsedUrl` variable to the result of a call to `url.parse`
    - Pass in `request.url` for the first argument
    - Pass in `true` for the second argument
1. Under that, create a new variable named `queryParams`
1. Set the `queryParams` variable to `parsedUrl.query`
1. Under that, use `console.log` to display the `queryParams` variable
1. Load up the server, navigate to the `/info` page, and submit the form to see the `query` object in the console!

<input type="checkbox" id="reveal4" class="reveal-checkbox" />

<label for="reveal4" class="reveal-label">Click to Reveal Code</label>

```js
function handleInfoRequest(request, response) {
    let infoPath = path.join(__dirname, 'info.html');
    let parsedUrl = url.parse(request.url, true);
    let queryParams = parsedUrl.query;
    console.log(queryParams);
    response.sendFile(infoPath);
}
```

## Dynamic Pages - Penguins
>Note: This part will be fairly challenging.

Now that the server is receiving the form data, it's possible to respond dynamically!

### Creating the Penguin Page HTML
Start by creating a new HTML document containing information about penguins.

1. Create a new HTML file named **penguinInfo.html** in the project directory
1. Fill out the **penguinInfo.html** file with some information about penguins
    - For example, a group of penguins in the water is called a raft but on land they’re called a waddle!
1. At the bottom of the HTML body, copy and paste the entire `form` element from **info.html**
    - Copying and pasting like this is not ideal, but it works for now

### Showing the Penguin Page
1. Switch back to the **app.js** file, and find the `handleInfoRequest` function
1. Under the `parsedUrl` variable declaration, create a variable named `infoType`
1. Set the `infoType` variable to `queryParams.infoType`
    - This should hold whatever the user entered in the form
1. Create an `if` statement to check whether the `infoType` query parameter was "penguin"
1. If the user _did_ enter "penguin", set the `infoPath` to point to the new **penguinInfo.html** file
1. Load up the server and enter "penguin" on the `/info` page to see the content change dynamically!

<input type="checkbox" id="reveal5" class="reveal-checkbox" />

<label for="reveal5" class="reveal-label">Click to Reveal Code</label>

```js
function handleInfoRequest(request, response) {
    let infoPath = path.join(__dirname, 'info.html');

    let parsedUrl = url.parse(request.url, true);
    let queryParams = parsedUrl.query;
    
    let infoType = queryParams.infoType;
    if (infoType == 'penguin') {
      infoPath = path.join(__dirname, 'penguinInfo.html');
    }

    console.log(queryParams);
    response.sendFile(infoPath);
}
```

## Another Dynamic Page - Giraffes
Next, create another dynamic info page - this one should be about giraffes.

### Creating the Giraffe Page HTML
Start by creating a new HTML document containing information about giraffes.

1. Create a new HTML file named **giraffeInfo.html** in the project directory
1. Fill out the **giraffeInfo.html** file with some information about giraffes
    - For example, giraffes are the tallest mammals on earth
1. At the bottom of the HTML body, copy and paste the entire `form` element from **info.html**
    - Copying and pasting like this is not ideal, but it works for now

### Showing the Giraffe Page
1. Switch back to the **app.js** file, and find the `handleInfoRequest` function
1. Under the `if (infoType == penguin)` check, add an `else if`
1. For the `else if` condition, check if the query parameter was "giraffe"
1. If the user _did_ enter "giraffe", set the `infoPath` to point to the new **giraffeInfo.html** file
1. Load up the server and enter "giraffe" on the `/info` page to see the content change dynamically!

## More Info Pages
Create additional HTML pages, and make the `handleInfoRequest` function properly route to them based on input from the user! This could be information about any topic. Try to add as many info pages as possible.