const fs = require('fs');

// Write to temp.txt
fs.promises.writeFile('temp.txt', 'Line 1\n')
    .then(() => {
        console.log('First line written.txt');
        return fs.promises.appendFile('temp.txt', 'Line 2\n');
    })
    .then(() => {
        console.log('Second line written.txt');
        return fs.promises.appendFile('temp.txt', 'Line 3\n');
    })
    .then(() => {
        console.log('Third line written.txt');
        return fs.promises.readFile('temp.txt', 'utf8');
    })
    .then((data) => {
        console.log('Content of temp.txt:');
        console.log(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
