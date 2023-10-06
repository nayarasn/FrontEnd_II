// 4. Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. 
// Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa 
// permitindo que o usuário digite o salário inicial do funcionário

var ano = 1995;
var ano_atual = 2023;
// var salario_inicial = 1000;
var salario_inicial = parseInt(prompt("Digite seu salário inicial: "))
var aumento = 0.015;

    for (let i = 0; i <= ano_atual; i++){
        if (ano <= 1996){
            var salario_ajustado = salario_inicial * aumento;
        } else if (ano >= 1997) {
            var salario_ajustado = salario_inicial * (2 * aumento);
        } else {
            console.log("O ano informado está incorreto ou não corresponde a base de cálculo");
        }  
    }
console.log(" O salário atual é: " + salario_ajustado);

