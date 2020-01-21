# SQL Query Challenges
Complete the following challenges in MySQL Workbench using the `movies` table in the `db` database.

### Getting Started
Execute the following SQL query to add some additional data to the table:
```sql
INSERT INTO movies
VALUES ("Billy Madison", 1995, "Comedy", "Tamra Davis", 90),
    ("The Wedding Singer", 1998, "Comedy", "Frank Coraci", 96),
    ("Reign Over Me", 2007, "Drama", "Mike Binder", 124),
    ("Grown Ups 2", 2013, "Comedy", "Dennis Dugan", 101),
    ("Spanglish", 2004, "Drama", "James L. Brooks", 131),
    ("Uncut Gems", 2019, "Thriller", "Josh Safdie & Benny Safdie", 135),
    ("I Am Chris Farley", 2015, "Documentary", "Brent Hodge & Derik Murray", 96),
    ("The Waterboy", 1998, "Comedy", "Frank Coraci", 90),
    ("Mr. Deeds", 2002, "Comedy", "Steven Brill", 96);
```

Run `SELECT * FROM movies` to make sure all of the new rows were successfully added.

## Challenge 1 - Order
Write queries to return all of the movies sorted in the following ways:
- Newest to Oldest
- Alphabetical
- Shortest to Longest

## Challenge 2 - Non-Comedies
Write a query to return the title of all non-comedy movies

## Challenge 3 - Decades
Write queries to return only the movies from the following year ranges:
- 1990-1999
- 2000-2009
- 2010-2019

## Challenge 4 - Same Years
Write a query to find all movies that were released in a year that included other movie releases. If two movies were released in the same year, they should both be present in the results.

## Challenge 5 - Same Directors
Write a query to find all movies that share a director with another movie. If two movies were directed by the same person, they should both be present in the results.

## Beyond
- Complete all of the challenges on [SQLBolt](https://sqlbolt.com)
- Create a new table `directors` with information about directors, including a unique `id`
- Update the `movies` table so that instead of storing the director's name, it stores the director's id
- Add more data