const fs = require('fs');
let rawdata = fs.readFileSync('foods.json');
let foods = JSON.parse(rawdata);