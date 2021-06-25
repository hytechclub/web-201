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

## A New "Home"
Using simple text responses can be helpful for testing, but for a real website, HTML can do a lot more. Update the homepage so that instead of simply sending text, it sends a whole HTML document.

1. Create a new HTML file named **home.html** in the project directory
1. In the **home.html** file, add some HTML to create a custom page welcoming the user
    - It should have a link to the "info" page and "new" page
    - It can also have pictures and introductory information
    - Feel free to add anything at all!
1. Update the server code so that when the user hits the `'/'` endpoint, it sends the **home.html** page
    - _HINT: Change the `handleHomeRequest` function_
    - _HINT 2: This is similar to the `handleInfoRequest` function_
1. Run the server and test it out to make sure the homepage HTML appears!

## An Info Form
In the **info.html** file, there should be an HTML form that will allow the user to enter information to be received by the server.

1. At the bottom of the `body` of the info file, add a `<form></form>` element
    - Set the `action` attribute of the form to point back to the current place: `'/info'`
1. Within the form, add a `<p></p>` that says "What type of information would you like?"
1. Under the `p`, add a text `<input />`
    - Set the `name` attribute of the input to `'infoType'`
1. Under the `input`, add another `<input />` with type `submit` and value `Submit`

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

## Dynamic Pages
>Note: This part will be fairly challenging.

Now that the server is receiving the form data, it's possible to respond dynamically!

1. Create a new HTML file named **coolInfo.html** in the project directory
1. Fill out the **coolInfo.html** file with some cool information
1. At the bottom of the HTML body, copy and paste the entire `form` element from **info.html**
    - Copying and pasting like this is not ideal, but it works for now

### Showing the Cool Page
1. Switch back to the **app.js** file, and find the `handleInfoRequest` function
1. Under the `parsedUrl` variable declaration, create a variable named `infoType`
1. Set the `infoType` variable to `queryParams.infoType`
    - This should hold whatever the user entered in the form
1. Create an `if` statement to check whether the `infoType` query parameter was "cool"
1. If the user _did_ enter "cool", set the `infoPath` to point to the new **coolInfo.html** file
1. Load up the server and enter "cool" on the `/info` page to see the content change dynamically!

## More Info Pages
Create additional HTML pages, and make the `handleInfoRequest` function properly route to them based on input from the user! This could be information about any topic. Try to add as many info pages as possible.