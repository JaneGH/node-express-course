const names = require('./04-names');
const greet = require('./05-utils');
const items = require('./06-alternative-flavor');
require('./07-mind-grenade');

console.log(names);
greet(names.john);
greet(names.jane);
greet(names.juliana);

console.log(items.item1);
console.log(items.item2);
console.log(items.mySun);
