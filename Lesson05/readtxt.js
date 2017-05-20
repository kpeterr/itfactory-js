/*
Egy olyan függvényt szeretnénk, aminek az első
paramétere a beolvasni kívánt fájl neve;
a második paramétere a beolvasott tartalom
*/

var fs = require('fs');

function readTxt(filename, callback) {
    fs.readFile(filename + '.txt', function(err, content) {
        if (err) {
            return callback(err); // A return-t fontos beleírni
            // Így állítja meg a program futását error-nál
        }
        return callback(null, content.toString());
    });
}

readTxt('my-file', console.log);
readTxt('macska', console.log);