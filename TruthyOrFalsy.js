const prompt = require("prompt-sync")();
let verificador=prompt('Digite o que deseja verificar'+" ");

let verificadorConvertido = verificador.toString();



function TruthyOrFalsy (verificadorConvertido) {
    if ((verificadorConvertido === "undefined") || (verificadorConvertido === "null") || (verificadorConvertido === "\"\"") || (verificadorConvertido === "false") || (verificadorConvertido === "0") || (verificadorConvertido === "NaN")) {
        console.log("o valor inserido é considerado um valor Falsy");
        console.log("passou pelo IF");
        
    } 
    else {
        console.log("o valor inserido é considerado um valor Truthy");
        console.log("passou pelo ELSE");
    }
};

TruthyOrFalsy(verificadorConvertido);

console.log(typeof(verificadorConvertido));