/*
Lexikális function scope van benne:
Kicsit másképpen működik az, hogy ha létrehozok egy változót
az hol látszik és hol nem
*/

var outer = 1;

console.log(outer);

if (true) {
    var innerIf = 2;
}

console.log(innerIf); // Ez más nyelvekben error lenne

// Minden változó csak az adott függvényben használható
function func() {
    var innerFunc = 'innerFunc';
    console.log(innerFunc);
}

func();
//console.log(innerFunc); ERROR