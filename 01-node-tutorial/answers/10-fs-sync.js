const fs = require('fs');
const filePath = './temporary/fileA.txt';

fs.writeFileSync(filePath, 'First line\n');
fs.writeFileSync(filePath, 'Second line\n', { flag: 'a' });
fs.writeFileSync(filePath, 'Third line\n', { flag: 'a' });

const fileContents = fs.readFileSync(filePath, 'utf8');

console.log(fileContents);
