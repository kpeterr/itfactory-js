// Kivételkezelés
// Megállítja a program futását és azt jelzi, hogy ott valami hiba történt (ahol a throw van)

var number = 0;

try {
    checkNumber()
} catch (e) { // Elkapja a hibát és lefuttatja a következő blokkot:
    console.log(e.stack); // Egy bővebb információval tér vissza
    number = 1;
}

console.log(5 / number);

function checkNumber() {
    if (number === 0) {
        throw new Error('Can\'t divide by zero');
    }
}