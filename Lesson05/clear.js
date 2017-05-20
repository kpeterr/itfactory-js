// Egy timeout-ot meg is lehet állítani
var timeout = setTimeout(function() {
    console.log('Hello from the future!');
}, 5000);

// A setTimeout nem teljesen pontos, tehát nem 5 vagy 3 másodperc pontosan
// Időprecíziós dolgokra nem használható

setTimeout(function() {
    clearTimeout(timeout);
}, 3000);