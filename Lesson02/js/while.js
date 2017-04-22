var number = 0;

console.log('Folyamatos while ciklus:');
while (number < 5) {
    console.log(number);
    number++;
}
console.log();

number = 0;

console.log('3-nál megáll:');
while (number < 5) {
    if (number === 3) {
        // Megállítjuk a futást
        break;
    }
    console.log(number);
    number++;
}
console.log();

number = 0;

console.log('Kihagyja a 3-at:');
while (number < 5) {
    number++;
    if (number === 3) {
        // Kihagyjuk ezt a számot
        continue;
    }
    console.log(number);
}