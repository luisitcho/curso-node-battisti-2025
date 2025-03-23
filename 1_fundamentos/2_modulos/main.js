const fs = require('fs');

fs.readFile('file.txt', 'utf-8', function (err, data) {

    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);

});