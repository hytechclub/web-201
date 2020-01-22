// Imports
const express = require('express');
const mysql = require('mysql');

// Set hosting information
const hostname = '127.0.0.1';
const port = 3000;

// Pull route functions
const {getHomePage} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');

// Configuration object
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'soccer'
}

// Create the database using the config
const db = mysql.createConnection(dbConfig);

// Function to run on connect
function connectCallback (error) {
    if (error) {
        throw error;
    }

    console.log('Connected to the database');
}

// Open the connection to the database
db.connect(connectCallback);

// Set global db variable
global.db = db;

// Initialize app
const app = express();

// Setup middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse form data client

// Set routes
app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);