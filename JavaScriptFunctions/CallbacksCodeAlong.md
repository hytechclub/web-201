# Callbacks Node.js App - Code-Along
Follow the instructions to create a small console app using Node.js. Make sure Node.js is installed before continuing.

## Running the Server
1. Create a new file named "app.js" in the current directory
    - This can be done using VS Code OR using the command line
1. Open the file in VS Code, and enter the following text:
    ```js
    console.log('Hello World');
    ```
1. Open a new terminal in VS Code by selecting `Terminal`->`New Terminal` from the menu
    - Make sure the shell is set to `bash`
1. In the terminal, type `node app.js` and press `Enter` to run the command
1. The script will run, and "Hello World" should appear in the console!

## Final `app.js` Code
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

function repeat(fn, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        fn();
    }
}

repeat(drawChefHat, 3);
repeat(drawBunny, 2);
```