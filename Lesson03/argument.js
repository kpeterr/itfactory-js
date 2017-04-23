function hello() {
    console.log('Szia!');
}

hello();
hello(123); // Nem okoz gondot az argument átadás, pedig a függvényben nem szerepel paraméter
hello(123, 1, 2, 3, 15); // Itt sem

function printArguments(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

printArguments(1, 2, 3); // 1 2 3
printArguments(1, 2); // 1 2 undefined
printArguments(); // undefined undefined undefined

console.log(1, 2, 3, 4, 5, 6, 7, 'macska'); // Sok paraméter adható neki

// Ez egy olyan függvény, aminek végtelen paramétere lehet:
function printArguments2() {
    console.log(arguments);
}

printArguments2('alma', 'korte', 'dinnye'); // Egy objektum lesz az eredmény