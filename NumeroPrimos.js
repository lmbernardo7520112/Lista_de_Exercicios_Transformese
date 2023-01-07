const prompt = require("prompt-sync")();
let numeroDigitado = parseInt(prompt('Digite um número positivo' + " "));

function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}



for (var i = 2; i < numeroDigitado; i++) if (primeNumber(i)) console.log(i);