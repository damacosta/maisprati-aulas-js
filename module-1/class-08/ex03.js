// Exercício 19 - Ordene o array numeros em ordem crescente

let numeros = [3, 6, 1, 2, -3]
let n = numeros.length

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - 1; j++){
        if(numeros[j] > numeros[j + 1]){
            let temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}

console.log(numeros)

console.log(numeros.sort((a, b) => a - b))
