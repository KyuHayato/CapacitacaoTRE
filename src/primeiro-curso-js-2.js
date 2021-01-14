console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const flagEstaAcompanhada = true;
listaDeDestinos.push(`Pernambuco`) // adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || flagEstaAcompanhada) {
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
    console.log("Tudo certo, venda efetuada com sucesso!");

} else {
    console.log("Esse comprador é menor de idade e está sem acompanhamento!");
}




