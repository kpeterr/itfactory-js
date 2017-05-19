// Na ezt soha az életben ne használjuk :-)
var car = {type: 'Fiat', km: 123};

console.log(car.type);

var km = 12; // Nem ezt használja a with, hiszen ez nem az objektum része
// De mi van, ha én ezt akarom használni

// Ezzel az objektummal csinálj valamit
// Nagyon lassú és veszélyes dolgok tudnak belőle kijönni
with (car) {
    console.log(km);
}