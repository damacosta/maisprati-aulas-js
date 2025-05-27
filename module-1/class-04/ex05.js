// Exemplo de Debug

let valor1 = 10
let valor2 = 2
let operador = "/"
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