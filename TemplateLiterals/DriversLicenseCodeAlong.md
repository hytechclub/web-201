# Driver's License Code-Along Activity
In this activity, build a Node.js application that displays driver's license information using template literals. This activity covers:

- An Introduction to Node.js
- A Review of Functions and Conditional Statements
- An Introduction to Template Literals

## Setting Up a Node.js App
[Node.js](https://nodejs.org/) is a _JavaScript Runtime_. It allows developers to write JavaScript that runs on a server, instead of in a web browser. Node.js is mostly used to build network applications (like web servers), but it can also be used to create console apps!

### Getting Started
First, build the most basic possible Node.js app: an app that displays a message.

1. Log into repl.it
1. Create a [new Node.js project](https://repl.it/new/nodejs)
1. Name it "Driver's License App"
1. Open the **index.js** file
1. At the top of the file, add the following code:  
    ```js
    console.log("Welcome to the Driver's License App!");
    ```
1. Click the "Run" button to see the message appear in the console!

### A Driver's License
Next, add some code to display someone's driver's license. It should end up looking something like this in the console:

```
/////////////////////
| Name: Marge Simpson
| Age: 36
| Donor: true
/////////////////////
```

1. Under the `console.log`, create a new variable named `licenseStr`
    - Use `let` instead of `var`
1. Set it equal to `'/////////////////////\n'`
1. Add a `+` at the end of that line, and make a new line
1. On the next line, add the following: `'| Name: Marge Simpson\n'`
1. Continue adding each new line as part of the `licenseStr` variable
1. Log the `licenseStr` variable to the console

Run the program, and verify that the license appears!

```js
console.log("Welcome to the Driver's License App!");

let licenseStr = '/////////////////////\n' +
'| Name: Marge Simpson\n' +
'| Age: 36\n' +
'| Donor: true\n' +
'/////////////////////\n';

console.log(licenseStr);
```

## A Function
The functionality of the program is good so far, but it would be much more extendable if the code were in a function.

1. At the top of the file, define a new function named `printLicense`
    - `function printLicense() { }`
1. Copy the printing code into the body of the `printLicense` function
1. Remove the printing code from its previous location
1. Call the `printLicense` function under its definition
    - `printLicense()`

Run the program, and verify that it still prints the license!

```js
function printLicense() {
    let licenseStr = '/////////////////////\n' +
    '| Name: Marge Simpson\n' +
    '| Age: 36\n' +
    '| Donor: true\n' +
    '/////////////////////\n';

    console.log(licenseStr);
}

printLicense();
```

## A Function with Parameters
Now that the printing code is within a function, it will be possible to make it more dynamic. Instead of always printing information for Marge Simpson, print the information from some parameters.

1. Add three parameters to the `printLicense` function definition
    - `name`, `age`, and `donor`
1. Update the `printLicense` call, and pass in three arguments
    - `"Marge Simpson", 36, true`
1. In the body of the `printLicense` function, find `Marge Simpson`
1. Remove the specific name, and replace it with the `name` parameter
    - Concatenate the `'| Name: '` with the `name`, and then the `'\n'`
1. Replace the other values in the string in the same way
1. Find the call to the `printLicense` function
1. Under that, call the `printLicense` function again, passing in new values
    - `"Bart Simpson", 10, false`

Run the program, and verify that both driver's licenses appear!

```js
function printLicense(name, age, donor) {
    let licenseStr = '/////////////////////\n' +
    '| Name: ' + name + '\n' +
    '| Age: ' + age + '\n' +
    '| Donor: ' + donor + '\n' +
    '/////////////////////\n';

    console.log(licenseStr);
}

printLicense('Marge Simpson', 36, true);
printLicense('Bart Simpson', 10, false);
```

## Aside: Conditional Console Colors
When working with Node.js, it is possible to change the color of the text printed to the console. Check out [this Stack Overflow answer](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color?page=1&tab=votes#answer-41407246) for more information.

Update the code so that people older than `16` will have green licenses, and other people will have red licenses.

1. Make a new line at the top of the body of the `printLicense` function
1. There, create an `if` statement checking if `age` is more than `16`
1. In the body of the `if`, log `\x1b[32m` to the console
    - This changes whatever text comes next to green
1. After the `if` body, add an `else { }`
1. In the body of the `else`, log `\x1b[31m` to the console
    - This changes whatever text comes next to red

Run the program, and verify that the colors of the printed licenses change based on the age!

```js
if (age > 16) {
    console.log('\x1b[32m');
} else {
    console.log('\x1b[31m');
}
```

## Template Literals
Now it's finally time to learn about [template literals](https://flaviocopes.com/javascript-template-literals/)! Looking at the string printing code right now, it's a little messy. Using **template literals** can help clean them up a lot.

Template Literals are a lot like normal strings, but instead of quotes or double quotes, they use _backticks_ (`). They also allow for multi-line strings, and string interpolation. Replace the existing strings with template strings to see how much simpler they make things!

### Interpolation
The first step is to use _interpolation_. This allows developers to easily place expressions or values within strings, without having to use `+` to concatenate multiple things together! Imagine an example like this:

```js
let elevation = 1000;
let temp = 5;

console.log('The elevation is ' + elevation + 'ft and the temperature is ' + temp + ' degrees!');
```

All of those `+` and `'` can become confusing pretty quickly, especially with multiple values. Using template literals, it would look like this:

```js
console.log(`The elevation is ${elevation}ft and the temperature is ${temp} degrees!`);
```

Interpolated values begin with `${` and end with `}`. Everything within will be dynamic, based on the values of the expressions.

Update the code so that it uses template literals instead of normal strings!

1. Replace the quotes (`'`) with backticks (`) for each line
1. Remove the `+` and extra strings, so each line is back to being one string
1. Use `${name}` to insert the `name` value
1. Do the same for `${age}` and `${donor}`

Run the program, and verify that it works as expected!

```js
let licenseStr = `/////////////////////\n` +
`| Name: ${name}\n` +
`| Age: ${age}\n` +
`| Donor: ${donor}\n` +
`/////////////////////\n`;
```

### Multi-line
The other big benefit of template literals is the ability to create multiline strings. Instead of appending all of those `\n` new line characters, the new lines persist! For example:

```js
console.log(`Here is
some text`);
```

prints:

```
Here is
some text
```

Watch out for extra whitespace though! Since the whitespace matters, any extra indentation or tabs within the backticks will persist.

Update the code so that it uses _one_ template literal that spans multiple lines!

1. Remove all backticks except the first and last
1. Move the first string line to its own line
1. Remove all the `+` concatenationss
1. Remove all the `\n` characters

Run the program again, and verify that it still works as expected!

```js
	let licenseStr = `
/////////////////////
| Name: ${name}
| Age: ${age}
| Donor: ${organDonor}
////////////////////////////
`;
```

Ultimately, using template literals makes things much easier to scale and maintain. They will come in handy when working with strings in almost any situation!

## Final Code

```js
console.log("Welcome to the Driver's License App!");

function printLicense(name, age, organDonor) {
	if (age > 16) {
		console.log('\x1b[32m');
	} else {
		console.log('\x1b[31m');
	}

	let licenseStr = `
/////////////////////
| Name: ${name}
| Age: ${age}
| Donor: ${organDonor}
////////////////////////////
`;

	console.log(licenseStr);
}

printLicense('Marge Simpson', 36, true);
printLicense('Bart Simpson', 10, false);
```