# Simple Server: Individual Exercises
Using the "Hello World" web server as a starting point, complete the following exercises.

## More HTML
Currently, the actual HTML for the website is a little sparse. Update the homepage so that it has a little more content.

1. Find the line in the `handleRequest` function with `response.write('<h1>There is no world</h1>')`
1. Under that, still within the `else` block, add another `response.write`
1. Pass in `'<p>There are worlds other places</p>'`
  - This will add a paragraph to the page
1. Under that, add another `response.write`
1. For that one, pass in `'<img src="https://i.imgur.com/hrwSaGo.png">'`
  - This is a picture of the world
1. Under that, add one more `response.write`
1. Pass in `'<p><a href="?world=1">World 1</a></p>'`
  - This will link to the Hello World page

Run the program and refresh the page. Verify that the new HTML appears, and it is possible to go to the Hello World page!

<input type="checkbox" id="reveal1" class="reveal-checkbox" />

<label for="reveal1" class="reveal-label">Click to Reveal Code</label>

```js
if (worldParam == 1) {
  response.write('<h1>Hello World</h1>');
} else {
  response.write('<h1>There is no world</h1>');
  response.write('<p>There are worlds other places</p>');
  response.write('<img src="https://i.imgur.com/hrwSaGo.png">');
  response.write('<p><a href="?world=1">World 1</a></p>');
}
```

### A Link Back
Now, from the Hello World page, there is no way back to the main page. Fix this by writing an `<a href="?">Home</a>` element to the response.

1. Find the body of the `if (worldParam == 1)` statement
1. Under the existing `response.write`, add another `response.write`
1. Pass in `'<a href="?">Home</a>'`
  - This will link back to the homepage

Run the program and refresh the page. Verify that it is possible to go back and forth between each page!

<input type="checkbox" id="reveal2" class="reveal-checkbox" />

<label for="reveal2" class="reveal-label">Click to Reveal Code</label>

```js
if (worldParam == 1) {
  response.write('<h1>Hello World</h1>');
  response.write('<a href="?">Home</a>');
} else {
  response.write('<h1>There is no world</h1>');
  response.write('<p>There are worlds other places</p>');
  response.write('<img src="https://i.imgur.com/hrwSaGo.png">');
  response.write('<p><a href="?world=1">World 1</a></p>');
}
```

### Even More HTML
Feel free to add as much new HTML as desired. The possibilities are endless!

## A Whole New World
Now that the two pages have been filled out a little more, it's time to add another page. This one should be accessible with `?world=2` appended to the end of the base URL.

1. Find the `if` and `else` structure within the `handleRequest` function
1. In between the `if` and `else`, add an `else if`
1. For the `else if` condition, check if the `worldParam` variable is `2`
1. In the body of the `else if`, add a `response.write`
  - Pass in `'<h1>World 2</h1>'`

Run the program and open the website in a new tab.

