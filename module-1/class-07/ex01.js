// Aula 07 - Trilhas extras, orientações para atividades e vetores unidimensionais

//Vetores Unidimensionais e Arrays

let listaFrutas = Array()
let listaNomes = ['Giovanna', 'Augusta']

listaFrutas[0] = '10'
listaFrutas[1] = 'morango'
listaFrutas['adocicadas'] = 'pera'

for (let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i])
}

listaFrutas.push() //Adicionar no final do array
listaFrutas.unshift() // Adicionar no começo do array

listaFrutas.pop() //Exclusão do final do array
listaFrutas.shift() //Exclusão no começo do array


console.table(listaFrutas)