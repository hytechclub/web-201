# Database Individual Exercises
After completing the [code-along activity](DatabaseCodeAlong.md), work on the exercises below.

## Adding a Duration
One of the cool things about the current app setup is that it's easy to add additional fields. In addition to tracking the `link` and `note` for a video, track a new piece of data: `dur` (short for duration).

### Form Update
First, update the form so the user can enter a duration when adding a movie.

1. Open the **index.ejs** file
1. Find the `<form></form>` element
1. Within the `form`, at the bottom, add a new `input` element
1. Set the `type` attribute of the new `input` to be `"text"`
1. Set the `name` attribute of the new `input` to be `"dur"`
1. Set the `placeholder` attribute of the new `input` to be `"Video Duration"`

### List Update
Next, update the list item to display the duration in addition to the note.

1. In the **index.ejs** file, in the `for` loop, in the `li`, find the main `a` element
1. Remove all of the current content for the `a` element
1. In its place, create a new EJS block with `<%=` and `%>`
1. Within the block, use a template literal to display the current video's note _and_ duration  
    ```js
    `${videos[i].note} (${videos[i].dur})`
    ```

Run the program, and verify that new videos have a duration!

The magic here is that it is only necessary to update the **index.ejs** file. That's because the data it adds to the database includes _all_ the data from the form with `parsedUrl.query`. Any field added to the form with a `name` will be stored in the DB!

## Updating Styles
While not always necessary from a functional perspective, updating the styles for a website can have a huge impact on the user experience. Add some CSS to make the page look and feel a little more interesting. Try to make the following updates:

- Change the font
- Change the background color
- Change the text color
- Make the inputs display on new lines (instead of side-by-side)
- Add a border around the form
- Add some padding and margins as needed

## The Ability to Edit
So far, the Video Watchlist app has the ability to **C**reate, **R**ead, and **D**elete data, but one thing is missing from the full **CRUD** capabilities: **U**pdate!

Add in the ability for a user to edit an existing video in the list.

### An Existing ID Form
Start by adding a new form to the **index.ejs** template. This form should be a lot like the "Add" form, with a couple of key differences. Make the following updates in the **index.ejs** file.

1. Under the existing `</form>`, create a new `<form></form>` element
1. Set the `action` attribute to `"/edit"`
1. Add a `p` within the form saying "Edit Existing Video"
1. Under that, add an `input`
1. Give the `input` a `type` of `"text"`, a `name` of `"id"`, and a `placeholder` of `"Existing ID"`
1. Copy the other `input` elements from the "Add" form into the "Edit" form, including the `submit`
1. In the `li` within the `for` loop, add the video `id` text:  
    ```html
    <%= videos[i].id %>
    ```

Run the program, and verify that each video has an ID. The new form should also appear, but it won't do anything yet...

### Handling the Form Request
The next step is to handle requests that come from form submissions. This will be very similar to the way `/add` requests are handled. Open the **app.js** file and follow the steps below.

1. Under the `addVideo` function, define a new function named `editVideo`
1. Make the function `async`, and make it take in `request` and `response`
1. In the body of the function, create a new variable named `parsedUrl`
1. Set `parsedUrl` to `url.parse(request.url, true)`
    - This will contain the form data as query parameters
1. Under that, create a new variable named `videoObj`
1. Set `videoObj` to `parsedUrl.query`
1. Under that, create a new variable named `key`
1. Set `key` to the `"id"` property of `videoObj`
1. Now, the `"id"` on `videoObj` is no longer necessary, so delete it:  
    ```js
    delete videoObj["id"];
    ```
1. Under that, call `db.set`
1. Pass in `key` for the key and `videoObj` for the value
1. Use the `await` keyword before `db.set` to wait for the process to complete
1. Under that, call `response.redirect` and go back home (`"/"`)
1. Outside of the function definition, find the `app.get` statements
1. Use another `app.get` to hook the `"/edit"` route to the `editVideo` function

Run the program, and verify that it is possible to edit existing videos by their ID!

## Embedding YouTube Videos
>Note: this challenge provides little guidance.

One cool thing about HTML is that it's pretty easy to embed YouTube videos! Add some HTML for each video in the list to put the video right on the page.

- Figure out how to extract the video ID from the link provided on the form
- Add the YouTube Video ID to the object sent to the homepage
- Add an `iframe` on the homepage with a `src` that points to the embed URL

## Something Completely Different - SQL
While SQL will not be specifically covered in the Web 201 course, it may be valuable to learn. Go to [SQLBolt](https://sqlbolt.com/) to begin. The site explains a bit about relational databases, and then walks through a tutorial of SQL, using interactive exercises for practice.