// for ciklussal egy tömb elemeit összeadom
var array = [1, 2, 3, 4, 5];

var outputFor = 0; // Kell ez a változó ...

for (var i = 0; i < array.length; i++) { // ...és ez is
    outputFor += array[i];
}
console.log(outputFor);


// forEach-csel egy tömb elemeit összeadom

var outputForEach = 0; // Még itt is kell ez a változó
array.forEach(function(e) {
    outputForEach += e;
});
console.log(outputForEach);


// mindezt szebben is meg lehet oldani reduce-szal
// nem kell hozzá semmilyen segédváltozó
console.log(array.reduce(function(acc, e) {
    return acc + e;
}, 0));

// kezdő érték nélkül is működik, ilyenkor a tömb első eleme lesz a kezdő érték
console.log(array.reduce(function(acc, e) {
    return acc + e;
}));

// arrow function-nel így néz ki
console.log(array.reduce((acc, e) => acc + e));