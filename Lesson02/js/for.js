for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log();
console.log('Végigmegyünk egy tömb elemein:');
var array = ['morzsi', 'zsemle', 'tappancs'];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log();
console.log('Végigmegyünk egy objektum elemein:');
var obj = {a: 1, b: 2, c: 3};

for (var key in obj) {
    console.log(key);
    console.log(obj[key]);
}