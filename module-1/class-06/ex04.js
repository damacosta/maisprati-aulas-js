const prompt = require('prompt-sync')()

//Exercício 15 - Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sábado). Esse dia dever ser texto. Se for Sábado ou Domingo imprimir "Final de Semana", senão imprimir "Dia Útil".

let diaDaSemana = prompt('Informe o dia da semana: ')
diaDaSemana = diaDaSemana.toLowerCase()
switch(diaDaSemana){
    case 'sabado':
    case 'domingo':
        console.log('Final de Semana')
        break
    default:
        console.log('Dia útil')
        break
}