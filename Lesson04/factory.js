// Ez az ajánlott módszer objectumok létrehozására
function carFactory(type, color, km) {
    var km = km; // Elrejtem a változót, hogy kívülről ne lehessen megváltoztatni

    function getKm() {
        return km;
    }

    function ride(journeyLength) {
        km += journeyLength;
    }

    return {
        color: color,
        type: type,
        getKm: getKm,
        ride: ride
    };
}

var skoda = carFactory('Skoda', 'pruple', 1000);
var lada = carFactory('Lada', 'red', 188000);
skoda.ride(30);
console.log(skoda);
console.log(skoda.getKm());
console.log(lada.getKm());