// 1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
// e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que 
// calcule e escreva o número de anos necessários para que a população do p do país A ultrapasse ou iguale a 
// população do país B, mantidas as taxas de crescimento.

var populacao_A = 80000;
var populacao_B = 200000;

const taxa_crescimento_A = 0.03;
const taxa_crescimento_B = 0.015;

var anos = 0;

for(let i = 0; i < anos; i++){
    if (populacao_A < populacao_B){
        populacao_A = parseInt(populacao_A * (1 + taxa_crescimento_A));
        populacao_B = parseInt(populacao_B * (1 + taxa_crescimento_B));
        anos++;
    }
    console.log("anos:" + anos , "populacao_A:" + populacao_A, "populacao_B:" + populacao_B);
}