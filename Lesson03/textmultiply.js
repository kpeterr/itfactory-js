/*
Adott szöveg annyiszor egymáshoz összefűzése,
amennyit megadok neki
*/
function textmultiply(number, text) {
    var output = '';
    for (var i = 0; i < number; i++) {
        output += text;
    }
    return output;
}

console.log(textmultiply(3, 'kutya'));