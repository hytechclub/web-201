# JavaScript Objects: Code-Along
Follow the instructions to create a small Node console app that creates and manipulates a JavaScript object.

## Starter App
1. Create a new [Node.js Repl project](https://repl.it/new/nodejs)
1. Name it "Car Objects"
1. Create a new file named **object.js** in the current directory
1. Open the file, and enter the following text:
    ```js
    console.log('Welcome to the car app!');
    ```
1. Create a new file named **.replit** and add `run = "node object.js"` to the file
1. Click the "Run" button, and "Welcome to the car app!" should appear in the console!

## Defining the Object
1. On the next line in the **object.js** file, create a new object variable named `myCar`
    - Use `let`, the object name, `=`, and `{}`
1. Add a `color` property with a value of `'tan'`
    - Use the property name, `:`, the value, and `,`
1. Add additional properties with the following values:
    - `year` - 1987
    - `make` - Oldsmobile
    - `model` - Cutlass Ciera

### Adding the Owner
1. In the `myCar` object definition, add another property: `owner`
1. The value of the `owner` property will be another object! Start by setting the value to an empty object (`{}`)
1. Within the `owner` object, add properties with the following values:
    - `firstName` - Jerry
    - `lastName` - Lundegaard
    - `city` - Minneapolis
    - `state` - MN

### Adding the Features
1. In the `myCar` object definition, add another property: `features`
1. The value of the `features` property will be an array! Start by setting the value to an empty array (`[]`)
1. Within the `features` array, add the following values:
    - "Heated seats"
    - "Airbags"
    - "Power steering"

The owner object should look something like this:
```js
let myCar = {
    color: 'tan',
    year: 1987,
    make: 'Oldsmobile',
    model: 'Cutlass Ciera',
    owner: {
        firstName: 'Jerry',
        lastName: 'Lundegaard',
        city: 'Minneapolis',
        state: 'MN'
    },
    features: [
        "Heated seats",
        "Airbags",
        "Power steering"
    ]
}
```

## Accessing the Object Properties
Now that the object has been created, it is possible to access the data to read or change it.

### Displaying the Current Information
1. Use a `console.log` statement to print out a message with the color of the car
    - Start the message with "The car is "
    - Use dot notation to access the `color` property of `myCar`
1. Use another `console.log` statement to print out a message with the first name of the owner
    - Start the message with "The car is owned by "
    - Use dot notation to access the `owner` property of `myCar`
    - Then, use dot notation _again_ to access the `firstName` property of `owner` (this can be chained)

```js
console.log('The car is ' + myCar.color);
console.log('The car is owned by ' + myCar.owner.firstName);
```

### Updating the Color
1. On the next line, use dot notation to set the `color` property of `myCar` to red
1. Use a `console.log` to show a message saying "Jerry painted the car. The car is now " ... and access the new color

```js
myCar.color = 'red'
console.log('Jerry painted the car. The car is now ' + myCar.color);
```

### Updating the Owner's Residence
1. On the next line, use dot notation to set the `city` property of the `owner` of `myCar` to "Fargo"
    - Use a chained dot notation to access the `city` from the `myCar` object
1. Use dot notation again to set the `state` property of the `owner` of `myCar` to "ND"
1. Use another `console.log` to show a message saying Jerry moved. It should give his current city and state of residence

```js
myCar.owner.city = 'Fargo';
myCar.owner.state = 'ND';
console.log('Jerry moved and now resides in ' + myCar.owner.city + ', ' + myCar.owner.state);
```

### Adding a Feature
Currently, the car has a few features. Add another one to the array, and then print out the total number of features.

1. Create a new variable named `carFeatures`, and use dot notation to store the `features` of the car
1. On the next line, use `push` to _add_ a new feature to the list: "Cruise control"
1. Create a new variable named `featureCount`, and use `.length` to store the number of features of the car
1. Under that, use a `console.log` to show a message with the feature count for the car

```js
let carFeatures = myCar.features;
carFeatures.push("Cruise control");
let featureCount = carFeatures.length;
console.log('The car has ' + featureCount + ' features');
```

## Final Code
```js
console.log('Welcome to the car app!');

let myCar = {
    color: 'tan',
    year: 1987,
    make: 'Oldsmobile',
    model: 'Cutlass Ciera',
    owner: {
        firstName: 'Jerry',
        lastName: 'Lundegaard',
        city: 'Minneapolis',
        state: 'MN'
    },
    features: [
        "Heated seats",
        "Airbags",
        "Power steering"
    ]
};

console.log('The car is ' + myCar.color);
console.log('The car is owned by ' + myCar.owner.firstName);

myCar.color = 'red';

console.log('Jerry painted the car. The car is now ' + myCar.color);

myCar.owner.city = 'Fargo';
myCar.owner.state = 'ND';

console.log('Jerry moved and now resides in ' + myCar.owner.city + ', ' + myCar.owner.state);

let carFeatures = myCar.features;
carFeatures.push("Cruise control");
let featureCount = carFeatures.length;
console.log('The car has ' + featureCount + ' features');
```