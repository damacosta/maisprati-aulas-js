//Aula 03 - Variáveis, Tipos de Dados e Operadores em JavaScript 

//Typeof

console.log(typeof("Olá, mundo!"))
console.log(typeof(1.5))
console.log(typeof(null))

// Operadores de comparação
console.log(10 > 5)        // true
console.log(10 < 5)        // false
console.log(10 <= 5)       // false
console.log(10 >= 5)       // true
console.log(10 == 5)       // false
console.log(10 == 10)      // true
console.log(10 == '10')    // true (comparação não estrita)
console.log(10 === '10')   // false (comparação estrita)

// Operadores lógicos
console.log((10 < 5) && (10 > 2))       // false && true => false
console.log((10 < 5) && !(10 > 2))      // false && false => false
console.log((10 > 2) && (10 < 5))       // true && false => false
console.log((10 > 2) || (10 < 5))       // true || false => true
console.log(!(10 > 2) || (10 < 5))      // false || false => false

// Desigualdade comum e estrita
console.log(10 != 10)       // false (mesmo valor, tipo diferente)
console.log(10 !== '10')    // true (tipos diferentes)