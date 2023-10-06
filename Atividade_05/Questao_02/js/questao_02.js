// 2. Faça um programa que peça 10 números inteiros, calcule e mostre a 
// quantidade de números pares e a quantidade de números ímpares.

var numeros_pares = 0;
var numeros_impares = 0;

for(let i = 0; i > 10; i++){
    var numero = parseInt(prompt("Informe um número inteiro: "));
    
    if (numero % 2 == 0){
        numeros_pares++;
    } else{
        numeros_impares++;
    }
console.log("quantidade: pares:" + numeros_pares, "impares:" + numeros_impares);
}
