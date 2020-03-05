# Express Web Server Project: Individual Exercises
Complete the following exercises to update the Express project and personalize it.

## A New "Home"
1. Create a new HTML file named **home.html** in the project directory
1. In the **home.html** file, add some HTML to create a custom page welcoming the user
    - It should have a link to the "info" page
    - It can also have pictures and introductory information
1. Update the server code so that when the user hits the `'/'` endpoint, it sends the **home.html** page
1. Run the server and test it out to make sure the homepage appears

## An Info Form
In the **info.html** file, there should be an HTML form that will allow the user to enter information to be received by the server.

1. At the bottom of the `body` of the info file, add a `<form></form>` element
    - Set the `action` attribute of the form to point back to the current place: `'/info'`
1. Within the form, add a `<p></p>` that says "What type of information would you like?"
1. Under the `p`, add a text `<input />`
    - Set the `name` attribute of the input to `'infoType'`
1. Under the `input`, add another `<input />` with type `submit` and value `Submit`

### Receiving the Form Request
In the **app.js** file, in the `handleInfoRequest` function, there should be code to properly handle GET requests from the new form. The form information will be sent as query parameters.

1. At the top of the **app.js** file, import the `url` module, and store it in a `const` named `url`
1. In the body of the `handleInfoRequest` function, under the `infoPath` variable declaration, parse the url using `url.parse`
    - Store this in a variable named `parsedUrl`
1. Log the `query` property from the `parsedUrl` object
1. Load up the server, navigate to the `/info` page, and submit the form to see the `query` object in the console!

## Dynamic Pages
Now that the server is receiving the form data, it's possible to respond dynamically!

1. Create a new HTML file named **coolInfo.html** in the project directory
1. Fill out the **coolInfo.html** file with some cool information
1. At the bottom of the HTML body, copy and paste the entire `form` element from **info.html**
    - Copying and pasting like this is not ideal, but it works for now

### Showing the Cool Page
1. Switch back to the **app.js** file, and find the `handleInfoRequest` function
1. Under the `parsedUrl` variable declaration, get the `infoType` from the `query` object, and store it in a variable
    - This should hold whatever the user entered in the form
1. Create an `if` statement to check whether the `infoType` query parameter was "cool"
1. If the user _did_ enter "cool", set the `infoPath` to point to the new **coolInfo.html** file
1. Load up the server and enter "cool" on the `/info` page to see the content change dynamically!

## More Info Pages
Create additional HTML pages, and make the `handleInfoRequest` function properly route to them based on input from the user!