# People List EJS: Individual Exercises
Update the People List application by completing the following exercises.

## Updating the Person Page Styles
1. In the **person.ejs** file, set the font to "Chiller" if the person is dead
1. Set the font to "Arial" if the person is alive
1. Run the program, and verify that the fonts reflect the alive status of each person!

## Adding a Wrench
If the person is an engineer of any kind, they should have a wrench icon under their occupation.

1. Open the **person.ejs** file
1. Make a new line under the `<p>` that has the person's occupation
1. Create an `<%= if () { %> <%= } %>` structure
1. For the `if` condition, check if the person's `job` contains the text `'Engineer'`
    - Reference: [https://www.w3schools.com/jsref/jsref_includes.asp](https://www.w3schools.com/jsref/jsref_includes.asp)
1. In the body of the `if`, place the wrench emoji in a `p`:  
    ```html
    <p>🔧</p>
    ```
1. Run the program, and verify that "Engineer" people have a wrench on their pages!

## Moving the Avatar to the Homepage
1. Remove the avatar `<img>` from the `/person` page
1. On the homepage, update the person list so each `li` has an image before the name:
    ```html
    <li>
        <img src="" />
        <a href=""><!-- etc --></a>
    </li>
    ```
1. Update the image so that it points to the given person's avatar

## Adding Pagination
1. In the **app.js** file, in the `personPage` function, find the `response.render` call
1. Update the object passed to `response.render` so that it has an `idx` property
    - The value should be the `index` from the query parameter
1. In the **person.ejs** file, at the bottom, add an `a` that links to the previous page
    - The `href` should be `/person?index=` with the previous index (`<%= idx-1 %>`)
1. Under the "previous page" link, add another `a` that links to the next page (`<%= idx+1 %>`)

### BONUS - Dynamic Paging
1. Use EJS to create an `if` statement that shows the "previous page" link only if the current `idx` is greater than `0`
1. Use EJS to create an `if` statement that shows the "next page" link only if the current `idx` is less than `24`

## Alphabetic List Sorting
>Note: This challenge is very challenging and provides very little guidance.

1. In the **app.js** file, in the `homePage` function, add code to handle a `sort` query parameter
1. If the `sort` query parameter is `true`, send over the array of people _sorted_ in alphabetical order
1. If the `sort` query parameter is anything else, send the normal array
1. Add links on the `/home` page to sort/unsort the list of people

### Challenge - Making Sorted Pagination Work
Update the `/home` page so that, if clicking a person link while in `sort` mode, the pagination on the `/person` page will respect the alphabetic order.

## CHALLENGE - Editable Occupations
>Note: This challenge is very challenging.

Update the app so that the user can edit a person's occupation on the `/person` page.

1. On the server, create a new POST request handler that takes a person's name and their new occupation, and updates the `peopleJson` object
1. Create an HTML form on the `/person` page to get the new name from the user 