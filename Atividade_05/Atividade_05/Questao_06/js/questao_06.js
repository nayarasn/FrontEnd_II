// 6. Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, 
// tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// ▪ C = Capital inicial investido
// ▪ i = Taxa de juros, em percentual
// ▪ t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais

var capitalInicial = parseFloat(prompt("Digite o capital inicial: "));
var taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal: "));
var tempoMeses = parseInt(prompt("Informe o tempo em meses do investimento: ")) 

function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
    var taxaDecimal = taxaJuros / 100;
    var montante = capitalInicial * ((1 + taxaDecimal) ^ tempoMeses);
    montante = parseFloat(montante.toFixed(2));
    return montante;
}

console.log("O retorno do investimento é: " + montante);