![](https://i.imgur.com/65ny5id.png)

Add `?world=2` to the end of the URL, and verify that the new message appears!

<input type="checkbox" id="reveal3" class="reveal-checkbox" />

<label for="reveal3" class="reveal-label">Click to Reveal Code</label>

```js
if (worldParam == 1) {
  response.write('<h1>Hello World</h1>');
  response.write('<p><a href="?">Home</a></p>');
} else if (worldParam == 2) {
  response.write('<h1>World 2</h1>');
} else {
  response.write('<h1>There is no world</h1>');
  response.write('<p>There are worlds other places</p>');
  response.write('<img src="https://i.imgur.com/hrwSaGo.png">');
  response.write('<p><a href="?world=1">World 1</a></p>');
}
```

### More New World Content
Now, fill out the World 2 page a little bit.

1. Under the `response.write` in the `else if` body, add another `response.write`
1. Pass in `'<img src="https://i.imgur.com/u3wv9H8.png">'`
  - This is a picture of Super Mario
1. Under that, add another `response.write`
1. Pass in `'<p>This is Super Mario World</p>'`
1. Under that, use `response.write` to write `'<a href="?">Home</a>'`

Run the program again and refresh the `?world=2` page to verify that the new content appears!

<input type="checkbox" id="reveal4" class="reveal-checkbox" />

<label for="reveal4" class="reveal-label">Click to Reveal Code</label>

```js
if (worldParam == 1) {
  response.write('<h1>Hello World</h1>');
  response.write('<p><a href="?">Home</a></p>');
} else if (worldParam == 2) {
  response.write('<h1>World 2</h1>');
  response.write('<img src="https://i.imgur.com/u3wv9H8.png">');
  response.write('<p>This is Super Mario World</p>');
  response.write('<a href="?">Home</a>');
} else {
  response.write('<h1>There is no world</h1>');
  response.write('<p>There are worlds other places</p>');
  response.write('<img src="https://i.imgur.com/hrwSaGo.png">');
  response.write('<p><a href="?world=1">World 1</a></p>');
}
```

### Linking
Now that the new page exists, it's time to link it from the main page. Add another `response.write` in the `else` block, and pass in `'<p><a href="?world=2">World 2</a></p>'`.

Run the program again, and see how it is possible to navigate between pages!

<input type="checkbox" id="reveal5" class="reveal-checkbox" />

<label for="reveal5" class="reveal-label">Click to Reveal Code</label>

```js
if (worldParam == 1) {
  response.write('<h1>Hello World</h1>');
  response.write('<p><a href="?">Home</a></p>');
} else if (worldParam == 2) {
  response.write('<h1>World 2</h1>');
  response.write('<img src="https://i.imgur.com/u3wv9H8.png">');
  response.write('<p>This is Super Mario World</p>');
  response.write('<a href="?">Home</a>');
} else {
  response.write('<h1>There is no world</h1>');
  response.write('<p>There are worlds other places</p>');
  response.write('<img src="https://i.imgur.com/hrwSaGo.png">');
  response.write('<p><a href="?world=1">World 1</a></p>');
  response.write('<p><a href="?world=2">World 2</a></p>');
}
```

### Yet Another World
Add a World 3 to the site.

- It should be accessible by appending `?world=3` to the base URL
- It should have a header that says World 3
- There should be links to and from the new page and the Home page

Follow these instructions:

1. In the `handleResponse` function, find the `if (worldParam == 1)` statement
1. Add an `else if` checking for `worldParam == 3`
1. Within that `else if` body, use `response.write` to write an `h1` containing "World 3"
1. Under that, add another `response.write` with a link to the Home page
1. In the body of the `else` clause, make a new line at the bottom
1. Add a `response.write` with a link to the new World 3 page
1. Run the program, and verify that it is possible to navigate to the new page!

## Message Query Parameter
Add the ability for the user to use a new query parameter `msg` whose value will appear on the page. For example, they should be able to go to the Repl project url with `?msg=hello` appended and see a page that contains the text "You said hello" in the HTML. This should work for any value, e.g. `?msg=hi`, `?msg=goodbye`, `?msg=whatever`, etc.

>HINT: No `if` statement is required for this exercise!

1. In the `handleRequest` function, find the `parsedUrl` object
  - The `parsedUrl` object should have a property of `msg` for the query parameter
1. Get the value of the `msg` query parameter, and store it in a new variable
1. Use `response.write` to write the message into the HTML response: `'You said ' + msg`

<input type="checkbox" id="reveal6" class="reveal-checkbox" />

<label for="reveal6" class="reveal-label">Click to Reveal Code</label>

```js
let msgParam = queryParams.msg;
response.write(`<p>You said ${msgParam}</p>`);
```

## Background Color Query Parameter
Use a new query parameter, `bg`, to dynamically set the background color of the page. For example, the user should be able to go to the Repl project url with `?bg=red` appended, and see a page with a red background. This should work for any color.

The HTML/CSS to change the background color looks like this:

```html
<style>
	body {
		background-color: red;
  }
</style>
```

1. In the `handleRequest` function, use the `queryParams` object to obtain the value of a query parameter `bg`, and store it in a variable
  - This is just like getting the value of the `msg` or `world` query parameter
1. Create a new variable named `bgParam` containing the `<style></style>` tag within a template string (surrounded by backticks)
1. Update the template string so that instead of `red`, the color is whatever the user specified with `bg`
  - HINT: replace `red` in the `style` tag with `${bgParam}`
1. Use `response.write` to write the _entire_ `<style></style>` tag to the response!

<input type="checkbox" id="reveal7" class="reveal-checkbox" />

<label for="reveal7" class="reveal-label">Click to Reveal Code</label>

```js
let bgParam = queryParams.bg;
response.write(`<style>
body {
	background-color: ${bgParam};
}
</style>`);
```

## Background Color Links
Instead of making the user type the query parameter into the URL, create links on the page that contain the query parameter for them!

A link would look like this:

```html
<p><a href="?orange">Make background orange</a><p>
```

1. Create a new variable containing the `<p></p>` element as a string
1. Write the `<p></p>` element to the `response` object with `response.write` 
1. Repeat the steps above to create links for "lavender" and "yellow" in addition to orange

<input type="checkbox" id="reveal8" class="reveal-checkbox" />

<label for="reveal8" class="reveal-label">Click to Reveal Code</label>

```js
response.write('<p><a href="?orange">Make background orange</a><p>');
response.write('<p><a href="?lavender">Make background lavender</a><p>');
response.write('<p><a href="?yellow">Make background yellow</a><p>');
```

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