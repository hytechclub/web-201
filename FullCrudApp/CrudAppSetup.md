# CRUD App - Setup
- [Video](https://www.youtube.com/watch?v=PJ3kV8I8DSE&list=PL1P_sExxi-9PSNwmays_UE8JYllVu7P7u&index=31&t=0s)

## GitHub Repository
1. Create a new empty GitHub repository at [github.com/new](https://github.com/new)
    - Fill out a proper name and description
    - Make it public, and initialize the repo with a README
2. On the repository, click "Clone or download" and copy the web URL
3. Open Visual Studio Code
4. Open the Command Prompt with `Ctrl`+`Shift`+`P`, and type in "Git Clone"
5. Paste the web URL for the repository, and press `Enter`
6. Select an appropriate folder for the project, and click "Select Repository Location"
    - There is no need to create a specific folder for the project, that will happen automatically when cloned
7. When prompted, click "Open" to open the repository in VS Code

## NPM Project
1. In Visual Studio Code, in the project folder, open a Terminal
1. Run the `npm init` command to create the NPM project
    - Set the entry point to `app.js`
    - Everything else should take the default value
1. Install `express`, `mysql`, and `ejs` using `npm install --save`
1. Create a file in the project folder named `.gitignore`, and add "node_modules" to the file
    - This will tell Git to ignore the "node_modules" folder
1. Install a new package named `nodemon` globally with `npm install -g nodemon`
    - `nodemon` is a magical command line tool that rebuilds a Node app with every change
1. Create a file in the project folder named **app.js**
1. For testing purposes, add a `console.log('Hello World')` in **app.js**
1. In the terminal, run the following command:
    ```
    nodemon
    ```
1. Make a change to the **app.js** code, and notice that the app is rebuilt automatically!

The folder structure so far should look like this:

![](https://i.imgur.com/7qxPBLB.png)

## Database - MySQL Workbench
1. Open MySQL Workbench
1. Connect to the local MySQL server instance
1. Create a new database schema named `soccer`

### The `players` Table - Primary Key
This database should track information about soccer players. To ensure that each player is uniquely identifiable, they should each have an `id` that **auto-increments**. This means that, whenever a new player record is added to the table, it will automatically be given a unique `id`. The `id` can be a **primary key** because it uniquely identifies records in the table; no two records will have the same `id`. 

In the `soccer` database, create a new table named `players` with the following columns:
- `id` (integer, auto-increment, primary key)
- `first_name` (text)
- `last_name` (text)
- `position` (text)
- `number` (integer)

**SQL**
```sql
CREATE DATABASE IF NOT EXISTS soccer;
USE soccer;
CREATE TABLE IF NOT EXISTS players (
  id INTEGER AUTO_INCREMENT,
  first_name TEXT,
  last_name TEXT,
  position TEXT,
  number INTEGER,
  PRIMARY KEY (id)
);
```

### Adding Data
1. Add some rows to the `players` table using `INSERT INTO`
    - Do not specify an `id` when inserting - it will be generated automatically
1. After adding some rows, use `SELECT * FROM players` to make sure the players appear

**SQL**
```sql
INSERT INTO players (first_name, last_name, position, number)
VALUES ("Megan", "Rapinoe",  "Midfielder", 15);
```

### Preparing Authentication
In order to allow Node.js to interact with MySQL, it is necessary to update the user authentication. Run the following SQL statements to do so, assuming there is a `root` user with a password of `password`:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
```

## Next Steps
[CRUD App Setup (Code)](CrudAppSetupCode.md)