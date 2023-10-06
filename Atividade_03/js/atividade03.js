// Declaração de variáveis e listas
let nomes = [];
let alturas = [];
let generos = [];
let soma_altura_homens = 0;
let qtd_homens = 0;
let qtd_mulheres = 0;

// Coleta de informações
for(let i = 0; i <= 3 ; i++){
    let nome = prompt("Digite seu nome: ");
    nomes.push(nome);
    let altura = parseFloat(prompt("Digite sua altura: "));
    alturas.push(altura);
    let genero = prompt("Digite seu gênero F (para Feminino) ou M (para Masculino)): ").toUpperCase();
    generos.push(genero);

// Maior e menor altura 

let maior_altura = -1;
let nome_maior_altura = "";
let menor_altura = Infinity;
let nome_menor_altura = "";

for(let i = 0; i <= 3 ; i++){
    if (alturas[i] > maior_altura){
        maior_altura = alturas[i];
        nome_maior_altura = nomes[i];
    }

    if (alturas[i] < menor_altura){
        menor_altura = alturas[i];
        nome_menor_altura = nomes[i];
    }

    if (generos[i] == "M"){
        soma_altura_homens += alturas[i];
        qtd_homens += 1;
        media_altura_homens = soma_altura_homens / qtd_homens;
    }

    if (generos[i] == "F"){
        qtd_mulheres += 1;
    }

}

// Exibir maior e menor altura
console.log("O nome da maior altura é " + nome_maior_altura + "A maior altura é " + maior_altura);
console.log("O nome da menor altura é " + nome_menor_altura + "A menor altura é " + menor_altura);

// Exibir a media da altura dos homens 
 if (qtd_homens > 0){
    console.log("A media da altura dos homens é " + media_altura_homens);
 } else {
    console.log("Nenhum homens foi inserido para o calculo da media das alturas");
 }

// Exibir quantidade de mulheres

console.log("Foram informadas " + qtd_mulheres + " mulheres");

}