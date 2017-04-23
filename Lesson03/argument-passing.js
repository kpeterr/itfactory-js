var outerNumber = 1;

// Lemásoljuk a szám értékét
function incrementNumber(number) {
    // és amit itt csinálunk vele az itt is marad
    number++
    console.log(number, 'in the function');
}

incrementNumber(outerNumber);
console.log(outerNumber, 'outside'); // Marad 1 az értéke

/////// OBJEKTUM /////////

var outerObj = {number: 1};
// Ez a függvény hivatkozik az objektumra és nem másolja le
function incrementObject(obj) {
    obj.number++;
    console.log(obj.number, 'in the function');
}

incrementObject(outerObj);
console.log(outerObj.number, 'outside'); // 2 lesz az értéke

/////// TÖMB /////////

var outerArr = [1];
// Ez a függvény hivatkozik a tömbre és nem másolja le
function incrementArray(arr) {
    arr[0]++;
    console.log(arr[0], 'in the function');
}

incrementArray(outerArr);
console.log(outerArr[0], 'outside'); // 2 lesz az értéke