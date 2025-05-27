const prompt = require('prompt-sync')()

//Aula 04 - Estruturas de Controle: Condicionais (if, else, switch)

//Exercício 3 - Façam uma calculadora simples utilizando entrada de usuário.

let valor1 = Number(prompt("Insira o primeiro valor: "))
let operador = prompt('Informe a operação desejada: (+, -, /, *): ')
let valor2 = Number(prompt("Insira o segundo valor: "))
let resultado = 0

if (operador === '+'){
    resultado = valor1 + valor2
} else if(operador === '-'){
    resultado = valor1 - valor2
} else if(operador === '*'){
    resultado = valor1 * valor2
} else if(operador === '/'){
    if(valor2 !== 0){
    resultado = valor1/valor2
    } else {
        console.log('Erro: divisão por zero')
        resultado = undefined
    }
} else {
    console.log('Operação inválida')
    resultado = undefined
}

if(resultado !== undefined){
    console.log("Resultado: ", resultado)
}
