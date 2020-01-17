# People List EJS: Individual Exercises
Update the People List application by completing the following exercises.

## Updating the Person Page Styles
1. In the "person.ejs" file, set the font to "Chiller" if the person is dead
1. Set the font to "Arial" if the person is alive
1. If the person has "Engineer" in their job title, set the text color to yellow
    - Reference: [https://www.w3schools.com/jsref/jsref_includes.asp](https://www.w3schools.com/jsref/jsref_includes.asp)

## Moving the Avatar to the Homepage
1. Remove the avatar from the `/person` page
1. On the homepage, update the person list so each `li` has an image before the name
1. Update the image so that it points to the given person's avatar

## Adding Pagination
1. In the "app.js" file, in the `personPage` function, add an `index` property to the object passed to `response.render`
    - The value should be the `index` from the query parameter
1. In the "person.ejs" file, at the bottom, add an `a` that links to the previous page
    - The `href` should be `/person?index=` with the previous index
1. Under the "previous page" link, add another `a` that links to the next page
1. Use EJS to create an `if` statement that shows the "previous page" link only if the current `index` is not `0`
1. Use EJS to create an `if` statement that shows the "next page" link only if the current `index` is not the last item in the list

## Alphabetic List Sorting
1. In the "app.js" file, in the `homePage` function, add code to handle a `sort` query parameter
1. If the `sort` query parameter is `true`, send over the array of people _sorted_ in alphabetical order
1. If the `sort` query parameter is anything else, send the normal array
1. Add links on the `/home` page to sort/unsort the list of people

### CHALLENGE - Making Pagination Work
Update the `/home` page so that, if clicking a person link while in `sort` mode, the pagination on the `/person` page will respect the alphabetic order.

## CHALLENGE - Editable Occupations
Update the app so that the user can edit a person's occupation on the `/person` page.

1. On the server, create a new POST request handler that takes a person's name and their new occupation, and updates the `peopleJson` object
1. Create an HTML form on the `/person` page to get the new name from the user 