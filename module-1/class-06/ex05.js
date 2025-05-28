const prompt = require('prompt-sync')()

// Exercício 16 - Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

let valor
do {
    valor = Number(prompt('Informe um valor: '))

    if(valor > 0){
        console.log('Positivo')
    } else if(valor == 0){
        break
    } else {
        console.log('Negativo')
    }
} while (valor !== 0)