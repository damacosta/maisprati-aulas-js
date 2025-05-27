const prompt = require('prompt-sync')()

//Exercício 10 - Criar uma média aritmética com while

// EXECUTAR ESTA SEÇÃO PARA TESTAR A MÉDIA ARITMÉTICA (Versão do Professor 1 - com contador-1):
// Lembre-se que essa versão conta o 0 de parada, por isso precisa do (contador-1).

let resposta= null
let soma = 0
let contador= 0

while(resposta != 0) {

    resposta = Number(prompt('Informe as médias ( ): (Para calcular a média final digite 0):'))

    soma += resposta
    contador ++
}

let mediaFinal = soma / (contador - 1); // Precisa do (contador-1)
console.log(`A média final é: ${mediaFinal.toFixed(2)}`);
