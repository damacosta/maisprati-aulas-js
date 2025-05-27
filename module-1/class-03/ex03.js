//Simulação de Notas

const nota = 95;

if (nota < 60) {
  console.log("Reprovado");
} else if (nota > 90) {
  console.log("Super aluno!");
} else {
  console.log("Aprovado");
}

// Exemplo ternário
(nota < 60) ? console.log("Reprovado") : console.log("Aprovado");