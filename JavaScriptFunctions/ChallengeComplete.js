const fs = require('fs');

function removeE(error, dataString) {
    if (error) {
        console.error('Failed to open file');
    } else {
        let upperString = dataString.toUpperCase();
        console.log(upperString);
    }
}

fs.readFile('TextInfo.txt', 'utf-8', removeE);