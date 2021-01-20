# Callbacks Node.js App: Code-Along
Follow the instructions to create a small console app using Node.js.

**Note: Although the language is JavaScript, this is actually the _back-end_ of the stack. Node.js uses the same JavaScript as the front-end, but on the server side.**

## Setup (Repl.it)
1. Log into repl.it
1. Create a [new Node.js project](https://repl.it/new/nodejs)

## "Hello World" App
First, make a simple Node.js app that displays a "Hello World" message in the console.

1. Create a new file named **app.js** in the current directory
1. Open the file, and enter the following text:
    ```js
    console.log('Hello World');
    ```
1. Create a new file named **.replit** in the current directory
1. Open the **.replit** file, and enter the following text:
    ```js
    run = "node app.js"
    ```
1. Click the "Run" button, and verify that the message appears in the console!

## ASCII Art Bunny
Next, update the program so that it has something a little more interesting to display.

1. Comment out the "Hello World" message
1. In the **app.js** file, define a function named `drawBunny` (no parameters)
1. In the body of the `drawBunny` function, add a `console.log` statement
1. Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to create a multi-line bunny and log it to the console:
    ```
     () ()
    >(^ ^)<
     (___)
    ```

### Code
```js
function drawBunny() {
    console.log(`
 () ()
>(^ ^)<
 (___)`);
}
```

### Questions
>**Q**: What will happen when this code is run?
>
>**A**: Nothing! The `drawBunny` function is never called!

## A Function with a Callback
1. Underneath the definition for `drawBunny`, define another function named `repeat`
1. Give the `repeat` function one parameter: `callback`
    - This will be a _callback_ - a variable that holds a function
1. In the body of the `repeat` function, call the `callback` function
    - This will be whatever function is passed into the `repeat` function
1. Underneath the definition for `repeat`, _call_ the `repeat` function
1. In the call for the `repeat` function, pass in `drawBunny` as an argument

### Code
```js
function repeat(callback) {
    callback();
}

repeat(drawBunny);
```

### Questions
>**Q**: What will happen when this code is run?
>
>**A**: The `drawBunny` function will execute once because it is called once from the `repeat` function!

>**Q**: Why are there no quotes around `drawBunny`?
>
>**A**: It is not a string, it is a variable pointing to the `drawBunny` function which is an object!

## Making the `repeat` Function Repeat
So far, the `repeat` function only calls its callback once. Instead, it should have another parameter that determines how many times to call the callback.

1. In the definition of the `repeat` function, add another parameter: `numberOfTimes`
    - This parameter will determine how many times `repeat` should call the callback
1. In the body of the `repeat` function, remove the `callback()` function call
1. Add a line declaring a variable named `i` with the `let` keyword
    - For more information on using `let` instead of `var`, visit [stack overflow](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)
    - For simplicity, `let` is the modern approach to declaring variables in JavaScript
1. Under the declaration of `i`, create a `while` loop with the condition `i < numberOfTimes`
1. In the body of the `while` loop, call the `callback` function
1. Also in the body of the `while` loop, increment `i` by `1`
1. Finally, update the call to `repeat` and pass in a second argument of `3`

### Code
```js
function repeat(callback, numberOfTimes) {
    let i = 0;
    while (i < numberOfTimes) {
        callback();
        i = i+1;
    }
}

repeat(drawBunny, 3);
```

## Repeating Another Function
The usefulness of callbacks becomes clearer when there are more possibilities. Defining another ASCII art function and passing it into `repeat` should illustrate the importance of callbacks.

1. Between the `drawBunny` definition and the `repeat` definition, define a new function named `drawChefHat`
1. In the body of the `drawChefHat` function, use `console.log` to draw a chef hat to the console:
    ```
     _____
    (     )
     |   |
     |___|
    ```
1. Under the call to `repeat`, call `repeat` again
1. In the second `repeat` call, pass in `drawChefHat` and `2` as the arguments
1. Run the code to see both the bunny and the chef hat appear repeatedly!

## Final Code
```js
function drawBunny() {
    console.log(`
 () ()
>(^ ^)<
 (___)`);
}

function drawChefHat() {
    console.log(`
 _____
(     )
 |   |
 |___|`)
}

function repeat(callback, numberOfTimes) {
    let i = 0;
    while (i < numberOfTimes) {
        callback();
        i = i+1;
    }
}

repeat(drawBunny, 3);
repeat(drawChefHat, 2);
```