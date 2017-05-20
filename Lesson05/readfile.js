var fs = require('fs'); // File System modul meghívása

fs.readFile('my-file.txt', function(err, content) { // Call back függvény
    console.log(content.toString());
    console.log('REAL END');
    console.log(err);
});

// Az előbb kiderül, hpgy nincs ilyen fájl, mint az előző fájl beolvasása
fs.readFile('kutyafule.txt', function(err, content) {
    console.log(err);
});

console.log('END');