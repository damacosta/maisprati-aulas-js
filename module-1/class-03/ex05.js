// Exercício 2 - Encontrar o maior entre três números

let num1 = 2
let num2 = 1
let num3 = 5

if((num1 > num2) && (num1 > num3)){
    console.log("O primeiro número é o maior!")
} else if ((num2 > num1) && (num2 > num3)){
    console.log("O primeiro número é o maior!")
} else {
    console.log("Os números são iguais ou há empate entre dois ou mais números")
}

let maior = (num1 > num2 && num1 > num3) ? num1 :  (num2 > num3 ? num2 : num3)
console.log(maior)