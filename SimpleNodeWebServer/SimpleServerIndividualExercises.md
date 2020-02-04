# Simple Server: Individual Exercises
Using the "Hello World" web server as a starting point, complete the following exercises.

## Message Query Parameter
1. Use the parsed URL object to obtain the value of a query parameter `msg`, and store it in a variable
1. Use a template string and string interpolation to create an HTML paragraph element with the text "You said `<msg>`" and write it to the `response` object
1. If the user did not specify a `msg` query parameter, say "You said nothing" instead
    - This can be determined by checking if `msg` is equal to `undefined`

## Background Color Query Parameter
1. Use the parsed URL object to obtain the value of a query parameter `bg`, and store it in a variable
1. Write a `<style></style>` HTML element to the `response` object that sets the background color of the whole page to be what the user specified with the query parameter

## Background Color Links
1. Use a template string to create an HTML anchor element within a paragraph
    - Set the `href` attribute of the `a` element to "?orange"
    - Set the text of the `a` element to "Make background orange"
1. Write the `a` paragraph to the `response` object
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