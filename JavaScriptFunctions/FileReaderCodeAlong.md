# File Reader Node.js App - Code-Along
Follow the instructions to create a small server app using Node.js. Make sure Node.js is installed before continuing.

## Set-up - GitHub Repository
>Note: To avoid using git, simply skip these steps and open Visual Studio Code with a new folder
1. Create a new empty GitHub repository at [github.com/new](https://github.com/new)
    - Fill out a proper name and description
    - Make it public, and initialize the repo with a README
2. On the repository, click "Clone or download" and copy the web URL
3. Open Visual Studio Code
4. Open the Command Prompt with `Ctrl`+`Shift`+`P`, and type in "Git Clone"
5. Paste the web URL for the repository, and press `Enter`
6. Select an appropriate folder for the project, and click "Select Repository Location"
7. When prompted, click "Open" to open the repository in VS Code

## Creating a Node Project
1. In Visual Studio Code, select "Terminal" from the menu, and select "New Terminal" from the dropdown
    - Make sure the terminal is a Git Bash instance
1. Type `npm init` and press `Enter` to run the command
    - This command will walk the user through the steps of initializing a Node.js project
1. Enter a proper name for "package name" and press `Enter`
1. Simply press `Enter` for "version" to take the default
1. Enter a description
1. For "entry point," type in "app.js"
    - This will be the starting file for the web server
1. Skip the "test command"
1. Press `Enter` for "git repository" to use the default
1. Skip the "keywords," "author," and "license"
1. Press `Enter` once more to finish creating the project!

## Running the Server
1. Create a new file named "app.js" in the current directory
    - This can be done using VS Code OR using the command line
1. Open the file in VS Code, and enter the following text:
    ```js
    console.log('Hello World');
    ```
1. In the terminal, type `node app.js` and press `Enter` to run the command
1. The script will run, and "Hello World" should appear in the console!

## Final `app.js` Code
```js
const fs = require('fs');

function removeE(error, dataString) {
    if (error) {
        console.error('Failed to open file');
    } else {
        dataString.replace('i', 'a');
        console.log(dataString);
    }
}


```