console.log("My primary program in JS, hello JS");

const idade = 26;

console.log("idade");
console.log(idade);
console.log(idade+2);
console.log(idade-2);
console.log(idade/2);

const idadeSomada = idade+2;
console.log(idadeSomada);

const primeiroNome = "Zezinho";
const sobrenome = "Ruanito";

//console.log(nome + " " + sobrenome)
console.log(primeiroNome, sobrenome)
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);


let contador = 0;
contador = contador +1
let nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
nomeCompleto = 2;

console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Pernambuco`) // adicionando um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);