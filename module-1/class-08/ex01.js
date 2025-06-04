//Aula 08 - Bubble Sort e Arrays Bidimensionais

/* 
Exercício 18 - Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha. Use métodos de array para calcular. 
- A soma de todos os elementos;
- A média dos elementos.
Gere um novo array chamado pares que contenha apenas os números pares de números.
- Imprima no console:
O array original 'números'. A soma, a média e o array pares.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0
let media = 0
let pares = []

for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}

media = soma/numeros.length

console.log(soma)
console.log(media)
console.log(pares)
