console.log('Module', module.exports);
var fs = require('fs');

console.log(fs.readFile);

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doubleNumber(a) {
    return multiply(a, 2);
}

module.exports = {
    add: add,
    doubleNumber: doubleNumber
}