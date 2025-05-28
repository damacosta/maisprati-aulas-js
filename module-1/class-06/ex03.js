const prompt = require('prompt-sync')()

// Exercício 14 - "A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:

/*
a) O número de alunos reprovados na turma C.
b) O número de alunos reprovados na turma D.
c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

[Exemplo de dados de entrada]
10 (percentual de alunos reprovados na turma C)
85 (percentual de alunos aprovados na turma D)

[Saída para os dados de entrada acima]
6 (quantidade de alunos reprovados na turma C)
3 (quantidade de alunos reprovados na turma D)
11.25 (percentual de alunos reprovados em relação ao total de alunos das duas)
*/

let turmaC = 60
let turmaD = 20

let percentualReprovadosC = Number(prompt('Escreva o percentual de alunos reprovados na turma C: '))
let percentualAprovadosD = Number(prompt('Escreva o percentual de alunos aprovados na turma D: '))

let qtdReprovadosC = (turmaC * percentualReprovadosC)/100
let qtdReprovadosD = ((100 - percentualAprovadosD) * turmaD)/100

let totalAlunos = turmaC + turmaD

let relacaoReprovadosTotal = ((qtdReprovadosC + qtdReprovadosD) / totalAlunos) * 100

console.log('A quantidade de alunos reprovados na turma C é de: ', qtdReprovadosC)

console.log('A quantidade de alunos reprovados na turma D é de: ', qtdReprovadosD)

console.log('A quantidade de alunos reprovados em relação ao total de alunos das turmas é de: ', relacaoReprovadosTotal)