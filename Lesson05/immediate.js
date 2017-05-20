// Ezzel lyukakat tudunk elhelyezni a programunkba, hogy mást is le tudjuk futtatni közben
setImmediate(function() {
    console.log('Immediate');
})

setTimeout(function() {
    console.log('3 seconds later');
}, 3000);

var count = 1245128;
function countDown() {
    if (count > 0) {
        count--;
        setImmediate(countDown);
    }
}
countDown();

console.log('End');