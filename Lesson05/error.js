// Ami később történik azt nem szabad try/catch-be tenni
try {
    setTimeout(function() {
        throw new Error('Ajjajjajj!');
        console.log('END');
    }, 2000);
} catch(e) {
    console.log('No problem');
}