// 3. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

var numeros = [-1, 0, 1];
// Qualquer número comparado sera considerado na atribuiçao de valores
var menor = Infinity;
var maior = -Infinity;
var soma = 0;

for (let i = 0; i <numeros.length; i++){
    const numero = numeros[i];
    if (numero > maior){
        maior = numero;
    }
    if (numero < menor){
        menor = numero;
    }
    soma = soma + numero;
}
console.log("Maior:" + maior, "Menor:" + menor, "Soma:" + soma);