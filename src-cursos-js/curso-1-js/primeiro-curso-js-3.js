console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Pernambuco`);


const idadeComprador = 17;
const flagEstaAcompanhada = true;
const temPassagemComprada = true;
const destino = listaDeDestinos[3];

// adicionando um item na lista
console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || flagEstaAcompanhada;
// let contador = 0;
let destinoExiste = false;
/* while (contador < listaDeDestinos.length) {
    console.log(listaDeDestinos[contador]);
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;

} */
let contador = 0;
for(contador;contador < listaDeDestinos.length;contador++) {
    console.log(listaDeDestinos[contador]);
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    
}
console.log("Destino existe: ", destinoExiste);
console.log("O destino é: ",listaDeDestinos[contador]);

/* console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}
 */
// console.log(listaDeDestinos);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}




