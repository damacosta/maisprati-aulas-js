const prompt = require('prompt-sync')()

// Exercício 13 - Escreva um algoritmo para ler o número de eleitores de um munícipio, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

let totalEleitores = Number(prompt('Informe o número total de eleitores:'))
let votosEmBranco = Number(prompt('Informe o número de votos brancos:'))
let votosNulos = Number(prompt('Informe o número de votos nulos:'))
let votosValidos = Number(prompt('Informe o número de votos válidos:'))

console.log('O percentual de votos em branco é: ', (votosEmBranco/totalEleitores) * 100).toFixed(2)
console.log('O percentual de votos nulos é: ', (votosNulos/totalEleitores) * 100 ).toFixed(2)
console.log('O percentual de votos válidos é: ', (votosValidos/totalEleitores) * 100).toFixed(2)

