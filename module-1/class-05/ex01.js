const prompt = require('../../../utils/prompt');

// Aula 05 - Estruturas de Controle: Laços de Repetição (for, while, do... while)

// Exercício 7 - Criar uma calculadora com while

let numeroTabuada = Number(prompt('Digite o número para ver a tabuada: '))
let contadora = 0

while (contadora <= 10){
    console.log(`${numeroTabuada} x ${contadora} = ${numeroTabuada * contadora}`)
   
    contadora++
}