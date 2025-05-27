const prompt = require('prompt-sync')()

//Exercício 10 - Criar uma média aritmética com do... while

// EXECUTAR ESTA SEÇÃO PARA TESTAR A MÉDIA ARITMÉTICA (Versão do Professor 2 - com IF):
// Essa versão é mais robusta, pois o IF impede a contagem do 0 de parada.

let resposta = null; // null para o 'do...while' ou 0 para o 'while' puro
let soma = 0;
let contador = 0;

console.log("\n--- Calculadora de Média (Professor - v2 COM IF) ---");
console.log("Digite os números. Digite 0 para parar e ver a média.");

do {
    resposta = Number(prompt('Informe as médias (v2): (Para calcular a média final digite 0):'));
    soma += resposta; // O 0 ainda é somado (mas não afeta a soma)

    if(resposta !== 0) { // SÓ conta se não for o 0 de parada!
        contador++;
    }

} while(resposta !== 0); // Continua enquanto a resposta não for 0

let mediaFinal = soma / (contador); // Não precisa mais do (contador-1)
console.log(`A média final é: ${mediaFinal}`);
