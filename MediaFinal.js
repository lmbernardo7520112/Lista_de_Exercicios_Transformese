const prompt = require("prompt-sync")();
let primeiraNota=parseInt(prompt('Digite a primeira nota'+" "));
let segundaaNota=parseInt(prompt('Digite a segunda nota'+" "));
let terceiraNota=parseInt(prompt('Digite a terceira nota'+" "));
let quartaNota=parseInt(prompt('Digite a quarta nota'+" "));

let array = [primeiraNota, segundaaNota, terceiraNota, quartaNota];
let somaNotas = array.reduce((somaNotas, atual) => {return somaNotas + atual});
let media = (somaNotas / array.length);

console.log('A media aritimética das quatro notas é igual a:', media);

function MediaFinal () {
    if (media >= 6.0) {
        console.log('APROVADO');
        console.log('Passou aqui 1');
        
    }
    else if ((media < 6.0) && (media >= 3.0)) {
        console.log('EXAME');
        console.log('Passou aqui 2');
        //console.log((media < 6.0) || (media >= 3.0));
       // console.log(media < 6.0);
        //console.log(media >= 3.0);
        
    }
    else {
        console.log('RETIDO');
        console.log('Passou aqui 3');
        
    }
};


MediaFinal();
