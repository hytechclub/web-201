// Imports
const express = require('express');
const mysql = require('mysql');

// Set hosting information
const hostname = '127.0.0.1';
const port = 3000;

// Pull route functions
const index = require('./routes/index');
const player = require('./routes/player');

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
let app = express();

// Setup middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse form data client

// Set routes
app.get('/', index.getHomePage);
app.get('/add', player.addPlayerPage);
app.get('/edit/:id', player.editPlayerPage);
app.get('/delete/:id', player.deletePlayer);
app.post('/add', player.addPlayer);
app.post('/edit/:id', player.editPlayer);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, hostname, listenCallback);