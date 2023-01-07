const prompt = require("prompt-sync")();
let velocidadeAtual=parseInt(prompt('Digite o valor da Velocidade Atual'+" "));
let velocidadeMaximaPermitida=parseInt(prompt('Digite o valor da velocidade máxima permitida no trecho'+" "));


function MultaPorAltaVelocidade (velocidadeAtual,velocidadeMaximaPermitida) {
    if (velocidadeAtual > velocidadeMaximaPermitida) {
        console.log("O motorista será multado por execesso de velocidade");
        console.log("passou pelo IF");
        //let verificador = velocidadeAtual > velocidadeMaximaPermitida;
        //console.log(verificador);
        //let teste = velocidadeAtual + velocidadeMaximaPermitida;
        //console.log(teste);
    } 
    else {
        console.log("Velocidade permitida para o trecho");
        //console.log("passou pelo ELSE");
    }
    
};

MultaPorAltaVelocidade(velocidadeAtual,velocidadeMaximaPermitida);