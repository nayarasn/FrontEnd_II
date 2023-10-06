var nota1 = parseFloat(prompt("Informe a primeira nota:"));
var nota2 = parseFloat(prompt("Informe a segunda nota:"));
var nota3 = parseFloat(prompt("Informe a terceira nota:"));

var media = ((nota1*2)+(nota2*3)+(nota3*5))/(2+3+5);
var media_arredondada = media.toFixed(2);

alert(" Sua média é: " + media_arredondada);
