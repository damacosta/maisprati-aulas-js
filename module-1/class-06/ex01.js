const prompt = require('prompt-sync')()

//Aula 06 - Aula de revisão e exercícios práticos

// Exercício 12 - Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit

let temperatura = (Number(prompt('Informe a temperatura em graus Celsius: ')))

let fahrenheit = (temperatura * 9/5) + 32

console.log(`A temperatura em Fahrenheit é: ${fahrenheit}º`)