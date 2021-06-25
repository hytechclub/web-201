# Food JSON Challenges
Complete the following challenges using an existing JSON dataset. There is a **foods.json** file that contains a JSON array with objects that represent chain restaurants and their menu items.

### Starting Code
Open and fork the [starter Repl project](https://repl.it/@JosephMaxwell/FoodsStarter) to begin. The project contains the **foods.json** file, along with some starter code in a file named **food.js**:

```js
const fs = require('fs');
let rawData = fs.readFileSync('foods.json');
let foods = JSON.parse(rawData);
```

This code takes the array from the **foods.json** file and converts it into a JavaScript object `foods`. After this step, the `foods` variable becomes an array that contains all of the JSON data.

## Challenges
For each of the challenges, write code to search the `foods` array and print out the results for the query. Try to make it as user-friendly as possible. For example, the output could look something like this:

```
--Highest Calorie Counts--
Chipotle: Chorizo Burrito
Panera: Mac and Cheese Breadbowl
...
```

1. Find the item with the highest calorie count from each restaurant
1. Find the item with the lowest calorie count from each restaurant
1. Find the total number of items offered at each restaurant
    - Make sure to ignore any food item that has a `correctedTerm` property, because those are duplicates
1. Find and list all of the restaurants that offer burgers (i.e., have a food item with a `foodType` of "Burger")
1. Find and list all of the restaurants that offer breakfast
1. For each restaurant, find and list every item that has more than 1000 calories

## Super Challenge - Calorie Calculator
Create a new file named **calories.js** that will serve as a separate node application. Update the **.replit** file to run this file instead of **food.js**. The Calorie Calculator application should ask a user for a restaurant, then ask them for items they ordered at the restaurant. Then, it should use the `foods` object to find each food item and calculate the total number of calories for the order. It should tell the user the total calorie count.

For help receiving input from the user, check out the documentation for Node's [`readline` module](https://nodejs.org/api/readline.html#readline_readline). It uses callbacks to allow programs to respond to a user's input after prompting them with a question.