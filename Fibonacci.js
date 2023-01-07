const prompt = require("prompt-sync")();
let n = parseInt(prompt('Digite um número positivo' + " "));

let fibonacci = [0,1];
    
function listFibonacci(n) {
  for (let i = 1; i < n; i++) {
            fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        }
        console.log(fibonacci);
    }

listFibonacci(n);
