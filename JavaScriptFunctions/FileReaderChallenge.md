# File Reader Challenge
Create a Node.js app that reads from a text file and manipulates the data. This challenge illustrates the need for callbacks, because the `fs` module requires a callback to receive the data from a file!

### Documentation
https://nodejs.org/api/fs.html

## Creating Files
1. In Visual Studio Code, create a new text file named `TextInfo.txt`
1. Edit `TextInfo.txt` so it contains some interesting text
1. In the same folder as `TextInfo.txt`, create a new JavaScript file named `FileReader.js`

## Preparing to Read Files
Open the `FileReader.js` file for editing.

1. At the top of the file, use the following command to include the File System module
    ```js
    const fs = require('fs');
    ```
1. Underneath the `require`, define a new function named `yellFile`
1. The `yellFile` function should take two parameters: `error` and `dataString`
    - For now, simply use `console.log` in the body of the `yellFile` function to say "here"
1. Underneath the `yellFile` function definition, use `fs.readFile` to read the text file
    - The `path` argument should be `'TextInfo.txt'`
    - The `options` argument should be `'utf-8'`
    - The `callback` argument should be `yellFile`
1. Open a Terminal, and make sure to be in the correct directory
1. Enter the command `node FileReader.js` to run the code and make sure "here" appears!

## Yelling the File Contents
The `yellFile` function should take the contents of the text file (as long as it can successfully open the file), and display them to the user in all caps.

1. Remove the `console.log` from the body of the `yellFile` function
1. If there is an error (stored in the `error` parameter) reading the file, display a message to the user using `console.error`
1. If there is NOT an error, convert text from the file (stored in the `dataString` parameter) to all uppercase
1. Display the uppercase text to the user with `console.log`
1. Run the code to see the text file contents in all caps!

## Elmer Fudd Translator
Define a new function named `elmerFudd` that takes a string and converts it to "Elmer Fudd Speak." Take a look at [funtranslations.com/fudd](https://funtranslations.com/fudd) to see it in action. The translation should apply the following changes to the text:
- Replace every 'th' with a 'd'
- Replace every 'r' with a 'w'
- Replace every 'l' with a 'w'

Use the `elmerFudd` function in the `fs.readFile` call to hook it up to the text file!

## Writing a File Translation
>Reference: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
Use `fs.writeFile` to write the file translation into a new file. After the file has been successfully written, write a message to the console telling the user the operation was successful.

## Dealing with User Input
> Reference: https://nodejs.org/api/readline.html
Use the `readline` module to receive input from the user. Ask the user for the following information:
- Path to the file to read
- Path to the file to write
- Which function to perform (yelling or Elmer Fudd translation)

Then, use the information the user enters to execute the program.