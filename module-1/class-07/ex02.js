let listaFrutas = Array(); // PASSO 1
// listaFrutas é inicialmente: [] (um array vazio)

let listaNomes = ['Giovanna', 'Augusto']; // PASSO 2
// listaNomes é: ['Giovanna', 'Augusto'] (esse array não afeta listaFrutas)

listaFrutas[0] = 10; // PASSO 3
// listaFrutas é: [10] (coloca o número 10 no índice 0)

listaFrutas[1] = 'morango'; // PASSO 4
// listaFrutas é: [10, 'morango'] (coloca 'morango' no índice 1)

listaFrutas['adocicadas'] = 'pera'; // PASSO 5
// listaFrutas é: [10, 'morango', adocicadas: 'pera']
// Lembre-se: 'adocicadas' é uma PROPRIEDADE do objeto array, não um elemento numerado.
// O .length do array continua sendo 2 neste ponto.

// O loop 'for' viria aqui, imprimindo 10 e 'morango'.
for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i]); // Imprime 10, depois 'morango'
// }

listaFrutas.push('melancia'); // PASSO 6: Onde o aluno perguntou sobre o push!
// O método push() adiciona 'melancia' no FINAL do array.
// O array listaFrutas, que era [10, 'morango'], agora se torna:
// [10, 'morango', 'melancia', adocicadas: 'pera']
// O .length do array agora é 3.

listaFrutas.unshift('Laranja'); // PASSO 7
// O método unshift() adiciona 'Laranja' no INÍCIO do array.
// Todos os elementos existentes são "empurrados" uma posição para a direita.
// O array listaFrutas, que era [10, 'morango', 'melancia', adocicadas: 'pera'], agora se torna:
// ['Laranja', 10, 'morango', 'melancia', adocicadas: 'pera']
// O .length do array agora é 4.

listaFrutas.pop(); // PASSO 8
// O método pop() REMOVE o ÚLTIMO elemento do array.
// O array listaFrutas, que era ['Laranja', 10, 'morango', 'melancia', adocicadas: 'pera'], agora se torna:
// ['Laranja', 10, 'morango', adocicadas: 'pera']
// A 'melancia' foi removida. O .length do array agora é 3.

listaFrutas.shift(); // PASSO 9
// O método shift() REMOVE o PRIMEIRO elemento do array.
// O array listaFrutas, que era ['Laranja', 10, 'morango', adocicadas: 'pera'], agora se torna:
// [10, 'morango', adocicadas: 'pera']
// A 'Laranja' foi removida. O .length do array agora é 2.

console.table(listaFrutas); // PASSO 10: O resultado final!