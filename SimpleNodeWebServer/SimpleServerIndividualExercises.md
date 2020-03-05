# Simple Server: Individual Exercises
Using the "Hello World" web server as a starting point, complete the following exercises.

## Message Query Parameter
Add the ability for the user to use a new query parameter `msg` whose value will appear on the page. For example, they should be able to go to [http://127.0.0.1:3000?msg=hello](http://127.0.0.1:3000?msg=hello) and see a page that contains the text "You said hello" in the HTML. This should work for any value, e.g. `?msg=hi`, `?msg=goodbye`, `?msg=whatever`, etc.

>HINT: No `if` statement is required for this exercise!

1. In the `handleRequest` function, find the `parsedUrl` object
  - The `parsedUrl` object should have a property of `msg` for the query parameter
1. Get the value of the `msg` query parameter, and store it in a new variable
1. Use `response.write` to write the message into the HTML response: `'You said ' + msg`

## Background Color Query Parameter
Use a new query parameter, `bg`, to dynamically set the background color of the page. For example, the user should be able to go to [http://127.0.0.1:3000?bg=red](http://127.0.0.1:3000?bg=red) and see a page with a red background. This should work for any color.

The HTML to change the background color looks like this:

```html
<style>
	body {
		background-color: red;
  }
</style>
```

1. In the `handleRequest` function, use the `queryParams` object to obtain the value of a query parameter `bg`, and store it in a variable
  - This is just like getting the value of the `msg` or `world` query parameter
1. Create a new variable containing the `<style></style>` tag within a template string (surrounded with `\``)
1. Update the template string so that instead of `red`, the color is whatever the user specified with `bg`
  - HINT: replace `red` in the `style` tag with `${bg}`
1. Use `response.write` to write the _entire_ `<style></style>` tag to the response!

## Background Color Links
Instead of making the user type the query parameter into the URL, create links on the page that contain the query parameter for them!

A link would look like this:

```html
<p><a href="?orange">Make background orange</a><p>
```

1. Create a new variable containing the `<p></p>` element as a string
1. Write the `<p></p>` element to the `response` object with `response.write` 
1. Repeat the steps above to create links for "lavender" and "yellow" in addition to orange

### Challenge
1. Create an array of color strings, including `'orange', 'lavender', 'yellow'`
1. Use a `for` loop to dynamically generate the anchor elements based on the color array, and write all of them to the `response`

## CHALLENGE - Pages of People
Use this code for the `names` array:
```js
const names = [
  'Wesley Malecha',
  'Glenna Hillman',
  'Shenita Cheney',
  'Ja Woodside',
  'Rafael Wolken',
  'Samuel Studer',
  'Nadene Rita',
  'Kathie Crosland',
  'Roxanna Scogin',
  'Stan Croxton',
  'Yuki Hosch',
  'Shantae Dirksen',
  'Harriette Berthelot',
  'Jennie Parman',
  'Louanne Oland',
  'Ebony Bushey',
  'Tom Sanger',
  'Shemeka Righter',
  'Jetta Zaremba',
  'Adrianne Commons',
  'Clay Renninger',
  'Raleigh Howley',
  'Maryln Leven',
  'Dominica Paik',
  'Peter Yocum',
  'Gabriela Kubala',
  'Gino Phinney',
  'Lavona Vidal',
  'Angelique Fontanez',
  'Waldo Hagwood',
  'Jacquie Mellon',
  'Velva Vitagliano',
  'Eun Flora',
  'Virgil Trimble',
  'Kurt Mallon',
  'Donella Mcardle',
  'Maud Guider',
  'Holli Champlin',
  'Rosalie Rook',
  'Ina Leonard',
  'Eliseo Spoto',
  'Teisha Wilhoit',
  'Lachelle Augustus',
  'Kristel Dennis',
  'Jeannetta Oller',
  'Scottie Steptoe',
  'Margit Stockwell',
  'Minh Blau',
  'Maegan Burling',
  'Floria Bakley'
];
```

There are 50 total names, and there should be 10 names appearing on each page. This way, names 1-10 will appear on page 1, names 11-20 will appear on page 2, and so on. There should be dynamically-generated links at the bottom of the list to go to the "Next Page" or the "Previous Page" depending on the current page. For example, if the user is on page 2, the "Next Page" link should send them to page 3, and the "Previous Page" link should send them to page 1. If there is no next page or previous page, no link should appear.

1. Create a `names` array that contains 50 names (above)
1. Use the parsed URL object to obtain the value of a query parameter `page`
1. Convert the parameter value into a number using the `Number()` function, and store it in a variable
1. Use the `isNan()` function to check if the value is a number, and if it is not, set it to `1`
1. If the page value is less than 1 or greater than 5, set it to `1`
1. Write an `h3` with the text "People" to the response
1. Write the opening tag of a `ul` to the response
1. Use a `for` loop to dynamically write the appropriate names, each within an `li` element, to the response
    - There should be `10` names total
    - The starting point should be based on the current `page`
1. Write the closing tag of the `ul`
1. If appropriate, create an HTML link that links to the previous page, and write it to the response
1. If appropriate, create an HTML link that links to the next page, and write it to the response

## POST Request with a Form
Figure out how to use an HTML form to make a POST request to the server. 

## Anything Else!
Think about what is possible with HTML pages and query parameters and try to create something new. 