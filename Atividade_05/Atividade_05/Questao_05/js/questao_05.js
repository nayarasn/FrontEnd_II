// 5. Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido

raio = parseFloat(prompt("Digite o raio: "))

function perimetro(raio) {
    var perimetro = 3.14 * raio * 2;
    return perimetro;
}
   
function area(raio) {
    var area = 3.14 * raio * raio;
    return area;
} 

perimetro_arredondado = perimetro.toFixed(2);
area_arredondada = area.toFixed(2);

console.log("O raio informado foi " + raio + " seu perímetro é " + perimetro_arredondado + " sua área é " + area_arredondada);