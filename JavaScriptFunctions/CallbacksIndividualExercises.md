# Callbacks Node.js App: Individual Exercises
Complete the individual exercises to update the Callbacks app!

## ASCII Arrow
1. Define a new function named `drawArrow` that logs an ASCII arrow to the console: `'>>------>'`
1. Call the `repeat` function to repeat the new function 10 times
    - Pass the `drawArrow` function as the callback argument
    - Pass `10` as the second argument

## Repeat Two Functions
1. Define a new function named `repeatTwo`
1. The `repeatTwo` function should have three parameters: `callback1`, `callback2`, and `numberOfTimes`
1. Copy the body of the existing `repeat` function, and paste it into the bod of the `repeatTwo` function
1. Update the body of the `repeatTwo` function so that it calls both the `callback1` and `callback2` functions in the `while` loop
1. Finally, call the `repeatTwo` function to repeat the `drawArrow` and `drawChefHat` functions `2` times

## Repeat with Parameter
Sometimes it is necessary to call callbacks that require parameters. Follow the instructions below to practice.

### Defining a New Function with a Parameter
1. Define a new function named `exclaim`
1. The `exclaim` function should have one parameter: `message`
1. In the body of the `exclaim` function, declare a new variable named `newMessage` using `let`
1. Assign the `newMessage` variable to be the `message` parameter with an exclamation point (`!`) at the end of it
    - For example, if `message` were "hello", `newMessage` should be "hello!"
1. Use `console.log` to log the `newMessage` to the console

### Defining a New Function to Repeat Functions
1. Define a new function named `repeatWithParameter`
1. The `repeatWithParameter` function should have three parameters: `callback`, `callbackParameter`, and `numberOfTimes`
1. Copy the body of the existing `repeat` function, and paste it into the body of the `repeatWithParameter` function
1. Update the body of the `repeatWithParameter` function so that it passes the `callbackParameter` when calling the `callback` function
1. Finally, call the `repeatWithParameter` function, and make it call the `exclaim` function `3` times with a message of "hello"

## CHALLENGE - Random Function
1. Define a new function named `randomFunction`
1. The `randomFunction` function should have two parameters: `callback1`, `callback2`
1. In the body of the `randomFunction` function, declare a variable named `randomNumber` using `let`
1. Use `Math.random()` to generate a random number between 0 and 1, and store the result in the `randomNumber` variable
1. Use an `if` statement to check if `randomNumber` is less than `.5`
1. If `randomNumber` is less than `.5`, call the `callback1` function
1. Using an `else`, if `randomNumber` is NOT less than `.5`, call the `callback2` function

## CHALLENGE - Arrow Length
1. Define a new function named `drawArrowLength`
    - The function should have one parameter: `length`
1. In the body of the `drawArrowLength` function, build a string for the arrow based on the `length` parameter
    - The number of hyphen characters (`-`) should match the `length`
    - For example, if `length` were `5`, the arrow would be `>>----->`
    - If `length` were `2`, the arrow would be `>>-->`
1. Call the `repeatWithParameter` function, and make it call the `drawArrowLength` function `3` times with an arrow length of `4`

### Additional Challenge
Define a new function named `drawChefHatHeight` that changes the height of a chef's hat based on a `height` parameter. Use the `repeatWithParameter` method to call the `drawChefHatHeight` function repeatedly.