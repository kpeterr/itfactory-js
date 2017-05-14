var number = 12;

(function (n) {
    var apple = 'alma';
    n++;
    console.log(apple + n);
})(number)

console.log(number);

// Tömben helyezünk el függvényeket
var array = [];

for (var i = 0; i < 5; i++) {
    array[i] = (function(i) { // Az "i" másolata
        return function() {
            console.log(i);
        };
    })(i);
}

array[0]();
array[1]();
array[2]();
array[3]();
array[4]();





var arrayForEach = [];

[0, 1, 2, 3, 4].forEach(function(e) {
    arrayForEach[e] = function() {
        console.log(e);
    };
});

arrayForEach[0]();
arrayForEach[1]();
arrayForEach[2]();
arrayForEach[3]();
arrayForEach[4]();






var arrayForEach2 = [0, 1, 2, 3, 4].map(function(e) {
    return function() {
        console.log(e);
    };
});

arrayForEach2[0]();
arrayForEach2[1]();
arrayForEach2[2]();
arrayForEach2[3]();
arrayForEach2[4]();