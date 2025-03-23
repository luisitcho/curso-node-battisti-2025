const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf-8', function (err, data) {

    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);

});