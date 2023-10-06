// Declarando uma lista de notas
let notas = [];

// Declarando as notas
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota"SS ${i + 1}:`));
    notas.push(nota);
  }

// Calcula a média aritmética das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

  soma += notas[i]
let media = soma / notas.length;  

// Fazendo os cálculos, caso o aluno fique em recuperação
if (media > 4 && media < 7){
    console.log("Você está na recuperação.");
    let notaRec = 9;
    let mediaFinal = (notaRec + media) / 2;
    if (mediaFinal >= 5){
        console.log("Você está aprovado.")
    } else{
        console.log("Você foi reprovado.")
    }
} else if(media >= 7){
    console.log("Você foi aprovado por média.")
    typeof media
}