const { writeFile, appendFile, readFile } = require('fs').promises;

// Write to temp.txt
writeFile('temp.txt', 'Line 1\n')
    .then(() => {
        console.log('First line written');
        return appendFile('temp.txt', 'Line 2\n');
    })
    .then(() => {
        console.log('Second line written');
        return appendFile('temp.txt', 'Line 3\n');
    })
    .then(() => {
        console.log('Third line written');
        return readFile('temp.txt', 'utf8');
    })
    .then((data) => {
        console.log('Content of temp.txt:');
        console.log(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
