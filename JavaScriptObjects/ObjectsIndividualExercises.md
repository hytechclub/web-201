# JavaScript Objects: Individual Exercises
Complete the exercises below to practice working with JavaScript objects and arrays. Start with the following `movies` array:

```js
let movies = [
    {
        title: 'Mulan',
        runtime: 97,
        showtimes: [
            '5:40PM',
            '7:25PM',
            '10:05PM',
        ]
    },
    {
        title: 'Godzilla vs. Kong',
        runtime: 102,
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
        showtimes: [
            '11:59PM',
        ]
    },
]
```

## Get the First Movie Title and Runtime
1. Get the title of the first movie in the `movies` array, and store it in a variable
1. Get the runtime of the first movie in the `movies` array, and store it in a variable
1. Display a message to the user telling them the name of the movie, and how long it is
    - Make sure to specify that the runtime is in minutes

## Add a Showtime to the Third Movie
1. Get the third movie object from the `movies` array, and store it in a variable
1. Add a showtime of "9:45PM" to the showtimes array for the third movie

## Swap Theaters
1. Change the theater number for the second movie to `3`
1. Change the theater number for the third movie to `2`

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
1. Add the `nextMovie` object to the end of the `movies` array

## CHALLENGE - All Movies
Use a `for` loop to print out the titles of all movies currently showing

## CHALLENGE - Movies at 9:05PM
Use a `for` loop to print out the title and runtime of any movie that has a 9:05PM showtime