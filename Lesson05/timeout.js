setTimeout(function() {
    console.log('1 second later');
}, 1000);

// A javascript egy egyszálú programnyelv
// Tehát egyszerre nem tud több szálat futattni
// Arra jó, hogy sok apró dolgot csináljunk

var count = 1245123451;
while (count > 0) {
    count--;
}

console.log('End');