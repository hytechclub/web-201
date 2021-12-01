# JavaScript Objects: Individual Exercises
Complete the exercises below to practice working with JavaScript objects and arrays.

## Setup
To begin, open and fork [this Repl project](https://replit.com/@HylandOutreach/ObjectsIndividualStarter). In the **app.js** file, it contains this `movies` array:

```js
let movies = [
    {
        title: 'Mulan',
        runtime: 97,
        theater: 1,
        showtimes: [
            '5:40PM',
            '7:25PM',
            '10:05PM',
        ]
    },
    {
        title: 'Godzilla vs. Kong',
        runtime: 102,
        theater: 2,
        showtimes: [
            '5:30PM',
            '6:50PM',
            '7:20PM',
            '9:05PM',
            '10:10PM'
        ]
    },
    {
        title: 'Fargo',
        runtime: 98,
        theater: 3,
        showtimes: [
            '11:59PM',
        ]
    },
]
```

Use the `movies` array to complete the exercises below. Add code at the bottom of the **app.js** file.

## Get the First Movie Title and Runtime
1. Create a new variable named `movie1`
1. Get the first movie object in the list (Mulan), and store it in the `movie1` variable
1. Under that, create a new variable named `movie1Title`, and store the title of `movie1`
1. Under that, create a new variable named `movie1Runtime`, and store the runtime of `movie1`
1. Display a message to the user telling them the name of the movie, and how long it is
    - Make sure to specify that the runtime is in minutes

## Add a Showtime to the Third Movie
1. Create a new variable named `movie3`
1. Get the third movie object from the `movies` array, and store it the `movie3` variable
1. Under that, create a new variable named `movie3Showtimes`, and store the `showtimes` of `movie3`
1. Add a showtime of "9:45PM" to `movie3Showtimes`
1. Under that, create a new variable named `movie3ShowtimesCount`, and store the count of the `showtimes` for `movie3`
1. Display a message to the user telling them the number of showtimes for the third movie

## Swap Theaters
1. Create a new variable named `movie2`
1. Get the second movie object from the `movies` array, and store it in the `movie2` variable
1. Under that, set the `theater` property for the second movie to `3`
1. Under that, set the `theater` property for the third movie to `2`
1. Display a message to the user telling them which theater the second movie is in
    - Use `movie2.theater` in the message

## Another Movie
1. Outside of the original `movies` array, create a new object named `nextMovie`
1. The object should have the following properties:
    - `title` - "Spider-Man: Into the Spider-Verse"
    - `runtime` - `117`
    - `theater` - `4`
1. The object should also have a `showtimes` property, which is an array containing:
    - "6:15PM"
    - "7:30PM"
    - "9:05PM"
1. Under the creation of the `nextMovie` object, add it to the end of the `movies` array
1. Display a message to the user telling them the title of the fourth movie

## CHALLENGE - All Movies
Use a `for` loop to print out the titles of all movies currently showing

## CHALLENGE - Movies at 9:05PM
Use a `for` loop to print out the title and runtime of any movie that has a 9:05PM showtime
