const prompt = require('prompt-sync')()

//Calculadora utilizando o switch... case

const valor1 = Number(prompt('Digite o primeiro número: '))
const operador = (prompt('Digite o operador (+, -, *, /): '))
const valor2 = Number(prompt('Digite o segundo número: '))

let resultado = 0;

switch (operador) {
    case '+':
        resultado = valor1 + valor2;
        break
    case '-':
        resultado = valor1 - valor2;
        break
    case '*':
        resultado = valor1 * valor2;
        break
    case '/':
        if (valor2 == 0){
            resultado = "Erro: divisão por zero";
            resultado = undefined
        } else {    
            resultado = valor1/valor2
        }
        break
    default:
        resultado = "Operador inválido!";
        resultado = undefined
        break
    }

    console.log("Resultado: ", resultado)