# MySQL Workbench Walkthrough
[MySQL](https://www.mysql.com/) is an open-source relational database management system (RDBMS). MySQL Workbench is a tool that allows database maintainers to interact with the data in a MySQL database.

## Connecting to MySQL
1. Open MySQL Workbench
1. Under "MySQL Connections," select the existing Local instance  
    ![](https://i.imgur.com/zpoTQRh.png)

The important panes in the instance view are the **Navigator**, the **Query**, and the **Output**. Note where each of these is located:
![](https://i.imgur.com/b1TB2dg.png)

Most of the work in the Workbench will take place in the **Query** pane, which allows developers to execute SQL queries.

## Creating a Database
The connection currently exists, but there is no database! Follow the steps below to create a new MySQL database.

1. In the **Query** pane, enter the following SQL:
    ```sql
    CREATE DATABASE IF NOT EXISTS db;
    ```
1. Click the lightning bolt icon (![](https://i.imgur.com/nvOfSLf.png)) to execute the query
1. Check the **Output** pane to make sure the query executed successfully
1. In the **Navigator**, flip to the "Schemas" view, and click the refresh icon to verify that the new `db` database appears!

![](https://i.imgur.com/GJHiofr.png)

## Creating a Table
Now the database exists, but it does not have any tables. Create a table so that the data in the database is organized and meaningful.

1. In the **Query** pane, enter the following SQL:
    ```sql
    USE db;
    ```
1. Highlight the `USE db;` text and click the lightning bolt to execute the statement
    - This statement tells the engine to use the specified database for all subsequent queries
1. In the **Query** pane, enter the following SQL:
    ```sql
    CREATE TABLE IF NOT EXISTS movies (
        title TEXT,
        year INTEGER,
        genre TEXT,
        director TEXT
    );
    ```
1. Highlight the newly added text and click the lightning bolt to execute the statement
    - This statement creates a new table in the database named `movies` with `title`, `year`, `genre`, and `director` as columns
1. In the **Navigator**, in the "Schemas" view, click the refresh icon and check that the `movies` table appears!

![](https://i.imgur.com/33yTnFG.png)

## Inserting Rows
The table exists, but it currently contains no data! Follow the steps below to add some data to the table.

1. In the **Query** pane, enter the following SQL:
    ```sql
    INSERT INTO movies
    VALUES ("Going Overboard", 1989, "Comedy", "Valerie Breiman");
    ```
1. Highlight the newly added text and click the lightning bolt to execute the statement
1. Use `SELECT * FROM movies` to check and make sure the movie was successfully added to the table
1. Insert another new movie with the following properties:
    - Title: **Sandy Wexler**
    - Year: **2017**
    - Genre: **Comedy**
    - Director: **Steven Brill**
1. Highlight the `SELECT *` query and re-execute it to make sure both movies appear!

![](https://i.imgur.com/vl4FWNX.png)

## Adding a Column
In addition to tracking all of the other Movie properties, this table should store the runtime of the movies in minutes.

1. In the **Query** pane, enter the following SQL:
    ```sql
    ALTER TABLE movies
    ADD runtime INTEGER;
    ```
1. Highlight the newly added text and click the lightning bolt to execute the statement
    - This statement will add a column to the table
1. In the **Navigator**, in the "Schemas" view, click the refresh icon and check that the `runtime` column appears!

![](https://i.imgur.com/RobCBFk.png)

## Updating Rows
Now that a new column exists, it is possible to update the existing rows with the more information.

1. In the **Query** pane, enter the following SQL:
    ```sql
    SET SQL_SAFE_UPDATES = 0;
    ```
1. Highlight the newly added text and click the lightning bolt to execute the statement
    - This statement allows developers to update rows without constraint. It is not recommended to use this setting in a real database
1. In the **Query** pane, enter the following SQL:
    ```sql
    UPDATE movies
    SET runtime = 97
    WHERE title = "Going Overboard";
    ```
1. Execute the `UPDATE` statement to set the runtime of "Going Overboard" to `97`
1. Use `SELECT * FROM movies` again to verify that the "Going Overboard" row has the proper runtime

## Deleting a Row
Rather than updating the row for "Sandy Wexler," it is possible to simply delete it.

1. In the **Query** pane, enter the following SQL:
    ```sql
    DELETE FROM movies
    WHERE title = "Sandy Wexler";
    ```
1. Execute the `DELETE` statement to remove the row
1. Use `SELECT * FROM movies` again to verify that the "Sandy Wexler" row no longer appears